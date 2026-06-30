import { useState, useCallback, useEffect } from 'react'
import { ScientistNotebook } from '../components/discovery/ScientistNotebook'
import type { NotebookEntry } from '../components/discovery/ScientistNotebook'
import type { DiscoveryScene } from '../scenes/discovery-types'
import styles from './DiscoveryShell.module.css'

interface Props { title: string; scenes: DiscoveryScene[] }

export function DiscoveryShell({ title, scenes }: Props) {
  const [idx, setIdx]        = useState(0)
  const [notebook, setNbook] = useState<NotebookEntry[]>([])
  const [locked, setLocked]  = useState(false)

  const scene  = scenes[idx]
  const isLast = idx === scenes.length - 1
  const isFirst = idx === 0

  const goNext = () => { if (!locked) setIdx(i => Math.min(i + 1, scenes.length - 1)) }
  const goPrev = () => setIdx(i => Math.max(i - 1, 0))
  const unlock = useCallback(() => setLocked(false), [])

  useEffect(() => {
    setLocked(scene.requiresInteraction ?? false)
  }, [idx, scene.requiresInteraction])

  const addEntry = useCallback((entry: Omit<NotebookEntry, 'ts'>) => {
    setNbook(n => [...n, { ...entry, ts: Date.now() }])
  }, [])

  const progress = (idx / Math.max(scenes.length - 1, 1)) * 100

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return
      if ((e.key === ' ' || e.key === 'ArrowRight') && !isLast && !locked) goNext()
      else if (e.key === 'ArrowLeft' && !isFirst) goPrev()
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [isLast, isFirst, locked])

  const Body = scene.Component

  return (
    <div className={styles.shell}>
      <div className={styles.topStrip}>
        <div className={styles.topLeft}>
          <div className={styles.discoBadge}>Discovery</div>
          <span className={styles.topTitle}>{title}</span>
        </div>
        <div className={styles.stageRow}>
          {scenes.map((s, i) => (
            <div key={i}
              className={`${styles.stagePip} ${i === idx ? styles.pipActive : i < idx ? styles.pipDone : ''}`}
              onClick={() => i < idx && setIdx(i)}
              title={s.stageName}
            />
          ))}
        </div>
        <span className={styles.stageLabel}>{scene.stageName}</span>
      </div>

      <div className={styles.progressTrack}>
        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
      </div>

      <div className={styles.body}>
        <Body onUnlock={unlock} notebookEntries={notebook} onNotebookAdd={addEntry} />
      </div>

      <div className={styles.footer}>
        {!isFirst && (
          <button className={styles.backBtn} onClick={goPrev}>
            ← Sebelumnya
          </button>
        )}
        <div className={styles.footerCenter}>
          <span className={styles.sceneCount}>{idx + 1} / {scenes.length}</span>
        </div>
        {!isLast && (
          <button
            className={`${styles.nextBtn} ${locked ? styles.nextLocked : ''}`}
            onClick={goNext}
            disabled={locked}
          >
            {locked ? 'Jawab dulu ↓' : (scene.nextLabel ?? 'Lanjut')} {!locked && '→'}
          </button>
        )}
        {isLast && <div className={styles.endBadge}>✨ Eksplorasi selesai</div>}
      </div>

      <ScientistNotebook
        entries={notebook}
        onAdd={addEntry}
        currentSceneId={scene.id}
        currentStage={scene.notebookStage ?? 'observation'}
      />
    </div>
  )
}
