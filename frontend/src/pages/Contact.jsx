import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Clock, Twitter, Linkedin, Share2, ChevronDown } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { contactFaqs } from '../data/content'

export default function Contact() {
  const [open, setOpen] = useState(null)
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50/50 via-white to-white pt-14 sm:pt-20 pb-10">
        <div className="container-x">
          <span className="text-xs font-semibold tracking-[0.2em] text-brand-700">[ CONTACT US ]</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-serif font-bold text-ink-900">Let’s Talk.</h1>
          <p className="mt-3 max-w-2xl text-ink-500">Whether you’re looking for enterprise solutions, technical support, or just want to explore how MindSync can elevate your cognitive performance, our team is ready to connect.</p>
          <div className="h-px bg-slate-200 mt-8" />
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="container-x grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 card p-6 sm:p-8">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-5" onSubmit={e => e.preventDefault()}>
              <Field label="Full Name" placeholder="Jane Doe" />
              <Field label="Email Address" placeholder="jane@example.com" />
              <div className="sm:col-span-2">
                <Label>Subject</Label>
                <select className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30">
                  <option>Select an inquiry type...</option>
                  <option>Enterprise Solutions</option>
                  <option>Technical Support</option>
                  <option>Partnership</option>
                  <option>Press</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <Label>Message</Label>
                <textarea rows="5" placeholder="How can we help you today?" className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30"/>
              </div>
              <div className="sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-ink-400">All fields are required unless marked optional.</div>
                <button className="btn-primary px-6 py-3 w-full sm:w-auto">Send Message →</button>
              </div>
            </form>
          </div>

          <aside className="card p-6 sm:p-8 h-fit">
            <span className="text-xs font-semibold tracking-[0.2em] text-brand-700">DIRECT CHANNELS</span>
            <h3 className="mt-2 text-xl font-bold text-ink-900">Contact Details</h3>
            <ul className="mt-6 space-y-5">
              <ContactRow icon={<MapPin size={16}/>} label="GLOBAL HEADQUARTERS" lines={['Lahore Pakistan']}/>
              <ContactRow icon={<Mail size={16}/>} label="DIRECT INQUIRY & SALES" lines={['awaisalirazaa@gmail.com','nexoratech026@gmail.com']}/>
              <ContactRow icon={<Phone size={16}/>} label="SUPPORT & ASSISTANCE" lines={['+92 3044810928','Mon – Fri, 8:00 AM – 6:00 PM PT']}/>
              <ContactRow icon={<Clock size={16}/>} label="OPERATING HOURS" lines={['Global Client Care: 24/7 Priority SLA','Avg resolution under 2 hours for Pro tiers']}/>
            </ul>
            <div className="mt-6 pt-5 border-t border-slate-100">
              <div className="text-xs font-semibold tracking-[0.2em] text-ink-400">CONNECT ON SOCIAL</div>
              <div className="mt-3 flex gap-2">
                {[Twitter, Linkedin, Share2].map((Icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 rounded-full border border-slate-200 text-ink-500 flex items-center justify-center hover:border-brand-300 hover:text-brand-600 transition">
                    <Icon size={15}/>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-slate-50/60">
        <div className="container-x">
          <span className="text-xs font-semibold tracking-[0.2em] text-brand-700">[ KNOWLEDGE BASE ]</span>
          <div className="mt-2 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink-900">Frequently Asked Questions</h2>
            <p className="text-sm text-ink-500 max-w-md">Got a question about our enterprise solutions, data compliance, or integrations? Find clear answers below.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {contactFaqs.map((f, i) => (
              <div key={f.q} className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
                <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                  <span className="font-semibold text-ink-900 text-sm sm:text-base pr-4">{f.q}</span>
                  <ChevronDown size={18} className={`text-ink-400 transition-transform ${open === i ? 'rotate-180' : ''}`}/>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm text-ink-500 leading-relaxed">{f.a}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function Field({ label, placeholder }) {
  return (
    <div>
      <Label>{label}</Label>
      <input placeholder={placeholder} className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30"/>
    </div>
  )
}
function Label({ children }) { return <label className="text-xs font-semibold tracking-wider text-ink-700">{children}</label> }
function ContactRow({ icon, label, lines }) {
  return (
    <li className="flex gap-4">
      <span className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">{icon}</span>
      <div>
        <div className="text-[10px] font-semibold tracking-[0.16em] text-ink-400">{label}</div>
        {lines.map(l => <div key={l} className="text-sm text-ink-700 mt-0.5">{l}</div>)}
      </div>
    </li>
  )
}
