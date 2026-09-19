import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Work from './components/Work/Work'
import Skills from './components/Skills/Skills'
import Process from './components/Process/Process'
import WhyMe from './components/WhyMe/WhyMe'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Skills />
        <Process />
        <WhyMe />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
