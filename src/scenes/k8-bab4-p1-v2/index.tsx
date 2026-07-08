import { Scene1Wonder }     from './Scene1Wonder'
import { Scene2Eksplorasi } from './Scene2Eksplorasi'
import { Scene3Terapan }    from './Scene3Terapan'
import { Scene4Refleksi }   from './Scene4Refleksi'
import type { DiscoveryScene } from '../discovery-types'
export const k8bab4p1v2Scenes: DiscoveryScene[] = [
  { id:'wonder',     stageName:'Wonder · Paku Runcing',    nextLabel:'Uji rumus tekanan',     notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'eksplorasi', stageName:'Eksplorasi · P = F/A',     nextLabel:'Terapan sehari-hari',   notebookStage:'observation', requiresInteraction:true, Component:Scene2Eksplorasi },
  { id:'terapan',    stageName:'Terapan · Desain Benda',   nextLabel:'Refleksi',              notebookStage:'observation', requiresInteraction:true, Component:Scene3Terapan },
  { id:'refleksi',   stageName:'Refleksi · Penutup',       notebookStage:'reflection',                                     Component:Scene4Refleksi },
]
