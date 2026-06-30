import { Scene1Wonder }     from './Scene1Wonder'
import { Scene2Eksplorasi } from './Scene2Eksplorasi'
import { Scene3Wujud }      from './Scene3Wujud'
import { Scene4Refleksi }   from './Scene4Refleksi'
import type { DiscoveryScene } from '../discovery-types'

export const bab3p5v2Scenes: DiscoveryScene[] = [
  { id:'wonder',     stageName:'Wonder · Toples macet dibuka',  nextLabel:'Uji pemuaian',         notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'eksplorasi', stageName:'Eksplorasi · Panaskan batang',  nextLabel:'Bandingkan 3 wujud',    notebookStage:'observation', requiresInteraction:true, Component:Scene2Eksplorasi },
  { id:'wujud',      stageName:'Wujud · Tingkat pemuaian',      nextLabel:'Refleksi',              notebookStage:'observation', requiresInteraction:true, Component:Scene3Wujud },
  { id:'refleksi',   stageName:'Refleksi · Penutup',            notebookStage:'reflection',                                     Component:Scene4Refleksi },
]
