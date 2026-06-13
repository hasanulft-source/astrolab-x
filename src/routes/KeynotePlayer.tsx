import { useParams, useNavigate } from 'react-router-dom'
import { Keynote } from '../shell/Keynote'
import { KEYNOTES } from '../keynote-registry'

export function KeynotePlayer() {
  const { id } = useParams<{ id: string }>()
  const nav = useNavigate()
  const k = id ? KEYNOTES[id] : undefined
  if (!k) return <div style={{ padding: 40, fontFamily: 'var(--font-sans)', color: 'var(--ink)' }}>Keynote tidak ditemukan.</div>
  return <Keynote title={k.title} beats={k.beats} Hero={k.Hero} onExit={() => nav('/')} />
}
