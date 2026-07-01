import { useState } from 'react'
import { supabase } from '../supabase'
import styles from './RSVP.module.css'

export default function RSVP() {
  const [form, setForm] = useState({ name: '', phone: '', ceremony: '', attending: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const update = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async () => {
    if (!form.name.trim()) { alert('Please enter your name 🌹'); return }
    if (!form.attending)   { alert('Please select your attendance 🌹'); return }

    setLoading(true)
    const { error } = await supabase.from('rsvp').insert([{
      name:      form.name.trim(),
      phone:     form.phone.trim() || null,
      ceremony:  form.ceremony || 'not specified',
      attending: form.attending,
    }])

    if (error) {
      console.error(error)
      alert('Something went wrong, please try again.')
      setLoading(false)
      return
    }

    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section className={styles.section} id="rsvp">
      <img src="/vertical-spray.png" className={styles.sideLeft}  alt="" />
      <img src="/vertical-spray.png" className={styles.sideRight} alt="" />
      <div className={styles.inner}>
        <div className={styles.eyebrow}>your presence is our joy</div>
        <div className={styles.title}>Will You Join Us?</div>
        <div className={styles.card}>
          <img src="/corner-floral.png" className={styles.cornerTL} alt="" />
          <img src="/corner-floral.png" className={styles.cornerBR} alt="" />
          {submitted ? (
            <div className={styles.success}>
              <div className={styles.successScript}>Thank you!</div>
              <p className={styles.successText}>
                May Allah bless this beautiful celebration.<br />
                We look forward to seeing you on 02 · 08 · 2026 🌹
              </p>
            </div>
          ) : (
            <div className={styles.formInner}>
              <input
                className={styles.field} type="text"
                placeholder="Your Full Name"
                value={form.name} onChange={e => update('name', e.target.value)}
              />
              <input
                className={styles.field} type="tel"
                placeholder="Phone Number (optional)"
                value={form.phone} onChange={e => update('phone', e.target.value)}
              />
              <select className={styles.field} value={form.ceremony} onChange={e => update('ceremony', e.target.value)}>
                <option value="">Attending which ceremony?</option>
                <option value="both">Both Ceremonies</option>
                <option value="shahabas">Shahabas &amp; Fathimath (01:30 PM)</option>
                <option value="sharafath">Sharafath &amp; Khadeejath (04:30 PM)</option>
              </select>
              <div className={styles.radioGroup}>
                {[['yes', '✓ Joyfully Attending'], ['no', '✗ Unable to Attend']].map(([val, label]) => (
                  <label key={val} className={`${styles.radioLabel} ${form.attending === val ? styles.radioActive : ''}`}>
                    <input type="radio" name="attending" value={val} checked={form.attending === val} onChange={() => update('attending', val)} style={{ display: 'none' }} />
                    {label}
                  </label>
                ))}
              </div>
              <button className={styles.submit} onClick={handleSubmit} disabled={loading}>
                {loading ? 'Sending...' : 'Send My Response 💌'}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}