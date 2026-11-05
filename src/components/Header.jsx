import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-30 flex items-center justify-between px-5 pt-6 sm:px-8 lg:px-12 lg:pt-8"
    >
      <a href="#top" className="group flex items-center gap-3">
        <img
          src="/brand/sponsogram-mark.png"
          alt="Sponsogram logo"
          width="40"
          height="38"
          className="h-9 w-9 object-contain sm:h-10 sm:w-10"
        />
        <span className="flex flex-col leading-none">
          <span className="text-[0.95rem] font-semibold tracking-[0.16em] text-cream">
            SPONSOGRAM
          </span>
          <span className="mt-1 font-mono text-[8px] uppercase tracking-[0.3em] text-cream/45">
            Creator culture studio
          </span>
        </span>
      </a>

      <div className="hidden items-center gap-7 font-mono text-[10px] uppercase tracking-[0.24em] text-cream/55 md:flex">
        <span>Brands × Creators</span>
        <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
        <span>New Delhi, IN</span>
        <span className="h-1 w-1 rounded-full bg-emerald-bright" aria-hidden="true" />
        <span className="text-gold">Est. 2024</span>
      </div>

      <div className="flex items-center gap-2 md:hidden">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-bright" />
        <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-cream/55">
          Est. 2024
        </span>
      </div>
    </motion.header>
  )
}
