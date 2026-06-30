import { Scene1Wonder }     from './Scene1Wonder'
import { Scene2Eksplorasi } from './Scene2Eksplorasi'
import { Scene3Pola }       from './Scene3Pola'
import { Scene4Refleksi }   from './Scene4Refleksi'
import type { DiscoveryScene } from '../discovery-types'

export const bab4p1v2Scenes: DiscoveryScene[] = [
  { id:'wonder',     stageName:'Wonder · Lari 400m, perpindahan nol?', nextLabel:'Bandingkan lintasan', notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'eksplorasi', stageName:'Eksplorasi · Jarak vs perpindahan',    nextLabel:'Pecahkan teka-tekinya', notebookStage:'observation', requiresInteraction:true, Component:Scene2Eksplorasi },
  { id:'pola',       stageName:'Pola · Jawab teka-teki pelari',        nextLabel:'Refleksi',            notebookStage:'observation', requiresInteraction:true, Component:Scene3Pola },
  { id:'refleksi',   stageName:'Refleksi · Penutup',                   notebookStage:'reflection',                                    Component:Scene4Refleksi },
]
