import styles from './StageHeader.module.css'
interface Props { num:string; stage:string; time:string }
export function StageHeader({ num, stage, time }: Props) {
  return (
    <div className={styles.head}>
      <span className={styles.num}>{num}</span>
      <span className={styles.stage}>{stage}</span>
      <span className={styles.time}>{time}</span>
    </div>
  )
}
