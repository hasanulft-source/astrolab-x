import { Scene1Hook }     from './Scene1Hook'
import { Scene2Skala }    from './Scene2Skala'
import { Scene3Rumus }    from './Scene3Rumus'
import { Scene6Numerasi } from './Scene6Numerasi'
import { Scene4Konteks }  from './Scene4Konteks'
import { Scene5Refleksi } from './Scene5Refleksi'
import type { Scene } from '../types'

export const bab3p1Scenes: Scene[] = [
  { id:'hook',     num:'scene_01', stage:'Hook · Pendahuluan',           time:'~18:00', Component:Scene1Hook,     nextLabel:'Lanjut: Empat skala'    },
  { id:'skala',    num:'scene_02', stage:'Empat Skala · Inti',           time:'~30:00', Component:Scene2Skala,    nextLabel:'Lanjut: Rumus konversi' },
  { id:'rumus',    num:'scene_03', stage:'Konversi · Inti',              time:'~32:00', Component:Scene3Rumus,    nextLabel:'Lanjut: Kalkulator'     },
  { id:'numerasi', num:'scene_04', stage:'Kalkulator Konversi · Inti',   time:'~20:00', Component:Scene6Numerasi, nextLabel:'Lanjut: Konteks'        },
  { id:'konteks',  num:'scene_05', stage:'Konteks · Inti',               time:'~22:00', Component:Scene4Konteks,  nextLabel:'Lanjut: Refleksi'       },
  { id:'refleksi', num:'scene_06', stage:'Refleksi · Penutup',           time:'~18:00', Component:Scene5Refleksi                                     },
]
