import { Scene1Hook } from './Scene1Hook'
import { Scene2Layers } from './Scene2Layers'
import { Scene3Correlation } from './Scene3Correlation'
import { Scene4Report } from './Scene4Report'
import { Scene5Reveal } from './Scene5Reveal'
import type { DiscoveryScene } from '../discovery-types'
export const infbab2p4v2Scenes: DiscoveryScene[] = [
  { id:'hook',        stageName:'Hook · Bacaan Detektif',      nextLabel:'3 lapis kesimpulan →',       notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Hook },
  { id:'layers',      stageName:'Layers · Deskriptif→Prediktif', nextLabel:'Korelasi vs kausalitas →', notebookStage:'observation', requiresInteraction:true, Component:Scene2Layers },
  { id:'correlation', stageName:'Korelasi ≠ Kausalitas',       nextLabel:'Susun laporan →',            notebookStage:'observation', requiresInteraction:true, Component:Scene3Correlation },
  { id:'report',      stageName:'Report · 4 Sheet',            nextLabel:'Sintesis →',                 notebookStage:'observation', requiresInteraction:true, Component:Scene4Report },
  { id:'reveal',      stageName:'Reveal · Exit Ticket',        notebookStage:'reflection',               requiresInteraction:true, Component:Scene5Reveal },
]
