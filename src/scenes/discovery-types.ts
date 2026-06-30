import type { ComponentType } from 'react'
import type { NotebookEntry } from '../components/discovery/ScientistNotebook'

export interface DiscoverySceneProps {
  onUnlock: () => void
  notebookEntries: NotebookEntry[]
  onNotebookAdd: (entry: Omit<NotebookEntry, 'ts'>) => void
}

export interface DiscoveryScene {
  id: string
  stageName: string
  nextLabel?: string
  notebookStage?: NotebookEntry['stage']
  requiresInteraction?: boolean
  Component: ComponentType<DiscoverySceneProps>
}
