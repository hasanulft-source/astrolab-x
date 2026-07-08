import { Scene1Wonder }     from './Scene1Wonder'
import { Scene2Eksplorasi } from './Scene2Eksplorasi'
import { Scene3Jenis }      from './Scene3Jenis'
import { Scene4Refleksi }   from './Scene4Refleksi'
import type { DiscoveryScene } from '../discovery-types'
export const k8bab3p1v2Scenes: DiscoveryScene[] = [
  { id:'wonder',     stageName:'Wonder · Mendorong Tembok',   nextLabel:'Uji rumus usaha',     notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'eksplorasi', stageName:'Eksplorasi · W = F × s',      nextLabel:'Jenis usaha',         notebookStage:'observation', requiresInteraction:true, Component:Scene2Eksplorasi },
  { id:'jenis',      stageName:'Jenis · Positif/Negatif/Nol', nextLabel:'Refleksi',            notebookStage:'observation', requiresInteraction:true, Component:Scene3Jenis },
  { id:'refleksi',   stageName:'Refleksi · Penutup',          notebookStage:'reflection',                                    Component:Scene4Refleksi },
]
