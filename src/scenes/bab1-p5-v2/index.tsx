import { Scene1Wonder }     from './Scene1Wonder'
import { Scene2Eksplorasi } from './Scene2Eksplorasi'
import { Scene3Variabel }   from './Scene3Variabel'
import { Scene4Konfirmasi } from './Scene4Konfirmasi'
import { Scene5Refleksi }   from './Scene5Refleksi'
import type { DiscoveryScene } from '../discovery-types'

export const bab1p5v2Scenes: DiscoveryScene[] = [
  { id:'wonder',     stageName:'Wonder · Telur yang mengapung',    nextLabel:'Eksplorasi sendiri',     notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'eksplorasi', stageName:'Eksplorasi · Tambah garam',        nextLabel:'Pelajari variabel',      notebookStage:'observation', requiresInteraction:true, Component:Scene2Eksplorasi },
  { id:'variabel',   stageName:'Variabel · Rancangan percobaan',   nextLabel:'Konfirmasi hipotesis',   notebookStage:'observation', requiresInteraction:true, Component:Scene3Variabel },
  { id:'konfirmasi', stageName:'Konfirmasi · Pikiranmu berubah?',  nextLabel:'Refleksi',               notebookStage:'reflection',  requiresInteraction:true, Component:Scene4Konfirmasi },
  { id:'refleksi',   stageName:'Refleksi · Satu siklus sains',     notebookStage:'reflection',                                      Component:Scene5Refleksi },
]
