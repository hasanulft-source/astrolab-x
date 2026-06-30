import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const DATASET = [
  { label:'Kelompok A', data:[12.1,12.0,12.1,12.0,12.1], ref:12.0, warna:'#0d6b7a' },
  { label:'Kelompok B', data:[12.4,12.5,12.4,12.6,12.5], ref:12.0, warna:'#d97706' },
  { label:'Kelompok C', data:[11.5,12.8,12.1,13.0,11.9], ref:12.0, warna:'#dc2626' },
]

function avg(arr: number[]) { return arr.reduce((a,b)=>a+b,0)/arr.length }
function maxDev(arr: number[]) { const a = avg(arr); return Math.max(...arr.map(v=>Math.abs(v-a))) }

export function Scene3PresiAkurasi({ onUnlock }: DiscoverySceneProps) {
  const [sel, setSel] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const d = DATASET[sel]
  const a = avg(d.data)
  const md = maxDev(d.data)
  const isPrecise = md < 0.2
  const isAccurate = Math.abs(a - d.ref) < 0.2

  return (
    <div className={styles.polaPanel}>
      <div className={local.dartPanel}>
        <div className={styles.chartTitle}>Bandingkan tiga kelompok yang mengukur benda sama (nilai sebenarnya: 12,0 cm):</div>
        <div className={local.dsButtons}>
          {DATASET.map((ds, i) => (
            <button key={i} className={`${local.dsBtn} ${sel === i ? local.dsBtnOn : ''}`}
              style={sel === i ? { borderColor: ds.warna, background: ds.warna + '18' } : {}}
              onClick={() => setSel(i)}>{ds.label}</button>
          ))}
        </div>
        <div className={local.dataViz}>
          <div className={local.dotRow}>
            {d.data.map((v, i) => {
              const off = ((v - 12) / 1.5) * 50
              return <div key={i} className={local.dot} style={{ left:`${50 + off}%`, background: d.warna }} />
            })}
            <div className={local.refLine} />
          </div>
          <div className={local.axisRow}><span>11,0</span><span>12,0</span><span>13,0</span></div>
        </div>
        <div className={local.statRow}>
          <div><span>Rata-rata</span><strong>{a.toFixed(2)} cm</strong></div>
          <div><span>Simpangan maks</span><strong>±{md.toFixed(2)} cm</strong></div>
        </div>
      </div>

      <div className={styles.questPanel}>
        {!revealed ? (
          <>
            <div className={styles.questText}>Berdasarkan data {d.label}, bagaimana menilai pengukuran ini?</div>
            <div className={styles.questOpts}>
              {['Presisi dan akurat','Presisi tapi tidak akurat','Tidak presisi tapi akurat','Tidak presisi dan tidak akurat'].map((o, i) => {
                const correct = (isPrecise && isAccurate && i===0)||(isPrecise && !isAccurate && i===1)||(!isPrecise && isAccurate && i===2)||(!isPrecise && !isAccurate && i===3)
                return (
                  <button key={i} className={`${styles.questOpt}`}
                    onClick={() => { if (Object.keys({}).length === 0) { setRevealed(true); onUnlock() } }}>
                    {o}
                  </button>
                )
              })}
            </div>
            <button className={styles.revealBtn} onClick={() => { setRevealed(true); onUnlock() }}>Analisis →</button>
          </>
        ) : (
          <div className={styles.conceptCard}>
            <div className={styles.conceptTitle}>{d.label}:</div>
            <div style={{display:'flex',gap:10,flexWrap:'wrap',marginBottom:6}}>
              <span style={{padding:'4px 12px',borderRadius:8,background:isPrecise?'#dcfce7':'#fee2e2',color:isPrecise?'#14532d':'#7f1d1d',fontWeight:700,fontSize:14}}>
                {isPrecise ? '✓ Presisi' : '✗ Tidak Presisi'}
              </span>
              <span style={{padding:'4px 12px',borderRadius:8,background:isAccurate?'#dcfce7':'#fee2e2',color:isAccurate?'#14532d':'#7f1d1d',fontWeight:700,fontSize:14}}>
                {isAccurate ? '✓ Akurat' : '✗ Tidak Akurat'}
              </span>
            </div>
            <p className={styles.conceptText}>
              <strong>Presisi</strong> = data berkumpul dekat satu sama lain (konsisten).<br />
              <strong>Akurasi</strong> = rata-rata dekat dengan nilai sebenarnya (benar).<br />
              Keduanya diperlukan untuk pengukuran yang baik.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
