import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck } from 'lucide-react'

export default function Login() {
  const [show, setShow] = useState(false)
  return (
    <section className="relative py-10 sm:py-16 min-h-[calc(100vh-5rem)] flex items-center justify-center bg-gradient-to-br from-brand-50/60 via-white to-brand-50/30 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40"
        style={{ backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(37,64,230,0.10), transparent 45%), radial-gradient(circle at 70% 80%, rgba(37,64,230,0.10), transparent 45%)' }}/>

      <div className="container-x relative w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-card border border-slate-100 p-8 sm:p-10">
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-glow">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9 6 9-6"/>
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
              </svg>
            </div>
            <h1 className="mt-5 text-2xl sm:text-3xl font-bold text-ink-900">Welcome Back</h1>
            <p className="mt-2 text-sm text-ink-500 max-w-xs">Continue your journey to cognitive calm &amp; digital balance.</p>
          </div>

          <form onSubmit={e => e.preventDefault()} className="mt-8 space-y-5">
            <div>
              <label className="text-[11px] font-semibold tracking-wider text-ink-700">WORK OR PERSONAL EMAIL</label>
              <div className="relative mt-2">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400"/>
                <input placeholder="name@company.com" className="w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30"/>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="text-[11px] font-semibold tracking-wider text-ink-700">PASSWORD</label>
                <Link to="#" className="text-xs font-semibold text-brand-600 hover:text-brand-700">Forgot password?</Link>
              </div>
              <div className="relative mt-2">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400"/>
                <input type={show ? 'text' : 'password'} placeholder="Enter your password" className="w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-11 pr-11 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30"/>
                <button type="button" onClick={()=>setShow(s=>!s)} className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-700">
                  {show ? <EyeOff size={16}/> : <Eye size={16}/>}
                </button>
              </div>
            </div>

            <label className="flex items-center gap-3 text-sm text-ink-700">
              <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"/>
              Remember this browser for 30 days
            </label>

            <button className="btn-primary w-full py-3.5 text-base">Log In to MindSync <ArrowRight size={16}/></button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"/></div>
              <div className="relative flex justify-center"><span className="bg-white px-3 text-[11px] tracking-wider text-ink-400">OR CONTINUE WITH</span></div>
            </div>

            <button type="button" className="w-full inline-flex items-center justify-center gap-3 rounded-xl border border-slate-200 py-3.5 text-sm font-semibold text-ink-900 hover:bg-slate-50">
              <GoogleIcon/> Continue with Google
            </button>

            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-xs text-ink-500">
                <ShieldCheck size={12}/> 256-bit End-to-End Encrypted • HIPAA Compliant
              </span>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-ink-500">
            Don’t have an account? <Link to="/signup" className="font-semibold text-brand-600 hover:text-brand-700">Sign up for free</Link>
          </p>
        </div>
      </div>
    </section>
  )
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" width="18" height="18" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.7 1.22 9.2 3.6l6.9-6.9C35.9 2.5 30.5 0 24 0 14.6 0 6.5 5.4 2.6 13.2l8 6.2C12.6 13.3 17.8 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.5 24c0-1.6-.14-3.1-.4-4.6H24v9.1h12.7c-.55 2.9-2.2 5.4-4.7 7.1l7.3 5.7C43.9 37.1 46.5 31 46.5 24z"/>
      <path fill="#FBBC05" d="M10.6 28.6A14.5 14.5 0 0 1 9.6 24c0-1.6.28-3.2.8-4.6l-8-6.2A24 24 0 0 0 0 24c0 3.9.94 7.5 2.6 10.8l8-6.2z"/>
      <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.3-5.7c-2.1 1.4-4.8 2.2-8.6 2.2-6.2 0-11.4-3.8-13.4-9.1l-8 6.2C6.5 42.6 14.6 48 24 48z"/>
    </svg>
  )
}
