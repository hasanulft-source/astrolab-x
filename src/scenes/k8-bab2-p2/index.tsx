import { Scene1Hook } from './Scene1Hook'
import { Scene2Mekanisme } from './Scene2Mekanisme'
import { Scene3DadaPerut } from './Scene3DadaPerut'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const k8bab2p2Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Inspirasi & ekspirasi' },
  { id: 'mekanisme', num: 'scene_02', stage: 'Mekanisme · Inti', time: '~30:00', Component: Scene2Mekanisme, nextLabel: 'Lanjut: Dada vs perut' },
  { id: 'dadaperut', num: 'scene_03', stage: 'Dada vs Perut · Inti', time: '~22:00', Component: Scene3DadaPerut, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
