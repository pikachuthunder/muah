import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="#hero" className={styles.link}>Home</a>
      <span className={styles.brand}>02 · 08 · 2026</span>
      <a href="#couples" className={styles.link}>Couples</a>
      <a href="#venue" className={styles.link}>Venue</a>
      <a href="#rsvp" className={styles.link}>RSVP</a>
    </nav>
  )
}
