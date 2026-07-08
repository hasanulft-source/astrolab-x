import type { DiscoverySceneProps } from '../discovery-types'
import styles from './ui.module.css'
export function SceneKlimax(_: DiscoverySceneProps) {
  return (
    <div className={styles.wrap}>
      <div className={styles.babakBadge}>BABAK 4 - MEMBONGKAR KEBOHONGAN - TITIK KLIMAKS</div>
      <div style={{display:'flex',flexDirection:'column',gap:16,flex:1,justifyContent:'center'}}>
        <div className={styles.caseCard}>
          <div className={styles.caseCardTitle}>RINGKASAN INVESTIGASI SEJAUH INI</div>
          <div style={{display:'flex',flexDirection:'column',gap:8,marginTop:10}}>
            {['Babak 1: Pesan sudah dibedah - strukturnya KONTEN yang dikemas untuk viral',
              'Babak 2: Tidak ada sumber resmi yang mengkonfirmasi klaim dalam pesan',
              'Babak 3: Akun penyebar tidak kredibel - 0/5 kriteria CRAAP lulus',
              'Babak 4: Isi pesan - mana klaim yang benar, mana yang dikarang?'].map((t,i)=>(
              <div key={i} style={{fontSize:15,color:i<3?'#7de8f5':'#fbbf24',lineHeight:1.5}}>{t}</div>
            ))}
          </div>
        </div>
        <p className={styles.prompt}>Hari ini kamu bedah pesan itu <em>kalimat demi kalimat</em>. Ini titik klimaks investigasimu.</p>
        <div className={styles.trapWarning}>
          <span className={styles.trapLabel}>PERHATIAN SEBELUM MULAI</span>
          <span className={styles.trapText}>Beberapa klaim dalam pesan ini BENAR - misalnya nama sekolah yang memang ada di Banda Aceh. Jangan tergesa-gesa menyimpulkan semuanya hoaks. Periksa setiap klaim SECARA TERPISAH.</span>
        </div>
      </div>
    </div>
  )
}
