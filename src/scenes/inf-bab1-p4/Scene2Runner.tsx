import { useState, useEffect } from 'react'
import styles from './ui.module.css'
const DIRS = [[0, -1], [1, 0], [0, 1], [-1, 0]]
const START = { x: 0, y: 4, dir: 1 }
const GOAL = { x: 4, y: 0 }
export function Scene2Runner() {
  const [prog, setProg] = useState<string[]>([])
  const [run, setRun] = useState(false)
  const [idx, setIdx] = useState(0)
  const [pos, setPos] = useState(START)
  const [won, setWon] = useState(false)

  useEffect(() => {
    if (!run) return
    if (idx >= prog.length) { setRun(false); return }
    const t = setTimeout(() => {
      const cmd = prog[idx]
      setPos(p => {
        if (cmd === 'F') { const [dx, dy] = DIRS[p.dir]; const nx = p.x + dx, ny = p.y + dy; if (nx >= 0 && nx <= 4 && ny >= 0 && ny <= 4) return { ...p, x: nx, y: ny }; return p }
        if (cmd === 'L') return { ...p, dir: (p.dir + 3) % 4 }
        return { ...p, dir: (p.dir + 1) % 4 }
      })
      setIdx(i => i + 1)
    }, 440)
    return () => clearTimeout(t)
  }, [run, idx, prog])

  useEffect(() => { if (pos.x === GOAL.x && pos.y === GOAL.y) setWon(true) }, [pos])

  const add = (c: string) => { if (!run) { setProg(p => [...p, c]); setWon(false) } }
  const startRun = () => { if (prog.length && !run) { setPos(START); setIdx(0); setWon(false); setRun(true) } }
  const reset = () => { setRun(false); setProg([]); setIdx(0); setPos(START); setWon(false) }
  const cx = pos.x * 40 + 20, cy = pos.y * 40 + 20
  const label: Record<string, string> = { F: 'maju', L: 'belok kiri', R: 'belok kanan' }

  return (
    <>
      <p className={styles.prompt}>Susun blok agar robot mencapai <em>bintang.</em> Lalu tekan Jalankan.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <svg viewBox="0 0 200 200" className={styles.grid}>
            {Array.from({ length: 6 }).map((_, i) => <g key={i}><line x1={i * 40} y1="0" x2={i * 40} y2="200" stroke="#d6e0e2" strokeWidth="1" /><line x1="0" y1={i * 40} x2="200" y2={i * 40} stroke="#d6e0e2" strokeWidth="1" /></g>)}
            <rect x={GOAL.x * 40 + 4} y={GOAL.y * 40 + 4} width="32" height="32" rx="6" fill="#fcefb0" />
            <text x={GOAL.x * 40 + 20} y={GOAL.y * 40 + 27} textAnchor="middle" fontSize="22" fill="#e0a93a">{'\u2605'}</text>
            <g transform={`translate(${cx},${cy}) rotate(${pos.dir * 90})`} style={{ transition: 'transform .35s ease' }}>
              <rect x="-12" y="-12" width="24" height="24" rx="6" fill="#4a5bd0" />
              <path d="M0 -16 L7 -7 L-7 -7 Z" fill="#ffd97a" />
            </g>
          </svg>
        </div>
        <div className={styles.side}>
          <div className={styles.palette}>
            <button className={styles.pF} disabled={run} onClick={() => add('F')}>maju</button>
            <button className={styles.pT} disabled={run} onClick={() => add('L')}>belok kiri</button>
            <button className={styles.pT} disabled={run} onClick={() => add('R')}>belok kanan</button>
          </div>
          <div className={styles.progBox}>{prog.length === 0 ? <span className={styles.ph}>Programmu kosong…</span> : prog.map((c, k) => <span key={k} className={`${styles.pchip} ${idx === k && run ? styles.active : ''}`}>{label[c]}</span>)}</div>
          {won
            ? <div className={styles.fbOk}>Berhasil! Robot sampai ke bintang.</div>
            : (!run && idx >= prog.length && prog.length > 0 ? <div className={styles.fbNo}>Belum sampai - coba ubah urutan bloknya.</div> : null)}
          <div className={styles.actions}>
            <button className={styles.btn} disabled={run || prog.length === 0} onClick={startRun}>Jalankan ▶</button>
            <button className={styles.reset} onClick={reset}>Reset</button>
          </div>
        </div>
      </div>
    </>
  )
}
