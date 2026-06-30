import { Scene1Wonder }       from './Scene1Wonder'
import { Scene2Galeri }       from './Scene2Galeri'
import { Scene3Klasifikasi }  from './Scene3Klasifikasi'
import { Scene4Refleksi }     from './Scene4Refleksi'
import type { DiscoveryScene } from '../discovery-types'

export const bab1p3v2Scenes: DiscoveryScene[] = [
  { id:'wonder',       stageName:'Wonder · Hari pertama di lab',      nextLabel:'Kenali alatnya',         notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'galeri',       stageName:'Galeri · Jelajahi alat',            nextLabel:'Klasifikasikan',         notebookStage:'observation', requiresInteraction:true, Component:Scene2Galeri },
  { id:'klasifikasi',  stageName:'Klasifikasi · Uji pemahamanmu',     nextLabel:'Refleksi',               notebookStage:'reflection',  requiresInteraction:true, Component:Scene3Klasifikasi },
  { id:'refleksi',     stageName:'Refleksi · Penutup',                notebookStage:'reflection',                                       Component:Scene4Refleksi },
]
