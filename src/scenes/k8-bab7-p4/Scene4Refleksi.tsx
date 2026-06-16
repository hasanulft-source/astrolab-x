import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Tanah adalah warisan yang <em>harus dijaga.</em></p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Dalam skala hidup manusia, tanah subur nyaris <b>tak terbarukan</b> - terbentuk ratusan tahun, hilang dalam sekejap. Menjaganya berarti menjaga sumber pangan kita.</div>
          <div className={styles.exit}>Inilah inti <b>pertanian berkelanjutan</b>: memanfaatkan tanah hari ini tanpa merusak kemampuannya menopang kehidupan generasi mendatang.</div>
        </div>
      </div>
    </>
  )
}
