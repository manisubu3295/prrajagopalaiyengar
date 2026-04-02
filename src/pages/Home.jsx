import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

const PHONE   = '+918508226548'
const WA_URL  = 'https://wa.me/918508226548?text=Hello%2C%20I%20need%20to%20buy%20electrical%20or%20plumbing%20materials.%20Please%20help.'
const DISPLAY = '+91 85082 26548'

/* ─── DATA ──────────────────────────────────────────────── */
const stats = [
  { value: '67+',    label: 'Years in Business',    icon: '🏆' },
  { value: '500+',   label: 'Brands & Products',    icon: '📦' },
  { value: '3',      label: 'Districts Served',     icon: '📍' },
  { value: '100%',   label: 'Original Products',    icon: '🔒' },
]

/* Shop categories — what visitors come to BUY */
const shopCategories = [
  {
    icon: '🔴',
    title: 'Wires & Cables',
    tamil: 'கம்பி & கேபிள்',
    brands: 'Havells · Finolex · Polycab',
    items: ['FR-LSH House Wire', 'Armoured Cables', 'Submersible Cables', 'Flexible Cords'],
    color: 'bg-red-50 border-red-200',
    iconBg: 'bg-red-100',
    href: '/products',
  },
  {
    icon: '🔘',
    title: 'Switches & Sockets',
    tamil: 'சுவிட்ச் & சாக்கெட்',
    brands: 'Legrand · Anchor · Havells',
    items: ['Modular Switches', 'Fan Regulators', 'Industrial Sockets', 'Switch Plates'],
    color: 'bg-slate-50 border-slate-200',
    iconBg: 'bg-slate-100',
    href: '/products',
  },
  {
    icon: '⚡',
    title: 'MCB, ELCB & Panels',
    tamil: 'MCB & பேனல் போர்டு',
    brands: 'Schneider · L&T · Siemens',
    items: ['MCB / RCCB', 'ELCB', 'Distribution Boards', 'Isolators'],
    color: 'bg-amber-50 border-amber-200',
    iconBg: 'bg-amber-100',
    href: '/products',
  },
  {
    icon: '🌀',
    title: 'Fans',
    tamil: 'மின் விசிறி',
    brands: 'Crompton · Orient · Havells',
    items: ['Ceiling Fans', 'BLDC Fans', 'Exhaust Fans', 'Table Fans'],
    color: 'bg-sky-50 border-sky-200',
    iconBg: 'bg-sky-100',
    href: '/products',
  },
  {
    icon: '💡',
    title: 'LED Lights',
    tamil: 'LED விளக்கு',
    brands: 'Philips · Havells · Bajaj',
    items: ['LED Bulbs', 'LED Tubes', 'Panel Lights', 'Street Lights'],
    color: 'bg-yellow-50 border-yellow-200',
    iconBg: 'bg-yellow-100',
    href: '/products',
  },
  {
    icon: '🔵',
    title: 'Pipes & Fittings',
    tamil: 'பைப் & ஃபிட்டிங்',
    brands: 'Ashirvad · Supreme · Prince',
    items: ['CPVC Pipes', 'PVC SWR Pipes', 'Column Pipes', 'GI Pipes'],
    color: 'bg-blue-50 border-blue-200',
    iconBg: 'bg-blue-100',
    href: '/products',
  },
  {
    icon: '🚰',
    title: 'Taps & Valves',
    tamil: 'தண்ணீர் குழாய்',
    brands: 'Jaquar · Hindware · Sant',
    items: ['Bib Cocks', 'Ball Valves', 'Health Faucets', 'Gate Valves'],
    color: 'bg-cyan-50 border-cyan-200',
    iconBg: 'bg-cyan-100',
    href: '/products',
  },
  {
    icon: '🛢️',
    title: 'Water Tanks',
    tamil: 'தண்ணீர் தொட்டி',
    brands: 'Sintex · Penguin',
    items: ['Overhead Tanks', 'Underground Sumps', 'Loft Tanks', 'Industrial Tanks'],
    color: 'bg-teal-50 border-teal-200',
    iconBg: 'bg-teal-100',
    href: '/products',
  },
  {
    icon: '⚙️',
    title: 'Texmo Pumps',
    tamil: 'டெக்ஸ்மோ பம்ப்',
    brands: 'Texmo Aquasub — Authorized',
    items: ['Domestic Pumps', 'Submersible Pumps', 'Agricultural Pumps', 'Monoblock Pumps'],
    color: 'bg-indigo-50 border-indigo-200',
    iconBg: 'bg-indigo-100',
    href: '/products',
    highlight: true,
  },
]

const brands = [
  { name: 'Havells',   cat: 'Wires · Fans · LEDs' },
  { name: 'Finolex',   cat: 'Wires & Cables' },
  { name: 'Polycab',   cat: 'Cables & Accessories' },
  { name: 'Legrand',   cat: 'Switches & Panels' },
  { name: 'Schneider', cat: 'MCB & Protection' },
  { name: 'L&T',       cat: 'MCB & Starters' },
  { name: 'Crompton',  cat: 'Fans & Motors' },
  { name: 'Philips',   cat: 'LED Lighting' },
  { name: 'Ashirvad',  cat: 'CPVC Pipes' },
  { name: 'Jaquar',    cat: 'Taps & Fittings' },
  { name: 'Sintex',    cat: 'Water Tanks' },
  { name: 'Texmo',     cat: 'Pumps — Auth. Dealer' },
  { name: 'Siemens',   cat: 'MCB & Switchgear' },
  { name: 'V-Guard',   cat: 'Stabilizers' },
]

const services = [
  { icon: '⚡', title: 'Electrical Installation', tamil: 'மின் நிறுவல்', desc: 'House wiring, panel setup, new connections and rewiring using the materials you buy from us.' },
  { icon: '💧', title: 'Plumbing Work',            tamil: 'குழாய் வேலை',    desc: 'Pipe laying, tank installation, leakage fixing and complete bathroom plumbing.' },
  { icon: '⚙️', title: 'Pump Installation',       tamil: 'பம்ப் நிறுவல்',  desc: 'Expert installation of Texmo submersible and domestic pumps we supply.' },
  { icon: '🔧', title: 'Repair & Maintenance',    tamil: 'பழுது & பராமரிப்பு', desc: 'Motor rewinding, pump service, wiring fault fixing and AMC contracts.' },
]

const testimonials = [
  {
    name: 'Murugesan R.',
    location: 'Thiruvarur',
    text: 'All electrical materials for my new house came from here. Havells wires, Legrand switches, Schneider MCBs — all original. The shop has been serving our family for 30+ years. நம்பகமான கடை.',
    stars: 5,
    service: 'House Materials',
  },
  {
    name: 'Karthikeyan P.',
    location: 'Thiruturaipoondi',
    text: 'Got 5 Texmo submersible pumps for my paddy fields. Authorized Texmo dealer — original pumps with factory warranty. All 5 are running perfectly for 4 years. Best dealer in the district.',
    stars: 5,
    service: 'Texmo Pumps',
  },
  {
    name: 'Vijayalakshmi S.',
    location: 'Nagapattinam',
    text: 'Bought Ashirvad CPVC pipes, Jaquar taps and Sintex tank for our new home. Everything is genuine. Competitive price. The staff explains everything clearly. Will come back for our next project.',
    stars: 5,
    service: 'Plumbing Materials',
  },
]

const faqItems = [
  {
    question: 'Where can I buy genuine electrical materials in Thiruvarur?',
    answer: 'P.R. Rajagopala Iyengar & Sons in Thiruvarur stocks genuine electrical materials including Havells wires, Legrand switches, Schneider MCBs, fans, lights and panel accessories. The shop has served customers since 1957 and focuses on original branded products only.',
  },
  {
    question: 'Are you an authorized Texmo pump dealer in Thiruvarur?',
    answer: 'Yes. We supply Texmo Aquasub pumps as an authorized dealer in Thiruvarur. Customers can buy domestic pumps, submersible pumps, agricultural pumps and monoblock pumps with guidance on selecting the right model.',
  },
  {
    question: 'Do you sell plumbing materials and bathroom fittings in Thiruvarur?',
    answer: 'Yes. We supply plumbing materials such as CPVC pipes, PVC pipes, fittings, taps, valves, water tanks and related accessories from trusted brands including Ashirvad, Jaquar, Supreme, Prince and Sintex.',
  },
  {
    question: 'Do you provide electrical, plumbing and pump installation services?',
    answer: 'Yes. Along with selling materials, we also handle electrical installation, plumbing work, pump installation, repair and maintenance for homes, shops, farms and building projects in and around Thiruvarur.',
  },
  {
    question: 'Which areas do you serve apart from Thiruvarur?',
    answer: 'We regularly supply customers from Thiruvarur, Nagapattinam, Thiruturaipoondi, Mannargudi, Kumbakonam, Mayiladuthurai and nearby towns. Builders, contractors, farmers and homeowners can call or send their requirements on WhatsApp.',
  },
  {
    question: 'How can I contact your electrical and plumbing shop?',
    answer: 'You can call us on +91 85082 26548 or send your material list on WhatsApp. The shop is located at No. 185, Old Nagai Salai, Thiruvarur, and is open Monday to Saturday from 8 AM to 8 PM.',
  },
]

/* ─── HOME PAGE ─────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Seo
        title="Electrical & Plumbing Shop Thiruvarur | Texmo Pump Dealer | P.R. Rajagopalaiyengar & Sons – Est. 1957"
        description="Thiruvarur's No.1 electrical & plumbing materials shop since 1957. Buy genuine Havells, Legrand, Schneider, Ashirvad, Jaquar, Sintex and Texmo Aquasub pumps. Authorized dealer. Call +91 85082 26548."
        keywords="electrical shop Thiruvarur, Havells wire shop Thiruvarur, Texmo pump dealer Thiruvarur, plumbing materials shop Nagapattinam, Legrand switch dealer, Ashirvad pipe dealer, electrical materials shop Tamil Nadu, Schneider MCB dealer Thiruvarur"
        path="/"
      >
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map(({ question, answer }) => ({
              '@type': 'Question',
              name: question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: answer,
              },
            })),
          })}
        </script>
      </Seo>

      <HeroSection />
      <StatsStrip />
      <ShopCategoriesSection />
      <BrandsSection />
      <AboutTeaser />
      <ServicesTeaser />
      <TestimonialsSection />
      <ServiceAreas />
      <FAQSection />
      <FinalCTA />
    </>
  )
}

/* ─── HERO ───────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      className="relative min-h-[88vh] md:min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #060e26 0%, #0B1F4B 45%, #1a2f6e 70%, #0B1F4B 100%)' }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Glows */}
      <div className="absolute top-1/3 left-1/5 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Main copy */}
          <div>
            {/* Heritage badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
              🏆 Thiruvarur's Most Trusted Shop — Since 1957
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Genuine Electrical &
              <span className="block text-amber-400">Plumbing Materials</span>
              <span className="block text-3xl md:text-4xl mt-1 text-white/90">+ Authorized Texmo Pump Dealer</span>
            </h1>

            <p className="mt-2 text-amber-300 font-semibold text-base">
              உண்மையான தரம் · நம்பகமான கடை · 67 ஆண்டுகள்
            </p>

            <p className="mt-5 text-slate-300 text-lg leading-relaxed max-w-xl">
              Havells wires · Legrand switches · Schneider MCBs · Crompton fans ·
              Philips LEDs · Ashirvad CPVC pipes · Jaquar taps · Sintex tanks ·
              <strong className="text-white"> Texmo Aquasub pumps.</strong>
              <br />
              <span className="text-slate-400 text-sm mt-1 block">
                All original. All branded. No duplicates. No compromises.
              </span>
            </p>

            {/* Pills */}
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                '✅ Authorized Texmo Aquasub Dealer',
                '📦 500+ Products in Stock',
                '🔒 100% Original Brands Only',
                '🚚 Delivery Available',
              ].map(t => (
                <span key={t} className="bg-white/10 border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full">
                  {t}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-3 bg-brand-orange hover:bg-orange-700 text-white font-bold px-7 py-4 rounded-xl text-lg shadow-xl transition-all hover:scale-105"
              >
                <span className="text-2xl">📞</span>
                <div className="text-left">
                  <div className="text-xs opacity-80">Call the shop</div>
                  <div>{DISPLAY}</div>
                </div>
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-brand-whatsapp hover:bg-green-600 text-white font-bold px-7 py-4 rounded-xl text-lg shadow-xl transition-all hover:scale-105"
              >
                <span className="text-2xl">💬</span>
                <div className="text-left">
                  <div className="text-xs opacity-80">Send your list</div>
                  <div>WhatsApp Us</div>
                </div>
              </a>
            </div>
            <p className="mt-4 text-slate-400 text-sm">📍 No. 185, Old Nagai Salai, Thiruvarur | Mon–Sat 8AM–8PM</p>
          </div>

          {/* Right: What we sell quick grid */}
          <div className="hidden lg:grid grid-cols-3 gap-3">
            {[
              { icon: '🔴', label: 'Wires & Cables', sub: 'Havells · Finolex · Polycab' },
              { icon: '🔘', label: 'Switches',        sub: 'Legrand · Anchor' },
              { icon: '⚡', label: 'MCB & Panels',    sub: 'Schneider · L&T · Siemens' },
              { icon: '🌀', label: 'Fans',            sub: 'Crompton · Orient · Havells' },
              { icon: '💡', label: 'LED Lights',      sub: 'Philips · Havells · Bajaj' },
              { icon: '🔵', label: 'CPVC Pipes',      sub: 'Ashirvad · Supreme · Prince' },
              { icon: '🚰', label: 'Taps & Valves',   sub: 'Jaquar · Hindware · Sant' },
              { icon: '🛢️', label: 'Water Tanks',     sub: 'Sintex · Penguin' },
              { icon: '⚙️', label: 'Texmo Pumps',    sub: '★ Authorized Dealer' },
            ].map(({ icon, label, sub }) => (
              <Link
                key={label}
                to="/products"
                className="bg-white/5 border border-white/10 rounded-2xl p-3 hover:bg-white/15 hover:border-amber-500/40 transition-all text-center group"
              >
                <div className="text-2xl mb-1.5">{icon}</div>
                <p className="text-white font-semibold text-xs leading-tight">{label}</p>
                <p className="text-slate-400 text-[10px] mt-0.5 leading-tight">{sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 70 L0 35 Q360 0 720 35 Q1080 70 1440 35 L1440 70 Z" fill="#f8fafc"/>
        </svg>
      </div>
    </section>
  )
}

/* ─── STATS ─────────────────────────────────────────────── */
function StatsStrip() {
  return (
    <section className="bg-slate-50 py-8 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ value, label, icon }) => (
            <div key={label} className="flex flex-col items-center text-center p-3">
              <span className="text-2xl mb-1">{icon}</span>
              <span className="font-heading font-bold text-3xl text-navy-900">{value}</span>
              <span className="text-slate-500 text-sm mt-0.5">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── SHOP CATEGORIES ───────────────────────────────────── */
function ShopCategoriesSection() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="gold-badge">Our Products</span>
          <h2 className="section-title mt-3">
            Shop by Category
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            From a single wire to a complete building's electrical and plumbing materials —
            everything genuine, everything branded, everything in stock.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {shopCategories.map(({ icon, title, tamil, brands, items, color, iconBg, href, highlight }) => (
            <Link
              key={title}
              to={href}
              className={`card border ${color} p-5 group flex flex-col gap-3 ${highlight ? 'ring-2 ring-indigo-300 ring-offset-1' : ''}`}
            >
              <div className="flex items-start gap-3">
                <div className={`${iconBg} w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0`}>
                  {icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading font-bold text-navy-900 text-base">{title}</h3>
                    {highlight && <span className="bg-indigo-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wide shrink-0">Auth. Dealer</span>}
                  </div>
                  <p className="text-slate-400 text-xs">{tamil}</p>
                </div>
              </div>
              <p className="text-brand-blue text-xs font-semibold">{brands}</p>
              <ul className="grid grid-cols-2 gap-1">
                {items.map(item => (
                  <li key={item} className="text-slate-600 text-xs flex items-center gap-1">
                    <span className="text-green-500 font-bold">›</span> {item}
                  </li>
                ))}
              </ul>
              <p className="text-brand-blue text-xs font-bold group-hover:text-navy-900 transition-colors mt-auto">
                View Products →
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/products" className="btn-primary text-base px-8 py-4">
            Browse Full Product Catalog →
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── BRANDS ─────────────────────────────────────────────── */
function BrandsSection() {
  return (
    <section className="py-12 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
          Authorised & Genuine Stock — Brands We Carry
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {brands.map(({ name, cat }) => (
            <div key={name}
              className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 shadow-sm hover:shadow-card hover:border-navy-300 transition-all text-center cursor-default">
              <p className="font-bold text-navy-900 text-sm">{name}</p>
              <p className="text-slate-400 text-[10px]">{cat}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-400 text-xs mt-4">
          + many more. If you don't see your brand, just call — we likely stock it.
        </p>
      </div>
    </section>
  )
}

/* ─── ABOUT TEASER ──────────────────────────────────────── */
function AboutTeaser() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80"
              alt="P.R. Rajagopalaiyengar & Sons electrical shop"
              className="rounded-3xl shadow-premium w-full h-80 md:h-96 object-cover"
            />
            <div className="absolute -bottom-5 -right-5 bg-navy-900 text-white rounded-2xl p-4 shadow-xl">
              <p className="font-heading font-bold text-4xl text-amber-400">67</p>
              <p className="text-sm leading-tight">Years of<br/>Trust</p>
            </div>
            <div className="absolute top-4 left-4 bg-white rounded-xl px-3 py-2 shadow-lg">
              <p className="text-green-600 font-bold text-xs">✅ Authorized Dealer</p>
              <p className="text-[10px] text-slate-500">Texmo Aquasub Pumps</p>
            </div>
          </div>

          <div>
            <span className="gold-badge">Who We Are</span>
            <h2 className="section-title mt-3">
              Thiruvarur's Most Trusted<br/>
              Electrical & Plumbing Shop
            </h2>
            <p className="text-slate-600 mt-4 leading-relaxed">
              Since <strong>1957</strong>, P.R. Rajagopalaiyengar & Sons has been the go-to shop
              for builders, contractors, farmers and homeowners across Thiruvarur, Nagapattinam and
              Thiruturaipoondi. We sell only <strong>original, branded products</strong> — no compromises.
            </p>
            <p className="text-slate-600 mt-3 leading-relaxed">
              Our shop stocks the <strong>complete range</strong> of electrical materials (wires, switches, MCBs,
              fans, lights), plumbing materials (CPVC pipes, taps, tanks, fittings) and
              we are the <strong className="text-navy-900">Authorized Texmo Aquasub Pump Dealer</strong> for this district.
              We also provide professional installation services for everything we sell.
            </p>
            <p className="text-amber-700 font-semibold italic mt-3 text-sm">
              "நாங்கள் விற்பது தரமான பொருட்கள் மட்டுமே — We sell only genuine quality."
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                { icon: '🔒', label: 'Zero Duplicate Products' },
                { icon: '🏭', label: 'Authorized Texmo Dealer' },
                { icon: '📦', label: '500+ Products in Stock' },
                { icon: '💡', label: 'Free Expert Advice' },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-slate-700">
                  <span>{icon}</span> {label}
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-3 flex-wrap">
              <Link to="/about" className="btn-primary">Our Story →</Link>
              <a href={`tel:${PHONE}`}
                 className="flex items-center gap-2 px-5 py-3 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-all">
                📞 Call the Shop
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── SERVICES TEASER ───────────────────────────────────── */
function ServicesTeaser() {
  return (
    <section className="section-pad bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1400&q=60')] bg-cover" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 text-amber-400 rounded-full text-xs font-semibold uppercase tracking-wide border border-white/15">
            Installation Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-3">
            We Don't Just Sell — We Install Too
          </h2>
          <p className="text-slate-300 mt-2 max-w-xl mx-auto">
            Buy materials from us and get them professionally installed by our licensed team.
            Everything under one trusted name.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon, title, tamil, desc }) => (
            <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all">
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="font-bold text-white text-base">{title}</h3>
              <p className="text-amber-300 text-xs mt-0.5">{tamil}</p>
              <p className="text-slate-400 text-xs mt-2 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-white text-navy-900 font-bold px-7 py-3 rounded-xl hover:bg-amber-50 transition-colors"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── TESTIMONIALS ──────────────────────────────────────── */
function TestimonialsSection() {
  return (
    <section className="section-pad bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="gold-badge">Customer Reviews</span>
          <h2 className="section-title mt-3">What Our Customers Say</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ name, location, text, stars, service }) => (
            <div key={name} className="card p-6 flex flex-col">
              <div className="flex items-center gap-1 text-amber-400">{'★'.repeat(stars)}</div>
              <span className="mt-2 self-start bg-blue-50 text-brand-blue text-xs font-semibold px-2 py-1 rounded-full">{service}</span>
              <p className="mt-3 text-slate-700 text-sm italic leading-relaxed flex-1">"{text}"</p>
              <div className="mt-4 pt-3 border-t border-slate-100">
                <p className="font-semibold text-navy-900 text-sm">{name}</p>
                <p className="text-slate-400 text-xs">📍 {location}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/testimonials" className="text-brand-blue font-semibold hover:text-navy-900 transition-colors">
            Read more reviews →
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── SERVICE AREAS ─────────────────────────────────────── */
function ServiceAreas() {
  const areas = ['Thiruvarur', 'Nagapattinam', 'Thiruturaipoondi', 'Mannargudi', 'Papanasam', 'Vedaranyam', 'Sirkali', 'Kumbakonam', 'Mayiladuthurai', 'Pattukkottai', 'Karaikal']
  return (
    <section className="py-10 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="font-heading font-bold text-xl text-navy-900 mb-2">📍 We Sell & Serve Across</h3>
        <p className="text-slate-500 text-sm mb-5">Thiruvarur, Nagapattinam & Thiruturaipoondi Districts</p>
        <div className="flex flex-wrap justify-center gap-2">
          {areas.map(a => (
            <span key={a} className="bg-slate-100 border border-slate-200 text-slate-700 text-sm font-medium px-4 py-1.5 rounded-full">
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── FAQ ──────────────────────────────────────────────── */
function FAQSection() {
  return (
    <section className="section-pad bg-slate-50 border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="gold-badge">FAQ</span>
          <h2 className="section-title mt-3">Frequently Asked Questions</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Answers to the questions customers commonly search before buying electrical materials,
            plumbing products and Texmo pumps in Thiruvarur.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map(({ question, answer }) => (
            <details
              key={question}
              className="group bg-white border border-slate-200 rounded-2xl p-5 shadow-sm open:shadow-card"
            >
              <summary className="list-none cursor-pointer flex items-start justify-between gap-4">
                <h3 className="font-heading text-lg font-bold text-navy-900 pr-4">{question}</h3>
                <span className="text-brand-blue text-2xl leading-none transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── FINAL CTA ─────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-navy-900 via-brand-blue to-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=40')] bg-cover" />
      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight">
          Need Electrical or Plumbing<br/>Materials? Visit Us or Call!
        </h2>
        <p className="mt-3 text-blue-200 text-lg">
          Builders, contractors, homeowners — we supply everything genuine.
          <br/>
          <strong className="text-white">Send your material list on WhatsApp.</strong>
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${PHONE}`}
            className="flex items-center justify-center gap-3 bg-brand-orange text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-orange-700 transition-all hover:scale-105"
          >
            📞 {DISPLAY}
          </a>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-brand-whatsapp text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-green-600 transition-all hover:scale-105"
          >
            💬 Send Material List on WhatsApp
          </a>
        </div>
        <p className="mt-5 text-blue-200 text-sm">
          📍 No. 185, Old Nagai Salai, Thiruvarur – 610 001 | Mon–Sat 8AM–8PM
        </p>
      </div>
    </section>
  )
}
