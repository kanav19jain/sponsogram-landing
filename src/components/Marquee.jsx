const items = ['Incubate creativity', 'Connect', 'Collaborate', 'Create', 'Coming soon']

function Group({ ariaHidden }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden || undefined}>
      {items.map((label, i) => (
        <span key={label} className="flex items-center">
          <span
            className={`whitespace-nowrap px-5 font-display text-[1.15rem] sm:px-7 sm:text-[1.35rem] ${
              i % 2 === 0 ? 'italic text-cream' : 'not-italic text-gold-soft'
            }`}
          >
            {label}
          </span>
          <span className="text-[0.6rem] text-gold" aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="border-y border-emerald-bright/30 bg-emerald py-3.5 text-cream">
      <div className="marquee-track">
        <Group />
        <Group ariaHidden />
      </div>
    </div>
  )
}
