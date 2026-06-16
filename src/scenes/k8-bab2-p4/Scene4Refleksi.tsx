import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Ginjal menyaring <em>~180 liter darah</em> setiap hari.</p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Dari sekian banyak cairan yang disaring, hanya sebagian kecil keluar sebagai urine - sisanya diserap kembali pada tahap <b>reabsorpsi</b>. Itulah mengapa tubuh tidak kehilangan air & zat penting.</div>
          <div className={styles.exit}>Cara paling sederhana menjaga ginjal: <b>cukup minum air</b>, kurangi garam berlebih, dan jangan menahan buang air kecil terlalu lama.</div>
        </div>
      </div>
    </>
  )
}
