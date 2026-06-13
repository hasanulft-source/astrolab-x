import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Gravitasi Bulan juga menggerakkan <em>lautan.</em></p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Tarikan gravitasi Bulan (dibantu Matahari) menarik air laut sehingga terjadi <b>pasang</b> (air naik) dan <b>surut</b> (air turun) bergantian tiap hari.</div>
          <div className={styles.exit}>Saat <b>Bulan Baru & Purnama</b>, Matahari dan Bulan segaris - tarikannya bergabung menghasilkan <b>pasang purnama</b> yang paling tinggi. Fase, gerhana, dan pasang surut semuanya berakar pada satu hal: posisi Bulan.</div>
        </div>
      </div>
    </>
  )
}
