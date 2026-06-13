import { Scene1Hook }         from './Scene1Hook'
import { Scene2Ciri }         from './Scene2Ciri'
import { Scene3Klasifikasi }  from './Scene3Klasifikasi'
import { Scene4Demo }         from './Scene4Demo'
import { Scene5Refleksi }     from './Scene5Refleksi'
import type { Scene } from '../types'

export const bab2p5Scenes: Scene[] = [
  { id:'hook',        num:'scene_01', stage:'Hook · Pendahuluan',   time:'~15:00', Component:Scene1Hook,        nextLabel:'Lanjut: 4 tanda'      },
  { id:'ciri',        num:'scene_02', stage:'4 Tanda · Inti',       time:'~22:00', Component:Scene2Ciri,        nextLabel:'Lanjut: Klasifikasi'  },
  { id:'klasifikasi', num:'scene_03', stage:'Klasifikasi · Inti',   time:'~30:00', Component:Scene3Klasifikasi, nextLabel:'Lanjut: Demo reaksi'  },
  { id:'demo',        num:'scene_04', stage:'Demo · Inti',          time:'~20:00', Component:Scene4Demo,        nextLabel:'Lanjut: Cheat sheet'  },
  { id:'refleksi',    num:'scene_05', stage:'Cheat Sheet · Penutup',time:'~18:00', Component:Scene5Refleksi                                       },
]
