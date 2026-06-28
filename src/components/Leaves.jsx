import { useEffect } from 'react'
import styles from './Leaves.module.css'

const LEAF_COLORS = ['#F2C4CE', '#D4A5B5', '#E8D0B8', '#C8DBA8', '#B8CCA8', '#E2BFC8']

export default function Leaves() {
  useEffect(() => {
    const container = document.getElementById('leaf-container')
    if (!container) return

    const createLeaf = () => {
      const leaf = document.createElement('div')
      leaf.className = styles.leaf
      leaf.style.left = Math.random() * 100 + 'vw'
      const dur = 10 + Math.random() * 14
      const delay = Math.random() * 8
      leaf.style.animationDuration = dur + 's'
      leaf.style.animationDelay = delay + 's'
      const size = 10 + Math.random() * 14
      const col = LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)]
      leaf.innerHTML = `<svg width="${size}" height="${size * 1.5}" viewBox="0 0 20 30" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0 C18 8 20 18 10 30 C0 18 2 8 10 0Z" fill="${col}" opacity="0.65"/>
        <line x1="10" y1="4" x2="10" y2="26" stroke="${col}" stroke-width="0.8" opacity="0.4"/>
      </svg>`
      container.appendChild(leaf)
      setTimeout(() => leaf.remove(), (dur + delay) * 1000 + 1000)
    }

    for (let i = 0; i < 6; i++) setTimeout(createLeaf, i * 400)
    const interval = setInterval(createLeaf, 900)
    return () => clearInterval(interval)
  }, [])

  return <div id="leaf-container" className={styles.container} />
}
