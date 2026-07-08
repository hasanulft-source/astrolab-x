import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './ui.module.css'
const OPS = [
  { op:'"..."', name:'Frasa Exact', desc:'Hasil harus mengandung frasa PERSIS ini - tidak boleh dipisah atau ditukar.', ex:'"razia hp" banda aceh' },
  { op:'-kata', name:'Exclude', desc:'Hapus hasil yang mengandung kata tertentu - berguna untuk menyaring topik tidak relevan.', ex:'"razia hp" -SMA -Jakarta' },
  { op:'site:', name:'Batasi Domain', desc:'Cari hanya di situs tertentu - powerful untuk cek sumber resmi.', ex:'site:dinas-pendidikan-aceh.go.id razia' },
  { op:'OR',    name:'Salah Satu', desc:'Tampilkan hasil yang mengandung A ATAU B.', ex:'"razia hp" OR "sita hp" banda aceh' },
  { op:'2027',  name:'Batasi Waktu', desc:'Tambahkan tahun untuk membatasi ke berita terbaru.', ex:'"razia hp" banda aceh 2027' },
]
export function SceneOperator({ onUnlock }: DiscoverySceneProps) {
  const [sel, setSel] = useState(0)
  const [unlocked, setUnlocked] = useState(false)
  const o = OPS[sel]
  const pick = (i: number) => { setSel(i); if (!unlocked) { setUnlocked(true); onUnlock() } }
  return (
    <div className={styles.wrap}>
      <div className={styles.babakBadge}>SCENE 02 - PELAJARI OPERATOR</div>
      <p className={styles.prompt}>Sistem memberimu <em>5 alat pencarian</em>. Pelajari satu per satu.</p>
      <div className={styles.main} style={{gridTemplateColumns:'180px 1fr'}}>
        <div style={{display:'flex',flexDirection:'column',gap:5}}>
          {OPS.map((op,i) => (
            <button key={i} onClick={()=>pick(i)}
              style={{padding:'10px 14px',borderRadius:8,border:'2px solid '+(sel===i?'#0d6b7a':'#e2e6ea'),
                background:sel===i?'#eaf4f3':'#f7f8fa',cursor:'pointer',textAlign:'left',
                fontFamily:'DM Mono',fontSize:15,fontWeight:700,color:sel===i?'#0a525c':'#6b7280'}}>
              {op.op}
            </button>
          ))}
        </div>
        <div className={styles.panel}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:6}}>
            <span style={{fontFamily:'DM Mono',fontSize:22,fontWeight:700,color:'#0d6b7a'}}>{o.op}</span>
            <span style={{fontSize:16,fontWeight:600,color:'#1a2b3d'}}>{o.name}</span>
          </div>
          <div style={{fontSize:15,color:'#3a3d42',lineHeight:1.6,marginBottom:14}}>{o.desc}</div>
          <div style={{background:'#1a2b3d',borderRadius:8,padding:'12px 16px'}}>
            <div style={{fontSize:11,color:'#b45309',fontFamily:'DM Mono',letterSpacing:'.8px',marginBottom:6}}>CONTOH QUERY:</div>
            <div style={{fontFamily:'DM Mono',fontSize:15,color:'#7de8f5'}}>{o.ex}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
