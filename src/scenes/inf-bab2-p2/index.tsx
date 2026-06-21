import { Scene1Hook } from './Scene1Hook'
import { Scene2Sheet } from './Scene2Sheet'
import { Scene3Anatomi } from './Scene3Anatomi'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const infbab2p2Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Spreadsheet & formula' },
  { id: 'sheet', num: 'scene_02', stage: 'Formula · Inti', time: '~32:00', Component: Scene2Sheet, nextLabel: 'Lanjut: Anatomi' },
  { id: 'anatomi', num: 'scene_03', stage: 'Anatomi · Inti', time: '~20:00', Component: Scene3Anatomi, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
