import { Scene1Hook } from './Scene1Hook'
import { Scene2Saluran } from './Scene2Saluran'
import { Scene3Pertukaran } from './Scene3Pertukaran'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const k8bab2p1Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Saluran napas' },
  { id: 'saluran', num: 'scene_02', stage: 'Organ · Inti', time: '~28:00', Component: Scene2Saluran, nextLabel: 'Lanjut: Pertukaran gas' },
  { id: 'pertukaran', num: 'scene_03', stage: 'Pertukaran Gas · Inti', time: '~24:00', Component: Scene3Pertukaran, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
