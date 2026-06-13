import styles from './ProgressDots.module.css'
interface Props { total: number; active: number; onJump?: (i: number) => void }
export function ProgressDots({ total, active, onJump }: Props) {
  return (
    <div className={styles.progress}>
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          role={onJump ? 'button' : undefined}
          tabIndex={onJump ? 0 : undefined}
          aria-label={onJump ? `Ke scene ${i + 1}` : undefined}
          className={`${styles.dot} ${i === active ? styles.active : ''}`}
          onClick={onJump ? () => onJump(i) : undefined}
          style={onJump ? { cursor: 'pointer' } : undefined}
        />
      ))}
    </div>
  )
}
