import { Scene1Hook } from './Scene1Hook'
import { Scene2Tekstur } from './Scene2Tekstur'
import { Scene3pH } from './Scene3pH'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const k8bab7p3Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Tekstur' },
  { id: 'tekstur', num: 'scene_02', stage: 'Tekstur · Inti', time: '~26:00', Component: Scene2Tekstur, nextLabel: 'Lanjut: pH & kesuburan' },
  { id: 'ph', num: 'scene_03', stage: 'pH · Inti', time: '~26:00', Component: Scene3pH, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
