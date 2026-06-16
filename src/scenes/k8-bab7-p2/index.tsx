import { Scene1Hook } from './Scene1Hook'
import { Scene2Profil } from './Scene2Profil'
import { Scene3Kuis } from './Scene3Kuis'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const k8bab7p2Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Profil tanah' },
  { id: 'profil', num: 'scene_02', stage: 'Profil · Inti', time: '~28:00', Component: Scene2Profil, nextLabel: 'Lanjut: Kuis lapisan' },
  { id: 'kuis', num: 'scene_03', stage: 'Kuis · Inti', time: '~22:00', Component: Scene3Kuis, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
