import { Scene1Wonder }     from './Scene1Wonder'
import { Scene2Eksplorasi } from './Scene2Eksplorasi'
import { Scene3Metode }     from './Scene3Metode'
import { Scene4Refleksi }   from './Scene4Refleksi'
import type { DiscoveryScene } from '../discovery-types'
export const k8bab6p3v2Scenes: DiscoveryScene[] = [
  { id:'wonder',     stageName:'Wonder · Petani Garam',       nextLabel:'Amati proses evaporasi', notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'eksplorasi', stageName:'Eksplorasi · Evaporasi Bertahap', nextLabel:'Bandingkan 3 metode', notebookStage:'observation', requiresInteraction:true, Component:Scene2Eksplorasi },
  { id:'metode',     stageName:'Metode · Filtrasi/Evaporasi/Distilasi', nextLabel:'Refleksi',      notebookStage:'observation', requiresInteraction:true, Component:Scene3Metode },
  { id:'refleksi',   stageName:'Refleksi · Penutup',          notebookStage:'reflection',                                       Component:Scene4Refleksi },
]
