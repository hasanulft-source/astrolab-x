import { Scene1Hook }       from './Scene1Hook'
import { Scene2Skalar }     from './Scene2Skalar'
import { Scene3Lintasan }   from './Scene3Lintasan'
import { Scene4Kecepatan }  from './Scene4Kecepatan'
import { Scene5Refleksi }   from './Scene5Refleksi'
import type { Scene } from '../types'

export const bab4p1Scenes: Scene[] = [
  { id:'hook',      num:'scene_01', stage:'Hook · Pendahuluan',   time:'~18:00', Component:Scene1Hook,      nextLabel:'Lanjut: Skalar vs vektor' },
  { id:'skalar',    num:'scene_02', stage:'Skalar/Vektor · Inti', time:'~24:00', Component:Scene2Skalar,    nextLabel:'Lanjut: Lintasan'         },
  { id:'lintasan',  num:'scene_03', stage:'Lintasan · Inti',      time:'~30:00', Component:Scene3Lintasan,  nextLabel:'Lanjut: Kecepatan'        },
  { id:'kecepatan', num:'scene_04', stage:'Kecepatan · Inti',     time:'~30:00', Component:Scene4Kecepatan, nextLabel:'Lanjut: Refleksi'         },
  { id:'refleksi',  num:'scene_05', stage:'Refleksi · Penutup',   time:'~18:00', Component:Scene5Refleksi                                       },
]
