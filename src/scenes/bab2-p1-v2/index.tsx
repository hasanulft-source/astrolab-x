import { Scene1Wonder }     from './Scene1Wonder'
import { Scene2Eksplorasi } from './Scene2Eksplorasi'
import { Scene3Pola }       from './Scene3Pola'
import { Scene4Refleksi }   from './Scene4Refleksi'
import type { DiscoveryScene } from '../discovery-types'

export const bab2p1v2Scenes: DiscoveryScene[] = [
  { id:'wonder',     stageName:'Wonder · Es, air, dan uap',     nextLabel:'Lihat partikelnya',     notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'eksplorasi', stageName:'Eksplorasi · Model partikel',   nextLabel:'Hubungkan dengan sifat', notebookStage:'observation', requiresInteraction:true, Component:Scene2Eksplorasi },
  { id:'pola',       stageName:'Pola · Mengapa begini?',        nextLabel:'Refleksi',              notebookStage:'observation', requiresInteraction:true, Component:Scene3Pola },
  { id:'refleksi',   stageName:'Refleksi · Penutup',            notebookStage:'reflection',                                     Component:Scene4Refleksi },
]
