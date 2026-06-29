import { useState } from 'react'
import styles from './Scene5Planet.module.css'

const PLANETS = [
  { name:"Merkurius", au:0.39, period:"88 hari", size:0.38, moons:0, type:"Dalam", color:"#9ca3af", fact:"Tidak punya atmosfer — suhu -173°C malam, +427°C siang!" },
  { name:"Venus",     au:0.72, period:"225 hari", size:0.95, moons:0, type:"Dalam", color:"#f59e0b", fact:"Lebih panas dari Merkurius! Atmosfer CO₂ tebal = efek rumah kaca ekstrem (465°C)." },
  { name:"Bumi",      au:1.00, period:"365 hari", size:1.00, moons:1, type:"Dalam", color:"#3b82f6", fact:"Satu-satunya planet dengan air cair di permukaan dan kehidupan yang diketahui." },
  { name:"Mars",      au:1.52, period:"687 hari", size:0.53, moons:2, type:"Dalam", color:"#ef4444", fact:"Gunung Olympus Mons = gunung tertinggi di tata surya (21,9 km)!" },
  { name:"Jupiter",   au:5.20, period:"12 tahun", size:11.2, moons:95, type:"Luar", color:"#d97706", fact:"2,5× massa semua planet lain digabung. Bintik Merah Besar = badai yang sudah berlangsung 300+ tahun!" },
  { name:"Saturnus",  au:9.58, period:"29 tahun", size:9.45, moons:146, type:"Luar", color:"#fde68a", fact:"Kerapatan lebih rendah dari air — bisa mengapung di lautan yang cukup besar!" },
  { name:"Uranus",    au:19.2, period:"84 tahun", size:4.01, moons:28, type:"Luar", color:"#7dd3fc", fact:"Berotasi miring 98° — hampir berbaring! Musim berlangsung 21 tahun." },
  { name:"Neptunus",  au:30.1, period:"165 tahun", size:3.88, moons:16, type:"Luar", color:"#1d4ed8", fact:"Angin tercepat di tata surya: 2.100 km/jam. Perlu 165 tahun untuk satu revolusi!" },
]

export function Scene5Planet() {
  const [sel, setSel] = useState(2)  // Bumi default
  const p = PLANETS[sel]

  return (
    <>
      <p className={styles.prompt}>Bandingkan <em>8 planet</em> — pilih planet untuk melihat data lengkapnya.</p>
      <div className={styles.main}>
        <div className={styles.orbit}>
          {PLANETS.map((pl, i) => {
            const r = 20 + i * 13
            const isSelected = i === sel
            return (
              <button key={i} className={`${styles.planetBtn} ${isSelected ? styles.planetBtnActive : ''}`}
                style={{ width: Math.max(12, pl.size*4)+"px", height: Math.max(12, pl.size*4)+"px", background: pl.color, border: isSelected ? "3px solid white" : "2px solid transparent" }}
                onClick={() => setSel(i)}
                title={pl.name}/>
            )
          })}
        </div>
        <div className={styles.selectorRow}>
          {PLANETS.map((pl,i) => (
            <button key={i} className={i===sel?styles.selActive:styles.sel}
              style={{background: i===sel ? pl.color : undefined}}
              onClick={() => setSel(i)}>
              {pl.name}
            </button>
          ))}
        </div>
        <div className={styles.detail}>
          <div className={styles.dHeader} style={{background: p.color+"22", borderColor: p.color}}>
            <div className={styles.dPlanet} style={{background: p.color}}/>
            <div className={styles.dName}>{p.name}</div>
            <div className={styles.dType}>{p.type}</div>
          </div>
          <div className={styles.dGrid}>
            {[["Jarak dari Matahari", p.au+" AU"], ["Periode Revolusi", p.period],
              ["Ukuran vs Bumi", p.size+"× Bumi"], ["Jumlah Bulan", p.moons+" bulan"]
            ].map(([k,v],i) => (
              <div key={i} className={styles.dItem}>
                <span className={styles.dKey}>{k}</span>
                <span className={styles.dVal}>{v}</span>
              </div>
            ))}
          </div>
          <div className={styles.dFact}>💡 {p.fact}</div>
          {sel === 1 && (
            <div className={styles.venus}>
              ⚠️ Venus vs Merkurius: Venus lebih jauh dari Matahari tapi lebih panas karena atmosfer CO₂ tebalnya menjebak panas (efek rumah kaca ekstrem). Merkurius tidak punya atmosfer — panas langsung lepas ke angkasa.
            </div>
          )}
        </div>
      </div>
    </>
  )
}
