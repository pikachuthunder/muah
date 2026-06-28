import styles from './DateBanner.module.css'

export default function DateBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.dateBig}>02 · 08 · 2026</div>
      <div className={styles.dateSub}>Sunday · Two Nikah Ceremonies</div>
      <div className={styles.venue}>The Flora by Sunflower</div>
      <div className={styles.venueSub}>Aranthode, Madhur</div>
    </div>
  )
}
