import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import styles from './ParticleViewer.module.css'

export type ParticleState = 'solid' | 'liquid' | 'gas'

interface Props { state: ParticleState; showBonds?: boolean; speed?: number; size?: 'sm' | 'md' | 'lg' }

interface P { home: THREE.Vector3; pos: THREE.Vector3; vel: THREE.Vector3; gx: number; gy: number; gz: number }

const GRID = {
  sm: { c: 3, r: 3, d: 3, spacing: 3.0, cam: 19 },
  md: { c: 4, r: 4, d: 4, spacing: 3.2, cam: 22 },
  lg: { c: 5, r: 4, d: 4, spacing: 3.2, cam: 24 },
}

export function ParticleViewer({ state, showBonds = true, speed = 1, size = 'md' }: Props) {
  const wrapRef  = useRef<HTMLDivElement>(null)
  const stateRef = useRef(state)
  const bondsRef = useRef(showBonds)
  const speedRef = useRef(speed)
  const kickRef  = useRef<(s: ParticleState) => void>(() => {})

  useEffect(() => { stateRef.current = state }, [state])
  useEffect(() => { bondsRef.current = showBonds }, [showBonds])
  useEffect(() => { speedRef.current = speed }, [speed])
  useEffect(() => { kickRef.current(state) }, [state])

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return
    const G = GRID[size]

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0xeef7f7, 0.03)

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100)
    camera.position.set(0, 0, G.cam)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    wrap.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.08
    controls.enablePan = false
    controls.minDistance = 10
    controls.maxDistance = 42
    controls.autoRotate = true
    controls.autoRotateSpeed = 0.6

    scene.add(new THREE.AmbientLight(0xffffff, 0.78))
    const key = new THREE.PointLight(0xffffff, 1.7, 90); key.position.set(10, 12, 18); scene.add(key)
    const rim = new THREE.PointLight(0x7ab2b2, 0.8, 80); rim.position.set(-14, -8, -10); scene.add(rim)

    const geo = new THREE.SphereGeometry(0.85, 24, 24)
    const baseMat = new THREE.MeshPhysicalMaterial({ color: 0x0b7c92, emissive: 0x0b7c92, emissiveIntensity: 0.12, metalness: 0.1, roughness: 0.33, clearcoat: 1.0, clearcoatRoughness: 0.18 })

    const gc = document.createElement('canvas'); gc.width = gc.height = 128
    const g2 = gc.getContext('2d')!
    const grad = g2.createRadialGradient(64, 64, 0, 64, 64, 64)
    grad.addColorStop(0, 'rgba(80,230,255,0.95)')
    grad.addColorStop(0.25, 'rgba(34,211,238,0.55)')
    grad.addColorStop(1, 'rgba(34,211,238,0)')
    g2.fillStyle = grad; g2.fillRect(0, 0, 128, 128)
    const glowTex = new THREE.CanvasTexture(gc)

    const meshes: THREE.Mesh[] = []
    const sprites: THREE.Sprite[] = []
    const parts: P[] = []
    for (let x = 0; x < G.c; x++) for (let y = 0; y < G.r; y++) for (let z = 0; z < G.d; z++) {
      const home = new THREE.Vector3((x-(G.c-1)/2)*G.spacing, (y-(G.r-1)/2)*G.spacing, (z-(G.d-1)/2)*G.spacing)
      const m = new THREE.Mesh(geo, baseMat.clone()); m.position.copy(home); scene.add(m); meshes.push(m)
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.2 }))
      sp.scale.set(4.0, 4.0, 1); m.add(sp); sprites.push(sp)
      parts.push({ home: home.clone(), pos: home.clone(), vel: new THREE.Vector3(Math.random()-.5, Math.random()-.5, Math.random()-.5), gx: x, gy: y, gz: z })
    }

    const pairs: [number, number][] = []
    for (let i = 0; i < parts.length; i++) for (let j = i+1; j < parts.length; j++) {
      const a = parts[i], b = parts[j]
      if (Math.abs(a.gx-b.gx)+Math.abs(a.gy-b.gy)+Math.abs(a.gz-b.gz) === 1) pairs.push([i, j])
    }
    const bondGeo = new THREE.BufferGeometry()
    const bondPos = new Float32Array(pairs.length * 6)
    bondGeo.setAttribute('position', new THREE.BufferAttribute(bondPos, 3))
    const bondMat = new THREE.LineBasicMaterial({ color: 0x0b7c92, transparent: true, opacity: 0 })
    const bondLines = new THREE.LineSegments(bondGeo, bondMat); scene.add(bondLines)

    let bondOpacity = 0
    kickRef.current = (s) => {
      if (s === 'gas') parts.forEach(p => p.vel.set((Math.random()-.5)*2, (Math.random()-.5)*2, (Math.random()-.5)*2))
      else if (s === 'liquid') parts.forEach(p => p.vel.set((Math.random()-.5)*0.8, (Math.random()-.5)*0.8, (Math.random()-.5)*0.8))
    }

    const clock = new THREE.Clock()
    const tmp = new THREE.Vector3()
    const BOUND = 9
    let raf = 0

    const resize = () => {
      const ww = wrap.clientWidth, hh = wrap.clientHeight
      if (ww === 0 || hh === 0) return
      camera.aspect = ww/hh; camera.updateProjectionMatrix(); renderer.setSize(ww, hh)
    }
    resize()
    const ro = new ResizeObserver(resize); ro.observe(wrap)

    const animate = () => {
      raf = requestAnimationFrame(animate)
      // FIX: ambil delta DULU (getElapsedTime consume delta), baru baca elapsedTime
      const dt = Math.min(clock.getDelta(), 0.05)
      const t = clock.elapsedTime
      const s = stateRef.current, sp = speedRef.current

      const targetBond = (s === 'solid' && bondsRef.current) ? 0.5 : 0
      bondOpacity += (targetBond - bondOpacity) * 0.06
      bondMat.opacity = bondOpacity

      parts.forEach((p, i) => {
        if (s === 'solid') {
          tmp.copy(p.home)
          tmp.x += Math.sin(t*3 + i) * 0.12
          tmp.y += Math.cos(t*2.5 + i*1.3) * 0.12
          tmp.z += Math.sin(t*2.8 + i*0.7) * 0.12
          p.pos.lerp(tmp, 0.2)
        } else if (s === 'liquid') {
          p.vel.x += (Math.random()-.5)*0.6*sp
          p.vel.y += (Math.random()-.5)*0.6*sp - 0.04
          p.vel.z += (Math.random()-.5)*0.6*sp
          p.vel.multiplyScalar(0.94)
          p.pos.addScaledVector(p.vel, dt*10*sp)
          const R = 6.5
          if (p.pos.length() > R) { p.pos.setLength(R); p.vel.multiplyScalar(-0.4) }
        } else {
          p.pos.addScaledVector(p.vel, dt*16*sp)
          ;(['x','y','z'] as const).forEach(ax => {
            if (Math.abs(p.pos[ax]) > BOUND) { p.pos[ax] = Math.sign(p.pos[ax])*BOUND; p.vel[ax] *= -1 }
          })
        }
        meshes[i].position.lerp(p.pos, 0.5)
      })

      if (bondOpacity > 0.01) {
        pairs.forEach(([i, j], k) => {
          const a = meshes[i].position, b = meshes[j].position
          bondPos[k*6] = a.x; bondPos[k*6+1] = a.y; bondPos[k*6+2] = a.z
          bondPos[k*6+3] = b.x; bondPos[k*6+4] = b.y; bondPos[k*6+5] = b.z
        })
        bondGeo.attributes.position.needsUpdate = true
      }

      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      controls.dispose()
      geo.dispose(); bondGeo.dispose(); bondMat.dispose(); glowTex.dispose()
      meshes.forEach(m => (m.material as THREE.Material).dispose())
      sprites.forEach(s => (s.material as THREE.Material).dispose())
      renderer.dispose()
      renderer.forceContextLoss()
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement)
    }
  }, [size])

  return <div ref={wrapRef} className={`${styles.viewer} ${styles[size]}`} />
}
