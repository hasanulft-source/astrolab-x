import { SceneGagal } from './SceneGagal'
import { SceneOperator } from './SceneOperator'
import { SceneSimulator } from './SceneSimulator'
import { SceneTemuan } from './SceneTemuan'
import type { DiscoveryScene } from '../discovery-types'
export const infbab3p2v2Scenes: DiscoveryScene[] = [
  { id:'gagal',    stageName:'Percobaan Bebas · Pembuka',   nextLabel:'Pelajari operator',   notebookStage:'hypothesis',  requiresInteraction:true, Component:SceneGagal },
  { id:'operator', stageName:'Pelajari Operator · Inti',    nextLabel:'Coba di simulator',   notebookStage:'observation', requiresInteraction:true, Component:SceneOperator },
  { id:'sim',      stageName:'Simulator Pencarian · Inti',  nextLabel:'Catat temuan',        notebookStage:'observation', requiresInteraction:true, Component:SceneSimulator },
  { id:'temuan',   stageName:'Temuan Investigasi · Penutup', notebookStage:'reflection',      requiresInteraction:true, Component:SceneTemuan },
]
