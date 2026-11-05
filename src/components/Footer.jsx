import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export default function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-ink text-cream">
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[360px] w-[360px] rounded-full bg-emerald/10 blur-[130px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-10 border-b border-cream/10 py-12 sm:py-16 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, ease }}
          >
            <div className="flex items-center gap-3">
              <img
                src="/brand/sponsogram-mark.png"
                alt="Sponsogram logo"
                width="40"
                height="38"
                loading="lazy"
                className="h-10 w-10 object-contain"
              />
              <span className="text-sm font-semibold tracking-[0.18em]">SPONSOGRAM</span>
            </div>
            <p className="mt-6 max-w-xs font-display text-[1.65rem] italic leading-tight text-cream/70 sm:text-[1.9rem]">
              A new chapter for brands, creators and the culture they shape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="flex flex-col gap-6 sm:flex-row sm:gap-14"
          >
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-cream/35">
                Studio
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream/65">
                New Delhi, India
                <br />
                hello@sponsogram.in
              </p>
            </div>
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-cream/35">
                Follow
              </p>
              <ul className="mt-3 space-y-2 text-sm text-cream/65">
                <li>
                  <a
                    href="https://www.linkedin.com/company/sponsogramofficial/"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 transition-colors hover:text-gold"
                  >
                    LinkedIn
                    <span className="text-[10px] text-cream/30 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.sponsogram.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 transition-colors hover:text-gold"
                  >
                    Sponsogram.in
                    <span className="text-[10px] text-cream/30 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://sponsolink.sponsogram.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 transition-colors hover:text-gold"
                  >
                    Sponsolink
                    <span className="text-[10px] text-cream/30 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col gap-4 py-7 font-mono text-[9px] uppercase tracking-[0.24em] text-cream/35 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2025 Sponsogram. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-gold">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
              Coming Soon
            </span>
            <a href="#top" className="transition-colors hover:text-cream">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
