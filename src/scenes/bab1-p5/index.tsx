import { Scene1Hook }       from './Scene1Hook'
import { Scene2Variabel }   from './Scene2Variabel'
import { Scene3Lab }        from './Scene3Lab'
import { Scene4Numerasi }   from './Scene4Numerasi'
import { Scene4Rancangan }  from './Scene4Rancangan'
import { Scene5Refleksi }   from './Scene5Refleksi'
import type { Scene } from '../types'

export const bab1p5Scenes: Scene[] = [
  { id:'hook',      num:'scene_01', stage:'Hook · Pendahuluan',         time:'~15:00', Component:Scene1Hook,      nextLabel:'Lanjut: Identifikasi variabel' },
  { id:'variabel',  num:'scene_02', stage:'Variabel · Inti',            time:'~20:00', Component:Scene2Variabel,  nextLabel:'Lanjut: Lab telur'             },
  { id:'lab',       num:'scene_03', stage:'Lab Telur · Inti',           time:'~30:00', Component:Scene3Lab,       nextLabel:'Lanjut: Analisis data'         },
  { id:'numerasi',  num:'scene_04', stage:'Analisis Numerasi · Inti',   time:'~20:00', Component:Scene4Numerasi,  nextLabel:'Lanjut: Rancangan'             },
  { id:'rancangan', num:'scene_05', stage:'Rancangan · Inti',           time:'~15:00', Component:Scene4Rancangan, nextLabel:'Lanjut: Refleksi'              },
  { id:'refleksi',  num:'scene_06', stage:'Refleksi · Penutup',         time:'~18:00', Component:Scene5Refleksi                                             },
]
