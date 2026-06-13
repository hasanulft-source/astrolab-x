import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Komponen ekosistem <em>tidak berdiri sendiri.</em></p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Abiotik dan biotik <b>saling memengaruhi</b>: cahaya dan air (abiotik) menentukan tumbuhan yang bisa hidup; sebaliknya tumbuhan menjaga kelembapan tanah dan menyediakan oksigen.</div>
          <div className={styles.exit}>Karena itu ekosistem adalah satu <b>kesatuan yang saling bergantung</b> - mengubah satu komponen akan terasa di seluruh sistem.</div>
        </div>
      </div>
    </>
  )
}
