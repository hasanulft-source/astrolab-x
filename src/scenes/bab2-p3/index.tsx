import { Scene1Hook }     from './Scene1Hook'
import { Scene2Diagram }  from './Scene2Diagram'
import { Scene3Kalor }    from './Scene3Kalor'
import { Scene4Partikel } from './Scene4Partikel'
import { Scene5Refleksi } from './Scene5Refleksi'
import type { Scene } from '../types'

export const bab2p3Scenes: Scene[] = [
  { id:'hook',     num:'scene_01', stage:'Hook · Pendahuluan', time:'~18:00', Component:Scene1Hook,     nextLabel:'Lanjut: Diagram'      },
  { id:'diagram',  num:'scene_02', stage:'Diagram · Inti',     time:'~30:00', Component:Scene2Diagram,  nextLabel:'Lanjut: Kalor'        },
  { id:'kalor',    num:'scene_03', stage:'Kalor · Inti',       time:'~22:00', Component:Scene3Kalor,    nextLabel:'Lanjut: Partikel'     },
  { id:'partikel', num:'scene_04', stage:'Partikel · Inti',    time:'~22:00', Component:Scene4Partikel, nextLabel:'Lanjut: Refleksi'     },
  { id:'refleksi', num:'scene_05', stage:'Refleksi · Penutup', time:'~18:00', Component:Scene5Refleksi                                   },
]
