import { useMemo } from 'react'
import styles from './ConstellationViewer.module.css'

interface CBranch { id: string; name: string; icon: string }
interface CConn { a: string; b: string }
interface Props {
  branches: CBranch[]
  selected?: string | null
  onSelect?: (id: string) => void
  connections?: CConn[]
  activeConn?: CConn | null
  litAll?: boolean
}

const W = 820, H = 540, CX = 410, CY = 256, RX = 312, RY = 182

export function ConstellationViewer({ branches, selected = null, onSelect, connections = [], activeConn = null, litAll = false }: Props) {
  const pos = useMemo(() => {
    const m: Record<string, { x: number; y: number }> = {}
    branches.forEach((b, i) => {
      const ang = (-90 + (360 / branches.length) * i) * Math.PI / 180
      m[b.id] = { x: CX + RX * Math.cos(ang), y: CY + RY * Math.sin(ang) }
    })
    return m
  }, [branches])

  const connHot = (c: CConn) =>
    litAll || (!!activeConn && ((activeConn.a === c.a && activeConn.b === c.b) || (activeConn.a === c.b && activeConn.b === c.a)))
  const nodeHot = (id: string) =>
    litAll || selected === id || (!!activeConn && (activeConn.a === id || activeConn.b === id))
  const nodeDim = (id: string) =>
    !litAll && ((selected && selected !== id) || (activeConn && activeConn.a !== id && activeConn.b !== id)) ? true : false

  return (
    <div className={styles.wrap}>
      <svg viewBox={`0 0 ${W} ${H}`} className={styles.svg}>
        <defs>
          <radialGradient id="cv-node" cx="40%" cy="32%">
            <stop offset="0%" stopColor="#5ab9c9" /><stop offset="48%" stopColor="#088395" /><stop offset="100%" stopColor="#09637E" />
          </radialGradient>
          <radialGradient id="cv-core" cx="40%" cy="32%">
            <stop offset="0%" stopColor="#8fd4df" /><stop offset="50%" stopColor="#0b7c92" /><stop offset="100%" stopColor="#09637E" />
          </radialGradient>
          <filter id="cv-shadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="2.5" stdDeviation="3.5" floodColor="#0f3d49" floodOpacity="0.18" />
          </filter>
        </defs>

        {branches.map(b => (
          <line key={'spoke' + b.id} x1={CX} y1={CY} x2={pos[b.id].x} y2={pos[b.id].y}
            stroke="#bcdde2" strokeWidth={2} opacity={litAll ? 0.9 : 0.6} strokeLinecap="round" />
        ))}

        {connections.map((c, i) => {
          const hot = connHot(c)
          return <line key={'conn' + i} x1={pos[c.a].x} y1={pos[c.a].y} x2={pos[c.b].x} y2={pos[c.b].y}
            stroke={hot ? '#088395' : '#7AB2B2'} strokeWidth={hot ? 3 : 1.6} opacity={hot ? 0.95 : 0.4}
            className={hot ? styles.connHot : ''} strokeLinecap="round" />
        })}

        <g filter="url(#cv-shadow)"><circle cx={CX} cy={CY} r={58} fill="url(#cv-core)" /></g>
        <text x={CX} y={CY - 2} className={styles.coreLabel} textAnchor="middle">IPA</text>
        <text x={CX} y={CY + 18} className={styles.coreSub} textAnchor="middle">Ilmu Pengetahuan Alam</text>

        {branches.map(b => {
          const p = pos[b.id]
          return (
            <g key={b.id} className={onSelect ? styles.nodeClickable : styles.node}
               opacity={nodeDim(b.id) ? 0.4 : 1} onClick={() => onSelect?.(b.id)}>
              {nodeHot(b.id) && <circle cx={p.x} cy={p.y} r={50} fill="none" stroke="#088395" strokeWidth={2} opacity={0.6} className={styles.ring} />}
              <g filter="url(#cv-shadow)"><circle cx={p.x} cy={p.y} r={38} fill="url(#cv-node)" /></g>
              <text x={p.x} y={p.y + 9} className={styles.icon} textAnchor="middle">{b.icon}</text>
              <text x={p.x} y={p.y + 68} className={styles.label} textAnchor="middle">{b.name}</text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
