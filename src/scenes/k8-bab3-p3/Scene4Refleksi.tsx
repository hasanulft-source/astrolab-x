import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Pesawat sederhana memudahkan - tapi <em>tidak menggratiskan</em> usaha.</p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Alat-alat ini membuat kita mengeluarkan <b>gaya lebih kecil</b>, tetapi sebagai gantinya <b>jaraknya lebih jauh</b>. Usaha totalnya tetap sama.</div>
          <div className={styles.exit}>Contohnya bidang miring: mendorong beban ke atas memang ringan, tapi jalur yang ditempuh jadi lebih panjang daripada mengangkat lurus.</div>
        </div>
      </div>
    </>
  )
}
