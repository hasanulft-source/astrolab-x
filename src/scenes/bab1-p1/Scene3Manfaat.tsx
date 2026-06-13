import { useState } from 'react'
import { ConstellationViewer } from '../../components/ConstellationViewer'
import { BRANCHES, byId } from './data'
import styles from './Scene3Manfaat.module.css'

export function Scene3Manfaat() {
  const [sel, setSel] = useState<string>('fisika')
  const b = byId(sel)!
  return (
    <>
      <p className={styles.prompt}>Tiap cabang punya peran nyata. Klik cabang — lihat <em>yang dipelajari</em> dan <em>manfaatnya</em>.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <ConstellationViewer branches={BRANCHES} selected={sel} onSelect={setSel} />
        </div>
        <div className={styles.panel}>
          <div className={styles.head}>
            <span className={styles.pIcon}>{b.icon}</span>
            <span className={styles.pName}>{b.name}</span>
          </div>
          <div className={styles.field}>
            <span className={styles.fLabel}>yang dipelajari</span>
            <p>{b.dipelajari}</p>
          </div>
          <div className={styles.field}>
            <span className={styles.fLabel}>manfaat sehari-hari</span>
            <p>{b.manfaat}</p>
          </div>
        </div>
      </div>
    </>
  )
}
