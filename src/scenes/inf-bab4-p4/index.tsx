import { Scene1Hook } from './Scene1Hook'
import { Scene2Sandi } from './Scene2Sandi'
import { Scene3Tips } from './Scene3Tips'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const infbab4p4Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Bangun sandi kuat' },
  { id: 'sandi', num: 'scene_02', stage: 'Kata Sandi · Inti', time: '~28:00', Component: Scene2Sandi, nextLabel: 'Lanjut: Tips aman' },
  { id: 'tips', num: 'scene_03', stage: 'Tips Aman · Inti', time: '~20:00', Component: Scene3Tips, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
