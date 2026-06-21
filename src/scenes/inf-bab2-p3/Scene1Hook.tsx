import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Guru punya daftar nilai 30 siswa yang berantakan. Ia ingin tahu <em>siapa peringkat 1</em> dan <em>siapa saja yang lulus.</em> Mengecek satu per satu? Lama!</p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookList}><span>78</span><span>92</span><span>65</span><span>88</span><span>74</span><span>95</span></div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Gunakan <b>pengurutan (sort)</b> untuk menata data dari tertinggi ke terendah, dan <b>penyaringan (filter)</b> untuk menampilkan hanya data yang memenuhi syarat.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Ada cara cepat? →</button>}
        </div>
      </div>
    </>
  )
}
