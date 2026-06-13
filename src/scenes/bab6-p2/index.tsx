import { Scene1Hook } from './Scene1Hook'
import { Scene2Tiga } from './Scene2Tiga'
import { Scene3Klasifikasi } from './Scene3Klasifikasi'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const bab6p2Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Tiga simbiosis' },
  { id: 'tiga', num: 'scene_02', stage: 'Simbiosis · Inti', time: '~26:00', Component: Scene2Tiga, nextLabel: 'Lanjut: Klasifikasi' },
  { id: 'klasifikasi', num: 'scene_03', stage: 'Klasifikasi · Inti', time: '~24:00', Component: Scene3Klasifikasi, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~18:00', Component: Scene4Refleksi },
]
