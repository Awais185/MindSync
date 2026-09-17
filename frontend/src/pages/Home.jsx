import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sparkles, ArrowRight, PlayCircle, Smartphone, Brain, Heart, ShieldCheck, Activity } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Marquee from '../components/Marquee'
import AnimatedPhone from '../components/AnimatedPhone'
import ProblemCard from '../components/ProblemCard'
import ResearchCard from '../components/ResearchCard'
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

/* ============ HERO ============ */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-white">
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-brand-300/30 blur-3xl" />

      <div className="container-x relative pt-8 sm:pt-14 lg:pt-20 pb-12 sm:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
          {/* TEXT — first on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span className="chip mb-4 sm:mb-5 inline-flex text-[10px] sm:text-xs">
              <Sparkles size={11} /> AI-Powered Digital &amp; Mental Wellbeing
            </span>

            <h1 className="text-[26px] leading-[1.15] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900">
              Understand Your <span className="text-brand-600">Digital Life.</span><br />
              Improve Your Wellbeing.
            </h1>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-ink-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
              MindSync — More than just screen time or activity tracking. MindSync uses AI to help you recognize unhealthy digital habits, understand stress and emotional patterns, and build a healthier daily life.
            </p>

            <div className="mt-5 sm:mt-7 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
              <Link to="/signup" className="btn-primary px-5 sm:px-6 py-2.5 sm:py-3 w-full sm:w-auto text-sm sm:text-base">
                Get Started <ArrowRight size={16} />
              </Link>
              <Link to="/how-it-works" className="btn-ghost px-5 sm:px-6 py-2.5 sm:py-3 w-full sm:w-auto text-sm sm:text-base">
                <PlayCircle size={16} /> Explore MindSync
              </Link>
            </div>

            {/* Avatar stack + 10k users */}
            <div className="mt-6 sm:mt-7 flex items-center gap-3 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces&auto=format&q=80',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces&auto=format&q=80',
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces&auto=format&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces&auto=format&q=80',
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div className="text-xs sm:text-sm text-ink-500">
                <span className="font-semibold text-ink-900">10k+</span> users finding balance
              </div>
            </div>
          </motion.div>

          {/* PHONE — after text on mobile */}
          <div className="flex justify-center lg:justify-end -mt-2 sm:mt-0">
            <AnimatedPhone className="scale-[0.82] sm:scale-95 lg:scale-100 origin-top" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============ PROBLEMS MARQUEE ============ */
function ProblemsSection() {
  return (
    <section className="pt-6 sm:pt-14 lg:pt-20 pb-10 sm:pb-16 lg:pb-24 bg-gradient-to-b from-white to-brand-50/40 overflow-hidden">
      <div className="container-x">
        <SectionHeading
          eyebrow="PROBLEMS WE FACE TODAY"
          title="Real problems of today’s digital generation."
          subtitle="Nine patterns that silently shape mental health — and that traditional screen-time tools fail to see. Hover to pause and read."
          compact
        />
      </div>

      <Marquee speed={70} hoverSpeedFactor={0} gap="gap-6">
        {problems.map((p, i) => <ProblemCard key={i} {...p} />)}
      </Marquee>

      <div className="h-3 sm:h-6" />

      <Marquee speed={85} reverse hoverSpeedFactor={0} gap="gap-6">
        {[...problems].reverse().map((p, i) => <ProblemCard key={i} {...p} />)}
      </Marquee>
    </section>
  )
}

/* ============ RESEARCH ============ */
function ResearchSection() {
  return (
    <section className="py-10 sm:py-16 lg:py-24 bg-gradient-to-b from-brand-50/50 via-white to-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="RESEARCH BEHIND THE PROBLEM"
          title="Backed by leading global health organizations."
          subtitle="The challenges MindSync addresses are supported by research from WHO, UNICEF, APA, and the U.S. Surgeon General."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {research.map((r, i) => (
            <ResearchCard key={i} {...r} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============ PIPELINE ============ */
function PipelineSection() {
  const steps = [
    { icon: Smartphone, label: 'Digital Behavior', desc: 'App usage, sessions, switching' },
    { icon: Brain, label: 'Behavioral Patterns', desc: 'Deviation from your baseline' },
    { icon: Heart, label: 'Emotional Indicators', desc: 'Mood & facial AU signals' },
    { icon: Activity, label: 'Wellbeing Insights', desc: 'Unified wellbeing index' },
    { icon: ShieldCheck, label: 'Personalized Support', desc: 'Guidance & human hand-off' },
  ]

  return (
    <section className="py-10 sm:py-16 lg:py-24 bg-gradient-to-b from-white to-brand-50/60">
      <div className="container-x">
        <SectionHeading
          eyebrow="HOW MINDSYNC HELPS"
          title="Research shows the problem. MindSync helps you understand the patterns."
          subtitle="More than just screen-time tracking. Because your mental health matters."
        />

        <div className="relative card p-5 sm:p-8 lg:p-10">
          {/* Desktop flow */}
          <div className="hidden md:block">
            <div className="relative flex items-start justify-between gap-4">
              <div className="absolute left-8 right-8 top-7 h-px bg-gradient-to-r from-brand-200 via-brand-300 to-brand-200" />

              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="relative flex flex-col items-center text-center flex-1 max-w-[180px]"
                >
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="relative z-10 w-14 h-14 rounded-2xl bg-white border border-brand-100 shadow-soft flex items-center justify-center"
                  >
                    <s.icon size={22} className="text-brand-600" />
                    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-brand-600 text-white text-[10px] font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </motion.div>

                  <div className="mt-3 text-sm font-semibold text-ink-900 leading-tight">
                    {s.label}
                  </div>
                  <div className="mt-1 text-[11px] text-ink-500 leading-snug max-w-[150px]">
                    {s.desc}
                  </div>

                  {i < steps.length - 1 && (
                    <div className="absolute top-5 -right-3 z-10 text-brand-300">
                      <ArrowRight size={14} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile flow */}
          <div className="md:hidden space-y-3">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-100"
              >
                <div className="relative w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                  <s.icon size={18} />
                  <span className="absolute -top-1 -right-1 w-4.5 h-4.5 min-w-[18px] min-h-[18px] rounded-full bg-brand-600 text-white text-[10px] font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-ink-900">{s.label}</div>
                  <div className="text-[11px] text-ink-500 mt-0.5">{s.desc}</div>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight size={14} className="text-brand-300 shrink-0 rotate-90" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}