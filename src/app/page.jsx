import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Work from '@/components/Work'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'

async function HomePage() {
   return (
      <main>
         <Hero />
         <About />
         <Experience />
         <Skills />
         <Work />
         <Contact />
      </main>
   )
}

export default HomePage
