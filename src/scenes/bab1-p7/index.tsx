import { Scene1Hook }     from './Scene1Hook'
import { Scene2Skala }    from './Scene2Skala'
import { Scene3Besaran }  from './Scene3Besaran'
import { Scene4Presisi }  from './Scene4Presisi'
import { Scene5Refleksi } from './Scene5Refleksi'
import type { Scene } from '../types'

export const bab1p7Scenes: Scene[] = [
  { id:'hook',     num:'scene_01', stage:'Hook · Pendahuluan',  time:'~18:00', Component:Scene1Hook,     nextLabel:'Lanjut: Baca skala'        },
  { id:'skala',    num:'scene_02', stage:'Baca Skala · Inti',   time:'~30:00', Component:Scene2Skala,    nextLabel:'Lanjut: Besaran & satuan'  },
  { id:'besaran',  num:'scene_03', stage:'Besaran · Inti',      time:'~22:00', Component:Scene3Besaran,  nextLabel:'Lanjut: Presisi & akurasi' },
  { id:'presisi',  num:'scene_04', stage:'Presisi · Inti',      time:'~25:00', Component:Scene4Presisi,  nextLabel:'Lanjut: Refleksi'          },
  { id:'refleksi', num:'scene_05', stage:'Refleksi · Penutup',  time:'~18:00', Component:Scene5Refleksi                                       },
]
