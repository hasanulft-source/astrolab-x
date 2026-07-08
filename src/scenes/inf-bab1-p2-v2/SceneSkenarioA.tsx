import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './ui.module.css'
const SKENARIOS = [
  { id:'A', judul:'Jadwal Piket Kelas', icon:'🏫',
    deskripsi:'8 siswa harus piket bergantian. Ada 5 pos piket: sapu, lap papan, buang sampah, siram tanaman, rapikan kursi. Setiap siswa dapat 1 pos per hari.',
    submasalah:['Tentukan jumlah pos piket','Tentukan jumlah siswa per sesi','Buat urutan giliran','Handle siswa yang absen','Distribusikan pos secara adil'],
  },
  { id:'B', judul:'Jadwal Cuci Piring di Rumah', icon:'🍽',
    deskripsi:'4 anggota keluarga bergantian cuci piring setelah 3 kali makan per hari. Ada 3 tugas: cuci, bilas, keringkan.',
    submasalah:['Tentukan jumlah tugas cuci piring','Tentukan giliran anggota keluarga','Buat urutan per waktu makan','Handle kalau ada yang tidak di rumah','Distribusikan tugas secara adil'],
  },
  { id:'C', judul:'Jadwal Menyiram Tanaman', icon:'🌱',
    deskripsi:'12 pot tanaman dengan kebutuhan air berbeda: ada yang disiram tiap hari, ada yang 3 hari sekali, ada yang seminggu sekali.',
    submasalah:['Kelompokkan tanaman berdasarkan frekuensi','Tentukan jadwal per kelompok','Buat reminder atau penanda','Handle kalau hari basah/hujan','Distribusikan waktu penyiraman'],
  },
]
export function SceneSkenarioA({ onUnlock }: DiscoverySceneProps) {
  const [sel, setSel] = useState('A')
  const [checked, setChecked] = useState<Record<string,boolean>>({})
  const [unlocked, setUnlocked] = useState(false)
  const s = SKENARIOS.find(s2 => s2.id === sel)!
  const doneCount = s.submasalah.filter((_,i) => checked[sel+i]).length
  const toggle = (key: string) => {
    setChecked(c => ({...c, [key]: !c[key]}))
    if (!unlocked) { setUnlocked(true); onUnlock() }
  }
  return (
    <div className={styles.wrap}>
      <div className={styles.levelBadge}>LEVEL 2  -  DETEKTIF POLA</div>
      <p className={styles.prompt}>Tiga masalah berbeda — tapi menyimpan <em>pola yang sama</em>. Kerjakan satu per satu.</p>
      <div style={{display:'flex',gap:8}}>
        {SKENARIOS.map(s2 => (
          <button key={s2.id} onClick={()=>setSel(s2.id)}
            style={{padding:'8px 16px',borderRadius:8,border:'2px solid '+(sel===s2.id?'#088395':'#e2e6ea'),
              background:sel===s2.id?'#eef7f7':'#f7f8fa',cursor:'pointer',fontSize:14,fontWeight:600,
              color:sel===s2.id?'#0a525c':'#6b7280',transition:'all .15s',display:'flex',gap:6,alignItems:'center'}}>
            {s2.icon} Skenario {s2.id}
          </button>
        ))}
      </div>
      <div className={styles.main} style={{gridTemplateColumns:'1.2fr 1fr'}}>
        <div className={styles.panel}>
          <div className={styles.panelTitle}>{s.icon} {s.judul}</div>
          <div style={{fontSize:15,color:'#3a3d42',lineHeight:1.6,marginBottom:10}}>{s.deskripsi}</div>
          <div style={{fontSize:14,fontWeight:600,color:'#09637e',marginBottom:6}}>Sub-masalah yang perlu diselesaikan:</div>
          {s.submasalah.map((sm,i) => (
            <div key={i} style={{display:'flex',gap:10,alignItems:'center',padding:'8px 0',borderBottom:'1px solid #f0f0f0'}}>
              <input type="checkbox" checked={!!checked[sel+i]} onChange={()=>toggle(sel+i)}
                style={{width:18,height:18,accentColor:'#088395',cursor:'pointer',flexShrink:0}}/>
              <span style={{fontSize:14,color:checked[sel+i]?'#088395':'#3a3d42',textDecoration:checked[sel+i]?'line-through':'none'}}>{sm}</span>
            </div>
          ))}
        </div>
        <div className={styles.panel}>
          <div className={styles.panelTitle} style={{color:'#088395'}}>Progress Skenario {sel}</div>
          <div className={styles.progressBar}><div className={styles.progressFill} style={{width:(doneCount/s.submasalah.length*100)+'%'}}/></div>
          <div style={{fontSize:13,color:'#6b7280'}}>{doneCount}/{s.submasalah.length} sub-masalah diselesaikan</div>
          <div style={{marginTop:10,fontSize:13,color:'#6b7280'}}>
            Waktu mulai Skenario {sel}: ___:___<br/>Waktu selesai: ___:___<br/>Total: _____ menit
          </div>
          {sel!=='A'&&(
            <div style={{marginTop:12,padding:'10px 12px',background:'#eef7f7',borderRadius:8,fontSize:13,color:'#0a525c'}}>
              Apakah Skenario {sel} lebih cepat dari Skenario A? Mengapa?
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
