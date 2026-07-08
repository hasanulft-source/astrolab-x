import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene3Category.module.css'
const ITEMS = [
  {nama:'Keyboard', cat:'Input'},{nama:'Mouse', cat:'Input'},{nama:'Microphone', cat:'Input'},{nama:'Scanner', cat:'Input'},
  {nama:'CPU', cat:'Proses'},{nama:'RAM', cat:'Proses'},{nama:'GPU', cat:'Proses'},
  {nama:'Monitor', cat:'Output'},{nama:'Printer', cat:'Output'},{nama:'Speaker', cat:'Output'},
  {nama:'HDD', cat:'Penyimpanan'},{nama:'SSD', cat:'Penyimpanan'},{nama:'Flashdisk', cat:'Penyimpanan'},
]
const CATS = ['Input','Proses','Output','Penyimpanan']
const CAT_DESC:Record<string,string> = {Input:'Memasukkan data ke komputer',Proses:'Mengolah data',Output:'Menampilkan hasil',Penyimpanan:'Menyimpan data'}
export function Scene3Category({ onUnlock }: DiscoverySceneProps) {
  const [answers, setAnswers] = useState<Record<string,string>>({})
  const [checked, setChecked] = useState(false)
  const done = Object.keys(answers).length===ITEMS.length
  const check = () => { setChecked(true); onUnlock() }
  return (
    <>
      <p className={styles.prompt}>4 kategori komponen. <em>Klasifikasikan tiap perangkat ke kategori yang tepat.</em></p>
      <div className={styles.catLegend}>
        {CATS.map(c=><div key={c} className={styles.legItem}><b>{c}</b>: {CAT_DESC[c]}</div>)}
      </div>
      <div className={styles.grid}>
        {ITEMS.map(item=>{
          const a=answers[item.nama];const r=checked;const correct=a===item.cat
          return (
            <div key={item.nama} className={`${styles.card} ${r?(correct?styles.ok:styles.wr):''}`}>
              <div className={styles.iNama}>{item.nama}</div>
              <select disabled={checked} className={styles.sel} value={a||''} onChange={e=>setAnswers(p=>({...p,[item.nama]:e.target.value}))}>
                <option value="">— pilih —</option>
                {CATS.map(c=><option key={c} value={c}>{c}</option>)}
              </select>
              {r&&!correct&&<div className={styles.corr}>→ {item.cat}</div>}
            </div>
          )
        })}
      </div>
      {done&&!checked&&<button className={styles.checkBtn} onClick={check}>Cek →</button>}
      {checked&&<div className={styles.score}>Benar: {ITEMS.filter(i=>answers[i.nama]===i.cat).length}/{ITEMS.length}</div>}
    </>
  )
}
