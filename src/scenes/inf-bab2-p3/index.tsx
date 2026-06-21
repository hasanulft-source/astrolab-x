import { Scene1Hook } from './Scene1Hook'
import { Scene2Sort } from './Scene2Sort'
import { Scene3Filter } from './Scene3Filter'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const infbab2p3Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Mengurutkan' },
  { id: 'sort', num: 'scene_02', stage: 'Sorting · Inti', time: '~26:00', Component: Scene2Sort, nextLabel: 'Lanjut: Menyaring' },
  { id: 'filter', num: 'scene_03', stage: 'Filtering · Inti', time: '~24:00', Component: Scene3Filter, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
