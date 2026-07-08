import { Scene1Hook } from './Scene1Hook'
import { Scene2Conditional } from './Scene2Conditional'
import { Scene3SortFilter } from './Scene3SortFilter'
import { Scene4Combine } from './Scene4Combine'
import { Scene5Reveal } from './Scene5Reveal'
import type { DiscoveryScene } from '../discovery-types'
export const infbab2p2v2Scenes: DiscoveryScene[] = [
  { id:'hook',        stageName:'Hook · Pertanyaan Sulit', nextLabel:'Formula bersyarat →', notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Hook },
  { id:'conditional', stageName:'IF/COUNTIF/SUMIF',        nextLabel:'Sort & Filter →',      notebookStage:'observation', requiresInteraction:true, Component:Scene2Conditional },
  { id:'sortfilter',  stageName:'Sort & Filter',           nextLabel:'Gabungkan kriteria →', notebookStage:'observation', requiresInteraction:true, Component:Scene3SortFilter },
  { id:'combine',     stageName:'Kombinasi · Refleksi',    nextLabel:'Sintesis →',           notebookStage:'observation', requiresInteraction:true, Component:Scene4Combine },
  { id:'reveal',      stageName:'Reveal · Exit Ticket',    notebookStage:'reflection',        requiresInteraction:true, Component:Scene5Reveal },
]
