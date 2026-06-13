import styles from './ui.module.css'

const COMMIT = [
  'Aku akan selalu mengikuti instruksi guru.',
  'Aku akan memakai alat pelindung dan menjaga kebersihan.',
  'Aku akan melapor jika terjadi kecelakaan, sekecil apa pun.',
]

export function Scene5Komitmen() {
  return (
    <>
      <p className={styles.prompt}>Keselamatan bukan sekadar aturan — tapi <em>budaya</em>. Inilah komitmen kita di lab:</p>
      <div className={styles.commit}>
        {COMMIT.map((c, i) => <div key={i} className={styles.commitItem}>{c}</div>)}
        <div className={styles.reflect}>Renungkan: apakah kamu sudah menjadikan keselamatan sebagai kebiasaan, bukan sekadar hafalan?</div>
      </div>
    </>
  )
}
