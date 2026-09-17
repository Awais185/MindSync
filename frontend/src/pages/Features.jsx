import { motion } from 'framer-motion'
import {
  Smartphone, Activity, Clock, Moon, Brain, Heart, TrendingUp, Sparkles, Users, ShieldCheck,
  ScanFace, AlertTriangle, BarChart3, FileText, AppWindow, Zap, Eye, Waves, LineChart, Lock, Cpu
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { features } from '../data/content'

/* Icons per feature (matched to meaning) */
const iconMaps = {
  telemetry:    [Smartphone, AppWindow, Activity, Clock, Moon, Brain],
  wellbeing:    [Heart, Activity, Zap, TrendingUp, LineChart, ShieldCheck],
  intelligence: [Brain, Sparkles, Users, Cpu, FileText, Eye],
  facial:       [ScanFace, Eye, Activity, Waves],
}

/* Curated images — each matched to the specific feature */
const imageMaps = {
  telemetry: [
    // Granular Screen Time Tracking
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80&auto=format&fit=crop',
    // App-Level Deep Telemetry
    'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80&auto=format&fit=crop',
    // Interaction Velocity Study
    'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80&auto=format&fit=crop',
    // Usage Sessions & Frequency
    'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&q=80&auto=format&fit=crop',
    // Circadian / Late Night
    'https://images.unsplash.com/photo-1531353826977-0941b4779a1c?w=800&q=80&auto=format&fit=crop',
    // Cognitive Category
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
  ],
  wellbeing: [
    // Emotional Wellbeing Tracking
    'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80&auto=format&fit=crop',
    // Stress Indicators & Cadence
    'https://images.unsplash.com/photo-1541199249251-f713e6145474?w=800&q=80&auto=format&fit=crop',
    // Compulsive Checking Detection
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxij36ZYcl28T8n8wUBRJmFl_bCwctum2N696dfq9Yag&s=10',
    // Withdrawal & Lethargy Markers
    'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80&auto=format&fit=crop',
    // Longitudinal Mood Trends
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80&auto=format&fit=crop',
    // Proprietary Wellbeing Score
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
  ],
  intelligence: [
    // AI Behavioral Analysis
    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80&auto=format&fit=crop',
    // Adaptive Recommendations
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
    // Digital Psychologist — NEW
    'https://heise.cloudimg.io/v7/_www-heise-de_/imgs/18/4/8/2/7/9/7/2/hp-f1b37cc4d6fb0694.jpeg?org_if_sml=1&q=50&width=696',
    // Multi-Factor Pattern Detection
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format&fit=crop',
    // Weekly AI Synthesis
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80&auto=format&fit=crop',
    // Context-Aware Interventions
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFat_SvxwppqwqKSIDXieOyb0QPruUq1scQh-dISxePdCBmmgOoEbE8yM&s=10',
  ],
  facial: [
    // Deep Facial Study — NEW
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjxMhuVAIN0tNeNxl0MBEoYj93s-lukik6rresX1OYvN7AvfBYYpA3Htvu&s=10',
    // Expression Analysis
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80&auto=format&fit=crop',
    // Facial Action Units (AU) — NEW
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJb7xBcrB2BO1-3PffW7V-ituEytg2YLxN3O7UeBEL_Q&s=10',
    // Work Block Resonance
    'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80&auto=format&fit=crop',
  ],
}

export default function Features() {
  return (
    <>
      <Hero />
      <Group
        tone="plain"
        eyebrow="TELEMETRY & HABITS"
        title="Digital Activity & Behavior"
        subtitle="High-resolution awareness of your screen interactions. Move past duration to understand how, why, and when you interact with your hardware."
        items={features.telemetry}
        icons={iconMaps.telemetry}
        images={imageMaps.telemetry}
        accent="brand"
      />
      <Group
        tone="alt"
        eyebrow="AI EMOTIONAL DETECTION"
        title="Mental & Emotional Wellbeing"
        subtitle="Beyond usage metrics — MindSync uses AI-driven behavioral analysis to identify emotional shifts, compulsive checking loops, and cognitive fatigue."
        items={features.wellbeing}
        icons={iconMaps.wellbeing}
        images={imageMaps.wellbeing}
        accent="rose"
      />
      <Group
        tone="plain"
        eyebrow="COGNITIVE ARCHITECTURE"
        title="AI-Powered Intelligence"
        subtitle="Trained on behavioral markers and clinical best practices to deliver contextual coaching and cognitive offloading precisely when you need it."
        items={features.intelligence}
        icons={iconMaps.intelligence}
        images={imageMaps.intelligence}
        accent="violet"
      />
      <Group
        tone="alt"
        eyebrow="EMOTIONAL VISION"
        title="Facial & Emotion Analysis"
        subtitle="Advanced computer vision maps subtle facial expressions and emotional states to give you a comprehensive understanding of your emotional landscape."
        items={features.facial}
        icons={iconMaps.facial}
        images={imageMaps.facial}
        accent="emerald"
      />
      <ResponsibleTechSection />
      <FinalCTA />
    </>
  )
}

/* ============ HERO ============ */
function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-brand-50/70 via-white to-white pt-12 sm:pt-20 pb-10 sm:pb-16 text-center overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-brand-300/30 blur-3xl" />

      <div className="container-x max-w-3xl relative">
        <motion.span initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="chip">
          <Sparkles size={12}/> THE COMPLETE WELLBEING PLATFORM
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 leading-tight"
        >
          More Than Just <span className="text-brand-600">Screen Time.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.16 }}
          className="mt-5 text-ink-500 text-sm sm:text-lg"
        >
          MindSync seamlessly connects your digital behavior, mental signals, deep AI synthesis, and human-in-the-loop care to help you truly understand — and transform — your digital life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.24 }}
          className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-center"
        >
          <Button to="/signup" className="w-full sm:w-auto px-6 py-3.5 text-sm sm:text-[15px] font-semibold whitespace-nowrap">
            Get Started Free →
          </Button>
          <Button to="/how-it-works" variant="ghost" className="w-full sm:w-auto px-6 py-3.5 text-sm sm:text-[15px] font-semibold whitespace-nowrap">
            Explore MindSync
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2"
        >
          {[
            { icon: <Smartphone size={11}/>, label: '22 Features' },
            { icon: <Brain size={11}/>, label: '4 AI Engines' },
            { icon: <ShieldCheck size={11}/>, label: 'Privacy-First' },
            { icon: <ScanFace size={11}/>, label: 'Facial AU' },
          ].map((c, i) => (
            <motion.span
              key={i} whileHover={{ y: -2 }}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/70 backdrop-blur px-3 py-1.5 text-[11px] font-medium text-ink-700"
            >
              <span className="text-brand-600">{c.icon}</span> {c.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ============ GROUP ============ */
const accents = {
  brand:   { bg: 'bg-brand-50',    text: 'text-brand-600',   gradient: 'from-brand-600 to-brand-800',   hoverShadow: 'hover:shadow-[0_0_0_2px_rgba(59,91,255,0.35),0_25px_50px_-25px_rgba(59,91,255,0.4)]' },
  rose:    { bg: 'bg-rose-50',     text: 'text-rose-500',    gradient: 'from-rose-500 to-rose-700',     hoverShadow: 'hover:shadow-[0_0_0_2px_rgba(244,63,94,0.35),0_25px_50px_-25px_rgba(244,63,94,0.4)]' },
  violet:  { bg: 'bg-violet-50',   text: 'text-violet-600',  gradient: 'from-violet-600 to-violet-800', hoverShadow: 'hover:shadow-[0_0_0_2px_rgba(139,92,246,0.35),0_25px_50px_-25px_rgba(139,92,246,0.4)]' },
  emerald: { bg: 'bg-emerald-50',  text: 'text-emerald-600', gradient: 'from-emerald-600 to-emerald-800', hoverShadow: 'hover:shadow-[0_0_0_2px_rgba(16,185,129,0.35),0_25px_50px_-25px_rgba(16,185,129,0.4)]' },
}

function Group({ eyebrow, title, subtitle, items, icons = [], images = [], tone = 'plain', accent = 'brand' }) {
  const bg = tone === 'alt' ? 'bg-brand-50/40' : 'bg-white'
  const theme = accents[accent]

  return (
    <section className={`py-14 sm:py-20 ${bg}`}>
      <div className="container-x">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} align="left" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {items.map((f, i) => {
            const Icon = icons[i] || Sparkles
            const img = images[i]

            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`group relative card overflow-hidden ${theme.hoverShadow} transition-all duration-500`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={img}
                    alt={f.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />

                  <div className={`absolute bottom-3 left-3 w-10 h-10 rounded-xl ${theme.bg} ${theme.text} flex items-center justify-center shadow-soft backdrop-blur transition-transform duration-500 group-hover:scale-110`}>
                    <Icon size={18}/>
                  </div>
                </div>

                <div className="relative p-5">
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative">
                    <h3 className="text-base font-bold text-ink-900 group-hover:text-white transition-colors duration-300">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500 group-hover:text-white/85 transition-colors duration-300">
                      {f.desc}
                    </p>

                    <div className="mt-4 flex items-center gap-1 text-[11px] font-semibold text-white opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      Explore feature
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ============ RESPONSIBLE TECH ============ */
function ResponsibleTechSection() {
  const items = [
    { icon: <Smartphone size={22}/>, label: 'On-Device Processing', desc: 'Signals are analysed locally wherever possible.' },
    { icon: <ShieldCheck size={22}/>, label: 'Zero-Knowledge Cloud', desc: 'Encrypted storage — even we can’t read your data.' },
    { icon: <AlertTriangle size={22}/>, label: 'Zero Ad Monetization', desc: 'No ads. No third-party tracking. Ever.' },
    { icon: <Sparkles size={22}/>, label: 'Transparent AI', desc: 'Clear explanations for every recommendation.' },
  ]

  return (
    <section className="py-14 sm:py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="RESPONSIBLE TECHNOLOGY"
          title="Powerful Insights. Responsible Technology."
          subtitle="Your mental state and digital habits are sacred. We engineered MindSync from day one to respect them."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group card p-6 text-center hover:shadow-[0_0_0_2px_rgba(59,91,255,0.25),0_20px_40px_-20px_rgba(59,91,255,0.35)] transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mx-auto transition-transform duration-500 group-hover:scale-110">
                {it.icon}
              </div>
              <div className="mt-4 text-sm font-bold text-ink-900">{it.label}</div>
              <div className="text-xs text-ink-500 mt-1.5 leading-relaxed">{it.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============ FINAL CTA ============ */
function FinalCTA() {
  return (
    <section className="container-x pb-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl bg-gradient-to-br from-brand-700 to-brand-900 text-white p-8 sm:p-14 text-center overflow-hidden"
      >
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white/5" />

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
          <span className="chip bg-white/15 text-white">START YOUR JOURNEY TODAY</span>
          <h2 className="mt-5 text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Understand Your Digital Life.<br/>Take Control of Your Wellbeing.
          </h2>
          <p className="text-white/80 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Because your mental health matters. Join over 10,000 individuals reclaiming peace of mind in a digital world.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-center">
            <Button to="/signup" variant="white" className="w-full sm:w-auto px-6 py-3.5 text-sm sm:text-[15px] font-semibold whitespace-nowrap">
              Get Started Free Today
            </Button>
            <Button to="/contact" variant="dark" className="w-full sm:w-auto px-6 py-3.5 text-sm sm:text-[15px] font-semibold whitespace-nowrap">
              Schedule Enterprise Demo
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}