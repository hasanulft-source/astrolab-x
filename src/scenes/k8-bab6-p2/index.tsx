import { Scene1Hook } from './Scene1Hook'
import { Scene2Filtrasi } from './Scene2Filtrasi'
import { Scene3Distilasi } from './Scene3Distilasi'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const k8bab6p2Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Filtrasi' },
  { id: 'filtrasi', num: 'scene_02', stage: 'Filtrasi · Inti', time: '~28:00', Component: Scene2Filtrasi, nextLabel: 'Lanjut: Distilasi' },
  { id: 'distilasi', num: 'scene_03', stage: 'Distilasi · Inti', time: '~24:00', Component: Scene3Distilasi, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
