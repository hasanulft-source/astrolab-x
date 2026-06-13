import { Scene1Hook }       from './Scene1Hook'
import { Scene2Percepatan } from './Scene2Percepatan'
import { Scene3Luas }       from './Scene3Luas'
import { Scene4Persamaan }  from './Scene4Persamaan'
import { Scene5Refleksi }   from './Scene5Refleksi'
import type { Scene } from '../types'

export const bab4p3Scenes: Scene[] = [
  { id:'hook',       num:'scene_01', stage:'Hook · Pendahuluan',   time:'~18:00', Component:Scene1Hook,       nextLabel:'Lanjut: Percepatan'   },
  { id:'percepatan', num:'scene_02', stage:'Percepatan · Inti',    time:'~28:00', Component:Scene2Percepatan, nextLabel:'Lanjut: Luas = jarak' },
  { id:'luas',       num:'scene_03', stage:'Luas · Inti',          time:'~26:00', Component:Scene3Luas,       nextLabel:'Lanjut: Persamaan'    },
  { id:'persamaan',  num:'scene_04', stage:'Persamaan · Inti',     time:'~30:00', Component:Scene4Persamaan,  nextLabel:'Lanjut: Refleksi'     },
  { id:'refleksi',   num:'scene_05', stage:'Refleksi · Penutup',   time:'~18:00', Component:Scene5Refleksi                                     },
]
