import type { ComponentType } from 'react'
import styles from './ObjectCard.module.css'

interface Props { name:string; state:string; Illustration:ComponentType; active?:boolean; onClick?:()=>void }

export function ObjectCard({ name, state, Illustration, active, onClick }: Props) {
  return (
    <div className={`${styles.card} ${active ? styles.active : ''}`} onClick={onClick} role="button" tabIndex={0}>
      <Illustration />
      <div className={styles.name}>{name}</div>
      <div className={styles.state}>{state}</div>
    </div>
  )
}
