import { Scene1Hook } from './Scene1Hook'
import { Scene2Cek } from './Scene2Cek'
import { Scene3Manajemen } from './Scene3Manajemen'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const infbab3p4Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Cek kredibilitas' },
  { id: 'cek', num: 'scene_02', stage: 'Kredibilitas · Inti', time: '~26:00', Component: Scene2Cek, nextLabel: 'Lanjut: Manajemen' },
  { id: 'manajemen', num: 'scene_03', stage: 'Manajemen · Inti', time: '~22:00', Component: Scene3Manajemen, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
