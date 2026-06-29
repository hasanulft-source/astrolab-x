import { useState } from 'react'
import styles from './Scene.module.css'

type Reaction = { name: string; color1: string; color2: string; gas: boolean; precipitate: boolean; tempChange: 'naik'|'turun'|'tetap'; newSubstance: boolean }

const REACTIONS: Reaction[] = [
  { name: 'Cuka + Soda Kue', color1: 'bening', color2: 'bening (berbusa)', gas: true, precipitate: false, tempChange: 'turun', newSubstance: true },
  { name: 'Kunyit + Air Kapur', color1: 'kuning', color2: 'merah kecoklatan', gas: false, precipitate: false, tempChange: 'tetap', newSubstance: true },
  { name: 'Pemanasan Gula', color1: 'putih', color2: 'coklat (karamel)', gas: false, precipitate: false, tempChange: 'naik', newSubstance: true },
]

const CIRI = ['Terbentuk zat baru','Perubahan warna','Timbul gas / gelembung','Terbentuk endapan']

export default function Scene() {
  const [active, setActive] = useState<0|1|2>(0)
  const [revealed, setRevealed] = useState(false)
  const r = REACTIONS[active]
  const ciriCount = [r.newSubstance, r.color1 !== r.color2, r.gas, r.precipitate].filter(Boolean).length

  return (
    <div className={styles.wrap}>
      <p className={styles.prompt}>
        Kita jadi <em>detektif kimia</em> — temukan bukti perubahan kimia dari setiap reaksi.
      </p>
      <div className={styles.main}>
        <div className={styles.reactionPicker}>
          {REACTIONS.map((rx,i) => (
            <button key={i} className={i===active ? styles.rxBtnActive : styles.rxBtn}
              onClick={() => { setActive(i as 0|1|2); setRevealed(false) }}>
              {rx.name}
            </button>
          ))}
        </div>

        <div className={styles.labBench}>
          <div className={styles.beakers}>
            <div className={styles.beaker}>
              <div className={styles.liquid} style={{background: colorHex(r.color1)}}/>
              <div className={styles.beakerLabel}>Sebelum</div>
              <div className={styles.beakerSub}>{r.color1}</div>
            </div>
            <div className={styles.arrow}>→</div>
            <div className={styles.beaker}>
              <div className={styles.liquid} style={{background: colorHex(r.color2), ...(r.gas?{backgroundImage:'radial-gradient(circle at 30% 20%, rgba(255,255,255,.4) 4px, transparent 4px), radial-gradient(circle at 70% 60%, rgba(255,255,255,.35) 5px, transparent 5px)'}:{})}}>
                {r.gas && <div className={styles.bubbles}><span>○</span><span>○</span><span>○</span></div>}
              </div>
              <div className={styles.beakerLabel}>Sesudah</div>
              <div className={styles.beakerSub}>{r.color2}</div>
            </div>
          </div>

          <button className={styles.revealBtn} onClick={() => setRevealed(true)}>
            {revealed ? '✓ Bukti terungkap' : 'Ungkap bukti →'}
          </button>

          {revealed && (
            <div className={styles.evidence}>
              <div className={styles.evTitle}>Ciri yang ditemukan:</div>
              {CIRI.map((c,i) => {
                const found = [r.newSubstance, r.color1 !== r.color2, r.gas, r.precipitate][i]
                return (
                  <div key={i} className={found ? styles.evFound : styles.evNot}>
                    <span className={styles.evIcon}>{found ? '✓' : '✗'}</span>
                    {c}
                  </div>
                )
              })}
              <div className={styles.ciriCount}>
                <span className={styles.ciriNum}>{ciriCount}</span>
                <span className={styles.ciriLbl}>dari 4 ciri perubahan kimia ditemukan</span>
              </div>
              <div className={styles.verdict}>
                Ini adalah <strong>perubahan KIMIA</strong> — zat baru terbentuk.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function colorHex(name: string): string {
  if (name.includes('kuning')) return '#f6d860'
  if (name.includes('merah')) return '#c0392b'
  if (name.includes('coklat') || name.includes('karamel')) return '#8B4513'
  if (name.includes('putih')) return '#f5f5f5'
  return '#e8f4f8'
}
