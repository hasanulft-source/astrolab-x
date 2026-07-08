import { Scene1Wonder }     from './Scene1Wonder'
import { Scene2Eksplorasi } from './Scene2Eksplorasi'
import { Scene3DadaPerut }  from './Scene3DadaPerut'
import { Scene4Refleksi }   from './Scene4Refleksi'
import type { DiscoveryScene } from '../discovery-types'
export const k8bab2p2v2Scenes: DiscoveryScene[] = [
  { id:'wonder',     stageName:'Wonder · Paru Tanpa Otot',   nextLabel:'Simulasikan mekanismenya', notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'eksplorasi', stageName:'Eksplorasi · Inspirasi/Ekspirasi', nextLabel:'Bandingkan jenisnya', notebookStage:'observation', requiresInteraction:true, Component:Scene2Eksplorasi },
  { id:'dadaperut',  stageName:'Dada vs Perut · Bandingkan', nextLabel:'Refleksi',                  notebookStage:'observation', requiresInteraction:true, Component:Scene3DadaPerut },
  { id:'refleksi',   stageName:'Refleksi · Penutup',         notebookStage:'reflection',                                          Component:Scene4Refleksi },
]
