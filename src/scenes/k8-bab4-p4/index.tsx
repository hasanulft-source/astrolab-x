import { Scene1Hook } from './Scene1Hook'
import { Scene2Apung } from './Scene2Apung'
import { Scene3Syarat } from './Scene3Syarat'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const k8bab4p4Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Terapung/tenggelam' },
  { id: 'apung', num: 'scene_02', stage: 'Archimedes · Inti', time: '~30:00', Component: Scene2Apung, nextLabel: 'Lanjut: Syarat & gaya apung' },
  { id: 'syarat', num: 'scene_03', stage: 'Syarat · Inti', time: '~22:00', Component: Scene3Syarat, nextLabel: 'Lanjut: Penerapan' },
  { id: 'refleksi', num: 'scene_04', stage: 'Penerapan · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
