import { Scene1Hook } from './Scene1Hook'
import { Scene2Rotasi } from './Scene2Rotasi'
import { Scene3Revolusi } from './Scene3Revolusi'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const bab7p2Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~14:00', Component: Scene1Hook, nextLabel: 'Lanjut: Rotasi' },
  { id: 'rotasi', num: 'scene_02', stage: 'Rotasi · Inti', time: '~28:00', Component: Scene2Rotasi, nextLabel: 'Lanjut: Revolusi & musim' },
  { id: 'revolusi', num: 'scene_03', stage: 'Revolusi · Inti', time: '~32:00', Component: Scene3Revolusi, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~16:00', Component: Scene4Refleksi },
]
