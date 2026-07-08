import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene4Email.module.css'
const PARTS = [
  {bagian:'Alamat Tujuan (To)', isi:'Email penerima yang benar', contoh:['bu.ani@sekolah.sch.id'], tip:'Pastikan alamat benar. Cc untuk tembusan, Bcc untuk penerima tersembunyi.'},
  {bagian:'Subjek (Subject)', isi:'Ringkasan isi email dalam 1 baris', contoh:['Proposal Proyek Informatika - [Namamu] Kelas VII-3'], tip:'Subjek jelas = email dibaca. Subjek kosong/tidak jelas = sering diabaikan.'},
  {bagian:'Salam Pembuka', isi:'Sapaan formal ke penerima', contoh:['Yth. Ibu Ani,','Selamat pagi, Bu.'], tip:'Formal untuk guru/atasan. Gunakan nama & gelar yang benar.'},
  {bagian:'Isi (Body)', isi:'Maksud email, singkat & jelas', contoh:['Saya [nama] dari kelas VII-3 ingin mengirimkan proposal proyek Informatika. Terlampir file proposalnya untuk Ibu review.'], tip:'Langsung ke poin. Paragraf pendek. Sebutkan lampiran jika ada.'},
  {bagian:'Penutup & Tanda Tangan', isi:'Ucapan penutup + identitas', contoh:['Terima kasih atas perhatian Ibu.','','Hormat saya,','[Nama Lengkap]','Kelas VII-3'], tip:'Selalu tutup dengan sopan + identitas lengkap agar penerima tahu siapa pengirim.'},
  {bagian:'Lampiran (Attachment)', isi:'File yang disertakan', contoh:['Proposal_Proyek_[Nama].pdf'], tip:'Cek lampiran SUDAH terpasang sebelum kirim. Beri nama file yang jelas.'},
]
export function Scene4Email({ onUnlock }: DiscoverySceneProps) {
  const [sel, setSel] = useState(0)
  const [unlocked, setUnlocked] = useState(false)
  const p = PARTS[sel]
  const pick = (i: number) => { setSel(i); if (!unlocked) { setUnlocked(true); onUnlock() } }
  return (
    <>
      <p className={styles.prompt}>Email profesional punya anatomi. <em>Klik tiap bagian — ini email nyata yang akan kamu kirim ke guru.</em></p>
      <div className={styles.main}>
        <div className={styles.emailMock}>
          {PARTS.map((part,i)=>(
            <button key={i} className={`${styles.emailPart} ${sel===i?styles.partSel:''}`} onClick={()=>pick(i)}>
              <span className={styles.partLabel}>{part.bagian}</span>
            </button>
          ))}
        </div>
        <div className={styles.detail}>
          <div className={styles.dNama}>{p.bagian}</div>
          <div className={styles.dIsi}>{p.isi}</div>
          <div className={styles.dContoh}>{p.contoh.map((line,i)=><div key={i}>{line||'\u00A0'}</div>)}</div>
          <div className={styles.dTip}><b>Tip:</b> {p.tip}</div>
        </div>
      </div>
    </>
  )
}
