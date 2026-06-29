import { useState } from 'react'
import styles from './Scene6Numerasi.module.css'

function r2(n: number) { return Math.round(n * 100) / 100 }

const PRESETS = [
  { label: "Suhu tubuh", val: 37 },
  { label: "Air mendidih", val: 100 },
  { label: "Air membeku", val: 0 },
  { label: "Suhu kamar", val: 25 },
  { label: "−40 unik", val: -40 },
]

export function Scene6Numerasi() {
  const [input, setInput] = useState<string>("37")
  const [revealed, setRevealed] = useState(false)

  const c = parseFloat(input) || 0
  const f = r2((9/5 * c) + 32)
  const k = r2(c + 273)
  const re = r2((4/5) * c)

  return (
    <>
      <p className={styles.prompt}>Masukkan suhu dalam °C — konversi ke <em>semua skala sekaligus</em>.</p>
      <div className={styles.main}>
        <div className={styles.inputPanel}>
          <div className={styles.inputLabel}>Suhu dalam °C</div>
          <div className={styles.inputRow}>
            <input type="number" value={input}
              onChange={e => { setInput(e.target.value); setRevealed(false) }}
              className={styles.input}/>
            <span className={styles.unit}>°C</span>
          </div>
          <div className={styles.presetLabel}>Coba preset:</div>
          <div className={styles.presets}>
            {PRESETS.map(p => (
              <button key={p.val} className={styles.presetBtn}
                onClick={() => { setInput(String(p.val)); setRevealed(false) }}>
                {p.label}<br/><span className={styles.presetVal}>{p.val}°C</span>
              </button>
            ))}
          </div>
          <button className={styles.revealBtn} onClick={() => setRevealed(true)}>
            {revealed ? '✓ Hasil ditampilkan' : 'Tampilkan hasil →'}
          </button>
        </div>
        <div className={styles.results}>
          {[
            { scale: "Fahrenheit", symbol: "°F", val: f, formula: `(9/5 × ${c}) + 32` },
            { scale: "Kelvin",     symbol: "K",  val: k, formula: `${c} + 273` },
            { scale: "Reamur",     symbol: "°R", val: re,formula: `(4/5) × ${c}` },
          ].map((r, i) => (
            <div key={i} className={styles.resultCard}>
              <div className={styles.cardScale}>{r.scale}</div>
              <div className={styles.cardFormula}>{r.formula} =</div>
              <div className={styles.cardResult} style={{opacity: revealed ? 1 : 0.1}}>
                <span className={styles.cardNum}>{revealed ? r.val : '???'}</span>
                <span className={styles.cardUnit}>{r.symbol}</span>
              </div>
            </div>
          ))}
        </div>
        {revealed && (
          <div className={styles.insight}>
            {c === -40 && <p className={styles.insightText}>−40°C = −40°F — satu-satunya titik di mana Celsius dan Fahrenheit sama!</p>}
            {c === 0   && <p className={styles.insightText}>0°C = 32°F = 273 K = 0°R — titik beku air standar.</p>}
            {c === 100 && <p className={styles.insightText}>100°C = 212°F = 373 K = 80°R — titik didih air standar.</p>}
            {c === 37  && <p className={styles.insightText}>37°C = 98,6°F — suhu tubuh normal. Itulah mengapa 98,6°F artinya sehat.</p>}
            {![0,37,100,-40].includes(c) && <p className={styles.insightText}>Ketiga konversi merepresentasikan suhu fisik yang sama, hanya skala berbeda.</p>}
          </div>
        )}
      </div>
    </>
  )
}
