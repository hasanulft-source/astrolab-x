import { Scene1Hook } from './Scene1Hook'
import { Scene2Urut } from './Scene2Urut'
import { Scene3Pseudo } from './Scene3Pseudo'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const infbab1p3Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Urutan algoritma' },
  { id: 'urut', num: 'scene_02', stage: 'Urutan · Inti', time: '~28:00', Component: Scene2Urut, nextLabel: 'Lanjut: Pseudocode' },
  { id: 'pseudo', num: 'scene_03', stage: 'Pseudocode · Inti', time: '~22:00', Component: Scene3Pseudo, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
