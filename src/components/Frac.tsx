import type { ReactNode } from 'react'
import styles from './Frac.module.css'
export function Frac({ top, bottom }: { top: ReactNode; bottom: ReactNode }) {
  return (
    <span className={styles.frac}>
      <span className={styles.top}>{top}</span>
      <span className={styles.bot}>{bottom}</span>
    </span>
  )
}
