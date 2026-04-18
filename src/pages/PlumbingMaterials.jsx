import Seo from '../components/Seo'
import SectionContainer from '../components/SectionContainer'
import BrandCard from '../components/BrandCard'
import HeroSection from '../components/product-pages/HeroSection'
import CategoryCard from '../components/product-pages/CategoryCard'
import CTASection from '../components/product-pages/CTASection'
import { plumbingImageData } from '../content/productPageMedia'

const featuredBrands = ['Finolex', 'Watertec', 'Metro', 'Atlas']

const alsoAvailable = [
  { name: 'Ajeet' },
  { name: 'Rays' },
  { name: 'Aquatek' },
]

const plumbingWhatsAppMessage = 'Hello, I need details about plumbing materials, pipes or fittings.'

const plumbingCategoryDescriptions = {
  Pipes: 'Pipe stock for bathrooms, overhead lines, repair work and routine building supply.',
  'Pipe Fittings': 'Connectors, fittings and accessories for pipe joints, repair work and new plumbing installations.',
  'Plumbing Tools': 'Tools and practical plumbing support items for installation and repair needs.',
  'Water Flow Systems': 'Water-system visuals for flow lines, utility connections and connected plumbing setups.',
}

export default function PlumbingMaterialsPage() {
  const plumbingCategoryCards = plumbingImageData.categoryCards.map((item) => ({
    ...item,
    description: plumbingCategoryDescriptions[item.title],
    message: `Hello, I need details about ${item.title.toLowerCase()} in plumbing materials.`,
  }))

  return (
    <>
      <Seo
        title="Plumbing Materials in Tiruvarur | Pipes, Fittings & Accessories"
        description="Get plumbing materials in Tiruvarur — Finolex pipes, fittings and accessories for homes, buildings and repair work. Call or send your list on WhatsApp before visiting."
        path="/plumbing-materials"
        breadcrumbs={[{ name: 'Plumbing Materials', path: '/plumbing-materials' }]}
      />

      <SectionContainer className="bg-[#f4f8f6] py-16 md:py-24" contentClassName="space-y-14 md:space-y-16">
        <HeroSection
          eyebrow="Plumbing Materials"
          title="Plumbing Materials in Tiruvarur — Pipes, Fittings and Accessories"
          description="We stock plumbing materials for homes, buildings and repair work in Tiruvarur — Finolex pipes, fittings, tools and water-system accessories from trusted brands."
          trustItems={['Finolex and more', 'Pipes and fittings available', 'Call and WhatsApp support']}
          image={plumbingImageData.hero.imagePath}
          imageAlt={plumbingImageData.hero.alt}
          imageLabel="Plumbing Materials"
          message={plumbingWhatsAppMessage}
          primaryLabel="Call for Materials"
          secondaryLabel="WhatsApp Your List"
        />

        <div>
          <div className="max-w-3xl">
            <span className="gold-badge">Product Groups</span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-[#D6452E] md:text-4xl">Plumbing Material Categories Available in Tiruvarur</h2>
            <p className="mt-4 text-base leading-8 text-[#666666]">Pipes, fittings, tools and water-system accessories — browse by category and call or WhatsApp to confirm availability before visiting.</p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {plumbingCategoryCards.map((item) => (
              <CategoryCard
                key={item.title}
                title={item.title}
                description={item.description}
                imagePath={item.imagePath}
                alt={item.alt}
                message={item.message}
                ctaLabel="Ask Availability"
                badge="Plumbing"
              />
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-white py-20 md:py-28" contentClassName="space-y-8 md:space-y-10">
        <div className="grid gap-6 overflow-hidden rounded-[1.5rem] border border-[#d7e5df] bg-[#f9fbfa] p-6 shadow-[0_16px_34px_rgba(26,26,26,0.05)] md:grid-cols-[1.02fr_0.98fr] md:p-8">
          <div className="overflow-hidden rounded-[1rem] bg-white">
            <img src={plumbingImageData.supportingImage.imagePath} alt={plumbingImageData.supportingImage.alt} className="h-full w-full object-cover" loading="lazy" decoding="async" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="gold-badge">Showroom Display</span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-[#D6452E]">Plumbing Brands Available at Our Counter in Tiruvarur</h2>
            <p className="mt-4 text-base leading-8 text-[#666666]">Finolex, Watertec, Metro, Atlas and more — reliable plumbing brands for homes, buildings and repair work across Tiruvarur and nearby towns.</p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-heading text-4xl font-bold text-[#D6452E] md:text-5xl">Plumbing Materials</h2>
          <p className="mt-4 text-base leading-8 text-[#666666] md:text-lg">Pipes, fittings &amp; complete plumbing solutions</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredBrands.map((brand) => (
            <BrandCard key={brand} name={brand} badge="Featured Brand" />
          ))}
        </div>

        <div className="rounded-[1rem] bg-[#f7f7f7] px-5 py-5 ring-1 ring-[#ececec]">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2F5D50]">Also Available</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {alsoAvailable.map((brand) => (
              <span key={brand.name} className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-[#7a7a7a] ring-1 ring-[#e3e3e3]">
                {brand.name}
                {brand.note ? <span className="ml-2 text-xs font-semibold uppercase tracking-wide text-[#2F5D50]">{brand.note}</span> : null}
              </span>
            ))}
          </div>
        </div>

        <CTASection
          eyebrow="Plumbing Contact"
          title="Call now or send your plumbing requirement on WhatsApp"
          description="Use WhatsApp if you already know the material or brand name. Call if you want quick guidance before visiting the shop."
          message={plumbingWhatsAppMessage}
          primaryLabel="Call Now"
          secondaryLabel="WhatsApp Enquiry"
        />
      </SectionContainer>
    </>
  )
}