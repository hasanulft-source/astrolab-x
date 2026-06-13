import { Scene1Hook }       from './Scene1Hook'
import { Scene2Konstelasi } from './Scene2Konstelasi'
import { Scene3Manfaat }    from './Scene3Manfaat'
import { Scene4Keterkaitan }from './Scene4Keterkaitan'
import { Scene5Reveal }     from './Scene5Reveal'
import type { Scene } from '../types'

export const bab1p1Scenes: Scene[] = [
  { id:'hook',        num:'scene_01', stage:'Hook · Pendahuluan',     time:'~15:00', Component:Scene1Hook,        nextLabel:'Lanjut: Konstelasi'  },
  { id:'konstelasi',  num:'scene_02', stage:'Konstelasi · Inti',      time:'~25:00', Component:Scene2Konstelasi,  nextLabel:'Lanjut: Manfaat'     },
  { id:'manfaat',     num:'scene_03', stage:'Manfaat · Inti',         time:'~25:00', Component:Scene3Manfaat,     nextLabel:'Lanjut: Keterkaitan' },
  { id:'keterkaitan', num:'scene_04', stage:'Keterkaitan · Inti',     time:'~20:00', Component:Scene4Keterkaitan, nextLabel:'Lanjut: Refleksi'    },
  { id:'reveal',      num:'scene_05', stage:'Refleksi · Penutup',     time:'~15:00', Component:Scene5Reveal                                       },
]
