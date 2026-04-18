import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BUSINESS_FULL_NAME, bilingualText, buildWhatsAppLink, businessFacts, contactInfo, mainNav } from '../content/siteContent'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="announcement-bar hidden px-4 py-2 text-center text-xs font-medium text-white md:block">
        {businessFacts.trustTitle} | Serving {businessFacts.serviceAreas.join(', ')}
      </div>

      <header className={`sticky top-0 z-50 border-b transition-all ${scrolled ? 'border-[#d7e5df] bg-white shadow-md' : 'border-[#e7efeb] bg-white'}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            <Link to="/" className="rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-[#2F5D50]">
              <div className="flex flex-col">
                <span className="header-title-board">{BUSINESS_FULL_NAME}</span>
                <p className="tamil-text mt-1 hidden text-[11px] text-slate-500 xl:block">{bilingualText.texmoLine}</p>
              </div>
            </Link>

            <nav className="hidden items-center gap-1 rounded-lg border border-[#d7e5df] bg-white px-2 py-1 lg:flex">
              {mainNav.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${isActive ? 'bg-[#2F5D50] text-white' : 'text-[#1A1A1A] hover:bg-[#f4f8f6] hover:text-[#2F5D50]'}`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden items-center lg:flex">
              <a href={`tel:${contactInfo.phone}`} className="inline-flex whitespace-nowrap text-[0.95rem] font-semibold tracking-[0.01em] text-[#D6452E] transition-colors hover:text-[#b63a27]">
                Call {contactInfo.displayPhone}
              </a>
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <a href={`tel:${contactInfo.phone}`} className="inline-flex items-center gap-1 whitespace-nowrap rounded-lg border border-[#e6c6bf] bg-white px-3 py-2 text-xs font-semibold text-[#D6452E]" aria-label="Call the shop">
                <PhoneIcon className="h-4 w-4" />
                <span>Call</span>
              </a>
              <button onClick={() => setMenuOpen((open) => !open)} className="rounded-lg p-2 text-[#2F5D50] hover:bg-[#f4f8f6]" aria-label="Toggle menu">
                {menuOpen ? <XIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        {menuOpen ? (
          <div className="border-t border-[#e7efeb] bg-white shadow-lg lg:hidden">
            <nav className="space-y-1 px-4 py-4">
              {mainNav.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${isActive ? 'bg-[#2F5D50] text-white' : 'text-[#1A1A1A] hover:bg-[#f4f8f6]'}`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>
            <div className="grid grid-cols-2 gap-3 px-4 pb-5">
              <a href={`tel:${contactInfo.phone}`} className="flex items-center justify-center gap-2 rounded-lg bg-[#D6452E] py-3 text-sm font-bold text-white">
                <PhoneIcon className="h-4 w-4" /> Call
              </a>
              <a href={buildWhatsAppLink('Hello, I need help with a product or service enquiry.')} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-lg bg-[#2F5D50] py-3 text-sm font-bold text-white">
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        ) : null}
      </header>
    </>
  )
}

function PhoneIcon({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  )
}

function WhatsAppIcon({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}