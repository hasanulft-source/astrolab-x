import { useParams, Link } from 'react-router-dom'
import { getSim } from '../registry'
import { AppBar } from './AppBar'
import { DiscoveryShell } from '../shell/DiscoveryShell'
import type { DiscoveryScene } from '../scenes/discovery-types'
import styles from './SimPlayer.module.css'

export function DiscoveryPlayer() {
  const { id = '' } = useParams()
  const sim = getSim(id)

  if (!sim || !sim.isDiscovery) {
    return (
      <div className={styles.page}>
        <AppBar />
        <div className={styles.notFound}>
          <p>Simulasi Discovery tidak ditemukan.</p>
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
          <span className={styles.crumb}>{sim.babTitle.split(' · ')[0]} · P{sim.pertemuan}</span>
        </div>
        <div className={styles.stage} style={{ background: 'var(--discovery-bg)', padding: 0 }}>
          <DiscoveryShell
            title={sim.judul}
            scenes={sim.scenes as unknown as DiscoveryScene[]}
          />
        </div>
      </div>
    </div>
  )
}
