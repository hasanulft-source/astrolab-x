export interface Akibat { t: string; d: string }
export const ROTASI: Akibat[] = [
  { t: 'Siang & malam', d: 'Sisi Bumi yang menghadap Matahari mengalami siang, sisi sebaliknya malam - bergantian tiap ~24 jam.' },
  { t: 'Gerak semu Matahari', d: 'Matahari tampak terbit di timur dan tenggelam di barat, padahal Bumi-lah yang sebenarnya berputar.' },
  { t: 'Perbedaan waktu', d: 'Wilayah pada bujur berbeda mengalami waktu berbeda - itulah sebabnya Indonesia punya WIB, WITA, dan WIT.' },
]
export interface Musim { id: string; bulan: string; utara: string; selatan: string; ket: string; ax: number }
export const POS: Musim[] = [
  { id: 'jun', bulan: 'Juni', utara: 'Musim panas', selatan: 'Musim dingin', ket: 'Kutub utara condong ke Matahari - belahan utara paling lama siang dan terpanas.', ax: 0 },
  { id: 'sep', bulan: 'September', utara: 'Musim gugur', selatan: 'Musim semi', ket: 'Sumbu tegak lurus arah Matahari - siang dan malam hampir sama panjang di mana pun.', ax: 1 },
  { id: 'des', bulan: 'Desember', utara: 'Musim dingin', selatan: 'Musim panas', ket: 'Kutub selatan condong ke Matahari - itu sebabnya Australia merayakan Natal saat musim panas.', ax: 2 },
  { id: 'mar', bulan: 'Maret', utara: 'Musim semi', selatan: 'Musim gugur', ket: 'Sumbu tegak lurus arah Matahari - siang dan malam kembali seimbang.', ax: 3 },
]
