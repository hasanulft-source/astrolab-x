import { Scene1Wonder }   from './Scene1Wonder'
import { Scene2Simbol }   from './Scene2Simbol'
import { Scene3Skenario } from './Scene3Skenario'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { DiscoveryScene } from '../discovery-types'

export const bab1p4v2Scenes: DiscoveryScene[] = [
  { id:'wonder',    stageName:'Wonder · Satu hal yang diabaikan',  nextLabel:'Kenali simbol bahaya',    notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'simbol',    stageName:'Simbol · Bahasa keselamatan',       nextLabel:'Latihan skenario',        notebookStage:'observation', requiresInteraction:true, Component:Scene2Simbol },
  { id:'skenario',  stageName:'Skenario · Darurat lab',            nextLabel:'Refleksi',                notebookStage:'reflection',  requiresInteraction:true, Component:Scene3Skenario },
  { id:'refleksi',  stageName:'Refleksi · Penutup',                notebookStage:'reflection',                                       Component:Scene4Refleksi },
]
