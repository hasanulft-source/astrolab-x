import { Scene1Wonder }     from './Scene1Wonder'
import { Scene2Eksplorasi } from './Scene2Eksplorasi'
import { Scene3Pola }       from './Scene3Pola'
import { Scene4Refleksi }   from './Scene4Refleksi'
import type { DiscoveryScene } from '../discovery-types'
export const k8bab1p2v2Scenes: DiscoveryScene[] = [
  { id:'wonder',     stageName:'Wonder · Mengapa Mengunyah?',  nextLabel:'Telusuri organ',      notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'eksplorasi', stageName:'Eksplorasi · Saluran Cerna',   nextLabel:'Temukan polanya',     notebookStage:'observation', requiresInteraction:true, Component:Scene2Eksplorasi },
  { id:'pola',       stageName:'Pola · Mekanik vs Kimiawi',    nextLabel:'Refleksi',            notebookStage:'observation', requiresInteraction:true, Component:Scene3Pola },
  { id:'refleksi',   stageName:'Refleksi · Penutup',           notebookStage:'reflection',                                   Component:Scene4Refleksi },
]
