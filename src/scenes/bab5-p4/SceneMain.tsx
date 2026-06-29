import { useState } from 'react'
import styles from './Scene.module.css'

const KINGDOMS = [
  {
    name:"Monera", icon:"🦠", color:"#f97316",
    ciri:["Prokariotik (tanpa membran inti)","Uniseluler","Dinding sel dari peptidoglikan","Autotrof atau heterotrof"],
    contoh:["Escherichia coli","Lactobacillus (yogurt)","Mycobacterium tuberculosis","Rhizobium (fiksasi N₂)"],
    peran:"Dekomposer, fiksasi nitrogen, fermentasi, penyebab penyakit",
  },
  {
    name:"Protista", icon:"🔬", color:"#8b5cf6",
    ciri:["Eukariotik (ada membran inti)","Uniseluler atau multiseluler sederhana","Berbagai tipe nutrisi","Hidup di air"],
    contoh:["Amoeba proteus","Paramecium caudatum","Spirogyra (alga hijau)","Plasmodium (malaria)"],
    peran:"Produsen O₂ laut (alga), parasit (Plasmodium), bagian rantai makanan",
  },
  {
    name:"Fungi", icon:"🍄", color:"#d97706",
    ciri:["Eukariotik multiseluler","Dinding sel dari kitin","Heterotrof (dekomposer/parasit)","Reproduksi via spora"],
    contoh:["Rhizopus (jamur roti)","Pleurotus ostreatus (jamur tiram)","Aspergillus","Penicillium"],
    peran:"Dekomposer utama, sumber antibiotik, fermentasi pangan",
  },
  {
    name:"Plantae", icon:"🌿", color:"#16a34a",
    ciri:["Eukariotik multiseluler","Dinding sel dari selulosa","Autotrof (fotosintesis)","Tidak bergerak aktif"],
    contoh:["Bryophyta (lumut)","Pteridophyta (paku)","Gymnospermae (pinus)","Angiospermae (padi)"],
    peran:"Produsen utama, penghasil O₂, bahan pangan dan obat",
  },
  {
    name:"Animalia", icon:"🐯", color:"#0d6b7a",
    ciri:["Eukariotik multiseluler","Tanpa dinding sel","Heterotrof (konsumen)","Bergerak aktif"],
    contoh:["Porifera (spons)","Annelida (cacing)","Arthropoda (serangga)","Vertebrata (ikan, burung, mamalia)"],
    peran:"Konsumen dalam rantai makanan, penyerbuk, pengurai",
  },
]

export default function Scene() {
  const [sel, setSel] = useState(0)
  const k = KINGDOMS[sel]
  return (
    <div className={styles.wrap}>
      <p className={styles.prompt}>5 Kingdom — pilih kingdom untuk melihat <em>ciri, contoh, dan peran ekologisnya</em>.</p>
      <div className={styles.main}>
        <div className={styles.tabs}>
          {KINGDOMS.map((kk,i)=>(
            <button key={i} className={i===sel?styles.tabActive:styles.tab}
              style={{["--kcolor"]:kk.color} as any} onClick={()=>setSel(i)}>
              <span className={styles.tabIcon}>{kk.icon}</span>
              <span className={styles.tabName}>{kk.name}</span>
            </button>
          ))}
        </div>
        <div className={styles.detail}>
          <div className={styles.header} style={{background:k.color}}>
            <span className={styles.hIcon}>{k.icon}</span>
            <span className={styles.hName}>{k.name}</span>
          </div>
          <div className={styles.grid}>
            <div className={styles.section}>
              <div className={styles.secTitle}>Ciri Utama</div>
              {k.ciri.map((c,i)=><div key={i} className={styles.secItem}>• {c}</div>)}
            </div>
            <div className={styles.section}>
              <div className={styles.secTitle}>Contoh Organisme</div>
              {k.contoh.map((c,i)=><div key={i} className={styles.secItem} style={{fontStyle:'italic'}}>• {c}</div>)}
            </div>
          </div>
          <div className={styles.peran}>
            <span className={styles.peranLabel}>Peran Ekologis:</span> {k.peran}
          </div>
        </div>
      </div>
    </div>
  )
}
