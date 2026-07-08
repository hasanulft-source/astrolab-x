import { Scene1Wonder }     from './Scene1Wonder'
import { Scene2Eksplorasi } from './Scene2Eksplorasi'
import { Scene3Prinsip }    from './Scene3Prinsip'
import { Scene4Refleksi }   from './Scene4Refleksi'
import type { DiscoveryScene } from '../discovery-types'
export const k8bab4p4v2Scenes: DiscoveryScene[] = [
  { id:'wonder',     stageName:'Wonder · Telur di Air Garam', nextLabel:'Uji gaya apung',       notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'eksplorasi', stageName:'Eksplorasi · Naikkan ρ Air',  nextLabel:'Pecahkan teka-tekinya', notebookStage:'observation', requiresInteraction:true, Component:Scene2Eksplorasi },
  { id:'prinsip',    stageName:'Prinsip · Archimedes',        nextLabel:'Refleksi',              notebookStage:'observation', requiresInteraction:true, Component:Scene3Prinsip },
  { id:'refleksi',   stageName:'Refleksi · Penutup',          notebookStage:'reflection',                                     Component:Scene4Refleksi },
]
