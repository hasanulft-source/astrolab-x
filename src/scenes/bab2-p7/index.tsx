import { Scene1Hook }       from './Scene1Hook'
import { Scene2Layer }      from './Scene2Layer'
import { Scene3Rumus }      from './Scene3Rumus'
import { Scene4Apung }      from './Scene4Apung'
import { Scene5Penerapan }  from './Scene5Penerapan'
import { Scene6Numerasi }   from './Scene6Numerasi'
import type { Scene } from '../types'

export const bab2p7Scenes: Scene[] = [
  { id:'hook',      num:'scene_01', stage:'Hook · Pendahuluan',            time:'~15:00', Component:Scene1Hook,      nextLabel:'Lanjut: Lapisan'            },
  { id:'lapisan',   num:'scene_02', stage:'Lapisan · Inti',                time:'~20:00', Component:Scene2Layer,     nextLabel:'Lanjut: Rumus ρ=m/V'   },
  { id:'rumus',     num:'scene_03', stage:'Rumus · Inti',                  time:'~30:00', Component:Scene3Rumus,     nextLabel:'Lanjut: Apung/tenggelam'    },
  { id:'apung',     num:'scene_04', stage:'Apung · Inti',                  time:'~25:00', Component:Scene4Apung,     nextLabel:'Lanjut: Penerapan'          },
  { id:'penerapan', num:'scene_05', stage:'Penerapan · Inti',              time:'~25:00', Component:Scene5Penerapan, nextLabel:'Lanjut: Hitung massa jenis' },
  { id:'numerasi',  num:'scene_06', stage:'Hitung Massa Jenis · Inti',     time:'~20:00', Component:Scene6Numerasi                                          },
]
