import { Scene1Wonder }     from './Scene1Wonder'
import { Scene2Eksplorasi } from './Scene2Eksplorasi'
import { Scene3Pola }       from './Scene3Pola'
import { Scene4Refleksi }   from './Scene4Refleksi'
import type { DiscoveryScene } from '../discovery-types'

export const bab6p4v2Scenes: DiscoveryScene[] = [
  { id:'wonder',     stageName:'Wonder · 1000 padi, 1 elang',   nextLabel:'Ikuti aliran energi',  notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'eksplorasi', stageName:'Eksplorasi · Hukum 10%',        nextLabel:'Pecahkan teka-tekinya', notebookStage:'observation', requiresInteraction:true, Component:Scene2Eksplorasi },
  { id:'pola',       stageName:'Pola · Mengapa energi hilang?', nextLabel:'Refleksi',             notebookStage:'observation', requiresInteraction:true, Component:Scene3Pola },
  { id:'refleksi',   stageName:'Refleksi · Penutup',            notebookStage:'reflection',                                    Component:Scene4Refleksi },
]
