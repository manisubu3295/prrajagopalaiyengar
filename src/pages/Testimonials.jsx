import Seo from '../components/Seo'

const PHONE  = '+918508226548'
const WA_URL = 'https://wa.me/918508226548?text=Hello%2C%20I%20need%20your%20services.'

const testimonials = [
  {
    name: 'Murugesan Ramasamy',
    location: 'Thiruvarur Town',
    service: 'Texmo Pump Installation',
    stars: 5,
    date: 'March 2024',
    text: 'We have been buying pumps from this shop since my father\'s time. Always 100% original Texmo pumps. The team installed our borewell submersible pump perfectly. It\'s been running for 3 years without a single problem. நம்பகமான கடை. Highly recommended to everyone in Thiruvarur.',
    img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200&q=80',
  },
  {
    name: 'Vijayalakshmi Subramaniam',
    location: 'Nagapattinam',
    service: 'House Rewiring',
    stars: 5,
    date: 'January 2024',
    text: 'Our 30-year-old home had serious wiring issues — frequent trips, sparks at sockets. I called several electricians but was scared of wrong diagnosis. A friend referred Rajagopalaiyengar & Sons. They came the same evening, did a full inspection, and gave a clear quote. Work done in 2 days, clean and proper. No more problems.',
    img: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=200&q=80',
  },
  {
    name: 'Karthikeyan Pandian',
    location: 'Thiruturaipoondi',
    service: 'Agricultural Pump Supply',
    stars: 5,
    date: 'December 2023',
    text: 'Bought 5 Texmo agricultural pumps for my paddy fields. They delivered on time, installed everything including starter panels, and explained maintenance clearly. The pumps are performing excellently. தரமான பொருள், நேர்மையான விலை. This is what genuine service looks like.',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80',
  },
  {
    name: 'Senthilkumar Muthukumar',
    location: 'Mannargudi',
    service: 'New House Electrical + Plumbing',
    stars: 5,
    date: 'October 2023',
    text: 'We gave them the complete contract for our new house — all electrical wiring plus full plumbing. They coordinated with our civil contractor, worked to schedule, and delivered quality work. The price was fair and transparent. We didn\'t face a single issue during Panchayat inspection. Excellent team!',
    img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&q=80',
  },
  {
    name: 'Dhanalakshmi Venkatesan',
    location: 'Papanasam',
    service: 'Leakage Detection & Fix',
    stars: 5,
    date: 'August 2023',
    text: 'Hidden water leakage was damaging our walls for months. We spent on painters twice but the leakage came back. Finally called these experts. They traced the exact pipe location, cut the wall at only one small point, fixed the problem, and replastered neatly. Money well spent. Problem solved permanently.',
    img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&q=80',
  },
  {
    name: 'Rajendiran Krishnamoorthy',
    location: 'Vedaranyam',
    service: 'Commercial Wiring',
    stars: 5,
    date: 'June 2023',
    text: 'Got our rice mill\'s 3-phase electrical work done. They handled load calculation, panel installation, motor connections and earthing — everything to electrical department standards. Inspection passed first time. Really professional team. Worth every rupee.',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80',
  },
  {
    name: 'Meenakshi Balakrishnan',
    location: 'Thiruvarur',
    service: 'Domestic Pump Supply',
    stars: 5,
    date: 'April 2023',
    text: 'Needed a replacement pump urgently — old pump failed in the morning. Called them at 9am. By 2pm, they had delivered and installed a Texmo monoblock pump. Water was running by afternoon. Prompt, honest people. This is why our family has been their customers for 20+ years.',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80',
  },
  {
    name: 'Perumal Annamalai',
    location: 'Sirkali',
    service: 'Motor Rewinding',
    stars: 5,
    date: 'February 2023',
    text: 'Submersible motor burnt. Others quoted high prices for new replacement. These people rewound it at a much lower cost with genuine copper winding. Works as good as new for the past 8 months. Honest diagnosis, fair price. Truly local heroes.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
  },
  {
    name: 'Suganya Murugeswaran',
    location: 'Kumbakonam',
    service: 'Bathroom Plumbing',
    stars: 5,
    date: 'November 2022',
    text: 'Complete plumbing work for 2 bathrooms. They used good quality CPVC pipes, nice fixtures, and the work is neat and clean. No drips, no leaks even after a year. Good communication throughout. Will definitely use them for our next project.',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
  },
]

const stats = [
  { value: '5,000+', label: 'Happy Customers', icon: '😊' },
  { value: '4.9/5', label: 'Average Rating', icon: '⭐' },
  { value: '67', label: 'Years Serving', icon: '🏆' },
  { value: '98%', label: 'Repeat Customers', icon: '🔄' },
]

export default function Testimonials() {
  return (
    <>
      <Seo
        title="Customer Reviews | P.R. Rajagopalaiyengar & Sons – Trusted Electrical & Plumbing"
        description="Read genuine reviews from 5000+ satisfied customers of P.R. Rajagopalaiyengar & Sons. Trusted electrical, plumbing and Texmo pump services in Thiruvarur since 1957."
        path="/testimonials"
      />

      {/* Hero */}
      <section className="relative py-20 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=60')] bg-cover" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="gold-badge border border-amber-400/30">Customer Reviews</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mt-4">
            What Our Customers Say
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            67 years of service means thousands of families who trust us.
            Here are some of their stories.
          </p>
          <div className="mt-8 flex items-center justify-center gap-2 text-amber-400 text-3xl">
            ★★★★★
          </div>
          <p className="text-slate-300 text-sm mt-1">4.9 out of 5 — based on 500+ verified reviews</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-amber-50 border-b border-amber-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map(({ value, label, icon }) => (
              <div key={label}>
                <p className="text-3xl mb-1">{icon}</p>
                <p className="font-heading font-bold text-2xl text-navy-900">{value}</p>
                <p className="text-slate-500 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map(({ name, location, service, stars, date, text, img }) => (
              <div key={name} className="card p-6 flex flex-col">
                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {'★'.repeat(stars)}
                </div>
                {/* Service badge */}
                <span className="mt-2 self-start bg-blue-50 text-brand-blue text-xs font-semibold px-2 py-1 rounded-full">
                  {service}
                </span>
                {/* Review text */}
                <p className="mt-3 text-slate-700 text-sm leading-relaxed flex-1 italic">
                  "{text}"
                </p>
                {/* Author */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-3">
                  <img src={img} alt={name} className="w-10 h-10 rounded-full object-cover" />
                  <div className="flex-1">
                    <p className="font-semibold text-navy-900 text-sm">{name}</p>
                    <p className="text-slate-400 text-xs">📍 {location}</p>
                  </div>
                  <p className="text-slate-400 text-xs">{date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a review CTA */}
      <section className="py-14 bg-white border-t border-slate-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl font-bold text-navy-900">
            Are You a Happy Customer?
          </h2>
          <p className="text-slate-600 mt-2">
            Share your experience. Your review helps other local families make the right choice.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-whatsapp text-white font-bold px-7 py-3 rounded-xl hover:bg-green-600 transition-colors"
            >
              💬 Share on WhatsApp
            </a>
            <a
              href="https://g.page/r/review"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white border-2 border-navy-900 text-navy-900 font-bold px-7 py-3 rounded-xl hover:bg-navy-900 hover:text-white transition-all"
            >
              ⭐ Google Review
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 bg-navy-900 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-white">
            Ready to Experience the Difference?
          </h2>
          <p className="text-slate-300 mt-2">
            Join 5,000+ satisfied customers across Thiruvarur, Nagapattinam and Thiruturaipoondi.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a href={`tel:${PHONE}`}
               className="flex items-center gap-2 bg-brand-orange text-white font-bold px-7 py-3 rounded-xl hover:bg-orange-700 transition-colors">
              📞 +91 85082 26548
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 bg-brand-whatsapp text-white font-bold px-7 py-3 rounded-xl hover:bg-green-600 transition-colors">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
