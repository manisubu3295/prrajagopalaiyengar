import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import EnquiryActions from '../components/EnquiryActions'
import { aboutPoints, bilingualText, businessFacts, contactInfo } from '../content/siteContent'

const businessBlocks = [
  {
    title: 'Established Local Presence',
    description: 'A familiar, approachable counter in Tiruvarur with stock and guidance for everyday home, building and farm material needs.',
  },
  {
    title: 'Practical Product Support',
    description: 'Tell us what you need — we will suggest the right product, confirm availability and make your visit straightforward.',
  },
  {
    title: '67 Years Across 3 Generations',
    description: 'Decades of continuous local service in Tiruvarur make this a counter customers return to and recommend.',
  },
  {
    title: 'Serving Tiruvarur, Thiruthuraipoondi and Mannargudi',
    description: 'Customers from all three towns and nearby areas are welcome to call, WhatsApp or walk in for product enquiries.',
  },
]

export default function About() {
  return (
    <>
      <Seo
        title="About P.R. Rajagopalaiyengar & Sons | Authorized Texmo Dealer in Tiruvarur"
        description="P.R. Rajagopalaiyengar & Sons — authorized Texmo dealer in Tiruvarur with 67 years of service. Electrical, plumbing, pumps, motors and borewell enquiries for Tiruvarur, Thiruthuraipoondi and Mannargudi."
        path="/about-business"
        breadcrumbs={[{ name: 'About Business', path: '/about-business' }]}
      />

      <PageHero
        eyebrow="About Business"
        title="A Trusted Local Dealer Built Around Reliability, Texmo Authority and Support"
        description="Authorized Texmo dealer in Tiruvarur with 67 years of local service. Electrical products, plumbing materials, Texmo pumps and motors, and borewell enquiries for customers across Tiruvarur, Thiruthuraipoondi and Mannargudi."
        message="Hello, I want to know more about your business and services."
        primaryLabel="Call the Shop"
        secondaryLabel="WhatsApp Enquiry"
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8">
            <div className="panel-paper p-6 md:p-8 lg:p-10">
              <p className="section-kicker">Business Snapshot</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-[#D6452E] md:text-4xl">About P.R. Rajagopalaiyengar & Sons — Authorized Texmo Dealer</h2>
              <p className="tamil-text mt-3 text-sm text-[#2F5D50]">{bilingualText.texmoLine}</p>
              <div className="mt-6 grid gap-3">
                {aboutPoints.map((point) => (
                  <div key={point} className="rounded-[1rem] bg-[#f9fbfa] px-4 py-4 text-sm leading-7 text-[#666666] ring-1 ring-[#d7e5df]">
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="panel-paper p-6 md:p-8 lg:p-10">
              <p className="section-kicker">Trust At A Glance</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-[#D6452E] md:text-4xl">67 Years of Trusted Local Service in Tiruvarur</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1rem] bg-[#f4f8f6] px-4 py-4 text-center ring-1 ring-[#d7e5df]">
                  <p className="section-kicker">Years</p>
                  <p className="mt-2 font-heading text-3xl font-bold text-[#D6452E]">67+</p>
                </div>
                <div className="rounded-[1rem] bg-[#f4f8f6] px-4 py-4 text-center ring-1 ring-[#d7e5df]">
                  <p className="section-kicker">Generations</p>
                  <p className="mt-2 font-heading text-3xl font-bold text-[#D6452E]">3</p>
                </div>
                <div className="rounded-[1rem] bg-[#f4f8f6] px-4 py-4 text-center ring-1 ring-[#d7e5df]">
                  <p className="section-kicker">Towns</p>
                  <p className="mt-2 font-heading text-3xl font-bold text-[#D6452E]">3</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <span className="trust-chip">{businessFacts.trustTitle}</span>
                <span className="trust-chip">{businessFacts.experienceLine}</span>
              </div>
              <div className="mt-6 space-y-4">
                {businessBlocks.map((block) => (
                  <div key={block.title} className="rounded-[1rem] bg-[#f9fbfa] p-4 ring-1 ring-[#d7e5df]">
                    <h3 className="text-lg font-semibold text-[#1A1A1A]">{block.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#666666]">{block.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
            <div className="storefront-frame rounded-[1.5rem] bg-[#2F5D50] p-6 text-white shadow-sm md:p-8 lg:p-10">
              <h2 className="font-heading text-3xl font-bold md:text-4xl">Visit, Call or Send a WhatsApp Message</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#dbe8e3]">We are nearby, dependable and ready to help with practical product questions across Tiruvarur, Thiruthuraipoondi and Mannargudi.</p>
              <p className="mt-5 text-sm text-[#f0d9d2]">📍 {contactInfo.fullAddress}</p>
              <EnquiryActions
                message="Hello, I want to know more about your business and services."
                className="mt-8"
                primaryLabel="Call Now"
                secondaryLabel="WhatsApp Us"
              />
            </div>

            <div className="panel-paper p-6 md:p-8 lg:p-10">
              <p className="section-kicker">Service Reach</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-[#D6452E]">Service Areas: Tiruvarur, Thiruthuraipoondi and Mannargudi</h2>
              <div className="mt-6 grid gap-3">
                {businessFacts.serviceAreas.map((area) => (
                  <div key={area} className="rounded-[1rem] bg-[#f9fbfa] px-4 py-4 text-sm font-semibold text-[#1A1A1A] ring-1 ring-[#d7e5df]">
                    {area}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-7 text-[#666666]">We regularly serve customers from Tiruvarur, Thiruthuraipoondi and Mannargudi. Call or WhatsApp before visiting to check stock or confirm your requirement.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}