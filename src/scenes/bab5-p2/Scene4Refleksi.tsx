import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Dari kekacauan jutaan jenis, jadi <em>rapi dan teratur.</em></p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}><b>Klasifikasi</b> mengelompokkan makhluk hidup berdasarkan persamaan ciri. Urutannya dari luas ke spesifik: <b>Kingdom → Filum → Kelas → Ordo → Famili → Genus → Spesies</b>. Makin ke bawah makin mirip dan makin sedikit.</div>
          <div className={styles.exit}><b>Tiket keluar:</b> Tulis nama ilmiah harimau dengan benar, lalu sebutkan ia masuk kingdom apa dan satu ciri kingdom itu. (Jawab: <i>Panthera tigris</i> - Animalia - heterotrof/bergerak.)</div>
        </div>
      </div>
    </>
  )
}
