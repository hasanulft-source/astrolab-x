import { Scene1Hook } from './Scene1Hook'
import { Scene2Identifikasi } from './Scene2Identifikasi'
import { Scene3Struktur } from './Scene3Struktur'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'

export const bab5p4Scenes: Scene[] = [
  { id: 'hook', num: 'scene_01', stage: 'Hook · Pendahuluan', time: '~18:00', Component: Scene1Hook, nextLabel: 'Lanjut: Identifikasi' },
  { id: 'identifikasi', num: 'scene_02', stage: 'Identifikasi · Inti', time: '~36:00', Component: Scene2Identifikasi, nextLabel: 'Lanjut: Struktur kunci' },
  { id: 'struktur', num: 'scene_03', stage: 'Struktur Kunci · Inti', time: '~20:00', Component: Scene3Struktur, nextLabel: 'Lanjut: Refleksi' },
  { id: 'refleksi', num: 'scene_04', stage: 'Refleksi · Penutup', time: '~18:00', Component: Scene4Refleksi },
]
