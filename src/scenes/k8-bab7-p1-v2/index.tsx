import { Scene1Wonder }     from './Scene1Wonder'
import { Scene2Eksplorasi } from './Scene2Eksplorasi'
import { Scene3Komponen }   from './Scene3Komponen'
import { Scene4Refleksi }   from './Scene4Refleksi'
import type { DiscoveryScene } from '../discovery-types'
export const k8bab7p1v2Scenes: DiscoveryScene[] = [
  { id:'wonder',     stageName:'Wonder · Satu Bahan Saja?', nextLabel:'Uji dengan kocok air',  notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'eksplorasi', stageName:'Eksplorasi · Uji Kocok',     nextLabel:'Jelajahi 4 komponen',   notebookStage:'observation', requiresInteraction:true, Component:Scene2Eksplorasi },
  { id:'komponen',   stageName:'Komponen · Mineral-Organik-Air-Udara', nextLabel:'Refleksi',    notebookStage:'observation', requiresInteraction:true, Component:Scene3Komponen },
  { id:'refleksi',   stageName:'Refleksi · Penutup',         notebookStage:'reflection',                                     Component:Scene4Refleksi },
]
