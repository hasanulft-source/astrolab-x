import { Scene1Wonder }     from './Scene1Wonder'
import { Scene2Eksplorasi } from './Scene2Eksplorasi'
import { Scene3Medium }     from './Scene3Medium'
import { Scene4Refleksi }   from './Scene4Refleksi'
import type { DiscoveryScene } from '../discovery-types'
export const k8bab5p2v2Scenes: DiscoveryScene[] = [
  { id:'wonder',     stageName:'Wonder · Senyap di Angkasa', nextLabel:'Uji nada & kuat bunyi', notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'eksplorasi', stageName:'Eksplorasi · Frekuensi & Amplitudo', nextLabel:'Uji berbagai medium', notebookStage:'observation', requiresInteraction:true, Component:Scene2Eksplorasi },
  { id:'medium',     stageName:'Medium · Bisa/Tidak Merambat', nextLabel:'Refleksi',            notebookStage:'observation', requiresInteraction:true, Component:Scene3Medium },
  { id:'refleksi',   stageName:'Refleksi · Penutup',         notebookStage:'reflection',                                     Component:Scene4Refleksi },
]
