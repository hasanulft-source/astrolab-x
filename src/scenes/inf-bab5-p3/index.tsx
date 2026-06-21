import { Scene1Hook } from './Scene1Hook'
import { Scene2Jenis } from './Scene2Jenis'
import { Scene3File } from './Scene3File'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const infbab5p3Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Jenis software' },
  { id: 'jenis', num: 'scene_02', stage: 'Jenis Software · Inti', time: '~24:00', Component: Scene2Jenis, nextLabel: 'Lanjut: Manajemen file' },
  { id: 'file', num: 'scene_03', stage: 'Manajemen File · Inti', time: '~22:00', Component: Scene3File, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
