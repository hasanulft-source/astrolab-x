import { SceneMissionBriefing } from './SceneMissionBriefing'
import { ScenePuzzle } from './ScenePuzzle'
import { SceneBeriNama } from './SceneBeriNama'
import { SceneMissionLog } from './SceneMissionLog'
import type { DiscoveryScene } from '../discovery-types'
export const infbab1p1v2Scenes: DiscoveryScene[] = [
  { id:'brief',  stageName:'Mission Briefing · Pembuka',  nextLabel:'Mulai puzzle',           notebookStage:'hypothesis',  requiresInteraction:true, Component:SceneMissionBriefing },
  { id:'puzzle', stageName:'Puzzle Penjadwalan · Inti',   nextLabel:'Beri nama strategimu',    notebookStage:'observation', requiresInteraction:true, Component:ScenePuzzle },
  { id:'nama',   stageName:'Beri Nama BK · Konsolidasi',  nextLabel:'Simpan ke Mission Log',   notebookStage:'observation', requiresInteraction:true, Component:SceneBeriNama },
  { id:'log',    stageName:'Mission Log · Penutup',       notebookStage:'reflection',           requiresInteraction:true, Component:SceneMissionLog },
]
