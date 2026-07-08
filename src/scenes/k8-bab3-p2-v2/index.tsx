import { Scene1Wonder }     from './Scene1Wonder'
import { Scene2Eksplorasi } from './Scene2Eksplorasi'
import { Scene3Bentuk }     from './Scene3Bentuk'
import { Scene4Refleksi }   from './Scene4Refleksi'
import type { DiscoveryScene } from '../discovery-types'
export const k8bab3p2v2Scenes: DiscoveryScene[] = [
  { id:'wonder',     stageName:'Wonder · Bola dari Puncak',  nextLabel:'Amati Ep dan Ek',      notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'eksplorasi', stageName:'Eksplorasi · Ep ↔ Ek',       nextLabel:'Pecahkan teka-tekinya', notebookStage:'observation', requiresInteraction:true, Component:Scene2Eksplorasi },
  { id:'bentuk',     stageName:'Kekekalan · Ep + Ek Tetap',  nextLabel:'Refleksi',              notebookStage:'observation', requiresInteraction:true, Component:Scene3Bentuk },
  { id:'refleksi',   stageName:'Refleksi · Penutup',         notebookStage:'reflection',                                     Component:Scene4Refleksi },
]
