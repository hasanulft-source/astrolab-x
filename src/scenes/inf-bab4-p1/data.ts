export interface Skenario { situasi: string; opsi: string[]; jawab: number; ket: string }
export const SKENARIO: Skenario[] = [
  { situasi: 'Temanmu salah menjawab di grup kelas. Kamu...', opsi: ['Menertawakannya ramai-ramai', 'Membetulkan dengan sopan'], jawab: 1, ket: 'Mengoreksi dengan sopan menjaga perasaan teman dan suasana grup tetap positif.' },
  { situasi: 'Ada komentar yang membuatmu kesal. Kamu...', opsi: ['Membalas dengan kata kasar', 'Tenang dulu, balas baik-baik atau abaikan'], jawab: 1, ket: 'Emosi sesaat bisa jadi jejak digital permanen. Menahan diri adalah tanda kedewasaan.' },
  { situasi: 'Kamu melihat unggahan menghina suku tertentu. Kamu...', opsi: ['Ikut menyebarkan', 'Tidak menyebarkan & laporkan'], jawab: 1, ket: 'Ujaran kebencian & SARA dilarang dan bisa berdampak hukum. Jangan ikut menyebarkan.' },
]
