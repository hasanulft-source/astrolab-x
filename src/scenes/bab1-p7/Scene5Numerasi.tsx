import { useState } from 'react'
import { OSN_DATA } from './data'
import styles from './ui.module.css'
import numStyles from './Scene5Numerasi.module.css'

function round2(n: number) { return Math.round(n * 100) / 100 }

export function Scene5Numerasi() {
  const [revealed, setRevealed] = useState<boolean[]>(OSN_DATA.map(() => false))
  const [step, setStep] = useState<0|1|2|3|4>(0)

  const shown   = OSN_DATA.filter((_, i) => revealed[i])
  const avg     = shown.length > 0 ? round2(shown.reduce((a, b) => a + b, 0) / shown.length) : null
  const ref     = 12.1
  const pct     = avg !== null ? round2(Math.abs(avg - ref) / ref * 100) : null
  const devs    = avg !== null ? OSN_DATA.map(v => round2(Math.abs(v - avg))) : []
  const maxDev  = devs.length ? Math.max(...devs) : null
  const isPrecise  = avg !== null && maxDev !== null && maxDev < 0.3
  const isAccurate = pct !== null && pct <= 5

  const toggleAll = () => setRevealed(OSN_DATA.map(() => true))

  return (
    <>
      <p className={styles.prompt}>
        Data pengukuran sudah ada. Sekarang kita <em>hitung bersama</em> — langkah demi langkah.
      </p>

      <div className={numStyles.main}>
        <div className={numStyles.dataPanel}>
          <div className={numStyles.panelHead}>
            <span>Data Pengukuran Kelas</span>
            <span className={numStyles.panelSub}>n = {OSN_DATA.length} nilai</span>
          </div>
          <div className={numStyles.chips}>
            {OSN_DATA.map((v, i) => (
              <div
                key={i}
                className={revealed[i] ? numStyles.chipOn : numStyles.chip}
                onClick={() => { const next = [...revealed]; next[i] = true; setRevealed(next) }}
              >
                {revealed[i] ? `${v.toFixed(1).replace('.', ',')} cm` : '?'}
              </div>
            ))}
          </div>
          <button className={numStyles.revealBtn} onClick={toggleAll}>Tampilkan semua</button>
          {avg !== null && (
            <div className={numStyles.sumRow}>
              <span className={numStyles.sumLabel}>Jumlah</span>
              <span className={numStyles.sumVal}>{round2(shown.reduce((a,b)=>a+b,0)).toFixed(2).replace('.',',')} cm</span>
            </div>
          )}
        </div>

        <div className={numStyles.calcPanel}>
          <div className={numStyles.calcStep}>
            <div className={numStyles.stepLabel}>
              <span className={numStyles.stepBadge}>1</span>
              Menghitung Rata-rata
            </div>
            <div className={numStyles.formula}>x̄ = (x₁ + x₂ + … + x₁₀) ÷ 10</div>
            {avg !== null
              ? <div className={numStyles.answer}><span className={numStyles.ansVal}>{avg.toFixed(2).replace('.',',')} cm</span></div>
              : <div className={numStyles.hint}>Ketuk data di kiri untuk mulai menghitung.</div>}
          </div>

          {step >= 1 && avg !== null && (
            <div className={numStyles.calcStep}>
              <div className={numStyles.stepLabel}><span className={numStyles.stepBadge}>2</span>Simpangan Terbesar</div>
              <div className={numStyles.formula}>Δ = |nilai − x̄|</div>
              <div className={numStyles.devGrid}>
                {OSN_DATA.map((v, i) => (
                  <div key={i} className={devs[i] === maxDev ? numStyles.devCellMax : numStyles.devCell}>
                    <span className={numStyles.devVal}>{devs[i].toFixed(2).replace('.',',')}</span>
                    {devs[i] === maxDev && <span className={numStyles.devTag}>maks</span>}
                  </div>
                ))}
              </div>
              <div className={numStyles.answer}>
                <span className={numStyles.ansVal}>{maxDev?.toFixed(2).replace('.',',')} cm</span>
                <span className={numStyles.ansLabel}>simpangan terbesar</span>
              </div>
            </div>
          )}

          {step >= 2 && avg !== null && (
            <div className={numStyles.calcStep}>
              <div className={numStyles.stepLabel}><span className={numStyles.stepBadge}>3</span>Persentase Kesalahan</div>
              <div className={numStyles.formula}>% kes. = |x̄ − ref| ÷ ref × 100%</div>
              <div className={numStyles.formula}>= |{avg.toFixed(2)} − {ref.toFixed(1)}| ÷ {ref.toFixed(1)} × 100%</div>
              <div className={numStyles.answer}>
                <span className={numStyles.ansVal}>{pct?.toFixed(2).replace('.',',')}%</span>
                <span className={numStyles.ansLabel}>{isAccurate ? '✓ ≤ 5% — akurat' : '✗ > 5% — perlu dikalibrasi'}</span>
              </div>
            </div>
          )}

          {step >= 3 && avg !== null && (
            <div className={numStyles.calcStep}>
              <div className={numStyles.stepLabel}><span className={numStyles.stepBadge}>4</span>Presisi & Akurasi</div>
              <div className={numStyles.verdictRow}>
                <div className={isPrecise ? numStyles.verdictGood : numStyles.verdictBad}>
                  <span className={numStyles.verdictIcon}>{isPrecise ? '✓' : '✗'}</span>
                  <div>
                    <div className={numStyles.verdictTitle}>{isPrecise ? 'Presisi' : 'Tidak Presisi'}</div>
                    <div className={numStyles.verdictSub}>simpangan maks {maxDev?.toFixed(2)} cm {isPrecise ? '< 0,3 cm' : '≥ 0,3 cm'}</div>
                  </div>
                </div>
                <div className={isAccurate ? numStyles.verdictGood : numStyles.verdictBad}>
                  <span className={numStyles.verdictIcon}>{isAccurate ? '✓' : '✗'}</span>
                  <div>
                    <div className={numStyles.verdictTitle}>{isAccurate ? 'Akurat' : 'Tidak Akurat'}</div>
                    <div className={numStyles.verdictSub}>% kesalahan {pct?.toFixed(2)}% {isAccurate ? '≤ 5%' : '> 5%'}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step < 3 && avg !== null && (
            <button className={numStyles.nextBtn} onClick={() => setStep(s => (s+1) as 0|1|2|3|4)}>
              {['Hitung simpangan', 'Hitung % kesalahan', 'Tentukan presisi & akurasi'][step]} →
            </button>
          )}
        </div>
      </div>
    </>
  )
}
