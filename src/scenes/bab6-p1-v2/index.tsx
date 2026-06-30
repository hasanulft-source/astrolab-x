import { Scene1Wonder }     from './Scene1Wonder'
import { Scene2Eksplorasi } from './Scene2Eksplorasi'
import { Scene3Pola }       from './Scene3Pola'
import { Scene4Refleksi }   from './Scene4Refleksi'
import type { DiscoveryScene } from '../discovery-types'

export const bab6p1v2Scenes: DiscoveryScene[] = [
  { id:'wonder',     stageName:'Wonder · Kolam kecil, sistem rumit', nextLabel:'Klasifikasikan komponen', notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'eksplorasi', stageName:'Eksplorasi · Biotik vs abiotik',     nextLabel:'Temukan hubungannya',     notebookStage:'observation', requiresInteraction:true, Component:Scene2Eksplorasi },
  { id:'pola',       stageName:'Pola · Saling ketergantungan',       nextLabel:'Refleksi',                notebookStage:'observation', requiresInteraction:true, Component:Scene3Pola },
  { id:'refleksi',   stageName:'Refleksi · Penutup',                 notebookStage:'reflection',                                       Component:Scene4Refleksi },
]
