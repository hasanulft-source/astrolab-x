import { Scene1Hook } from './Scene1Hook'
import { Scene2Organ } from './Scene2Organ'
import { Scene3Klasifikasi } from './Scene3Klasifikasi'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const k8bab2p3Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: 4 organ' },
  { id: 'organ', num: 'scene_02', stage: 'Organ Ekskresi · Inti', time: '~28:00', Component: Scene2Organ, nextLabel: 'Lanjut: Klasifikasi' },
  { id: 'klasifikasi', num: 'scene_03', stage: 'Klasifikasi · Inti', time: '~22:00', Component: Scene3Klasifikasi, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
