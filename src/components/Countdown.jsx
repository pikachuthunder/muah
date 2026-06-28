import { useState, useEffect } from 'react'
import styles from './Countdown.module.css'
function getTimeLeft() {
  const target = new Date('2026-08-02T13:30:00+05:30')
  const diff = target - new Date()
  if (diff <= 0) return { days:0, hours:0, mins:0, secs:0 }
  return {
    days:  Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    mins:  Math.floor((diff % 3600000) / 60000),
    secs:  Math.floor((diff % 60000) / 1000),
  }
}
const pad = n => String(n).padStart(2,'0')
export default function Countdown() {
  const [t, setT] = useState(getTimeLeft())
  useEffect(() => { const id = setInterval(() => setT(getTimeLeft()), 1000); return () => clearInterval(id) }, [])
  return (
    <section className={styles.section}>
      <img src="/vertical-spray.png" className={styles.sideLeft}  alt="" />
      <img src="/vertical-spray.png" className={styles.sideRight} alt="" />
      <div className={styles.eyebrow}>counting every petal until the day</div>
      <div className={styles.title}>The Celebration Begins In</div>
      <div className={styles.grid}>
        {[['days','Days'],['hours','Hours'],['mins','Minutes'],['secs','Seconds']].map(([k,l])=>(
          <div className={styles.box} key={k}>
            <div className={styles.num}>{pad(t[k])}</div>
            <div className={styles.label}>{l}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
