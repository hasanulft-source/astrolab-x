import { Scene1Hook } from './Scene1Hook'
import { Scene2Nada } from './Scene2Nada'
import { Scene3Medium } from './Scene3Medium'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const k8bab5p2Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Nada & kuat bunyi' },
  { id: 'nada', num: 'scene_02', stage: 'Sifat Bunyi · Inti', time: '~30:00', Component: Scene2Nada, nextLabel: 'Lanjut: Medium' },
  { id: 'medium', num: 'scene_03', stage: 'Medium · Inti', time: '~22:00', Component: Scene3Medium, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
