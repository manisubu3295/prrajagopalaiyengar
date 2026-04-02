import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'

const PHONE    = '+918508226548'
const WA_MSG   = 'https://wa.me/918508226548?text=Hello%2C%20I%20need%20to%20buy%20electrical%20or%20plumbing%20materials.%20Please%20help.'
const DISPLAY  = '+91 85082 26548'

const navLinks = [
  { to: '/',             label: 'Home' },
  { to: '/about',        label: 'About Us' },
  { to: '/services',     label: 'Services' },
  { to: '/products',     label: 'Products' },
  { to: '/gallery',      label: 'Gallery' },
  { to: '/testimonials', label: 'Reviews' },
  { to: '/contact',      label: 'Contact' },
]

export default function Header() {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)
  const [announceTxt] = useState([
    '🏪 Genuine Electrical & Plumbing Materials — Havells · Legrand · Schneider · Ashirvad · Jaquar',
    '⚙️ Authorized Texmo Aquasub Pump Dealer — 100% Original Stock',
    '✅ 67 Years Trusted Shop in Thiruvarur — No Duplicate Products Ever',
    '📦 Builders & Contractors: Send Your Material List on WhatsApp',
  ])
  const [ticker, setTicker] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const t = setInterval(() => setTicker(p => (p + 1) % announceTxt.length), 3500)
    return () => clearInterval(t)
  }, [announceTxt.length])

  return (
    <>
      {/* Announcement bar */}
      <div className="announcement-bar py-2 px-4 text-center text-white text-xs md:text-sm font-medium hidden md:block">
        <span>{announceTxt[ticker]}</span>
        <a href={`tel:${PHONE}`} className="ml-4 underline font-bold hover:text-amber-300 transition-colors">
          {DISPLAY}
        </a>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-lg border-b border-slate-100'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link to="/" className="shrink-0 focus:outline-none focus:ring-2 focus:ring-brand-blue rounded-lg p-1">
              <Logo size="sm" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-navy-900 text-white'
                        : 'text-slate-700 hover:text-navy-900 hover:bg-slate-100'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={WA_MSG}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-brand-whatsapp text-white text-sm font-semibold rounded-lg hover:bg-green-600 transition-all duration-200 shadow-sm"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 px-4 py-2 bg-brand-orange text-white text-sm font-semibold rounded-lg hover:bg-orange-700 transition-all duration-200 shadow-sm"
              >
                <PhoneIcon />
                {DISPLAY}
              </a>
            </div>

            {/* Mobile: phone icon + hamburger */}
            <div className="flex lg:hidden items-center gap-3">
              <a href={`tel:${PHONE}`} className="p-2 text-brand-orange">
                <PhoneIcon className="w-5 h-5" />
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                className="p-2 rounded-lg text-navy-900 hover:bg-slate-100 transition-colors"
              >
                {menuOpen ? <XIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        {menuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white shadow-xl">
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-navy-900 text-white'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>
            <div className="px-4 pb-5 grid grid-cols-2 gap-3">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center justify-center gap-2 py-3 bg-brand-orange text-white text-sm font-bold rounded-xl"
              >
                <PhoneIcon /> Call Now
              </a>
              <a
                href={WA_MSG}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 bg-brand-whatsapp text-white text-sm font-bold rounded-xl"
              >
                <WhatsAppIcon /> WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

/* Inline SVG icons */
function PhoneIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
    </svg>
  )
}

function WhatsAppIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
    </svg>
  )
}

function XIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
    </svg>
  )
}
