import { Scene1Hook } from './Scene1Hook'
import { Scene2Classify } from './Scene2Classify'
import { Scene3Password } from './Scene3Password'
import { Scene4Policy } from './Scene4Policy'
import { Scene5Reveal } from './Scene5Reveal'
import type { DiscoveryScene } from '../discovery-types'
export const infbab4p3v2Scenes: DiscoveryScene[] = [
  { id:'hook',     stageName:'Hook · Kebocoran Data',    nextLabel:'Privat vs Publik →',   notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Hook },
  { id:'classify', stageName:'Classify · Info Pribadi',  nextLabel:'Uji password →',       notebookStage:'observation', requiresInteraction:true, Component:Scene2Classify },
  { id:'password', stageName:'Password · Strength Meter',nextLabel:'Kebijakan privasi →',  notebookStage:'observation', requiresInteraction:true, Component:Scene3Password },
  { id:'policy',   stageName:'Policy · Rancang Sendiri', nextLabel:'Sintesis →',           notebookStage:'observation', requiresInteraction:true, Component:Scene4Policy },
  { id:'reveal',   stageName:'Reveal · Exit Ticket',     notebookStage:'reflection',        requiresInteraction:true, Component:Scene5Reveal },
]
