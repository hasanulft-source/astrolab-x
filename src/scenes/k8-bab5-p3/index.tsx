import { Scene1Hook } from './Scene1Hook'
import { Scene2Pantul } from './Scene2Pantul'
import { Scene3Bias } from './Scene3Bias'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const k8bab5p3Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Pemantulan' },
  { id: 'pantul', num: 'scene_02', stage: 'Pemantulan · Inti', time: '~30:00', Component: Scene2Pantul, nextLabel: 'Lanjut: Pembiasan' },
  { id: 'bias', num: 'scene_03', stage: 'Pembiasan · Inti', time: '~22:00', Component: Scene3Bias, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
