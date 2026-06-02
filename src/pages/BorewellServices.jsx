import Seo from '../components/Seo'
import EnquiryActions from '../components/EnquiryActions'
import borewellServicesImage from '../assets/borewell-services.jpg'

const borewellPoints = [
  'Borewell enquiries for new work and existing support are handled here — call or WhatsApp with your location and requirement first.',
  'We serve Tiruvarur, Thiruthuraipoondi and Nagapattinam for borewell-related needs.',
  'Along with borewell work, we can guide you on matching pumps, motors, pipes and cables from our dealer counter.',
  'Call for a quick discussion, or send a structured WhatsApp message — a ready-to-use format is provided below.',
]

const enquiryPromptItems = [
  {
    title: 'Location',
    detail: 'Share the area or village where the work is needed.',
  },
  {
    title: 'Type of Requirement',
    detail: 'Say whether it is a new borewell need, service support, or related product enquiry.',
  },
  {
    title: 'Material Support',
    detail: 'Mention if pump, motor, pipe, cable or other matching materials are also needed.',
  },
  {
    title: 'Call-back Timing',
    detail: 'Tell the shop when it is best to call you back.',
  },
]

const borewellWhatsAppTemplate = `Hello, I want to discuss a borewell requirement.

Location:
Type of requirement:
Need material support also?:
Preferred call-back timing:`

export default function BorewellServices() {
  return (
    <>
      <Seo
        title="Borewell Services in Tiruvarur | Call or WhatsApp for Enquiry"
        description="Borewell services in Tiruvarur — enquire by call or WhatsApp for new borewell work, existing support and related pump and pipe needs. Serving Tiruvarur, Thiruthuraipoondi and Nagapattinam."
        path="/borewell-services"
        breadcrumbs={[{ name: 'Borewell Services', path: '/borewell-services' }]}
      />

      <section className="bg-[#f4f8f6] py-16 md:py-24">
        <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
            <div className="service-photo-card h-[240px] sm:h-[280px] md:h-[360px] lg:h-auto lg:min-h-[380px]">
              <img src={borewellServicesImage} alt="Borewell services in Tiruvarur showing drilling and water support" decoding="async" fetchpriority="high" className="service-photo-image" />
            </div>
            <div className="panel-paper p-6 md:p-8 lg:p-10">
              <span className="gold-badge">Borewell Support</span>
              <h1 className="mt-4 font-heading text-3xl font-bold text-[#D6452E] md:text-4xl">Borewell Services in Tiruvarur — Enquire by Call or WhatsApp</h1>
              <p className="mt-4 text-base leading-8 text-[#666666]">We handle borewell enquiries for new work, existing borewell support and related material needs across Tiruvarur, Thiruthuraipoondi and Nagapattinam. Tell us your location and requirement — we will guide you from there.</p>
              <EnquiryActions message={borewellWhatsAppTemplate} className="mt-8" primaryLabel="Call Now" secondaryLabel="WhatsApp Borewell Enquiry" />
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="panel-paper p-6 md:p-8 lg:p-10">
              <p className="section-kicker">What To Communicate</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-[#D6452E]">About Our Borewell Service in Tiruvarur</h2>
              <ul className="mt-6 space-y-3">
                {borewellPoints.map((item) => (
                  <li key={item} className="rounded-[1rem] bg-[#f9fbfa] px-4 py-4 text-sm leading-7 text-[#666666] ring-1 ring-[#d7e5df]">{item}</li>
                ))}
              </ul>
            </div>

            <div className="storefront-frame rounded-[1.5rem] bg-[#2F5D50] p-6 text-white shadow-sm md:p-8">
              <p className="section-kicker text-[#dbe8e3]">How To Enquire</p>
              <h2 className="mt-3 font-heading text-3xl font-bold">Send a Structured Borewell Enquiry Without Filling a Form</h2>
              <p className="mt-4 text-base leading-8 text-[#dbe8e3]">Use call if you want to explain the problem quickly. Use WhatsApp if you want to send the basic requirement in a clear format first.</p>
              <div className="mt-6 grid gap-3 text-left sm:grid-cols-2">
                {enquiryPromptItems.map((item) => (
                  <div key={item.title} className="rounded-[1rem] bg-white/10 px-4 py-4 ring-1 ring-white/12">
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-7 text-[#dbe8e3]">{item.detail}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-[1rem] bg-white/10 p-4 text-left ring-1 ring-white/12">
                <p className="text-sm font-semibold text-white">Suggested WhatsApp format</p>
                <pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-7 text-[#dbe8e3]">{borewellWhatsAppTemplate}</pre>
              </div>
              <EnquiryActions
                message={borewellWhatsAppTemplate}
                className="mt-6"
                primaryLabel="Call Now"
                secondaryLabel="Send WhatsApp Format"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}