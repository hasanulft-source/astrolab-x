import { Scene1Hook } from './Scene1Hook'
import { Scene2Word } from './Scene2Word'
import { Scene3Slides } from './Scene3Slides'
import { Scene4Pitch } from './Scene4Pitch'
import { Scene5Reveal } from './Scene5Reveal'
import type { DiscoveryScene } from '../discovery-types'
export const infbab5p2v2Scenes: DiscoveryScene[] = [
  { id:'hook',   stageName:'Hook · Formatting = Komunikasi', nextLabel:'Pelajari fitur Word →', notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Hook },
  { id:'word',   stageName:'Word · 6 Fitur Format',          nextLabel:'Nilai anatomi slide →', notebookStage:'observation', requiresInteraction:true, Component:Scene2Word },
  { id:'slides', stageName:'Slides · Efektif/Bermasalah',    nextLabel:'Struktur pitch →',      notebookStage:'observation', requiresInteraction:true, Component:Scene3Slides },
  { id:'pitch',  stageName:'Pitch · 5 Slide 3 Menit',        nextLabel:'Sintesis →',            notebookStage:'observation', requiresInteraction:true, Component:Scene4Pitch },
  { id:'reveal', stageName:'Reveal · Exit Ticket',           notebookStage:'reflection',         requiresInteraction:true, Component:Scene5Reveal },
]
