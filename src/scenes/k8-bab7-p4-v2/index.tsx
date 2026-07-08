import { Scene1Wonder }     from './Scene1Wonder'
import { Scene2Eksplorasi } from './Scene2Eksplorasi'
import { Scene3Konservasi } from './Scene3Konservasi'
import { Scene4Refleksi }   from './Scene4Refleksi'
import type { DiscoveryScene } from '../discovery-types'
export const k8bab7p4v2Scenes: DiscoveryScene[] = [
  { id:'wonder',     stageName:'Wonder · Lereng Gundul vs Berpohon', nextLabel:'Uji tutupan vegetasi', notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'eksplorasi', stageName:'Eksplorasi · Vegetasi vs Erosi',     nextLabel:'Pelajari konservasi',  notebookStage:'observation', requiresInteraction:true, Component:Scene2Eksplorasi },
  { id:'konservasi', stageName:'Konservasi · 4 Metode',              nextLabel:'Refleksi',             notebookStage:'observation', requiresInteraction:true, Component:Scene3Konservasi },
  { id:'refleksi',   stageName:'Refleksi · Penutup',                 notebookStage:'reflection',                                    Component:Scene4Refleksi },
]
