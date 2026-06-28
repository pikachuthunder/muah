import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      {/* Vertical spray — left side, bleeds off left edge */}
      <img src="/vertical-spray.png" className={styles.floralLeft} alt="" />
      {/* Mirrored on right side */}
      <img src="/vertical-spray.png" className={styles.floralRight} alt="" />

      <div className={styles.glow} />

      <div className={styles.inner}>
        <div className={styles.bismillah}>In the name of Allah, the Most Gracious</div>
        <div className={styles.subline}>A double celebration of love &amp; faith</div>

        <div className={styles.divider}>
          <span className={styles.line} />
          <span className={styles.divRose}>✦</span>
          <span className={styles.line} />
        </div>

        <div className={styles.hosts}>Mr. Shahul Hameed Patla &amp; Mrs. Zuhra Maska</div>
        <div className={styles.address}>Shaaz Mahal, Patla Compound, Arikkady Kunnil</div>

        <div className={styles.invite}>
          joyfully invite you to celebrate the Nikah of their sons,<br />
          grandsons of <strong>Mohammed Muhyuddeen Patla</strong> &amp; <strong>Abdullah Haji Maska</strong>
        </div>

        <div className={styles.divider} style={{ marginTop: 32 }}>
          <span className={styles.line} />
          <span className={styles.divRose}>🌹</span>
          <span className={styles.line} />
        </div>
      </div>

      <a href="#couples" className={styles.scrollDown}>Keep Scrolling ↓</a>
    </section>
  )
}
