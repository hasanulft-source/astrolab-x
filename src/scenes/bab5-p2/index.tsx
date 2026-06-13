import { Scene1Hook } from './Scene1Hook'
import { Scene2Takson } from './Scene2Takson'
import { Scene3Kingdom } from './Scene3Kingdom'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'

export const bab5p2Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~18:00', Component: Scene1Hook, nextLabel: 'Lanjut: Tangga takson' },
  { id: 'takson', num: 'scene_02', stage: 'Tangga Takson · Inti', time: '~32:00', Component: Scene2Takson, nextLabel: 'Lanjut: 5 Kingdom' },
  { id: 'kingdom', num: 'scene_03', stage: '5 Kingdom · Inti', time: '~30:00', Component: Scene3Kingdom, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~18:00', Component: Scene4Refleksi },
]
