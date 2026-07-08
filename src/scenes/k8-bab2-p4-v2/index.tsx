import { Scene1Wonder }     from './Scene1Wonder'
import { Scene2Eksplorasi } from './Scene2Eksplorasi'
import { Scene3Gangguan }   from './Scene3Gangguan'
import { Scene4Refleksi }   from './Scene4Refleksi'
import type { DiscoveryScene } from '../discovery-types'
export const k8bab2p4v2Scenes: DiscoveryScene[] = [
  { id:'wonder',     stageName:'Wonder · Ke Mana Sisa Saringan?', nextLabel:'Telusuri 3 tahap', notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'eksplorasi', stageName:'Eksplorasi · 3 Tahap Urine',      nextLabel:'Pelajari gangguan', notebookStage:'observation', requiresInteraction:true, Component:Scene2Eksplorasi },
  { id:'gangguan',   stageName:'Gangguan · Ginjal',               nextLabel:'Refleksi',          notebookStage:'observation', requiresInteraction:true, Component:Scene3Gangguan },
  { id:'refleksi',   stageName:'Refleksi · Penutup',              notebookStage:'reflection',                                  Component:Scene4Refleksi },
]
