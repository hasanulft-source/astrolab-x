import { Scene1Hook } from './Scene1Hook'
import { Scene2Mekanisme } from './Scene2Mekanisme'
import { Scene3Dampak } from './Scene3Dampak'
import { Scene4Solusi } from './Scene4Solusi'
import type { Scene } from '../types'
export const bab7p4Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~14:00', Component: Scene1Hook, nextLabel: 'Lanjut: Mekanisme' },
  { id: 'mekanisme', num: 'scene_02', stage: 'Mekanisme · Inti', time: '~30:00', Component: Scene2Mekanisme, nextLabel: 'Lanjut: Dampak' },
  { id: 'dampak', num: 'scene_03', stage: 'Pemanasan Global · Inti', time: '~26:00', Component: Scene3Dampak, nextLabel: 'Lanjut: Solusi' },
  { id: 'solusi', num: 'scene_04', stage: 'Solusi · Penutup', time: '~16:00', Component: Scene4Solusi },
]
