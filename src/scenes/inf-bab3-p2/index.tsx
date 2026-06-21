import { Scene1Hook } from './Scene1Hook'
import { Scene2Query } from './Scene2Query'
import { Scene3Operator } from './Scene3Operator'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const infbab3p2Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Perbaiki kueri' },
  { id: 'query', num: 'scene_02', stage: 'Kueri Efektif · Inti', time: '~28:00', Component: Scene2Query, nextLabel: 'Lanjut: Operator' },
  { id: 'operator', num: 'scene_03', stage: 'Operator · Inti', time: '~22:00', Component: Scene3Operator, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
