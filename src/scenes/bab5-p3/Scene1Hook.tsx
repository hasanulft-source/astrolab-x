import { useState } from 'react'
import { KingdomIcon } from '../../components/KingdomIcon'
import { KINGS } from './data'
import styles from './ui.module.css'

export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Bakteri, alga, jamur, lumut, dan singa - semuanya makhluk hidup, tapi sangat berbeda. <em>Apa yang membedakan kelima dunia ini?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.iconRow}>
            {KINGS.map(k => (
              <div key={k.id} className={styles.iconItem}><KingdomIcon id={k.id} size={40} /><span>{k.nama}</span></div>
            ))}
          </div>
        </div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Tiga pertanyaan kunci memisahkan mereka: <b>(1)</b> punya membran inti? <b>(2)</b> bersel satu atau banyak? <b>(3)</b> bagaimana cara memperoleh makanan? Jawabannya menentukan kingdom-nya.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Apa kuncinya? →</button>}
        </div>
      </div>
    </>
  )
}
