import { Scene1Wonder }     from './Scene1Wonder'
import { Scene2Eksplorasi } from './Scene2Eksplorasi'
import { Scene3Refleksi }   from './Scene3Refleksi'
import type { DiscoveryScene } from '../discovery-types'

export const bab6p7v2Scenes: DiscoveryScene[] = [
  { id:'wonder',     stageName:'Wonder · Serigala & sungai',  nextLabel:'Ikuti efek berantainya', notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'eksplorasi', stageName:'Eksplorasi · Cascade effect', nextLabel:'Refleksi',               notebookStage:'observation', requiresInteraction:true, Component:Scene2Eksplorasi },
  { id:'refleksi',   stageName:'Refleksi · Penutup',          notebookStage:'reflection',                                      Component:Scene3Refleksi },
]
