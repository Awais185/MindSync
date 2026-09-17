import { motion } from 'framer-motion'

export default function ProblemCard({ image, title, desc, accent = 'text-brand-600', bg = 'bg-brand-50' }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -4 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="group w-[270px] sm:w-[310px] shrink-0 bg-white rounded-2xl border border-slate-100 shadow-soft p-4 hover:shadow-[0_0_0_2px_rgba(59,91,255,0.35),0_20px_40px_-20px_rgba(59,91,255,0.35)] transition-shadow duration-300"
    >
      <div className="relative rounded-xl overflow-hidden aspect-[16/10] mb-4 bg-slate-100">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-xl" />
      </div>

      <div className="flex items-start gap-3">
        <div className={`w-9 h-9 rounded-lg ${bg} flex items-center justify-center shrink-0`}>
          <span className={`text-sm font-bold ${accent}`}>●</span>
        </div>
        <h3 className="text-base font-semibold text-ink-900 leading-snug">{title}</h3>
      </div>
      <p className="text-sm text-ink-500 mt-2 leading-relaxed line-clamp-3">{desc}</p>
    </motion.div>
  )
}