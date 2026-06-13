import { Scene1Hook }     from './Scene1Hook'
import { Scene2Galeri }   from './Scene2Galeri'
import { Scene3Kategori } from './Scene3Kategori'
import { Scene4Kuis }     from './Scene4Kuis'
import { Scene5Refleksi } from './Scene5Refleksi'
import type { Scene } from '../types'

export const bab1p3Scenes: Scene[] = [
  { id:'hook',     num:'scene_01', stage:'Hook · Pendahuluan', time:'~18:00', Component:Scene1Hook,     nextLabel:'Lanjut: Galeri alat' },
  { id:'galeri',   num:'scene_02', stage:'Galeri · Inti',      time:'~40:00', Component:Scene2Galeri,   nextLabel:'Lanjut: Kategori'    },
  { id:'kategori', num:'scene_03', stage:'Kategori · Inti',    time:'~20:00', Component:Scene3Kategori, nextLabel:'Lanjut: Kuis'        },
  { id:'kuis',     num:'scene_04', stage:'Kuis · Inti',        time:'~25:00', Component:Scene4Kuis,     nextLabel:'Lanjut: Refleksi'    },
  { id:'refleksi', num:'scene_05', stage:'Refleksi · Penutup', time:'~17:00', Component:Scene5Refleksi                                  },
]
