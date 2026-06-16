import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Saluran napas bisa <em>terganggu</em> bila tak dijaga.</p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Gangguan umum: <b>asma</b> (saluran napas menyempit), <b>TBC</b> & <b>pneumonia</b> (infeksi paru), dan <b>bronkitis</b> (radang bronkus).</div>
          <div className={styles.exit}>Menjaganya: hindari <b>asap rokok</b>, jaga <b>udara bersih</b>, dan rutin <b>olahraga</b> agar paru kuat.</div>
        </div>
      </div>
    </>
  )
}
