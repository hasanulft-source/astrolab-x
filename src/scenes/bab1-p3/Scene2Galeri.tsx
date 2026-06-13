import { useState } from 'react'
import { ToolGlyph } from '../../components/ToolGlyph'
import { TOOLS, KAT_LABEL, byId } from './data'
import styles from './ui.module.css'

export function Scene2Galeri() {
  const [sel, setSel] = useState<string | null>(null)
  const t = sel ? byId(sel) : null
  return (
    <>
      <p className={styles.prompt}>Sepuluh alat dasar lab IPA. Klik tiap alat untuk lihat <em>fungsi, bahan, dan aturan keselamatannya</em>.</p>
      <div className={styles.main}>
        <div className={styles.gallery}>
          {TOOLS.map(tool => (
            <div key={tool.id} role="button" className={sel === tool.id ? styles.toolSel : styles.tool} onClick={() => setSel(tool.id)}>
              <ToolGlyph id={tool.id} size={66} />
              <span className={styles.toolName}>{tool.name}</span>
            </div>
          ))}
        </div>
        <div className={styles.panel}>
          {t ? (
            <>
              <div className={styles.pHead}><ToolGlyph id={t.id} size={62} /><span className={styles.pName}>{t.name}</span></div>
              <span className={styles.kat}>{KAT_LABEL[t.kat]}</span>
              <div className={styles.field}><span className={styles.fLabel}>fungsi</span><p>{t.fungsi}</p></div>
              <div className={styles.field}><span className={styles.fLabel}>bahan</span><p>{t.bahan}</p></div>
              <div className={`${styles.field} ${styles.safety}`}><span className={styles.fLabel}>keselamatan</span><p>{t.safety}</p></div>
            </>
          ) : <p className={styles.empty}>Klik salah satu alat untuk melihat detailnya.</p>}
        </div>
      </div>
    </>
  )
}
