import { Scene1Hook } from './Scene1Hook'
import { Scene2Rantai } from './Scene2Rantai'
import { Scene3Jaring } from './Scene3Jaring'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const bab6p3Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Rantai makanan' },
  { id: 'rantai', num: 'scene_02', stage: 'Rantai Makanan · Inti', time: '~24:00', Component: Scene2Rantai, nextLabel: 'Lanjut: Jaring makanan' },
  { id: 'jaring', num: 'scene_03', stage: 'Jaring Makanan · Inti', time: '~28:00', Component: Scene3Jaring, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~16:00', Component: Scene4Refleksi },
]
