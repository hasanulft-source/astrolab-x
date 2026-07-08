import { SceneSkenarioA } from './SceneSkenarioA'
import { ScenePolaBanding } from './ScenePolaBanding'
import { SceneEfisiensi } from './SceneEfisiensi'
import type { DiscoveryScene } from '../discovery-types'
export const infbab1p2v2Scenes: DiscoveryScene[] = [
  { id:'skenario', stageName:'3 Skenario · Inti',            nextLabel:'Bandingkan polanya',  notebookStage:'hypothesis',  requiresInteraction:true, Component:SceneSkenarioA },
  { id:'banding',  stageName:'Perbandingan Pola · Inti',      nextLabel:'Hitung efisiensi',    notebookStage:'observation', requiresInteraction:true, Component:ScenePolaBanding },
  { id:'efisiensi',stageName:'Analisis Efisiensi · Penutup',  notebookStage:'reflection',       requiresInteraction:true, Component:SceneEfisiensi },
]
