import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Internet menghubungkan dunia - dan kini kamu tahu <em>cara kerjanya.</em></p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Dari satu perangkat ke jaringan lokal, lalu ke internet global - semua bertukar data lewat permintaan dan balasan. Inilah pondasi dunia digital yang kamu pakai setiap hari.</div>
          <div className={styles.exit}>Dengan ini lengkaplah perjalanan Informatika kelas VII: <b>berpikir komputasional, analisis data, literasi digital, etika & privasi,</b> hingga <b>sistem komputer & jaringan</b>. Kamu kini bukan sekadar pengguna, tapi paham apa yang terjadi di balik layar.</div>
        </div>
      </div>
    </>
  )
}
