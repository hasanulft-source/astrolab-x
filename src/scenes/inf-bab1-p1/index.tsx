import { Scene1Hook } from './Scene1Hook'
import { Scene2Pondasi } from './Scene2Pondasi'
import { Scene3Cocok } from './Scene3Cocok'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const infbab1p1Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: 4 pondasi' },
  { id: 'pondasi', num: 'scene_02', stage: '4 Pondasi · Inti', time: '~28:00', Component: Scene2Pondasi, nextLabel: 'Lanjut: Cocokkan' },
  { id: 'cocok', num: 'scene_03', stage: 'Cocokkan · Inti', time: '~22:00', Component: Scene3Cocok, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
