import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './ui.module.css'
export function SceneGagal({ onUnlock }: DiscoverySceneProps) {
  const [tried, setTried] = useState(false)
  const search = () => { setTried(true); onUnlock() }
  return (
    <div className={styles.wrap}>
      <div className={styles.babakBadge}>BABAK 2 - MENCARI JEJAK</div>
      <p className={styles.prompt}>Misi: cari tahu apakah ada <em>berita resmi</em> tentang razia HP di sekolah Banda Aceh.</p>
      <div className={styles.callout}>Sebelum belajar teknik apapun - coba dulu dengan caramu sendiri.</div>
      {!tried ? (
        <div style={{display:'flex',flexDirection:'column',gap:10,alignItems:'center',flex:1,justifyContent:'center'}}>
          <div className={styles.searchBox} style={{maxWidth:480,width:'100%'}}>
            <input className={styles.searchInput} defaultValue="razia HP" readOnly style={{color:'#9ca3af'}}/>
            <button className={styles.searchBtn} onClick={search}>Cari</button>
          </div>
          <div style={{fontSize:13,color:'#9ca3af',fontStyle:'italic'}}>Simulasi - klik Cari untuk lihat hasilnya</div>
        </div>
      ) : (
        <div style={{display:'flex',flexDirection:'column',gap:12,flex:1}}>
          <div className={styles.noResult}>Menampilkan sekitar 2.840.000 hasil untuk "razia HP" - tidak ada yang spesifik tentang Banda Aceh baru-baru ini.</div>
          {['Razia HP siswa SMA Jakarta 2023','Tips agar HP tidak ketahuan di kelas','Sekolah ini larang HP mulai semester baru'].map((r,i) => (
            <div key={i} className={styles.searchResult}>
              <div className={styles.searchResultTitle}>{r}</div>
              <div className={styles.searchResultSub}>Tidak relevan dengan kasus Banda Aceh 2027.</div>
            </div>
          ))}
          <div className={styles.trapWarning}>
            <span className={styles.trapLabel}>MASALAH PENCARIAN BEBAS</span>
            <span className={styles.trapText}>Kata kunci terlalu umum - terlalu banyak hasil, tidak ada yang menjawab pertanyaan spesifik. Ini bukan masalah mesin pencarinya. Ini masalah cara bertanya.</span>
          </div>
        </div>
      )}
    </div>
  )
}
