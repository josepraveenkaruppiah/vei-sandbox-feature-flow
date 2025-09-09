import { useEffect, useState } from 'react'

export default function App() {
  const [items, setItems] = useState([])
  const [title, setTitle] = useState('')
  const [time, setTime] = useState('')

  async function load() {
    try {
      const res = await fetch('/api/appointments')
      const data = await res.json()
      setItems(data)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    load()
  }, [])

  async function add(e) {
    e.preventDefault()
    if (!title || !time) return
    const res = await fetch('/api/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, time })
    })
    if (res.ok) {
      setTitle('')
      setTime('')
      load()
    }
  }

  return (
    <div style={{ maxWidth: 640, margin: '40px auto', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Appointments</h1>
      <form onSubmit={add} style={{ display: 'grid', gap: 12, marginBottom: 24 }}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="datetime-local"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul style={{ padding: 0, listStyle: 'none', display: 'grid', gap: 8 }}>
        {items.map((i) => (
          <li key={i.id} style={{ border: '1px solid #ddd', padding: 12, borderRadius: 8 }}>
            <strong>{i.title}</strong>
            <div style={{ fontSize: 12, opacity: 0.8 }}>{i.time}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}