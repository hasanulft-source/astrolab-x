import { Scene1Hook }     from './Scene1Hook'
import { Scene2Konsep }   from './Scene2Konsep'
import { Scene3Grafik }   from './Scene3Grafik'
import { Scene4Baca }     from './Scene4Baca'
import { Scene5Refleksi } from './Scene5Refleksi'
import type { Scene } from '../types'

export const bab4p2Scenes: Scene[] = [
  { id:'hook',     num:'scene_01', stage:'Hook · Pendahuluan', time:'~12:00', Component:Scene1Hook,     nextLabel:'Lanjut: Konsep GLB'  },
  { id:'konsep',   num:'scene_02', stage:'GLB · Inti',         time:'~18:00', Component:Scene2Konsep,   nextLabel:'Lanjut: Grafik s-t'  },
  { id:'grafik',   num:'scene_03', stage:'Grafik s-t · Inti',  time:'~26:00', Component:Scene3Grafik,   nextLabel:'Lanjut: Baca grafik' },
  { id:'baca',     num:'scene_04', stage:'Baca · Inti',        time:'~14:00', Component:Scene4Baca,     nextLabel:'Lanjut: Refleksi'    },
  { id:'refleksi', num:'scene_05', stage:'Refleksi · Penutup', time:'~10:00', Component:Scene5Refleksi                                  },
]
