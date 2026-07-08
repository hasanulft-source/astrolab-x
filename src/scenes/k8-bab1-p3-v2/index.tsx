import { Scene1Wonder }     from './Scene1Wonder'
import { Scene2Eksplorasi } from './Scene2Eksplorasi'
import { Scene3Jantung }    from './Scene3Jantung'
import { Scene4Refleksi }   from './Scene4Refleksi'
import type { DiscoveryScene } from '../discovery-types'
export const k8bab1p3v2Scenes: DiscoveryScene[] = [
  { id:'wonder',     stageName:'Wonder · Darah Berlapis',   nextLabel:'Bongkar komponennya',  notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'eksplorasi', stageName:'Eksplorasi · 4 Komponen',   nextLabel:'Jelajahi jantung',      notebookStage:'observation', requiresInteraction:true, Component:Scene2Eksplorasi },
  { id:'jantung',    stageName:'Jantung · 4 Ruang',         nextLabel:'Refleksi',              notebookStage:'observation', requiresInteraction:true, Component:Scene3Jantung },
  { id:'refleksi',   stageName:'Refleksi · Penutup',        notebookStage:'reflection',                                     Component:Scene4Refleksi },
]
