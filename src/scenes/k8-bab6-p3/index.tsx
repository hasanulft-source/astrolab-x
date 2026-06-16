import { Scene1Hook } from './Scene1Hook'
import { Scene2Evaporasi } from './Scene2Evaporasi'
import { Scene3Metode } from './Scene3Metode'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const k8bab6p3Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Evaporasi' },
  { id: 'evaporasi', num: 'scene_02', stage: 'Evaporasi · Inti', time: '~28:00', Component: Scene2Evaporasi, nextLabel: 'Lanjut: Tiga metode' },
  { id: 'metode', num: 'scene_03', stage: 'Tiga Metode · Inti', time: '~24:00', Component: Scene3Metode, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
