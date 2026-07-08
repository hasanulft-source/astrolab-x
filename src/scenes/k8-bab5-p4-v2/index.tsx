import { Scene1Wonder }     from './Scene1Wonder'
import { Scene2Eksplorasi } from './Scene2Eksplorasi'
import { Scene3Bayangan }   from './Scene3Bayangan'
import { Scene4Refleksi }   from './Scene4Refleksi'
import type { DiscoveryScene } from '../discovery-types'
export const k8bab5p4v2Scenes: DiscoveryScene[] = [
  { id:'wonder',     stageName:'Wonder · Sendok Cekung-Cembung', nextLabel:'Jelajahi 5 jenis',      notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'eksplorasi', stageName:'Eksplorasi · Cermin & Lensa',    nextLabel:'Pecahkan teka-tekinya', notebookStage:'observation', requiresInteraction:true, Component:Scene2Eksplorasi },
  { id:'bayangan',   stageName:'Bayangan · Cekung vs Cembung',   nextLabel:'Refleksi',              notebookStage:'observation', requiresInteraction:true, Component:Scene3Bayangan },
  { id:'refleksi',   stageName:'Refleksi · Penutup',             notebookStage:'reflection',                                     Component:Scene4Refleksi },
]
