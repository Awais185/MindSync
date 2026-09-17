import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const links = [
  { to: '/',             label: 'Home' },
  { to: '/app',          label: 'MindSync App' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/features',     label: 'Features' },
  { to: '/pricing',      label: 'Pricing' },
  { to: '/about',        label: 'About Us' },
  { to: '/contact',      label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'bg-white/90 backdrop-blur border-b border-slate-100' : 'bg-transparent'}`}>
      <div className="container-x flex items-center justify-between h-16 sm:h-20">
        <Link to="/" aria-label="MindSync home">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}
              className={({ isActive }) => `px-3 py-2 text-sm font-medium rounded-full transition ${isActive ? 'text-brand-700 bg-brand-50' : 'text-ink-700 hover:text-brand-700 hover:bg-slate-50'}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/login" className="text-sm font-medium text-ink-700 hover:text-brand-700">Log In</Link>
          <Link to="/signup" className="btn-primary px-5 py-2.5 text-sm">Get Started</Link>
        </div>

        <button className="lg:hidden w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          {open ? <X size={18}/> : <Menu size={18}/>}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden">
            <div className="container-x py-4 flex flex-col gap-1">
              {links.map(l => (
                <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={() => setOpen(false)}
                  className={({ isActive }) => `px-4 py-3 rounded-xl text-sm font-medium ${isActive ? 'text-brand-700 bg-brand-50' : 'text-ink-700 hover:bg-slate-50'}`}>
                  {l.label}
                </NavLink>
              ))}
              <div className="flex gap-2 pt-2">
                <Link to="/login" onClick={() => setOpen(false)} className="btn-ghost flex-1 py-3">Log In</Link>
                <Link to="/signup" onClick={() => setOpen(false)} className="btn-primary flex-1 py-3">Get Started</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}