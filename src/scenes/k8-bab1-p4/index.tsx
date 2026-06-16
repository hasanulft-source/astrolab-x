import { Scene1Hook } from './Scene1Hook'
import { Scene2Peredaran } from './Scene2Peredaran'
import { Scene3Pembuluh } from './Scene3Pembuluh'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const k8bab1p4Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Besar & kecil' },
  { id: 'peredaran', num: 'scene_02', stage: 'Peredaran · Inti', time: '~30:00', Component: Scene2Peredaran, nextLabel: 'Lanjut: Pembuluh darah' },
  { id: 'pembuluh', num: 'scene_03', stage: 'Pembuluh · Inti', time: '~24:00', Component: Scene3Pembuluh, nextLabel: 'Lanjut: Denyut nadi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Denyut Nadi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
