import { useState } from 'react'
import styles from './Scene.module.css'

const TAKSON = [
  {level:"Kingdom",analogi:"Negara",contoh:"Animalia",luas:"Semua hewan"},
  {level:"Filum",analogi:"Provinsi",contoh:"Chordata",luas:"Hewan bertulang belakang"},
  {level:"Kelas",analogi:"Kabupaten",contoh:"Mammalia",luas:"Hewan menyusui"},
  {level:"Ordo",analogi:"Kecamatan",contoh:"Carnivora",luas:"Karnivora"},
  {level:"Famili",analogi:"Kelurahan",contoh:"Felidae",luas:"Kucing-kucingan"},
  {level:"Genus",analogi:"RW",contoh:"Panthera",luas:"Harimau, singa, macan"},
  {level:"Spesies",analogi:"Nomor Rumah",contoh:"tigris",luas:"Harimau saja"},
]

export default function Scene() {
  const [revealed, setRevealed] = useState(0)  // berapa level terungkap
  const [showBinom, setShowBinom] = useState(false)

  return (
    <div className={styles.wrap}>
      <p className={styles.prompt}>Tangga Taksonomi — seperti <em>alamat rumah</em> yang semakin spesifik.</p>
      <div className={styles.main}>
        <div className={styles.ladder}>
          {TAKSON.map((t,i) => (
            <div key={i} className={`${styles.rung} ${i < revealed ? styles.rungVisible : styles.rungHidden}`}
              style={{width:`${100 - i*10}%`, opacity: i < revealed ? 1 : 0.15}}>
              <div className={styles.rungLevel}>{t.level}</div>
              <div className={styles.rungContent}>
                <span className={styles.rungContoh}>{t.contoh}</span>
                <span className={styles.rungLuas}>{t.luas}</span>
                <span className={styles.rungAnalogi}>≈ {t.analogi}</span>
              </div>
            </div>
          ))}
          <div className={styles.btnRow}>
            {revealed < 7 ? (
              <button className={styles.btn} onClick={() => setRevealed(r => r+1)}>
                {revealed === 0 ? "Mulai dari Kingdom →" : `Lanjut ke ${TAKSON[revealed]?.level} →`}
              </button>
            ) : (
              <button className={styles.btn} onClick={() => setShowBinom(true)}>
                Lihat nama ilmiah lengkap →
              </button>
            )}
          </div>
        </div>

        {showBinom && (
          <div className={styles.binom}>
            <div className={styles.binomTitle}>Binomial Nomenclature</div>
            <div className={styles.binomEx}>
              <span className={styles.genus}>Panthera</span>{" "}
              <span className={styles.species}>tigris</span>
            </div>
            <div className={styles.binomRule}>
              Genus: huruf kapital, cetak miring<br/>
              Spesies: huruf kecil, cetak miring<br/>
              Di tulis tangan: digarisbawahi
            </div>
            <div className={styles.binomMore}>
              <div>Manusia: <em>Homo sapiens</em></div>
              <div>Padi: <em>Oryza sativa</em></div>
              <div>Harimau sumatra: <em>Panthera tigris sumatrae</em></div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
