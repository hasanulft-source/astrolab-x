import { Scene1Hook } from './Scene1Hook'
import { Scene2Kromato } from './Scene2Kromato'
import { Scene3Sentrifugasi } from './Scene3Sentrifugasi'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const k8bab6p4Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Kromatografi' },
  { id: 'kromato', num: 'scene_02', stage: 'Kromatografi · Inti', time: '~30:00', Component: Scene2Kromato, nextLabel: 'Lanjut: Sentrifugasi' },
  { id: 'sentrifugasi', num: 'scene_03', stage: 'Sentrifugasi · Inti', time: '~22:00', Component: Scene3Sentrifugasi, nextLabel: 'Lanjut: Penerapan' },
  { id: 'refleksi', num: 'scene_04', stage: 'Penerapan · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
