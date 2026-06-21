import { Scene1Hook } from './Scene1Hook'
import { Scene2Waktu } from './Scene2Waktu'
import { Scene3Tanda } from './Scene3Tanda'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const infbab4p2Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Atur waktu layar' },
  { id: 'waktu', num: 'scene_02', stage: 'Keseimbangan · Inti', time: '~26:00', Component: Scene2Waktu, nextLabel: 'Lanjut: Tanda kecanduan' },
  { id: 'tanda', num: 'scene_03', stage: 'Tanda Kecanduan · Inti', time: '~22:00', Component: Scene3Tanda, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
