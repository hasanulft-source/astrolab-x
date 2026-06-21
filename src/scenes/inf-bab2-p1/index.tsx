import { Scene1Hook } from './Scene1Hook'
import { Scene2Olah } from './Scene2Olah'
import { Scene3Jenis } from './Scene3Jenis'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const infbab2p1Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Data → informasi' },
  { id: 'olah', num: 'scene_02', stage: 'Data & Informasi · Inti', time: '~26:00', Component: Scene2Olah, nextLabel: 'Lanjut: Jenis data' },
  { id: 'jenis', num: 'scene_03', stage: 'Jenis Data · Inti', time: '~24:00', Component: Scene3Jenis, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
