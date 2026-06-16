import { Scene1Hook } from './Scene1Hook'
import { Scene2Tuas } from './Scene2Tuas'
import { Scene3Lainnya } from './Scene3Lainnya'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const k8bab3p4Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Tuas' },
  { id: 'tuas', num: 'scene_02', stage: 'Tuas · Inti', time: '~32:00', Component: Scene2Tuas, nextLabel: 'Lanjut: KM lainnya' },
  { id: 'lainnya', num: 'scene_03', stage: 'KM Lainnya · Inti', time: '~22:00', Component: Scene3Lainnya, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
