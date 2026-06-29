import { useState } from 'react'
import styles from './Scene6Numerasi.module.css'

const GRAPH_DATA = [
  { t: 0, temp: -20, phase: 'ice' },
  { t: 2, temp: -10, phase: 'ice' },
  { t: 4, temp:   0, phase: 'ice' },
  { t: 6, temp:   0, phase: 'melt' },
  { t: 8, temp:   0, phase: 'melt' },
  { t: 10, temp: 20, phase: 'water' },
  { t: 12, temp: 60, phase: 'water' },
  { t: 14, temp: 100, phase: 'water' },
  { t: 16, temp: 100, phase: 'boil' },
  { t: 18, temp: 100, phase: 'boil' },
  { t: 20, temp: 115, phase: 'steam' },
]

const PHASE_LABELS: Record<string, string> = {
  ice: 'Es (padat)', melt: 'Mencair (plateau)', water: 'Air (cair)',
  boil: 'Menguap (plateau)', steam: 'Uap (gas)'
}

export function Scene6Numerasi() {
  const [step, setStep] = useState<0|1|2|3>(0)
  const [hover, setHover] = useState<number|null>(null)

  const melt = 0; const boil = 100
  const nPlateaus = 2
  const W = 540, H = 240
  const PADl = 48, PADr = 16, PADt = 16, PADb = 40
  const xS = (t: number) => PADl + (t / 20) * (W - PADl - PADr)
  const yS = (T: number) => PADt + ((130 - T) / 150) * (H - PADt - PADb)
  const phaseColors: Record<string, string> = {
    ice: '#a8d5dc', melt: '#f59e0b', water: '#0d6b7a', boil: '#f59e0b', steam: '#89c5cc'
  }

  return (
    <>
      <p className={styles.prompt}>
        Sekarang kita <em>baca angka dari grafik</em> — bukan hanya melihat bentuknya.
      </p>
      <div className={styles.main}>
        <div className={styles.graphWrap}>
          <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{width:'100%',height:'auto'}}>
            {[-20,0,50,100,120].map(T => (
              <line key={T} x1={PADl} x2={W-PADr} y1={yS(T)} y2={yS(T)}
                stroke="#e2e6ea" strokeWidth={T===0||T===100?1.5:0.5} strokeDasharray={T===0||T===100?'':'4,3'}/>
            ))}
            {[-20,0,100].map(T => (
              <text key={T} x={PADl-6} y={yS(T)+4} textAnchor="end" fontSize="11" fill="#6b7280" fontFamily="DM Mono">{T}°C</text>
            ))}
            {[0,4,8,12,16,20].map(t => (
              <text key={t} x={xS(t)} y={H-PADb+14} textAnchor="middle" fontSize="11" fill="#6b7280" fontFamily="DM Mono">{t}</text>
            ))}
            <text x={(W-PADr+PADl)/2} y={H-4} textAnchor="middle" fontSize="11" fill="#6b7280">Waktu (menit)</text>
            {GRAPH_DATA.slice(0,-1).map((d,i) => {
              const next = GRAPH_DATA[i+1]
              return <line key={i} x1={xS(d.t)} y1={yS(d.temp)} x2={xS(next.t)} y2={yS(next.temp)}
                stroke={phaseColors[d.phase]} strokeWidth={3} strokeLinecap="round"/>
            })}
            {step >= 1 && (
              <>
                <rect x={xS(4)} y={yS(0)-4} width={xS(10)-xS(4)} height={8} fill="#f59e0b" opacity={0.25} rx={3}/>
                <text x={(xS(4)+xS(10))/2} y={yS(0)-10} textAnchor="middle" fontSize="10" fill="#d97706" fontWeight="600">Plateau 1</text>
                <rect x={xS(14)} y={yS(100)-4} width={xS(18)-xS(14)} height={8} fill="#f59e0b" opacity={0.25} rx={3}/>
                <text x={(xS(14)+xS(18))/2} y={yS(100)-10} textAnchor="middle" fontSize="10" fill="#d97706" fontWeight="600">Plateau 2</text>
              </>
            )}
            {GRAPH_DATA.map((d,i) => (
              <circle key={i} cx={xS(d.t)} cy={yS(d.temp)} r={5}
                fill={hover===i?'#0d6b7a':'white'} stroke={phaseColors[d.phase]} strokeWidth={2}
                style={{cursor:'pointer'}} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}/>
            ))}
            {hover !== null && (
              <g>
                <rect x={xS(GRAPH_DATA[hover].t)-50} y={yS(GRAPH_DATA[hover].temp)-40} width={110} height={34} rx={5} fill="#1a1c1e" opacity={0.85}/>
                <text x={xS(GRAPH_DATA[hover].t)+5} y={yS(GRAPH_DATA[hover].temp)-24} textAnchor="middle" fontSize="11" fill="white" fontFamily="DM Mono">{GRAPH_DATA[hover].t} mnt · {GRAPH_DATA[hover].temp}°C</text>
                <text x={xS(GRAPH_DATA[hover].t)+5} y={yS(GRAPH_DATA[hover].temp)-11} textAnchor="middle" fontSize="10" fill="#89c5cc">{PHASE_LABELS[GRAPH_DATA[hover].phase]}</text>
              </g>
            )}
          </svg>
          <p style={{fontSize:'12px',color:'var(--ink-4)',fontFamily:'var(--font-mono)',margin:'4px 0 0'}}>Hover titik untuk lihat nilai dan fase</p>
        </div>

        <div className={styles.calcPanel}>
          <div className={styles.calcStep}>
            <div className={styles.stepHead}><span className={styles.badge}>1</span>Baca Titik Lebur & Didih</div>
            <div className={styles.vals}>
              <div className={styles.val}><span className={styles.valNum}>{melt}°C</span><span className={styles.valLbl}>Titik lebur</span></div>
              <div className={styles.val}><span className={styles.valNum}>{boil}°C</span><span className={styles.valLbl}>Titik didih</span></div>
            </div>
          </div>

          {step >= 1 && <div className={styles.calcStep}>
            <div className={styles.stepHead}><span className={styles.badge}>2</span>Hitung Plateau</div>
            <div className={styles.answer}><span className={styles.ansVal}>{nPlateaus}</span><span className={styles.ansLbl}>plateau dalam grafik</span></div>
          </div>}

          {step >= 2 && <div className={styles.calcStep}>
            <div className={styles.stepHead}><span className={styles.badge}>3</span>Selisih Suhu</div>
            <div className={styles.formula}>{boil} – {melt} = <b>{boil-melt}°C</b> (rentang wujud cair)</div>
          </div>}

          {step >= 3 && <div className={styles.calcStep}>
            <div className={styles.stepHead}><span className={styles.badge}>4</span>Kemiringan Segmen</div>
            <div className={styles.note}>Es: 20°C dalam 4 mnt = <b>5°C/mnt</b><br/>Air: 100°C dalam 6 mnt = <b>~16,7°C/mnt</b><br/>Air naik lebih cepat → kapasitas kalor es lebih besar.</div>
          </div>}

          {step < 3 && <button className={styles.nextBtn} onClick={() => setStep(s => (s+1) as 0|1|2|3)}>
            {['Tandai plateau','Hitung selisih suhu','Bandingkan kemiringan'][step]} →
          </button>}
        </div>
      </div>
    </>
  )
}
