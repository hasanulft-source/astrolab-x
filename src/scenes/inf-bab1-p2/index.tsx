import { Scene1Hook } from './Scene1Hook'
import { Scene2Dekom } from './Scene2Dekom'
import { Scene3Pola } from './Scene3Pola'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const infbab1p2Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Dekomposisi' },
  { id: 'dekom', num: 'scene_02', stage: 'Dekomposisi · Inti', time: '~28:00', Component: Scene2Dekom, nextLabel: 'Lanjut: Pengenalan pola' },
  { id: 'pola', num: 'scene_03', stage: 'Pola · Inti', time: '~22:00', Component: Scene3Pola, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
