import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Tekanan zat cair <em>tidak</em> bergantung pada bentuk wadah.</p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Pada kedalaman yang sama, tekanan hidrostatis selalu <b>sama besar</b> - tidak peduli wadahnya sempit, lebar, atau miring. Yang menentukan hanya <b>kedalaman (h)</b> dan <b>massa jenis (ρ)</b> zat cair.</div>
          <div className={styles.exit}>Tekanan juga bekerja <b>ke segala arah</b>, bukan hanya ke bawah - itulah sebabnya telinga penyelam tertekan dari samping.</div>
        </div>
      </div>
    </>
  )
}
