import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Aturan 10% punya <em>konsekuensi nyata.</em></p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Karena energi cepat menyusut, rantai makanan jarang lebih dari <b>4-5 tingkat</b> - tak cukup energi untuk menopang tingkat di atasnya.</div>
          <div className={styles.exit}>Predator puncak selalu <b>paling sedikit</b> dan <b>paling rentan punah</b>: bila produsen atau mangsanya terganggu, merekalah yang pertama terancam.</div>
        </div>
      </div>
    </>
  )
}
