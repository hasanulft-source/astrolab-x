import { Scene1Wonder }     from './Scene1Wonder'
import { Scene2Eksplorasi } from './Scene2Eksplorasi'
import { Scene3Lainnya }    from './Scene3Lainnya'
import { Scene4Refleksi }   from './Scene4Refleksi'
import type { DiscoveryScene } from '../discovery-types'
export const k8bab3p4v2Scenes: DiscoveryScene[] = [
  { id:'wonder',     stageName:'Wonder · Gagang Pintu',    nextLabel:'Uji tuas interaktif',   notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'eksplorasi', stageName:'Eksplorasi · KM = Lk/Lb',  nextLabel:'Pecahkan teka-tekinya', notebookStage:'observation', requiresInteraction:true, Component:Scene2Eksplorasi },
  { id:'lainnya',    stageName:'Trade-off · Gaya vs Jarak', nextLabel:'Refleksi',              notebookStage:'observation', requiresInteraction:true, Component:Scene3Lainnya },
  { id:'refleksi',   stageName:'Refleksi · Penutup',       notebookStage:'reflection',                                     Component:Scene4Refleksi },
]
