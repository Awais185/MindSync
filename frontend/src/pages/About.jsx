import { motion } from 'framer-motion'
import { Target, Eye, Compass, Briefcase, Sparkles, Linkedin, Mail, Twitter, Quote } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import Awais from '../media/Awais.jpeg'
import Azeem from '../media/azeem.jpeg'
import logo from '../media/nexora.png'

/* Team data */
const team = [
  {
    name: 'Awais Ali Raza',
    role: 'CEO & Founder / MindSync Project Leader',
    bio: 'Leading the research & development of MindSync across application development and AI/ML, with a focus on transforming the MindSync vision into a practical digital wellbeing platform.',
    tags: ['AI/ML', 'Researcher', 'Full-Stack', 'Product Development'],
    photo: Awais,
    accent: 'brand',
  },
  {
    name: 'Azeem',
    role: 'Co Founder',
    bio: 'Responsible for building and maintaining the backend infrastructure that powers MindSync’s data, APIs, services, and application functionality.',
    tags: ['Backend', 'Django', 'REST APIs', 'Database'],
    photo: Azeem,
    accent: 'violet',
  },
  {
    name: 'Dr Marrium Maqsood',
    role: 'Project Supervisor',
    bio: 'Contributing to MindSync’s project supervision including research validation and structural methodology.',
    tags: ['Project Supervision', 'Research', 'Guidance'],
    photo: 'data:image/png;base64,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',
    accent: 'emerald',
  },
]

export default function About() {
  return (
    <>
      <Hero />
      <MissionVisionSection />
      <NexoraSection />
      <TeamSection />
      <Quoteline />
      <FinalCTA />
    </>
  )
}

/* ============ HERO ============ */
function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-brand-50/60 via-white to-white pt-14 sm:pt-20 pb-16 sm:pb-24 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-brand-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-brand-300/25 blur-3xl" />

      <div className="container-x text-center max-w-3xl relative">
        <motion.span initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="chip">
          <Sparkles size={12}/> ABOUT US
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 leading-tight"
        >
          Building a healthier relationship between{' '}
          <span className="text-brand-600 italic font-serif">people, technology,</span>{' '}
          and mental wellbeing.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-ink-500 text-base sm:text-lg"
        >
          We believe the tools of the future shouldn’t just make us faster — they should help us think clearer, stress less, and live with greater intention.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2"
        >
          {['Science-backed', 'Privacy-first', 'Human-in-the-loop'].map((label) => (
            <motion.span key={label} whileHover={{ y: -2 }} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/70 backdrop-blur px-3 py-1.5 text-[11px] font-medium text-ink-700">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500" /> {label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ============ MISSION / VISION ============ */
function MissionVisionSection() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container-x grid grid-cols-1 md:grid-cols-2 gap-8">
        <MissionCard
          icon={<Target size={20}/>}
          title="Our Mission"
          text="To democratize access to cognitive wellness by creating intuitive, science-backed AI tools that help individuals understand, manage, and optimize their mental state."
          image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=80&auto=format&fit=crop"
          delay={0}
        />
        <MissionCard
          icon={<Eye size={20}/>}
          title="Our Vision"
          text="A world where technology serves as a silent partner in mental clarity, gently guiding users toward flow states and emotional resilience without demanding constant attention or creating new dependencies."
          image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=80&auto=format&fit=crop"
          delay={0.1}
        />
      </div>
    </section>
  )
}

function MissionCard({ icon, title, text, image, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay }}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-3xl border border-slate-100 shadow-soft p-6 sm:p-8 hover:shadow-[0_0_0_2px_rgba(59,91,255,0.2),0_25px_50px_-25px_rgba(59,91,255,0.4)] transition-shadow"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: delay + 0.15 }}
        className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center transition-transform group-hover:scale-110"
      >
        {icon}
      </motion.div>
      <h3 className="mt-5 text-2xl font-bold text-ink-900">{title}</h3>
      <p className="mt-3 text-sm text-ink-500 leading-relaxed">{text}</p>
      <div className="mt-6 rounded-2xl overflow-hidden aspect-[16/9] bg-slate-100">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
      </div>
    </motion.div>
  )
}

/* ============ NEXORA SECTION ============ */
function NexoraSection() {
  return (
    <section className="py-12 sm:py-20 bg-brand-50/40">
      <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
        >
          <span className="chip mb-4">BUILT BY NEXORA TECH</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900">A project by NEXORA TECH.</h2>
          <p className="mt-5 text-ink-500 leading-relaxed">
            MindSync is a project by NEXORA TECH, where technology is built to solve meaningful real-world problems. NEXORA TECH is a technology-driven startup focused on building innovative digital solutions that combine software, artificial intelligence, and modern technology to address real-world challenges.
          </p>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <Stat icon={<Compass size={14}/>} n="01" label="Innovation" delay={0.1} />
            <Stat icon={<Briefcase size={14}/>} n="02" label="Intelligence" delay={0.18} />
            <Stat icon={<Sparkles size={14}/>} n="03" label="Impact" delay={0.26} />
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-6 text-sm text-ink-500">
            NEXORA TECH <span className="text-brand-600">↓</span>{' '}
            <span className="font-semibold text-ink-900">MindSync</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}
          className="relative bg-gradient-to-br from-brand-600 to-brand-800 rounded-3xl p-10 sm:p-16 aspect-square max-w-md mx-auto w-full flex flex-col items-center justify-center text-white overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5" />

          {/* Floating Nexora logo — 2x size, replaces the rocket */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-40 h-40 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mb-6 p-4"
          >
            <img
              src={logo}
              alt="Nexora Tech"
              className="w-full h-full object-contain"
            />
          </motion.div>

          <div className="text-2xl font-bold">NEXORA TECH</div>
          <div className="text-white/70 text-sm mt-2">Digital Solutions Lab</div>
        </motion.div>
      </div>
    </section>
  )
}

function Stat({ icon, n, label, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay }} whileHover={{ y: -3 }}
      className="rounded-xl border border-slate-200 bg-white p-3 hover:border-brand-200 transition-colors"
    >
      <div className="flex items-center gap-2 text-[10px] font-semibold text-ink-400 tracking-wider">
        {n} — {label.toUpperCase()}
      </div>
      <div className="mt-2 text-brand-600">{icon}</div>
    </motion.div>
  )
}

/* ============ TEAM ============ */
function TeamSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-x">
        <SectionHeading eyebrow="THE MINDS BEHIND THE MISSION" title="Meet the MindSync Team" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((t, i) => (
            <TeamCard key={t.name} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamCard({ t, i }) {
  const accents = {
    brand:   { ring: 'ring-brand-100',   bg: 'bg-brand-50',   text: 'text-brand-600',   hoverShadow: 'hover:shadow-[0_0_0_2px_rgba(59,91,255,0.25),0_25px_50px_-25px_rgba(59,91,255,0.4)]',   dot: 'bg-brand-500' },
    violet:  { ring: 'ring-violet-100',  bg: 'bg-violet-50',  text: 'text-violet-600',  hoverShadow: 'hover:shadow-[0_0_0_2px_rgba(139,92,246,0.25),0_25px_50px_-25px_rgba(139,92,246,0.4)]', dot: 'bg-violet-500' },
    emerald: { ring: 'ring-emerald-100', bg: 'bg-emerald-50', text: 'text-emerald-600', hoverShadow: 'hover:shadow-[0_0_0_2px_rgba(16,185,129,0.25),0_25px_50px_-25px_rgba(16,185,129,0.4)]', dot: 'bg-emerald-500' },
  }[t.accent]

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55, delay: i * 0.12 }} whileHover={{ y: -6 }}
      className={`group card p-6 flex flex-col ${accents.hoverShadow} transition-shadow`}
    >
      <div className="relative self-start">
        <div className={`relative w-24 h-24 rounded-full overflow-hidden ring-4 ${accents.ring} transition-transform duration-500 group-hover:scale-105`}>
          <img src={t.photo} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <span className={`absolute -bottom-1 -right-1 w-8 h-8 rounded-full ${accents.bg} ${accents.text} ring-4 ring-white flex items-center justify-center text-xs font-bold`}>
          {t.name.charAt(0)}
        </span>
      </div>

      <div className="mt-5">
        <div className="text-lg font-bold text-ink-900">{t.name}</div>
        <div className={`text-xs ${accents.text} font-semibold mt-1 tracking-wider uppercase`}>{t.role}</div>
      </div>

      <p className="text-sm text-ink-500 mt-3 leading-relaxed flex-1">{t.bio}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {t.tags.map((x, k) => (
          <motion.span
            key={x} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.12 + 0.3 + k * 0.05 }}
            className="text-[11px] font-medium text-ink-700 bg-slate-100 rounded-full px-2.5 py-1"
          >
            {x}
          </motion.span>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2">
        {[Linkedin, Twitter, Mail].map((Icon, k) => (
          <motion.a key={k} href="#" whileHover={{ y: -2, scale: 1.05 }} className={`w-8 h-8 rounded-full ${accents.bg} ${accents.text} flex items-center justify-center transition-colors`}>
            <Icon size={14}/>
          </motion.a>
        ))}
        <span className={`ml-auto w-2 h-2 rounded-full ${accents.dot} animate-pulse`} />
      </div>
    </motion.div>
  )
}

/* ============ QUOTELINE ============ */
function Quoteline() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
      className="container-x pb-4"
    >
      <div className="max-w-3xl mx-auto text-center">
        <Quote size={28} className="mx-auto text-brand-300 mb-3" />
        <p className="italic text-ink-500 font-serif text-lg sm:text-xl">
          MindSync — Because Your Mental Health Matters.
        </p>
      </div>
    </motion.section>
  )
}

/* ============ FINAL CTA ============ */
function FinalCTA() {
  return (
    <section className="container-x py-16 sm:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
        className="relative rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 text-white p-8 sm:p-14 overflow-hidden text-center"
      >
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5" />

        {[...Array(6)].map((_, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -10, 0], opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute rounded-full bg-white pointer-events-none"
            style={{ width: 6 + i * 2, height: 6 + i * 2, top: `${15 + i * 12}%`, left: `${10 + i * 15}%` }}
          />
        ))}

        <div className="relative">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to align your mind?</h2>
          <p className="text-white/80 mt-3 max-w-xl mx-auto">
            Join thousands of professionals using MindSync to cultivate focus, manage stress, and achieve cognitive clarity.
          </p>
          <div className="mt-6">
            <Button to="/signup" variant="white">Get Started Today →</Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}