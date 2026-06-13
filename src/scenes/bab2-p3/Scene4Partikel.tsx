import { useState } from 'react'
import { ParticleViewer } from '../../components/ParticleViewer'
import styles from './ui.module.css'

const CAPS: Record<string, string> = {
  solid:  'Padat — partikel rapat & bergetar di tempat.',
  liquid: 'Cair — dipanaskan, partikel dapat energi & mulai bergeser bebas (mencair).',
  gas:    'Gas — partikel lepas & bergerak sangat cepat (menguap).',
}

export function Scene4Partikel() {
  const [st, setSt] = useState<'solid' | 'liquid' | 'gas'>('solid')
  return (
    <>
      <p className={styles.prompt}>Saat dipanaskan, <em>partikel</em> dapat energi dan bergerak makin bebas. Itulah yang kita sebut perubahan wujud.</p>
      <div className={styles.main}>
        <div className={styles.viz}><ParticleViewer state={st} size="md" /></div>
        <div className={styles.side}>
          <div className={styles.stateBtns}>
            <div role="button" className={st === 'solid' ? styles.sBtnActive : styles.sBtn} onClick={() => setSt('solid')}>Padat</div>
            <div role="button" className={st === 'liquid' ? styles.sBtnActive : styles.sBtn} onClick={() => setSt('liquid')}>Cair</div>
            <div role="button" className={st === 'gas' ? styles.sBtnActive : styles.sBtn} onClick={() => setSt('gas')}>Gas</div>
          </div>
          <div className={styles.cap}>{CAPS[st]}</div>
        </div>
      </div>
    </>
  )
}
