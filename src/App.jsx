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

export default function App() {
  const [siteVisible, setSiteVisible] = useState(false)
  const [playMusic, setPlayMusic] = useState(false)

  const handleEnvelopeOpen = () => {
    setSiteVisible(true)
    setPlayMusic(true)
  }

  return (
    <>
      {/* Ambient leaves always in background */}
      <Leaves />

      {/* Envelope intro overlay */}
      <Envelope onOpen={handleEnvelopeOpen} />

      {/* Fixed music toggle */}
      <MusicButton shouldPlay={playMusic} />

      {/* Main site content */}
      <div id="main" style={{
        opacity: siteVisible ? 1 : 0,
        transition: 'opacity 0.8s ease',
        position: 'relative',
        zIndex: 1,
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
