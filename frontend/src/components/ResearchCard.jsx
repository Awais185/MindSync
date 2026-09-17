import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function ResearchCard({
  logo,
  logoText,
  org,
  tag,
  value,
  title,
  desc,
  link,
  delay = 0,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.015, y: -4 }}
      className="group card p-6 sm:p-8 relative hover:shadow-[0_0_0_2px_rgba(59,91,255,0.35),0_25px_50px_-25px_rgba(59,91,255,0.45)] transition-shadow duration-300"
    >
      {/* Top row: org pill (left) + logo badge (right) */}
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex items-center rounded-full bg-brand-50 text-brand-700 px-3 py-1 text-xs font-semibold">
          {org}
        </span>

        <div className="flex items-center gap-2">
          <span className="text-xs text-ink-400 font-medium">{tag}</span>

          {/* Logo badge */}
          <div className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center overflow-hidden shadow-sm shrink-0">
            {logo ? (
              <img
                src={logo}
                alt={`${org} logo`}
                className="w-full h-full object-contain p-1"
                loading="lazy"
              />
            ) : (
              <span className="text-[10px] font-bold text-brand-700">
                {logoText || '•'}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Value */}
      <div className="mt-5 flex items-end gap-3">
        <div className="text-4xl sm:text-5xl font-bold text-ink-900">{value}</div>
      </div>

      {/* Title + desc */}
      <h3 className="mt-3 text-lg font-semibold text-ink-900">{title}</h3>
      <p className="mt-2 text-sm text-ink-500 leading-relaxed">{desc}</p>

      {/* CTA */}
      <div className="mt-5 pt-4 border-t border-slate-100">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-brand-700 group-hover:text-brand-800 transition-colors"
        >
          View Research
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </motion.article>
  )
}