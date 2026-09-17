import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Apple, Play, Activity, Heart, Sparkles, ShieldCheck, Waves, Mic, Brain, MessageCircle, Stethoscope, Send, Moon, Smartphone, LineChart, PlayCircle } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import AnimatedPhone from '../components/AnimatedPhone'
import introVideo from '../media/intro video .mp4'

export default function MindSyncApp() {
  const [toast, setToast] = useState(null)

  const showToast = () => {
    setToast('MindSync app is coming soon to App Store & Google Play.')
    setTimeout(() => setToast(null), 3500)
  }

  return (
    <>
      <Hero onStoreClick={showToast} />
      <MotionSection />
      <BehaviourStudySection />
      <DigitalPsychologistSection />
      <CTA onStoreClick={showToast} />

      {/* Coming Soon Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] max-w-[92vw] sm:max-w-md"
          >
            <div className="flex items-center gap-3 rounded-2xl bg-navy-900 text-white px-5 py-3.5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
              <span className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center shrink-0">
                <Sparkles size={16}/>
              </span>
              <div className="min-w-0">
                <div className="text-sm font-semibold">Coming Soon</div>
                <div className="text-xs text-white/75 truncate">{toast}</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

/* ============ HERO ============ */
function Hero({ onStoreClick }) {
  return (
    <section className="relative bg-gradient-to-b from-brand-50/60 via-white to-white pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-14 text-center overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-200/30 blur-3xl" />

      <div className="container-x max-w-3xl">
        <span className="chip">AVAILABLE NOW</span>
        <h1 className="mt-4 sm:mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 leading-tight">
          Your Digital &amp; Mental Wellbeing, <span className="text-brand-600">Wherever You Go.</span>
        </h1>
        <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-ink-500">
          Experience the full power of MindSync in your pocket. Seamlessly sync your cognitive metrics, track your focus states, and receive real-time insights tailored to your daily rhythm.
        </p>
        <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row gap-3 justify-center">
          <StoreBadge onClick={onStoreClick} icon={<Apple size={20}/>} top="Download on the" bot="App Store" />
          <StoreBadge onClick={onStoreClick} icon={<Play size={20}/>} top="GET IT ON" bot="Google Play" />
        </div>
      </div>

      {/* Two cards side-by-side: video + app preview */}
      <div className="container-x mt-10 sm:mt-14 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Video Card — now 16:9 aspect to fit the local video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden shadow-card border border-slate-100 aspect-video bg-navy-900"
          >
            <video
              src={introVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/20 to-transparent pointer-events-none" />

            {/* Play indicator / label */}
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/15 backdrop-blur-md rounded-full px-3 py-1.5 text-white text-xs font-medium pointer-events-none">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-left text-white pointer-events-none">
              <div className="text-[10px] font-semibold tracking-[0.18em] text-white/70">
                MINDSYNC DEMO
              </div>
              <div className="mt-1.5 text-lg sm:text-xl lg:text-2xl font-bold leading-tight">
               
              </div>
              <div className="mt-2 flex items-center gap-2 text-xs text-white/80">
              </div>
            </div>
          </motion.div>

          {/* App Preview Card — matching height (16:9 to align with video card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-3xl overflow-hidden shadow-card border border-slate-100 aspect-video bg-gradient-to-br from-brand-50 via-white to-brand-100/40 p-4 sm:p-6 flex flex-col justify-between"
          >
            {/* Top */}
            <div className="flex items-center justify-between">
              <div className="chip text-[10px]">APP PREVIEW</div>
              <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live
              </div>
            </div>

            {/* Center phone */}
            <div className="flex-1 flex items-center justify-center my-2">
              <div className="scale-[0.55] sm:scale-[0.6] lg:scale-[0.65] origin-center">
                <AnimatedPhone />
              </div>
            </div>

            {/* Bottom caption */}
            <div className="text-center">
              <div className="text-xs sm:text-sm font-bold text-ink-900">
                Your daily wellbeing, at a glance.
              </div>
              <div className="text-[10px] sm:text-xs text-ink-500 mt-0.5">
                Cognitive score · Stress · Anxiety · Sleep · Focus
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ============ MOTION / EXPERIENCE SECTION ============ */
function MotionSection() {
  return (
    <section className="py-14 sm:py-24 bg-gradient-to-b from-white to-brand-50/40">
      <div className="container-x">
        <SectionHeading
          eyebrow="EXPERIENCE MINDSYNC IN MOTION"
          title={<>See How MindSync Nurtures Your <span className="text-brand-600">Mental Health</span></>}
          subtitle="Watch how real-time bio-behavioral telemetry, gentle breathing recalibrations, and AI-guided moments seamlessly restore cognitive calm throughout your workday."
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
          <div className="space-y-4 order-2 lg:order-1">
            <Pill icon={<Heart size={14}/>} title="Moodful Breath Sync" desc="Active • 4-7-8 Rhythm" />
            <Pill icon={<Activity size={14}/>} title="42% Decrease" desc="Stress variance within 6-min" />
            <Pill icon={<Sparkles size={14}/>} title="Context-Aware Intervention" desc="Calm intervention prompted automatically" />
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <AnimatedPhone className="scale-[0.85] sm:scale-95 lg:scale-100 origin-top" />
          </div>

          <div className="space-y-5 order-3">
            <MiniFeature icon={<Activity size={18}/>} title="Ambient Biometrics" desc="Passive telemetry observes mental tension patterns without interruptions." />
            <MiniFeature icon={<Waves size={18}/>} title="Micro-Recalibrations" desc="Instant 90-second breathing exercises sync your heart and mind on demand." />
            <MiniFeature icon={<Mic size={18}/>} title="Neuro-Adaptive Audio" desc="Sound frequencies engineered dynamically to drop stress valence in real time." />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============ BEHAVIOUR STUDY ============ */
function BehaviourStudySection() {
  return (
    <section className="py-14 sm:py-20">
      <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-slate-100 shadow-card">
            <img
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&q=80&auto=format&fit=crop"
              alt="Behaviour study on phone"
              className="w-full h-full object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute -bottom-4 -right-4 sm:-right-6 bg-white rounded-2xl shadow-card border border-slate-100 p-4 w-[200px]"
          >
            <div className="flex items-center gap-2 text-[10px] font-semibold text-brand-700 tracking-wider">
              <Activity size={11}/> APP-LEVEL TELEMETRY
            </div>
            <div className="mt-3 flex items-end gap-1.5 h-12">
              {[35, 55, 40, 70, 50, 85, 60, 75].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.05 }}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-brand-600 to-brand-400"
                />
              ))}
            </div>
            <div className="mt-2 text-[10px] text-ink-400">Mon · Tue · Wed · Thu · Fri · Sat · Sun</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:order-2"
        >
          <span className="chip mb-4">
            <Brain size={12}/> BEHAVIOUR STUDY
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 leading-tight">
            App-Level Telemetry & Behavioural Patterns
          </h2>
          <p className="mt-4 text-ink-500 leading-relaxed text-sm sm:text-base">
            MindSync doesn’t just count minutes — it studies <em>how</em> you use your device. App-level telemetry tracks session patterns, context switching, late-night activity, and deviation from your normal behaviour to reveal hidden drivers of digital fatigue.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              { icon: <Smartphone size={13}/>, text: 'App-by-app session analysis with engagement quality.' },
              { icon: <Activity size={13}/>, text: 'Context switching and interaction velocity tracking.' },
              { icon: <Moon size={13}/>, text: 'Late-night and circadian pattern detection.' },
              { icon: <LineChart size={13}/>, text: 'Deviation from your personal behavioural baseline.' },
            ].map((row, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="flex items-start gap-3 text-sm text-ink-700"
              >
                <span className="w-6 h-6 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                  {row.icon}
                </span>
                {row.text}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

/* ============ DIGITAL PSYCHOLOGIST ============ */
function DigitalPsychologistSection() {
  return (
    <section className="py-14 sm:py-20 bg-brand-50/40">
      <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="chip mb-4">
            <MessageCircle size={12}/> AI DIGITAL PSYCHOLOGIST
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 leading-tight">
            Talk it out, anytime.
          </h2>
          <p className="mt-4 text-ink-500 leading-relaxed text-sm sm:text-base">
            MindSync’s AI Digital Psychologist offers judgement-free, supportive conversations whenever you need them. Guided check-ins, contextual coping strategies, and — when necessary — a smooth hand-off to a real human professional.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              'Judgement-free AI conversation, 24/7.',
              'Context-aware coping strategies based on your patterns.',
              'Private, encrypted, and consent-based.',
              'Seamless escalation to real, certified therapists.',
            ].map((text, i) => (
              <motion.li
                key={text}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="flex items-start gap-3 text-sm text-ink-700"
              >
                <span className="w-6 h-6 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck size={12}/>
                </span>
                {text}
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 rounded-2xl bg-white border border-brand-100 p-4 shadow-soft flex items-center gap-4 max-w-md"
          >
            <div className="relative shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white flex items-center justify-center">
                <Stethoscope size={20}/>
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-emerald-400 border-2 border-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-ink-900 truncate">Real-time Doctor Support</div>
              <div className="text-xs text-ink-500">Certified professionals available now</div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-full px-3 py-1.5 transition shrink-0"
            >
              Connect
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-md"
        >
          <ChatMockup />
        </motion.div>
      </div>
    </section>
  )
}

/* ============ CTA ============ */
function CTA({ onStoreClick }) {
  return (
    <section className="container-x py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl bg-gradient-to-br from-brand-700 to-brand-900 text-white p-8 sm:p-14 text-center relative overflow-hidden"
      >
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/5" />
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold relative">Ready to Optimize Your Mind?</h2>
        <p className="text-white/80 mt-4 max-w-xl mx-auto relative text-sm sm:text-base">
          Join thousands of high-performers who trust MindSync to maintain cognitive excellence. Download the app today and start your journey.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center relative">
          <StoreBadge light onClick={onStoreClick} icon={<Apple size={20}/>} top="Download on the" bot="App Store" />
          <StoreBadge light onClick={onStoreClick} icon={<Play size={20}/>} top="GET IT ON" bot="Google Play" />
        </div>
      </motion.div>
    </section>
  )
}

/* ============ HELPERS ============ */

function ChatMockup() {
  const messages = [
    { from: 'ai', text: 'Good evening. I noticed you’ve been context-switching a lot today. How are you feeling?' },
    { from: 'user', text: 'A bit overwhelmed honestly.' },
    { from: 'ai', text: 'That makes sense given the pattern. Would a 2-minute breathing reset help right now?' },
    { from: 'user', text: 'Yes please.' },
  ]

  return (
    <div className="relative rounded-3xl bg-white border border-slate-100 shadow-card overflow-hidden">
      <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white">
              <Sparkles size={16}/>
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white" />
          </div>
          <div>
            <div className="text-sm font-semibold text-ink-900">AI Digital Psychologist</div>
            <div className="text-[11px] text-emerald-600 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Online · Private
            </div>
          </div>
        </div>
        <Stethoscope size={16} className="text-ink-400"/>
      </div>

      <div className="p-4 sm:p-5 space-y-3 bg-gradient-to-b from-slate-50/40 to-white">
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.15 }}
            className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-snug ${
              m.from === 'user'
                ? 'bg-brand-600 text-white rounded-br-sm'
                : 'bg-white border border-slate-100 text-ink-700 rounded-bl-sm shadow-sm'
            }`}>
              {m.text}
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 1 }}
          className="flex justify-start"
        >
          <div className="bg-white border border-slate-100 rounded-2xl rounded-bl-sm shadow-sm px-3.5 py-2.5 flex items-center gap-1">
            {[0, 1, 2].map(i => (
              <motion.span
                key={i}
                animate={{ y: [0, -3, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                className="w-1.5 h-1.5 rounded-full bg-brand-500"
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="px-4 sm:px-5 py-3 border-t border-slate-100 flex items-center gap-2">
        <div className="flex-1 rounded-full bg-slate-100 px-4 py-2 text-xs text-ink-400">
          Type a message…
        </div>
        <button className="w-9 h-9 rounded-full bg-brand-600 text-white flex items-center justify-center hover:bg-brand-700 transition">
          <Send size={14}/>
        </button>
      </div>
    </div>
  )
}

function StoreBadge({ icon, top, bot, light = false, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-3 rounded-2xl px-5 py-3 transition ${light ? 'bg-white text-navy-900 hover:bg-slate-100' : 'bg-navy-900 text-white hover:bg-navy-800'}`}
    >
      {icon}
      <div className="text-left leading-tight">
        <div className="text-[10px] opacity-70">{top}</div>
        <div className="text-sm font-semibold">{bot}</div>
      </div>
    </button>
  )
}

function Pill({ icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-soft border border-slate-100 p-4 flex items-start gap-3 max-w-sm"
    >
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
      <span className="w-11 h-11 rounded-xl bg-white border border-slate-100 shadow-soft flex items-center justify-center text-brand-600 shrink-0">
        {icon}
      </span>
      <div>
        <div className="font-semibold text-ink-900">{title}</div>
        <div className="text-sm text-ink-500 mt-1 leading-relaxed">{desc}</div>
      </div>
    </div>
  )
}