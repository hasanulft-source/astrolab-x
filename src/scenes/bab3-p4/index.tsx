import { Scene1Hook }        from './Scene1Hook'
import { Scene2KalorJenis }  from './Scene2KalorJenis'
import { Scene3Rumus }       from './Scene3Rumus'
import { Scene6Numerasi }    from './Scene6Numerasi'
import { Scene4Banding }     from './Scene4Banding'
import { Scene5Refleksi }    from './Scene5Refleksi'
import type { Scene } from '../types'

export const bab3p4Scenes: Scene[] = [
  { id:'hook',       num:'scene_01', stage:'Hook · Pendahuluan',          time:'~12:00', Component:Scene1Hook,       nextLabel:'Lanjut: Kalor jenis'      },
  { id:'kalorjenis', num:'scene_02', stage:'Kalor Jenis · Inti',          time:'~20:00', Component:Scene2KalorJenis, nextLabel:'Lanjut: Rumus Q=mcΔT' },
  { id:'rumus',      num:'scene_03', stage:'Rumus · Inti',                time:'~28:00', Component:Scene3Rumus,      nextLabel:'Lanjut: Hitung bersama'   },
  { id:'numerasi',   num:'scene_04', stage:'Hitung Q Bersama · Inti',     time:'~20:00', Component:Scene6Numerasi,   nextLabel:'Lanjut: Bandingkan'       },
  { id:'banding',    num:'scene_05', stage:'Bandingkan · Inti',           time:'~20:00', Component:Scene4Banding,    nextLabel:'Lanjut: Refleksi'         },
  { id:'refleksi',   num:'scene_06', stage:'Refleksi · Penutup',          time:'~12:00', Component:Scene5Refleksi                                         },
]
