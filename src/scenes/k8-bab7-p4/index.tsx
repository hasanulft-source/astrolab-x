import { Scene1Hook } from './Scene1Hook'
import { Scene2Erosi } from './Scene2Erosi'
import { Scene3Konservasi } from './Scene3Konservasi'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const k8bab7p4Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Erosi' },
  { id: 'erosi', num: 'scene_02', stage: 'Erosi · Inti', time: '~28:00', Component: Scene2Erosi, nextLabel: 'Lanjut: Konservasi' },
  { id: 'konservasi', num: 'scene_03', stage: 'Konservasi · Inti', time: '~22:00', Component: Scene3Konservasi, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
