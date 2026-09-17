import { Check, Sparkles, ShieldCheck, Stethoscope, Crown } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { faqs } from '../data/content'

export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: 'Rs. 0',
      period: '/month',
      tagline: 'Essential tools to start your journey towards better mental clarity.',
      features: [
        'Basic cognitive assessments',
        'Limited daily exercises',
        'Community forum access',
      ],
      cta: 'Get Started Free',
      variant: 'ghost',
      accent: 'slate',
    },
    {
      name: 'Basic',
      price: 'Rs. 560',
      period: '/month',
      tagline: 'Advanced AI insights and unlimited exercises for consistent growth.',
      features: [
        'Everything in Free',
        'Unlimited cognitive exercises',
        'AI-driven performance insights',
        'Weekly progress reports',
      ],
      cta: 'Start 14-Day Trial',
      variant: 'primary',
      popular: true,
      off: '20% OFF',
      accent: 'brand',
    },
    {
      name: 'Premium',
      price: 'Rs. 999',
      period: '/month',
      tagline: 'The ultimate toolkit for peak mental performance and coaching.',
      features: [
        'Everything in Basic',
        '1-on-1 monthly expert session',
        'Customized training plans',
        'Priority support',
      ],
      cta: 'Upgrade to Premium',
      variant: 'ghost',
      off: '20% OFF',
      accent: 'violet',
    },
    {
      name: 'Doctor',
      price: 'Rs. 2,499',
      period: '/month',
      tagline: 'Complete care — everything in Premium plus direct access to certified doctors.',
      features: [
        'Everything in Basic & Premium',
        'Verified Doctor Profile assigned',
        'Book appointments directly in-app',
        'Priority video/chat consultation',
        'Clinical-grade wellbeing report',
        'Emergency escalation pathway',
      ],
      cta: 'Get Doctor Plan',
      variant: 'primary',
      off: '20% OFF',
      accent: 'emerald',
      doctor: true,
    },
  ]

  return (
    <>
      <Hero />

      {/* Plans */}
      <section className="py-10 sm:py-16">
        <div className="container-x">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch">
            {plans.map((p, i) => (
              <PlanCard key={p.name} p={p} i={i} />
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-ink-400">
            <ShieldCheck size={14} className="text-brand-600"/>
            Secure payments • Cancel anytime • No hidden fees
          </div>
        </div>
      </section>

      {/* Comparison strip */}
      <ComparisonStrip />

      {/* FAQ */}
      <FaqSection />
    </>
  )
}

/* ============ HERO ============ */
function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-brand-50/60 via-white to-white pt-12 sm:pt-20 pb-10 sm:pb-14 text-center overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-brand-200/30 blur-3xl" />
      <div className="container-x max-w-3xl relative">
        <motion.span initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="chip">
          <Sparkles size={12}/> TRANSPARENT PRICING
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900"
        >
          Invest in Your Cognitive Edge
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.16 }}
          className="mt-5 text-ink-500 text-sm sm:text-lg"
        >
          Choose the plan that fits your mental performance goals. Simple, predictable pricing with no hidden fees. Upgrade or downgrade at any time.
        </motion.p>
      </div>
    </section>
  )
}

/* ============ PLAN CARD ============ */
function PlanCard({ p, i }) {
  const isDoctor = p.doctor

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      whileHover={{ y: -6 }}
      className={`relative rounded-3xl p-6 flex flex-col transition-shadow ${
        p.popular
          ? 'bg-white border-2 border-brand-600 shadow-card'
          : isDoctor
          ? 'bg-white border-2 border-emerald-500 shadow-card'
          : 'bg-white border border-slate-100 shadow-soft hover:shadow-card'
      }`}
    >
      {/* Popular / Doctor ribbon */}
      {p.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-700 text-white text-[11px] font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full whitespace-nowrap flex items-center gap-1.5">
          <Crown size={11}/> Most Popular
        </div>
      )}
      {isDoctor && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[11px] font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full whitespace-nowrap flex items-center gap-1.5">
          <Stethoscope size={11}/> Doctor Plan
        </div>
      )}

      {/* 20% OFF — bright blue highlighted badge */}
      {p.off && (
        <div className="absolute top-4 right-4">
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.08 + 0.2 }}
            className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-brand-600 to-brand-700 text-white px-3 py-1.5 text-[11px] font-bold tracking-wide shadow-[0_8px_20px_-8px_rgba(37,64,230,0.6)] ring-2 ring-white"
          >
            <Sparkles size={11}/> {p.off}
          </motion.span>
        </div>
      )}

      {/* Doctor avatar chip */}
      {isDoctor && (
        <div className="mt-1 flex items-center gap-2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&crop=faces&auto=format&q=80"
              alt="Verified doctor"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-100"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white" />
          </div>
          <div className="text-[11px] leading-tight">
            <div className="font-bold text-emerald-700">Verified Doctor</div>
            <div className="text-ink-400">Assigned to you</div>
          </div>
        </div>
      )}

      {/* Title */}
      <div className={`text-lg font-bold text-ink-900 ${isDoctor ? 'mt-4' : 'mt-1'}`}>{p.name}</div>

      {/* Price */}
      <div className="mt-3 flex items-end gap-1">
        <div className="text-3xl sm:text-4xl font-bold text-ink-900">{p.price}</div>
        <div className="text-sm text-ink-400 mb-1">{p.period}</div>
      </div>

      {/* Tagline */}
      <p className="text-sm text-ink-500 mt-3 leading-relaxed min-h-[48px]">{p.tagline}</p>

      {/* Feature list */}
      <ul className="mt-5 space-y-3 flex-1">
        {p.features.map((f, idx) => (
          <motion.li
            key={f}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.08 + idx * 0.04 }}
            className="flex items-start gap-3 text-sm text-ink-700"
          >
            <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
              isDoctor ? 'bg-emerald-50 text-emerald-600' : 'bg-brand-50 text-brand-600'
            }`}>
              <Check size={12}/>
            </span>
            {f}
          </motion.li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-6">
        <Button
          to="/signup"
          variant={isDoctor ? 'primary' : p.variant}
          className={`w-full py-3 ${isDoctor ? '!bg-emerald-600 hover:!bg-emerald-700' : ''}`}
        >
          {p.cta}
        </Button>
      </div>
    </motion.div>
  )
}

/* ============ COMPARISON STRIP ============ */
function ComparisonStrip() {
  const highlights = [
    { icon: <Sparkles size={14}/>, title: 'AI Insights', desc: 'All plans include core AI analysis' },
    { icon: <Stethoscope size={14}/>, title: 'Human Experts', desc: 'Available on Premium & Doctor' },
    { icon: <ShieldCheck size={14}/>, title: 'Data Privacy', desc: 'End-to-end encrypted, always' },
  ]
  return (
    <section className="py-10 sm:py-14 bg-brand-50/40">
      <div className="container-x grid grid-cols-1 md:grid-cols-3 gap-4">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="card p-5 flex items-center gap-3"
          >
            <span className="w-10 h-10 rounded-xl bg-white border border-slate-100 text-brand-600 flex items-center justify-center shrink-0">
              {h.icon}
            </span>
            <div>
              <div className="text-sm font-semibold text-ink-900">{h.title}</div>
              <div className="text-xs text-ink-500">{h.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/* ============ FAQ ============ */
function FaqSection() {
  return (
    <section className="py-14 sm:py-20 bg-slate-50/60">
      <div className="container-x">
        <SectionHeading title="Common Questions" subtitle="Everything you need to know about billing and plans." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {faqs.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -3 }}
              className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-[0_0_0_2px_rgba(59,91,255,0.2),0_20px_40px_-20px_rgba(59,91,255,0.3)] transition-shadow"
            >
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
  )
}