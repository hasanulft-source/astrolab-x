import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './ui.module.css'
const PONDASI = [
  {id:'dekomposisi',nama:'Dekomposisi',warna:'#09637e',bg:'#eef7f7',
   def:'Memecah masalah besar menjadi sub-masalah yang lebih kecil dan mudah diselesaikan.',
   tanya:'Di puzzle tadi, bagian mana yang kamu PECAH-PECAH menjadi bagian lebih kecil?'},
  {id:'pola',nama:'Pengenalan Pola',warna:'#0d6b7a',bg:'#eaf4f3',
   def:'Menemukan kesamaan atau pola yang berulang untuk membuat solusi lebih efisien.',
   tanya:'Dari 8 kegiatan, kelompok mana yang punya ciri SERUPA yang bisa diperlakukan sama?'},
  {id:'abstraksi',nama:'Abstraksi',warna:'#d97706',bg:'#fffbeb',
   def:'Mengabaikan detail yang tidak penting untuk fokus pada inti masalah.',
   tanya:'Detail apa dari jadwal guru yang KAMU ABAIKAN karena tidak relevan untuk puzzle ini?'},
  {id:'algoritma',nama:'Algoritma',warna:'#16a34a',bg:'#f0fdf4',
   def:'Serangkaian langkah terurut yang jelas untuk menyelesaikan masalah.',
   tanya:'Langkah-langkah apa yang kamu ikuti SECARA BERURUTAN untuk menyusun jadwal?'},
]
export function SceneBeriNama({ onUnlock }: DiscoverySceneProps) {
  const [sel, setSel] = useState<string|null>(null)
  const [answers, setAnswers] = useState<Record<string,string>>({})
  const [unlocked, setUnlocked] = useState(false)
  const p = PONDASI.find(p => p.id === sel)
  const setAnswer = (id: string, val: string) => {
    setAnswers(a => ({...a,[id]:val}))
    if (val.trim() && !unlocked) { setUnlocked(true); onUnlock() }
  }
  return (
    <div className={styles.wrap}>
      <div className={styles.levelBadge}>SCENE 03  -  BERI NAMA STRATEGIMU</div>
      <p className={styles.prompt}>Strategi yang kamu pakai di puzzle tadi — semuanya punya nama. <em>Klik tiap pondasi untuk menemukan namanya.</em></p>
      <div className={styles.main} style={{gridTemplateColumns:'220px 1fr'}}>
        <div style={{display:'flex',flexDirection:'column',gap:7}}>
          {PONDASI.map(p2 => (
            <button key={p2.id} onClick={()=>setSel(p2.id===sel?null:p2.id)}
              style={{padding:'12px 14px',borderRadius:9,border:'2px solid '+(sel===p2.id?p2.warna:'#e2e6ea'),
                background:sel===p2.id?p2.bg:'#f7f8fa',cursor:'pointer',textAlign:'left',
                fontFamily:'Plus Jakarta Sans',fontSize:15,fontWeight:700,color:sel===p2.id?p2.warna:'#6b7280',
                transition:'all .15s'}}>
              {p2.nama}
            </button>
          ))}
        </div>
        {p ? (
          <div className={styles.panel}>
            <div className={styles.panelTitle} style={{color:p.warna,fontSize:18}}>{p.nama}</div>
            <div style={{fontSize:15,color:'#3a3d42',lineHeight:1.6,padding:'10px 12px',background:p.bg,borderRadius:8}}>{p.def}</div>
            <div style={{fontSize:14,color:'#6b7280',fontWeight:600,marginTop:4}}>{p.tanya}</div>
            <textarea className={styles.noteArea} rows={4}
              placeholder="Tulis jawabanmu di sini..."
              value={answers[p.id]||''} onChange={e=>setAnswer(p.id, e.target.value)}/>
          </div>
        ) : (
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',color:'#9ca3af',fontSize:16,fontStyle:'italic',background:'#f7f8fa',borderRadius:12,border:'1px dashed #e2e6ea'}}>
            Pilih pondasi BK untuk melihat definisinya
          </div>
        )}
      </div>
      {Object.keys(answers).length === 4 && (
        <div className={styles.statusFooter}>
          <div className={styles.statusLevel}>4/4 PONDASI BK DITEMUKAN</div>
          <div className={styles.statusText}>Kamu sudah mengidentifikasi semua 4 pondasi dari pengalaman puzzle. Lanjutkan ke Mission Log.</div>
        </div>
      )}
    </div>
  )
}
