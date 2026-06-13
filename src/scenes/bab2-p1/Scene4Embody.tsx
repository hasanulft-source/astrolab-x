import { useState } from 'react'
import { ParticleViewer, type ParticleState } from '../../components/ParticleViewer'
import styles from './Scene4Embody.module.css'

const BTNS:{state:ParticleState;label:string;instruction:string}[]=[
  {state:'solid',label:'Padat',instruction:'Berdesak-desakan, tetap di tempat, hanya bergetar.'},
  {state:'liquid',label:'Cair',instruction:'Bergerak pelan, bisa lewat satu sama lain, jangan jauh-jauh.'},
  {state:'gas',label:'Gas',instruction:'Bergerak bebas dan cepat ke segala arah!'},
]

export function Scene4Embody() {
  const [state,setState]=useState<ParticleState>('solid')
  const active=BTNS.find(b=>b.state===state)!
  return (
    <div className={styles.layout}>
      <div className={styles.banner}>
        <div><span className={styles.bannerLabel}>mode</span><span className={styles.bannerText}>Kamu jadi partikel — ikuti gerakan di layar</span></div>
        <div className={styles.instruction}>{active.instruction}</div>
      </div>
      <div className={styles.viewer}><ParticleViewer state={state} size="lg"/></div>
      <div className={styles.buttons}>
        {BTNS.map(b=>(
          <button key={b.state} className={`${styles.btn} ${state===b.state?styles.btnActive:''}`} onClick={()=>setState(b.state)}>
            <span className={styles.btnLabel}>{b.label}</span><span className={styles.btnState}>{b.state}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
