import { Scene1Hook } from './Scene1Hook'
import { Scene2Predict } from './Scene2Predict'
import { Scene3Cascade } from './Scene3Cascade'
import { Scene4Ethics } from './Scene4Ethics'
import { Scene5Reveal } from './Scene5Reveal'
import type { DiscoveryScene } from '../discovery-types'
export const infbab4p1v2Scenes: DiscoveryScene[] = [
  { id:'hook',    stageName:'Hook · Jejak Digital',     nextLabel:'Prediksi konsekuensi →', notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Hook },
  { id:'predict', stageName:'Predict · 4 Skenario',     nextLabel:'Cascading effect →',     notebookStage:'observation', requiresInteraction:true, Component:Scene2Predict },
  { id:'cascade', stageName:'Cascade · Efek Berantai',  nextLabel:'Rumuskan etika →',       notebookStage:'observation', requiresInteraction:true, Component:Scene3Cascade },
  { id:'ethics',  stageName:'Ethics · Rumusan Sendiri', nextLabel:'Sintesis →',             notebookStage:'observation', requiresInteraction:true, Component:Scene4Ethics },
  { id:'reveal',  stageName:'Reveal · Exit Ticket',     notebookStage:'reflection',          requiresInteraction:true, Component:Scene5Reveal },
]
