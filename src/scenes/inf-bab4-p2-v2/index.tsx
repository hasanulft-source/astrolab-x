import { Scene1Hook } from './Scene1Hook'
import { Scene2Audit } from './Scene2Audit'
import { Scene3Signs } from './Scene3Signs'
import { Scene4Contract } from './Scene4Contract'
import { Scene5Reveal } from './Scene5Reveal'
import type { DiscoveryScene } from '../discovery-types'
export const infbab4p2v2Scenes: DiscoveryScene[] = [
  { id:'hook',     stageName:'Hook · Berapa Jam?',        nextLabel:'Audit screen time →',  notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Hook },
  { id:'audit',    stageName:'Audit · Data Nyata',        nextLabel:'Tanda kecanduan →',     notebookStage:'observation', requiresInteraction:true, Component:Scene2Audit },
  { id:'signs',    stageName:'Signs · Self-Assessment',   nextLabel:'Kontrak digital →',     notebookStage:'observation', requiresInteraction:true, Component:Scene3Signs },
  { id:'contract', stageName:'Contract · Pilihan Sendiri',nextLabel:'Sintesis →',            notebookStage:'observation', requiresInteraction:true, Component:Scene4Contract },
  { id:'reveal',   stageName:'Reveal · Exit Ticket',      notebookStage:'reflection',         requiresInteraction:true, Component:Scene5Reveal },
]
