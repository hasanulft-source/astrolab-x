interface Props { id: string; size?: number }
const GE = '#6f96a3'      // tepi kaca
const WOOD = '#c79a5e'

function Defs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`glass-${id}`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#ffffff" /><stop offset="0.45" stopColor="#eef6f8" /><stop offset="1" stopColor="#d2e4e8" />
      </linearGradient>
      <linearGradient id={`liq-${id}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#63b7c8" /><stop offset="1" stopColor="#0b7c92" />
      </linearGradient>
      <linearGradient id={`metal-${id}`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#dde4e7" /><stop offset="0.5" stopColor="#aab6bb" /><stop offset="1" stopColor="#828f95" />
      </linearGradient>
      <radialGradient id={`flame-${id}`} cx="0.5" cy="0.72" r="0.75">
        <stop offset="0" stopColor="#fff6cf" /><stop offset="0.45" stopColor="#ffcf4d" /><stop offset="1" stopColor="#ef8a1e" />
      </radialGradient>
      <linearGradient id={`wood-${id}`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#e0bd86" /><stop offset="1" stopColor="#b07f44" />
      </linearGradient>
    </defs>
  )
}

const shadow = <ellipse cx="40" cy="96" rx="21" ry="3.6" fill="#0f3d49" opacity="0.10" />

export function ToolGlyph({ id, size = 64 }: Props) {
  const G = `url(#glass-${id})`, L = `url(#liq-${id})`, M = `url(#metal-${id})`, F = `url(#flame-${id})`, WD = `url(#wood-${id})`
  const hi = (x: number, y: number, h: number) => <rect x={x} y={y} width={3.4} height={h} rx={1.7} fill="#ffffff" opacity="0.5" />

  const body: Record<string, JSX.Element> = {
    beaker: <g>{shadow}
      <path d="M26 32 L26 80 Q26 84 30 84 L50 84 Q54 84 54 80 L54 32 Z" fill={G} stroke={GE} strokeWidth="2" strokeLinejoin="round" />
      <path d="M26.5 54 Q40 58 53.5 54 L53.5 80 Q53.5 83.5 50 83.5 L30 83.5 Q26.5 83.5 26.5 80 Z" fill={L} />
      <path d="M26.5 54 Q40 58 53.5 54" stroke="#0b6275" strokeWidth="1.2" fill="none" opacity="0.55" />
      <path d="M22 32 L54 32 M54 32 L60 28" stroke={GE} strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <line x1="50" y1="44" x2="54" y2="44" stroke={GE} strokeWidth="1" /><line x1="50" y1="66" x2="54" y2="66" stroke={GE} strokeWidth="1" />
      {hi(30, 36, 44)}</g>,

    testtube: <g>{shadow}
      <path d="M33 16 L33 76 Q33 86 40 86 Q47 86 47 76 L47 16 Z" fill={G} stroke={GE} strokeWidth="2" strokeLinejoin="round" />
      <path d="M33 52 L47 52 L47 76 Q47 85 40 85 Q33 85 33 76 Z" fill={L} />
      <line x1="33" y1="52" x2="47" y2="52" stroke="#0b6275" strokeWidth="1.1" opacity="0.5" />
      <line x1="30" y1="16" x2="50" y2="16" stroke={GE} strokeWidth="2.4" strokeLinecap="round" />
      {hi(36, 22, 50)}</g>,

    erlenmeyer: <g>{shadow}
      <path d="M34 16 L34 34 L22 78 Q21 84 27 84 L53 84 Q59 84 58 78 L46 34 L46 16 Z" fill={G} stroke={GE} strokeWidth="2" strokeLinejoin="round" />
      <path d="M28 60 L52 60 L57 78 Q58 83.5 52.5 83.5 L27.5 83.5 Q22 83.5 23 78 Z" fill={L} />
      <line x1="28" y1="60" x2="52" y2="60" stroke="#0b6275" strokeWidth="1.1" opacity="0.5" />
      <line x1="31" y1="16" x2="49" y2="16" stroke={GE} strokeWidth="2.4" strokeLinecap="round" />
      {hi(35, 20, 14)}</g>,

    cylinder: <g>{shadow}
      <path d="M32 18 L32 80 L48 80 L48 18 Z" fill={G} stroke={GE} strokeWidth="2" strokeLinejoin="round" />
      <path d="M32.5 50 L47.5 50 L47.5 80 L32.5 80 Z" fill={L} />
      <line x1="32.5" y1="50" x2="47.5" y2="50" stroke="#0b6275" strokeWidth="1.1" opacity="0.5" />
      <path d="M30 18 L50 18 M48 18 L54 15" stroke={GE} strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M30 84 Q40 88 50 84" fill={M} stroke={GE} strokeWidth="1.5" />
      {[26, 34, 42, 58, 66].map(y => <line key={y} x1="44" y1={y} x2="48" y2={y} stroke={GE} strokeWidth="1" />)}
      {hi(35, 22, 56)}</g>,

    dropper: <g>{shadow}
      <ellipse cx="40" cy="22" rx="9" ry="11" fill="#e6ebee" stroke="#9aa7ad" strokeWidth="1.6" />
      <ellipse cx="37" cy="19" rx="2.6" ry="4" fill="#ffffff" opacity="0.6" />
      <path d="M37 32 L37 74 L40 80 L43 74 L43 32 Z" fill={G} stroke={GE} strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M37 58 L43 58 L43 74 L40 80 L37 74 Z" fill={L} />
      <circle cx="40" cy="86" r="3.2" fill={L} /></g>,

    thermometer: <g>{shadow}
      <rect x="36" y="16" width="8" height="60" rx="4" fill={G} stroke={GE} strokeWidth="1.8" />
      <circle cx="40" cy="80" r="8" fill="#d64545" stroke="#a83434" strokeWidth="1.4" />
      <rect x="38" y="40" width="4" height="40" fill="#d64545" />
      {[26, 34, 42, 50, 58].map(y => <line key={y} x1="44" y1={y} x2="47" y2={y} stroke={GE} strokeWidth="1" />)}
      {hi(37.5, 20, 52)}</g>,

    burner: <g>{shadow}
      <path d="M28 88 Q28 64 40 60 Q52 64 52 88 Z" fill={G} stroke={GE} strokeWidth="2" />
      <path d="M30 88 Q30 70 40 66 Q50 70 50 88 Z" fill={L} opacity="0.85" />
      <rect x="34" y="50" width="12" height="12" rx="2" fill={M} stroke={GE} strokeWidth="1.4" />
      <rect x="38" y="44" width="4" height="8" fill="#8a979d" />
      <path d="M40 16 C30 30 33 48 40 52 C47 48 50 30 40 16 Z" fill={F} />
      <path d="M40 26 C35 34 37 46 40 48 C43 46 45 34 40 26 Z" fill="#fff6cf" opacity="0.85" />
      {hi(33, 66, 18)}</g>,

    tripod: <g>{shadow}
      <line x1="30" y1="44" x2="22" y2="88" stroke={M} strokeWidth="4" strokeLinecap="round" />
      <line x1="50" y1="44" x2="58" y2="88" stroke={M} strokeWidth="4" strokeLinecap="round" />
      <line x1="40" y1="44" x2="40" y2="88" stroke={M} strokeWidth="4" strokeLinecap="round" />
      <rect x="26" y="34" width="28" height="10" rx="2" fill={M} stroke="#7a878d" strokeWidth="1.2" />
      {[30, 34, 38, 42, 46, 50].map(x => <line key={'v' + x} x1={x} y1="34" x2={x} y2="44" stroke="#8a979d" strokeWidth="0.7" />)}
      <line x1="26" y1="39" x2="54" y2="39" stroke="#8a979d" strokeWidth="0.7" /></g>,

    funnel: <g>{shadow}
      <path d="M22 30 L58 30 L44 56 L44 82 L36 82 L36 56 Z" fill={G} stroke={GE} strokeWidth="2" strokeLinejoin="round" />
      <ellipse cx="40" cy="30" rx="18" ry="4.5" fill={G} stroke={GE} strokeWidth="2" />
      <path d="M27 33 L53 33 L46 46 L34 46 Z" fill={L} opacity="0.85" />
      <circle cx="40" cy="86" r="2.8" fill={L} />
      {hi(33, 34, 18)}</g>,

    clamp: <g>{shadow}
      <path d="M31 18 L37 56 L33 84 L40 84 L44 56 L38 18 Z" fill={WD} stroke="#9c7338" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M49 18 L43 56 L47 84 L40 84 L36 56 L42 18 Z" fill={WD} stroke="#9c7338" strokeWidth="1.5" strokeLinejoin="round" opacity="0.96" />
      <circle cx="40" cy="56" r="4" fill={M} stroke="#7a878d" strokeWidth="1.2" />
      <path d="M33 60 q7 4 14 0 M33 66 q7 4 14 0" stroke="#8a979d" strokeWidth="1.4" fill="none" /></g>,
  }

  return <svg width={size} height={size * 1.3} viewBox="0 0 80 104" style={{ display: 'block' }}><Defs id={id} />{body[id] ?? null}</svg>
}
