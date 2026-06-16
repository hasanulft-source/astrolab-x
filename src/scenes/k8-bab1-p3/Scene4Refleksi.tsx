import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Jantung berdetak <em>~100.000 kali sehari</em> tanpa henti.</p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Sisi <b>kanan</b> jantung mengurus darah kotor (ke paru), sisi <b>kiri</b> mengurus darah bersih (ke tubuh). Bilik kiri berdinding paling tebal karena harus memompa ke seluruh tubuh.</div>
          <div className={styles.exit}>Menjaga jantung: rutin <b>olahraga</b>, kurangi makanan berlemak & asin, dan hindari <b>rokok</b>.</div>
        </div>
      </div>
    </>
  )
}
