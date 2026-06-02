import { useState } from 'react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import { buildWhatsAppLink, businessFacts, contactInfo } from '../content/siteContent'

const enquiryTypes = [
  'Electrical products',
  'Plumbing materials',
  'Pumps & motors',
  'Borewell services',
  'Walk-in product check',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', enquiryType: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const nextErrors = {}

    if (!form.name.trim()) nextErrors.name = 'Name is required'
    if (!form.phone.trim()) nextErrors.phone = 'Phone number is required'
    else if (!/^\d{10}$/.test(form.phone.replace(/[^\d]/g, ''))) nextErrors.phone = 'Enter a valid 10-digit number'
    if (!form.enquiryType) nextErrors.enquiryType = 'Please select an enquiry type'

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      return
    }

    window.open(
      buildWhatsAppLink(`Hello, I am ${form.name}.\nPhone: ${form.phone}\nEnquiry type: ${form.enquiryType}\nMessage: ${form.message || 'No additional details.'}`),
      '_blank',
    )
    setSubmitted(true)
  }

  const Field = ({ id, label, error, children }) => (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-[#1A1A1A]">{label}</label>
      {children}
      {error ? <p className="mt-1 text-xs text-red-500">{error}</p> : null}
    </div>
  )

  return (
    <>
      <Seo
        title="Contact | Authorized Texmo Dealer in Tiruvarur — Call or WhatsApp"
        description="Call, WhatsApp or visit P.R. Rajagopalaiyengar & Sons — authorized Texmo dealer in Tiruvarur. Serving Tiruvarur, Thiruthuraipoondi and Nagapattinam for electrical, plumbing, pumps and borewell enquiries."
        path="/contact"
        breadcrumbs={[{ name: 'Contact', path: '/contact' }]}
      />

      <PageHero
        eyebrow="Contact"
        title="Call or WhatsApp the Authorized Texmo Dealer for a Quick Enquiry"
        description="Call, WhatsApp or visit us at No. 185, Old Nagai Salai, Tiruvarur. We help customers from Tiruvarur, Thiruthuraipoondi and Nagapattinam with product availability, stock checks and borewell enquiries."
        message="Hello, I need help with a product or service enquiry."
        primaryLabel="Call the Shop"
        secondaryLabel="WhatsApp Us"
      />

      <section className="bg-white py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a href={`tel:${contactInfo.phone}`} className="shop-grid-card flex min-h-[112px] items-center gap-4 rounded-[1.4rem] border border-[#e6c6bf] bg-[#fff7f4] p-5 shadow-[0_12px_28px_rgba(26,26,26,0.04)] transition-all hover:-translate-y-0.5 hover:bg-[#fbe9e4]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#D6452E] text-xl text-white">📞</div>
              <div>
                <p className="text-sm font-bold text-[#1A1A1A]">Call the Shop</p>
                <p className="text-base font-semibold text-[#D6452E]">{contactInfo.displayPhone}</p>
                <p className="mt-0.5 text-xs text-[#888]">Call only</p>
              </div>
            </a>

            <a href={`tel:${contactInfo.phone2}`} className="shop-grid-card flex min-h-[112px] items-center gap-4 rounded-[1.4rem] border border-[#e6c6bf] bg-[#fff7f4] p-5 shadow-[0_12px_28px_rgba(26,26,26,0.04)] transition-all hover:-translate-y-0.5 hover:bg-[#fbe9e4]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#D6452E] text-xl text-white">📞</div>
              <div>
                <p className="text-sm font-bold text-[#1A1A1A]">Call the Shop</p>
                <p className="text-base font-semibold text-[#D6452E]">{contactInfo.displayPhone2}</p>
                <p className="mt-0.5 text-xs text-[#2F5D50] font-semibold">Also on WhatsApp</p>
              </div>
            </a>

            <a href={`tel:${contactInfo.phone3}`} className="shop-grid-card flex min-h-[112px] items-center gap-4 rounded-[1.4rem] border border-[#e6c6bf] bg-[#fff7f4] p-5 shadow-[0_12px_28px_rgba(26,26,26,0.04)] transition-all hover:-translate-y-0.5 hover:bg-[#fbe9e4]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#D6452E] text-xl text-white">📞</div>
              <div>
                <p className="text-sm font-bold text-[#1A1A1A]">Call {contactInfo.whatsappName}</p>
                <p className="text-base font-semibold text-[#D6452E]">{contactInfo.displayPhone3}</p>
                <p className="mt-0.5 text-xs text-[#2F5D50] font-semibold">Also on WhatsApp</p>
              </div>
            </a>

            <a href={buildWhatsAppLink('Hello, I need help with a product or service enquiry.')} target="_blank" rel="noopener noreferrer" className="shop-grid-card flex min-h-[112px] items-center gap-4 rounded-[1.4rem] border border-[#d7e5df] bg-[#f4f8f6] p-5 shadow-[0_12px_28px_rgba(26,26,26,0.04)] transition-all hover:-translate-y-0.5 hover:bg-[#eaf2ef]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#2F5D50] text-xl text-white">💬</div>
              <div>
                <p className="text-sm font-bold text-[#1A1A1A]">WhatsApp {contactInfo.whatsappName}</p>
                <p className="text-base font-semibold text-[#2F5D50]">{contactInfo.displayPhone3}</p>
                <p className="mt-0.5 text-xs text-[#888]">Chat instantly</p>
              </div>
            </a>

            <div className="shop-grid-card flex min-h-[112px] items-center gap-4 rounded-[1.4rem] border border-[#d7e5df] bg-white p-5 shadow-[0_12px_28px_rgba(26,26,26,0.04)]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#2F5D50] text-xl text-white">📍</div>
              <div>
                <p className="text-sm font-bold text-[#1A1A1A]">Visit the Shop</p>
                <p className="text-sm font-semibold text-[#2F5D50]">{contactInfo.addressLines[0]}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f8f6] py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
          <div className="panel-paper p-6 md:p-8 lg:p-10">
            <p className="section-kicker">WhatsApp Form</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-[#D6452E] md:text-4xl">Send an Enquiry on WhatsApp</h2>
            <p className="mt-3 text-sm leading-7 text-[#666666]">The form opens WhatsApp so the message goes straight to the business.</p>

            {submitted ? (
              <div className="py-12 text-center">
                <p className="mb-4 text-5xl">✅</p>
                <h3 className="font-heading text-xl font-bold text-[#D6452E]">Thank you</h3>
                <p className="mt-2 text-[#666666]">Your enquiry was sent on WhatsApp.</p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setForm({ name: '', phone: '', enquiryType: '', message: '' })
                  }}
                  className="mt-4 text-sm font-semibold text-[#2F5D50] hover:underline"
                >
                  Send another enquiry →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Your Name *" error={errors.name}>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                      placeholder="e.g. Rajesh"
                      className="w-full rounded-xl border border-[#d7e5df] px-4 py-3.5 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#2F5D50]"
                    />
                  </Field>

                  <Field id="phone" label="Phone Number *" error={errors.phone}>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
                      placeholder="e.g. 85082 26548"
                      className="w-full rounded-xl border border-[#d7e5df] px-4 py-3.5 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#2F5D50]"
                    />
                  </Field>
                </div>

                <Field id="enquiryType" label="Enquiry Type *" error={errors.enquiryType}>
                  <select
                    id="enquiryType"
                    value={form.enquiryType}
                    onChange={(event) => setForm((current) => ({ ...current, enquiryType: event.target.value }))}
                    className="w-full rounded-xl border border-[#d7e5df] bg-white px-4 py-3.5 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#2F5D50]"
                  >
                    <option value="">-- Select an Enquiry Type --</option>
                    {enquiryTypes.map((item) => <option key={item} value={item}>{item}</option>)}
                  </select>
                </Field>

                <Field id="message" label="Additional Details">
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                    placeholder="Describe your requirement in simple words"
                    className="w-full resize-none rounded-xl border border-[#d7e5df] px-4 py-3.5 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#2F5D50]"
                  />
                </Field>

                <button type="submit" className="flex min-h-[56px] w-full items-center justify-center gap-2 rounded-xl bg-[#D6452E] py-4 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#b63a27]">
                  💬 Send Enquiry via WhatsApp
                </button>

                <p className="text-center text-xs text-[#666666]">By submitting, your enquiry will open WhatsApp.</p>
              </form>
            )}
          </div>

          <div className="grid gap-6">
            <div className="rounded-[1.5rem] bg-[#2F5D50] p-6 text-white shadow-sm md:p-8">
              <p className="section-kicker text-[#dbe8e3]">Quick Actions</p>
              <h3 className="mt-3 font-heading text-3xl font-bold text-white">Call, WhatsApp or Visit With More Confidence</h3>
              <p className="mt-3 text-sm leading-7 text-[#dbe8e3]">Use call for direct discussion, WhatsApp if you already have a product list, and map support when you are ready to visit.</p>
              <div className="mt-6 flex flex-col gap-3">
                <a href={`tel:${contactInfo.phone}`} className="inline-flex min-h-[56px] items-center justify-center rounded-xl bg-[#D6452E] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#b63a27]">Call the Shop</a>
                <a href={buildWhatsAppLink('Hello, I need help with a product or service enquiry.')} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[56px] items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold text-[#2F5D50] transition-colors hover:bg-[#edf4f1]">Open WhatsApp</a>
              </div>
            </div>

            <div className="panel-paper p-6 md:p-8">
              <p className="section-kicker">Location</p>
              <h3 className="mb-4 mt-3 font-heading text-2xl font-bold text-[#D6452E]">Our Location</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    {contactInfo.addressLines.map((line) => (
                      <p key={line} className="text-sm text-[#666666]">{line}</p>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  <a href={`tel:${contactInfo.phone}`} className="font-bold text-[#D6452E] hover:text-[#b63a27]">{contactInfo.displayPhone}</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🕐</span>
                  <div className="text-sm text-[#666666]">
                    <p>{contactInfo.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="panel-paper p-6 md:p-8">
              <p className="section-kicker">Areas</p>
              <h3 className="mb-3 mt-3 font-heading text-2xl font-bold text-[#D6452E]">We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {businessFacts.serviceAreas.map((area) => (
                  <span key={area} className="rounded-full bg-[#f4f8f6] px-3 py-1.5 text-xs font-medium text-[#2F5D50] ring-1 ring-[#d7e5df]">{area}</span>
                ))}
              </div>
              <p className="mt-3 text-xs text-[#666666]">Call or WhatsApp before visiting if you want to check Texmo availability, stock or explain your requirement.</p>
            </div>

            <div className="notice-stripe rounded-[1.5rem] border border-[#d7e5df] p-6 md:p-8">
              <h3 className="flex items-center gap-2 text-lg font-bold text-[#2F5D50]">💬 Quick Contact Tip</h3>
              <p className="mt-2 text-sm text-[#666666]">WhatsApp works best if you already have a list. Call works best if you want to explain the requirement quickly.</p>
              <a
                href={buildWhatsAppLink('Hello, I need help with a product or service enquiry.')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex min-h-[56px] w-full items-center justify-center gap-2 rounded-xl bg-[#2F5D50] py-3 font-bold text-white transition-colors hover:bg-[#24493f]"
              >
                💬 Open WhatsApp
              </a>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-[#d7e5df] shadow-[0_16px_34px_rgba(26,26,26,0.06)]">
              <iframe
                src={contactInfo.mapEmbed}
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Business Location - Thiruvarur"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}