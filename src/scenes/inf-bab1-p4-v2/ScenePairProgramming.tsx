import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './ui.module.css'
const PSEUDOLINES = [
  {line:'MULAI',scratch:'when green flag clicked'},
  {line:'  SIMPAN daftarSiswa = [nama1, nama2, ...]',scratch:'set [daftarSiswa] to []  + set each name'},
  {line:'  SIMPAN indeks = 0',scratch:'set [indeks] to 0'},
  {line:'  ULANGI SELAMA indeks < jumlahSiswa',scratch:'repeat until <indeks = jumlahSiswa>'},
  {line:'    TAMPILKAN "Piket hari ini:" + daftarSiswa[indeks]',scratch:'say (join [Piket:] (item indeks of daftarSiswa))'},
  {line:'    HITUNG indeks + 1',scratch:'change [indeks] by 1'},
  {line:'  SELESAI ULANGI',scratch:'(end repeat block)'},
  {line:'SELESAI',scratch:'(end of script)'},
]
export function ScenePairProgramming({ onUnlock }: DiscoverySceneProps) {
  const [done, setDone] = useState<boolean[]>(Array(PSEUDOLINES.length).fill(false))
  const doneCount = done.filter(Boolean).length
  const pct = Math.round(doneCount/PSEUDOLINES.length*100)
  const toggle = (i: number) => {
    setDone(d => {
      const n = [...d]; n[i] = !n[i]
      if (n.every(Boolean)) onUnlock()
      return n
    })
  }
  return (
    <div className={styles.wrap}>
      <div className={styles.levelBadge}>SCENE 02  -  PAIR PROGRAMMING</div>
      <p className={styles.prompt}><em>Navigator</em> baca pseudocode, <em>Driver</em> drag blok. Centang baris yang sudah terimplementasi.</p>
      <div style={{flex:1,display:'flex',flexDirection:'column',gap:6,overflow:'auto'}}>
        {PSEUDOLINES.map((line,i) => (
          <div key={i} style={{display:'flex',alignItems:'center',gap:10,padding:'10px 14px',borderRadius:8,
            background:done[i]?'#eef7f7':'#f7f8fa',border:'1.5px solid '+(done[i]?'#088395':'#e2e6ea'),
            transition:'all .2s',cursor:'pointer'}}
            onClick={()=>toggle(i)}>
            <input type="checkbox" checked={done[i]} onChange={()=>{}} style={{width:18,height:18,accentColor:'#088395',flexShrink:0,cursor:'pointer'}}/>
            <div style={{flex:1}}>
              <div style={{fontFamily:'DM Mono',fontSize:13,color:done[i]?'#0a525c':'#09637e',fontWeight:done[i]?600:400}}>{line.line}</div>
              {done[i]&&<div style={{fontSize:12,color:'#088395',marginTop:3,fontFamily:'DM Mono'}}>{line.scratch}</div>}
            </div>
            {done[i]&&<span style={{fontSize:18}}>✓</span>}
          </div>
        ))}
      </div>
      <div>
        <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:6}}>
          <div className={styles.progressBar} style={{flex:1}}><div className={styles.progressFill} style={{width:pct+'%'}}/></div>
          <span style={{fontFamily:'DM Mono',fontSize:14,color:'#088395',fontWeight:700}}>{pct}%</span>
        </div>
        {doneCount===PSEUDOLINES.length&&<div className={styles.statusFooter}>
          <div className={styles.statusLevel}>PROGRAM SELESAI DIKODE</div>
          <div className={styles.statusText}>Semua baris pseudocode sudah diimplementasi. Lanjutkan ke testing!</div>
        </div>}
      </div>
    </div>
  )
}
