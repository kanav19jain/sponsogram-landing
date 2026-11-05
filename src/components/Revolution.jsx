import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const ease = [0.22, 1, 0.36, 1]

function Line({ children, delay = 0, className = '' }) {
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`block overflow-hidden pb-[0.06em] ${className}`}
    >
      <motion.span
        variants={{
          hidden: { y: '110%' },
          visible: { y: '0%', transition: { duration: 1.05, delay, ease } },
        }}
        className="block"
      >
        {children}
      </motion.span>
    </motion.span>
  )
}

function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Revolution() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const yTall = useTransform(scrollYProgress, [0, 1], [50, -50])
  const ySmall = useTransform(scrollYProgress, [0, 1], [26, -26])

  return (
    <section
      id="revolution"
      ref={ref}
      className="paper-grain relative overflow-hidden bg-cream text-ink"
    >
      {/* meta bar */}
      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between border-b border-ink/15 py-5 font-mono text-[9px] uppercase tracking-[0.26em] text-ink/55 sm:text-[10px]">
          <span className="flex items-center gap-2">
            <span className="text-emerald">●</span> 02 — The Revolution
          </span>
          <span className="hidden sm:block">Where content becomes culture</span>
          <span className="text-ink/40">SPG / MMXXV</span>
        </div>
      </div>

      {/* headline + portrait */}
      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 pb-14 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:px-12 lg:pb-24 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-6">
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <p className="mb-6 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.3em] text-ink/45 sm:text-[10px]">
                <span className="h-px w-9 bg-emerald" />
                The next chapter
              </p>
            </Reveal>

            <h2
              aria-label="A Revolution in Content Creation"
              className="font-display font-normal leading-[0.82] tracking-[-0.025em] text-ink"
            >
              <Line delay={0.1}>
                <span className="text-[clamp(3.6rem,10.5vw,9rem)]">
                  <span className="mr-2 inline-block align-top font-sans text-[0.18em] tracking-[0.1em] text-gold">
                    (A)
                  </span>
                  Revolution
                </span>
              </Line>
              <Line delay={0.24} className="pl-[5%]">
                <span className="text-[clamp(3rem,8.6vw,7.4rem)] italic text-emerald">
                  in Content
                </span>
              </Line>
              <Line delay={0.38} className="pl-[13%]">
                <span className="text-[clamp(3.6rem,10.5vw,9rem)]">Creation</span>
              </Line>
            </h2>

            <Reveal delay={0.32} className="mt-9 max-w-[27rem]">
              <p className="text-[0.92rem] leading-relaxed text-ink/60 sm:text-[0.98rem]">
                Sponsogram is building a smarter, more human space where creators
                and brands meet with intention — and make work worth remembering.
              </p>
              <div className="mt-7 flex items-center gap-3">
                <span className="inline-flex items-center gap-2.5 bg-ink px-4 py-2.5 text-cream">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.28em] sm:text-[10px]">
                    Coming Soon
                  </span>
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-ink/40">
                  Be part of it
                </span>
              </div>
            </Reveal>
          </div>

          {/* portrait composition */}
          <div className="relative lg:col-span-5 lg:pl-4">
            <motion.div style={{ y: yTall }} className="relative">
              <div className="absolute -left-3 -top-3 h-full w-full border border-gold/70" aria-hidden="true" />
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
              >
              <motion.figure
                variants={{
                  hidden: { opacity: 0, clipPath: 'inset(0 0 100% 0)' },
                  visible: {
                    opacity: 1,
                    clipPath: 'inset(0 0 0% 0)',
                    transition: { duration: 1.15, ease },
                  },
                }}
                className="group relative aspect-[4/5] overflow-hidden bg-emerald-deep"
              >
                <img
                  src="/images/fashion-street.jpg"
                  alt="A creator in a teal top against a golden yellow wall"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 sm:p-5">
                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.28em] text-gold">
                      Fig. 01 — The creator
                    </p>
                    <p className="mt-1 font-display text-xl italic text-cream sm:text-2xl">
                      Made on their terms
                    </p>
                  </div>
                  <span className="font-mono text-[9px] tracking-[0.2em] text-cream/70">↗</span>
                </div>
              </motion.figure>
            </motion.div>
            </motion.div>

            {/* small overlapping still */}
            <motion.div
              style={{ y: ySmall }}
              className="relative z-10 -mt-12 ml-auto w-[46%] sm:-mt-16 sm:w-[42%] lg:-mt-20"
            >
              <motion.figure
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.9, delay: 0.2, ease }}
                className="group relative aspect-square overflow-hidden border-[5px] border-cream bg-ink"
              >
                <img
                  src="/images/vlog-4.jpg"
                  alt="A crowd filming a live performance on their phones"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                />
              </motion.figure>
              <p className="mt-2 text-right font-mono text-[8px] uppercase tracking-[0.24em] text-ink/45">
                Fig. 02 — The audience
              </p>
            </motion.div>

            <div className="mt-8 flex items-center justify-between border-t border-ink/15 pt-3 font-mono text-[9px] uppercase tracking-[0.24em] text-ink/45">
              <span>Editorial series</span>
              <span className="text-emerald">01 / 03</span>
            </div>
          </div>
        </div>
      </div>

      {/* filmstrip band */}
      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          <Reveal delay={0.05} className="col-span-2 flex flex-col justify-between bg-emerald p-6 text-cream sm:p-8 lg:col-span-1 lg:aspect-auto">
            <div className="flex items-start justify-between">
              <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-cream/60">
                The shift
              </span>
              <span className="font-display text-4xl italic text-gold">✳</span>
            </div>
            <p className="mt-10 font-display text-[1.7rem] leading-[1.08] sm:text-[2rem]">
              The next generation of content is being incubated
              <span className="text-gold">.</span>
            </p>
            <p className="mt-6 font-mono text-[8px] uppercase tracking-[0.26em] text-cream/50">
              Sponsogram / 2025
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <figure className="zoom-frame group relative aspect-[4/5] overflow-hidden bg-ink">
              <img
                src="/images/studio-light.jpg"
                alt="A camera and lenses arranged on a dark surface"
                loading="lazy"
                className="h-full w-full object-cover opacity-90 transition-opacity duration-700 group-hover:opacity-100"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 font-mono text-[8px] uppercase tracking-[0.24em] text-cream/80">
                <span>Craft</span>
                <span>02</span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.19}>
            <figure className="zoom-frame group relative aspect-[4/5] overflow-hidden bg-ink">
              <img
                src="/images/creator-portrait.jpg"
                alt="A creator lit in blue studio light"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 font-mono text-[8px] uppercase tracking-[0.24em] text-cream/80">
                <span>Character</span>
                <span>03</span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.26}>
            <figure className="zoom-frame group relative aspect-[4/5] overflow-hidden bg-ink">
              <img
                src="/images/vlog-2.jpg"
                alt="A studio microphone and headphones"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 font-mono text-[8px] uppercase tracking-[0.24em] text-cream/80">
                <span>Voice</span>
                <span>04</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
