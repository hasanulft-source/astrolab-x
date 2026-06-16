import { Scene1Hook } from './Scene1Hook'
import { Scene2Rumus } from './Scene2Rumus'
import { Scene3Jenis } from './Scene3Jenis'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const k8bab3p1Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~14:00', Component: Scene1Hook, nextLabel: 'Lanjut: W = F × s' },
  { id: 'rumus', num: 'scene_02', stage: 'Rumus Usaha · Inti', time: '~30:00', Component: Scene2Rumus, nextLabel: 'Lanjut: Positif/negatif/nol' },
  { id: 'jenis', num: 'scene_03', stage: 'Jenis Usaha · Inti', time: '~22:00', Component: Scene3Jenis, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
