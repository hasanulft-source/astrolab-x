import { Scene1Hook } from './Scene1Hook'
import { Scene2ChartMatch } from './Scene2ChartMatch'
import { Scene3Build } from './Scene3Build'
import { Scene4Critique } from './Scene4Critique'
import { Scene5Reveal } from './Scene5Reveal'
import type { DiscoveryScene } from '../discovery-types'
export const infbab2p3v2Scenes: DiscoveryScene[] = [
  { id:'hook',      stageName:'Hook · Chart sebagai Argumen', nextLabel:'Cocokkan chart →',  notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Hook },
  { id:'match',     stageName:'Match · Pertanyaan→Chart',     nextLabel:'Bangun chart →',     notebookStage:'observation', requiresInteraction:true, Component:Scene2ChartMatch },
  { id:'build',     stageName:'Build · 3 Chart',              nextLabel:'Kritik chart →',     notebookStage:'observation', requiresInteraction:true, Component:Scene3Build },
  { id:'critique',  stageName:'Critique · Chart Menyesatkan', nextLabel:'Sintesis →',         notebookStage:'observation', requiresInteraction:true, Component:Scene4Critique },
  { id:'reveal',    stageName:'Reveal · Exit Ticket',         notebookStage:'reflection',      requiresInteraction:true, Component:Scene5Reveal },
]
