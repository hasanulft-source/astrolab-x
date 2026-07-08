import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene2Classify.module.css'
const ITEMS = [
  {info:'Nomor HP pribadi', ans:'privat', why:'Bisa dipakai untuk spam, penipuan, pelacakan. Jangan sebar publik.'},
  {info:'Hobi & minat', ans:'publik', why:'Aman dibagikan — membangun koneksi. Tidak membahayakan.'},
  {info:'Alamat rumah lengkap', ans:'privat', why:'Sangat berbahaya jika publik — risiko keamanan fisik.'},
  {info:'Karya/prestasi', ans:'publik', why:'Justru bagus dibagikan — membangun portofolio & reputasi positif.'},
  {info:'Nama sekolah + jadwal', ans:'privat', why:'Kombinasi ini mengungkap kapan & di mana kamu berada. Risiko.'},
  {info:'Pendapat tentang buku/film', ans:'publik', why:'Aman — ekspresi diri yang wajar.'},
  {info:'Foto KTP/kartu pelajar', ans:'privat', why:'Bisa dipakai pencurian identitas. Jangan pernah posting.'},
  {info:'Password / PIN', ans:'privat', why:'Tidak pernah dibagikan ke siapapun, bahkan teman dekat.'},
]
export function Scene2Classify({ onUnlock }: DiscoverySceneProps) {
  const [answers, setAnswers] = useState<Record<string,string>>({})
  const [checked, setChecked] = useState(false)
  const done = Object.keys(answers).length===ITEMS.length
  const check = () => { setChecked(true); onUnlock() }
  return (
    <>
      <p className={styles.prompt}>Tidak semua info berbahaya. <em>Pilah: mana yang PRIVAT (rahasia) dan mana yang PUBLIK (aman dibagikan)?</em></p>
      <div className={styles.grid}>
        {ITEMS.map(item=>{
          const a=answers[item.info];const r=checked;const correct=a===item.ans
          return (
            <div key={item.info} className={`${styles.card} ${r?(correct?styles.ok:styles.wr):''}`}>
              <div className={styles.info}>{item.info}</div>
              <div className={styles.btns}>
                <button disabled={checked} className={`${styles.b} ${a==='privat'?styles.bSelP:''} ${r&&item.ans==='privat'?styles.bAns:''}`} onClick={()=>setAnswers(p=>({...p,[item.info]:'privat'}))}>Privat</button>
                <button disabled={checked} className={`${styles.b} ${a==='publik'?styles.bSelU:''} ${r&&item.ans==='publik'?styles.bAns:''}`} onClick={()=>setAnswers(p=>({...p,[item.info]:'publik'}))}>Publik</button>
              </div>
              {r&&<div className={styles.why}>{item.why}</div>}
            </div>
          )
        })}
      </div>
      {done&&!checked&&<button className={styles.checkBtn} onClick={check}>Cek jawaban →</button>}
      {checked&&<div className={styles.score}>Benar: {ITEMS.filter(i=>answers[i.info]===i.ans).length}/{ITEMS.length}</div>}
    </>
  )
}
