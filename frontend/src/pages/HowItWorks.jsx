import { motion } from 'framer-motion'
import {
  AppWindow, Clock, Camera, Brain, Sparkles, Smartphone, Activity,
  ShieldCheck, Heart, BarChart3, ScanFace, MessageCircle, TrendingUp,
  Moon, Lock, Ban, UserCheck, Timer, Eye, LineChart, FileText,
  Stethoscope, Zap, Users
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { steps } from '../data/content'

export default function HowItWorks() {
  return (
    <>
      <Hero />
      <JourneySection />
      <BeyondScreenTimeSection />
      <FlowStripSection />
      <DeepFeaturesSection />
      <ToolNotTreatmentSection />
    </>
  )
}

/* ============ HERO ============ */
function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-brand-50/60 via-white to-white pt-12 sm:pt-20 pb-10 sm:pb-16 text-center overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-brand-200/30 blur-3xl" />
      <div className="container-x max-w-3xl relative">
        <span className="chip">THE PROCESS</span>
        <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 leading-tight">
          How MindSync Translates Data into <span className="text-brand-600">Clarity</span>
        </h1>
        <p className="mt-5 text-ink-500 text-sm sm:text-lg">
          Discover the sophisticated AI architecture that securely analyses your digital footprint to provide actionable insights for your mental wellbeing and cognitive performance.
        </p>
      </div>
    </section>
  )
}

/* ============ JOURNEY (6 STEPS) ============ */
function JourneySection() {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-white to-brand-50/40">
      <div className="container-x">
        <SectionHeading
          eyebrow="THE DATA-TO-INSIGHT JOURNEY"
          title="The 6-step journey"
          subtitle="MindSync transforms everyday digital and emotional signals into meaningful wellbeing insights through a structured 7-day study."
        />
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="card p-6 flex flex-col hover:shadow-[0_0_0_2px_rgba(59,91,255,0.25),0_20px_40px_-20px_rgba(59,91,255,0.35)] transition-shadow"
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
                      <motion.div key={idx}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.06 }}
                        className="flex-1 bg-brand-500/80 rounded-t-md" />
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
  )
}

/* ============ BEYOND SCREEN TIME (REDESIGNED) ============ */
function BeyondScreenTimeSection() {
  return (
    <section className="py-14 sm:py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="THE MINDSYNC DIFFERENCE"
          title="Beyond Screen Time"
          subtitle="Traditional tracking tells you how long. MindSync reveals what your digital behaviour actually means."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
          {/* Traditional card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-6 sm:p-7"
          >
            <span className="chip">BASIC TRACKING</span>
            <h3 className="mt-4 text-2xl font-bold text-ink-900">Traditional Screen-Time Tracking</h3>
            <p className="text-ink-500 italic mt-2">“How long did you use your phone?”</p>
            <div className="mt-6 rounded-2xl border border-slate-100 p-5 bg-slate-50/60">
              <div className="flex justify-between text-sm"><span className="text-ink-400">Total Time</span><span className="font-semibold text-ink-900">4h 12m</span></div>
              <div className="mt-3 flex gap-1.5 h-20 items-end">
                {[30,45,60,40,70,55,65,50,80,60].map((h,i)=>(
                  <div key={i} className="flex-1 bg-slate-300 rounded-md" style={{height:h+'%'}}/>
                ))}
              </div>
            </div>
          </motion.div>

          {/* MindSync card — unique features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-6 sm:p-7 border-brand-200 ring-1 ring-brand-100 bg-gradient-to-br from-white to-brand-50/30"
          >
            <span className="chip">DEEPER INSIGHT</span>
            <h3 className="mt-4 text-2xl font-bold text-brand-700">MindSync</h3>
            <p className="text-ink-500 italic mt-2">“What patterns are happening — and how can healthier habits be encouraged?”</p>

            <div className="mt-6 space-y-3">
              <InsightRow icon={<Activity size={16}/>} label="App-Level Telemetry" value="Session patterns & switching" />
              <InsightRow icon={<ScanFace size={16}/>} label="Facial Action Units (AU)" value="Micro-expression mapping" />
              <InsightRow icon={<MessageCircle size={16}/>} label="AI Digital Psychologist" value="Context-aware guidance" />
              <InsightRow icon={<Heart size={16}/>} label="Emotional Correlation" value="Mood ↔ Behaviour" />

              <div className="rounded-xl bg-white border border-brand-100 p-3 text-xs text-ink-500">
                <span className="font-semibold text-brand-700">Insight:</span> Frequent app switching correlated with increased facial tension (AU4, AU7). Recommending a 5-minute focus block.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ============ FLOW STRIP (HOW DATA MOVES) ============ */
function FlowStripSection() {
  const flow = [
    { icon: <Clock size={18}/>, label: 'Screen Time', detail: 'Raw duration' },
    { icon: <AppWindow size={18}/>, label: 'App Behaviour', detail: 'Switching, sessions' },
    { icon: <Activity size={18}/>, label: 'Digital Patterns', detail: 'Late-night, cadence' },
    { icon: <Heart size={18}/>, label: 'Emotional Indicators', detail: 'Mood, AU signals' },
    { icon: <Brain size={18}/>, label: 'AI Synthesis', detail: 'ML / Deep Learning' },
  ]

  return (
    <section className="py-14 sm:py-20 bg-brand-50/40">
      <div className="container-x">
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title="From raw signals to meaningful insight"
          subtitle="Every layer adds context. MindSync continuously collects, correlates, and interprets digital and emotional data to build a complete picture of your wellbeing."
        />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {flow.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="relative card p-5 flex flex-col items-center text-center hover:shadow-[0_0_0_2px_rgba(59,91,255,0.25),0_20px_40px_-20px_rgba(59,91,255,0.35)] transition-shadow"
            >
              <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                {f.icon}
              </span>
              <div className="mt-3 text-sm font-semibold text-ink-900">{f.label}</div>
              <div className="text-[11px] text-ink-500 mt-1">{f.detail}</div>

              {i < flow.length - 1 && (
                <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border border-brand-200 text-brand-600 flex items-center justify-center text-[10px] font-bold">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-ink-500 flex items-center justify-center gap-2">
          <ShieldCheck size={16} className="text-brand-600"/> MindSync is a supplementary tool — not a medical diagnosis.
        </div>
      </div>
    </section>
  )
}

/* ============ DEEP FEATURES (4 CARDS REDESIGNED) ============ */
function DeepFeaturesSection() {
  return (
    <section className="py-14 sm:py-20">
      <div className="container-x space-y-5">
        {/* Digital Psychologist — full width */}
        <DigitalPsychologistCard />

        {/* Parental Control + Smart Tracking */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <ParentalControlCard />
          <SmartTrackingCard />
        </div>

        {/* 7-Day Study — full width */}
        <SevenDayStudyCard />
      </div>
    </section>
  )
}

/* --- Digital Psychologist --- */
function DigitalPsychologistCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl bg-white border border-slate-100 shadow-soft overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left — copy */}
        <div className="p-6 sm:p-8">
          <span className="chip">AI SUPPORT</span>
          <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-ink-900">Digital Psychologist</h3>
          <p className="mt-3 text-sm text-ink-500 leading-relaxed">
            Unlike generic chatbots, MindSync’s AI Digital Psychologist <strong className="text-ink-900">remembers your behavioural history</strong> — your app patterns, emotional rhythms, sleep, stress, and focus trends. Every conversation is grounded in your actual data, not generic advice.
          </p>

          <ul className="mt-5 space-y-2.5">
            {[
              'Knows your recent behaviour & activity patterns.',
              'References your 7-day study, mood trends, and sleep.',
              'Adapts tone and suggestions to your current state.',
              'Escalates to a real certified professional when needed.',
            ].map((t, i) => (
              <motion.li
                key={t}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.06 }}
                className="flex items-start gap-3 text-sm text-ink-700"
              >
                <span className="w-5 h-5 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck size={12}/>
                </span>
                {t}
              </motion.li>
            ))}
          </ul>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1.5 text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Real-time doctor support available
          </div>
        </div>

        {/* Right — chat mockup */}
        <div className="bg-gradient-to-br from-brand-50/60 via-white to-brand-100/40 p-6 sm:p-8 flex items-center justify-center">
          <ChatCard />
        </div>
      </div>
    </motion.div>
  )
}

function ChatCard() {
  const messages = [
    { from: 'ai', text: 'I noticed you’ve been context-switching a lot today and your sleep dipped below baseline. How are you feeling?' },
    { from: 'user', text: 'Overwhelmed honestly.' },
    { from: 'ai', text: 'That matches the pattern I’m seeing. Would a 3-minute breathing reset help before your next block?' },
    { from: 'user', text: 'Yes please.' },
  ]
  return (
    <div className="w-full max-w-sm rounded-2xl bg-white border border-slate-100 shadow-card overflow-hidden">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-100">
        <div className="relative">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white">
            <Sparkles size={16}/>
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white" />
        </div>
        <div>
          <div className="text-sm font-semibold text-ink-900">AI Digital Psychologist</div>
          <div className="text-[11px] text-emerald-600">Online · Knows your data</div>
        </div>
      </div>
      <div className="p-4 space-y-2.5">
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.12 }}
            className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[85%] rounded-2xl px-3 py-2 text-xs leading-snug ${
              m.from === 'user'
                ? 'bg-brand-600 text-white rounded-br-sm'
                : 'bg-slate-50 border border-slate-100 text-ink-700 rounded-bl-sm'
            }`}>
              {m.text}
            </div>
          </motion.div>
        ))}
        <div className="flex justify-start">
          <div className="bg-slate-50 border border-slate-100 rounded-2xl rounded-bl-sm px-3 py-2 flex items-center gap-1">
            {[0,1,2].map(i => (
              <motion.span key={i}
                animate={{ y: [0, -3, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                className="w-1.5 h-1.5 rounded-full bg-brand-500"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* --- Parental Control --- */
function ParentalControlCard() {
  const tools = [
    { icon: <Ban size={16}/>, label: 'Content Blocking', desc: 'Block harmful sites & apps' },
    { icon: <Lock size={16}/>, label: 'App Blocking', desc: 'Restrict specific apps' },
    { icon: <UserCheck size={16}/>, label: 'Adult Content Filter', desc: 'Auto-detect & block' },
    { icon: <Timer size={16}/>, label: 'Usage Limits', desc: 'Daily / weekly caps' },
    { icon: <Moon size={16}/>, label: 'Bedtime Mode', desc: 'Late-night lockouts' },
    { icon: <Eye size={16}/>, label: 'Activity Alerts', desc: 'Meaningful changes only' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl bg-gradient-to-br from-brand-700 to-brand-900 text-white p-6 sm:p-8 shadow-soft"
    >
      <span className="chip bg-white/15 text-white">FAMILY WELLBEING</span>
      <h3 className="mt-4 text-2xl font-bold">Parental Control</h3>
      <p className="mt-2 text-sm text-white/80 leading-relaxed">
        Gives parents practical tools — not just reports. Shape a healthier digital environment at home with granular controls and gentle insights.
      </p>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {tools.map((t, i) => (
          <motion.div
            key={t.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.06 }}
            whileHover={{ y: -3, scale: 1.02 }}
            className="rounded-xl bg-white/10 border border-white/15 p-3"
          >
            <span className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center text-white">
              {t.icon}
            </span>
            <div className="mt-2 text-xs font-semibold">{t.label}</div>
            <div className="text-[10px] text-white/70 mt-0.5 leading-tight">{t.desc}</div>
          </motion.div>
        ))}
      </div>

      <div className="mt-5 text-[11px] text-white/60 italic">
        Parental insights are privacy-first: only meaningful, anonymised behavioural shifts are surfaced — never raw content.
      </div>
    </motion.div>
  )
}

/* --- Smart Tracking --- */
function SmartTrackingCard() {
  const items = [
    { icon: <Activity size={16}/>, title: 'Active in Background', desc: 'Runs passively with minimal battery impact.' },
    { icon: <Heart size={16}/>, title: 'Mood & Emotion Signals', desc: 'Detects emotional shifts from interaction patterns.' },
    { icon: <ScanFace size={16}/>, title: 'Facial Action Units', desc: 'Subtle micro-expression analysis (with consent).' },
    { icon: <LineChart size={16}/>, title: 'Deep Behavioural Study', desc: 'Correlates app usage, cadence, and mood over time.' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="rounded-3xl bg-white border border-slate-100 shadow-soft p-6 sm:p-8"
    >
      <span className="chip">MORE THAN SCREEN TIME</span>
      <h3 className="mt-4 text-2xl font-bold text-ink-900">Smart Tracking</h3>
      <p className="mt-2 text-sm text-ink-500 leading-relaxed">
        MindSync works quietly in the background — continuously studying your mood, activity, and digital patterns without interrupting your day.
      </p>

      <div className="mt-5 space-y-3">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.07 }}
            whileHover={{ x: 3 }}
            className="flex items-start gap-3 p-3 rounded-xl border border-slate-100 hover:border-brand-200 hover:bg-brand-50/40 transition-colors"
          >
            <span className="w-9 h-9 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
              {it.icon}
            </span>
            <div>
              <div className="text-sm font-semibold text-ink-900">{it.title}</div>
              <div className="text-xs text-ink-500 mt-0.5">{it.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

/* --- 7-Day Study --- */
function SevenDayStudyCard() {
  const bars = [30, 55, 75, 45, 85, 60, 40]
  const days = ['M','T','W','T','F','S','S']

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl bg-white border border-slate-100 shadow-soft p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left — copy */}
        <div>
          <span className="chip">7-DAY ANALYSIS</span>
          <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-ink-900">The 7-Day Report</h3>
          <p className="mt-3 text-sm text-ink-500 leading-relaxed">
            After a full week of passive study, MindSync generates a <strong className="text-ink-900">data-rich progress report</strong> — combining app-level telemetry, emotional signals, sleep, and facial AU analysis into one clear narrative.
          </p>

          <ul className="mt-5 space-y-2.5">
            {[
              'All 7 days of digital & emotional data, unified.',
              'AI-derived insights from ML / Deep Learning models.',
              'Reviewed by a real physiologist to validate the pattern.',
              'Personalised recommendations based on your baseline.',
            ].map((t, i) => (
              <motion.li
                key={t}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.06 }}
                className="flex items-start gap-3 text-sm text-ink-700"
              >
                <span className="w-5 h-5 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck size={12}/>
                </span>
                {t}
              </motion.li>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-3 rounded-2xl bg-brand-50/60 border border-brand-100 p-3 max-w-sm">
            <span className="w-9 h-9 rounded-full bg-white border border-brand-100 text-brand-600 flex items-center justify-center shrink-0">
              <Stethoscope size={16}/>
            </span>
            <div>
              <div className="text-xs font-semibold text-ink-900">Reviewed by Real Physiologist</div>
              <div className="text-[11px] text-ink-500">For accuracy & human context</div>
            </div>
          </div>
        </div>

        {/* Right — chart */}
        <div className="rounded-2xl border border-slate-100 p-5 bg-slate-50/60">
          <div className="flex items-center justify-between text-xs">
            <span className="text-ink-400 font-medium">Weekly Behaviour Index</span>
            <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold">
              <TrendingUp size={12}/> +18% vs last week
            </span>
          </div>
          <div className="mt-4 flex items-end gap-2 h-40">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.07 }}
                className="flex-1 rounded-t-md bg-gradient-to-t from-brand-600 to-brand-400"
              />
            ))}
          </div>
          <div className="text-[10px] text-ink-400 mt-2 flex justify-between">
            {days.map((d, i) => <span key={i}>{d}</span>)}
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              { icon: <Moon size={14}/>, label: 'Sleep', value: '7h 20m' },
              { icon: <Activity size={14}/>, label: 'Focus', value: 'High' },
              { icon: <Heart size={14}/>, label: 'Mood', value: 'Steady' },
            ].map(s => (
              <div key={s.label} className="rounded-xl bg-white border border-slate-100 p-3 text-center">
                <div className="flex justify-center text-brand-600">{s.icon}</div>
                <div className="text-[10px] text-ink-400 font-semibold tracking-wider mt-1.5">{s.label.toUpperCase()}</div>
                <div className="text-xs font-bold text-ink-900 mt-0.5">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ============ TOOL NOT TREATMENT ============ */
function ToolNotTreatmentSection() {
  return (
    <section className="container-x pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto card p-8 text-center"
      >
        <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mx-auto mb-4">
          <ShieldCheck size={22}/>
        </div>
        <h3 className="text-2xl font-bold text-ink-900">A Tool, Not a Treatment</h3>
        <p className="text-ink-500 mt-3 leading-relaxed text-sm sm:text-base">
          MindSync is designed as a supplementary tool for cognitive performance enhancement and daily wellbeing awareness. It utilizes behavioral pattern recognition to provide lifestyle suggestions.
        </p>
        <p className="text-ink-400 text-xs sm:text-sm mt-3 italic">
          It does not provide medical diagnoses and is not a replacement for professional therapeutic or psychiatric care.
        </p>
      </motion.div>
    </section>
  )
}

/* ============ HELPERS ============ */
function InsightRow({ icon, label, value }) {
  return (
    <div className="flex items-center justify-between gap-3 text-sm">
      <span className="inline-flex items-center gap-2 text-ink-700">
        <span className="w-7 h-7 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">{icon}</span>
        <span className="font-medium">{label}</span>
      </span>
      <span className="text-xs text-ink-500 text-right">{value}</span>
    </div>
  )
}