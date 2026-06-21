export interface Tip { nama: string; ket: string }
export const TIPS: Tip[] = [
  { nama: 'Pakai passphrase', ket: 'Rangkai beberapa kata jadi kalimat unik, misal "KopiPanas#Senin2026" - panjang tapi mudah diingat.' },
  { nama: 'Beda tiap akun', ket: 'Jangan pakai satu sandi untuk semua. Jika satu bocor, akun lain tetap aman.' },
  { nama: 'Jangan pernah dibagikan', ket: 'Kata sandi bersifat rahasia - jangan beri tahu siapa pun, bahkan teman dekat.' },
  { nama: 'Aktifkan verifikasi 2 langkah', ket: 'Lapisan keamanan tambahan (kode lewat SMS/aplikasi) agar akun sulit dibobol meski sandi bocor.' },
]
