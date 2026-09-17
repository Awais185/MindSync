export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignCls = align === 'left' ? 'text-left' : 'text-center mx-auto'
  return (
    <div className={`max-w-3xl mb-10 sm:mb-14 ${alignCls}`}>
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
