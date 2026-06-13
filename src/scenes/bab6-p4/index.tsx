import { Scene1Hook } from './Scene1Hook'
import { Scene2Energi } from './Scene2Energi'
import { Scene3Piramida } from './Scene3Piramida'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const bab6p4Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~16:00', Component: Scene1Hook, nextLabel: 'Lanjut: Aturan 10%' },
  { id: 'energi', num: 'scene_02', stage: 'Aliran Energi · Inti', time: '~30:00', Component: Scene2Energi, nextLabel: 'Lanjut: Piramida' },
  { id: 'piramida', num: 'scene_03', stage: 'Piramida · Inti', time: '~22:00', Component: Scene3Piramida, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
