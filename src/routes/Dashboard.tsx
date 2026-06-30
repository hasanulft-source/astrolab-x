import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SIMS, subjectGroups, recentSims, type SimEntry } from '../registry'
import { AppBar } from './AppBar'
import { BabIcon } from './BabIcon'
import styles from './Dashboard.module.css'

function SimRow({ sim }: { sim: SimEntry }) {
  return (
    <Link to={sim.isDiscovery ? `/discovery/${sim.id}` : `/sim/${sim.id}`} className={styles.card}>
      <div className={styles.tile} style={{ background: `var(--${sim.babId}-bg)`, color: `var(--${sim.babId}-fg)` }}>
        <BabIcon babId={sim.babId} />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardMeta}>{sim.mapel} · Kelas {sim.kelas} · Pertemuan {sim.pertemuan}</div>
        <div className={styles.cardTitle}>{sim.judul.split(' — ')[0]}</div>
      </div>
      <span className={styles.cardScenes}>{sim.scenes.length} scene</span>
      <span className={styles.chev}>›</span>
    </Link>
  )
}

export function Dashboard() {
  const [q, setQ] = useState('')
  const subjects = subjectGroups()
  const recent = recentSims(6)
  const cont = recent[0]
  const query = q.trim().toLowerCase()
  const results = query ? SIMS.filter(s => (s.judul + s.babTitle + s.mapel + s.kelas + s.pertemuan).toLowerCase().includes(query)) : []

  const search = (
    <div className={styles.search}>
      <span className={styles.searchIcon}>⌕</span>
      <input value={q} onChange={e => setQ(e.target.value)} placeholder="Cari simulasi…" />
    </div>
  )

  return (
    <div className={styles.page}>
      <AppBar right={search} />
      <div className={styles.wrap}>
        {query ? (
          <>
            <div className={styles.sectionLabel}>Hasil pencarian · {results.length}</div>
            <div className={styles.list}>
              {results.map(s => <SimRow key={s.id} sim={s} />)}
              {results.length === 0 && <div className={styles.empty}>Gak ada yang cocok dengan “{q}”.</div>}
            </div>
          </>
        ) : (
          <>
            <div className={styles.head}>
              <h1>Simulasi Sains</h1>
              <p>Pilih simulasi untuk ditayangkan di kelas.</p>
            </div>

            {cont && (
              <Link to={cont.isDiscovery ? `/discovery/${cont.id}` : `/sim/${cont.id}`} className={styles.continue}>
                <div className={styles.contTile} style={{ background: `var(--${cont.babId}-bg)`, color: `var(--${cont.babId}-fg)` }}>
                  <BabIcon babId={cont.babId} size={28} />
                </div>
                <div className={styles.contBody}>
                  <div className={styles.contEyebrow}>Terakhir dibuka</div>
                  <div className={styles.contTitle}>{cont.judul.split(' — ')[0]}</div>
                  <div className={styles.contMeta}>{cont.mapel} · Kelas {cont.kelas} · {cont.babTitle.split(' · ')[0]} · {cont.scenes.length} scene</div>
                </div>
                <span className={styles.resume}>Lanjutkan ›</span>
              </Link>
            )}

            <div className={styles.sectionLabel}>Mata pelajaran</div>
            <div className={styles.subjects}>
              {subjects.map(sg => (
                <Link key={sg.mapel + sg.kelas} to={`/c/${sg.mapel}/${sg.kelas}`} className={styles.subj}>
                  <div className={styles.subjIcon}><BabIcon babId={sg.iconBabId} size={26} /></div>
                  <div className={styles.subjName}>{sg.mapel}</div>
                  <div className={styles.subjGrade}>Kelas {sg.kelas}</div>
                  <div className={styles.subjStats}><span><b>{sg.babCount}</b> BAB</span><span className={styles.dot2}>·</span><span><b>{sg.simCount}</b> simulasi</span></div>
                </Link>
              ))}
            </div>

            <div className={styles.sectionLabel}>Simulasi terbaru</div>
            <div className={styles.list}>
              {recent.map(s => <SimRow key={s.id} sim={s} />)}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
