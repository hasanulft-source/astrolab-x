import { Scene1Hook } from './Scene1Hook'
import { Scene2FaktaOpini } from './Scene2FaktaOpini'
import { Scene3Hoaks } from './Scene3Hoaks'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'
export const infbab3p3Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~12:00', Component: Scene1Hook, nextLabel: 'Lanjut: Fakta vs opini' },
  { id: 'faktaopini', num: 'scene_02', stage: 'Fakta & Opini · Inti', time: '~24:00', Component: Scene2FaktaOpini, nextLabel: 'Lanjut: Detektor hoaks' },
  { id: 'hoaks', num: 'scene_03', stage: 'Detektor Hoaks · Inti', time: '~26:00', Component: Scene3Hoaks, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~14:00', Component: Scene4Refleksi },
]
