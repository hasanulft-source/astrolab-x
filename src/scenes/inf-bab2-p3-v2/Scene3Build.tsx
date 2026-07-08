import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene3Build.module.css'
export function Scene3Build({ onUnlock }: DiscoverySceneProps) {
  const [chartType, setChartType] = useState<'bar'|'line'|'pie'>('bar')
  const [unlocked, setUnlocked] = useState(false)
  const pick = (t: 'bar'|'line'|'pie') => { setChartType(t); if (!unlocked) { setUnlocked(true); onUnlock() } }
  const data = [['Kelas A',78],['Kelas B',82],['Kelas C',75],['Kelas D',88],['Kelas E',80]] as [string,number][]
  const colors = ['#09637e','#088395','#7AB2B2','#0ea5e9','#38bdf8']
  const total = data.reduce((s,[,v])=>s+v,0)
  return (
    <>
      <p className={styles.prompt}>Data rata-rata 5 kelas. <em>Ganti jenis chart — lihat bagaimana cerita yang sama tampil berbeda.</em></p>
      <div className={styles.typeBar}>
        {[['bar','Bar'],['line','Line'],['pie','Pie']].map(([k,l])=>(
          <button key={k} className={`${styles.typeBtn} ${chartType===k?styles.typeOn:''}`} onClick={()=>pick(k as any)}>{l} Chart</button>
        ))}
      </div>
      <div className={styles.chartArea}>
        {chartType==='bar'&&<svg viewBox="0 0 300 160" className={styles.svg}>
          <line x1="40" y1="140" x2="290" y2="140" stroke="var(--line)"/>
          {data.map(([n,v],i)=><g key={n}><rect x={50+i*48} y={140-v} width="32" height={v} fill={colors[i]}/><text x={66+i*48} y={152} fontSize="8" textAnchor="middle" fill="var(--ink-3)">{n.split(' ')[1]}</text><text x={66+i*48} y={136-v} fontSize="9" textAnchor="middle" fill="var(--ink)" fontWeight="700">{v}</text></g>)}
        </svg>}
        {chartType==='line'&&<svg viewBox="0 0 300 160" className={styles.svg}>
          <line x1="40" y1="140" x2="290" y2="140" stroke="var(--line)"/>
          <polyline points={data.map(([,v],i)=>`${66+i*48},${140-v}`).join(' ')} fill="none" stroke="var(--teal-mid)" strokeWidth="2.5"/>
          {data.map(([n,v],i)=><g key={n}><circle cx={66+i*48} cy={140-v} r="4" fill="var(--teal-mid)"/><text x={66+i*48} y={152} fontSize="8" textAnchor="middle" fill="var(--ink-3)">{n.split(' ')[1]}</text></g>)}
        </svg>}
        {chartType==='pie'&&<svg viewBox="0 0 300 160" className={styles.svg}>
          {(()=>{let acc=0;return data.map(([n,v],i)=>{const start=acc/total*2*Math.PI;acc+=v;const end=acc/total*2*Math.PI;const x1=150+55*Math.cos(start-Math.PI/2),y1=80+55*Math.sin(start-Math.PI/2);const x2=150+55*Math.cos(end-Math.PI/2),y2=80+55*Math.sin(end-Math.PI/2);const large=(end-start)>Math.PI?1:0;return <path key={n} d={`M150,80 L${x1},${y1} A55,55 0 ${large},1 ${x2},${y2} Z`} fill={colors[i]}/>})})()}
          {data.map(([n],i)=><g key={n}><rect x={230} y={20+i*20} width="10" height="10" fill={colors[i]}/><text x={245} y={29+i*20} fontSize="8" fill="var(--ink-2)">{n}</text></g>)}
        </svg>}
      </div>
      <div className={styles.note}>
        {chartType==='bar'&&'Bar chart: perbandingan antar kelas terlihat jelas. Kelas D tertinggi, C terendah. Cocok untuk pertanyaan "kelas mana paling tinggi?"'}
        {chartType==='line'&&'Line chart: menyiratkan tren/urutan. Kurang tepat di sini karena kelas bukan urutan waktu — bisa menyesatkan.'}
        {chartType==='pie'&&'Pie chart: menampilkan proporsi. Kurang tepat untuk membandingkan nilai rata-rata (semua bagian mirip). Pie lebih cocok untuk komposisi.'}
      </div>
    </>
  )
}
