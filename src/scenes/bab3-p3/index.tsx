import { Scene1Hook }        from './Scene1Hook'
import { Scene2Tiga }        from './Scene2Tiga'
import { Scene3Tabel }       from './Scene3Tabel'
import { Scene4Klasifikasi } from './Scene4Klasifikasi'
import { Scene5Refleksi }    from './Scene5Refleksi'
import type { Scene } from '../types'

export const bab3p3Scenes: Scene[] = [
  { id:'hook',        num:'scene_01', stage:'Hook · Pendahuluan', time:'~18:00', Component:Scene1Hook,        nextLabel:'Lanjut: Tiga cara'   },
  { id:'tiga',        num:'scene_02', stage:'Tiga Cara · Inti',   time:'~36:00', Component:Scene2Tiga,        nextLabel:'Lanjut: Bandingkan'  },
  { id:'tabel',       num:'scene_03', stage:'Bandingkan · Inti',  time:'~18:00', Component:Scene3Tabel,       nextLabel:'Lanjut: Klasifikasi' },
  { id:'klasifikasi', num:'scene_04', stage:'Klasifikasi · Inti', time:'~30:00', Component:Scene4Klasifikasi, nextLabel:'Lanjut: Refleksi'    },
  { id:'refleksi',    num:'scene_05', stage:'Refleksi · Penutup', time:'~18:00', Component:Scene5Refleksi                                      },
]
