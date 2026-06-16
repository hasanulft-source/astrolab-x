import { useState } from 'react'
import styles from './ui.module.css'
function wavePath(amp: number, freq: number) {
  const W = 240, mid = 60
  let d = ''
  for (let x = 0; x <= W; x += 3) {
    const y = mid - amp * Math.sin((2 * Math.PI * freq * x) / W)
    d += (x === 0 ? 'M' : 'L') + x + ' ' + y.toFixed(1) + ' '
  }
  return d
}
export function Scene2Nada() {
  const [freq, setFreq] = useState(3)
  const [amp, setAmp] = useState(30)
  return (
    <>
      <p className={styles.prompt}>Bunyi punya dua sifat: <em>tinggi nada</em> & <em>kuat bunyi.</em> Geser keduanya.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <svg viewBox="0 0 240 120" className={styles.waveSvg}>
            <line x1="0" y1="60" x2="240" y2="60" stroke="#cdd4dd" strokeWidth="1" strokeDasharray="4 4" />
            <path d={wavePath(amp, freq)} fill="none" stroke="#6a4caf" strokeWidth="3" />
          </svg>
        </div>
        <div className={styles.side}>
          <div className={styles.sliderRow}><label>Frekuensi</label><input type="range" min={1} max={7} value={freq} onChange={e => setFreq(+e.target.value)} /><span className={styles.val}>{freq <= 3 ? 'rendah' : freq <= 5 ? 'sedang' : 'tinggi'}</span></div>
          <div className={styles.sliderRow}><label>Amplitudo</label><input type="range" min={8} max={50} value={amp} onChange={e => setAmp(+e.target.value)} /><span className={styles.val}>{amp <= 22 ? 'lemah' : amp <= 38 ? 'sedang' : 'keras'}</span></div>
          <div className={styles.note}><b>Frekuensi</b> menentukan tinggi-rendah nada. <b>Amplitudo</b> menentukan keras-lemah bunyi.</div>
        </div>
      </div>
    </>
  )
}
