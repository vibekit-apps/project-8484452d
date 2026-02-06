import Hero from '@/components/Hero'
import PhotoGrid from '@/components/PhotoGrid'
import Contact from '@/components/Contact'
import Header from '@/components/Header'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PhotoGrid />
      <Contact />
    </main>
  )
}