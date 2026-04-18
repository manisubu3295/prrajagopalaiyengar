import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import SectionContainer from '../components/SectionContainer'
import BrandCard from '../components/BrandCard'
import HeroSection from '../components/product-pages/HeroSection'
import CategoryCard from '../components/product-pages/CategoryCard'
import CTASection from '../components/product-pages/CTASection'
import { brandSections, localKeywords } from '../content/siteContent'
import { electricalImageData } from '../content/productPageMedia'

const electricalMessage = 'Hello, I need electrical product availability details.'

const categoryDescriptions = {
  'Ceiling Fans': 'Decorative and regular-use fan options for home rooms, shops and site supply.',
  Switches: 'Clean plate switches and modular fittings for repair work and new wiring plans.',
  'LED Lights': 'LED bulbs, focus lights and related lighting categories shown with a cleaner retail feel.',
  'Wires & Cables': 'Cable stock for domestic work, contractor lists and quick replacement requirements.',
}

const collectionCopy = {
  fans: {
    title: 'Ceiling Fans',
    description: 'Crompton, Havells, TVS BLDC and Khaitan — ceiling fan options for homes, offices and general-use needs in Tiruvarur.',
    imagePath: electricalImageData.categoryCards[0].imagePath,
    imageAlt: electricalImageData.categoryCards[0].alt,
  },
  switches: {
    title: 'Switches',
    description: 'Legrand, Anchor, Lisha and more — modular switches and plate fittings for new wiring, renovation and replacement needs.',
    imagePath: electricalImageData.categoryCards[1].imagePath,
    imageAlt: electricalImageData.categoryCards[1].alt,
  },
  lighting: {
    title: 'LED Lights / Focus Lights',
    description: 'Philips, Halonix and related brands — LED bulbs, focus lights and tube lights for home, shop and outdoor use.',
    imagePath: electricalImageData.categoryCards[2].imagePath,
    imageAlt: electricalImageData.categoryCards[2].alt,
  },
  wires: {
    title: 'Wires & Cables',
    description: 'RR, KEI, V-Guard, SINCAB and Finolex — cable stock for household wiring, contractor requirements and site work in Tiruvarur.',
    imagePath: electricalImageData.categoryCards[3].imagePath,
    imageAlt: electricalImageData.categoryCards[3].alt,
  },
}

export default function ElectricalProductsPage() {
  const electricalBrands = brandSections.filter((section) => ['fans', 'switches', 'lighting', 'wires'].includes(section.id))
  const categoryCards = electricalImageData.categoryCards.map((item) => ({
    ...item,
    description: categoryDescriptions[item.title],
    message: `Hello, I need details about ${item.title.toLowerCase()} availability.`,
  }))

  return (
    <>
      <Seo
        title="Electrical Products in Tiruvarur | Lights, Wires, Switches, Fans & Cables"
        description="Shop electrical products in Tiruvarur — LED lights, ceiling fans, switches, wires and cables from trusted brands including Philips, RR, KEI, Legrand and Crompton. Call or WhatsApp for availability."
        keywords={localKeywords.join(', ')}
        path="/electrical-products"
        breadcrumbs={[{ name: 'Electrical Products', path: '/electrical-products' }]}
      />

      <SectionContainer className="bg-[#f4f8f6] py-16 md:py-24" contentClassName="space-y-14 md:space-y-16">
        <HeroSection
          eyebrow="Electrical Products"
          title="Electrical Products in Tiruvarur — Lights, Fans, Switches and Cables"
          description="We stock electrical products for homes, shops and site work in Tiruvarur — LED lights, ceiling fans, switches, wires and cables from Philips, RR, KEI, Legrand and more."
          trustItems={['Trusted local dealer', 'Wide brand selection', 'Call and WhatsApp support']}
          image={electricalImageData.hero.imagePath}
          imageAlt={electricalImageData.hero.alt}
          imageLabel="Electrical Products"
          message={electricalMessage}
          primaryLabel="Call for Stock"
          secondaryLabel="WhatsApp Your List"
        />

        <div>
          <div className="max-w-3xl">
            <span className="gold-badge">Category Overview</span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-[#D6452E] md:text-4xl">Electrical Product Categories Available in Tiruvarur</h2>
            <p className="mt-4 text-base leading-8 text-[#666666]">Fans, switches, lights and cables — browse by category and call or WhatsApp to confirm current availability before visiting the shop.</p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {categoryCards.map((item) => (
              <CategoryCard
                key={item.title}
                title={item.title}
                description={item.description}
                imagePath={item.imagePath}
                alt={item.alt}
                message={item.message}
                ctaLabel="Ask Availability"
                badge="Electrical"
              />
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-white py-20 md:py-28" contentClassName="space-y-8 md:space-y-10">
        <div className="max-w-3xl">
          <span className="gold-badge">Featured Brands</span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-[#D6452E] md:text-4xl">Featured Electrical Brands at Our Counter in Tiruvarur</h2>
          <p className="mt-4 text-base leading-8 text-[#666666]">Philips, RR, KEI, Legrand, Crompton, Anchor and more — brand groups are organised by product type for faster availability checks.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {electricalBrands.map((section) => {
            const copy = collectionCopy[section.id]

            return (
              <article key={section.id} className="panel-paper overflow-hidden">
                <div className="grid gap-0 md:grid-cols-[0.92fr_1.08fr]">
                  <div className="aspect-[5/4] overflow-hidden bg-[#f4f8f6] md:h-full md:aspect-auto">
                    <img src={copy.imagePath} alt={copy.imageAlt} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="section-kicker">{copy.title}</p>
                    <h3 className="mt-3 font-heading text-3xl font-bold text-[#1A1A1A]">{section.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#666666]">{copy.description}</p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
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
                              {brand.note ? <span className="ml-2 text-[10px] font-semibold uppercase tracking-wide text-[#2F5D50]">{brand.note}</span> : null}</span>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <div className="grid gap-6 overflow-hidden rounded-[1.5rem] border border-[#d7e5df] bg-[#f9fbfa] p-6 shadow-[0_16px_34px_rgba(26,26,26,0.05)] md:grid-cols-[0.9fr_1.1fr] md:p-8">
          <div className="overflow-hidden rounded-[1rem] bg-white">
            <img src={electricalImageData.supportingImage.imagePath} alt={electricalImageData.supportingImage.alt} className="h-full w-full object-cover" loading="lazy" decoding="async" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="gold-badge">Supporting Counter</span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-[#D6452E]">Need electrical items alongside pumps and motors?</h2>
            <p className="mt-4 text-base leading-8 text-[#666666]">Electrical product needs often come with pump starters, cable matching and related motor accessories. Visit our Pumps & Motors section for Texmo pump and motor availability alongside your electrical requirements.</p>
            <Link to="/pumps-and-motors" className="btn-outline mt-6 w-full justify-center sm:w-fit">
              View Pumps &amp; Motors
            </Link>
          </div>
        </div>

        <CTASection
          eyebrow="Electrical Contact"
          title="Call now or send your list on WhatsApp"
          description="If you already know the brands or quantities, send the requirement directly. If not, call the shop and explain the product type first."
          message={electricalMessage}
          primaryLabel="Call Now"
          secondaryLabel="WhatsApp Enquiry"
        />
      </SectionContainer>
    </>
  )
}