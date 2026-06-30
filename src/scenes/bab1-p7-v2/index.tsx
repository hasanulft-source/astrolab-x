import { Scene1Wonder }        from './Scene1Wonder'
import { Scene2Skala }         from './Scene2Skala'
import { Scene3PresiAkurasi }  from './Scene3PresiAkurasi'
import { Scene4Konfirmasi }    from './Scene4Konfirmasi'
import { Scene5Refleksi }      from './Scene5Refleksi'
import type { DiscoveryScene } from '../discovery-types'

export const bab1p7v2Scenes: DiscoveryScene[] = [
  { id:'wonder',    stageName:'Wonder · $327 juta hilang',       nextLabel:'Baca skala',             notebookStage:'hypothesis',  requiresInteraction:true, Component:Scene1Wonder },
  { id:'skala',     stageName:'Skala · Baca dengan tepat',       nextLabel:'Presisi vs akurasi',     notebookStage:'observation', requiresInteraction:true, Component:Scene2Skala },
  { id:'presi',     stageName:'Presisi & Akurasi · Bedanya apa?',nextLabel:'Konfirmasi',             notebookStage:'observation', requiresInteraction:true, Component:Scene3PresiAkurasi },
  { id:'konfirmasi',stageName:'Konfirmasi · Pikiranmu berubah?', nextLabel:'Refleksi',               notebookStage:'reflection',  requiresInteraction:true, Component:Scene4Konfirmasi },
  { id:'refleksi',  stageName:'Refleksi · Penutup',              notebookStage:'reflection',                                      Component:Scene5Refleksi },
]
