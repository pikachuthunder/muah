import { useState } from 'react'
import styles from './Envelope.module.css'

export default function Envelope({ onOpen }) {
  const [phase, setPhase] = useState('idle')

  const handleTap = () => {
    if (phase !== 'idle') return
    setPhase('ribbon')
    setTimeout(() => setPhase('curtain'), 900)
    setTimeout(() => { setPhase('done'); onOpen() }, 2600)
  }

  return (
    <div className={`${styles.stage} ${phase === 'done' ? styles.stageHide : ''}`} onClick={handleTap}>

      {/* Full screen garden background */}
      <img src="/garden-bg.png" className={styles.gardenBg} alt="" />

      {/* Dark overlay so text/envelope pops */}
      <div className={styles.overlay} />

      {/* Envelope card */}
      <div className={styles.envCard}>

        {/* Bow on top of envelope — fades/spins away on tap */}
        <img
          src="/bow.png"
          className={`${styles.bow} ${phase !== 'idle' ? styles.bowOpen : ''}`}
          alt=""
        />

        {/* Envelope body */}
        <div className={styles.envBody}>
          <div className={`${styles.envFlap} ${phase === 'curtain' || phase === 'done' ? styles.flapOpen : ''}`} />
          <div className={styles.envLeft} />
          <div className={styles.envRight} />
          <div className={styles.envBottom} />
          <div className={`${styles.envSeal} ${phase !== 'idle' ? styles.sealHide : ''}`}>✦</div>

          {/* Letter rising out */}
          <div className={`${styles.letter} ${phase === 'curtain' || phase === 'done' ? styles.letterOpen : ''}`}>
            <div className={styles.letterScript}>You're Invited</div>
            <div className={styles.letterDivider}>✦</div>
            <p className={styles.letterText}>
              To witness the blessed Nikah of<br />
              <strong>Shahabas KP &amp; Fathimath Afhida</strong><br />
              and<br />
              <strong>Sharafath Abdullah &amp; Khadeejath Najifa</strong>
            </p>
            <div className={styles.letterDate}>02 · 08 · 2026</div>
          </div>
        </div>
      </div>

      {/* Tap hint */}
      <div className={`${styles.tapHint} ${phase !== 'idle' ? styles.tapHide : ''}`}>
        <span>💌</span>
        <span>Tap to open your invitation</span>
      </div>
    </div>
  )
}
