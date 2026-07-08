import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene4Policy.module.css'
const RULES = [
  {q:'Siapa yang boleh melihat postinganmu?', opts:['Semua orang (publik)','Hanya teman yang kukenal','Hanya keluarga']},
  {q:'Info apa yang TIDAK akan pernah kamu posting?', opts:['Alamat & jadwal harian','Nomor HP','Foto dokumen identitas']},
  {q:'Sebelum posting foto orang lain, kamu akan...', opts:['Minta izin dulu','Posting saja kalau lucu','Sensor wajahnya']},
  {q:'Password-mu akan kamu...', opts:['Ganti berkala & unik tiap akun','Pakai yang sama semua biar mudah','Simpan di catatan HP']},
]
export function Scene4Policy({ onUnlock }: DiscoverySceneProps) {
  const [choices, setChoices] = useState<Record<number,string>>({})
  const done = Object.keys(choices).length===RULES.length
  const pick = (i: number, o: string) => {
    setChoices(p=>{
      const n = {...p,[i]:o}
      if (Object.keys(n).length===RULES.length) onUnlock()
      return n
    })
  }
  return (
    <>
      <p className={styles.prompt}>Rancang <em>kebijakan privasi pribadimu.</em> Tidak ada jawaban benar/salah mutlak — tapi setiap pilihan punya konsekuensi.</p>
      <div className={styles.list}>
        {RULES.map((r,i)=>(
          <div key={i} className={styles.rule}>
            <div className={styles.q}>{r.q}</div>
            <div className={styles.opts}>
              {r.opts.map(o=>(
                <button key={o} className={`${styles.opt} ${choices[i]===o?styles.sel:''}`} onClick={()=>pick(i,o)}>{o}</button>
              ))}
            </div>
          </div>
        ))}
      </div>
      {done&&<div className={styles.result}>
        <b>Kebijakan privasimu tersusun.</b> Ini bukan aturan dari guru — ini keputusan sadarmu sendiri. Simpan dan jalankan. Privasi bukan tentang paranoia, tapi tentang kontrol atas informasi dirimu.
      </div>}
    </>
  )
}
