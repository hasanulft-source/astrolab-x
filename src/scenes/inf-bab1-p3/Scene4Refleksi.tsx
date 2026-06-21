import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Algoritma adalah <em>resep</em> yang dimengerti komputer.</p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Sebuah algoritma harus <b>jelas, runut, dan tidak ambigu</b>. Pseudocode membantu kita menuliskannya dalam bahasa sederhana sebelum diubah jadi program sungguhan.</div>
          <div className={styles.exit}>Di pertemuan berikutnya, algoritma ini kita susun memakai <b>blok warna-warni di Scratch</b> - tanpa perlu mengetik kode.</div>
        </div>
      </div>
    </>
  )
}
