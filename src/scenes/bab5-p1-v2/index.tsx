import { Scene1Wonder }     from './Scene1Wonder'
import { Scene2Eksplorasi } from './Scene2Eksplorasi'
import { Scene3UjiKasus }   from './Scene3UjiKasus'
import { Scene4Refleksi }   from './Scene4Refleksi'
import type { DiscoveryScene } from '../discovery-types'

export const bab5p1v2Scenes: DiscoveryScene[] = [
  { id:'wonder',     stageName:'Wonder · Apakah virus hidup?',  nextLabel:'Kenali 7 ciri',      notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'eksplorasi', stageName:'Eksplorasi · 7 ciri MH',        nextLabel:'Uji kasus nyata',     notebookStage:'observation', requiresInteraction:true, Component:Scene2Eksplorasi },
  { id:'uji',        stageName:'Uji Kasus · Hidup atau tidak?', nextLabel:'Refleksi',           notebookStage:'reflection',  requiresInteraction:true, Component:Scene3UjiKasus },
  { id:'refleksi',   stageName:'Refleksi · Penutup',            notebookStage:'reflection',                                   Component:Scene4Refleksi },
]
