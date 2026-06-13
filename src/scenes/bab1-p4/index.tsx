import { Scene1Hook }     from './Scene1Hook'
import { Scene2Simbol }   from './Scene2Simbol'
import { Scene3Skenario } from './Scene3Skenario'
import { Scene4Aturan }   from './Scene4Aturan'
import { Scene5Komitmen } from './Scene5Komitmen'
import type { Scene } from '../types'

export const bab1p4Scenes: Scene[] = [
  { id:'hook',     num:'scene_01', stage:'Hook · Pendahuluan',  time:'~12:00', Component:Scene1Hook,     nextLabel:'Lanjut: Simbol bahaya' },
  { id:'simbol',   num:'scene_02', stage:'Simbol · Inti',       time:'~18:00', Component:Scene2Simbol,   nextLabel:'Lanjut: Skenario'      },
  { id:'skenario', num:'scene_03', stage:'Skenario · Inti',     time:'~25:00', Component:Scene3Skenario, nextLabel:'Lanjut: Aturan lab'    },
  { id:'aturan',   num:'scene_04', stage:'Aturan · Inti',       time:'~13:00', Component:Scene4Aturan,   nextLabel:'Lanjut: Komitmen'      },
  { id:'komitmen', num:'scene_05', stage:'Komitmen · Penutup',  time:'~12:00', Component:Scene5Komitmen                                    },
]
