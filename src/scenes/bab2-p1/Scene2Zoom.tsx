import { useState, useEffect, type ComponentType } from 'react'
import { ParticleViewer, type ParticleState } from '../../components/ParticleViewer'
import { IceCubeIll } from '../illustrations/IceCubeIll'
import { WaterGlassIll } from '../illustrations/WaterGlassIll'
import { BalloonIll } from '../illustrations/BalloonIll'
import styles from './Scene2Zoom.module.css'

const OBJ: {id:string;name:string;state:ParticleState;label:string;Illustration:ComponentType}[] = [
  {id:'es',name:'Es batu',state:'solid',label:'padat',Illustration:IceCubeIll},
  {id:'air',name:'Air',state:'liquid',label:'cair',Illustration:WaterGlassIll},
  {id:'balon',name:'Balon udara',state:'gas',label:'gas',Illustration:BalloonIll},
]
const NARR: Record<ParticleState,string[]> = {
  solid:  ['Setiap zat tersusun dari partikel-partikel yang sangat kecil.','Di wujud padat, partikel tersusun rapat dalam pola teratur.','Partikel bergetar di tempat — tidak bisa berpindah posisi.','Itu sebabnya es punya bentuk yang tetap.'],
  liquid: ['Setiap zat tersusun dari partikel-partikel yang sangat kecil.','Di wujud cair, partikel masih berdekatan tapi tidak teratur.','Partikel bisa bergerak melewati satu sama lain — mengalir.','Bentuknya mengikuti wadah, tapi volume tetap.'],
  gas:    ['Setiap zat tersusun dari partikel-partikel yang sangat kecil.','Di wujud gas, jarak antar partikel sangat jauh.','Partikel bergerak bebas dan sangat cepat ke segala arah.','Itu sebabnya gas mengisi seluruh ruang yang tersedia.'],
}

export function Scene2Zoom() {
  const [ai,setAi]=useState(0)
  const [ni,setNi]=useState(0)
  const [bonds,setBonds]=useState(false)
  const obj=OBJ[ai]; const narr=NARR[obj.state]
  useEffect(()=>{setNi(0);if(obj.state!=='solid')setBonds(false)},[ai,obj.state])
  useEffect(()=>{
    const h=(e:KeyboardEvent)=>{
      const t=e.target as HTMLElement|null
      if(t&&(t.tagName==='INPUT'||t.tagName==='TEXTAREA'||t.isContentEditable))return
      if(e.key==='ArrowRight'){e.preventDefault();setAi(i=>(i+1)%OBJ.length)}
      else if(e.key==='ArrowLeft'){e.preventDefault();setAi(i=>(i-1+OBJ.length)%OBJ.length)}
    }
    window.addEventListener('keydown',h);return()=>window.removeEventListener('keydown',h)
  },[])
  return (
    <div className={styles.layout}>
      <div className={styles.tabs}>
        {OBJ.map((o,i)=>{const I=o.Illustration;return(
          <button key={o.id} className={`${styles.tab} ${ai===i?styles.tabActive:''}`} onClick={()=>setAi(i)}>
            <div className={styles.tabIll}><I/></div>
            <div className={styles.tabText}><span className={styles.tabName}>{o.name}</span><span className={styles.tabState}>{o.label}</span></div>
          </button>
        )})}
      </div>
      <div className={styles.main}>
        <div className={styles.viewer}>
          <div className={styles.viewerCanvas}><ParticleViewer state={obj.state} showBonds={bonds} size="md"/></div>
          {obj.state==='solid'&&<label className={styles.toggle}><input type="checkbox" checked={bonds} onChange={e=>setBonds(e.target.checked)}/><span>tampilkan ikatan partikel</span></label>}
        </div>
        <div className={styles.narration}>
          <div className={styles.narrHead}>
            <span className={styles.narrLabel}>narasi</span><div className={styles.narrLine}/>
            <span className={styles.narrCount}>{String(ni+1).padStart(2,'0')}/{String(narr.length).padStart(2,'0')}</span>
          </div>
          <div className={styles.narrList}>
            {narr.slice(0,ni+1).map((n,i)=>(
              <div key={`${obj.id}-${i}`} className={`${styles.narrItem} ${i===ni?styles.narrItemActive:''}`}>{n}</div>
            ))}
          </div>
          {ni<narr.length-1&&<button className={styles.narrNext} onClick={()=>setNi(i=>i+1)}>Lanjut narasi <span className={styles.narrNextArrow}>→</span></button>}
        </div>
      </div>
    </div>
  )
}
