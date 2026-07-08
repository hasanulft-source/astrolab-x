import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './ui.module.css'
export function SceneCaseOpen({ onUnlock }: DiscoverySceneProps) {
  const [opened, setOpened] = useState(false)
  const open = () => { setOpened(true); onUnlock() }
  return (
    <div className={styles.wrap}>
      <div className={styles.babakBadge}>BABAK 1  -  LAPORAN MASUK  -  CASE FILE #AC-2027-003</div>
      <p className={styles.prompt}>Sebuah <em>laporan kasus baru</em> baru saja masuk ke mejamu.</p>
      {!opened ? (
        <div style={{display:'flex',flexDirection:'column',gap:16,flex:1,justifyContent:'center',alignItems:'center'}}>
          <div className={styles.caseCard} style={{maxWidth:480,width:'100%',textAlign:'center'}}>
            <div className={styles.caseCardTitle}>BERKAS BARU MASUK - 07.42 WIB</div>
            <div className={styles.caseCardText} style={{fontSize:22,fontWeight:700,color:'#fff',marginTop:8}}>Pesan Viral Grup WA Orang Tua</div>
            <div className={styles.caseCardText} style={{marginTop:6}}>Klik untuk membuka laporan kasus</div>
          </div>
          <button className={styles.btn+' '+styles.btnAmber} onClick={open}>Buka Case File</button>
        </div>
      ) : (
        <div style={{display:'flex',flexDirection:'column',gap:14,flex:1}}>
          <div className={styles.evidenceBox}>
            <span className={styles.evidenceLabel}>BARANG BUKTI A-001 - Pesan WhatsApp (Diteruskan 47 kali)</span>
            <div className={styles.evidenceText}>
              "INFO PENTING ORANG TUA! Ada RAZIA HP di salah satu SMP Banda Aceh hari ini, semua HP siswa DISITA karena ditemukan VIRUS yang menyebar lewat sebuah aplikasi chat. Sudah 50 siswa kena dan HP-nya rusak total!! SEBARKAN supaya anak-anak kita aman"
            </div>
          </div>
          <div className={styles.callout}>
            Sebelum menyelidiki kebenarannya - kamu perlu tahu dulu <strong>apa yang sedang kamu baca</strong>. Apakah ini data mentah? Informasi? Atau sudah jadi konten yang dikemas untuk tujuan tertentu? Itulah tugas Babak 1.
          </div>
          <div className={styles.caseFooter}>
            <div>
              <div className={styles.caseFooterStatus}>STATUS KASUS: TERBUKA - BELUM DISELIDIKI</div>
              <div className={styles.caseFooterText}>Pesan diterima. Belum ada konfirmasi benar atau salah. Mulai investigasi dari awal.</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
