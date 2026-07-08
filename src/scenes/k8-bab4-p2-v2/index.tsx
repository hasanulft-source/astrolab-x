import { Scene1Wonder }     from './Scene1Wonder'
import { Scene2Eksplorasi } from './Scene2Eksplorasi'
import { Scene3Faktor }     from './Scene3Faktor'
import { Scene4Refleksi }   from './Scene4Refleksi'
import type { DiscoveryScene } from '../discovery-types'
export const k8bab4p2v2Scenes: DiscoveryScene[] = [
  { id:'wonder',     stageName:'Wonder · Telinga Sakit',   nextLabel:'Uji rumus hidrostatis', notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'eksplorasi', stageName:'Eksplorasi · P = ρgh',     nextLabel:'Pecahkan teka-tekinya', notebookStage:'observation', requiresInteraction:true, Component:Scene2Eksplorasi },
  { id:'faktor',     stageName:'Faktor · Kedalaman',       nextLabel:'Refleksi',              notebookStage:'observation', requiresInteraction:true, Component:Scene3Faktor },
  { id:'refleksi',   stageName:'Refleksi · Penutup',       notebookStage:'reflection',                                     Component:Scene4Refleksi },
]
