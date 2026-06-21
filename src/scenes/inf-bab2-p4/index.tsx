import { Scene1Hook } from './Scene1Hook'
import { Scene2Chart } from './Scene2Chart'
import { Scene3Analisis } from './Scene3Analisis'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const infbab2p4Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Grafik batang' },
  { id: 'chart', num: 'scene_02', stage: 'Visualisasi · Inti', time: '~28:00', Component: Scene2Chart, nextLabel: 'Lanjut: Analisis' },
  { id: 'analisis', num: 'scene_03', stage: 'Analisis · Inti', time: '~22:00', Component: Scene3Analisis, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
