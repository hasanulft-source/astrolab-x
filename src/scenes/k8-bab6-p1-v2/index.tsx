import { Scene1Wonder }     from './Scene1Wonder'
import { Scene2Eksplorasi } from './Scene2Eksplorasi'
import { Scene3Klasifikasi } from './Scene3Klasifikasi'
import { Scene4Refleksi }   from './Scene4Refleksi'
import type { DiscoveryScene } from '../discovery-types'
export const k8bab6p1v2Scenes: DiscoveryScene[] = [
  { id:'wonder',       stageName:'Wonder · Air Gula vs Air Pasir', nextLabel:'Bandingkan sifatnya',  notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'eksplorasi',   stageName:'Eksplorasi · 4 Sifat Pembeda',   nextLabel:'Klasifikasikan',        notebookStage:'observation', requiresInteraction:true, Component:Scene2Eksplorasi },
  { id:'klasifikasi',  stageName:'Klasifikasi · Uji Pemahaman',    nextLabel:'Refleksi',              notebookStage:'reflection',  requiresInteraction:true, Component:Scene3Klasifikasi },
  { id:'refleksi',     stageName:'Refleksi · Penutup',             notebookStage:'reflection',                                    Component:Scene4Refleksi },
]
