import { Scene1Hook } from './Scene1Hook'
import { Scene2Search } from './Scene2Search'
import { Scene3Evaluate } from './Scene3Evaluate'
import { Scene4Email } from './Scene4Email'
import { Scene5Reveal } from './Scene5Reveal'
import type { DiscoveryScene } from '../discovery-types'
export const infbab5p3v2Scenes: DiscoveryScene[] = [
  { id:'hook',     stageName:'Hook · 2 Juta Hasil',     nextLabel:'Operator pencarian →', notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Hook },
  { id:'search',   stageName:'Search · 5 Operator',     nextLabel:'Evaluasi sumber →',    notebookStage:'observation', requiresInteraction:true, Component:Scene2Search },
  { id:'evaluate', stageName:'Evaluate · Kredibilitas', nextLabel:'Struktur email →',     notebookStage:'observation', requiresInteraction:true, Component:Scene3Evaluate },
  { id:'email',    stageName:'Email · Profesional',     nextLabel:'Sintesis →',           notebookStage:'observation', requiresInteraction:true, Component:Scene4Email },
  { id:'reveal',   stageName:'Reveal · Exit Ticket',    notebookStage:'reflection',        requiresInteraction:true, Component:Scene5Reveal },
]
