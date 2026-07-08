import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './ui.module.css'
const MAPPING = [
  {pseudo:'MULAI',scratch:'when green flag clicked',category:'blockControl',emoji:'🟡'},
  {pseudo:'ULANGI SELAMA [kondisi]',scratch:'repeat until <kondisi>',category:'blockControl',emoji:'🟡'},
  {pseudo:'JIKA [kondisi] MAKA',scratch:'if <kondisi> then',category:'blockControl',emoji:'🟡'},
  {pseudo:'TAMPILKAN [nilai]',scratch:'say [nilai]',category:'blockLooks',emoji:'🟣'},
  {pseudo:'SIMPAN [nilai] ke [variabel]',scratch:'set [variabel] to [nilai]',category:'blockVar',emoji:'🟠'},
  {pseudo:'HITUNG [nilai + 1]',scratch:'change [variabel] by [1]',category:'blockOperator',emoji:'🟢'},
]
export function SceneTranslasi({ onUnlock }: DiscoverySceneProps) {
  const [revealed, setRevealed] = useState<string[]>([])
  const reveal = (i: number) => {
    setRevealed(r => {
      const n = [...r, String(i)]
      if (n.length === MAPPING.length) onUnlock()
      return n
    })
  }
  return (
    <div className={styles.wrap}>
      <div className={styles.levelBadge}>LEVEL 4  -  HIDUP KE LAYAR</div>
      <p className={styles.prompt}>Setiap baris pseudocode punya blok Scratch-nya. <em>Klik pseudocode</em> untuk lihat bloknya.</p>
      <div className={styles.hint}>Buka pseudocode jadwal piket dari Level 3. Setiap baris = 1 blok atau lebih di Scratch.</div>
      <div style={{flex:1,display:'flex',flexDirection:'column',gap:8,overflow:'auto'}}>
        {MAPPING.map((m,i) => {
          const done = revealed.includes(String(i))
          return (
            <div key={i} style={{display:'grid',gridTemplateColumns:'1fr 40px 1fr',gap:10,alignItems:'center'}}>
              <div style={{background:'#0b3a44',borderRadius:8,padding:'10px 14px',fontFamily:'DM Mono',fontSize:14,color:'#7ab2b2',cursor:'pointer',border:'2px solid '+(done?'#088395':'transparent')}}
                onClick={()=>!done&&reveal(i)}>
                {m.pseudo}
              </div>
              <div style={{textAlign:'center',fontSize:20}}>→</div>
              <div style={{background:done?undefined:'#f7f8fa',borderRadius:8,padding:'10px 14px',border:'2px dashed '+(done?'transparent':'#e2e6ea'),minHeight:44,display:'flex',alignItems:'center'}}>
                {done ? (
                  <span className={styles.scratchBlock+' '+styles[m.category as keyof typeof styles]}>
                    {m.emoji} {m.scratch}
                  </span>
                ) : (
                  <span style={{fontSize:13,color:'#9ca3af',fontStyle:'italic'}}>Klik pseudocode untuk lihat bloknya</span>
                )}
              </div>
            </div>
          )
        })}
      </div>
      {revealed.length === MAPPING.length && (
        <div className={styles.statusFooter}>
          <div className={styles.statusLevel}>KAMUS BLOK SELESAI</div>
          <div className={styles.statusText}>Semua translasi dipahami. Sekarang pair programming: bawa pseudocode jadwal piket ke Scratch!</div>
        </div>
      )}
    </div>
  )
}
