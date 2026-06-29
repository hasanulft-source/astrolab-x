import { useState } from 'react'
import styles from './Scene.module.css'

const FENOMENA = [
  { f:"Putri malu menutup daun saat disentuh.", ciri:"Iritabilitas", mekanisme:"Sel penjaga mengalami perubahan tekanan turgor — air keluar dari sel, daun melipat dalam 0,1 detik." },
  { f:"Kecambah tumbuh membelok ke arah cahaya matahari.", ciri:"Iritabilitas + Tumbuh", mekanisme:"Hormon auksin bergerak ke sisi yang lebih gelap → sisi gelap tumbuh lebih cepat → batang melengkung ke cahaya (fototropisme)." },
  { f:"Bunglon mengubah warna kulit jadi cokelat di atas kayu.", ciri:"Iritabilitas", mekanisme:"Sel kromatofora di kulit berkontraksi/melebar sesuai rangsang saraf, mengubah distribusi pigmen." },
  { f:"Ikan di sungai Krueng Aceh menggerakkan insang terus-menerus.", ciri:"Bernapas", mekanisme:"Insang mengambil O₂ terlarut dari air. Air masuk melalui mulut, dilewatkan insang, O₂ berdifusi ke darah." },
  { f:"Pohon pinus di pegunungan terus bertambah tinggi setiap tahun.", ciri:"Tumbuh", mekanisme:"Meristem apikal (jaringan aktif membelah) di ujung batang terus menghasilkan sel baru secara permanen." },
  { f:"Pohon pisang menghasilkan tunas baru di samping batang utama.", ciri:"Reproduksi", mekanisme:"Reproduksi vegetatif aseksual — anakan tumbuh dari batang bawah tanah (rimpang) tanpa perlu biji." },
  { f:"Kucing bersin setelah menghirup debu.", ciri:"Iritabilitas + Ekskresi", mekanisme:"Reseptor di hidung mendeteksi partikel asing, sistem saraf memicu reflex bersin untuk mengeluarkan partikel tersebut." },
  { f:"Jamur tumbuh di batang kayu yang sudah lapuk.", ciri:"Nutrisi + Tumbuh", mekanisme:"Jamur mengeluarkan enzim pencerna selulosa/lignin ke kayu (pencernaan ekstraseluler), lalu menyerap hasilnya." },
  { f:"Manusia berkeringat saat cuaca panas.", ciri:"Ekskresi + Iritabilitas", mekanisme:"Hipotalamus deteksi suhu naik → kirim sinyal ke kelenjar keringat → keringat menguap → suhu tubuh turun (termoregulasi)." },
]

export default function Scene() {
  const [idx, setIdx] = useState<number|null>(null)
  const [showMek, setShowMek] = useState(false)

  return (
    <div className={styles.wrap}>
      <p className={styles.prompt}>Pilih fenomena — temukan <em>ciri MH</em> yang ditunjukkan dan jelaskan mekanisme biologisnya.</p>
      <div className={styles.main}>
        <div className={styles.list}>
          {FENOMENA.map((f,i) => (
            <button key={i} className={i===idx?styles.itemActive:styles.item}
              onClick={()=>{setIdx(i);setShowMek(false)}}>
              <span className={styles.num}>{i+1}</span>
              <span className={styles.text}>{f.f}</span>
            </button>
          ))}
        </div>
        {idx!==null ? (
          <div className={styles.detail}>
            <div className={styles.fenTitle}>{FENOMENA[idx].f}</div>
            <div className={styles.ciriBox}>
              <span className={styles.ciriLabel}>Ciri MH:</span>
              <span className={styles.ciriVal}>{FENOMENA[idx].ciri}</span>
            </div>
            <button className={styles.mekBtn} onClick={()=>setShowMek(true)}>
              {showMek ? "✓ Mekanisme ditampilkan" : "Tampilkan mekanisme →"}
            </button>
            {showMek && (
              <div className={styles.mek}>{FENOMENA[idx].mekanisme}</div>
            )}
          </div>
        ) : (
          <div className={styles.placeholder}>← Pilih fenomena untuk dianalisis</div>
        )}
      </div>
    </div>
  )
}
