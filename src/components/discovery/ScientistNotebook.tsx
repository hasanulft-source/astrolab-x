import { useState, useCallback } from 'react'
import styles from './ScientistNotebook.module.css'

export interface NotebookEntry {
  sceneId: string
  stage: 'hypothesis' | 'observation' | 'reflection'
  text: string
  ts: number
}

interface Props {
  entries: NotebookEntry[]
  onAdd: (entry: Omit<NotebookEntry, 'ts'>) => void
  currentSceneId: string
  currentStage: NotebookEntry['stage']
}

const STAGE_LABEL: Record<NotebookEntry['stage'], string> = {
  hypothesis:  '💡 Hipotesisku',
  observation: '🔍 Yang Aku Amati',
  reflection:  '✨ Pikiranku Berubah',
}
const PROMPT: Record<NotebookEntry['stage'], string> = {
  hypothesis:  'Apa yang kamu perkirakan akan terjadi?',
  observation: 'Apa yang kamu lihat atau temukan?',
  reflection:  'Apa yang berubah dari pikiranmu setelah eksplorasi ini?',
}

export function ScientistNotebook({ entries, onAdd, currentSceneId, currentStage }: Props) {
  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState('')
  const [saved, setSaved] = useState(false)

  const handleSave = useCallback(() => {
    if (!draft.trim()) return
    onAdd({ sceneId: currentSceneId, stage: currentStage, text: draft.trim() })
    setDraft('')
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }, [draft, currentSceneId, currentStage, onAdd])

  const timeline = [...entries].reverse()

  return (
    <>
      <button className={styles.trigger} onClick={() => setOpen(o => !o)} title="Buka Catatan Ilmuwan">
        <span className={styles.triggerIcon}>📓</span>
        {entries.length > 0 && <span className={styles.badge}>{entries.length}</span>}
      </button>

      <div className={`${styles.panel} ${open ? styles.panelOpen : ''}`}>
        <div className={styles.panelHead}>
          <span className={styles.panelTitle}>Catatan Ilmuwan</span>
          <button className={styles.close} onClick={() => setOpen(false)}>×</button>
        </div>

        <div className={styles.writeZone}>
          <div className={styles.stageTag}>{STAGE_LABEL[currentStage]}</div>
          <textarea
            className={styles.textarea}
            placeholder={PROMPT[currentStage]}
            value={draft}
            onChange={e => setDraft(e.target.value)}
            rows={3}
          />
          <button
            className={`${styles.saveBtn} ${saved ? styles.saveBtnDone : ''}`}
            onClick={handleSave}
            disabled={!draft.trim()}
          >
            {saved ? '✓ Tersimpan' : 'Catat'}
          </button>
        </div>

        {timeline.length > 0 && (
          <div className={styles.timeline}>
            <div className={styles.timelineHead}>Perjalanan Berpikirmu</div>
            {timeline.map((e, i) => (
              <div key={i} className={styles.entry}>
                <div className={styles.entryStage}>{STAGE_LABEL[e.stage]}</div>
                <div className={styles.entryText}>{e.text}</div>
              </div>
            ))}
          </div>
        )}

        {timeline.length === 0 && (
          <div className={styles.empty}>Tuliskan pemikiranmu — tidak ada yang salah di sini.</div>
        )}
      </div>

      {open && <div className={styles.overlay} onClick={() => setOpen(false)} />}
    </>
  )
}
