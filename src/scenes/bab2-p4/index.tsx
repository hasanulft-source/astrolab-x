import { Scene1Hook }      from './Scene1Hook'
import { Scene2Kurva }     from './Scene2Kurva'
import { Scene3Plateau }   from './Scene3Plateau'
import { Scene4Banding }   from './Scene4Banding'
import { Scene6Numerasi }  from './Scene6Numerasi'
import { Scene5Refleksi }  from './Scene5Refleksi'
import type { Scene } from '../types'

export const bab2p4Scenes: Scene[] = [
  { id:'hook',     num:'scene_01', stage:'Hook · Pendahuluan',         time:'~15:00', Component:Scene1Hook,     nextLabel:'Lanjut: Kurva'              },
  { id:'kurva',    num:'scene_02', stage:'Kurva · Inti',               time:'~28:00', Component:Scene2Kurva,    nextLabel:'Lanjut: Plateau'            },
  { id:'plateau',  num:'scene_03', stage:'Plateau · Inti',             time:'~20:00', Component:Scene3Plateau,  nextLabel:'Lanjut: Bandingkan'         },
  { id:'banding',  num:'scene_04', stage:'Bandingkan · Inti',          time:'~17:00', Component:Scene4Banding,  nextLabel:'Lanjut: Hitung dari grafik' },
  { id:'numerasi', num:'scene_05', stage:'Numerasi Grafik · Inti',     time:'~20:00', Component:Scene6Numerasi, nextLabel:'Lanjut: Refleksi'           },
  { id:'refleksi', num:'scene_06', stage:'Refleksi · Penutup',         time:'~15:00', Component:Scene5Refleksi                                         },
]
