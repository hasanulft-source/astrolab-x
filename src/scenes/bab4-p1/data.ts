export interface Pt { x: number; y: number; label?: string }
export interface Scen { id: string; name: string; route: Pt[]; jarak: string; perpindahan: string; note: string }
export const SCEN: Scen[] = [
  { id: 'lurus', name: 'Lurus A→B', route: [{ x: 50, y: 120, label: 'A' }, { x: 285, y: 120, label: 'B' }], jarak: '200 m', perpindahan: '200 m', note: 'Lintasan lurus tanpa belok — nilai jarak = perpindahan.' },
  { id: 'L', name: 'Belok L: A→B→C', route: [{ x: 70, y: 50, label: 'A' }, { x: 70, y: 195, label: 'B' }, { x: 275, y: 195, label: 'C' }], jarak: '300 m', perpindahan: '≈ 250 m', note: 'Jarak mengikuti lintasan; perpindahan lurus dari A ke C.' },
  { id: 'segitiga', name: 'Segitiga A→B→C→A', route: [{ x: 70, y: 195, label: 'A' }, { x: 275, y: 195, label: 'B' }, { x: 172, y: 50, label: 'C' }, { x: 70, y: 195, label: 'A' }], jarak: '600 m', perpindahan: '0 m', note: 'Kembali ke titik awal — perpindahan NOL, walau jarak besar!' },
  { id: 'bolak', name: 'Bolak-balik A→B→A', route: [{ x: 55, y: 120, label: 'A' }, { x: 285, y: 120, label: 'B' }, { x: 55, y: 120, label: 'A' }], jarak: '400 m', perpindahan: '0 m', note: 'Pergi lalu kembali — jarak 2× lipat, perpindahan nol.' },
]
export const byId = (id: string) => SCEN.find(s => s.id === id)!
