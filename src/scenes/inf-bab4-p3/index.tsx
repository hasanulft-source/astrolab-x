import { Scene1Hook } from './Scene1Hook'
import { Scene2Pilah } from './Scene2Pilah'
import { Scene3Risiko } from './Scene3Risiko'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const infbab4p3Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Pilah data' },
  { id: 'pilah', num: 'scene_02', stage: 'Privat vs Publik · Inti', time: '~24:00', Component: Scene2Pilah, nextLabel: 'Lanjut: Risiko' },
  { id: 'risiko', num: 'scene_03', stage: 'Risiko · Inti', time: '~22:00', Component: Scene3Risiko, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
