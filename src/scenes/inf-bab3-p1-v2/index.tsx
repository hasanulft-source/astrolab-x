import { SceneCaseOpen } from './SceneCaseOpen'
import { SceneBedahPesan } from './SceneBedahPesan'
import { ScenePiramida } from './ScenePiramida'
import { SceneCatatDetektif } from './SceneCatatDetektif'
import type { DiscoveryScene } from '../discovery-types'
export const infbab3p1v2Scenes: DiscoveryScene[] = [
  { id:'open',    stageName:'Laporan Masuk · Pembuka',      nextLabel:'Mulai bedah pesan',      notebookStage:'hypothesis',  requiresInteraction:true, Component:SceneCaseOpen },
  { id:'bedah',   stageName:'Bedah Pesan · Inti',           nextLabel:'Temukan polanya',         notebookStage:'observation', requiresInteraction:true, Component:SceneBedahPesan },
  { id:'piramida',stageName:'Piramida D-I-K · Konsolidasi', nextLabel:'Catat temuan',            notebookStage:'observation', requiresInteraction:true, Component:ScenePiramida },
  { id:'catat',   stageName:'Catatan Detektif · Penutup',   notebookStage:'reflection',           requiresInteraction:true, Component:SceneCatatDetektif },
]
