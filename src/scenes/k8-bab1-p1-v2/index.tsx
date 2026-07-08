import { Scene1Wonder }     from './Scene1Wonder'
import { Scene2Eksplorasi } from './Scene2Eksplorasi'
import { Scene3Uji }        from './Scene3Uji'
import { Scene4Refleksi }   from './Scene4Refleksi'
import type { DiscoveryScene } from '../discovery-types'
export const k8bab1p1v2Scenes: DiscoveryScene[] = [
  { id:'wonder',     stageName:'Wonder · Reaksi Iodin',    nextLabel:'Kenali 6 nutrisi',    notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'eksplorasi', stageName:'Eksplorasi · 6 Nutrisi',   nextLabel:'Uji makanan',         notebookStage:'observation', requiresInteraction:true, Component:Scene2Eksplorasi },
  { id:'uji',        stageName:'Uji · Iodin & Amilum',     nextLabel:'Refleksi',            notebookStage:'observation', requiresInteraction:true, Component:Scene3Uji },
  { id:'refleksi',   stageName:'Refleksi · Penutup',       notebookStage:'reflection',                                    Component:Scene4Refleksi },
]
