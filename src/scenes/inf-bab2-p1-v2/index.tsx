import { Scene1Hook } from './Scene1Hook'
import { Scene2Interface } from './Scene2Interface'
import { Scene3Clean } from './Scene3Clean'
import { Scene4Formula } from './Scene4Formula'
import { Scene5Reveal } from './Scene5Reveal'
import type { DiscoveryScene } from '../discovery-types'
export const infbab2p1v2Scenes: DiscoveryScene[] = [
  { id:'hook',      stageName:'Hook · Data vs Info',     nextLabel:'Kenali antarmuka Excel →', notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Hook },
  { id:'interface', stageName:'Interface · Excel',       nextLabel:'Bersihkan dataset →',       notebookStage:'observation', requiresInteraction:true, Component:Scene2Interface },
  { id:'clean',     stageName:'Clean · Messy Data',      nextLabel:'Prediksi formula →',        notebookStage:'observation', requiresInteraction:true, Component:Scene3Clean },
  { id:'formula',   stageName:'Formula · Dasar',         nextLabel:'Sintesis →',                notebookStage:'observation', requiresInteraction:true, Component:Scene4Formula },
  { id:'reveal',    stageName:'Reveal · Exit Ticket',    notebookStage:'reflection',              requiresInteraction:true, Component:Scene5Reveal },
]
