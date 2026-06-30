import { Scene1Wonder }     from './Scene1Wonder'
import { Scene2Eksplorasi } from './Scene2Eksplorasi'
import { Scene3Pola }       from './Scene3Pola'
import { Scene4Transfer }   from './Scene4Transfer'
import { Scene5Refleksi }   from './Scene5Refleksi'
import type { DiscoveryScene } from '../discovery-types'

export const bab2p2v2Scenes: DiscoveryScene[] = [
  { id:'wonder',     stageName:'Wonder · Suntikan air vs udara',  nextLabel:'Uji sendiri',           notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'eksplorasi', stageName:'Eksplorasi · Tekan & amati',      nextLabel:'Lihat polanya',         notebookStage:'observation', requiresInteraction:true, Component:Scene2Eksplorasi },
  { id:'pola',       stageName:'Pola · Mengapa begini?',          nextLabel:'Terapkan di dunia nyata', notebookStage:'observation', requiresInteraction:true, Component:Scene3Pola },
  { id:'transfer',   stageName:'Transfer · Dunia nyata',          nextLabel:'Refleksi',              notebookStage:'reflection',  requiresInteraction:true, Component:Scene4Transfer },
  { id:'refleksi',   stageName:'Refleksi · Penutup',              notebookStage:'reflection',                                      Component:Scene5Refleksi },
]
