import { Link } from 'react-router-dom'
import { BUSINESS_FULL_NAME, bilingualText, buildWhatsAppLink, businessFacts, contactInfo, mainNav } from '../content/siteContent'

export default function Footer() {
  return (
    <footer className="bg-[#2F5D50] text-white">
      <div className="notice-stripe border-b border-[#d7e5df] px-4 py-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 md:flex-row">
          <div>
            <p className="text-center font-semibold text-[#1A1A1A] md:text-left">{businessFacts.trustTitle} | {contactInfo.serviceAreaLabel}</p>
            <p className="tamil-text mt-1 text-center text-xs text-[#666666] md:text-left">{bilingualText.texmoLine}</p>
          </div>
          <div className="flex gap-3">
            <a href={`tel:${contactInfo.phone}`} className="rounded-lg bg-[#D6452E] px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-[#b63a27]">
              📞 {contactInfo.displayPhone}
            </a>
            <a href={buildWhatsAppLink('Hello, I need help with a product or service enquiry.')} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[#2F5D50] px-5 py-2 text-sm font-bold text-white ring-1 ring-white/20 transition-colors hover:bg-[#24493f]">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-heading text-2xl font-bold text-white">{BUSINESS_FULL_NAME}</p>
            <p className="mt-4 text-sm leading-relaxed text-[#e2ece8]">Authorized Texmo dealer for pumps, motors, electrical products, plumbing materials and borewell enquiries.</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[#f0d9d2]">Serving Tiruvarur · Thiruthuraipoondi · Mannargudi</p>
          </div>

          <div>
            <h4 className="mb-4 border-b border-white/10 pb-2 font-heading text-lg font-bold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {mainNav.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="flex items-center gap-2 text-sm text-[#d9e6e1] transition-colors hover:text-white">
                    <span className="text-[#f0d9d2]">›</span> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 border-b border-white/10 pb-2 font-heading text-lg font-bold text-white">What Customers Ask For</h4>
            <ul className="space-y-2 text-sm text-[#d9e6e1]">
              {['Authorized Texmo motors', 'Electrical products', 'Plumbing materials', 'Borewell enquiries', 'Stock checks before visit', 'WhatsApp list support'].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 border-b border-white/10 pb-2 font-heading text-lg font-bold text-white">Contact & Location</h4>
            <div className="space-y-3 text-sm text-[#d9e6e1]">
              <p>📍 {contactInfo.addressLines.join(', ')}</p>
              <p>📌 {contactInfo.serviceAreaLabel}</p>
              <a href={`tel:${contactInfo.phone}`} className="block transition-colors hover:text-white">📞 {contactInfo.displayPhone}</a>
              <a href={buildWhatsAppLink('Hello, I need help with a product or service enquiry.')} target="_blank" rel="noopener noreferrer" className="block transition-colors hover:text-white">💬 WhatsApp Us</a>
              <p>🕐 {contactInfo.hours}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-[#c5d6d0] md:flex-row md:items-end">
          <p>© {new Date().getFullYear()} {BUSINESS_FULL_NAME}. All rights reserved.</p>
          <p>Authorized Texmo Dealer | 67 years of service across 3 generations.</p>
          <a
            href="https://www.aadhiraiinnovations.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Designed and developed by Aadhirai Innovations"
            className="text-[11px] text-[#b8cac4] transition-colors hover:text-white hover:underline md:text-right"
          >
            Designed &amp; Developed by Aadhirai Innovations
          </a>
        </div>
      </div>
    </footer>
  )
}