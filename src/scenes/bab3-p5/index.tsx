import { Scene1Hook }     from './Scene1Hook'
import { Scene2Wujud }    from './Scene2Wujud'
import { Scene3Terapan }  from './Scene3Terapan'
import { Scene4Hitung }   from './Scene4Hitung'
import { Scene5Refleksi } from './Scene5Refleksi'
import type { Scene } from '../types'

export const bab3p5Scenes: Scene[] = [
  { id:'hook',     num:'scene_01', stage:'Hook · Pendahuluan',  time:'~18:00', Component:Scene1Hook,     nextLabel:'Lanjut: 3 wujud'      },
  { id:'wujud',    num:'scene_02', stage:'Pemuaian · Inti',     time:'~28:00', Component:Scene2Wujud,    nextLabel:'Lanjut: Penerapan'    },
  { id:'terapan',  num:'scene_03', stage:'Penerapan · Inti',    time:'~28:00', Component:Scene3Terapan,  nextLabel:'Lanjut: Hitung ΔL'    },
  { id:'hitung',   num:'scene_04', stage:'Hitung ΔL · Inti',    time:'~30:00', Component:Scene4Hitung,   nextLabel:'Lanjut: Refleksi'     },
  { id:'refleksi', num:'scene_05', stage:'Refleksi · Penutup',  time:'~18:00', Component:Scene5Refleksi                                   },
]
