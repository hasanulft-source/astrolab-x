import styles from './ui.module.css'

export function Scene5Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Grafik s-t itu <em>ringkasan gerak</em> — dari satu garis kamu bisa baca kecepatan & arah.</p>
      <div className={styles.main}>
        <div className={styles.side}>
          <div className={styles.field}><span className={styles.fLabel}>renungkan</span><p>Apa yang bisa dan tidak bisa kamu baca dari grafik s-t?</p></div>
          <div className={styles.field}><span className={styles.fLabel}>petunjuk</span><p>Garis datar (mendatar) artinya posisi tidak berubah — benda diam.</p></div>
        </div>
        <div className={styles.side}>
          <div className={styles.hl}>Ingat: pada s-t, <b>kemiringan = kecepatan</b>. Lurus & miring = GLB. Datar = diam. Makin curam = makin cepat.</div>
        </div>
      </div>
    </>
  )
}
