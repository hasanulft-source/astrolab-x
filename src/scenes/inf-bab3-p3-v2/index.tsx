import { SceneProfilTersangka } from './SceneProfilTersangka'
import { SceneCRAAPTest } from './SceneCRAAPTest'
import { SceneBongkarAsumsi } from './SceneBongkarAsumsi'
import { SceneKredibilitasFinal } from './SceneKredibilitasFinal'
import type { DiscoveryScene } from '../discovery-types'
export const infbab3p3v2Scenes: DiscoveryScene[] = [
  { id:'profil',  stageName:'Profil Tersangka · Pembuka',       nextLabel:'Periksa dengan CRAAP', notebookStage:'hypothesis',  requiresInteraction:true, Component:SceneProfilTersangka },
  { id:'craap',   stageName:'CRAAP Test · Inti',                 nextLabel:'Bongkar asumsi',        notebookStage:'observation', requiresInteraction:true, Component:SceneCRAAPTest },
  { id:'asumsi',  stageName:'Bongkar Asumsi · Konsolidasi',      nextLabel:'Simpan kesimpulan',     notebookStage:'observation', requiresInteraction:true, Component:SceneBongkarAsumsi },
  { id:'final',   stageName:'Kesimpulan Kredibilitas · Penutup', notebookStage:'reflection',         requiresInteraction:true, Component:SceneKredibilitasFinal },
]
