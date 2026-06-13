import { useState, useEffect } from 'react'
import { ObjectCard } from '../../components/ObjectCard'
import { HypothesisCollector } from '../../components/HypothesisCollector'
import { IceCubeIll } from '../illustrations/IceCubeIll'
import { WaterGlassIll } from '../illustrations/WaterGlassIll'
import { BalloonIll } from '../illustrations/BalloonIll'
import styles from './Scene1Hook.module.css'

const OBJ = [
  { id:'es',    name:'Es batu',     state:'padat', Illustration: IceCubeIll    },
  { id:'air',   name:'Air',         state:'cair',  Illustration: WaterGlassIll },
  { id:'balon', name:'Balon udara', state:'gas',   Illustration: BalloonIll    },
]

export function Scene1Hook() {
  const [ai, setAi] = useState(0)
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement|null
      if (t&&(t.tagName==='INPUT'||t.tagName==='TEXTAREA'||t.isContentEditable)) return
      if (e.key==='ArrowRight'){e.preventDefault();setAi(i=>(i+1)%OBJ.length)}
      else if(e.key==='ArrowLeft'){e.preventDefault();setAi(i=>(i-1+OBJ.length)%OBJ.length)}
    }
    window.addEventListener('keydown',h); return()=>window.removeEventListener('keydown',h)
  }, [])
  return (
    <>
      <div className={styles.question}>Ketiganya mengandung <em>H₂O</em>.<br/>Apa yang berbeda?</div>
      <div className={styles.objects}>
        {OBJ.map((o,i) => (
          <ObjectCard key={o.id} name={o.name} state={o.state}
            Illustration={o.Illustration} active={ai===i} onClick={()=>setAi(i)}/>
        ))}
      </div>
      <HypothesisCollector initial={[
        'Es padat karena beku, air cair, balon udara isi gas yang enggak keliatan.',
        'Es bisa dipegang, air ngalir kalau dituang, udara cuma kerasa tapi enggak ada bentuk.',
      ]}/>
    </>
  )
}
