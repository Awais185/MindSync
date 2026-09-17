import { motion } from 'framer-motion'
import { Activity, Heart, Moon, TrendingUp, AlertTriangle, Battery, Brain } from 'lucide-react'

export default function AnimatedPhone({ className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-10 bg-gradient-to-tr from-brand-500/20 via-brand-300/10 to-transparent blur-3xl rounded-full" />

      {/* Floating cards — smaller on mobile */}
      <FloatCard className="-left-6 sm:-left-10 top-44" delay={0.4} dx={6} dy={7} duration={9}>
        <Row
          icon={<Heart size={12}/>}
          iconCls="bg-rose-50 text-rose-500"
          label="STRESS"
          value="78%"
        />
      </FloatCard>

      <FloatCard className="-right-6 sm:-right-10 top-52" delay={0.6} dx={-5} dy={-6} duration={10}>
        <Row
          icon={<AlertTriangle size={12}/>}
          iconCls="bg-amber-50 text-amber-500"
          label="ANXIETY"
          value="Moderate"
          small
        />
      </FloatCard>

      <FloatCard className="-right-4 sm:-right-12 bottom-36" delay={0.9} dx={5} dy={8} duration={11}>
        <Row
          icon={<TrendingUp size={12}/>}
          iconCls="bg-emerald-50 text-emerald-600"
          label="MOOD"
          value="Improving"
          small
          valueCls="text-emerald-600"
        />
      </FloatCard>

      <FloatCard className="-left-4 sm:-left-8 bottom-24" delay={1.1} dx={-4} dy={-7} duration={9.5}>
        <Row
          icon={<Moon size={12}/>}
          iconCls="bg-brand-50 text-brand-600"
          label="SCREEN"
          value="4h 12m"
          small
        />
      </FloatCard>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="relative w-[280px] sm:w-[320px] aspect-[9/19] rounded-[2.5rem] bg-navy-900 p-2 shadow-2xl border border-white/10 mx-auto"
      >
        <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-brand-600/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative w-full h-full rounded-[2rem] bg-white overflow-hidden">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-navy-900 rounded-full z-10" />

          <div className="p-3.5 pt-9 h-full flex flex-col gap-3 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] text-ink-400">Good Evening</div>
                <div className="text-sm font-bold text-ink-900">Your daily sync.</div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces&auto=format&q=80"
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-brand-100"
              />
            </div>

            {/* Wellbeing score */}
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 text-white p-3.5 relative overflow-hidden"
            >
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-white/10" />
              <div className="text-[10px] font-semibold tracking-wider opacity-80">DAILY WELLBEING</div>
              <div className="text-3xl font-bold mt-0.5">84</div>
              <div className="text-[11px] opacity-80 mt-0.5">Optimal range</div>
            </motion.div>

            <div className="h-2" />

            {/* 4 tiles */}
            <div className="grid grid-cols-2 gap-2">
              <Tile icon={<Battery size={12}/>} label="Screen" value="4h 12m" />
              <Tile icon={<Activity size={12}/>} label="Focus" value="High" />
              <Tile icon={<Heart size={12}/>} label="Mood" value="Steady" />
              <Tile icon={<Moon size={12}/>} label="Sleep" value="7h 20m" />
            </div>

            <div className="h-0.5" />

            {/* AI Mental Health Analysis */}
            <div className="rounded-2xl border border-slate-100 p-3 bg-gradient-to-b from-white to-slate-50/50">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-6 h-6 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center">
                  <Brain size={12}/>
                </span>
                <div className="text-[11px] font-bold text-ink-900">AI Mental Health Analysis</div>
              </div>

              <div className="space-y-2">
                <Bar label="Stress"     value={78} tone="rose" />
                <Bar label="Anxiety"    value={54} tone="amber" />
                <Bar label="Depression" value={32} tone="brand" />
              </div>
            </div>

            {/* AI Insight footer */}
            <div className="rounded-2xl border border-slate-100 p-2.5 mt-auto">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center">
                  <AlertTriangle size={11}/>
                </span>
                <div className="text-[10px] font-semibold text-ink-900">AI Insight</div>
              </div>
              <p className="text-[10px] text-ink-500 mt-1 leading-snug">
                Late-night scrolling detected. Try a wind-down routine.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

/* Floating card — smaller on mobile via scale-90 */
function FloatCard({ children, className = '', delay = 0, dx = 5, dy = 6, duration = 9 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      className={`absolute z-20 scale-[0.78] sm:scale-100 origin-center ${className}`}
    >
      <motion.div
        animate={{ x: [0, dx, 0, -dx, 0], y: [0, -dy, 0, dy, 0] }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'easeInOut',
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
        className="bg-white rounded-xl shadow-card border border-slate-100 px-2.5 sm:px-3 py-1.5 sm:py-2 will-change-transform transform-gpu"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

function Row({ icon, iconCls, label, value, small, valueCls = 'text-ink-900' }) {
  return (
    <div className="flex items-center gap-1.5 sm:gap-2">
      <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center ${iconCls}`}>
        {icon}
      </span>
      <div>
        <div className="text-[9px] sm:text-[10px] text-ink-400 font-semibold tracking-wider">{label}</div>
        <div className={`${small ? 'text-xs sm:text-sm' : 'text-base sm:text-lg'} font-bold leading-none mt-0.5 ${valueCls}`}>
          {value}
        </div>
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

function Bar({ label, value, tone = 'brand' }) {
  const tones = {
    brand:   { track: 'bg-brand-100',   fill: 'from-brand-500 to-brand-700',     text: 'text-brand-700' },
    rose:    { track: 'bg-rose-100',    fill: 'from-rose-400 to-rose-600',       text: 'text-rose-600' },
    amber:   { track: 'bg-amber-100',   fill: 'from-amber-400 to-amber-600',     text: 'text-amber-600' },
    emerald: { track: 'bg-emerald-100', fill: 'from-emerald-400 to-emerald-600', text: 'text-emerald-600' },
  }
  const t = tones[tone] || tones.brand

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-[10px] font-semibold text-ink-700">{label}</span>
        <span className={`text-[10px] font-bold ${t.text}`}>{value}%</span>
      </div>
      <div className={`h-1.5 rounded-full ${t.track} overflow-hidden`}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.4, delay: 0.4, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${t.fill}`}
        />
      </div>
    </div>
  )
}