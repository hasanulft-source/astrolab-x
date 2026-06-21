import { Scene1Hook } from './Scene1Hook'
import { Scene2Runner } from './Scene2Runner'
import { Scene3Ulangi } from './Scene3Ulangi'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const infbab1p4Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Susun blok' },
  { id: 'runner', num: 'scene_02', stage: 'Pemrograman Blok · Inti', time: '~32:00', Component: Scene2Runner, nextLabel: 'Lanjut: Perulangan' },
  { id: 'ulangi', num: 'scene_03', stage: 'Perulangan · Inti', time: '~20:00', Component: Scene3Ulangi, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
