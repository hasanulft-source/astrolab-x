export interface Optik { id: string; nama: string; sifat: string; pakai: string }
export const OPTIK: Optik[] = [
  { id: 'datar', nama: 'Cermin datar', sifat: 'Bayangan maya, tegak, sama besar, terbalik kiri-kanan.', pakai: 'Cermin rias, kaca spion lipat.' },
  { id: 'cekung', nama: 'Cermin cekung', sifat: 'Mengumpulkan cahaya; bayangan bisa nyata/terbalik atau maya/diperbesar.', pakai: 'Reflektor senter, antena parabola, kompor surya.' },
  { id: 'cembung', nama: 'Cermin cembung', sifat: 'Menyebarkan cahaya; bayangan maya, tegak, diperkecil, sudut pandang luas.', pakai: 'Spion kendaraan, cermin tikungan jalan.' },
  { id: 'lcembung', nama: 'Lensa cembung', sifat: 'Mengumpulkan cahaya (konvergen); bisa membentuk bayangan nyata.', pakai: 'Lup, kamera, kacamata rabun dekat.' },
  { id: 'lcekung', nama: 'Lensa cekung', sifat: 'Menyebarkan cahaya (divergen); bayangan selalu maya, tegak, diperkecil.', pakai: 'Kacamata rabun jauh.' },
]
