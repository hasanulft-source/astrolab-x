import { useState } from 'react'
import { OrganismGlyph } from '../../components/OrganismGlyph'
import { HOOK_OBJS } from './data'
import styles from './ui.module.css'

export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Empat benda: batu kristal, api unggun, robot, dan kucing. <em>Mana yang termasuk makhluk hidup?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.objGrid}>
            {HOOK_OBJS.map(o => (
              <div key={o.id} className={`${styles.objCard} ${show && o.hidup ? styles.alive : ''}`}>
                <OrganismGlyph id={o.id} />
                <span className={styles.objName}>{o.nama}</span>
                {show && <span className={`${styles.tag} ${o.hidup ? styles.tagAlive : styles.tagNot}`}>{o.hidup ? 'hidup' : 'bukan'}</span>}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Hanya <b>kucing</b> yang makhluk hidup. Api bergerak, kristal "tumbuh", robot bereaksi - tapi tak satu pun punya <b>semua</b> ciri. Kuncinya: makhluk hidup punya <b>SEMUA</b> ciri sekaligus, bukan cuma sebagian.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Lihat jawaban →</button>}
        </div>
      </div>
    </>
  )
}
