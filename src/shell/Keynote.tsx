import { useState, useEffect, useCallback } from 'react'
import type { FC } from 'react'
import styles from './Keynote.module.css'

export interface Beat { text: string; sub?: string }
export type HeroProps = { step: number; total: number }
interface Props { title?: string; beats: Beat[]; Hero: FC<HeroProps>; onExit?: () => void }

export function Keynote({ title, beats, Hero, onExit }: Props) {
  const [step, setStep] = useState(0)
  const total = beats.length
  const next = useCallback(() => setStep(s => Math.min(s + 1, total - 1)), [total])
  const prev = useCallback(() => setStep(s => Math.max(s - 1, 0)), [])

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); next() }
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); prev() }
      else if (e.key === 'Escape') onExit?.()
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [next, prev, onExit])

  const beat = beats[step]
  return (
    <div className={styles.stage} onClick={next}>
      <div className={styles.brand}>{title ?? 'AstroLab X'}</div>
      <button className={styles.exit} onClick={(e) => { e.stopPropagation(); onExit?.() }}>✕</button>
      <div className={styles.hero}><Hero step={step} total={total} /></div>
      <div className={styles.caption} key={step}>
        <h1 className={styles.headline}>{beat.text}</h1>
        {beat.sub && <p className={styles.sub}>{beat.sub}</p>}
      </div>
      {step > 0 && <button className={styles.back} onClick={(e) => { e.stopPropagation(); prev() }}>‹</button>}
      <div className={styles.dots}>{beats.map((_, i) => <span key={i} className={i === step ? styles.dotOn : styles.dot} />)}</div>
    </div>
  )
}
