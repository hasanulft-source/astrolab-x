import { ToolGlyph } from '../../components/ToolGlyph'
import { TOOLS, KAT_LABEL, type Kat } from './data'
import styles from './ui.module.css'

const ORDER: Kat[] = ['wadah', 'ukur', 'pemanas', 'penunjang']

export function Scene3Kategori() {
  return (
    <>
      <p className={styles.prompt}>Alat lab dikelompokkan menurut <em>fungsinya</em>. Perhatikan polanya:</p>
      <div className={styles.catCols}>
        {ORDER.map(k => (
          <div key={k} className={styles.catCol}>
            <span className={styles.catTitle}>{KAT_LABEL[k]}</span>
            {TOOLS.filter(t => t.kat === k).map(t => (
              <div key={t.id} className={styles.catItem}>
                <ToolGlyph id={t.id} size={56} />
                <span className={styles.catItemName}>{t.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
