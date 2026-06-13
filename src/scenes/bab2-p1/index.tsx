import { Scene1Hook }    from './Scene1Hook'
import { Scene2Zoom }    from './Scene2Zoom'
import { Scene3Compare } from './Scene3Compare'
import { Scene4Embody }  from './Scene4Embody'
import { Scene5Reveal }  from './Scene5Reveal'
import type { Scene } from '../types'

export const bab2p1Scenes: Scene[] = [
  { id:'hook',    num:'scene_01', stage:'Hook · Pendahuluan', time:'~05:00', Component:Scene1Hook,    nextLabel:'Lanjut: Zoom partikel'  },
  { id:'zoom',    num:'scene_02', stage:'Zoom · Inti',        time:'~15:00', Component:Scene2Zoom,    nextLabel:'Lanjut: Compare'        },
  { id:'compare', num:'scene_03', stage:'Compare · Inti',     time:'~15:00', Component:Scene3Compare, nextLabel:'Lanjut: Jadi partikel'  },
  { id:'embody',  num:'scene_04', stage:'Embody · Inti',      time:'~10:00', Component:Scene4Embody,  nextLabel:'Lanjut: Reveal'         },
  { id:'reveal',  num:'scene_05', stage:'Reveal · Diskusi',   time:'~10:00', Component:Scene5Reveal                                      },
]
