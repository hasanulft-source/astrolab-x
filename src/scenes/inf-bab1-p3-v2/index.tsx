import { SceneRobotDemo } from './SceneRobotDemo'
import { SceneInstruksiBiasa } from './SceneInstruksiBiasa'
import { ScenePseudocode } from './ScenePseudocode'
import type { DiscoveryScene } from '../discovery-types'
export const infbab1p3v2Scenes: DiscoveryScene[] = [
  { id:'demo',      stageName:'Robot Demo · Pembuka',           nextLabel:'Tulis instruksimu',        notebookStage:'hypothesis',  requiresInteraction:true, Component:SceneRobotDemo },
  { id:'instruksi', stageName:'Instruksi Biasa · Inti',         nextLabel:'Perbaiki jadi pseudocode', notebookStage:'observation', requiresInteraction:true, Component:SceneInstruksiBiasa },
  { id:'pseudo',    stageName:'Pseudocode · Inti + Penutup',    notebookStage:'reflection',            requiresInteraction:true, Component:ScenePseudocode },
]
