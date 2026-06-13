import { Scene1Hook } from './Scene1Hook'
import { Scene2Jelajah } from './Scene2Jelajah'
import { Scene3Tabel } from './Scene3Tabel'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'

export const bab5p3Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~14:00', Component: Scene1Hook, nextLabel: 'Lanjut: Jelajah kingdom' },
  { id: 'jelajah', num: 'scene_02', stage: 'Jelajah · Inti', time: '~34:00', Component: Scene2Jelajah, nextLabel: 'Lanjut: Tabel pembanding' },
  { id: 'tabel', num: 'scene_03', stage: 'Tabel Pembanding · Inti', time: '~22:00', Component: Scene3Tabel, nextLabel: 'Lanjut: Kuis' },
  { id: 'refleksi', num: 'scene_04', stage: 'Kuis · Penutup', time: '~12:00', Component: Scene4Refleksi },
]
