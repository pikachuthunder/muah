import { useState, useRef, useEffect } from 'react'
import styles from './MusicButton.module.css'

export default function MusicButton({ shouldPlay }) {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    if (shouldPlay && audioRef.current) {
      audioRef.current.volume = 0.28
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {})
    }
  }, [shouldPlay])

  const toggle = () => {
    if (!audioRef.current) return
    if (playing) { audioRef.current.pause(); setPlaying(false) }
    else { audioRef.current.play(); setPlaying(true) }
  }

  return (
    <>
      {/* 🎵 Replace src with your own hosted Arabic/Nasheed .mp3 URL */}
      <audio ref={audioRef} loop src="music.mp3" />
      <button className={styles.btn} onClick={toggle} title={playing ? 'Pause music' : 'Play music'}>
        {playing ? '🎵' : '🔇'}
      </button>
    </>
  )
}
