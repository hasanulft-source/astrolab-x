import { Scene1Hook } from './Scene1Hook'
import { Scene2Network } from './Scene2Network'
import { Scene3Security } from './Scene3Security'
import { Scene4Integrate } from './Scene4Integrate'
import { Scene5Reveal } from './Scene5Reveal'
import type { DiscoveryScene } from '../discovery-types'
export const infbab5p4v2Scenes: DiscoveryScene[] = [
  { id:'hook',      stageName:'Hook · Pesan Melintas',  nextLabel:'Peta jaringan →',    notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Hook },
  { id:'network',   stageName:'Network · 6 Istilah',    nextLabel:'Audit keamanan →',   notebookStage:'observation', requiresInteraction:true, Component:Scene2Network },
  { id:'security',  stageName:'Security · Audit',       nextLabel:'Integrasi alat →',   notebookStage:'observation', requiresInteraction:true, Component:Scene3Security },
  { id:'integrate', stageName:'Integrate · Showcase',   nextLabel:'Sintesis →',         notebookStage:'observation', requiresInteraction:true, Component:Scene4Integrate },
  { id:'reveal',    stageName:'Reveal · Exit Ticket',   notebookStage:'reflection',      requiresInteraction:true, Component:Scene5Reveal },
]
