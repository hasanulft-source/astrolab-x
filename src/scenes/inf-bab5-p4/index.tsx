import { Scene1Hook } from './Scene1Hook'
import { Scene2Jaringan } from './Scene2Jaringan'
import { Scene3Internet } from './Scene3Internet'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const infbab5p4Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Jenis jaringan' },
  { id: 'jaringan', num: 'scene_02', stage: 'Jaringan · Inti', time: '~24:00', Component: Scene2Jaringan, nextLabel: 'Lanjut: Cara internet bekerja' },
  { id: 'internet', num: 'scene_03', stage: 'Cara Kerja Internet · Inti', time: '~26:00', Component: Scene3Internet, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
