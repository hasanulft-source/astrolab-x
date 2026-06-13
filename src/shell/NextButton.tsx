import styles from './NextButton.module.css'
interface Props { label:string; onClick:()=>void }
export function NextButton({ label, onClick }: Props) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {label}<span className={styles.arrow}>→</span>
    </button>
  )
}
