import { Scene1Hook } from './Scene1Hook'
import { Scene2Jenis } from './Scene2Jenis'
import { Scene3Bayangan } from './Scene3Bayangan'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const k8bab5p4Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Jenis cermin & lensa' },
  { id: 'jenis', num: 'scene_02', stage: 'Jenis · Inti', time: '~28:00', Component: Scene2Jenis, nextLabel: 'Lanjut: Pembentukan bayangan' },
  { id: 'bayangan', num: 'scene_03', stage: 'Bayangan · Inti', time: '~24:00', Component: Scene3Bayangan, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
