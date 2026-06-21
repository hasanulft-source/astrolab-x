import { Scene1Hook } from './Scene1Hook'
import { Scene2IPO } from './Scene2IPO'
import { Scene3Simpan } from './Scene3Simpan'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const infbab5p2Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Siklus IPO' },
  { id: 'ipo', num: 'scene_02', stage: 'Siklus IPO · Inti', time: '~26:00', Component: Scene2IPO, nextLabel: 'Lanjut: Penyimpanan' },
  { id: 'simpan', num: 'scene_03', stage: 'Penyimpanan · Inti', time: '~22:00', Component: Scene3Simpan, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
