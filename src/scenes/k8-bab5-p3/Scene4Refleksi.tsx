import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Dua perilaku cahaya yang membentuk dunia <em>optik.</em></p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}><b>Pemantulan</b>: cahaya memantul saat mengenai permukaan - sudut datang = sudut pantul. Dasar kerja cermin.</div>
          <div className={styles.exit}><b>Pembiasan</b>: cahaya membelok saat berpindah medium karena kecepatannya berubah. Dasar kerja lensa, kacamata, dan kamera.</div>
        </div>
      </div>
    </>
  )
}
