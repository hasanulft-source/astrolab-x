import { Scene1Wonder }     from './Scene1Wonder'
import { Scene2Eksplorasi } from './Scene2Eksplorasi'
import { Scene3pH }         from './Scene3pH'
import { Scene4Refleksi }   from './Scene4Refleksi'
import type { DiscoveryScene } from '../discovery-types'
export const k8bab7p3v2Scenes: DiscoveryScene[] = [
  { id:'wonder',     stageName:'Wonder · Liat Lengket, Pasir Gembur', nextLabel:'Jelajahi tekstur', notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'eksplorasi', stageName:'Eksplorasi · 3 Tekstur',             nextLabel:'Uji pH tanah',      notebookStage:'observation', requiresInteraction:true, Component:Scene2Eksplorasi },
  { id:'ph',         stageName:'pH · Asam-Netral-Basa',              nextLabel:'Refleksi',          notebookStage:'observation', requiresInteraction:true, Component:Scene3pH },
  { id:'refleksi',   stageName:'Refleksi · Penutup',                 notebookStage:'reflection',                                  Component:Scene4Refleksi },
]
