import { Link } from 'react-router-dom'
import Logo from './Logo'

const PHONE   = '+918508226548'
const WA_URL  = 'https://wa.me/918508226548?text=Hello%2C%20I%20need%20your%20services.'
const DISPLAY = '+91 85082 26548'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      {/* Top CTA strip */}
      <div className="bg-gradient-to-r from-brand-orange via-amber-500 to-brand-orange py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-semibold text-white text-center md:text-left">
            Need Electrical, Plumbing or Pump Service? We're just one call away!
          </p>
          <div className="flex gap-3 shrink-0">
            <a href={`tel:${PHONE}`}
               className="flex items-center gap-2 bg-white text-brand-orange font-bold px-5 py-2 rounded-lg text-sm hover:bg-orange-50 transition-colors">
              📞 {DISPLAY}
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 bg-brand-whatsapp text-white font-bold px-5 py-2 rounded-lg text-sm hover:bg-green-600 transition-colors">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Logo size="sm" light />
            <p className="mt-4 text-slate-300 text-sm leading-relaxed">
              Thiruvarur's most trusted electrical, plumbing and pump solutions since 1957.
              Three generations of excellence. Only genuine, branded products.
            </p>
            <p className="mt-3 text-amber-400 text-xs font-semibold tracking-wide uppercase">
              நம்பகமான சேவை · 67 ஆண்டுகள்
            </p>
            <div className="mt-4 flex gap-3">
              <div className="bg-white/10 rounded-lg px-3 py-2 text-center">
                <p className="text-amber-400 font-bold text-xl">67+</p>
                <p className="text-xs text-slate-400">Years</p>
              </div>
              <div className="bg-white/10 rounded-lg px-3 py-2 text-center">
                <p className="text-amber-400 font-bold text-xl">5K+</p>
                <p className="text-xs text-slate-400">Projects</p>
              </div>
              <div className="bg-white/10 rounded-lg px-3 py-2 text-center">
                <p className="text-amber-400 font-bold text-xl">3</p>
                <p className="text-xs text-slate-400">Districts</p>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-bold text-lg text-white mb-4 border-b border-white/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { to: '/',             label: 'Home' },
                { to: '/about',        label: 'About Us' },
                { to: '/services',     label: 'Our Services' },
                { to: '/products',     label: 'Texmo Pumps' },
                { to: '/gallery',      label: 'Project Gallery' },
                { to: '/testimonials', label: 'Customer Reviews' },
                { to: '/contact',      label: 'Contact Us' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-slate-300 hover:text-amber-400 text-sm transition-colors flex items-center gap-2">
                    <span className="text-brand-light">›</span> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg text-white mb-4 border-b border-white/10 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {[
                '⚡ Electrical Installation',
                '🔌 House Wiring & Rewiring',
                '💧 Plumbing Services',
                '🚰 Leakage Detection & Repair',
                '🏗️ New Connection Setup',
                '🔧 Pump Installation',
                '⚙️ Motor Repair & Service',
                '🌊 Submersible Pump Supply',
              ].map(s => (
                <li key={s} className="flex items-start gap-2 hover:text-amber-400 transition-colors cursor-default">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg text-white mb-4 border-b border-white/10 pb-2">
              Contact & Location
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <span className="text-amber-400 mt-0.5 shrink-0">📍</span>
                <div>
                  <p className="text-white font-semibold">P.R. Rajagopalaiyengar & Sons</p>
                  <p className="text-slate-300">No. 185, Old Nagai Salai,</p>
                  <p className="text-slate-300">Thiruvarur – 610 001</p>
                  <p className="text-slate-300">Tamil Nadu, India</p>
                </div>
              </div>
              <a href={`tel:${PHONE}`} className="flex items-center gap-3 text-slate-300 hover:text-amber-400 transition-colors">
                <span className="text-amber-400">📞</span>
                <span>{DISPLAY}</span>
              </a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-3 text-slate-300 hover:text-amber-400 transition-colors">
                <span className="text-amber-400">💬</span>
                <span>WhatsApp Us</span>
              </a>
              <div className="flex items-start gap-3 text-slate-300">
                <span className="text-amber-400 shrink-0">🕐</span>
                <div>
                  <p>Mon – Sat: 8:00 AM – 8:00 PM</p>
                  <p>Sunday: 9:00 AM – 2:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-white/5 rounded-xl border border-white/10">
              <p className="text-xs text-amber-400 font-bold uppercase tracking-wide mb-1">Service Areas</p>
              <p className="text-xs text-slate-300">Thiruvarur · Nagapattinam · Thiruturaipoondi · Mannargudi · Papanasam · Kumbakonam</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} P.R. Rajagopalaiyengar & Sons. All rights reserved. | Est. 1957</p>
          <div className="flex flex-col items-center md:items-end gap-1">
            <p>
            Authorized{' '}
            <span className="text-amber-400 font-semibold">Texmo Aquasub</span>{' '}
            Pump Dealer | Licensed Electrical & Plumbing Contractors
            </p>
            <p>
              Powered by{' '}
              <a
                href="https://www.aadhiraiinnovations.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 transition-colors"
              >
                www.aadhiraiinnovations.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
