import { Link } from 'react-router-dom'
import { Globe, Mail, Twitter, Linkedin, Github } from 'lucide-react'
import { PartnerLogos } from './Logo'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300">
      <div className="container-x py-14 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-5">
            {/* Both logos with "Introduce by" label */}
            <PartnerLogos />

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Precision AI tools for cognitive enhancement, mental resilience, and peak neurological performance.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-emerald-300">Systems Operational • 99.98% SLA</span>
            </div>
          </div>

          <FooterCol title="PRODUCT" items={[
            ['Platform Overview', '/features'],
            ['Cognitive Workflows', '/how-it-works'],
            ['Integrations API', '/features'],
            ['Enterprise Solutions', '/pricing'],
          ]}/>
          <FooterCol title="COMPANY" items={[
            ['About Us', '/about'],
            ['Careers', '/about'],
            ['Research & Science', '/about'],
            ['Trust & Security', '/about'],
          ]}/>
          <FooterCol title="LEGAL & COMPLIANCE" items={[
            ['Privacy Policy', '/'],
            ['Terms of Service', '/'],
            ['HIPAA & ISO Trust', '/'],
            ['Cookie Preferences', '/'],
          ]}/>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} MindSync AI, Inc. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <Pill><Globe size={13}/> Global (EN)</Pill>
            <IconBtn><Mail size={15}/></IconBtn>
            <IconBtn><Twitter size={15}/></IconBtn>
            <IconBtn><Linkedin size={15}/></IconBtn>
            <IconBtn><Github size={15}/></IconBtn>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, items }) {
  return (
    <div>
      <h4 className="text-xs font-semibold tracking-[0.16em] text-white mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {items.map(([label, to]) => (
          <li key={label}>
            <Link to={to} className="text-sm text-slate-400 hover:text-white transition-colors">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 border border-white/10 rounded-full px-3 py-1.5">
      {children}
    </span>
  )
}

function IconBtn({ children }) {
  return (
    <button className="w-8 h-8 inline-flex items-center justify-center rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition">
      {children}
    </button>
  )
}