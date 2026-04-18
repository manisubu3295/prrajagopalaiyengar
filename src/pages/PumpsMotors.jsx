import Seo from '../components/Seo'
import EnquiryActions from '../components/EnquiryActions'
import BrandPrioritySection from '../components/BrandPrioritySection'
import { bilingualText, brandSections, businessFacts } from '../content/siteContent'
import pumpsMotorsImage from '../assets/pumps-motors.jpg'

const pumpBlocks = [
  {
    title: 'Texmo Pumps & Motors — Authorized Dealer in Tiruvarur',
    intro: 'As an authorized Texmo dealer in Tiruvarur, we help customers choose the right pump or motor for home, farm and building water needs.',
    offerings: ['Texmo submersible and monoblock pumps', 'Motor replacement and upgrade support', 'Household and agricultural pump needs', 'Matching pipes, cables and accessories'],
    useCase: 'Best for customers who want pump guidance alongside the right electrical or plumbing materials.',
  },
  {
    title: 'How to Enquire for Pumps and Motors',
    intro: 'Tell us where the pump will be used and describe your current setup. We will suggest the right product and confirm availability.',
    offerings: ['Describe home, building or field use', 'Mention depth, output or load requirements if known', 'Ask about matching pipes, cables and switches', 'Confirm stock and visit timing by phone or WhatsApp'],
    useCase: 'The simplest approach is to call or WhatsApp with your location, requirement and current setup.',
  },
]

export default function PumpsMotors() {
  const texmoSection = brandSections.find((section) => section.id === 'texmo')

  return (
    <>
      <Seo
        title="Texmo Pumps & Motors Dealer in Tiruvarur | Authorized Texmo Dealer"
        description="Authorized Texmo motor dealer in Tiruvarur for pumps, motors and related water-movement needs. Serving Tiruvarur, Thiruthuraipoondi and Mannargudi — call or WhatsApp for availability."
        path="/pumps-and-motors"
        breadcrumbs={[{ name: 'Pumps & Motors', path: '/pumps-and-motors' }]}
      />

      <section className="bg-[#f4f8f6] py-16 md:py-24">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
            <div className="service-photo-card h-[240px] sm:h-[280px] md:h-[360px] lg:h-auto lg:min-h-[380px]">
              <img src={pumpsMotorsImage} alt="Texmo pumps and motors display in Tiruvarur for water movement needs" decoding="async" fetchpriority="high" className="service-photo-image" />
            </div>
            <div className="panel-paper p-6 md:p-8 lg:p-10">
              <span className="gold-badge">Authorized Texmo Dealer</span>
              <h1 className="mt-4 font-heading text-3xl font-bold text-[#D6452E] md:text-4xl">Authorized Texmo Motor Dealer in Tiruvarur — Pumps and Motors</h1>
              <p className="tamil-text mt-3 text-sm text-[#2F5D50]">{bilingualText.pumpsSupport}</p>
              <p className="mt-4 text-base leading-8 text-[#666666]">We are an authorized Texmo dealer in Tiruvarur, offering reliable pump and motor guidance for home, farm and building water needs across Tiruvarur, Thiruthuraipoondi and Mannargudi.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1rem] bg-[#f4f8f6] px-4 py-4 ring-1 ring-[#d7e5df]">
                  <p className="section-kicker">Primary Strength</p>
                  <p className="mt-2 text-sm font-semibold text-[#1A1A1A]">Texmo authority and practical guidance</p>
                </div>
                <div className="rounded-[1rem] bg-[#f4f8f6] px-4 py-4 ring-1 ring-[#d7e5df]">
                  <p className="section-kicker">Best Flow</p>
                  <p className="mt-2 text-sm font-semibold text-[#1A1A1A]">Call or WhatsApp with use case first</p>
                </div>
              </div>
              <EnquiryActions message="Hello, I want to confirm Texmo pump or motor availability." className="mt-8" primaryLabel="Call for Availability" secondaryLabel="WhatsApp Requirement" />
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {pumpBlocks.map((block) => (
              <div key={block.title} className="panel-paper p-6 md:p-8 lg:p-10">
                <p className="section-kicker">Pump Enquiry</p>
                <h2 className="mt-3 font-heading text-3xl font-bold text-[#D6452E]">{block.title}</h2>
                {block.title === 'Pumps & Motors' ? <p className="tamil-text mt-2 text-sm text-[#2F5D50]">{bilingualText.pumpsSupport}</p> : null}
                <p className="mt-4 text-base leading-8 text-[#666666]">{block.intro}</p>
                <ul className="mt-6 space-y-3">
                  {block.offerings.map((item) => (
                    <li key={item} className="rounded-[1rem] bg-[#f9fbfa] px-4 py-4 text-sm leading-7 text-[#666666] ring-1 ring-[#d7e5df]">{item}</li>
                  ))}
                </ul>
                <p className="mt-5 text-sm leading-7 text-[#666666]">{block.useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
          <BrandPrioritySection section={texmoSection} />
          <div className="panel-paper mx-auto max-w-5xl p-6 text-center md:p-8">
            <span className="gold-badge">Stock and Brand Note</span>
            <h2 className="section-title mt-3">Texmo Dealer in Tiruvarur — Stock and Availability Confirmed on Enquiry</h2>
            <p className="section-subtitle mx-auto max-w-3xl">Call or WhatsApp with your pump and motor requirement. We will confirm current stock, model options and the best time to visit.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <span className="trust-chip">{businessFacts.trustTitle}</span>
              <span className="trust-chip">Serving {businessFacts.serviceAreas.join(' · ')}</span>
            </div>
            <EnquiryActions
              message="Hello, I want to confirm Texmo pump or motor availability."
              className="mt-6"
              center
              primaryLabel="Call for Availability"
              secondaryLabel="WhatsApp Requirement"
            />
          </div>
        </div>
      </section>
    </>
  )
}