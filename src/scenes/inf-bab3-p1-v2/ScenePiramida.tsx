import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './ui.module.css'
const LEVELS = [
  { id:'konten', label:'KONTEN', color:'#b45309', bg:'#fef3e2',
    desc:'Informasi yang sudah dikemas untuk tujuan tertentu - viral, memicu emosi, atau membujuk.',
    contoh:'Seluruh pesan dengan huruf kapital, tanda seru, ajakan SEBARKAN' },
  { id:'info', label:'INFORMASI', color:'#0d6b7a', bg:'#eaf4f3',
    desc:'Data yang sudah diberi konteks sehingga bermakna dan bisa diinterpretasikan.',
    contoh:'Ada razia HP di SMP Banda Aceh hari ini karena virus' },
  { id:'data', label:'DATA', color:'#6b7280', bg:'#f7f8fa',
    desc:'Fakta mentah tanpa konteks - angka, tanggal, nama yang belum diinterpretasikan.',
    contoh:'50 siswa  -  Banda Aceh  -  hari ini' },
]
export function ScenePiramida({ onUnlock }: DiscoverySceneProps) {
  const [sel, setSel] = useState<string|null>(null)
  const [unlocked, setUnlocked] = useState(false)
  const s = LEVELS.find(l => l.id === sel)
  const pick = (id: string) => { setSel(id===sel?null:id); if (!unlocked) { setUnlocked(true); onUnlock() } }
  return (
    <div className={styles.wrap}>
      <div className={styles.babakBadge}>SCENE 03 - PIRAMIDA DATA-INFORMASI-KONTEN</div>
      <p className={styles.prompt}>Klik setiap lapisan piramida. <em>Di mana posisi pesan viral kita?</em></p>
      <div className={styles.main} style={{gridTemplateColumns:'1fr 1fr',alignItems:'center'}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:6}}>
          {LEVELS.map((l,i) => (
            <button key={l.id} onClick={()=>pick(l.id)}
              style={{width:(100-i*20)+'%',padding:'14px 0',borderRadius:8,border:'2px solid '+(sel===l.id?l.color:'transparent'),
                background:sel===l.id?l.bg:l.color+'33',cursor:'pointer',fontFamily:'Plus Jakarta Sans',fontWeight:700,fontSize:15,color:l.color}}>
              {l.label}
            </button>
          ))}
          <div style={{fontSize:12,color:'#9ca3af',marginTop:4,fontStyle:'italic'}}>Klik lapisan untuk detail</div>
        </div>
        <div className={styles.panel}>
          {s ? (
            <>
              <div className={styles.panelTitle} style={{color:s.color}}>{s.label}</div>
              <div style={{fontSize:15,color:'#3a3d42',lineHeight:1.6}}>{s.desc}</div>
              <div style={{marginTop:8}}>
                <div style={{fontSize:12,color:'#9ca3af',fontWeight:600,marginBottom:4}}>Contoh dari kasus ini:</div>
                <div style={{fontSize:14,color:'#1a1c1e',fontStyle:'italic',background:s.bg,padding:'10px 12px',borderRadius:7}}>{s.contoh}</div>
              </div>
            </>
          ) : (
            <div style={{color:'#9ca3af',fontStyle:'italic',fontSize:15,textAlign:'center',paddingTop:24}}>Pilih lapisan untuk penjelasan</div>
          )}
        </div>
      </div>
      <div className={styles.caseFooter}>
        <div className={styles.caseFooterStatus}>KESIMPULAN BABAK 1</div>
        <div className={styles.caseFooterText}>Pesan ini adalah KONTEN yang dikemas untuk menyebar dan memicu kepanikan. Kebenarannya belum diketahui.</div>
      </div>
    </div>
  )
}
