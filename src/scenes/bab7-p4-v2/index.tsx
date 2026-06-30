import { Scene1Wonder }     from './Scene1Wonder'
import { Scene2Eksplorasi } from './Scene2Eksplorasi'
import { Scene3Pola }       from './Scene3Pola'
import { Scene4Refleksi }   from './Scene4Refleksi'
import type { DiscoveryScene } from '../discovery-types'

export const bab7p4v2Scenes: DiscoveryScene[] = [
  { id:'wonder',     stageName:'Wonder · Mobil panas di parkiran', nextLabel:'Naikkan CO₂',      notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'eksplorasi', stageName:'Eksplorasi · CO₂ & suhu bumi',     nextLabel:'Pecahkan teka-tekinya', notebookStage:'observation', requiresInteraction:true, Component:Scene2Eksplorasi },
  { id:'pola',       stageName:'Pola · Bumi sebagai mobil raksasa', nextLabel:'Refleksi',         notebookStage:'observation', requiresInteraction:true, Component:Scene3Pola },
  { id:'refleksi',   stageName:'Refleksi · Penutup',                notebookStage:'reflection',                                  Component:Scene4Refleksi },
]
