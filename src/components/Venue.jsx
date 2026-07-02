import styles from './Venue.module.css'
export default function Venue() {
  return (
    <section className={styles.section} id="venue">
      <img src="/vertical-spray.png" className={styles.sideLeft}  alt="" />
      <img src="/vertical-spray.png" className={styles.sideRight} alt="" />
      <div className={styles.inner}>
        <div className={styles.eyebrow}>where love meets elegance</div>
        <div className={styles.title}>The Venue</div>
        <div className={styles.card}>
          <img src="/corner-floral.png" className={styles.cornerTL} alt="" />
          <img src="/corner-floral.png" className={styles.cornerBR} alt="" />
          <div className={styles.icon}>🌿</div>
          <div className={styles.venueName}>The Flora by Sunflower</div>
          <div className={styles.address}>Aranthode, Madhur<br/>Sunday, 2nd August 2026</div>
          <div className={styles.times}>
            <span className={styles.timePill}>🕐 Shahabas & Afhida — 01:30 PM</span>
            <span className={styles.timePill}>🕓 Sharafath & Najifa — 04:30 PM</span>
          </div>
          <a className={styles.mapBtn} href="https://www.google.com/maps/search/The+Flora+by+Sunflower+Madhur" target="_blank" rel="noreferrer">📍 Open in Maps</a>
        </div>
      </div>
    </section>
  )
}
