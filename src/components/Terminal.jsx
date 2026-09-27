import { useEffect, useState } from 'react'

const lines = [
  'focus: data + machine learning',
  'building: LifeOS',
  'location: El Paso, Texas',
]

export default function Terminal() {
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible((v) => (v < lines.length ? v + 1 : v))
    }, 450)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="terminal">
      <div className="terminal-bar">
        <div className="window-dots"><i /><i /><i /></div>
        <span>status.sh</span>
      </div>
      <div className="terminal-body">
        {lines.slice(0, visible).map((line) => {
          const [key, value] = line.split(': ')
          return (
            <p key={line}>
              <span className="prompt">&gt;</span> {key}: <strong>{value}</strong>
            </p>
          )
        })}
        <span className="cursor">_</span>
      </div>
    </div>
  )
}
