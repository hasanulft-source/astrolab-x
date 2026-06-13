import { Scene1Hook } from './Scene1Hook'
import { Scene2Ciri } from './Scene2Ciri'
import { Scene3Uji } from './Scene3Uji'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'

export const bab5p1Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~18:00', Component: Scene1Hook, nextLabel: 'Lanjut: 7 Ciri MH' },
  { id: 'ciri', num: 'scene_02', stage: '7 Ciri MH · Inti', time: '~30:00', Component: Scene2Ciri, nextLabel: 'Lanjut: Uji kasus' },
  { id: 'uji', num: 'scene_03', stage: 'Uji Kasus · Inti', time: '~30:00', Component: Scene3Uji, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~18:00', Component: Scene4Refleksi },
]
