import { Scene1Hook } from './Scene1Hook'
import { Scene2Nutrisi } from './Scene2Nutrisi'
import { Scene3Uji } from './Scene3Uji'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const k8bab1p1Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~14:00', Component: Scene1Hook, nextLabel: 'Lanjut: 6 nutrisi' },
  { id: 'nutrisi', num: 'scene_02', stage: 'Jenis Nutrisi · Inti', time: '~28:00', Component: Scene2Nutrisi, nextLabel: 'Lanjut: Uji nutrisi' },
  { id: 'uji', num: 'scene_03', stage: 'Uji Nutrisi · Inti', time: '~32:00', Component: Scene3Uji, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
