import { Scene1Hook } from './Scene1Hook'
import { Scene2Banding } from './Scene2Banding'
import { Scene3Klasifikasi } from './Scene3Klasifikasi'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const k8bab6p1Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Homogen vs heterogen' },
  { id: 'banding', num: 'scene_02', stage: 'Perbandingan · Inti', time: '~28:00', Component: Scene2Banding, nextLabel: 'Lanjut: Klasifikasi' },
  { id: 'klasifikasi', num: 'scene_03', stage: 'Klasifikasi · Inti', time: '~22:00', Component: Scene3Klasifikasi, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
