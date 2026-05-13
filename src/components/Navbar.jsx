import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'cta']
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(id)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000,
      padding: scrolled ? '12px 40px' : '16px 40px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(10,10,15,0.9)' : 'rgba(10,10,15,0.7)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border-color)',
      transition: 'all 0.4s ease'
    }}>
      <div onClick={() => scrollTo('hero')} style={{
        fontSize: 20, fontWeight: 700, letterSpacing: '-0.5px', cursor: 'pointer',
        background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
      }}>
        Sandeep<span style={{ fontWeight: 300, opacity: 0.7 }}>.dev</span>
      </div>

      <ul style={{ display: 'flex', gap: 32, listStyle: 'none' }}>
        {[['hero','Home'],['about','About'],['skills','Skills'],['projects','Projects'],['experience','Experience'],['cta','Contact']].map(([id, label]) => (
          <li key={id}>
            <a onClick={() => scrollTo(id)} style={{
              color: activeSection === id ? 'var(--accent-blue)' : 'var(--text-secondary)',
              textDecoration: 'none', fontSize: 13, fontWeight: 500,
              letterSpacing: '0.5px', textTransform: 'uppercase',
              cursor: 'pointer', transition: 'color 0.3s'
            }}>{label}</a>
          </li>
        ))}
      </ul>

      <button onClick={() => scrollTo('cta')} style={{
        padding: '8px 20px', border: '1px solid var(--accent-blue)',
        color: 'var(--accent-blue)', background: 'transparent', borderRadius: 6,
        fontSize: 13, fontWeight: 500, cursor: 'pointer',
        fontFamily: 'Inter, sans-serif', letterSpacing: '0.5px',
        transition: 'all 0.3s'
      }}
        onMouseEnter={e => { e.target.style.background = 'var(--accent-blue)'; e.target.style.color = '#fff' }}
        onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent-blue)' }}
      >
        Get in Touch
      </button>
    </nav>
  )
}
