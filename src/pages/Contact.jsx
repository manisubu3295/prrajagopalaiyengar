import { useState } from 'react'
import Seo from '../components/Seo'

const PHONE      = '+918508226548'
const WA_URL     = 'https://wa.me/918508226548?text=Hello%2C%20I%20need%20your%20services.%20Please%20contact%20me.'
const DISPLAY    = '+91 85082 26548'
const EMAIL      = 'prrajagopalaiyengar@gmail.com'
const MAP_EMBED  = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62649.70786862378!2d79.5945!3d10.7726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a556a6a7b818c47%3A0xc3c1f7e432b1f6a1!2sThiruvarur%2C%20Tamil%20Nadu%20610001!5e0!3m2!1sen!2sin!4v1700000000000'

const services = [
  'Electrical Installation',
  'House Wiring / Rewiring',
  'Plumbing Services',
  'Leakage Detection & Repair',
  'Texmo Pump Supply',
  'Pump Installation',
  'Motor Repair / Rewinding',
  'Annual Maintenance Contract',
  'Emergency Service',
  'Other',
]

export default function Contact() {
  const [form, setForm]       = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors]   = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.phone.trim())   e.phone   = 'Phone number is required'
    else if (!/^\d{10}$/.test(form.phone.replace(/[\s+-]/g, ''))) e.phone = 'Enter a valid 10-digit number'
    if (!form.service)        e.service = 'Please select a service'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    // Build WhatsApp message
    const msg = `Hello, I am ${form.name}.%0APhone: ${form.phone}%0AService: ${form.service}%0A${form.message ? 'Message: ' + form.message : ''}`
    window.open(`https://wa.me/918508226548?text=${encodeURIComponent(`Hello, I am ${form.name}.\nPhone: ${form.phone}\nService needed: ${form.service}\n${form.message}`)}`, '_blank')
    setSubmitted(true)
  }

  const Field = ({ id, label, error, children }) => (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-slate-700 mb-1">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-red-500 text-xs">{error}</p>}
    </div>
  )

  return (
    <>
      <Seo
        title="Contact Us | P.R. Rajagopalaiyengar & Sons – Thiruvarur | Electrical & Plumbing"
        description="Contact P.R. Rajagopalaiyengar & Sons. No. 185, Old Nagai Salai, Thiruvarur. Call +91 85082 26548 or WhatsApp for electrical, plumbing and pump services."
        keywords="contact electrician Thiruvarur, plumber contact Nagapattinam, Texmo pump dealer contact, pump dealer near Thiruvarur, electrical contractor contact Tamil Nadu"
        path="/contact"
      />

      {/* Hero */}
      <section className="relative py-20 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=60')] bg-cover" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <span className="gold-badge border border-amber-400/30">Get In Touch</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mt-4">
            Contact Us
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            We're ready to help. Call, WhatsApp or fill the form below.
            <br/>We respond fast — usually within 1 hour.
          </p>
        </div>
      </section>

      {/* Quick Contact Buttons */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a href={`tel:${PHONE}`}
               className="flex items-center gap-4 p-5 bg-orange-50 border-2 border-brand-orange rounded-2xl hover:bg-orange-100 transition-colors group">
              <div className="w-12 h-12 bg-brand-orange rounded-xl flex items-center justify-center text-white text-xl shrink-0">
                📞
              </div>
              <div>
                <p className="font-bold text-navy-900 text-sm">Call Us Directly</p>
                <p className="text-brand-orange font-semibold text-base">{DISPLAY}</p>
              </div>
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-4 p-5 bg-green-50 border-2 border-brand-whatsapp rounded-2xl hover:bg-green-100 transition-colors">
              <div className="w-12 h-12 bg-brand-whatsapp rounded-xl flex items-center justify-center text-white text-xl shrink-0">
                💬
              </div>
              <div>
                <p className="font-bold text-navy-900 text-sm">WhatsApp Us</p>
                <p className="text-green-700 font-semibold text-base">Chat Instantly</p>
              </div>
            </a>
            <a href={`mailto:${EMAIL}`}
               className="flex items-center gap-4 p-5 bg-blue-50 border-2 border-brand-blue rounded-2xl hover:bg-blue-100 transition-colors">
              <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center text-white text-xl shrink-0">
                ✉️
              </div>
              <div>
                <p className="font-bold text-navy-900 text-sm">Email Us</p>
                <p className="text-brand-blue font-semibold text-sm break-all">{EMAIL}</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Form */}
            <div className="bg-white rounded-3xl shadow-card p-8">
              <h2 className="font-heading text-2xl font-bold text-navy-900 mb-1">
                Send Us an Enquiry
              </h2>
              <p className="text-slate-500 text-sm mb-6">We'll call you back within 1 hour.</p>

              {submitted ? (
                <div className="text-center py-12">
                  <p className="text-5xl mb-4">✅</p>
                  <h3 className="font-heading font-bold text-xl text-navy-900">Thank you!</h3>
                  <p className="text-slate-600 mt-2">Your enquiry was sent on WhatsApp. We'll call you back shortly.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', service: '', message: '' }) }}
                    className="mt-4 text-brand-blue font-semibold text-sm hover:underline"
                  >
                    Send another enquiry →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field id="name" label="Your Name *" error={errors.name}>
                      <input
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      />
                    </Field>
                    <Field id="phone" label="Phone Number *" error={errors.phone}>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                        placeholder="e.g. 85082 26548"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      />
                    </Field>
                  </div>

                  <Field id="email" label="Email (Optional)">
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                      placeholder="your@email.com"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    />
                  </Field>

                  <Field id="service" label="Service Required *" error={errors.service}>
                    <select
                      id="service"
                      value={form.service}
                      onChange={e => setForm(p => ({ ...p, service: e.target.value }))}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white"
                    >
                      <option value="">-- Select a Service --</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </Field>

                  <Field id="message" label="Additional Details">
                    <textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      placeholder="Describe your requirement (location, size of work, urgency, etc.)"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-none"
                    />
                  </Field>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-brand-whatsapp text-white font-bold py-4 rounded-xl text-base hover:bg-green-600 transition-colors shadow-md"
                  >
                    💬 Send Enquiry via WhatsApp
                  </button>

                  <p className="text-xs text-slate-400 text-center">
                    By submitting, your enquiry will open WhatsApp. We'll respond within 1 hour during business hours.
                  </p>
                </form>
              )}
            </div>

            {/* Info column */}
            <div className="space-y-6">
              {/* Address card */}
              <div className="bg-white rounded-3xl shadow-card p-6">
                <h3 className="font-heading font-bold text-xl text-navy-900 mb-4">Our Location</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="font-bold text-navy-900">P.R. Rajagopalaiyengar & Sons</p>
                      <p className="text-slate-600 text-sm">No. 185, Old Nagai Salai,</p>
                      <p className="text-slate-600 text-sm">Thiruvarur – 610 001</p>
                      <p className="text-slate-600 text-sm">Tamil Nadu, India</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <span className="text-2xl">📞</span>
                    <a href={`tel:${PHONE}`} className="text-brand-orange font-bold hover:text-orange-700">{DISPLAY}</a>
                  </div>
                  <div className="flex gap-3 items-center">
                    <span className="text-2xl">🕐</span>
                    <div className="text-sm text-slate-600">
                      <p>Mon – Sat: 8:00 AM – 8:00 PM</p>
                      <p>Sunday: 9:00 AM – 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service areas */}
              <div className="bg-white rounded-3xl shadow-card p-6">
                <h3 className="font-heading font-bold text-xl text-navy-900 mb-3">We Serve These Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {['Thiruvarur', 'Nagapattinam', 'Thiruturaipoondi', 'Mannargudi', 'Papanasam', 'Vedaranyam', 'Sirkali', 'Kumbakonam', 'Mayiladuthurai', 'Pattukkottai', 'Karaikal'].map(a => (
                    <span key={a} className="bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1.5 rounded-full">
                      {a}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-3">* We travel to your location. Free site visit for large projects.</p>
              </div>

              {/* Emergency card */}
              <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-6">
                <h3 className="font-bold text-red-800 text-lg flex items-center gap-2">
                  🚨 Emergency Service
                </h3>
                <p className="text-red-700 text-sm mt-2">
                  Electrical breakdown? Burst pipe? Pump failure?
                  Call us immediately — we offer priority emergency response.
                </p>
                <a href={`tel:${PHONE}`}
                   className="mt-4 w-full flex items-center justify-center gap-2 bg-red-600 text-white font-bold py-3 rounded-xl hover:bg-red-700 transition-colors">
                  📞 Emergency: {DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="font-heading text-2xl font-bold text-navy-900 mb-6 text-center">
            📍 Find Us on the Map
          </h2>
          <div className="rounded-3xl overflow-hidden shadow-card border border-slate-100">
            <iframe
              src={MAP_EMBED}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="P.R. Rajagopalaiyengar & Sons Location — Thiruvarur"
            />
          </div>
          <p className="text-center text-sm text-slate-500 mt-3">
            No. 185, Old Nagai Salai, Thiruvarur – 610 001 · Near Thiruvarur Bus Stand
          </p>
        </div>
      </section>
    </>
  )
}
