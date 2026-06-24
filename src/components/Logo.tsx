export function Logo({ size = 32, color = '#fff' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <g transform="translate(16, 17)">
        <polygon points="0,-11 5.5,-3.5 0,1 -5.5,-3.5" fill={color} />
        <polygon points="-5.5,-3.5 -2,3.5 -8,9 -11.5,2" fill={color} opacity="0.82" />
        <polygon points="5.5,-3.5 11.5,2 8,9 2,3.5" fill={color} opacity="0.82" />
        <rect x="-3.5" y="1" width="7" height="2.2" rx="0.5" fill={color} opacity="0.55" />
      </g>
    </svg>
  )
}
