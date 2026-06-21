import type { Scene } from './scenes/types'
import { bab1p1Scenes } from './scenes/bab1-p1'
import { bab1p3Scenes } from './scenes/bab1-p3'
import { bab1p4Scenes } from './scenes/bab1-p4'
import { bab1p5Scenes } from './scenes/bab1-p5'
import { bab1p7Scenes } from './scenes/bab1-p7'
import { bab2p1Scenes } from './scenes/bab2-p1'
import { bab2p2Scenes } from './scenes/bab2-p2'
import { bab2p3Scenes } from './scenes/bab2-p3'
import { bab2p4Scenes } from './scenes/bab2-p4'
import { bab2p5Scenes } from './scenes/bab2-p5'
import { bab2p7Scenes } from './scenes/bab2-p7'
import { bab3p1Scenes } from './scenes/bab3-p1'
import { bab3p3Scenes } from './scenes/bab3-p3'
import { bab3p4Scenes } from './scenes/bab3-p4'
import { bab3p5Scenes } from './scenes/bab3-p5'
import { bab4p1Scenes } from './scenes/bab4-p1'
import { bab4p2Scenes } from './scenes/bab4-p2'
import { bab4p3Scenes } from './scenes/bab4-p3'
import { bab5p4Scenes } from './scenes/bab5-p4'
import { bab5p3Scenes } from './scenes/bab5-p3'
import { bab5p2Scenes } from './scenes/bab5-p2'
import { bab5p1Scenes } from './scenes/bab5-p1'
import { bab6p1Scenes } from './scenes/bab6-p1'
import { bab6p2Scenes } from './scenes/bab6-p2'
import { bab6p3Scenes } from './scenes/bab6-p3'
import { bab6p4Scenes } from './scenes/bab6-p4'
import { bab7p2Scenes } from './scenes/bab7-p2'
import { bab7p3Scenes } from './scenes/bab7-p3'
import { bab7p4Scenes } from './scenes/bab7-p4'
import { bab7p1Scenes } from './scenes/bab7-p1'
import { k8bab1p1Scenes } from './scenes/k8-bab1-p1'
import { k8bab1p2Scenes } from './scenes/k8-bab1-p2'
import { k8bab1p3Scenes } from './scenes/k8-bab1-p3'
import { k8bab1p4Scenes } from './scenes/k8-bab1-p4'
import { k8bab2p1Scenes } from './scenes/k8-bab2-p1'
import { k8bab2p2Scenes } from './scenes/k8-bab2-p2'
import { k8bab2p3Scenes } from './scenes/k8-bab2-p3'
import { k8bab2p4Scenes } from './scenes/k8-bab2-p4'
import { k8bab3p1Scenes } from './scenes/k8-bab3-p1'
import { k8bab3p2Scenes } from './scenes/k8-bab3-p2'
import { k8bab3p3Scenes } from './scenes/k8-bab3-p3'
import { k8bab3p4Scenes } from './scenes/k8-bab3-p4'
import { k8bab4p1Scenes } from './scenes/k8-bab4-p1'
import { k8bab4p2Scenes } from './scenes/k8-bab4-p2'
import { k8bab4p3Scenes } from './scenes/k8-bab4-p3'
import { k8bab4p4Scenes } from './scenes/k8-bab4-p4'
import { k8bab5p1Scenes } from './scenes/k8-bab5-p1'
import { k8bab5p2Scenes } from './scenes/k8-bab5-p2'
import { k8bab5p3Scenes } from './scenes/k8-bab5-p3'
import { k8bab5p4Scenes } from './scenes/k8-bab5-p4'
import { k8bab6p1Scenes } from './scenes/k8-bab6-p1'
import { k8bab6p2Scenes } from './scenes/k8-bab6-p2'
import { k8bab6p3Scenes } from './scenes/k8-bab6-p3'
import { k8bab6p4Scenes } from './scenes/k8-bab6-p4'
import { k8bab7p1Scenes } from './scenes/k8-bab7-p1'
import { k8bab7p2Scenes } from './scenes/k8-bab7-p2'
import { k8bab7p3Scenes } from './scenes/k8-bab7-p3'
import { k8bab7p4Scenes } from './scenes/k8-bab7-p4'
import { infbab1p1Scenes } from './scenes/inf-bab1-p1'
import { infbab1p2Scenes } from './scenes/inf-bab1-p2'
import { infbab1p3Scenes } from './scenes/inf-bab1-p3'
import { infbab1p4Scenes } from './scenes/inf-bab1-p4'
import { infbab2p1Scenes } from './scenes/inf-bab2-p1'
import { infbab2p2Scenes } from './scenes/inf-bab2-p2'
import { infbab2p3Scenes } from './scenes/inf-bab2-p3'
import { infbab2p4Scenes } from './scenes/inf-bab2-p4'
import { infbab3p1Scenes } from './scenes/inf-bab3-p1'
import { infbab3p2Scenes } from './scenes/inf-bab3-p2'
import { infbab3p3Scenes } from './scenes/inf-bab3-p3'
import { infbab3p4Scenes } from './scenes/inf-bab3-p4'
import { infbab4p1Scenes } from './scenes/inf-bab4-p1'
import { infbab4p2Scenes } from './scenes/inf-bab4-p2'
import { infbab4p3Scenes } from './scenes/inf-bab4-p3'
import { infbab4p4Scenes } from './scenes/inf-bab4-p4'
import { infbab5p1Scenes } from './scenes/inf-bab5-p1'
import { infbab5p2Scenes } from './scenes/inf-bab5-p2'
import { infbab5p3Scenes } from './scenes/inf-bab5-p3'
import { infbab5p4Scenes } from './scenes/inf-bab5-p4'

export interface SimEntry {
  id: string; mapel: string; kelas: string
  babId: string; babTitle: string; babOrder: number
  pertemuan: number; judul: string; scenes: Scene[]; updatedAt: string
}

const BAB1 = 'BAB I · Hakikat Ilmu Sains & Metode Ilmiah'
const BAB2 = 'BAB II · Wujud Zat & Perubahannya'
const BAB3 = 'BAB III · Suhu, Kalor & Pemuaian'
const BAB4 = 'BAB IV · Gerak & Gaya'
const BAB5 = 'BAB V · Klasifikasi Makhluk Hidup'
const BAB6 = 'BAB VI · Ekologi'
const BAB7 = 'BAB VII · Bumi & Tata Surya'
const K8BAB1 = 'BAB I · Sistem Pencernaan & Peredaran Darah'
const K8BAB2 = 'BAB II · Sistem Pernapasan & Ekskresi'
const K8BAB3 = 'BAB III · Usaha, Energi & Pesawat Sederhana'
const K8BAB4 = 'BAB IV · Tekanan pada Zat'
const K8BAB5 = 'BAB V · Gelombang & Cahaya'
const K8BAB6 = 'BAB VI · Pemisahan Campuran'
const K8BAB7 = 'BAB VII · Tanah bagi Kehidupan'
const INFBAB1 = 'BAB 1 · Berpikir Komputasional & Algoritma'
const INFBAB2 = 'BAB 2 · Analisis Data'
const INFBAB3 = 'BAB 3 · Literasi Digital'
const INFBAB4 = 'BAB 4 · Etika & Privasi Digital'
const INFBAB5 = 'BAB 5 · Sistem Komputer & Jaringan'

export const SIMS: SimEntry[] = [
  { id:'ipa-vii-bab1-p1', mapel:'IPA', kelas:'VII', babId:'bab1', babTitle:BAB1, babOrder:1, pertemuan:1, judul:'Apa itu Sains? — Konstelasi cabang IPA',            scenes:bab1p1Scenes, updatedAt:'2026-06-04' },
  { id:'ipa-vii-bab1-p3', mapel:'IPA', kelas:'VII', babId:'bab1', babTitle:BAB1, babOrder:1, pertemuan:3, judul:'Mengenal Alat Laboratorium IPA',                        scenes:bab1p3Scenes, updatedAt:'2026-06-06' },
  { id:'ipa-vii-bab1-p4', mapel:'IPA', kelas:'VII', babId:'bab1', babTitle:BAB1, babOrder:1, pertemuan:4, judul:'Keselamatan Laboratorium (K3)',                         scenes:bab1p4Scenes, updatedAt:'2026-06-07' },
  { id:'ipa-vii-bab1-p5', mapel:'IPA', kelas:'VII', babId:'bab1', babTitle:BAB1, babOrder:1, pertemuan:5, judul:'Merancang Percobaan — Telur mengapung & variabel', scenes:bab1p5Scenes, updatedAt:'2026-06-05' },
  { id:'ipa-vii-bab1-p7', mapel:'IPA', kelas:'VII', babId:'bab1', babTitle:BAB1, babOrder:1, pertemuan:7, judul:'Pengukuran — Baca skala, presisi & akurasi',       scenes:bab1p7Scenes, updatedAt:'2026-06-08' },
  { id:'ipa-vii-bab2-p1', mapel:'IPA', kelas:'VII', babId:'bab2', babTitle:BAB2, babOrder:2, pertemuan:1, judul:'Wujud Zat & Model Partikel',                            scenes:bab2p1Scenes, updatedAt:'2026-06-01' },
  { id:'ipa-vii-bab2-p2', mapel:'IPA', kelas:'VII', babId:'bab2', babTitle:BAB2, babOrder:2, pertemuan:2, judul:'Sifat Fisik & Kemampatan Zat',                          scenes:bab2p2Scenes, updatedAt:'2026-06-09' },
  { id:'ipa-vii-bab2-p3', mapel:'IPA', kelas:'VII', babId:'bab2', babTitle:BAB2, babOrder:2, pertemuan:3, judul:'Perubahan Wujud Zat — 6 perubahan & kalor',        scenes:bab2p3Scenes, updatedAt:'2026-06-10' },
  { id:'ipa-vii-bab2-p4', mapel:'IPA', kelas:'VII', babId:'bab2', babTitle:BAB2, babOrder:2, pertemuan:4, judul:'Grafik Pemanasan — plateau & titik didih',         scenes:bab2p4Scenes, updatedAt:'2026-06-11' },
  { id:'ipa-vii-bab2-p5', mapel:'IPA', kelas:'VII', babId:'bab2', babTitle:BAB2, babOrder:2, pertemuan:5, judul:'Perubahan Fisika & Kimia — 4 tanda & klasifikasi',  scenes:bab2p5Scenes, updatedAt:'2026-06-12' },
  { id:'ipa-vii-bab2-p7', mapel:'IPA', kelas:'VII', babId:'bab2', babTitle:BAB2, babOrder:2, pertemuan:7, judul:'Massa Jenis — ρ=m/V, apung & tenggelam',       scenes:bab2p7Scenes, updatedAt:'2026-06-13' },
  { id:'ipa-vii-bab3-p1', mapel:'IPA', kelas:'VII', babId:'bab3', babTitle:BAB3, babOrder:3, pertemuan:1, judul:'Suhu & Skala — Celsius, Fahrenheit, Kelvin, Reamur', scenes:bab3p1Scenes, updatedAt:'2026-06-14' },
  { id:'ipa-vii-bab3-p3', mapel:'IPA', kelas:'VII', babId:'bab3', babTitle:BAB3, babOrder:3, pertemuan:3, judul:'Perpindahan Kalor — konduksi, konveksi, radiasi',   scenes:bab3p3Scenes, updatedAt:'2026-06-15' },
  { id:'ipa-vii-bab3-p4', mapel:'IPA', kelas:'VII', babId:'bab3', babTitle:BAB3, babOrder:3, pertemuan:4, judul:'Kalor — Q=mcΔT & kalor jenis',                 scenes:bab3p4Scenes, updatedAt:'2026-06-16' },
  { id:'ipa-vii-bab3-p5', mapel:'IPA', kelas:'VII', babId:'bab3', babTitle:BAB3, babOrder:3, pertemuan:5, judul:'Pemuaian — padat/cair/gas & ΔL=L₀αΔT', scenes:bab3p5Scenes, updatedAt:'2026-06-17' },
  { id:'ipa-vii-bab4-p1', mapel:'IPA', kelas:'VII', babId:'bab4', babTitle:BAB4, babOrder:4, pertemuan:1, judul:'Jarak & Perpindahan — skalar vs vektor',            scenes:bab4p1Scenes, updatedAt:'2026-06-18' },
  { id:'ipa-vii-bab4-p2', mapel:'IPA', kelas:'VII', babId:'bab4', babTitle:BAB4, babOrder:4, pertemuan:2, judul:'GLB & Grafik s-t — kecepatan dari kemiringan',      scenes:bab4p2Scenes, updatedAt:'2026-06-19' },
  { id:'ipa-vii-bab4-p3', mapel:'IPA', kelas:'VII', babId:'bab4', babTitle:BAB4, babOrder:4, pertemuan:3, judul:'GLBB & Grafik v-t — percepatan, luas & persamaan',   scenes:bab4p3Scenes, updatedAt:'2026-06-20' },
  { id:'ipa-vii-bab5-p1', mapel:'IPA', kelas:'VII', babId:'bab5', babTitle:BAB5, babOrder:5, pertemuan:1, judul:'Ciri-Ciri Makhluk Hidup — hidup atau benda mati?', scenes:bab5p1Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-vii-bab5-p2', mapel:'IPA', kelas:'VII', babId:'bab5', babTitle:BAB5, babOrder:5, pertemuan:3, judul:'Klasifikasi & Takson — mengelompokkan makhluk hidup', scenes:bab5p2Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-vii-bab5-p3', mapel:'IPA', kelas:'VII', babId:'bab5', babTitle:BAB5, babOrder:5, pertemuan:5, judul:'Jelajah 5 Kingdom — Monera hingga Animalia', scenes:bab5p3Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-vii-bab5-p4', mapel:'IPA', kelas:'VII', babId:'bab5', babTitle:BAB5, babOrder:5, pertemuan:7, judul:'Kunci Dikotomi — identifikasi makhluk hidup', scenes:bab5p4Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-vii-bab6-p1', mapel:'IPA', kelas:'VII', babId:'bab6', babTitle:BAB6, babOrder:6, pertemuan:1, judul:'Komponen & Organisasi Ekosistem', scenes:bab6p1Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-vii-bab6-p2', mapel:'IPA', kelas:'VII', babId:'bab6', babTitle:BAB6, babOrder:6, pertemuan:3, judul:'Interaksi & Simbiosis', scenes:bab6p2Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-vii-bab6-p3', mapel:'IPA', kelas:'VII', babId:'bab6', babTitle:BAB6, babOrder:6, pertemuan:4, judul:'Rantai & Jaring-Jaring Makanan', scenes:bab6p3Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-vii-bab6-p4', mapel:'IPA', kelas:'VII', babId:'bab6', babTitle:BAB6, babOrder:6, pertemuan:5, judul:'Aliran Energi & Piramida Ekologi', scenes:bab6p4Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-vii-bab7-p1', mapel:'IPA', kelas:'VII', babId:'bab7', babTitle:BAB7, babOrder:7, pertemuan:1, judul:'Sistem Tata Surya — Matahari & Planet', scenes:bab7p1Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-vii-bab7-p2', mapel:'IPA', kelas:'VII', babId:'bab7', babTitle:BAB7, babOrder:7, pertemuan:3, judul:'Rotasi & Revolusi Bumi', scenes:bab7p2Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-vii-bab7-p3', mapel:'IPA', kelas:'VII', babId:'bab7', babTitle:BAB7, babOrder:7, pertemuan:5, judul:'Fase Bulan & Gerhana', scenes:bab7p3Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-vii-bab7-p4', mapel:'IPA', kelas:'VII', babId:'bab7', babTitle:BAB7, babOrder:7, pertemuan:7, judul:'Efek Rumah Kaca & Pemanasan Global', scenes:bab7p4Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-viii-bab1-p1', mapel:'IPA', kelas:'VIII', babId:'k8bab1', babTitle:K8BAB1, babOrder:1, pertemuan:1, judul:'Nutrisi & Uji Makanan', scenes:k8bab1p1Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-viii-bab1-p2', mapel:'IPA', kelas:'VIII', babId:'k8bab1', babTitle:K8BAB1, babOrder:1, pertemuan:3, judul:'Organ Pencernaan', scenes:k8bab1p2Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-viii-bab1-p3', mapel:'IPA', kelas:'VIII', babId:'k8bab1', babTitle:K8BAB1, babOrder:1, pertemuan:5, judul:'Darah & Jantung', scenes:k8bab1p3Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-viii-bab1-p4', mapel:'IPA', kelas:'VIII', babId:'k8bab1', babTitle:K8BAB1, babOrder:1, pertemuan:6, judul:'Peredaran Darah', scenes:k8bab1p4Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-viii-bab2-p1', mapel:'IPA', kelas:'VIII', babId:'k8bab2', babTitle:K8BAB2, babOrder:2, pertemuan:1, judul:'Organ Pernapasan', scenes:k8bab2p1Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-viii-bab2-p2', mapel:'IPA', kelas:'VIII', babId:'k8bab2', babTitle:K8BAB2, babOrder:2, pertemuan:2, judul:'Mekanisme Pernapasan', scenes:k8bab2p2Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-viii-bab2-p3', mapel:'IPA', kelas:'VIII', babId:'k8bab2', babTitle:K8BAB2, babOrder:2, pertemuan:4, judul:'Organ Ekskresi', scenes:k8bab2p3Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-viii-bab2-p4', mapel:'IPA', kelas:'VIII', babId:'k8bab2', babTitle:K8BAB2, babOrder:2, pertemuan:5, judul:'Pembentukan Urin', scenes:k8bab2p4Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-viii-bab3-p1', mapel:'IPA', kelas:'VIII', babId:'k8bab3', babTitle:K8BAB3, babOrder:3, pertemuan:1, judul:'Konsep Usaha', scenes:k8bab3p1Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-viii-bab3-p2', mapel:'IPA', kelas:'VIII', babId:'k8bab3', babTitle:K8BAB3, babOrder:3, pertemuan:2, judul:'Energi & Hukum Kekekalan', scenes:k8bab3p2Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-viii-bab3-p3', mapel:'IPA', kelas:'VIII', babId:'k8bab3', babTitle:K8BAB3, babOrder:3, pertemuan:4, judul:'Jenis Pesawat Sederhana', scenes:k8bab3p3Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-viii-bab3-p4', mapel:'IPA', kelas:'VIII', babId:'k8bab3', babTitle:K8BAB3, babOrder:3, pertemuan:5, judul:'Keuntungan Mekanik', scenes:k8bab3p4Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-viii-bab4-p1', mapel:'IPA', kelas:'VIII', babId:'k8bab4', babTitle:K8BAB4, babOrder:4, pertemuan:1, judul:'Tekanan Zat Padat', scenes:k8bab4p1Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-viii-bab4-p2', mapel:'IPA', kelas:'VIII', babId:'k8bab4', babTitle:K8BAB4, babOrder:4, pertemuan:2, judul:'Tekanan Hidrostatis', scenes:k8bab4p2Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-viii-bab4-p3', mapel:'IPA', kelas:'VIII', babId:'k8bab4', babTitle:K8BAB4, babOrder:4, pertemuan:3, judul:'Hukum Pascal', scenes:k8bab4p3Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-viii-bab4-p4', mapel:'IPA', kelas:'VIII', babId:'k8bab4', babTitle:K8BAB4, babOrder:4, pertemuan:4, judul:'Hukum Archimedes', scenes:k8bab4p4Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-viii-bab5-p1', mapel:'IPA', kelas:'VIII', babId:'k8bab5', babTitle:K8BAB5, babOrder:5, pertemuan:1, judul:'Getaran & Gelombang', scenes:k8bab5p1Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-viii-bab5-p2', mapel:'IPA', kelas:'VIII', babId:'k8bab5', babTitle:K8BAB5, babOrder:5, pertemuan:2, judul:'Gelombang Bunyi', scenes:k8bab5p2Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-viii-bab5-p3', mapel:'IPA', kelas:'VIII', babId:'k8bab5', babTitle:K8BAB5, babOrder:5, pertemuan:3, judul:'Pemantulan & Pembiasan', scenes:k8bab5p3Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-viii-bab5-p4', mapel:'IPA', kelas:'VIII', babId:'k8bab5', babTitle:K8BAB5, babOrder:5, pertemuan:4, judul:'Cermin & Lensa', scenes:k8bab5p4Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-viii-bab6-p1', mapel:'IPA', kelas:'VIII', babId:'k8bab6', babTitle:K8BAB6, babOrder:6, pertemuan:1, judul:'Campuran Homogen & Heterogen', scenes:k8bab6p1Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-viii-bab6-p2', mapel:'IPA', kelas:'VIII', babId:'k8bab6', babTitle:K8BAB6, babOrder:6, pertemuan:2, judul:'Filtrasi & Distilasi', scenes:k8bab6p2Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-viii-bab6-p3', mapel:'IPA', kelas:'VIII', babId:'k8bab6', babTitle:K8BAB6, babOrder:6, pertemuan:3, judul:'Evaporasi, Kristalisasi & Sublimasi', scenes:k8bab6p3Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-viii-bab6-p4', mapel:'IPA', kelas:'VIII', babId:'k8bab6', babTitle:K8BAB6, babOrder:6, pertemuan:4, judul:'Kromatografi & Sentrifugasi', scenes:k8bab6p4Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-viii-bab7-p1', mapel:'IPA', kelas:'VIII', babId:'k8bab7', babTitle:K8BAB7, babOrder:7, pertemuan:1, judul:'Komponen Tanah', scenes:k8bab7p1Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-viii-bab7-p2', mapel:'IPA', kelas:'VIII', babId:'k8bab7', babTitle:K8BAB7, babOrder:7, pertemuan:2, judul:'Profil & Lapisan Tanah', scenes:k8bab7p2Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-viii-bab7-p3', mapel:'IPA', kelas:'VIII', babId:'k8bab7', babTitle:K8BAB7, babOrder:7, pertemuan:3, judul:'Tekstur & pH Tanah', scenes:k8bab7p3Scenes, updatedAt:'2026-06-21' },
  { id:'ipa-viii-bab7-p4', mapel:'IPA', kelas:'VIII', babId:'k8bab7', babTitle:K8BAB7, babOrder:7, pertemuan:4, judul:'Degradasi & Konservasi Tanah', scenes:k8bab7p4Scenes, updatedAt:'2026-06-21' },
  { id:'inf-vii-bab1-p1', mapel:'Informatika', kelas:'VII', babId:'infbab1', babTitle:INFBAB1, babOrder:1, pertemuan:1, judul:'4 Pondasi Berpikir Komputasional', scenes:infbab1p1Scenes, updatedAt:'2026-06-21' },
  { id:'inf-vii-bab1-p2', mapel:'Informatika', kelas:'VII', babId:'infbab1', babTitle:INFBAB1, babOrder:1, pertemuan:2, judul:'Dekomposisi & Pengenalan Pola', scenes:infbab1p2Scenes, updatedAt:'2026-06-21' },
  { id:'inf-vii-bab1-p3', mapel:'Informatika', kelas:'VII', babId:'infbab1', babTitle:INFBAB1, babOrder:1, pertemuan:3, judul:'Algoritma & Pseudocode', scenes:infbab1p3Scenes, updatedAt:'2026-06-21' },
  { id:'inf-vii-bab1-p4', mapel:'Informatika', kelas:'VII', babId:'infbab1', babTitle:INFBAB1, babOrder:1, pertemuan:4, judul:'Pemrograman Blok (Scratch)', scenes:infbab1p4Scenes, updatedAt:'2026-06-21' },
  { id:'inf-vii-bab2-p1', mapel:'Informatika', kelas:'VII', babId:'infbab2', babTitle:INFBAB2, babOrder:2, pertemuan:1, judul:'Data & Informasi', scenes:infbab2p1Scenes, updatedAt:'2026-06-21' },
  { id:'inf-vii-bab2-p2', mapel:'Informatika', kelas:'VII', babId:'infbab2', babTitle:INFBAB2, babOrder:2, pertemuan:2, judul:'Spreadsheet & Formula Dasar', scenes:infbab2p2Scenes, updatedAt:'2026-06-21' },
  { id:'inf-vii-bab2-p3', mapel:'Informatika', kelas:'VII', babId:'infbab2', babTitle:INFBAB2, babOrder:2, pertemuan:6, judul:'Mengurutkan & Menyaring Data', scenes:infbab2p3Scenes, updatedAt:'2026-06-21' },
  { id:'inf-vii-bab2-p4', mapel:'Informatika', kelas:'VII', babId:'infbab2', babTitle:INFBAB2, babOrder:2, pertemuan:7, judul:'Visualisasi & Analisis Data', scenes:infbab2p4Scenes, updatedAt:'2026-06-21' },
  { id:'inf-vii-bab3-p1', mapel:'Informatika', kelas:'VII', babId:'infbab3', babTitle:INFBAB3, babOrder:3, pertemuan:1, judul:'Data, Informasi & Konten', scenes:infbab3p1Scenes, updatedAt:'2026-06-21' },
  { id:'inf-vii-bab3-p2', mapel:'Informatika', kelas:'VII', babId:'infbab3', babTitle:INFBAB3, babOrder:3, pertemuan:2, judul:'Mesin Pencari Efektif', scenes:infbab3p2Scenes, updatedAt:'2026-06-21' },
  { id:'inf-vii-bab3-p3', mapel:'Informatika', kelas:'VII', babId:'infbab3', babTitle:INFBAB3, babOrder:3, pertemuan:4, judul:'Fakta, Opini & Hoaks', scenes:infbab3p3Scenes, updatedAt:'2026-06-21' },
  { id:'inf-vii-bab3-p4', mapel:'Informatika', kelas:'VII', babId:'infbab3', babTitle:INFBAB3, babOrder:3, pertemuan:5, judul:'Kredibilitas Sumber & Manajemen', scenes:infbab3p4Scenes, updatedAt:'2026-06-21' },
  { id:'inf-vii-bab4-p1', mapel:'Informatika', kelas:'VII', babId:'infbab4', babTitle:INFBAB4, babOrder:4, pertemuan:1, judul:'Ruang Publik Virtual & Etika', scenes:infbab4p1Scenes, updatedAt:'2026-06-21' },
  { id:'inf-vii-bab4-p2', mapel:'Informatika', kelas:'VII', babId:'infbab4', babTitle:INFBAB4, babOrder:4, pertemuan:2, judul:'Keseimbangan Dunia Digital', scenes:infbab4p2Scenes, updatedAt:'2026-06-21' },
  { id:'inf-vii-bab4-p3', mapel:'Informatika', kelas:'VII', babId:'infbab4', babTitle:INFBAB4, babOrder:4, pertemuan:3, judul:'Informasi Privat & Publik', scenes:infbab4p3Scenes, updatedAt:'2026-06-21' },
  { id:'inf-vii-bab4-p4', mapel:'Informatika', kelas:'VII', babId:'infbab4', babTitle:INFBAB4, babOrder:4, pertemuan:3, judul:'Kata Sandi Aman', scenes:infbab4p4Scenes, updatedAt:'2026-06-21' },
  { id:'inf-vii-bab5-p1', mapel:'Informatika', kelas:'VII', babId:'infbab5', babTitle:INFBAB5, babOrder:5, pertemuan:1, judul:'Perangkat Keras Komputer', scenes:infbab5p1Scenes, updatedAt:'2026-06-21' },
  { id:'inf-vii-bab5-p2', mapel:'Informatika', kelas:'VII', babId:'infbab5', babTitle:INFBAB5, babOrder:5, pertemuan:2, judul:'Cara Kerja Komputer (IPO)', scenes:infbab5p2Scenes, updatedAt:'2026-06-21' },
  { id:'inf-vii-bab5-p3', mapel:'Informatika', kelas:'VII', babId:'infbab5', babTitle:INFBAB5, babOrder:5, pertemuan:2, judul:'Perangkat Lunak & Sistem Operasi', scenes:infbab5p3Scenes, updatedAt:'2026-06-21' },
  { id:'inf-vii-bab5-p4', mapel:'Informatika', kelas:'VII', babId:'infbab5', babTitle:INFBAB5, babOrder:5, pertemuan:7, judul:'Jaringan & Internet', scenes:infbab5p4Scenes, updatedAt:'2026-06-21' },
]

export function getSim(id: string): SimEntry | undefined { return SIMS.find(s => s.id === id) }

export interface SubjectGroup { mapel: string; kelas: string; iconBabId: string; babCount: number; simCount: number }
export function subjectGroups(): SubjectGroup[] {
  const map = new Map<string, SimEntry[]>()
  for (const s of SIMS) { const k = s.mapel + '|' + s.kelas; if (!map.has(k)) map.set(k, []); map.get(k)!.push(s) }
  return Array.from(map.entries()).map(([k, sims]) => {
    const [mapel, kelas] = k.split('|')
    return { mapel, kelas, iconBabId: sims[0].babId, babCount: new Set(sims.map(s => s.babId)).size, simCount: sims.length }
  })
}

export interface BabGroup { babId: string; babTitle: string; babOrder: number; sims: SimEntry[] }
export function babsFor(mapel: string, kelas: string): BabGroup[] {
  const sims = SIMS.filter(s => s.mapel === mapel && s.kelas === kelas)
  const map = new Map<string, SimEntry[]>()
  for (const s of sims) { if (!map.has(s.babId)) map.set(s.babId, []); map.get(s.babId)!.push(s) }
  return Array.from(map.values())
    .map(grp => ({ babId: grp[0].babId, babTitle: grp[0].babTitle, babOrder: grp[0].babOrder, sims: grp.sort((a, b) => a.pertemuan - b.pertemuan) }))
    .sort((a, b) => a.babOrder - b.babOrder)
}

export function recentSims(n = 6): SimEntry[] {
  return [...SIMS].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)).slice(0, n)
}
