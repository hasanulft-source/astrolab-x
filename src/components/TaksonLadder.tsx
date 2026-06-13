import styles from './TaksonLadder.module.css'
export interface TLevel { takson: string; nilai: string; jumlah: string; alamat: string }

export function TaksonLadder({ levels, active, onSelect }: { levels: TLevel[]; active: number; onSelect: (i: number) => void }) {
  const n = levels.length
  return (
    <div className={styles.ladder}>
      {levels.map((l, i) => {
        const wpc = 100 - i * (52 / (n - 1))
        return (
          <button key={i} className={`${styles.rung} ${active === i ? styles.on : ''}`} style={{ width: `${wpc}%` }} onClick={() => onSelect(i)}>
            <span className={styles.takson}>{l.takson}</span>
            <span className={`${styles.nilai} ${l.takson === 'Spesies' ? styles.sp : ''}`}>{l.nilai}</span>
          </button>
        )
      })}
    </div>
  )
}
