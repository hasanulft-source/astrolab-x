import { SceneTranslasi } from './SceneTranslasi'
import { ScenePairProgramming } from './ScenePairProgramming'
import { SceneTest } from './SceneTest'
import type { DiscoveryScene } from '../discovery-types'
export const infbab1p4v2Scenes: DiscoveryScene[] = [
  { id:'translasi', stageName:'Translasi Pseudocode · Pembuka', nextLabel:'Mulai pair programming', notebookStage:'hypothesis',  requiresInteraction:true, Component:SceneTranslasi },
  { id:'pair',      stageName:'Pair Programming · Inti',        nextLabel:'Test program',            notebookStage:'observation', requiresInteraction:true, Component:ScenePairProgramming },
  { id:'test',      stageName:'Test Program · Penutup',         notebookStage:'reflection',           requiresInteraction:true, Component:SceneTest },
]
