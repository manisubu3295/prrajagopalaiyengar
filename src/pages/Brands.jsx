import Seo from '../components/Seo'
import SectionContainer from '../components/SectionContainer'
import BrandCard from '../components/BrandCard'
import HeroSection from '../components/product-pages/HeroSection'
import CTASection from '../components/product-pages/CTASection'
import { brandSections } from '../content/siteContent'
import { brandsImageData } from '../content/productPageMedia'

const brandTrustPoints = [
  'Texmo is our authorized dealer brand for pumps and motors in Tiruvarur',
  'Priority brands are always available — call or WhatsApp to confirm current stock',
  'Brand groups are organized by product category for easy reference',
]

export default function Brands() {
  return (
    <>
      <Seo
        title="Brands We Stock | Texmo, Philips, RR, KEI, Legrand & Finolex in Tiruvarur"
        description="Authorized dealer for Texmo pumps, Philips lights, RR and KEI cables, Legrand switches and Finolex pipes in Tiruvarur. Call or WhatsApp to confirm brand availability before visiting."
        path="/brands"
        breadcrumbs={[{ name: 'Brands', path: '/brands' }]}
      />

      <SectionContainer className="bg-[#f4f8f6] py-16 md:py-24" contentClassName="space-y-14 md:space-y-16">
        <HeroSection
          eyebrow="Brands"
          title="Important brands shown with clear dealer priority"
          description="The brands page now follows the same structured system as the product pages: trusted names first, supporting names after, and a layout that feels like a premium local showroom rather than a loose list."
          trustItems={['Priority brands first', 'Structured brand grouping', 'Fast availability checks']}
          image={brandsImageData.hero.imagePath}
          imageAlt={brandsImageData.hero.alt}
          imageLabel="Our Brands"
          message="Hello, I want to check brand availability."
          primaryLabel="Call for Brand Check"
          secondaryLabel="WhatsApp Brand Enquiry"
        />

        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8">
          <div className="panel-paper p-6 md:p-8 lg:p-10">
            <span className="gold-badge">Brand Overview</span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-[#D6452E] md:text-4xl">Trusted Brands Available at Our Dealer Counter in Tiruvarur</h2>
            <p className="mt-4 text-base leading-8 text-[#666666]">We carry a curated selection of reliable brands across electrical, plumbing and pumps categories — organized clearly so you know what to ask for before calling or visiting.</p>
            <div className="mt-6 grid gap-3">
              {brandTrustPoints.map((point) => (
                <div key={point} className="rounded-[1rem] bg-[#f9fbfa] px-4 py-4 text-sm leading-7 text-[#666666] ring-1 ring-[#d7e5df]">
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-[#d7e5df] bg-white shadow-[0_16px_34px_rgba(26,26,26,0.05)]">
            <div className="aspect-[5/3] overflow-hidden bg-[#f4f8f6]">
              <img src={brandsImageData.supportingImage.imagePath} alt={brandsImageData.supportingImage.alt} className="h-full w-full object-cover" loading="lazy" decoding="async" />
            </div>
            <div className="p-6 md:p-8">
              <p className="section-kicker">Dealer Display</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-[#D6452E] md:text-4xl">A curated brand selection from a trusted local dealer</h2>
              <p className="mt-4 text-sm leading-7 text-[#666666]">Priority brands are given clear prominence, while supporting names are grouped neatly so every customer can find what they need quickly.</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {brandSections.map((section) => (
            <article key={section.id} className="panel-paper p-6 md:p-8 lg:p-10">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="section-kicker">Brand Group</p>
                  <h2 className="mt-3 font-heading text-3xl font-bold text-[#D6452E]">{section.title}</h2>
                </div>
                <span className="rounded-full bg-[#f4f8f6] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2F5D50] ring-1 ring-[#d7e5df]">
                  {section.top.length + section.medium.length + section.low.length} names
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[...section.top, ...section.medium].map((brand, index) => (
                  <BrandCard
                    key={brand.name}
                    name={brand.name}
                    note={brand.note}
                    compact
                    badge={index < section.top.length ? 'Priority' : 'Featured'}
                  />
                ))}
              </div>

              {section.low.length ? (
                <div className="mt-5 rounded-[1rem] bg-[#f7f7f7] px-4 py-4 ring-1 ring-[#ececec]">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2F5D50]">Also Available</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {section.low.map((brand) => (
                      <span key={brand.name} className="inline-flex items-center rounded-full bg-white px-3 py-2 text-sm font-medium text-[#666666] ring-1 ring-[#e5e5e5]">
                        {brand.name}
                        {brand.note ? <span className="ml-2 text-[10px] font-semibold uppercase tracking-wide text-[#2F5D50]">{brand.note}</span> : null}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </article>
          ))}
        </div>

        <CTASection
          eyebrow="Brand Enquiry"
          title="Call now or confirm brand availability on WhatsApp"
          description="Use WhatsApp if you already know the brand group. Call if you want quick guidance on which line to ask about before visiting the shop."
          message="Hello, I want to check brand availability."
          primaryLabel="Call Now"
          secondaryLabel="WhatsApp Enquiry"
        />
      </SectionContainer>
    </>
  )
}