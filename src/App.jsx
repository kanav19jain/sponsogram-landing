import { MotionConfig } from 'framer-motion'
import Hero from './components/Hero'
import Revolution from './components/Revolution'
import Footer from './components/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen w-full bg-ink">
        <Hero />
        <Revolution />
        <Footer />
      </main>
    </MotionConfig>
  )
}
