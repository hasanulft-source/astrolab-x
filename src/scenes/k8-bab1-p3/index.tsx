import { Scene1Hook } from './Scene1Hook'
import { Scene2Komponen } from './Scene2Komponen'
import { Scene3Jantung } from './Scene3Jantung'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const k8bab1p3Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Komponen darah' },
  { id: 'komponen', num: 'scene_02', stage: 'Komponen Darah · Inti', time: '~28:00', Component: Scene2Komponen, nextLabel: 'Lanjut: Jantung' },
  { id: 'jantung', num: 'scene_03', stage: 'Jantung · Inti', time: '~28:00', Component: Scene3Jantung, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
