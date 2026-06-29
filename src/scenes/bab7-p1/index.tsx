import { Scene1Hook }      from './Scene1Hook'
import { Scene2Planet }    from './Scene2Planet'
import { Scene3DalamLuar } from './Scene3DalamLuar'
import { Scene4Anggota }   from './Scene4Anggota'
import { Scene5Planet }    from './Scene5Planet'
import type { Scene } from '../types'

export const bab7p1Scenes: Scene[] = [
  { id:'hook',         num:'scene_01', stage:'Hook · Pendahuluan',           time:'~14:00', Component:Scene1Hook,      nextLabel:'Lanjut: Jelajah planet'      },
  { id:'planet',       num:'scene_02', stage:'Jelajah Planet · Inti',        time:'~34:00', Component:Scene2Planet,    nextLabel:'Lanjut: Dalam vs luar'       },
  { id:'dalamluar',    num:'scene_03', stage:'Dalam vs Luar · Inti',         time:'~22:00', Component:Scene3DalamLuar, nextLabel:'Lanjut: Anggota lain'        },
  { id:'anggota',      num:'scene_04', stage:'Anggota Lain · Inti',          time:'~16:00', Component:Scene4Anggota,   nextLabel:'Lanjut: Perbandingan planet' },
  { id:'perbandingan', num:'scene_05', stage:'Perbandingan Planet · Inti',   time:'~25:00', Component:Scene5Planet                                             },
]
