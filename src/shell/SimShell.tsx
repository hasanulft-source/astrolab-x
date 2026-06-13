import { useState, useEffect } from 'react'
import { TopBar } from './TopBar'
import { StageHeader } from './StageHeader'
import { KeyboardHints } from './KeyboardHints'
import { NextButton } from './NextButton'
import type { Scene } from '../scenes/types'
import styles from './SimShell.module.css'

interface Props { title: string; meta: string; scenes: Scene[] }

export function SimShell({ title, meta, scenes }: Props) {
  const [idx, setIdx] = useState(0)
  const scene = scenes[idx]
  const next = scenes[idx + 1]
  const isLast = idx === scenes.length - 1
  const isFirst = idx === 0

  const goNext = () => setIdx(i => Math.min(i + 1, scenes.length - 1))
  const goPrev = () => setIdx(i => Math.max(i - 1, 0))
  const jump = (i: number) => setIdx(Math.max(0, Math.min(i, scenes.length - 1)))

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return
      if ((e.key === ' ' || e.key === 'ArrowRight') && !isLast) { e.preventDefault(); goNext() }
      else if (e.key === 'ArrowLeft' && !isFirst) { e.preventDefault(); goPrev() }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isLast, isFirst])

  const Body = scene.Component
  return (
    <div className={styles.screen}>
      <TopBar title={title} meta={meta} total={scenes.length} active={idx} onJump={jump} />
      <div className={styles.body}>
        <StageHeader num={scene.num} stage={scene.stage} time={scene.time} />
        <Body />
        <div className={styles.footer}>
          <KeyboardHints />
          <div className={styles.nav}>
            {!isFirst && (
              <button className={styles.backBtn} onClick={goPrev}>
                <span className={styles.backArrow}>←</span>Kembali
              </button>
            )}
            {!isLast && next && (
              <NextButton
                label={scene.nextLabel ?? `Lanjut: ${next.stage.split(' · ')[0]}`}
                onClick={goNext}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
