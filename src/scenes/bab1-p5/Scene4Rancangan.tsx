import { useState } from 'react'
import { VAR_LABEL, VAR_COLOR, type VarType } from './data'
import styles from './Scene4Rancangan.module.css'

const STEPS = [
  { label: 'Pertanyaan', text: 'Apakah jumlah garam memengaruhi telur mengapung?' },
  { label: 'Hipotesis',  text: 'Makin banyak garam, telur makin mudah mengapung — karena air garam lebih padat.' },
  { label: 'Prosedur',   text: 'Tambahkan garam sendok demi sendok, aduk, amati posisi telur tiap kali.' },
  { label: 'Prediksi',   text: 'Sekitar 6 sendok, telur mulai mengapung.' },
]

const ITEMS: { k: string; t: VarType; why: string }[] = [
  { k: 'Jumlah garam',  t: 'bebas',   why: 'Faktor yang sengaja kita ubah-ubah.' },
  { k: 'Posisi telur',  t: 'terikat', why: 'Hasil yang diamati — bergantung pada garam.' },
  { k: 'Jumlah air',    t: 'kontrol', why: 'Dijaga tetap agar perbandingan adil.' },
  { k: 'Ukuran telur',  t: 'kontrol', why: 'Telur beda ukuran bikin hasil tak adil.' },
  { k: 'Suhu air',      t: 'kontrol', why: 'Memengaruhi massa jenis air, harus tetap.' },
]

export function Scene4Rancangan() {
  const [open, setOpen] = useState<Set<number>>(new Set())
  const toggle = (i: number) => setOpen(p => { const n = new Set(p); n.has(i) ? n.delete(i) : n.add(i); return n })

  return (
    <>
      <p className={styles.prompt}>Begini rancangan percobaannya. Klik tiap faktor — <em>termasuk variabel apa?</em></p>
      <div className={styles.main}>
        <div className={styles.steps}>
          {STEPS.map(s => (
            <div key={s.label} className={styles.step}>
              <span className={styles.stepLabel}>{s.label}</span>
              <span className={styles.stepText}>{s.text}</span>
            </div>
          ))}
          <div className={styles.note}><b>Hipotesis</b> = dugaan + alasan (kenapa). <b>Prediksi</b> = tebakan hasil spesifik (apa yang terjadi).</div>
        </div>
        <div className={styles.tags}>
          {ITEMS.map((it, i) => {
            const shown = open.has(i)
            return (
              <div key={it.k} role="button" className={styles.tagCard}
                style={shown ? { borderColor: VAR_COLOR[it.t] } : undefined} onClick={() => toggle(i)}>
                <div className={styles.tagTop}>
                  <span className={styles.tagName}>{it.k}</span>
                  {shown
                    ? <span className={styles.tagType} style={{ color: VAR_COLOR[it.t] }}>{VAR_LABEL[it.t]}</span>
                    : <span className={styles.tagHint}>klik</span>}
                </div>
                {shown && <div className={styles.tagWhy}>{it.why}</div>}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
