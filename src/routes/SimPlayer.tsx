import { useParams, Link } from 'react-router-dom'
import { getSim } from '../registry'
import { AppBar } from './AppBar'
import { SimShell } from '../shell/SimShell'
import styles from './SimPlayer.module.css'

export function SimPlayer() {
  const { id = '' } = useParams()
  const sim = getSim(id)

  if (!sim) {
    return (
      <div className={styles.page}>
        <AppBar />
        <div className={styles.notFound}>
          <p>Simulasi tidak ditemukan.</p>
          <Link to="/" className={styles.back}>← Beranda</Link>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <AppBar />
      <div className={styles.player}>
        <div className={styles.bar}>
          <Link to={`/c/${sim.mapel}/${sim.kelas}`} className={styles.back}>← {sim.mapel} · Kelas {sim.kelas}</Link>
          <span className={styles.crumb}>{sim.babTitle.split(' · ')[0]} · Pertemuan {sim.pertemuan}</span>
        </div>
        <div className={styles.stage}>
          <SimShell title={sim.babTitle} meta={`P${sim.pertemuan}`} scenes={sim.scenes} />
        </div>
      </div>
    </div>
  )
}
