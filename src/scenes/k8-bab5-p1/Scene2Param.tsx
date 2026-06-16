import { useState } from 'react'
import styles from './ui.module.css'
function wavePath(amp: number, freq: number) {
  const W = 240, mid = 70
  let d = ''
  for (let x = 0; x <= W; x += 3) {
    const y = mid - amp * Math.sin((2 * Math.PI * freq * x) / W)
    d += (x === 0 ? 'M' : 'L') + x + ' ' + y.toFixed(1) + ' '
  }
  return d
}
export function Scene2Param() {
  const [amp, setAmp] = useState(35)
  const [freq, setFreq] = useState(2)
  return (
    <>
      <p className={styles.prompt}>Geser <em>amplitudo</em> & <em>frekuensi</em> - amati bentuk gelombang berubah.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <svg viewBox="0 0 240 140" className={styles.waveSvg}>
            <line x1="0" y1="70" x2="240" y2="70" stroke="#cdd4dd" strokeWidth="1" strokeDasharray="4 4" />
            <path d={wavePath(amp, freq)} fill="none" stroke="#6a4caf" strokeWidth="3" />
          </svg>
        </div>
        <div className={styles.side}>
          <div className={styles.sliderRow}><label>Amplitudo</label><input type="range" min={5} max={55} value={amp} onChange={e => setAmp(+e.target.value)} /><span className={styles.val}>{amp}</span></div>
          <div className={styles.sliderRow}><label>Frekuensi</label><input type="range" min={1} max={6} value={freq} onChange={e => setFreq(+e.target.value)} /><span className={styles.val}>{freq} Hz</span></div>
          <div className={styles.note}><b>Amplitudo</b> = tinggi simpangan (kuat/lemah). <b>Frekuensi</b> = jumlah gelombang per detik (makin tinggi, makin rapat).</div>
        </div>
      </div>
    </>
  )
}
