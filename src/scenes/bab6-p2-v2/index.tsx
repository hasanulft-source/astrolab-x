import { Scene1Wonder }      from './Scene1Wonder'
import { Scene2Eksplorasi }  from './Scene2Eksplorasi'
import { Scene3Klasifikasi } from './Scene3Klasifikasi'
import { Scene4Refleksi }    from './Scene4Refleksi'
import type { DiscoveryScene } from '../discovery-types'

export const bab6p2v2Scenes: DiscoveryScene[] = [
  { id:'wonder',       stageName:'Wonder · Ikan badut & anemon', nextLabel:'Jelajahi 3 jenis',  notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'eksplorasi',   stageName:'Eksplorasi · 3 jenis simbiosis', nextLabel:'Klasifikasikan',  notebookStage:'observation', requiresInteraction:true, Component:Scene2Eksplorasi },
  { id:'klasifikasi',  stageName:'Klasifikasi · Uji pemahamanmu', nextLabel:'Refleksi',         notebookStage:'reflection',  requiresInteraction:true, Component:Scene3Klasifikasi },
  { id:'refleksi',     stageName:'Refleksi · Penutup',            notebookStage:'reflection',                                 Component:Scene4Refleksi },
]
