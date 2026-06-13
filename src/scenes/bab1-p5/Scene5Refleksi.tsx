import { useState } from 'react'
import { VAR_LABEL, VAR_COLOR, type VarType } from './data'
import styles from './Scene5Refleksi.module.css'

const QUIZ: { k: string; t: VarType }[] = [
  { k: 'Jumlah pupuk',   t: 'bebas' },
  { k: 'Tinggi tanaman', t: 'terikat' },
  { k: 'Jenis tanaman',  t: 'kontrol' },
  { k: 'Ukuran pot',     t: 'kontrol' },
  { k: 'Jumlah air',     t: 'kontrol' },
]

export function Scene5Refleksi() {
  const [open, setOpen] = useState<Set<number>>(new Set())
  const toggle = (i: number) => setOpen(p => { const n = new Set(p); n.has(i) ? n.delete(i) : n.add(i); return n })

  return (
    <>
      <p className={styles.prompt}>Coba di kasus baru: <em>“Pengaruh jumlah pupuk terhadap tinggi tanaman.”</em> Klik tiap faktor.</p>
      <div className={styles.main}>
        <div className={styles.quiz}>
          {QUIZ.map((q, i) => {
            const shown = open.has(i)
            return (
              <div key={q.k} role="button" className={styles.qCard}
                style={shown ? { borderColor: VAR_COLOR[q.t] } : undefined} onClick={() => toggle(i)}>
                <span className={styles.qName}>{q.k}</span>
                {shown
                  ? <span className={styles.qType} style={{ color: VAR_COLOR[q.t] }}>{VAR_LABEL[q.t]}</span>
                  : <span className={styles.qHint}>klik</span>}
              </div>
            )
          })}
        </div>
        <div className={styles.side}>
          <div className={styles.recap}>
            <span className={styles.recapLabel}>ingat tiga peran</span>
            <p><b style={{ color: '#088395' }}>Bebas</b> — yang kita ubah.</p>
            <p><b style={{ color: '#7AB2B2' }}>Terikat</b> — yang kita ukur.</p>
            <p><b style={{ color: '#d8c39a' }}>Kontrol</b> — yang dijaga tetap.</p>
          </div>
          <div className={styles.reflect}>
            <span className={styles.recapLabel}>renungkan</span>
            <p>Kenapa variabel kontrol penting supaya percobaan tetap adil?</p>
          </div>
        </div>
      </div>
    </>
  )
}
