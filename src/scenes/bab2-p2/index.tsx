import { Scene1Hook }     from './Scene1Hook'
import { Scene2Sifat }    from './Scene2Sifat'
import { Scene3Fenomena } from './Scene3Fenomena'
import { Scene4Refleksi } from './Scene4Refleksi'
import type { Scene } from '../types'

export const bab2p2Scenes: Scene[] = [
  { id:'hook',     num:'scene_01', stage:'Hook · Pendahuluan', time:'~12:00', Component:Scene1Hook,     nextLabel:'Lanjut: Sifat wujud' },
  { id:'sifat',    num:'scene_02', stage:'Sifat · Inti',       time:'~28:00', Component:Scene2Sifat,    nextLabel:'Lanjut: Fenomena'    },
  { id:'fenomena', num:'scene_03', stage:'Fenomena · Inti',    time:'~28:00', Component:Scene3Fenomena, nextLabel:'Lanjut: Refleksi'    },
  { id:'refleksi', num:'scene_04', stage:'Refleksi · Penutup', time:'~12:00', Component:Scene4Refleksi                                  },
]
