import { Scene1Hook }     from './Scene1Hook'
import { Scene2Fase }     from './Scene2Fase'
import { Scene3Gerhana }  from './Scene3Gerhana'
import { Scene5Waktu }    from './Scene5Waktu'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'

export const bab7p3Scenes: Scene[] = [
  { id:'hook',      num:'scene_01', stage:'Hook · Pendahuluan',           time:'~12:00', Component:Scene1Hook,     nextLabel:'Lanjut: Fase Bulan'   },
  { id:'fase',      num:'scene_02', stage:'Fase Bulan · Inti',            time:'~30:00', Component:Scene2Fase,     nextLabel:'Lanjut: Gerhana'      },
  { id:'gerhana',   num:'scene_03', stage:'Gerhana · Inti',               time:'~26:00', Component:Scene3Gerhana,  nextLabel:'Lanjut: Zona Waktu'   },
  { id:'zonawaktu', num:'scene_04', stage:'Kalkulator Zona Waktu · Inti', time:'~20:00', Component:Scene5Waktu,    nextLabel:'Lanjut: Refleksi'     },
  { id:'refleksi',  num:'scene_05', stage:'Pasang Surut · Penutup',       time:'~14:00', Component:Scene4Refleksi                                   },
]
