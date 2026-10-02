/** Brass "available" stamp laid over the corner of the portrait. */
export function Seal() {
  return (
    <div className="seal" aria-hidden="true">
      <svg viewBox="0 0 120 120">
        <defs>
          <path id="seal-ring" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <circle cx="60" cy="60" r="57" className="seal-fill" />
        <circle cx="60" cy="60" r="56" className="seal-outer" />
        <circle cx="60" cy="60" r="34" className="seal-inner" />
        <text className="seal-ring-text">
          <textPath href="#seal-ring">OPEN TO OFFERS · FULL-TIME · CONTRACT ·</textPath>
        </text>
        <text x="60" y="56" textAnchor="middle" className="seal-big">
          Now
        </text>
        <text x="60" y="72" textAnchor="middle" className="seal-small">
          AVAILABLE
        </text>
      </svg>
    </div>
  )
}
