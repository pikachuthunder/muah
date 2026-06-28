import styles from './Couples.module.css'

export default function Couples() {
  return (
    <section className={styles.section} id="couples">

      <img src="/vertical-spray.png" className={styles.sideLeft}  alt="" />
      <img src="/vertical-spray.png" className={styles.sideRight} alt="" />

      <div className={styles.inner}>
        <div className={styles.eyebrow}>united in love &amp; faith</div>
        <div className={styles.sectionTitle}>The Couples</div>

        <div className={styles.card}>

          <img src="/corner-floral.png" className={styles.cornerTL} alt="" />
          <img src="/corner-floral.png" className={styles.cornerBR} alt="" />

          {/* ── COUPLE 1 ── */}
          <div className={styles.coupleBlock}>
            <div className={styles.ceremonyTag}>First Ceremony · 01:30 PM</div>

            {/* Single couple portrait */}
            <div className={styles.couplePortrait}>
              <img src="/shahabas.png" alt="Shahabas & Fathimath" className={styles.portraitImg} />
            </div>

            <div className={styles.nameRow}>
              <h2 className={styles.name}>Shahabas KP</h2>
              <span className={styles.amp}>&amp;</span>
              <h2 className={styles.name}>Fathimath Afhida</h2>
            </div>
            <div className={styles.chips}>
              <div className={styles.chip}><span>🕌</span> D/O Muhammed Ali Hakeem &amp; Fareeda KA</div>
              <div className={styles.chip}><span>🏡</span> Baith-Al-Farhan, Skyview House, Naimarmoola</div>
            </div>
            <div className={styles.timeWrap}>
              <div className={styles.timeLabel}>Nikah Ceremony</div>
              <div className={styles.timeScript}>01:30 PM</div>
            </div>
          </div>

          {/* ── DIVIDER ── */}
          <div className={styles.midDiv}>
            <span className={styles.midLine}/>
            <img src="/bow.png" className={styles.midBow} alt="" />
            <span className={styles.midLine}/>
          </div>

          {/* ── COUPLE 2 ── */}
          <div className={styles.coupleBlock}>
            <div className={styles.ceremonyTag}>Second Ceremony · 04:30 PM</div>

            {/* Single couple portrait */}
            <div className={styles.couplePortrait}>
              <img src="/sharafath.png" alt="Sharafath & Khadeejath" className={styles.portraitImg} />
            </div>

            <div className={styles.nameRow}>
              <h2 className={styles.name}>Sharafath Abdullah</h2>
              <span className={styles.amp}>&amp;</span>
              <h2 className={styles.name}>Khadeejath Najifa</h2>
            </div>
            <div className={styles.chips}>
              <div className={styles.chip}><span>🕌</span> D/O Abdul Majeed &amp; Hajirabi TK</div>
              <div className={styles.chip}><span>🏡</span> Nadha Fathima Manzil, Thalangara</div>
            </div>
            <div className={styles.timeWrap}>
              <div className={styles.timeLabel}>Nikah Ceremony</div>
              <div className={styles.timeScript}>04:30 PM</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}