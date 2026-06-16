import { Scene1Hook } from './Scene1Hook'
import { Scene2Saluran } from './Scene2Saluran'
import { Scene3Proses } from './Scene3Proses'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const k8bab1p2Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Saluran pencernaan' },
  { id: 'saluran', num: 'scene_02', stage: 'Organ · Inti', time: '~30:00', Component: Scene2Saluran, nextLabel: 'Lanjut: Mekanik vs kimiawi' },
  { id: 'proses', num: 'scene_03', stage: 'Proses · Inti', time: '~24:00', Component: Scene3Proses, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
