import { Scene1Hook } from './Scene1Hook'
import { Scene2Komponen } from './Scene2Komponen'
import { Scene3Organisasi } from './Scene3Organisasi'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'

export const bab6p1Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~16:00', Component: Scene1Hook, nextLabel: 'Lanjut: Biotik & abiotik' },
  { id: 'komponen', num: 'scene_02', stage: 'Komponen · Inti', time: '~32:00', Component: Scene2Komponen, nextLabel: 'Lanjut: Tingkat organisasi' },
  { id: 'organisasi', num: 'scene_03', stage: 'Organisasi · Inti', time: '~26:00', Component: Scene3Organisasi, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~16:00', Component: Scene4Refleksi },
]
