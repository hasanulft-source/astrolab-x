import { Scene1Hook } from './Scene1Hook'
import { Scene2Kocok } from './Scene2Kocok'
import { Scene3Komponen } from './Scene3Komponen'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const k8bab7p1Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Uji kocok' },
  { id: 'kocok', num: 'scene_02', stage: 'Uji Kocok · Inti', time: '~28:00', Component: Scene2Kocok, nextLabel: 'Lanjut: 4 komponen' },
  { id: 'komponen', num: 'scene_03', stage: 'Komponen · Inti', time: '~24:00', Component: Scene3Komponen, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
