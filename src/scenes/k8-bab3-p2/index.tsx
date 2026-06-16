import { Scene1Hook } from './Scene1Hook'
import { Scene2Konversi } from './Scene2Konversi'
import { Scene3Bentuk } from './Scene3Bentuk'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const k8bab3p2Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Ep ↔ Ek' },
  { id: 'konversi', num: 'scene_02', stage: 'Kekekalan Energi · Inti', time: '~32:00', Component: Scene2Konversi, nextLabel: 'Lanjut: Bentuk energi' },
  { id: 'bentuk', num: 'scene_03', stage: 'Bentuk Energi · Inti', time: '~22:00', Component: Scene3Bentuk, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
