// setup.js — MindSync Project Generator
// Run: node setup.js

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();

function write(filePath, content) {
  const full = path.join(ROOT, filePath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content.trimStart(), 'utf8');
  console.log('  ✓', filePath);
}

function folder(p) {
  fs.mkdirSync(path.join(ROOT, p), { recursive: true });
}

console.log('\n🚀 Generating MindSync project...\n');

// ---------- FOLDERS ----------
['src','src/components','src/pages','src/data','public'].forEach(folder);

// ---------- package.json ----------
write('package.json', `
{
  "name": "mindsync-website",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "framer-motion": "^11.3.19",
    "lucide-react": "^0.427.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.40",
    "tailwindcss": "^3.4.7",
    "vite": "^5.4.0"
  }
}
`);

// ---------- vite.config.js ----------
write('vite.config.js', `
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { port: 3000, open: true }
})
`);

// ---------- tailwind.config.js ----------
write('tailwind.config.js', `
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eef4ff',
          100: '#dce7ff',
          200: '#b9ceff',
          300: '#8babff',
          400: '#5c82ff',
          500: '#3b5bff',
          600: '#2540e6',
          700: '#1c33b8',
          800: '#182b91',
          900: '#152672',
        },
        navy: {
          900: '#0a1230',
          800: '#0d1838',
          700: '#111f45',
        },
        ink: {
          900: '#0b1020',
          700: '#1a2240',
          500: '#4a5578',
          400: '#6b7493',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(28, 51, 184, 0.15)',
        card: '0 20px 40px -20px rgba(13, 24, 56, 0.15)',
        glow: '0 0 40px rgba(59, 91, 255, 0.25)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-med': 'float 4.5s ease-in-out infinite',
        'float-fast': 'float 3.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
`);

// ---------- postcss.config.js ----------
write('postcss.config.js', `
export default {
  plugins: { tailwindcss: {}, autoprefixer: {} }
}
`);

// ---------- .gitignore ----------
write('.gitignore', `
node_modules
dist
dist-ssr
*.local
.DS_Store
.vscode/*
!.vscode/extensions.json
`);

// ---------- index.html ----------
write('index.html', `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <meta name="theme-color" content="#2540e6" />
    <meta name="description" content="MindSync — AI-powered preventive digital wellbeing & mental-health monitoring platform." />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet">
    <title>MindSync — Because Your Mental Health Matters</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`);

// ---------- src/index.css ----------
write('src/index.css', `
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }
  body {
    @apply bg-white text-ink-900 font-sans antialiased;
    overflow-x: hidden;
  }
  h1, h2, h3 { @apply tracking-tight; }
}

@layer components {
  .container-x { @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8; }
  .btn {
    @apply inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200
           focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:ring-offset-2;
  }
  .btn-primary {
    @apply btn bg-brand-600 text-white hover:bg-brand-700 shadow-soft;
  }
  .btn-ghost {
    @apply btn bg-white text-ink-900 border border-slate-200 hover:border-brand-300 hover:text-brand-700;
  }
  .chip {
    @apply inline-flex items-center gap-2 rounded-full bg-brand-50 text-brand-700 px-3 py-1 text-xs font-semibold tracking-wider uppercase;
  }
  .card {
    @apply bg-white rounded-2xl border border-slate-100 shadow-card;
  }
}

.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

.marquee-mask {
  mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
}
`);

// ---------- src/main.jsx ----------
write('src/main.jsx', `
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
`);

// ---------- src/App.jsx ----------
write('src/App.jsx', `
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import HowItWorks from './pages/HowItWorks'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import MindSyncApp from './pages/MindSyncApp'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/"             element={<Home />} />
          <Route path="/about"        element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/features"     element={<Features />} />
          <Route path="/pricing"      element={<Pricing />} />
          <Route path="/app"          element={<MindSyncApp />} />
          <Route path="/contact"      element={<Contact />} />
          <Route path="/login"        element={<Login />} />
          <Route path="/signup"       element={<Signup />} />
          <Route path="*"             element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
`);

// ---------- src/components/ScrollToTop.jsx ----------
write('src/components/ScrollToTop.jsx', `
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}
`);

// ---------- src/components/Navbar.jsx ----------
write('src/components/Navbar.jsx', `
import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { to: '/',             label: 'Home' },
  { to: '/about',        label: 'About Us' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/features',     label: 'Features' },
  { to: '/pricing',      label: 'Pricing' },
  { to: '/app',          label: 'MindSync App' },
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
    <header className={\`sticky top-0 z-50 transition-all \${scrolled ? 'bg-white/90 backdrop-blur border-b border-slate-100' : 'bg-transparent'}\`}>
      <div className="container-x flex items-center justify-between h-16 sm:h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-glow">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9 6 9-6"/>
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
            </svg>
          </span>
          <span className="font-bold text-lg text-ink-900">MindSync</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}
              className={({ isActive }) => \`px-3 py-2 text-sm font-medium rounded-full transition \${isActive ? 'text-brand-700 bg-brand-50' : 'text-ink-700 hover:text-brand-700 hover:bg-slate-50'}\`}>
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
                  className={({ isActive }) => \`px-4 py-3 rounded-xl text-sm font-medium \${isActive ? 'text-brand-700 bg-brand-50' : 'text-ink-700 hover:bg-slate-50'}\`}>
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
`);

// ---------- src/components/Footer.jsx ----------
write('src/components/Footer.jsx', `
import { Link } from 'react-router-dom'
import { Twitter, Linkedin, Share2, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white mt-0">
      <div className="container-x py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m3 9 9 6 9-6"/>
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
                </svg>
              </span>
              <span className="font-bold text-lg">MindSync</span>
            </div>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Because your mental health matters. An AI-powered preventive digital wellbeing &amp; mental-health monitoring platform.
            </p>
            <div className="mt-5 flex gap-2">
              {[Twitter, Linkedin, Share2, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full border border-white/15 text-white/80 flex items-center justify-center hover:bg-white/10 transition">
                  <Icon size={15}/>
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Platform" items={[
            ['Home','/'],
            ['About Us','/about'],
            ['How It Works','/how-it-works'],
            ['Features','/features'],
          ]}/>
          <FooterCol title="Product" items={[
            ['Pricing','/pricing'],
            ['MindSync App','/app'],
            ['Contact','/contact'],
            ['Login','/login'],
          ]}/>

          <div>
            <div className="text-sm font-semibold tracking-wider text-white/90 uppercase">Stay in Sync</div>
            <p className="mt-4 text-sm text-white/70">Get occasional wellbeing insights and product updates.</p>
            <form onSubmit={e => e.preventDefault()} className="mt-4 flex gap-2">
              <input type="email" placeholder="you@email.com" className="flex-1 rounded-xl bg-white/5 border border-white/15 px-3 py-2.5 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-500/50"/>
              <button className="rounded-xl bg-brand-600 hover:bg-brand-700 px-4 py-2.5 text-sm font-semibold">Join</button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <div>© {new Date().getFullYear()} MindSync — a NEXORA TECH project. All rights reserved.</div>
          <div className="flex gap-5">
            <Link to="#" className="hover:text-white">Privacy Policy</Link>
            <Link to="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, items }) {
  return (
    <div>
      <div className="text-sm font-semibold tracking-wider text-white/90 uppercase">{title}</div>
      <ul className="mt-4 space-y-2.5">
        {items.map(([label, to]) => (
          <li key={to}>
            <Link to={to} className="text-sm text-white/70 hover:text-white transition">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
`);

// ---------- src/components/SectionHeading.jsx ----------
write('src/components/SectionHeading.jsx', `
export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignCls = align === 'left' ? 'text-left' : 'text-center mx-auto'
  return (
    <div className={\`max-w-3xl mb-10 sm:mb-14 \${alignCls}\`}>
      {eyebrow && (
        <span className="chip mb-4 inline-flex">{eyebrow}</span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 leading-tight">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-ink-500 text-base sm:text-lg leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}
`);

// ---------- src/components/Button.jsx ----------
write('src/components/Button.jsx', `
import { Link } from 'react-router-dom'

const variants = {
  primary: 'btn-primary',
  ghost:   'btn-ghost',
  white:   'btn bg-white text-brand-700 hover:bg-slate-100',
  dark:    'btn bg-navy-900 text-white hover:bg-navy-800',
}

export default function Button({ to, href, variant = 'primary', className = '', children, ...rest }) {
  const cls = \`\${variants[variant] || variants.primary} \${className}\`
  if (to)  return <Link to={to} className={cls} {...rest}>{children}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>
  return <button className={cls} {...rest}>{children}</button>
}
`);

// ---------- src/components/Marquee.jsx ----------
write('src/components/Marquee.jsx', `
import { motion } from 'framer-motion'

export default function Marquee({ children, speed = 40, reverse = false }) {
  return (
    <div className="marquee-mask relative overflow-hidden py-2">
      <motion.div
        className="flex gap-5 w-max"
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
      >
        <div className="flex gap-5 shrink-0">{children}</div>
        <div className="flex gap-5 shrink-0">{children}</div>
      </motion.div>
    </div>
  )
}
`);

// ---------- src/components/AnimatedPhone.jsx ----------
write('src/components/AnimatedPhone.jsx', `
import { motion } from 'framer-motion'
import { Activity, Heart, Moon, TrendingUp, AlertTriangle, Battery } from 'lucide-react'

export default function AnimatedPhone({ className = '' }) {
  return (
    <div className={\`relative \${className}\`}>
      <div className="absolute -inset-10 bg-gradient-to-tr from-brand-500/20 via-brand-300/10 to-transparent blur-3xl rounded-full" />

      <FloatCard className="-left-6 sm:-left-10 top-24" delay={0.4}>
        <Row icon={<Heart size={14}/>} iconCls="bg-rose-50 text-rose-500" label="STRESS" value="78%" />
      </FloatCard>
      <FloatCard className="-right-6 sm:-right-10 top-40" delay={0.6} variant="rise">
        <Row icon={<AlertTriangle size={14}/>} iconCls="bg-amber-50 text-amber-500" label="ANXIETY" value="Moderate" small />
      </FloatCard>
      <FloatCard className="-right-4 sm:-right-12 bottom-32" delay={0.9}>
        <Row icon={<TrendingUp size={14}/>} iconCls="bg-emerald-50 text-emerald-600" label="MOOD" value="Improving" small valueCls="text-emerald-600" />
      </FloatCard>
      <FloatCard className="-left-4 sm:-left-8 bottom-16" delay={1.1} variant="rise">
        <Row icon={<Moon size={14}/>} iconCls="bg-brand-50 text-brand-600" label="SCREEN" value="4h 12m" small />
      </FloatCard>

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative w-[260px] sm:w-[300px] aspect-[9/19] rounded-[2.5rem] bg-navy-900 p-2 shadow-2xl border border-white/10 mx-auto"
      >
        <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-brand-600/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative w-full h-full rounded-[2rem] bg-white overflow-hidden">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-navy-900 rounded-full z-10" />

          <div className="p-4 pt-10 h-full flex flex-col gap-3 overflow-hidden">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] text-ink-400">Good Evening</div>
                <div className="text-sm font-bold text-ink-900">Your daily sync.</div>
              </div>
              <div className="w-8 h-8 rounded-full bg-brand-100" />
            </div>

            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 text-white p-4 relative overflow-hidden"
            >
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-white/10" />
              <div className="text-[10px] font-semibold tracking-wider opacity-80">DAILY WELLBEING</div>
              <div className="text-3xl font-bold mt-1">84</div>
              <div className="text-[11px] opacity-80 mt-0.5">Optimal range</div>
            </motion.div>

            <div className="grid grid-cols-2 gap-2">
              <Tile icon={<Battery size={12}/>} label="Screen" value="4h 12m" />
              <Tile icon={<Activity size={12}/>} label="Focus" value="High" />
              <Tile icon={<Heart size={12}/>} label="Mood" value="Steady" />
              <Tile icon={<Moon size={12}/>} label="Sleep" value="7h 20m" />
            </div>

            <div className="rounded-2xl border border-slate-100 p-3 mt-auto">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center">
                  <AlertTriangle size={12}/>
                </span>
                <div className="text-[11px] font-semibold text-ink-900">AI Insight</div>
              </div>
              <p className="text-[11px] text-ink-500 mt-1.5 leading-snug">
                Late-night scrolling detected. Try a wind-down routine.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function FloatCard({ children, className = '', delay = 0, variant = 'drop' }) {
  const amp = variant === 'rise' ? -8 : 8
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={\`absolute z-20 bg-white rounded-xl shadow-card border border-slate-100 px-3 py-2 \${className}\`}
    >
      <motion.div
        animate={{ y: [0, amp, 0] }}
        transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

function Row({ icon, iconCls, label, value, small, valueCls = 'text-ink-900' }) {
  return (
    <div className="flex items-center gap-2">
      <span className={\`w-7 h-7 rounded-lg flex items-center justify-center \${iconCls}\`}>{icon}</span>
      <div>
        <div className="text-[10px] text-ink-400 font-semibold tracking-wider">{label}</div>
        <div className={\`\${small ? 'text-sm' : 'text-lg'} font-bold leading-none mt-0.5 \${valueCls}\`}>{value}</div>
      </div>
    </div>
  )
}

function Tile({ icon, label, value }) {
  return (
    <div className="rounded-xl border border-slate-100 p-2">
      <div className="flex items-center gap-1 text-ink-400 text-[10px] font-semibold tracking-wider">
        {icon} {label.toUpperCase()}
      </div>
      <div className="text-xs font-bold text-ink-900 mt-0.5">{value}</div>
    </div>
  )
}
`);

// ---------- src/data/content.js ----------
write('src/data/content.js', `
export const problems = [
  { title: 'Mobile Addiction in Children', desc: 'Excessive mobile use can affect children’s habits, attention, sleep, and development.', accent: 'text-rose-500', bg: 'bg-rose-50' },
  { title: 'Brain Growth & Development', desc: 'Constant digital stimulation and unhealthy screen habits may negatively influence healthy cognitive development in children.', accent: 'text-amber-500', bg: 'bg-amber-50' },
  { title: 'Stress & Anxiety in Young People', desc: 'Academic, social, digital, and lifestyle pressures are increasing stress and anxiety among young people.', accent: 'text-violet-500', bg: 'bg-violet-50' },
  { title: 'Depression & Mental Pressure', desc: 'Social media isolation, academic pressure, and daily digital stress contribute to emotional and mental-health challenges.', accent: 'text-sky-500', bg: 'bg-sky-50' },
  { title: 'Late-Night Screen Exposure', desc: 'Blue-light exposure and late-night activity disrupt sleep cycles and reduce emotional regulation.', accent: 'text-indigo-500', bg: 'bg-indigo-50' },
  { title: 'Social Isolation', desc: 'Digital overuse can replace real-world connection, reducing emotional support networks.', accent: 'text-emerald-500', bg: 'bg-emerald-50' },
  { title: 'Reduced Productivity', desc: 'Fragmented attention and constant notifications reduce focus, learning, and academic output.', accent: 'text-cyan-500', bg: 'bg-cyan-50' },
  { title: 'Detected Too Late', desc: 'Traditional mental-health assessment depends on self-reporting — warning signs are often missed early.', accent: 'text-fuchsia-500', bg: 'bg-fuchsia-50' },
  { title: 'Screen Time ≠ Behaviour', desc: 'Total screen time cannot explain how someone uses their device or how behaviour is changing.', accent: 'text-blue-500', bg: 'bg-blue-50' },
]

export const research = [
  { org: 'WHO Europe • 2024', value: '11%', tag: '7% → 11%', title: 'Problematic Digital & Social Media Use', desc: 'WHO reported that problematic social media use among adolescents increased from 7% in 2018 to 11% in 2022.' },
  { org: 'UNICEF Innocenti • 2025', value: '1.3 Billion', tag: 'Children affected', title: 'Children’s Digital Wellbeing & Online Exposure', desc: 'UNICEF reports that around 1.3 billion school-aged children are affected by online exposure, with mental-health outcomes depending on how technology is used.' },
  { org: 'American Psychological Association • 2024', value: '41%', tag: '41% vs 23%', title: 'Social Media Overuse → Mental Health', desc: 'APA reported that 41% of teens with the highest social media use rated their overall mental health as poor or very poor.' },
  { org: 'U.S. Surgeon General • 2025', value: '2×', tag: 'Risk Increase', title: 'Excessive Social Media Use → Anxiety, Depression & Body Image Pressure', desc: 'Children and adolescents who spend more than 3 hours a day on social media face approximately double the risk of experiencing mental-health problems.' },
]

export const steps = [
  { n: '01', tag: 'STUDY', title: 'MindSync 7-Day Working', desc: 'MindSync conducts a structured 7-day study observing your digital and emotional baseline patterns.' },
  { n: '02', tag: 'TRACKING', title: 'Digital Behaviour Study', desc: 'MindSync studies everyday digital behavior including app usage, switching frequency, and screen time.' },
  { n: '03', tag: 'UNDERSTAND', title: 'Deep Facial Study & Mood', desc: 'With appropriate user consent, MindSync analyses facial expressions to correlate emotional states.' },
  { n: '04', tag: 'ANALYSIS', title: 'AI Analysis', desc: 'MindSync combines collected digital signals through AI, ML, and Deep Learning models.' },
  { n: '05', tag: 'RESULT', title: '7-Day Report', desc: 'After the 7-day study, MindSync generates a personalized progress report detailing your cognitive baseline.' },
  { n: '06', tag: 'RECOMMENDATION', title: 'Recommendation Engine', desc: 'After analyzing the user’s patterns, MindSync provides personalized AI-based recommendations.' },
]

export const faqs = [
  { q: 'How does billing work?', a: 'Subscriptions are billed automatically on a monthly basis. You will receive an invoice via email before each charge.' },
  { q: 'Can I cancel anytime?', a: 'Yes, you can cancel your subscription at any time from your account settings. You will retain access until the end of your billing cycle.' },
  { q: 'Is there a long-term contract?', a: 'No, all our plans are month-to-month. There are no cancellation fees or long-term commitments required.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, debit cards, and UPI payments for seamless transactions.' },
]

export const contactFaqs = [
  { q: 'Do you offer enterprise plans?', a: 'Yes — we offer enterprise-grade plans with dedicated SLAs, custom onboarding, and priority support.' },
  { q: 'Where is my data stored and is it HIPAA-compliant?', a: 'Data is stored in region-locked, encrypted cloud infrastructure. MindSync is designed with HIPAA and ISO 27001 principles in mind.' },
  { q: 'How does MindSync protect user privacy?', a: 'All on-device signals are anonymized. Facial signals are processed with user consent and never sold or shared with third parties.' },
  { q: 'How quickly does technical support respond?', a: 'Enterprise SLAs target average resolution under 2 hours. Standard support responds within 24 hours.' },
]

export const features = {
  telemetry: [
    { title: 'Granular Screen Time Tracking', desc: 'Break down usage by hour, app, and category, revealing patterns behind screen time.' },
    { title: 'App-Level Deep Telemetry', desc: 'Understand engagement with individual apps — how often, how long, and when.' },
    { title: 'Interaction Velocity Study', desc: 'Detects rapid switching, impulsive scrolling, and fatigue-driven engagement loops.' },
    { title: 'Usage Sessions & Frequency', desc: 'Micro-session analysis — how often engagement spirals into long sessions.' },
    { title: 'Circadian-Late-Night Activities', desc: 'Flags late-night activity, especially blue-light exposure, that disrupts sleep cycles.' },
    { title: 'Cognitive Category', desc: 'Classifies digital activities by cognitive load — focus, social, entertainment, learning.' },
  ],
  wellbeing: [
    { title: 'Emotional Wellbeing Tracking', desc: 'Tracks mood and emotional shifts through interaction patterns and emotional signals.' },
    { title: 'Stress Indicators & Cadence', desc: 'Detects stress from switching, typing speed, and interaction cadence.' },
    { title: 'Compulsive Checking Detection', desc: 'Recognizes repeated opening of apps without meaningful purpose.' },
    { title: 'Withdrawal & Lethargy Markers', desc: 'Notices decreases in interaction, slower response times, and reduced engagement.' },
    { title: 'Longitudinal Mood Trends', desc: 'Follows emotional trajectories over weeks to identify persistent patterns.' },
    { title: 'Proprietary Wellbeing Score', desc: 'A single, understandable 0–100 wellbeing index, blending behavior, mood, and emotional signals.' },
  ],
  intelligence: [
    { title: 'AI Behavioral Analysis', desc: 'Continuously monitors behavioral patterns and surfaces meaningful changes.' },
    { title: 'Adaptive Recommendations', desc: 'Real-time suggestions that adapt to your digital habits and wellbeing.' },
    { title: 'Digital Psychologist', desc: 'An AI companion offering guided check-ins, contextual support, and safe conversations.' },
    { title: 'Multi-Factor Pattern Detection', desc: 'Combines digital, emotional, and temporal signals for richer insights.' },
    { title: 'Weekly AI Synthesis', desc: 'A weekly narrative of your emotional journey and behavioral shifts.' },
    { title: 'Context-Aware Interventions', desc: 'Interventions triggered by context, not just time — real help when it matters.' },
  ],
  facial: [
    { title: 'Deep Facial Study', desc: 'Subtle muscle movement analysis is used to derive emotional signals.' },
    { title: 'Expression Analysis', desc: 'Micro-expressions detected across sessions and contexts.' },
    { title: 'Facial Action Units (AU)', desc: 'Maps Facial Action Units to correlate with emotional states.' },
    { title: 'Work Block Resonance', desc: 'Analyzes mood alignment with productive vs. distracted focus periods.' },
  ],
}
`);

// ---------- src/pages/Home.jsx ----------
write('src/pages/Home.jsx', `
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sparkles, ArrowRight, PlayCircle, Smartphone, Brain, Heart, ShieldCheck, Users, Activity, TrendingUp } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Marquee from '../components/Marquee'
import AnimatedPhone from '../components/AnimatedPhone'
import { problems, research } from '../data/content'

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemsSection />
      <ResearchSection />
      <PipelineSection />
    </>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-white">
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-brand-300/30 blur-3xl" />

      <div className="container-x relative pt-10 sm:pt-16 lg:pt-20 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <span className="chip mb-5 inline-flex">
              <Sparkles size={12}/> AI-Powered Digital &amp; Mental Wellbeing
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-ink-900">
              Understand Your <span className="text-brand-600">Digital Life.</span><br/>
              Improve Your Wellbeing.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-ink-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
              MindSync — More than just screen time or activity tracking. MindSync uses AI to help you recognize unhealthy digital habits, understand stress and emotional patterns, and build a healthier daily life.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
              <Link to="/signup" className="btn-primary px-6 py-3 w-full sm:w-auto">
                Get Started <ArrowRight size={16}/>
              </Link>
              <Link to="/how-it-works" className="btn-ghost px-6 py-3 w-full sm:w-auto">
                <PlayCircle size={16}/> Explore MindSync
              </Link>
            </div>
            <div className="mt-7 flex items-center gap-3 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-brand-400 to-brand-600" />
                ))}
              </div>
              <div className="text-sm text-ink-500">
                <span className="font-semibold text-ink-900">10k+</span> users finding balance
              </div>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2 flex justify-center">
            <AnimatedPhone />
          </div>
        </div>
      </div>
    </section>
  )
}

function ProblemsSection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-brand-50/40 overflow-hidden">
      <div className="container-x">
        <SectionHeading
          eyebrow="PROBLEMS WE FACE TODAY"
          title="Real problems of today’s digital generation."
          subtitle="Nine patterns that silently shape mental health — and that traditional screen-time tools fail to see."
        />
      </div>

      <Marquee speed={45}>
        {problems.map((p, i) => <ProblemCard key={i} {...p} />)}
      </Marquee>
      <div className="h-4" />
      <Marquee speed={55} reverse>
        {[...problems].reverse().map((p, i) => <ProblemCard key={i} {...p} />)}
      </Marquee>
    </section>
  )
}

function ProblemCard({ title, desc, accent, bg }) {
  return (
    <div className="w-[260px] sm:w-[300px] shrink-0 bg-white rounded-2xl border border-slate-100 shadow-soft p-5">
      <div className={\`w-10 h-10 rounded-xl \${bg} flex items-center justify-center mb-4\`}>
        <Heart size={16} className={accent} />
      </div>
      <h3 className="text-base font-semibold text-ink-900 leading-snug">{title}</h3>
      <p className="text-sm text-ink-500 mt-2 leading-relaxed">{desc}</p>
    </div>
  )
}

function ResearchSection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-50/50 via-white to-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="RESEARCH BEHIND THE PROBLEM"
          title="Backed by leading global health organizations."
          subtitle="The challenges MindSync addresses are supported by research from WHO, UNICEF, APA, and the U.S. Surgeon General."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {research.map((r, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="card p-6 sm:p-8"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center rounded-full bg-brand-50 text-brand-700 px-3 py-1 text-xs font-semibold">{r.org}</span>
                <span className="text-xs text-ink-400 font-medium">{r.tag}</span>
              </div>
              <div className="mt-5 flex items-end gap-3">
                <div className="text-4xl sm:text-5xl font-bold text-ink-900">{r.value}</div>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-ink-900">{r.title}</h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">{r.desc}</p>
              <div className="mt-5 pt-4 border-t border-slate-100">
                <span className="text-sm font-medium text-brand-700 inline-flex items-center gap-1">
                  View Research <ArrowRight size={14}/>
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function PipelineSection() {
  const steps = [
    { icon: Smartphone, label: 'Digital Behavior' },
    { icon: Brain, label: 'Behavioral Patterns' },
    { icon: Heart, label: 'Emotional Indicators' },
    { icon: Activity, label: 'Mental Wellbeing Insights' },
    { icon: ShieldCheck, label: 'Personalized Support' },
  ]
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-brand-50/60">
      <div className="container-x">
        <SectionHeading
          eyebrow="HOW MINDSYNC HELPS"
          title="Research shows the problem. MindSync helps you understand the patterns."
          subtitle="More than just screen-time tracking. Because your mental health matters."
        />
        <div className="relative card p-6 sm:p-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5 sm:gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-soft flex items-center justify-center">
                  <s.icon size={22} className="text-brand-600"/>
                </div>
                <div className="text-xs sm:text-sm font-medium text-ink-700 mt-3 leading-tight">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
`);

// ---------- src/pages/About.jsx ----------
write('src/pages/About.jsx', `
import { motion } from 'framer-motion'
import { Target, Eye, Rocket, Compass, Briefcase, Sparkles } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'

export default function About() {
  const team = [
    { name: 'Awais Ali Raza', role: 'CEO & Founder / MindSync Project Leader', bio: 'Leading the research & development of MindSync across application development and AI/ML, with a focus on transforming the MindSync vision into a practical digital wellbeing platform.', tags: ['AI/ML','Researcher','Full-Stack','Product Development'], initial: 'A' },
    { name: 'Azeem', role: 'Co Founder', bio: 'Responsible for building and maintaining the backend infrastructure that powers MindSync’s data, APIs, services, and application functionality.', tags: ['Backend','Django','REST APIs','Database'], initial: 'A' },
    { name: 'Dr Marrium Maqsood', role: 'Project Supervisor', bio: 'Contributing to MindSync’s project supervision including research validation and structural methodology.', tags: ['Project Supervision','Research','Guidance'], initial: 'M' },
  ]
  return (
    <>
      <section className="relative bg-gradient-to-b from-brand-50/60 via-white to-white pt-14 sm:pt-20 pb-16 sm:pb-24 overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-brand-200/30 blur-3xl" />
        <div className="container-x text-center max-w-3xl">
          <span className="chip">ABOUT US</span>
          <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 leading-tight">
            Building a healthier relationship between <span className="text-brand-600 italic font-serif">people, technology,</span> and mental wellbeing.
          </h1>
          <p className="mt-5 text-ink-500 text-base sm:text-lg">
            We believe the tools of the future shouldn’t just make us faster — they should help us think clearer, stress less, and live with greater intention.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-x grid grid-cols-1 md:grid-cols-2 gap-8">
          <MissionCard icon={<Target size={20}/>} title="Our Mission"
            text="To democratize access to cognitive wellness by creating intuitive, science-backed AI tools that help individuals understand, manage, and optimize their mental state."
            image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=80&auto=format&fit=crop" />
          <MissionCard icon={<Eye size={20}/>} title="Our Vision"
            text="A world where technology serves as a silent partner in mental clarity, gently guiding users toward flow states and emotional resilience without demanding constant attention or creating new dependencies."
            image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=80&auto=format&fit=crop" />
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-brand-50/40">
        <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="chip mb-4">BUILT BY NEXORA TECH</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink-900">A project by NEXORA TECH.</h2>
            <p className="mt-5 text-ink-500 leading-relaxed">
              MindSync is a project by NEXORA TECH, where technology is built to solve meaningful real-world problems. NEXORA TECH is a technology-driven startup focused on building innovative digital solutions that combine software, artificial intelligence, and modern technology to address real-world challenges.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <Stat icon={<Compass size={14}/>} n="01" label="Innovation" />
              <Stat icon={<Briefcase size={14}/>} n="02" label="Intelligence" />
              <Stat icon={<Sparkles size={14}/>} n="03" label="Impact" />
            </div>
            <div className="mt-6 text-sm text-ink-500">NEXORA TECH <span className="text-brand-600">↓</span> <span className="font-semibold text-ink-900">MindSync</span></div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-brand-600 to-brand-800 rounded-3xl p-10 sm:p-16 aspect-square max-w-md mx-auto w-full flex flex-col items-center justify-center text-white"
          >
            <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mb-6">
              <Rocket size={36}/>
            </div>
            <div className="text-2xl font-bold">NEXORA TECH</div>
            <div className="text-white/70 text-sm mt-2">Digital Solutions Lab</div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="THE MINDS BEHIND THE MISSION" title="Meet the MindSync Team" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-6 flex flex-col"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white flex items-center justify-center text-2xl font-bold mb-4">
                  {t.initial}
                </div>
                <div className="text-lg font-semibold text-ink-900">{t.name}</div>
                <div className="text-xs text-brand-600 font-semibold mt-1 tracking-wider uppercase">{t.role}</div>
                <p className="text-sm text-ink-500 mt-3 leading-relaxed flex-1">{t.bio}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {t.tags.map(x => (
                    <span key={x} className="text-[11px] font-medium text-ink-700 bg-slate-100 rounded-full px-2.5 py-1">{x}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center italic text-ink-500 mt-12 font-serif text-lg">MindSync — Because Your Mental Health Matters.</p>
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="relative rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 text-white p-8 sm:p-14 overflow-hidden text-center">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5" />
          <h2 className="text-3xl sm:text-4xl font-bold relative">Ready to align your mind?</h2>
          <p className="text-white/80 mt-3 max-w-xl mx-auto relative">Join thousands of professionals using MindSync to cultivate focus, manage stress, and achieve cognitive clarity.</p>
          <div className="mt-6 relative">
            <Button to="/signup" variant="white">Get Started Today →</Button>
          </div>
        </div>
      </section>
    </>
  )
}

function MissionCard({ icon, title, text, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl border border-slate-100 shadow-soft p-6 sm:p-8"
    >
      <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">{icon}</div>
      <h3 className="mt-5 text-2xl font-bold text-ink-900">{title}</h3>
      <p className="mt-3 text-sm text-ink-500 leading-relaxed">{text}</p>
      <div className="mt-6 rounded-2xl overflow-hidden aspect-[16/9] bg-slate-100">
        <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy"/>
      </div>
    </motion.div>
  )
}

function Stat({ icon, n, label }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3">
      <div className="flex items-center gap-2 text-[10px] font-semibold text-ink-400 tracking-wider">
        {n} — {label.toUpperCase()}
      </div>
      <div className="mt-2 text-brand-600">{icon}</div>
    </div>
  )
}
`);

// ---------- src/pages/HowItWorks.jsx ----------
write('src/pages/HowItWorks.jsx', `
import { motion } from 'framer-motion'
import { AppWindow, Clock, Camera, Brain, FileText, Sparkles, Smartphone, Activity, ShieldCheck, Heart, BarChart3 } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { steps } from '../data/content'

export default function HowItWorks() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-brand-50/60 via-white to-white pt-14 sm:pt-20 pb-12 sm:pb-16 text-center">
        <div className="container-x max-w-3xl">
          <span className="chip">THE PROCESS</span>
          <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 leading-tight">
            How MindSync Translates Data into <span className="text-brand-600">Clarity</span>
          </h1>
          <p className="mt-5 text-ink-500 text-base sm:text-lg">
            Discover the sophisticated AI architecture that securely analyses your digital footprint to provide actionable insights for your mental wellbeing and cognitive performance.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-gradient-to-b from-white to-brand-50/40">
        <div className="container-x">
          <SectionHeading eyebrow="THE DATA-TO-INSIGHT JOURNEY" title="The 6-step journey" subtitle="MindSync transforms everyday digital and emotional signals into meaningful wellbeing insights through a structured 7-day study." />
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card p-6 flex flex-col"
              >
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-600 text-white px-3 py-1 text-xs font-semibold">
                  {s.n} {s.tag}
                </div>
                <h3 className="mt-4 text-lg font-bold text-ink-900">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-500 leading-relaxed flex-1">{s.desc}</p>

                <div className="mt-5 rounded-2xl border border-slate-100 p-4 bg-slate-50/60">
                  {i === 0 && (
                    <div>
                      <div className="flex justify-between text-[11px] font-medium text-ink-500"><span>Day 1</span><span>Day 7</span></div>
                      <div className="mt-2 h-2 rounded-full bg-slate-200 overflow-hidden">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: '60%' }} viewport={{ once: true }} transition={{ duration: 1 }}
                          className="h-full bg-brand-600 rounded-full" />
                      </div>
                    </div>
                  )}
                  {i === 1 && (
                    <div className="flex items-center justify-around text-ink-400">
                      <AppWindow size={22}/><Activity size={22}/><Clock size={22}/>
                    </div>
                  )}
                  {i === 2 && (
                    <div className="flex items-center justify-around text-ink-400">
                      <Camera size={22}/><Heart size={22}/>
                    </div>
                  )}
                  {i === 3 && (
                    <div className="flex items-center justify-around text-ink-400">
                      <Brain size={22}/><BarChart3 size={22}/>
                    </div>
                  )}
                  {i === 4 && (
                    <div className="flex items-end gap-1.5 h-16">
                      {[40,55,70,50,80,65,90].map((h,idx) => (
                        <div key={idx} className="flex-1 bg-brand-500/80 rounded-t-md" style={{ height: h + '%' }}/>
                      ))}
                    </div>
                  )}
                  {i === 5 && (
                    <div className="flex items-center gap-3">
                      <Sparkles size={22} className="text-brand-600"/>
                      <div className="text-xs text-ink-500">Personalized recommendations unlocked</div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="THE MINDSYNC DIFFERENCE" title="Beyond Screen Time" subtitle="Traditional tracking tells you how long. MindSync looks deeper at the patterns behind digital behavior." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
            <div className="card p-7">
              <span className="chip">BASIC TRACKING</span>
              <h3 className="mt-4 text-2xl font-bold text-ink-900">Traditional Screen-Time Tracking</h3>
              <p className="text-ink-500 italic mt-2">“How long did you use your phone?”</p>
              <div className="mt-6 rounded-2xl border border-slate-100 p-5 bg-slate-50/60">
                <div className="flex justify-between text-sm"><span className="text-ink-400">Total Time</span><span className="font-semibold text-ink-900">4h 12m</span></div>
                <div className="mt-3 flex gap-1.5 h-20 items-end">
                  {[30,45,60,40,70,55,65,50,80,60].map((h,i)=>(<div key={i} className="flex-1 bg-slate-300 rounded-md" style={{height:h+'%'}}/>))}
                </div>
              </div>
            </div>
            <div className="card p-7 border-brand-200 ring-1 ring-brand-100">
              <span className="chip">DEEPER INSIGHT</span>
              <h3 className="mt-4 text-2xl font-bold text-brand-700">MindSync</h3>
              <p className="text-ink-500 italic mt-2">“What patterns are happening, and how can healthier digital habits be encouraged?”</p>
              <div className="mt-6 rounded-2xl border border-brand-100 p-5 bg-brand-50/40 space-y-3">
                <InsightRow icon={<Activity size={16}/>} label="Context Switching" value="High Frequency" />
                <InsightRow icon={<Heart size={16}/>} label="Correlated Mood" value="Fatigue" />
                <div className="rounded-xl bg-white border border-brand-100 p-3 text-xs text-ink-500">
                  <span className="font-semibold text-brand-700">Insight:</span> Frequent app switching correlates with increased facial tension. Suggesting a 5-minute focused block.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-brand-50/40">
        <div className="container-x grid grid-cols-1 md:grid-cols-4 gap-4">
          <FlowCard icon={<Clock size={18}/>} label="Screen Time" />
          <FlowCard icon={<AppWindow size={18}/>} label="App Behaviour" />
          <FlowCard icon={<Activity size={18}/>} label="Digital Patterns" />
          <FlowCard icon={<Heart size={18}/>} label="Emotional Indicators" />
        </div>
        <div className="container-x mt-8 text-center text-sm text-ink-500 flex items-center justify-center gap-2">
          <ShieldCheck size={16} className="text-brand-600"/> MindSync is a supplementary tool — not a medical diagnosis.
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-x grid grid-cols-1 md:grid-cols-2 gap-5">
          <FeatureCard tag="AI SUPPORT" title="Digital Psychologist" desc="Get personalized conversational guidance whenever you need it. Our AI acts as a digital psychologist, offering real-time coping strategies and contextual support based on your immediate behavioral patterns.">
            <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 text-sm text-ink-700">
              <div className="text-xs text-ink-400 mb-1">AI Digital Psychologist</div>
              “I noticed you’ve been context-switching a lot. How are you feeling?”
              <div className="mt-3 text-right"><span className="inline-block bg-brand-600 text-white text-xs rounded-full px-3 py-1">I’m overwhelmed today</span></div>
            </div>
          </FeatureCard>
          <FeatureCard dark tag="FAMILY WELLBEING" title="Parental Control" desc="Helps parents understand and manage their family’s digital wellbeing. Gain insights into screen habits, emotional correlates, and receive actionable tips to foster a healthier tech environment at home.">
            <div className="grid grid-cols-3 gap-2 mt-2">
              <MiniTile icon={<Smartphone size={16}/>} label="Child Profile" />
              <MiniTile icon={<Activity size={16}/>} label="Insights" />
              <MiniTile icon={<ShieldCheck size={16}/>} label="Parent Hub" />
            </div>
          </FeatureCard>

          <FeatureCard tag="MORE THAN SCREEN TIME" title="Smart Tracking" desc="Go beyond simple screen-time counting. Smart Tracking correlates app usage with typing patterns, facial emotional indicators, and time of day to uncover hidden drivers of digital fatigue.">
            <div className="flex items-center gap-3 text-ink-400">
              <AppWindow size={20}/> <span className="text-sm">+</span> <Activity size={20}/> <span className="text-sm">→</span> <Sparkles size={20} className="text-brand-600"/>
            </div>
          </FeatureCard>
          <FeatureCard tag="7-DAY ANALYSIS" title="7-Day Study" desc="MindSync observes patterns across seven days to establish a robust baseline. This comprehensive timeframe ensures recommendations are tailored to your true weekly rhythms rather than isolated incidents.">
            <div className="mt-2 flex items-end gap-1.5 h-20">
              {[30,55,75,45,85,60,40].map((h,i)=>(<div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-brand-600 to-brand-400" style={{height:h+'%'}}/>))}
            </div>
            <div className="text-[10px] text-ink-400 mt-2 flex justify-between">{['M','T','W','T','F','S','S'].map(x=><span key={x}>{x}</span>)}</div>
          </FeatureCard>
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="max-w-3xl mx-auto card p-8 text-center">
          <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mx-auto mb-4">
            <ShieldCheck size={22}/>
          </div>
          <h3 className="text-2xl font-bold text-ink-900">A Tool, Not a Treatment</h3>
          <p className="text-ink-500 mt-3 leading-relaxed">
            MindSync is designed as a supplementary tool for cognitive performance enhancement and daily wellbeing awareness. It utilizes behavioral pattern recognition to provide lifestyle suggestions.
          </p>
          <p className="text-ink-400 text-sm mt-3 italic">
            It does not provide medical diagnoses and is not a replacement for professional therapeutic or psychiatric care.
          </p>
        </div>
      </section>
    </>
  )
}

function InsightRow({ icon, label, value }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="inline-flex items-center gap-2 text-ink-700"><span className="text-brand-600">{icon}</span>{label}</span>
      <span className="font-semibold text-ink-900">{value}</span>
    </div>
  )
}
function FlowCard({ icon, label }) {
  return (
    <div className="card p-5 flex items-center gap-3">
      <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">{icon}</span>
      <div className="text-sm font-semibold text-ink-900">{label}</div>
    </div>
  )
}
function FeatureCard({ tag, title, desc, children, dark = false }) {
  return (
    <div className={\`rounded-3xl p-7 shadow-soft \${dark ? 'bg-gradient-to-br from-brand-700 to-brand-900 text-white' : 'bg-white border border-slate-100'}\`}>
      <span className={\`chip \${dark ? 'bg-white/15 text-white' : ''}\`}>{tag}</span>
      <h3 className={\`mt-4 text-2xl font-bold \${dark ? 'text-white' : 'text-ink-900'}\`}>{title}</h3>
      <p className={\`mt-2 text-sm leading-relaxed \${dark ? 'text-white/80' : 'text-ink-500'}\`}>{desc}</p>
      <div className="mt-5">{children}</div>
    </div>
  )
}
function MiniTile({ icon, label }) {
  return (
    <div className="rounded-xl bg-white/10 border border-white/15 p-3 text-center">
      <div className="flex justify-center text-white/90">{icon}</div>
      <div className="text-[11px] text-white/80 mt-1.5">{label}</div>
    </div>
  )
}
`);

// ---------- src/pages/Features.jsx ----------
write('src/pages/Features.jsx', `
import { motion } from 'framer-motion'
import {
  Smartphone, Activity, Clock, Moon, Brain, Heart, TrendingUp, Sparkles, Users, ShieldCheck,
  ScanFace, AlertTriangle, BarChart3, FileText
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { features } from '../data/content'

export default function Features() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-brand-50/60 via-white to-white pt-14 sm:pt-20 pb-12 text-center">
        <div className="container-x max-w-3xl">
          <span className="chip">THE COMPLETE WELLBEING PLATFORM</span>
          <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 leading-tight">
            More Than Just <span className="text-brand-600">Screen Time.</span>
          </h1>
          <p className="mt-5 text-ink-500 text-base sm:text-lg">
            MindSync seamlessly connects your digital behavior, mental signals, deep AI synthesis, and human-in-the-loop care to help you truly understand — and transform — your digital life.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row items-center gap-3 justify-center">
            <Button to="/signup">Get Started Free →</Button>
            <Button to="/how-it-works" variant="ghost">Explore MindSync</Button>
          </div>
        </div>
      </section>

      <Group title="Digital Activity & Behavior" eyebrow="TELEMETRY & HABITS" subtitle="High-resolution awareness of your screen interactions. Move past duration to understand how, why, and when you interact with your hardware." items={features.telemetry} icon={<Smartphone size={16}/>} />
      <Group tone="alt" title="Mental & Emotional Wellbeing" eyebrow="AI EMOTIONAL DETECTION" subtitle="Beyond usage metrics — MindSync uses AI-driven behavioral analysis to identify emotional shifts, compulsive checking loops, and cognitive fatigue." items={features.wellbeing} icon={<Heart size={16}/>} />
      <Group title="AI-Powered Intelligence" eyebrow="COGNITIVE ARCHITECTURE" subtitle="Trained on behavioral markers and clinical best practices to deliver contextual coaching and cognitive offloading precisely when you need it." items={features.intelligence} icon={<Brain size={16}/>} highlightFeature />
      <Group tone="alt" title="Facial & Emotion Analysis" eyebrow="EMOTIONAL VISION" subtitle="Advanced computer vision maps subtle facial expressions and emotional states to give you a comprehensive understanding of your emotional landscape." items={features.facial} icon={<ScanFace size={16}/>} />

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="RESPONSIBLE TECHNOLOGY" title="Powerful Insights. Responsible Technology." subtitle="Your mental state and digital habits are sacred. We engineered MindSync from day one to respect them." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              ['On-Device Processing', Smartphone],
              ['Zero-Knowledge Cloud', ShieldCheck],
              ['Zero Ad Monetization', AlertTriangle],
              ['Transparent AI', Sparkles],
            ].map(([label, Icon], i) => (
              <motion.div key={label} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.06}}
                className="card p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mx-auto">
                  <Icon size={20}/>
                </div>
                <div className="mt-3 text-sm font-semibold text-ink-900">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-brand-700 to-brand-900 text-white p-8 sm:p-14 text-center relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/5" />
          <span className="chip bg-white/15 text-white">START YOUR JOURNEY TODAY</span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold">Understand Your Digital Life.<br/>Take Control of Your Wellbeing.</h2>
          <p className="text-white/80 mt-4 max-w-xl mx-auto">Because your mental health matters. Join over 10,000 individuals reclaiming peace of mind in a digital world.</p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <Button to="/signup" variant="white">Get Started Free Today</Button>
            <Button to="/contact" variant="dark">Schedule Enterprise Demo</Button>
          </div>
        </div>
      </section>
    </>
  )
}

function Group({ eyebrow, title, subtitle, items, tone = 'plain', icon, highlightFeature }) {
  const bg = tone === 'alt' ? 'bg-brand-50/40' : 'bg-white'
  return (
    <section className={\`py-16 sm:py-20 \${bg}\`}>
      <div className="container-x">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} align="left" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={\`card p-6 flex flex-col \${highlightFeature && i === 2 ? 'bg-gradient-to-br from-brand-600 to-brand-800 text-white border-0' : ''}\`}
            >
              <div className={\`w-10 h-10 rounded-xl flex items-center justify-center \${highlightFeature && i === 2 ? 'bg-white/15 text-white' : 'bg-brand-50 text-brand-600'}\`}>
                {icon}
              </div>
              <h3 className={\`mt-4 text-base font-bold \${highlightFeature && i === 2 ? 'text-white' : 'text-ink-900'}\`}>{f.title}</h3>
              <p className={\`mt-2 text-sm leading-relaxed flex-1 \${highlightFeature && i === 2 ? 'text-white/80' : 'text-ink-500'}\`}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
`);

// ---------- src/pages/Pricing.jsx ----------
write('src/pages/Pricing.jsx', `
import { Check, Sparkles, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { faqs } from '../data/content'

export default function Pricing() {
  const plans = [
    {
      name: 'Free', price: 'Rs. 0', period: '/month',
      tagline: 'Essential tools to start your journey towards better mental clarity.',
      features: ['Basic cognitive assessments','Limited daily exercises','Community forum access'],
      cta: 'Get Started Free', variant: 'ghost'
    },
    {
      name: 'Basic', price: 'Rs. 560', period: '/month',
      tagline: 'Advanced AI insights and unlimited exercises for consistent growth.',
      features: ['Everything in Free','Unlimited cognitive exercises','AI-driven performance insights','Weekly progress reports'],
      cta: 'Start 14-Day Trial', variant: 'primary',
      popular: true, off: '20% OFF'
    },
    {
      name: 'Premium', price: 'Rs. 999', period: '/month',
      tagline: 'The ultimate toolkit for peak mental performance and coaching.',
      features: ['Everything in Basic','1-on-1 monthly expert session','Customized training plans','Priority support'],
      cta: 'Upgrade to Premium', variant: 'ghost', off: '20% OFF'
    },
  ]

  return (
    <>
      <section className="relative bg-gradient-to-b from-brand-50/60 via-white to-white pt-14 sm:pt-20 pb-12 text-center">
        <div className="container-x max-w-3xl">
          <span className="chip">TRANSPARENT PRICING</span>
          <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900">Invest in Your Cognitive Edge</h1>
          <p className="mt-5 text-ink-500 text-base sm:text-lg">Choose the plan that fits your mental performance goals. Simple, predictable pricing with no hidden fees. Upgrade or downgrade at any time.</p>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="container-x grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={\`relative rounded-3xl p-7 flex flex-col \${p.popular ? 'bg-white border-2 border-brand-600 shadow-card' : 'bg-white border border-slate-100 shadow-soft'}\`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-700 text-white text-[11px] font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}
              {p.off && (
                <span className="absolute top-5 right-5 inline-flex items-center gap-1 rounded-full bg-brand-50 text-brand-700 px-2.5 py-1 text-[10px] font-semibold">
                  <Sparkles size={10}/> {p.off}
                </span>
              )}
              <div className="text-lg font-semibold text-ink-900">{p.name}</div>
              <div className="mt-3 flex items-end gap-1">
                <div className="text-4xl font-bold text-ink-900">{p.price}</div>
                <div className="text-sm text-ink-400 mb-1">{p.period}</div>
              </div>
              <p className="text-sm text-ink-500 mt-3 leading-relaxed min-h-[48px]">{p.tagline}</p>
              <ul className="mt-5 space-y-3 flex-1">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm text-ink-700">
                    <Check size={16} className="text-brand-600 mt-0.5 shrink-0"/> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button to="/signup" variant={p.variant} className="w-full py-3">{p.cta}</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-50/60">
        <div className="container-x">
          <SectionHeading title="Common Questions" subtitle="Everything you need to know about billing and plans." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((f, i) => (
              <motion.div key={f.q} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.06}}
                className="bg-white rounded-2xl border border-slate-100 p-6">
                <h4 className="font-semibold text-ink-900">{f.q}</h4>
                <p className="text-sm text-ink-500 mt-2 leading-relaxed">{f.a}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 flex items-center justify-center gap-2 text-xs text-ink-400">
            <ShieldCheck size={14}/> Secure payments • Cancel anytime • No hidden fees
          </div>
        </div>
      </section>
    </>
  )
}
`);

// ---------- src/pages/MindSyncApp.jsx ----------
write('src/pages/MindSyncApp.jsx', `
import { motion } from 'framer-motion'
import { Download, Apple, Play, Activity, Heart, Sparkles, ShieldCheck, Zap, Waves, Mic } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import AnimatedPhone from '../components/AnimatedPhone'

export default function MindSyncApp() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-brand-50/60 via-white to-white pt-14 sm:pt-20 pb-12 text-center overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-200/30 blur-3xl" />
        <div className="container-x max-w-3xl">
          <span className="chip">AVAILABLE NOW</span>
          <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 leading-tight">
            Your Digital &amp; Mental Wellbeing, <span className="text-brand-600">Wherever You Go.</span>
          </h1>
          <p className="mt-5 text-ink-500 text-base sm:text-lg">Experience the full power of MindSync in your pocket. Seamlessly sync your cognitive metrics, track your focus states, and receive real-time insights tailored to your daily rhythm.</p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <StoreBadge icon={<Apple size={20}/>} top="Download on the" bot="App Store" />
            <StoreBadge icon={<Play size={20}/>} top="GET IT ON" bot="Google Play" />
          </div>
        </div>
        <div className="container-x mt-12 max-w-4xl">
          <div className="rounded-3xl overflow-hidden shadow-card border border-slate-100 aspect-[16/10] bg-slate-100">
            <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80&auto=format&fit=crop" alt="MindSync on phone" className="w-full h-full object-cover"/>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-brand-50/40">
        <div className="container-x">
          <SectionHeading eyebrow="EXPERIENCE MINDSYNC IN MOTION" title={<>See How MindSync Nurtures Your <span className="text-brand-600">Mental Health</span></>} subtitle="Watch how real-time bio-behavioral telemetry, gentle breathing recalibrations, and AI-guided moments seamlessly restore cognitive calm throughout your workday." />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="space-y-4 order-2 lg:order-1">
              <Pill icon={<Heart size={14}/>} title="Moodful Breath Sync" desc="Active • 4-7-8 Rhythm" />
              <Pill icon={<Activity size={14}/>} title="42% Decrease" desc="Stress Variance within 6-min" />
              <Pill icon={<Sparkles size={14}/>} title="Context-Aware Intervention" desc="Calm intervention prompted automatically" />
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <AnimatedPhone />
            </div>
            <div className="space-y-5 order-3">
              <MiniFeature icon={<Activity size={18}/>} title="Ambient Biometrics" desc="Passive telemetry observes mental tension patterns without interruptions." />
              <MiniFeature icon={<Waves size={18}/>} title="Micro-Recalibrations" desc="Instant 90-second breathing exercises sync your heart and mind on demand." />
              <MiniFeature icon={<Mic size={18}/>} title="Neuro-Adaptive Audio" desc="Sound frequencies engineered dynamically to drop stress valence in real time." />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-slate-100 shadow-card">
            <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&q=80&auto=format&fit=crop" alt="Cognitive Stress Tracker" className="w-full h-full object-cover"/>
          </div>
          <div>
            <span className="chip mb-4"><Activity size={12}/> REAL-TIME SYNC</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink-900">Cognitive Metrics on the Move</h2>
            <p className="mt-4 text-ink-500 leading-relaxed">Your mental state doesn’t stay at your desk. The MindSync app continuously monitors your cognitive load and focus levels throughout the day, providing ambient feedback before you hit burnout.</p>
            <ul className="mt-6 space-y-3">
              {['Continuous background processing with minimal battery drain.','Instant synchronization across all your registered devices.','Smart notifications tailored to your specific focus thresholds.'].map(x => (
                <li key={x} className="flex items-start gap-3 text-sm text-ink-700">
                  <span className="w-5 h-5 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 mt-0.5"><ShieldCheck size={12}/></span>
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-brand-50/40">
        <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <span className="chip mb-4"><Sparkles size={12}/> AI INSIGHTS</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink-900">Predictive Wellness Coaching</h2>
            <p className="mt-4 text-ink-500 leading-relaxed">Our proprietary AI analyzes your behavioral patterns to predict dips in concentration before they happen. Receive actionable, micro-interventions to restore your mental clarity instantly.</p>
            <div className="mt-6 rounded-2xl bg-white border border-brand-100 p-5 shadow-soft">
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-700 tracking-wider">
                <Sparkles size={12}/> INSIGHT GENERATED
              </div>
              <p className="mt-2 text-sm text-ink-700 italic">“Your focus metric typically drops around 2:30 PM. A 5-minute guided breathing session is recommended now to sustain afternoon productivity.”</p>
            </div>
          </div>
          <div className="order-1 lg:order-2 rounded-3xl overflow-hidden aspect-[4/5] bg-slate-100 shadow-card">
            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&q=80&auto=format&fit=crop" alt="Predictive coaching" className="w-full h-full object-cover"/>
          </div>
        </div>
      </section>

      <section className="container-x py-16 sm:py-20">
        <div className="rounded-3xl bg-gradient-to-br from-brand-700 to-brand-900 text-white p-8 sm:p-14 text-center relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/5" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold relative">Ready to Optimize Your Mind?</h2>
          <p className="text-white/80 mt-4 max-w-xl mx-auto relative">Join thousands of high-performers who trust MindSync to maintain cognitive excellence. Download the app today and start your journey.</p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center relative">
            <StoreBadge light icon={<Apple size={20}/>} top="Download on the" bot="App Store" />
            <StoreBadge light icon={<Play size={20}/>} top="GET IT ON" bot="Google Play" />
          </div>
        </div>
      </section>
    </>
  )
}

function StoreBadge({ icon, top, bot, light = false }) {
  return (
    <a href="#" className={\`inline-flex items-center gap-3 rounded-2xl px-5 py-3 transition \${light ? 'bg-white text-navy-900 hover:bg-slate-100' : 'bg-navy-900 text-white hover:bg-navy-800'}\`}>
      {icon}
      <div className="text-left leading-tight">
        <div className="text-[10px] opacity-70">{top}</div>
        <div className="text-sm font-semibold">{bot}</div>
      </div>
    </a>
  )
}

function Pill({ icon, title, desc }) {
  return (
    <motion.div initial={{opacity:0,x:-16}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
      className="bg-white rounded-2xl shadow-soft border border-slate-100 p-4 flex items-start gap-3 max-w-sm">
      <span className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">{icon}</span>
      <div>
        <div className="text-sm font-semibold text-ink-900">{title}</div>
        <div className="text-xs text-ink-500">{desc}</div>
      </div>
    </motion.div>
  )
}

function MiniFeature({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-4">
      <span className="w-11 h-11 rounded-xl bg-white border border-slate-100 shadow-soft flex items-center justify-center text-brand-600 shrink-0">{icon}</span>
      <div>
        <div className="font-semibold text-ink-900">{title}</div>
        <div className="text-sm text-ink-500 mt-1 leading-relaxed">{desc}</div>
      </div>
    </div>
  )
}
`);

// ---------- src/pages/Contact.jsx ----------
write('src/pages/Contact.jsx', `
import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Clock, Twitter, Linkedin, Share2, ChevronDown } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { contactFaqs } from '../data/content'

export default function Contact() {
  const [open, setOpen] = useState(null)
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50/50 via-white to-white pt-14 sm:pt-20 pb-10">
        <div className="container-x">
          <span className="text-xs font-semibold tracking-[0.2em] text-brand-700">[ CONTACT US ]</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-serif font-bold text-ink-900">Let’s Talk.</h1>
          <p className="mt-3 max-w-2xl text-ink-500">Whether you’re looking for enterprise solutions, technical support, or just want to explore how MindSync can elevate your cognitive performance, our team is ready to connect.</p>
          <div className="h-px bg-slate-200 mt-8" />
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="container-x grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 card p-6 sm:p-8">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-5" onSubmit={e => e.preventDefault()}>
              <Field label="Full Name" placeholder="Jane Doe" />
              <Field label="Email Address" placeholder="jane@example.com" />
              <div className="sm:col-span-2">
                <Label>Subject</Label>
                <select className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30">
                  <option>Select an inquiry type...</option>
                  <option>Enterprise Solutions</option>
                  <option>Technical Support</option>
                  <option>Partnership</option>
                  <option>Press</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <Label>Message</Label>
                <textarea rows="5" placeholder="How can we help you today?" className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30"/>
              </div>
              <div className="sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-ink-400">All fields are required unless marked optional.</div>
                <button className="btn-primary px-6 py-3 w-full sm:w-auto">Send Message →</button>
              </div>
            </form>
          </div>

          <aside className="card p-6 sm:p-8 h-fit">
            <span className="text-xs font-semibold tracking-[0.2em] text-brand-700">DIRECT CHANNELS</span>
            <h3 className="mt-2 text-xl font-bold text-ink-900">Contact Details</h3>
            <ul className="mt-6 space-y-5">
              <ContactRow icon={<MapPin size={16}/>} label="GLOBAL HEADQUARTERS" lines={['100 Innovation Way, Suite 400','San Francisco, CA 94105']}/>
              <ContactRow icon={<Mail size={16}/>} label="DIRECT INQUIRY & SALES" lines={['hello@mindsync.ai','enterprise@mindsync.ai']}/>
              <ContactRow icon={<Phone size={16}/>} label="SUPPORT & ASSISTANCE" lines={['+1 (800) 555-0199','Mon – Fri, 8:00 AM – 6:00 PM PT']}/>
              <ContactRow icon={<Clock size={16}/>} label="OPERATING HOURS" lines={['Global Client Care: 24/7 Priority SLA','Avg resolution under 2 hours for Pro tiers']}/>
            </ul>
            <div className="mt-6 pt-5 border-t border-slate-100">
              <div className="text-xs font-semibold tracking-[0.2em] text-ink-400">CONNECT ON SOCIAL</div>
              <div className="mt-3 flex gap-2">
                {[Twitter, Linkedin, Share2].map((Icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 rounded-full border border-slate-200 text-ink-500 flex items-center justify-center hover:border-brand-300 hover:text-brand-600 transition">
                    <Icon size={15}/>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-slate-50/60">
        <div className="container-x">
          <span className="text-xs font-semibold tracking-[0.2em] text-brand-700">[ KNOWLEDGE BASE ]</span>
          <div className="mt-2 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink-900">Frequently Asked Questions</h2>
            <p className="text-sm text-ink-500 max-w-md">Got a question about our enterprise solutions, data compliance, or integrations? Find clear answers below.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {contactFaqs.map((f, i) => (
              <div key={f.q} className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
                <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                  <span className="font-semibold text-ink-900 text-sm sm:text-base pr-4">{f.q}</span>
                  <ChevronDown size={18} className={\`text-ink-400 transition-transform \${open === i ? 'rotate-180' : ''}\`}/>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm text-ink-500 leading-relaxed">{f.a}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function Field({ label, placeholder }) {
  return (
    <div>
      <Label>{label}</Label>
      <input placeholder={placeholder} className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30"/>
    </div>
  )
}
function Label({ children }) { return <label className="text-xs font-semibold tracking-wider text-ink-700">{children}</label> }
function ContactRow({ icon, label, lines }) {
  return (
    <li className="flex gap-4">
      <span className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">{icon}</span>
      <div>
        <div className="text-[10px] font-semibold tracking-[0.16em] text-ink-400">{label}</div>
        {lines.map(l => <div key={l} className="text-sm text-ink-700 mt-0.5">{l}</div>)}
      </div>
    </li>
  )
}
`);

// ---------- src/pages/Login.jsx ----------
write('src/pages/Login.jsx', `
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck } from 'lucide-react'

export default function Login() {
  const [show, setShow] = useState(false)
  return (
    <section className="relative py-10 sm:py-16 min-h-[calc(100vh-5rem)] flex items-center justify-center bg-gradient-to-br from-brand-50/60 via-white to-brand-50/30 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40"
        style={{ backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(37,64,230,0.10), transparent 45%), radial-gradient(circle at 70% 80%, rgba(37,64,230,0.10), transparent 45%)' }}/>

      <div className="container-x relative w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-card border border-slate-100 p-8 sm:p-10">
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-glow">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9 6 9-6"/>
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
              </svg>
            </div>
            <h1 className="mt-5 text-2xl sm:text-3xl font-bold text-ink-900">Welcome Back</h1>
            <p className="mt-2 text-sm text-ink-500 max-w-xs">Continue your journey to cognitive calm &amp; digital balance.</p>
          </div>

          <form onSubmit={e => e.preventDefault()} className="mt-8 space-y-5">
            <div>
              <label className="text-[11px] font-semibold tracking-wider text-ink-700">WORK OR PERSONAL EMAIL</label>
              <div className="relative mt-2">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400"/>
                <input placeholder="name@company.com" className="w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30"/>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="text-[11px] font-semibold tracking-wider text-ink-700">PASSWORD</label>
                <Link to="#" className="text-xs font-semibold text-brand-600 hover:text-brand-700">Forgot password?</Link>
              </div>
              <div className="relative mt-2">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400"/>
                <input type={show ? 'text' : 'password'} placeholder="Enter your password" className="w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-11 pr-11 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30"/>
                <button type="button" onClick={()=>setShow(s=>!s)} className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-700">
                  {show ? <EyeOff size={16}/> : <Eye size={16}/>}
                </button>
              </div>
            </div>

            <label className="flex items-center gap-3 text-sm text-ink-700">
              <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"/>
              Remember this browser for 30 days
            </label>

            <button className="btn-primary w-full py-3.5 text-base">Log In to MindSync <ArrowRight size={16}/></button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"/></div>
              <div className="relative flex justify-center"><span className="bg-white px-3 text-[11px] tracking-wider text-ink-400">OR CONTINUE WITH</span></div>
            </div>

            <button type="button" className="w-full inline-flex items-center justify-center gap-3 rounded-xl border border-slate-200 py-3.5 text-sm font-semibold text-ink-900 hover:bg-slate-50">
              <GoogleIcon/> Continue with Google
            </button>

            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-xs text-ink-500">
                <ShieldCheck size={12}/> 256-bit End-to-End Encrypted • HIPAA Compliant
              </span>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-ink-500">
            Don’t have an account? <Link to="/signup" className="font-semibold text-brand-600 hover:text-brand-700">Sign up for free</Link>
          </p>
        </div>
      </div>
    </section>
  )
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" width="18" height="18" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.7 1.22 9.2 3.6l6.9-6.9C35.9 2.5 30.5 0 24 0 14.6 0 6.5 5.4 2.6 13.2l8 6.2C12.6 13.3 17.8 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.5 24c0-1.6-.14-3.1-.4-4.6H24v9.1h12.7c-.55 2.9-2.2 5.4-4.7 7.1l7.3 5.7C43.9 37.1 46.5 31 46.5 24z"/>
      <path fill="#FBBC05" d="M10.6 28.6A14.5 14.5 0 0 1 9.6 24c0-1.6.28-3.2.8-4.6l-8-6.2A24 24 0 0 0 0 24c0 3.9.94 7.5 2.6 10.8l8-6.2z"/>
      <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.3-5.7c-2.1 1.4-4.8 2.2-8.6 2.2-6.2 0-11.4-3.8-13.4-9.1l-8 6.2C6.5 42.6 14.6 48 24 48z"/>
    </svg>
  )
}
`);

// ---------- src/pages/Signup.jsx ----------
write('src/pages/Signup.jsx', `
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck, Check } from 'lucide-react'

export default function Signup() {
  const [show, setShow] = useState(false)
  return (
    <section className="relative py-10 sm:py-16 min-h-[calc(100vh-5rem)] flex items-center justify-center bg-gradient-to-br from-brand-50/60 via-white to-brand-50/30">
      <div className="container-x w-full max-w-lg">
        <div className="bg-white rounded-3xl shadow-card border border-slate-100 p-8 sm:p-10">
          <div className="text-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-glow mx-auto">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9 6 9-6"/>
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
              </svg>
            </div>
            <h1 className="mt-5 text-2xl sm:text-3xl font-bold text-ink-900">Create your MindSync account</h1>
            <p className="mt-2 text-sm text-ink-500">Start your 7-day personalized wellbeing study.</p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3 text-[11px] text-ink-400">
            <span className="inline-flex items-center gap-1"><Check size={12} className="text-brand-600"/> Free 14-day trial</span>
            <span className="inline-flex items-center gap-1"><Check size={12} className="text-brand-600"/> No card required</span>
          </div>

          <form onSubmit={e => e.preventDefault()} className="mt-6 space-y-4">
            <Row icon={<User size={16}/>} label="FULL NAME" placeholder="Jane Doe"/>
            <Row icon={<Mail size={16}/>} label="WORK OR PERSONAL EMAIL" placeholder="jane@example.com"/>
            <Row icon={<Lock size={16}/>} label="PASSWORD" placeholder="At least 8 characters" type={show ? 'text' : 'password'} trailing={
              <button type="button" onClick={()=>setShow(s=>!s)} className="text-ink-400 hover:text-ink-700">
                {show ? <EyeOff size={16}/> : <Eye size={16}/>}
              </button>
            }/>
            <Row icon={<Lock size={16}/>} label="CONFIRM PASSWORD" placeholder="Re-enter password" type={show ? 'text' : 'password'} />

            <label className="flex items-start gap-3 text-xs text-ink-500">
              <input type="checkbox" className="mt-0.5 w-4 h-4 rounded border-slate-300 text-brand-600"/>
              I agree to the <Link to="#" className="text-brand-600 font-semibold">Terms</Link> and <Link to="#" className="text-brand-600 font-semibold">Privacy Policy</Link>.
            </label>

            <button className="btn-primary w-full py-3.5 text-base">Create Account <ArrowRight size={16}/></button>

            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-xs text-ink-500">
                <ShieldCheck size={12}/> 256-bit End-to-End Encrypted • HIPAA Compliant
              </span>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-ink-500">
            Already have an account? <Link to="/login" className="font-semibold text-brand-600 hover:text-brand-700">Log in</Link>
          </p>
        </div>
      </div>
    </section>
  )
}

function Row({ icon, label, placeholder, type = 'text', trailing }) {
  return (
    <div>
      <label className="text-[11px] font-semibold tracking-wider text-ink-700">{label}</label>
      <div className="relative mt-2">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400">{icon}</span>
        <input type={type} placeholder={placeholder} className="w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-11 pr-11 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30"/>
        {trailing && <div className="absolute right-4 top-1/2 -translate-y-1/2">{trailing}</div>}
      </div>
    </div>
  )
}
`);
// ---------- README ----------
write('README.md', `
# MindSync Website

AI-powered preventive digital wellbeing & mental-health monitoring platform — marketing website.

## Stack
- React 18 + Vite
- Tailwind CSS
- React Router v6
- Framer Motion
- Lucide Icons

## Getting Started

npm install
npm run dev

Open http://localhost:3000

## Pages
- /               Home
- /about          About Us
- /how-it-works   How It Works
- /features       Features
- /pricing        Pricing
- /app            MindSync App
- /contact        Contact
- /login          Log In
- /signup         Sign Up

## Build

npm run build
npm run preview
`);