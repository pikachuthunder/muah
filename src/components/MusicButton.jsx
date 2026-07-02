import { useState, useRef, useEffect } from 'react'
import styles from './MusicButton.module.css'

export default function MusicButton({ shouldPlay }) {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)

  // Preload the audio as soon as the component mounts,
  // so it's already buffered by the time shouldPlay becomes true
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.preload = 'auto'
      audioRef.current.load()
    }
  }, [])

  // Play when triggered from the parent (e.g. after a click/enter action)
  useEffect(() => {
    if (shouldPlay && audioRef.current) {
      audioRef.current.volume = 0.28
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {})
    }
  }, [shouldPlay])

  const toggle = () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  return (
    <>
      {/* Make sure music.mp3 lives in your /public folder */}
      <audio ref={audioRef} loop preload="auto" src="/music.mp3" />
      <button
        className={styles.btn}
        onClick={toggle}
        title={playing ? 'Pause music' : 'Play music'}
      >
        {playing ? '🎵' : '🔇'}
      </button>
    </>
  )
}