import { useParams, Link } from 'react-router-dom'
import { babsFor } from '../registry'
import { AppBar } from './AppBar'
import { BabIcon } from './BabIcon'
import styles from './Browse.module.css'

export function Browse() {
  const { mapel = '', kelas = '' } = useParams()
  const babs = babsFor(mapel, kelas)

  return (
    <div className={styles.page}>
      <AppBar />
      <div className={styles.wrap}>
        <div className={styles.crumb}>
          <Link to="/" className={styles.crumbLink}>Beranda</Link>
          <span className={styles.crumbSep}>›</span>
          <span>{mapel} · Kelas {kelas}</span>
        </div>
        <div className={styles.head}>
          <h1>{mapel} · Kelas {kelas}</h1>
          <p>Pilih simulasi untuk ditayangkan di kelas.</p>
        </div>

        {babs.length === 0 && <div className={styles.empty}>Belum ada simulasi di sini.</div>}

        {babs.map(bab => (
          <section key={bab.babId} className={styles.sec}>
            <div className={styles.secHead}>
              <span className={styles.secMeta}>{bab.babTitle}</span>
              <span className={styles.secCount}>{bab.sims.length} simulasi</span>
            </div>
            <div className={styles.grid}>
              {bab.sims.map(sim => (
                <Link key={sim.id} to={`/sim/${sim.id}`} className={styles.card}>
                  <div className={styles.tile} style={{ background: `var(--${sim.babId}-bg)`, color: `var(--${sim.babId}-fg)` }}>
                    <BabIcon babId={sim.babId} />
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.cardMeta}>Pertemuan {sim.pertemuan} · {sim.scenes.length} scene</div>
                    <div className={styles.cardTitle}>{sim.judul.split(' — ')[0]}</div>
                  </div>
                  <span className={styles.chev}>›</span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
