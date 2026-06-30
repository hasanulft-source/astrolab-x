import { Scene1Wonder }     from './Scene1Wonder'
import { Scene2Eksplorasi } from './Scene2Eksplorasi'
import { Scene3Pola }       from './Scene3Pola'
import { Scene4Rumus }      from './Scene4Rumus'
import { Scene5Konfirmasi } from './Scene5Konfirmasi'
import { Scene6Transfer }   from './Scene6Transfer'
import type { DiscoveryScene } from '../discovery-types'

export const bab3p4v2Scenes: DiscoveryScene[] = [
  { id:'wonder',      stageName:'Wonder · Kenapa ini terjadi?',     nextLabel:'Mulai eksplorasi',      notebookStage:'hypothesis',  requiresInteraction:true,  Component:Scene1Wonder     },
  { id:'eksplorasi',  stageName:'Eksplorasi · Amati sendiri',       nextLabel:'Lihat polanya',         notebookStage:'observation', requiresInteraction:true,  Component:Scene2Eksplorasi },
  { id:'pola',        stageName:'Pola · Temukan konsepnya',         nextLabel:'Pelajari rumusnya',     notebookStage:'observation', requiresInteraction:true,  Component:Scene3Pola       },
  { id:'rumus',       stageName:'Rumus · Bahasa matematika',        nextLabel:'Cek prediksi awal',     notebookStage:'observation', requiresInteraction:true,  Component:Scene4Rumus      },
  { id:'konfirmasi',  stageName:'Konfirmasi · Pikiranmu berubah?',  nextLabel:'Terapkan di dunia nyata', notebookStage:'reflection', requiresInteraction:true, Component:Scene5Konfirmasi },
  { id:'transfer',    stageName:'Transfer · Dunia nyata',           notebookStage:'reflection',        requiresInteraction:true,  Component:Scene6Transfer   },
]
