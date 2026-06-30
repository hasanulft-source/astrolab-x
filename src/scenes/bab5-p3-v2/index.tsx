import { Scene1Wonder }     from './Scene1Wonder'
import { Scene2Eksplorasi } from './Scene2Eksplorasi'
import { Scene3Pola }       from './Scene3Pola'
import { Scene4Refleksi }   from './Scene4Refleksi'
import type { DiscoveryScene } from '../discovery-types'

export const bab5p3v2Scenes: DiscoveryScene[] = [
  { id:'wonder',     stageName:'Wonder · Jamur, hewan, atau tanaman?', nextLabel:'Jelajahi 5 kingdom', notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'eksplorasi', stageName:'Eksplorasi · 5 Kingdom',               nextLabel:'Pecahkan teka-tekinya', notebookStage:'observation', requiresInteraction:true, Component:Scene2Eksplorasi },
  { id:'pola',       stageName:'Pola · Mengapa jamur terpisah?',       nextLabel:'Refleksi',           notebookStage:'observation', requiresInteraction:true, Component:Scene3Pola },
  { id:'refleksi',   stageName:'Refleksi · Penutup',                   notebookStage:'reflection',                                   Component:Scene4Refleksi },
]
