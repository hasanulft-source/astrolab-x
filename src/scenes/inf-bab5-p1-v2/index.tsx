import { Scene1Hook } from './Scene1Hook'
import { Scene2Diagnose } from './Scene2Diagnose'
import { Scene3Category } from './Scene3Category'
import { Scene4Files } from './Scene4Files'
import { Scene5Reveal } from './Scene5Reveal'
import type { DiscoveryScene } from '../discovery-types'
export const infbab5p1v2Scenes: DiscoveryScene[] = [
  { id:'hook',     stageName:'Hook · Diagnosa Komputer', nextLabel:'Pahami komponennya →',  notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Hook },
  { id:'diagnose', stageName:'Diagnose · 4 Komponen',    nextLabel:'Klasifikasikan →',       notebookStage:'observation', requiresInteraction:true, Component:Scene2Diagnose },
  { id:'category', stageName:'Category · Input-Output',  nextLabel:'Rapikan file →',         notebookStage:'observation', requiresInteraction:true, Component:Scene3Category },
  { id:'files',    stageName:'Files · Sistem Folder',     nextLabel:'Sintesis →',             notebookStage:'observation', requiresInteraction:true, Component:Scene4Files },
  { id:'reveal',   stageName:'Reveal · Exit Ticket',      notebookStage:'reflection',          requiresInteraction:true, Component:Scene5Reveal },
]
