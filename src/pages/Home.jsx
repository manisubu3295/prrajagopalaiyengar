import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import EnquiryActions from '../components/EnquiryActions'
import FaqSection from '../components/FaqSection'
import { buildWhatsAppLink, contactInfo, homepageFaqs, localKeywords } from '../content/siteContent'
import electricalShowroom from '../assets/electrical-showroom.jpg'
import plumbingMaterialsImage from '../assets/plumbing-materials.jpg'
import pumpsMotorsImage from '../assets/pumps-motors.jpg'
import borewellServicesImage from '../assets/borewell-services.jpg'

const businessFacts = [
  'Authorized Texmo Dealer',
  'Serving Tiruvarur, Thiruthuraipoondi, Nagapattinam',
  'Electrical, Plumbing & Borewell Services',
]

const categoryCards = [
  {
    title: 'Electrical Materials',
    description: 'Lights, switches and daily-use electrical stock for homes, shops and site work.',
    href: '/electrical-products',
    icon: 'bolt',
  },
  {
    title: 'Wires & Cables',
    description: 'RR, KEI and related cable options grouped for quick requirement matching.',
    href: '/electrical-products',
    icon: 'cable',
  },
  {
    title: 'Plumbing Materials',
    description: 'Pipes, fittings and plumbing accessories for repairs and new work.',
    href: '/plumbing-materials',
    icon: 'pipe',
  },
  {
    title: 'Pumps & Motors',
    description: 'Authorized Texmo dealer support for water movement and motor replacement needs.',
    href: '/pumps-and-motors',
    icon: 'pump',
  },
  {
    title: 'Borewell Services',
    description: 'Direct enquiry-first support for borewell work and related material needs.',
    href: '/borewell-services',
    icon: 'drop',
  },
]

const primaryBrands = [
  { title: 'Texmo', note: 'Authorized Texmo motor dealer for pumps and motors.', logo: '/texmo%20brand.png', wide: true },
  { title: 'Philips', note: 'Preferred brand for lighting and LED visibility.' },
  { title: 'RR', note: 'Primary cable brand for household and contractor enquiries.' },
  { title: 'KEI', note: 'Strong cable brand highlighted for fast trust.' },
]

const secondaryBrands = ['Legrand', 'Finolex', 'Anchor', 'V-Guard', 'Crompton', 'Havells', 'Lisha', 'Khaitan']

const offeringCards = [
  {
    title: 'Pumps',
    description: 'Texmo-led enquiries for home, building and field water requirements.',
    image: pumpsMotorsImage,
    alt: 'Texmo pumps and motors display in Tiruvarur',
  },
  {
    title: 'Pipes',
    description: 'Finolex and related plumbing material support for regular site needs.',
    image: plumbingMaterialsImage,
    alt: 'Plumbing materials and pipes in Tiruvarur',
  },
  {
    title: 'Switches',
    description: 'Switches, accessories and electrical finishing items grouped for faster selection.',
    image: electricalShowroom,
    alt: 'Electrical switches and accessories showroom in Tiruvarur',
  },
]

const trustItems = [
  'Authorized Texmo Dealer',
  'Serving Tiruvarur, Nagapattinam, Thiruthuraipoondi',
  'Trusted Local Supplier',
]

export default function Home() {
  return (
    <>
      <Seo
        title="Authorized Texmo Dealer in Tiruvarur | Electrical, Plumbing, Pumps & Borewell"
        description="Authorized Texmo motor dealer in Tiruvarur serving Tiruvarur, Thiruthuraipoondi and Nagapattinam with electrical products, plumbing materials, pumps, motors and borewell enquiries."
        keywords={localKeywords.join(', ')}
        path="/"
      />

      <HeroSection />
      <CategorySection />
      <BrandsSection />
      <OfferingsSection />
      <BorewellSection />
      <ContactSection businessFacts={businessFacts} />
      <FaqSection
        faqs={homepageFaqs}
        title="Common Questions from Customers in Tiruvarur and Nearby Towns"
        eyebrow="FAQ"
      />
    </>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[#d7e5df] bg-[linear-gradient(180deg,#ffffff_0%,#f7faf8_58%,#f2f7f5_100%)] pb-20 pt-0 md:pb-28 md:pt-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top_left,rgba(214,69,46,0.09),transparent_52%),radial-gradient(circle_at_top_right,rgba(47,93,80,0.08),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[36%] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(47,93,80,0.04)_100%)] lg:block" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.96fr] lg:gap-14">
          <div className="relative z-[1]">
            <span className="gold-badge">Established Since 1957</span>

            <div className="mt-5 max-w-4xl space-y-3 md:space-y-4">
              <h1 className="space-y-2">
                <span className="block font-heading text-4xl font-bold leading-none text-[#D6452E] md:text-5xl lg:text-[3.85rem]">Authorized Texmo Motor Dealer</span>
                <span className="block font-heading text-3xl font-bold leading-none text-[#1A1A1A] md:text-4xl lg:text-[3.05rem]">in Tiruvarur</span>
              </h1>
              <p className="text-lg font-semibold leading-8 text-[#2F5D50] md:text-xl lg:text-[1.35rem] lg:leading-9">
                Electrical • Plumbing • Pumps • Borewell Solutions
              </p>
            </div>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#666666] md:text-lg">
              Reliable product guidance, Texmo authority, and local walk-in support for customers across Tiruvarur, Nagapattinam and Thiruthuraipoondi.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {trustItems.map((item) => (
                <span key={item} className="trust-chip rounded-full bg-white/92 shadow-[0_10px_22px_rgba(26,26,26,0.05)]">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex min-h-[56px] w-full items-center justify-center rounded-xl bg-[#D6452E] px-6 py-3 font-semibold text-white shadow-[0_14px_28px_rgba(214,69,46,0.18)] transition-colors hover:bg-[#b63a27] sm:w-auto"
              >
                Call Now
              </a>
              <a
                href={buildWhatsAppLink('Hello, I need details about products or borewell services.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[56px] w-full items-center justify-center rounded-xl border border-[#2F5D50]/24 bg-white px-6 py-3 font-semibold text-[#2F5D50] shadow-[0_10px_20px_rgba(26,26,26,0.04)] transition-colors hover:bg-[#edf4f1] sm:w-auto"
              >
                WhatsApp
              </a>
            </div>

            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              <div className="rounded-[1rem] border border-[#d7e5df] bg-white px-4 py-4 shadow-[0_10px_22px_rgba(26,26,26,0.04)]">
                <p className="section-kicker">Years</p>
                <p className="mt-2 text-lg font-bold text-[#1A1A1A]">67+ service</p>
              </div>
              <div className="rounded-[1rem] border border-[#d7e5df] bg-white px-4 py-4 shadow-[0_10px_22px_rgba(26,26,26,0.04)]">
                <p className="section-kicker">Coverage</p>
                <p className="mt-2 text-lg font-bold text-[#1A1A1A]">3 key towns</p>
              </div>
              <div className="rounded-[1rem] border border-[#d7e5df] bg-white px-4 py-4 shadow-[0_10px_22px_rgba(26,26,26,0.04)]">
                <p className="section-kicker">Support</p>
                <p className="mt-2 text-lg font-bold text-[#1A1A1A]">Call or WhatsApp</p>
              </div>
            </div>
          </div>

          <div className="relative z-[1]">
            <div className="overflow-hidden rounded-[1.75rem] border border-[#d7e5df] bg-white p-5 shadow-[0_24px_54px_rgba(26,26,26,0.10)] md:p-7 lg:p-8">
              <div className="rounded-[1.2rem] border border-[#d7e5df] bg-[linear-gradient(180deg,#f8fbfa_0%,#eef5f2_100%)] p-5 md:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="section-kicker">Texmo Authority</p>
                    <h2 className="mt-3 font-heading text-2xl font-bold text-[#1A1A1A] md:text-3xl">Authorized Texmo Dealer in Tiruvarur</h2>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2F5D50] shadow-sm">
                    Trusted
                  </span>
                </div>

                <div className="mt-5 flex min-h-[116px] items-center justify-center overflow-hidden rounded-[1rem] border border-[#e3ece8] bg-white px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                  <img
                    src="/texmo%20brand.png"
                    alt="Texmo brand logo"
                    className="h-auto w-full max-w-[370px] object-contain"
                    decoding="async"
                    fetchpriority="high"
                  />
                </div>

                <p className="mt-5 text-sm leading-7 text-[#666666]">
                  We stock genuine Texmo pumps and motors for home, farm and building water needs. Call or WhatsApp to confirm availability and the right model for your requirement.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1rem] bg-white px-4 py-4 ring-1 ring-[#d7e5df]">
                    <p className="section-kicker">What We Stock</p>
                    <p className="mt-2 text-sm font-semibold text-[#1A1A1A]">Electrical, plumbing and borewell support</p>
                  </div>
                  <div className="rounded-[1rem] bg-white px-4 py-4 ring-1 ring-[#d7e5df]">
                    <p className="section-kicker">Enquiry</p>
                    <p className="mt-2 text-sm font-semibold text-[#1A1A1A]">Call or WhatsApp before visiting</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="service-photo-card h-[190px] rounded-[1.2rem]">
                  <img src={pumpsMotorsImage} alt="Pumps and motors display" className="service-photo-image" decoding="async" />
                </div>
                <div className="service-photo-card h-[190px] rounded-[1.2rem]">
                  <img src={electricalShowroom} alt="Electrical showroom shelves" className="service-photo-image" decoding="async" />
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <MetricCard label="Years" value="67+" />
                <MetricCard label="Core Towns" value="3" />
                <MetricCard label="Categories" value="5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CategorySection() {
  return (
    <section className="bg-[#f4f8f6] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="gold-badge">Categories</span>
          <h2 className="section-title mt-4">Electrical, Plumbing, Pumps & Borewell — Find What You Need Fast</h2>
          <p className="section-subtitle max-w-2xl">Each product category is organised clearly so you know exactly what to ask about before calling or visiting the shop.</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categoryCards.map((category, index) => (
            <Link
              key={category.title}
              to={category.href}
              className={`card group p-6 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(26,26,26,0.08)] ${index === 4 ? 'lg:col-span-2 lg:max-w-none' : ''}`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-[0.9rem] bg-[#f4f8f6] text-[#2F5D50] ring-1 ring-[#d7e5df]">
                <CategoryIcon type={category.icon} />
              </div>
              <h3 className="mt-5 font-heading text-2xl font-bold text-[#D6452E]">{category.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#666666]">{category.description}</p>
              <span className="mt-5 inline-flex text-sm font-semibold text-[#2F5D50]">Open Section</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function BrandsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="gold-badge">Featured Brands</span>
            <h2 className="section-title mt-4">Trusted Brands Available at Our Counter in Tiruvarur</h2>
            <p className="section-subtitle">Texmo, Philips, RR, KEI, Legrand, Finolex and more — organized by product type for fast availability checks.</p>
          </div>
          <Link to="/brands" className="link-arrow">View all brand groups</Link>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {primaryBrands.map((brand) => (
            <div key={brand.title} className={`card p-6 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(26,26,26,0.08)] ${brand.wide ? 'lg:col-span-2' : ''}`}>
              <div className="flex items-start justify-between gap-3">
                <span className="section-kicker">Featured</span>
                <span className="rounded-full bg-[#f4f8f6] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#2F5D50]">
                  {brand.title === 'Texmo' ? 'Dealer' : 'Priority'}
                </span>
              </div>

              {brand.logo ? (
                <div className="mt-5 flex min-h-[92px] items-center overflow-hidden rounded-[0.9rem] bg-[#f4f8f6] px-4 py-3 ring-1 ring-[#d7e5df]">
                  <img src={brand.logo} alt={`${brand.title} logo`} className="h-auto w-full max-w-[360px] object-contain" loading="lazy" decoding="async" />
                </div>
              ) : (
                <div className="mt-5 rounded-[0.9rem] bg-[#f4f8f6] px-4 py-5 ring-1 ring-[#d7e5df]">
                  <h3 className="font-heading text-3xl font-bold text-[#1A1A1A]">{brand.title}</h3>
                </div>
              )}

              <p className="mt-4 text-sm leading-7 text-[#666666]">{brand.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[1rem] border border-[#d7e5df] bg-[#f4f8f6] p-4 md:p-5">
          <p className="section-kicker">Other Brands</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
            {secondaryBrands.map((brand) => (
              <div key={brand} className="rounded-[0.85rem] bg-white px-4 py-4 text-center text-sm font-semibold text-[#1A1A1A] ring-1 ring-[#d7e5df] transition-all hover:-translate-y-0.5 hover:shadow-sm">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function OfferingsSection() {
  return (
    <section className="bg-[#f4f8f6] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="gold-badge">Featured Offerings</span>
          <h2 className="section-title mt-4">What Customers in Tiruvarur Ask for Most</h2>
          <p className="section-subtitle">Pumps, pipes and switches are our most-requested categories. Browse by type and call or WhatsApp for current availability.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {offeringCards.map((item) => (
            <div key={item.title} className="card overflow-hidden hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(26,26,26,0.08)]">
              <div className="h-56 overflow-hidden border-b border-[#d7e5df] bg-white">
                <img src={item.image} alt={item.alt} className="h-full w-full object-cover" loading="lazy" decoding="async" />
              </div>
              <div className="p-6">
                <p className="section-kicker">Featured</p>
                <h3 className="mt-3 font-heading text-2xl font-bold text-[#D6452E]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#666666]">{item.description}</p>
                <a href={`tel:${contactInfo.phone}`} className="mt-5 inline-flex rounded-lg bg-[#D6452E] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#b63a27]">
                  Call for details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BorewellSection() {
  return (
    <section className="bg-[#2F5D50] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 rounded-[1rem] border border-white/10 bg-white p-6 shadow-[0_16px_34px_rgba(26,26,26,0.08)] lg:grid-cols-[1.05fr_0.95fr] lg:p-8">
          <div>
            <span className="gold-badge">Borewell Services</span>
            <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-[#D6452E]">Borewell Services in Tiruvarur — Call or WhatsApp First</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#666666]">Tell us your location and requirement by call or WhatsApp. We will guide you on next steps for new borewell work, existing support or related pump and pipe needs.</p>
            <EnquiryActions
              message="Hello, I need to enquire about borewell work."
              className="mt-8"
              primaryLabel="Call for Borewell Work"
              secondaryLabel="WhatsApp Borewell Enquiry"
            />
          </div>

          <div className="service-photo-card h-[320px]">
            <img src={borewellServicesImage} alt="Borewell service support in Tiruvarur" className="service-photo-image" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactSection({ businessFacts = [] }) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="panel-paper p-6 md:p-8">
            <span className="gold-badge">Visit The Shop</span>
            <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-[#D6452E]">Visit or Call the Shop in Tiruvarur</h2>
            <div className="mt-6 grid gap-4">
              <InfoRow label="Address" value={contactInfo.addressLines.join(', ')} />
              <InfoRow label="Service Areas" value={contactInfo.serviceAreaLabel.replace('Serving ', '')} />
              <InfoRow label="Phone" value={contactInfo.displayPhone} accent />
              <InfoRow label="Hours" value={contactInfo.hours} />
            </div>

            {businessFacts?.length ? (
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2F5D50]">Business Facts</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {businessFacts?.map((fact, index) => (
                    <span key={`${fact}-${index}`} className="rounded-full bg-[#f4f8f6] px-3 py-1 text-sm text-[#666666] ring-1 ring-[#d7e5df]">
                      {fact}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="grid gap-6">
            <div className="rounded-[1rem] bg-[#f4f8f6] p-6 ring-1 ring-[#d7e5df] md:p-8">
              <p className="section-kicker">Quick Actions</p>
              <h3 className="mt-3 font-heading text-3xl font-bold text-[#D6452E]">Call, WhatsApp or Open Contact</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#666666]">Use call for immediate questions and WhatsApp when you already have a list or want to explain the requirement clearly.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`tel:${contactInfo.phone}`} className="inline-flex rounded-lg bg-[#D6452E] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#b63a27]">Call the Shop</a>
                <a href={buildWhatsAppLink('Hello, I need details about your products or services.')} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-lg bg-[#2F5D50] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#24493f]">WhatsApp Now</a>
                <Link to="/contact" className="inline-flex rounded-lg border border-[#d7e5df] bg-white px-5 py-3 font-semibold text-[#2F5D50] transition-colors hover:bg-[#edf4f1]">Open Contact Page</Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[1rem] border border-[#d7e5df] shadow-[0_16px_34px_rgba(26,26,26,0.06)]">
              <iframe
                src={contactInfo.mapEmbed}
                width="100%"
                height="340"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PRR and Sons location map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MetricCard({ label, value }) {
  return (
    <div className="rounded-[0.9rem] border border-[#d7e5df] bg-white px-4 py-4 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2F5D50]">{label}</p>
      <p className="mt-2 font-heading text-3xl font-bold text-[#D6452E]">{value}</p>
    </div>
  )
}

function InfoRow({ label, value, accent = false }) {
  return (
    <div className="rounded-[0.9rem] bg-[#f4f8f6] px-4 py-4 ring-1 ring-[#d7e5df]">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2F5D50]">{label}</p>
      <p className={`mt-2 text-sm leading-7 ${accent ? 'font-semibold text-[#D6452E]' : 'text-[#666666]'}`}>{value}</p>
    </div>
  )
}

function CategoryIcon({ type }) {
  if (type === 'bolt') {
    return (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13 2L5 14h5l-1 8 8-12h-5l1-8z" />
      </svg>
    )
  }

  if (type === 'cable') {
    return (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h8a4 4 0 014 4v1a3 3 0 003 3h1" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5v6M20 13v6" />
      </svg>
    )
  }

  if (type === 'pipe') {
    return (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h9a3 3 0 013 3v2h4" />
        <circle cx="4" cy="8" r="2" fill="currentColor" stroke="none" />
        <circle cx="20" cy="13" r="2" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  if (type === 'pump') {
    return (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 15h9a3 3 0 003-3V8h4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18a3 3 0 106 0 3 3 0 00-6 0z" />
      </svg>
    )
  }

  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C9 6.5 7 9.1 7 12a5 5 0 0010 0c0-2.9-2-5.5-5-10z" />
    </svg>
  )
}