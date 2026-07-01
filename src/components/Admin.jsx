import { useState, useEffect } from 'react'
import { supabase } from '../supabase'
import styles from './Admin.module.css'

const ADMIN_PASSWORD = 'nikah2026'

export default function Admin() {
  const [authed, setAuthed]     = useState(false)
  const [password, setPassword] = useState('')
  const [rsvps, setRsvps]       = useState([])
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState(null)
  const [filter, setFilter]     = useState('all')

  const login = () => {
    if (password === ADMIN_PASSWORD) setAuthed(true)
    else alert('Wrong password!')
  }

  const fetchRSVPs = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('rsvp')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) { setError(error.message); setLoading(false); return }
    setRsvps(data)
    setLoading(false)
  }

  useEffect(() => { if (authed) fetchRSVPs() }, [authed])

  // Stats
  const attending    = rsvps.filter(r => r.attending === 'yes')
  const notAttending = rsvps.filter(r => r.attending === 'no')
  const both         = rsvps.filter(r => r.ceremony === 'both')
  const shahabas     = rsvps.filter(r => r.ceremony === 'shahabas')
  const sharafath    = rsvps.filter(r => r.ceremony === 'sharafath')

  const filtered = filter === 'all' ? rsvps
    : filter === 'yes' ? attending
    : filter === 'no'  ? notAttending
    : rsvps.filter(r => r.ceremony === filter)

  if (!authed) return (
    <div className={styles.loginWrap}>
      <img src="/corner-floral.png" className={styles.loginFloral} alt="" />
      <div className={styles.loginCard}>
        <div className={styles.loginTitle}>Admin Access</div>
        <div className={styles.loginScript}>Wedding Dashboard</div>
        <input
          className={styles.loginInput}
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && login()}
        />
        <button className={styles.loginBtn} onClick={login}>Enter 🌹</button>
      </div>
    </div>
  )

  return (
    <div className={styles.wrap}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerTitle}>Wedding RSVP Dashboard</div>
        <div className={styles.headerSub}>02 · 08 · 2026 · The Flora by Sunflower</div>
        <button className={styles.refreshBtn} onClick={fetchRSVPs}>↻ Refresh</button>
      </div>

      {/* Stats cards */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard} onClick={() => setFilter('all')}>
          <div className={styles.statNum}>{rsvps.length}</div>
          <div className={styles.statLabel}>Total Responses</div>
        </div>
        <div className={`${styles.statCard} ${styles.statGreen}`} onClick={() => setFilter('yes')}>
          <div className={styles.statNum}>{attending.length}</div>
          <div className={styles.statLabel}>✓ Attending</div>
        </div>
        <div className={`${styles.statCard} ${styles.statRed}`} onClick={() => setFilter('no')}>
          <div className={styles.statNum}>{notAttending.length}</div>
          <div className={styles.statLabel}>✗ Not Attending</div>
        </div>
        <div className={styles.statCard} onClick={() => setFilter('both')}>
          <div className={styles.statNum}>{both.length}</div>
          <div className={styles.statLabel}>Both Ceremonies</div>
        </div>
        <div className={styles.statCard} onClick={() => setFilter('shahabas')}>
          <div className={styles.statNum}>{shahabas.length}</div>
          <div className={styles.statLabel}>Shahabas & Fathimath</div>
        </div>
        <div className={styles.statCard} onClick={() => setFilter('sharafath')}>
          <div className={styles.statNum}>{sharafath.length}</div>
          <div className={styles.statLabel}>Sharafath & Khadeejath</div>
        </div>
      </div>

      {/* Filter indicator */}
      {filter !== 'all' && (
        <div className={styles.filterBar}>
          Showing: <strong>{filter}</strong>
          <button className={styles.clearFilter} onClick={() => setFilter('all')}>✕ Clear</button>
        </div>
      )}

      {/* Table */}
      {loading ? (
        <div className={styles.loading}>Loading responses... 🌹</div>
      ) : error ? (
        <div className={styles.errorMsg}>Error: {error}</div>
      ) : filtered.length === 0 ? (
        <div className={styles.empty}>No responses yet 🌿</div>
      ) : (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Ceremony</th>
                <th>Attending</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r, i) => (
                <tr key={r.id} className={r.attending === 'yes' ? styles.rowYes : styles.rowNo}>
                  <td>{i + 1}</td>
                  <td className={styles.nameCell}>{r.name}</td>
                  <td>{r.phone || '—'}</td>
                  <td>{
                    r.ceremony === 'both'      ? 'Both' :
                    r.ceremony === 'shahabas'  ? 'Shahabas & Fathimath' :
                    r.ceremony === 'sharafath' ? 'Sharafath & Khadeejath' :
                    r.ceremony || '—'
                  }</td>
                  <td>
                    <span className={r.attending === 'yes' ? styles.badgeYes : styles.badgeNo}>
                      {r.attending === 'yes' ? '✓ Attending' : '✗ Not Attending'}
                    </span>
                  </td>
                  <td className={styles.dateCell}>
                    {new Date(r.created_at).toLocaleDateString('en-GB', {
                      day: '2-digit', month: 'short', year: 'numeric',
                      hour: '2-digit', minute: '2-digit'
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
