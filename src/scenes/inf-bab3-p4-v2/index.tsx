import { SceneKlimax } from './SceneKlimax'
import { SceneKlasifikasi } from './SceneKlasifikasi'
import { SceneUjiLogika } from './SceneUjiLogika'
import { SceneKesimpulanResmi } from './SceneKesimpulanResmi'
import type { DiscoveryScene } from '../discovery-types'
export const infbab3p4v2Scenes: DiscoveryScene[] = [
  { id:'klimax',  stageName:'Titik Klimaks · Pembuka',       nextLabel:'Mulai klasifikasi',   Component:SceneKlimax },
  { id:'klasif',  stageName:'Klasifikasi Klaim · Inti',       nextLabel:'Uji logikamu',        notebookStage:'hypothesis',  requiresInteraction:true, Component:SceneKlasifikasi },
  { id:'logika',  stageName:'Uji Logika Semi-True · Inti',    nextLabel:'Susun kesimpulan',    notebookStage:'observation', requiresInteraction:true, Component:SceneUjiLogika },
  { id:'final',   stageName:'Kesimpulan Resmi · Penutup',     notebookStage:'reflection',       requiresInteraction:true, Component:SceneKesimpulanResmi },
]
