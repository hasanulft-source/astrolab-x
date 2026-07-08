import { Scene1Wonder }     from './Scene1Wonder'
import { Scene2Eksplorasi } from './Scene2Eksplorasi'
import { Scene3Pertukaran } from './Scene3Pertukaran'
import { Scene4Refleksi }   from './Scene4Refleksi'
import type { DiscoveryScene } from '../discovery-types'
export const k8bab2p1v2Scenes: DiscoveryScene[] = [
  { id:'wonder',     stageName:'Wonder · Jutaan Kantung Kecil', nextLabel:'Telusuri saluran napas', notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'eksplorasi', stageName:'Eksplorasi · 6 Organ',          nextLabel:'Pecahkan teka-tekinya',   notebookStage:'observation', requiresInteraction:true, Component:Scene2Eksplorasi },
  { id:'pertukaran', stageName:'Pertukaran Gas · Alveolus',     nextLabel:'Refleksi',                notebookStage:'observation', requiresInteraction:true, Component:Scene3Pertukaran },
  { id:'refleksi',   stageName:'Refleksi · Penutup',            notebookStage:'reflection',                                       Component:Scene4Refleksi },
]
