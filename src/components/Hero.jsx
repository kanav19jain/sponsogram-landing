import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Header from './Header'
import Marquee from './Marquee'

const ease = [0.22, 1, 0.36, 1]

function Frame({ src, alt, className, delay = 0, rotate = 0, priority = false }) {
  return (
    <motion.figure
      initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)', rotate }}
      animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)', rotate }}
      transition={{ duration: 1.15, delay, ease }}
      className={`group absolute overflow-hidden bg-emerald-deep shadow-[0_30px_80px_-30px_rgba(0,0,0,0.75)] ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        className="h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
      />
      <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-cream/15" />
    </motion.figure>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const textY = useTransform(scrollYProgress, [0, 1], [0, -70])
  const collageY = useTransform(scrollYProgress, [0, 1], [0, -130])
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section
      id="top"
      ref={ref}
      className="grain relative flex min-h-[100svh] flex-col overflow-hidden bg-ink"
    >
      {/* Hairline architecture */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-y-0 left-5 w-px bg-cream/[0.06] sm:left-8 lg:left-12" />
        <div className="absolute inset-y-0 right-5 w-px bg-cream/[0.06] sm:right-8 lg:right-12" />
        <div className="absolute inset-x-0 top-[76px] h-px bg-cream/[0.06] lg:top-[88px]" />
        <div className="absolute -right-40 top-[-18%] h-[520px] w-[520px] rounded-full bg-emerald/10 blur-[140px]" />
        <div className="absolute -left-32 bottom-[-10%] h-[360px] w-[360px] rounded-full bg-gold/[0.05] blur-[120px]" />
      </div>

      <Header />

      <div className="relative z-10 mx-auto flex w-full max-w-[1500px] flex-1 flex-col justify-center px-5 py-10 sm:px-8 lg:px-12 lg:py-4">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-6">
          {/* ---------- Type ---------- */}
          <motion.div style={{ y: textY, opacity: fade }} className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.32em] text-cream/50 sm:text-[10px]"
            >
              <span className="text-gold">✦</span>
              <span>A new creative ecosystem</span>
            </motion.div>

            <h1 className="font-display font-normal text-cream">
              <span className="block overflow-hidden pb-[0.06em]">
                <motion.span
                  initial={{ y: '112%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 1.1, delay: 0.32, ease }}
                  className="block text-[clamp(4.1rem,12.5vw,9.9rem)] leading-[0.78] tracking-[-0.02em]"
                >
                  Incubate
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-[0.08em] pl-[7%]">
                <motion.span
                  initial={{ y: '112%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 1.1, delay: 0.46, ease }}
                  className="block text-[clamp(4.1rem,12.5vw,9.9rem)] italic leading-[0.8] tracking-[-0.02em] text-gold"
                >
                  Creativity
                  <span className="ml-2 align-top font-sans text-[0.16em] not-italic text-gold/70">
                    ✳
                  </span>
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.72, ease }}
              className="mt-7 max-w-[26rem] text-[0.9rem] leading-relaxed text-cream/55 sm:text-[0.95rem]"
            >
              A new home for the ideas, people and partnerships shaping what
              comes next, built by Sponsogram.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.86, ease }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <span className="relative inline-flex items-center gap-3 bg-gold px-4 py-3 text-ink">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink" />
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.3em] sm:text-[11px]">
                  Coming Soon
                </span>
              </span>
              <span className="h-px w-10 bg-cream/25" aria-hidden="true" />
              <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-cream/40 sm:text-[10px]">
                Vol. 01 / MMXXV
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-10 hidden items-center gap-3 font-mono text-[9px] uppercase tracking-[0.3em] text-cream/35 lg:flex"
            >
              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                aria-hidden="true"
              >
                ↓
              </motion.span>
              <span>Scroll to enter</span>
            </motion.div>
          </motion.div>

          {/* ---------- Collage (desktop) ---------- */}
          <motion.div
            style={{ y: collageY }}
            className="relative hidden h-[540px] w-full lg:col-span-6 lg:block xl:h-[600px]"
          >
            {/* structural panels */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease }}
              className="absolute right-0 top-8 h-[84%] w-[64%] border border-emerald-bright/30 bg-emerald"
            />
            <div className="absolute right-0 top-8 h-[84%] w-[64%] translate-x-3 translate-y-3 border border-gold/45" />

            <Frame
              src="/images/vlog-3.jpg"
              alt="A filmmaker capturing a performer in a neon-lit studio"
              className="right-[6%] top-0 h-[70%] w-[61%]"
              delay={0.55}
              priority
            />
            <Frame
              src="/images/fashion-model.jpg"
              alt="Fashion creator in a yellow campaign look"
              className="left-0 top-[13%] h-[45%] w-[33%]"
              delay={0.7}
              rotate={-4}
            />
            <Frame
              src="/images/creator-filming.jpg"
              alt="A hand holding a phone in front of an Instagram heart mural"
              className="bottom-[1%] left-[15%] h-[29%] w-[29%]"
              delay={0.85}
              rotate={3}
            />

            {/* editorial details */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease }}
              className="absolute bottom-[7%] right-[4%] bg-gold px-4 py-3 text-ink"
            >
              <span className="block font-display text-[1.55rem] italic leading-none">
                Creator-led.
              </span>
              <span className="mt-1 block font-mono text-[8px] uppercase tracking-[0.26em]">
                Brands × Ideas
              </span>
            </motion.div>

            <div className="absolute right-[3%] top-[3%] flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.26em] text-gold/80">
              <span className="h-px w-8 bg-gold/50" />
              <span>Still / 01</span>
            </div>

            <div className="absolute -left-2 top-[62%] font-mono text-[8px] uppercase tracking-[0.3em] text-cream/30 [writing-mode:vertical-rl]">
              Production — Campaign — Culture
            </div>
          </motion.div>

          {/* ---------- Collage (mobile) ---------- */}
          <div className="grid grid-cols-5 gap-3 lg:hidden">
            <motion.figure
              initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
              animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1, delay: 0.55, ease }}
              className="col-span-3 aspect-[3/4] overflow-hidden bg-emerald-deep"
            >
              <img
                src="/images/vlog-3.jpg"
                alt="A filmmaker capturing a performer in a neon-lit studio"
                className="h-full w-full object-cover"
              />
            </motion.figure>
            <div className="col-span-2 flex flex-col gap-3">
              <motion.figure
                initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
                animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
                transition={{ duration: 1, delay: 0.7, ease }}
                className="aspect-square overflow-hidden bg-emerald-deep"
              >
                <img
                  src="/images/fashion-model.jpg"
                  alt="Fashion creator in a yellow campaign look"
                  className="h-full w-full object-cover"
                />
              </motion.figure>
              <motion.figure
                initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
                animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
                transition={{ duration: 1, delay: 0.82, ease }}
                className="aspect-square overflow-hidden bg-emerald-deep"
              >
                <img
                  src="/images/creator-filming.jpg"
                  alt="A hand holding a phone in front of an Instagram heart mural"
                  className="h-full w-full object-cover"
                />
              </motion.figure>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20">
        <Marquee />
      </div>
    </section>
  )
}
