import { Scene1Hook } from './Scene1Hook'
import { Scene2Rumus } from './Scene2Rumus'
import { Scene3Terap } from './Scene3Terap'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const k8bab4p2Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: P = ρgh' },
  { id: 'rumus', num: 'scene_02', stage: 'Hidrostatis · Inti', time: '~30:00', Component: Scene2Rumus, nextLabel: 'Lanjut: Penerapan' },
  { id: 'terap', num: 'scene_03', stage: 'Penerapan · Inti', time: '~22:00', Component: Scene3Terap, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
