import { Scene1Hook } from './Scene1Hook'
import { Scene2Jejak } from './Scene2Jejak'
import { Scene3Netiket } from './Scene3Netiket'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const infbab4p1Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Jejak digital' },
  { id: 'jejak', num: 'scene_02', stage: 'Jejak Digital · Inti', time: '~24:00', Component: Scene2Jejak, nextLabel: 'Lanjut: Netiket' },
  { id: 'netiket', num: 'scene_03', stage: 'Netiket · Inti', time: '~26:00', Component: Scene3Netiket, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
