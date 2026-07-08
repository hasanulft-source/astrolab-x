import { Scene1Wonder }      from './Scene1Wonder'
import { Scene2Eksplorasi }  from './Scene2Eksplorasi'
import { Scene3Sentrifugasi } from './Scene3Sentrifugasi'
import { Scene4Refleksi }    from './Scene4Refleksi'
import type { DiscoveryScene } from '../discovery-types'
export const k8bab6p4v2Scenes: DiscoveryScene[] = [
  { id:'wonder',        stageName:'Wonder · Tinta Bukan Hitam Murni', nextLabel:'Amati pigmen merambat', notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'eksplorasi',    stageName:'Eksplorasi · Kromatografi',        nextLabel:'Coba sentrifugasi',     notebookStage:'observation', requiresInteraction:true, Component:Scene2Eksplorasi },
  { id:'sentrifugasi',  stageName:'Sentrifugasi · Pasir & Air',       nextLabel:'Refleksi',              notebookStage:'observation', requiresInteraction:true, Component:Scene3Sentrifugasi },
  { id:'refleksi',      stageName:'Refleksi · Penutup',               notebookStage:'reflection',                                     Component:Scene4Refleksi },
]
