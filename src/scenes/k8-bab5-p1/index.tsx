import { Scene1Hook } from './Scene1Hook'
import { Scene2Param } from './Scene2Param'
import { Scene3Jenis } from './Scene3Jenis'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const k8bab5p1Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Parameter gelombang' },
  { id: 'param', num: 'scene_02', stage: 'Parameter · Inti', time: '~30:00', Component: Scene2Param, nextLabel: 'Lanjut: Jenis gelombang' },
  { id: 'jenis', num: 'scene_03', stage: 'Jenis · Inti', time: '~22:00', Component: Scene3Jenis, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
