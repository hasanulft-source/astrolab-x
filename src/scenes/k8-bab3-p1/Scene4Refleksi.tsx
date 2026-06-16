import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Usaha sebenarnya adalah <em>perpindahan energi.</em></p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Saat kamu melakukan usaha pada benda, kamu <b>memindahkan energi</b> ke benda itu - misalnya menambah energi geraknya. Satuannya sama: <b>joule (J)</b>.</div>
          <div className={styles.exit}>Itu sebabnya usaha dan energi tak terpisahkan: tak ada perpindahan energi tanpa usaha, dan usaha selalu mengubah energi sesuatu.</div>
        </div>
      </div>
    </>
  )
}
