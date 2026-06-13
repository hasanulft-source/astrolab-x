import { ParticleViewer } from '../../components/ParticleViewer'
import styles from './ui.module.css'

export function Scene1Hook() {
  return (
    <>
      <p className={styles.prompt}>Gas LPG bisa dimampatkan ke tabung kecil, tapi air hampir tidak bisa. <em>Kenapa?</em></p>
      <div className={styles.hookRow}>
        <div className={styles.viz}><ParticleViewer state="gas" size="md" /></div>
        <div className={styles.hookQ}>
          Jawabannya ada di <b>model partikel</b>. Pada gas, partikel berjauhan dengan banyak <b>ruang kosong</b> — bisa didorong saling mendekat. Pada cairan, partikel sudah berdekatan, nyaris tak ada ruang untuk dimampatkan.
        </div>
      </div>
    </>
  )
}
