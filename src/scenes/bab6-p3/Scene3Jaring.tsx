import { useState } from 'react'
import { NODES, EDGES, NAMA } from './data'
import styles from './ui.module.css'
export function Scene3Jaring() {
  const [sel, setSel] = useState<string | null>(null)
  const prey = sel ? EDGES.filter(([, b]) => b === sel).map(([a]) => a) : []
  const preds = sel ? EDGES.filter(([a]) => a === sel).map(([, b]) => b) : []
  const related = new Set(sel ? [sel, ...prey, ...preds] : [])

  return (
    <>
      <p className={styles.prompt}>Di alam nyata, rantai saling bersilang jadi <em>jaring makanan.</em> Klik satu hewan - lihat siapa memangsa siapa.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <svg viewBox="0 0 360 240" className={styles.web}>
            <defs>
              <marker id="aN" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0 0l6 3-6 3z" fill="#9bb4b8" /></marker>
              <marker id="aP" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0 0l6 3-6 3z" fill="#2f7d52" /></marker>
              <marker id="aD" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0 0l6 3-6 3z" fill="#0d6b7a" /></marker>
            </defs>
            {EDGES.map(([a, b], i) => {
              const na = NODES.find(n => n.id === a)!, nb = NODES.find(n => n.id === b)!
              const active = sel && (a === sel || b === sel)
              const dim = sel && !active
              const isPrey = sel && b === sel
              const stroke = !sel ? '#cfdee0' : active ? (isPrey ? '#2f7d52' : '#0d6b7a') : '#e6edee'
              const mk = !sel ? 'aN' : active ? (isPrey ? 'aP' : 'aD') : 'aN'
              return <line key={i} x1={na.x} y1={na.y} x2={nb.x} y2={nb.y} stroke={stroke} strokeWidth={active ? 2.4 : 1.4} markerEnd={`url(#${mk})`} opacity={dim ? 0.3 : 1} />
            })}
            {NODES.map(n => {
              const isSel = sel === n.id
              const rel = related.has(n.id)
              const faded = sel && !rel
              return (
                <g key={n.id} onClick={() => setSel(sel === n.id ? null : n.id)} style={{ cursor: 'pointer', opacity: faded ? 0.35 : 1 }}>
                  <circle cx={n.x} cy={n.y} r={isSel ? 17 : 14} fill={isSel ? '#0d6b7a' : '#fff'} stroke={isSel ? '#0d6b7a' : '#7AB2B2'} strokeWidth="2" />
                  <text x={n.x} y={n.y + (isSel ? 33 : 29)} textAnchor="middle" fontSize="12" fontWeight="600" fill={isSel ? '#0d6b7a' : '#3a3d42'}>{n.nama}</text>
                </g>
              )
            })}
          </svg>
        </div>
        <div className={styles.side}>
          {sel
            ? <div className={styles.detail}>
                <div className={styles.dName}>{NAMA[sel]}</div>
                <div className={styles.dRow}><span style={{ color: '#2f7d52' }}>Memangsa</span> {prey.length ? prey.map(p => NAMA[p]).join(', ') : 'Tidak ada (produsen)'}</div>
                <div className={styles.dRow}><span style={{ color: '#0d6b7a' }}>Dimangsa</span> {preds.length ? preds.map(p => NAMA[p]).join(', ') : 'Tidak ada (puncak)'}</div>
              </div>
            : <div className={styles.allNote}>Satu organisme bisa jadi <b>mangsa sekaligus pemangsa</b>. Klik untuk menelusuri jalurnya.</div>}
        </div>
      </div>
    </>
  )
}
