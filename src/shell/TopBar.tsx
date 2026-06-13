import { ProgressDots } from './ProgressDots'
import { Logo } from '../components/Logo'
import styles from './TopBar.module.css'

interface Props { title: string; meta: string; total: number; active: number; onJump?: (i: number) => void }

export function TopBar({ title, meta, total, active, onJump }: Props) {
  return (
    <div className={styles.topbar}>
      <div className={styles.brand}>
        <div className={styles.brandMark}><Logo size={18} /></div>
        <span>AstroLab X</span>
      </div>
      <div className={styles.divider}/>
      <span className={styles.title}>{title}</span>
      <span className={styles.meta}>{meta}</span>
      <ProgressDots total={total} active={active} onJump={onJump} />
    </div>
  )
}
