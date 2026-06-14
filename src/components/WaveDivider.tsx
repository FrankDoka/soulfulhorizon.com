/**
 * A soft wave that smooths the transition between two differently-colored
 * sections. Place it in-flow at the bottom (or top) of a section and set `fill`
 * to the color of the adjacent section.
 */
export function WaveDivider({
  fill,
  position = 'bottom',
}: {
  fill: string
  position?: 'top' | 'bottom'
}) {
  return (
    <div aria-hidden="true" className="pointer-events-none" style={{ lineHeight: 0 }}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className={`block h-10 w-full sm:h-14 ${position === 'top' ? 'rotate-180' : ''}`}
        style={{ fill }}
      >
        <path d="M0,30 C180,58 360,4 540,26 C720,48 900,6 1080,28 C1260,50 1380,20 1440,30 L1440,60 L0,60 Z" />
      </svg>
    </div>
  )
}
