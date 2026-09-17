import logo from '../media/mindsync logo.png'
import nexoraLogo from '../media/Nexora tech.png'

export default function Logo({ dark = false }) {
  return (
    <div className="flex items-center gap-2 select-none">
      <img
        src={logo}
        alt="MindSync logo"
        className="w-16 h-16 object-contain"
      />
    </div>
  )
}

export function PartnerLogos() {
  return (
    <div className="relative inline-flex flex-col items-start gap-4 rounded-2xl px-6 py-5 bg-gradient-to-br from-white via-white to-brand-50/60 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.4)] ring-1 ring-white/30 overflow-hidden">
      {/* Soft decorative gradient blob */}
      <div className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-violet-500/10 blur-3xl" />

      {/* Top label */}
      <div className="relative flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
        <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-ink-500">
          Introduce by
        </span>
      </div>

      {/* Logos row */}
      <div className="relative flex items-center gap-6">
        {/* MindSync — no container, logo directly on card */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="MindSync"
            className="w-16 h-16 object-contain"
          />
          <div className="leading-none">
            <div className="text-sm font-bold text-ink-900 tracking-tight">MindSync</div>
            <div className="text-[9px] tracking-[0.18em] uppercase text-ink-400 mt-1">
              AI Wellbeing
            </div>
          </div>
        </div>

        {/* Divider */}
        <span className="w-px h-10 bg-gradient-to-b from-transparent via-slate-200 to-transparent" />

        {/* Nexora Tech — keeps its dark container */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-xl bg-navy-900 ring-1 ring-navy-700 flex items-center justify-center overflow-hidden">
            <img
              src={nexoraLogo}
              alt="Nexora Tech"
              className="w-12 h-12 object-contain"
            />
          </div>
          <div className="leading-none">
            <div className="text-sm font-bold text-ink-900 tracking-tight">Nexora Tech</div>
            <div className="text-[9px] tracking-[0.18em] uppercase text-ink-400 mt-1">
              Digital Solutions
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}