import { useState } from 'react'
import { Link } from 'react-router-dom'
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck, Check } from 'lucide-react'

export default function Signup() {
  const [show, setShow] = useState(false)
  return (
    <section className="relative py-10 sm:py-16 min-h-[calc(100vh-5rem)] flex items-center justify-center bg-gradient-to-br from-brand-50/60 via-white to-brand-50/30">
      <div className="container-x w-full max-w-lg">
        <div className="bg-white rounded-3xl shadow-card border border-slate-100 p-8 sm:p-10">
          <div className="text-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-glow mx-auto">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9 6 9-6"/>
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
              </svg>
            </div>
            <h1 className="mt-5 text-2xl sm:text-3xl font-bold text-ink-900">Create your MindSync account</h1>
            <p className="mt-2 text-sm text-ink-500">Start your 7-day personalized wellbeing study.</p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3 text-[11px] text-ink-400">
            <span className="inline-flex items-center gap-1"><Check size={12} className="text-brand-600"/> Free 14-day trial</span>
            <span className="inline-flex items-center gap-1"><Check size={12} className="text-brand-600"/> No card required</span>
          </div>

          <form onSubmit={e => e.preventDefault()} className="mt-6 space-y-4">
            <Row icon={<User size={16}/>} label="FULL NAME" placeholder="Jane Doe"/>
            <Row icon={<Mail size={16}/>} label="WORK OR PERSONAL EMAIL" placeholder="jane@example.com"/>
            <Row icon={<Lock size={16}/>} label="PASSWORD" placeholder="At least 8 characters" type={show ? 'text' : 'password'} trailing={
              <button type="button" onClick={()=>setShow(s=>!s)} className="text-ink-400 hover:text-ink-700">
                {show ? <EyeOff size={16}/> : <Eye size={16}/>}
              </button>
            }/>
            <Row icon={<Lock size={16}/>} label="CONFIRM PASSWORD" placeholder="Re-enter password" type={show ? 'text' : 'password'} />

            <label className="flex items-start gap-3 text-xs text-ink-500">
              <input type="checkbox" className="mt-0.5 w-4 h-4 rounded border-slate-300 text-brand-600"/>
              I agree to the <Link to="#" className="text-brand-600 font-semibold">Terms</Link> and <Link to="#" className="text-brand-600 font-semibold">Privacy Policy</Link>.
            </label>

            <button className="btn-primary w-full py-3.5 text-base">Create Account <ArrowRight size={16}/></button>

            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-xs text-ink-500">
                <ShieldCheck size={12}/> 256-bit End-to-End Encrypted • HIPAA Compliant
              </span>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-ink-500">
            Already have an account? <Link to="/login" className="font-semibold text-brand-600 hover:text-brand-700">Log in</Link>
          </p>
        </div>
      </div>
    </section>
  )
}

function Row({ icon, label, placeholder, type = 'text', trailing }) {
  return (
    <div>
      <label className="text-[11px] font-semibold tracking-wider text-ink-700">{label}</label>
      <div className="relative mt-2">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400">{icon}</span>
        <input type={type} placeholder={placeholder} className="w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-11 pr-11 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30"/>
        {trailing && <div className="absolute right-4 top-1/2 -translate-y-1/2">{trailing}</div>}
      </div>
    </div>
  )
}
