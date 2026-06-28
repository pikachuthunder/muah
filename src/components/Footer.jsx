import styles from './Footer.module.css'
export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Corner florals bleeding in from both sides at top */}
      <img src="/corner-floral.png" className={styles.cornerL} alt="" />
      <img src="/corner-floral.png" className={styles.cornerR} alt="" />
      <div className={styles.inner}>
        <div className={styles.script}>Shahabas &amp; Fathimath · Sharafath &amp; Khadeejath</div>
        <p className={styles.sub}>02 · 08 · 2026 &nbsp;·&nbsp; The Flora by Sunflower, Madhur</p>
        <p className={styles.made}>Made with love 🌹</p>
      </div>
    </footer>
  )
}
