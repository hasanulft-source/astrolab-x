import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './ui.module.css'
type Result = { title:string, url:string, desc:string, type:string }
const DB: Record<string,{results:Result[],hint:string}> = {
  'razia hp':                         {results:[],hint:'Terlalu umum. Coba lebih spesifik.'},
  'razia hp banda aceh':              {results:[{title:'Hasil umum',url:'web-umum.com',desc:'Tidak ditemukan berita resmi Banda Aceh.',type:'miss'}],hint:'Lebih baik! Tapi coba operator site: untuk sumber resmi.'},
  '"razia hp" banda aceh':            {results:[{title:'Frasa exact - lebih tajam',url:'',desc:'Tidak ada sumber resmi yang melapor.',type:'miss'}],hint:'Bagus! Sekarang coba batasi ke sumber resmi.'},
  '"razia hp" site:kemdikbud.go.id':  {results:[{title:'Kemdikbud.go.id - Tidak Ada Pengumuman',url:'kemdikbud.go.id',desc:'Tidak ditemukan pengumuman resmi tentang razia HP di Banda Aceh.',type:'official_miss'}],hint:'Sumber resmi pemerintah tidak mencatat kejadian ini. Bukti kuat!'},
  '"virus aplikasi" smp aceh 2027':   {results:[{title:'0 hasil terverifikasi',url:'',desc:'Tidak ada laporan virus dari media resmi.',type:'miss'}],hint:'Konsisten - tidak ada laporan resmi.'},
}
const DEFAULT = {results:[{title:'Tidak ada hasil spesifik',url:'',desc:'Query ini tidak relevan dengan kasus.',type:'miss'}],hint:'Coba kombinasi operator yang berbeda.'}
export function SceneSimulator({ onUnlock }: DiscoverySceneProps) {
  const [query, setQuery] = useState('')
  const [tried, setTried] = useState<string[]>([])
  const [current, setCurrent] = useState<typeof DEFAULT|null>(null)
  const [usedOps, setUsedOps] = useState<string[]>([])
  const search = () => {
    const q = query.trim().toLowerCase()
    if(!q) return
    const r = DB[q] ?? DEFAULT
    setCurrent(r)
    setTried(t => {
      const nt = t.includes(q)?t:[...t,q]
      if (nt.length > 2) onUnlock()
      return nt
    })
    const ops:string[] = []
    if(q.includes('"')) ops.push('"..."')
    if(q.includes('site:')) ops.push('site:')
    if(q.includes(' or ')) ops.push('OR')
    if(q.includes('-') && q.indexOf('-')>0) ops.push('-kata')
    if(/20\d\d/.test(q)) ops.push('tahun')
    setUsedOps(u => [...new Set([...u,...ops])])
  }
  return (
    <div className={styles.wrap}>
      <div className={styles.babakBadge}>SCENE 03 - SIMULATOR PENCARIAN</div>
      <p className={styles.prompt}>Gunakan operator yang dipelajari. Buktikan: <em>ada atau tidak sumber resmi tentang kasus ini?</em></p>
      <div style={{display:'flex',gap:8}}>
        <div className={styles.searchBox} style={{flex:1}}>
          <input className={styles.searchInput} placeholder='"razia hp" site:kemdikbud.go.id' value={query}
            onChange={e=>setQuery(e.target.value)} onKeyDown={e=>e.key==='Enter'&&search()}/>
          <button className={styles.searchBtn} onClick={search}>Cari</button>
        </div>
      </div>
      <div style={{display:'flex',gap:6,flexWrap:'wrap'}}>
        {['"..."','site:','-kata','OR','tahun'].map(op => (
          <span key={op} className={styles.opPill+(usedOps.includes(op)?' '+styles.opPillActive:'')}>
            {op}{usedOps.includes(op)?' v':''}
          </span>
        ))}
        <span style={{fontSize:12,color:'#9ca3af',alignSelf:'center',marginLeft:4}}>{usedOps.length}/5 operator</span>
      </div>
      {current && (
        <div style={{display:'flex',flexDirection:'column',gap:8,flex:1}}>
          {current.results.length>0 ? current.results.map((r,i)=>(
            <div key={i} className={styles.searchResult} style={{borderLeft:'3px solid '+(r.type==='official_miss'?'#dc2626':'#e2e6ea')}}>
              <div className={styles.searchResultTitle}>{r.title}</div>
              {r.url&&<div className={styles.searchResultUrl}>{r.url}</div>}
              <div className={styles.searchResultSub}>{r.desc}</div>
            </div>
          )) : <div className={styles.noResult}>Tidak ada hasil yang relevan.</div>}
          {current.hint&&<div className={styles.callout} style={{padding:'10px 14px',fontSize:14}}>{current.hint}</div>}
        </div>
      )}
      {tried.length>2&&(
        <div className={styles.caseFooter}>
          <div className={styles.caseFooterStatus}>KECURIGAAN PERTAMA TERBENTUK</div>
          <div className={styles.caseFooterText}>Setelah {tried.length} query - tidak ada sumber resmi yang mengkonfirmasi. Siapa yang pertama menyebarkan pesan ini?</div>
        </div>
      )}
    </div>
  )
}
