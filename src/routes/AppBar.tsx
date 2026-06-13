import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { Logo } from '../components/Logo'
import styles from './AppBar.module.css'

export function AppBar({ right }: { right?: ReactNode }) {
  return (
    <div className={styles.bar}>
      <Link to="/" className={styles.brand}>
        <div className={styles.mark}><Logo size={24} /></div>
        <div className={styles.brandText}>
          <span className={styles.brandName}>AstroLab X</span>
          <span className={styles.brandSub}>hub simulasi</span>
        </div>
      </Link>
      {right && <div className={styles.right}>{right}</div>}
    </div>
  )
}
