import { useState } from 'react'
import Leaves from './components/Leaves'
import Envelope from './components/Envelope'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DateBanner from './components/DateBanner'
import Countdown from './components/Countdown'
import Couples from './components/Couples'
import Venue from './components/Venue'
import RSVP from './components/RSVP'
import Footer from './components/Footer'
import MusicButton from './components/MusicButton'
import Admin from './components/Admin'

// Simple route — if URL ends in /admin show admin page
const isAdmin = window.location.pathname === '/admin'

export default function App() {
  const [siteVisible, setSiteVisible] = useState(false)
  const [playMusic, setPlayMusic] = useState(false)

  if (isAdmin) return <Admin />

  const handleEnvelopeOpen = () => {
    setSiteVisible(true)
    setPlayMusic(true)
  }

  return (
    <>
      <Leaves />
      <Envelope onOpen={handleEnvelopeOpen} />
      <MusicButton shouldPlay={playMusic} />
      <div id="main" style={{
        opacity: siteVisible ? 1 : 0,
        transition: 'opacity 0.8s ease',
        position: 'relative', zIndex: 1,
      }}>
        <Navbar />
        <Hero />
        <DateBanner />
        <Countdown />
        <Couples />
        <Venue />
        <RSVP />
        <Footer />
      </div>
    </>
  )
}