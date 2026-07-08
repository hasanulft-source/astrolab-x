import { Scene1Wonder }     from './Scene1Wonder'
import { Scene2Eksplorasi } from './Scene2Eksplorasi'
import { Scene3Kuis }       from './Scene3Kuis'
import { Scene4Refleksi }   from './Scene4Refleksi'
import type { DiscoveryScene } from '../discovery-types'
export const k8bab7p2v2Scenes: DiscoveryScene[] = [
  { id:'wonder',     stageName:'Wonder · Sumur Berlapis',   nextLabel:'Jelajahi 5 horizon',   notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'eksplorasi', stageName:'Eksplorasi · Horizon O-A-B-C-R', nextLabel:'Uji pemahamanmu', notebookStage:'observation', requiresInteraction:true, Component:Scene2Eksplorasi },
  { id:'kuis',       stageName:'Kuis · Identifikasi Horizon', nextLabel:'Refleksi',           notebookStage:'reflection',  requiresInteraction:true, Component:Scene3Kuis },
  { id:'refleksi',   stageName:'Refleksi · Penutup',         notebookStage:'reflection',                                    Component:Scene4Refleksi },
]
