import { Scene1Hook } from './Scene1Hook'
import { Scene2Tahap } from './Scene2Tahap'
import { Scene3Gangguan } from './Scene3Gangguan'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const k8bab2p4Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: 3 tahap' },
  { id: 'tahap', num: 'scene_02', stage: 'Pembentukan Urin · Inti', time: '~30:00', Component: Scene2Tahap, nextLabel: 'Lanjut: Gangguan' },
  { id: 'gangguan', num: 'scene_03', stage: 'Gangguan · Inti', time: '~22:00', Component: Scene3Gangguan, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
