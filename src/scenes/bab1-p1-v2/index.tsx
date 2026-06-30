import { Scene1Wonder }      from './Scene1Wonder'
import { Scene2Eksplorasi }  from './Scene2Eksplorasi'
import { Scene3MetodeSains } from './Scene3MetodeSains'
import { Scene4Transfer }    from './Scene4Transfer'
import { Scene5Refleksi }    from './Scene5Refleksi'
import type { DiscoveryScene } from '../discovery-types'

export const bab1p1v2Scenes: DiscoveryScene[] = [
  { id:'wonder',    stageName:'Wonder · Apa itu sains?',       nextLabel:'Jelajahi cabang sains',    notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'cabang',    stageName:'Eksplorasi · Cabang sains',     nextLabel:'Pelajari metode ilmiah',   notebookStage:'observation', requiresInteraction:true, Component:Scene2Eksplorasi },
  { id:'metode',    stageName:'Metode · Langkah berpikir',     nextLabel:'Terapkan di dunia nyata',  notebookStage:'observation', requiresInteraction:true, Component:Scene3MetodeSains },
  { id:'transfer',  stageName:'Transfer · Situasi nyata',      nextLabel:'Refleksi',                 notebookStage:'reflection',  requiresInteraction:true, Component:Scene4Transfer },
  { id:'refleksi',  stageName:'Refleksi · Penutup',            notebookStage:'reflection',                                        Component:Scene5Refleksi },
]
