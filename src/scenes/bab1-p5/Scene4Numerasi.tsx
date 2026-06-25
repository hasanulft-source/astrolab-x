import { useState } from 'react'
import styles from './Scene4Numerasi.module.css'

type Row = { salt: number; status: string }

const SALT_STEPS = [0, 2, 4, 6, 8, 10]

function eggLabel(sdm: number): string {
  if (sdm <= 2) return 'Tenggelam'
  if (sdm <= 4) return 'Melayang'
  return 'Mengapung'
}

export function Scene4Numerasi() {
  const [hypo, setHypo]   = useState<number | null>(null)
  const [step, setStep]   = useState<0 | 1 | 2 | 3>(0)

  const data: Row[] = SALT_STEPS.map(s => ({ salt: s, status: eggLabel(s) }))
  const threshold   = data.find(r => r.status === 'Mengapung')?.salt ?? null

  return (
    <>
      <p className={styles.prompt}>
        Data sudah terkumpul. Sekarang kita <em>analisis bersama</em> — angka bicara.
      </p>

      <div className={styles.main}>
        <div className={styles.tableWrap}>
          <div className={styles.tHead}>Tabel Hasil Percobaan</div>
          <div className={styles.tRowHead}>
            <span>Garam (sdm)</span>
            <span>Posisi Telur</span>
            <span>Keterangan</span>
          </div>
          {data.map((r, i) => (
            <div
              key={i}
              className={`${styles.tRow} ${r.status === 'Mengapung' ? styles.tRowHit : r.status === 'Melayang' ? styles.tRowMid : ''}`}
            >
              <span className={styles.mono}>{r.salt} sdm</span>
              <span className={styles.status}>{r.status}</span>
              <span className={styles.note}>
                {r.status === 'Mengapung' ? '← nilai ambang!' : r.status === 'Melayang' ? 'transisi' : ''}
              </span>
            </div>
          ))}
        </div>

        <div className={styles.analysisPanel}>

          <div className={`${styles.step} ${step >= 0 ? styles.stepActive : ''}`}>
            <div className={styles.stepNum}>1</div>
            <div className={styles.stepBody}>
              <div className={styles.stepTitle}>Nilai Ambang (Threshold)</div>
              <div className={styles.stepDesc}>
                Pada kondisi ke-berapa telur <em>pertama kali</em> mengapung?
              </div>
              {threshold !== null && (
                <div className={styles.result}>
                  <span className={styles.resultVal}>{threshold} sdm</span>
                  <span className={styles.resultLabel}>garam</span>
                </div>
              )}
            </div>
          </div>

          {step >= 1 && (
            <div className={styles.step}>
              <div className={styles.stepNum}>2</div>
              <div className={styles.stepBody}>
                <div className={styles.stepTitle}>Hipotesis vs Hasil Aktual</div>
                <div className={styles.stepDesc}>
                  Berapa perkiraan awal kelasmu? Ketuk angkanya.
                </div>
                <div className={styles.hypoPicker}>
                  {SALT_STEPS.map(s => (
                    <button
                      key={s}
                      className={hypo === s ? styles.hypoSel : styles.hypoBtn}
                      onClick={() => setHypo(s)}
                    >
                      {s} sdm
                    </button>
                  ))}
                </div>
                {hypo !== null && threshold !== null && (
                  <div className={styles.diffBox}>
                    <span className={styles.mono}>{hypo} sdm</span>
                    <span className={styles.diffOp}> − </span>
                    <span className={styles.mono}>{threshold} sdm</span>
                    <span className={styles.diffOp}> = </span>
                    <span className={styles.diffVal}>{Math.abs(hypo - threshold)} sdm</span>
                    <span className={styles.diffLabel}>
                      {hypo === threshold ? ' tepat!' : hypo > threshold ? ' terlalu tinggi' : ' terlalu rendah'}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {step >= 2 && (
            <div className={styles.step}>
              <div className={styles.stepNum}>3</div>
              <div className={styles.stepBody}>
                <div className={styles.stepTitle}>Pola Data</div>
                <div className={styles.stepDesc}>
                  Apakah perubahan terjadi <em>tiba-tiba</em> atau <em>bertahap</em>?
                </div>
                <div className={styles.patternRow}>
                  <div className={styles.patternChip}>0–2 sdm → tenggelam</div>
                  <div className={styles.patternArrow}>▶</div>
                  <div className={styles.patternChip} style={{borderColor:'var(--teal-mid)'}}>4 sdm → melayang</div>
                  <div className={styles.patternArrow}>▶</div>
                  <div className={styles.patternChip} style={{background:'var(--teal-cream)'}}>6+ sdm → mengapung</div>
                </div>
                <div className={styles.note}>
                  Perubahan bertahap — ada fase transisi. Ini menunjukkan hubungan antara kadar garam dan
                  kerapatan larutan yang mengubah daya apung secara gradual.
                </div>
              </div>
            </div>
          )}

          {step >= 3 && (
            <div className={styles.step}>
              <div className={styles.stepNum}>4</div>
              <div className={styles.stepBody}>
                <div className={styles.stepTitle}>Hitung Data Poin</div>
                <div className={styles.result}>
                  <span className={styles.resultVal}>{data.length}</span>
                  <span className={styles.resultLabel}>kondisi diuji · {data.filter(r => r.status === 'Mengapung').length} mengapung · {data.filter(r => r.status === 'Tenggelam').length} tenggelam</span>
                </div>
              </div>
            </div>
          )}

          <div className={styles.navRow}>
            {step < 3 && (
              <button className={styles.navBtn} onClick={() => setStep(s => (s + 1) as 0|1|2|3)}>
                {['Lihat hipotesis vs aktual', 'Analisis pola', 'Hitung data poin'][step]} →
              </button>
            )}
            {step > 0 && (
              <button className={styles.navBack} onClick={() => setStep(s => (s - 1) as 0|1|2|3)}>
                ← Kembali
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
