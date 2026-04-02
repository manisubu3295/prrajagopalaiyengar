import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

const PHONE  = '+918508226548'
const WA_URL = 'https://wa.me/918508226548?text=Hello%2C%20I%20need%20your%20services.'

const timeline = [
  {
    year: '1957',
    title: 'The Beginning',
    desc: 'P.R. Rajagopalaiyengar opens a small electrical shop at No. 185, Old Nagai Salai, Thiruvarur. The founding principle: sell only genuine products. Serve with honesty.',
    icon: '🏪',
  },
  {
    year: '1970s',
    title: 'Plumbing Division Added',
    desc: 'Expanding beyond electrical work, we added full plumbing services to meet growing demand from Thiruvarur households and contractors.',
    icon: '💧',
  },
  {
    year: '1985',
    title: 'Authorized Texmo Dealer',
    desc: 'Became an authorized dealer for Texmo pumps — bringing quality motor pumps and submersible pumps to agricultural and domestic buyers in the region.',
    icon: '🏭',
  },
  {
    year: '2000s',
    title: 'Second Generation Takes Over',
    desc: 'The founder\'s sons join the business, bringing new skills while preserving the core values of trust and genuine service. Operations expand to Nagapattinam district.',
    icon: '👨‍👦',
  },
  {
    year: '2010s',
    title: 'Texmo Aquasub Dealership',
    desc: 'Elevated to Authorized Texmo Aquasub Dealer status — the premium range. Now serving agricultural, domestic and industrial clients across three districts.',
    icon: '⚙️',
  },
  {
    year: '2024',
    title: '67 Years & Going Strong',
    desc: 'Three generations. Over 5,000 projects. A name synonymous with trust in Thiruvarur. Third generation now serving the same families our grandfather served.',
    icon: '🏆',
  },
]

const team = [
  {
    name: 'P.R. Rajagopalaiyengar',
    role: 'Founder (Est. 1957)',
    desc: 'Built this business from nothing on two pillars: genuine products and honest service. His legacy lives in every job we do.',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
  },
  {
    name: 'R. Sundaram',
    role: 'Master Electrician – 35 Years',
    desc: 'Licensed electrical contractor with deep expertise in industrial, commercial and residential wiring systems.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'R. Venkatesh',
    role: 'Pump & Plumbing Specialist',
    desc: 'Expert in Texmo pump installations, borewell setups and complete plumbing work for homes and farms.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
]

const values = [
  { icon: '🔒', title: 'Genuine Products Only', desc: 'We have never sold a first-copy or duplicate product in 67 years. Every item is original with manufacturer warranty.' },
  { icon: '🤝', title: 'Honest Pricing', desc: 'No hidden charges. We give you a clear quote before work starts — and we honour it. What we say is what you pay.' },
  { icon: '⚡', title: 'Speed & Reliability', desc: 'We show up when we say we will. Emergency work handled same day. No excuses, no delays.' },
  { icon: '💡', title: 'Expert Knowledge', desc: 'Three generations of hands-on learning. We don\'t guess — we know. Every solution is technically sound and built to last.' },
]

export default function About() {
  return (
    <>
      <Seo
        title="About Us | P.R. Rajagopalaiyengar & Sons – 67 Years of Trust in Thiruvarur"
        description="Established in 1957, P.R. Rajagopalaiyengar & Sons is Thiruvarur's most trusted electrical, plumbing and Texmo pump dealer with 67 years of genuine service."
        path="/about"
      />

      {/* Page Hero */}
      <section className="relative py-20 md:py-28 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=60')] bg-cover bg-center" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
            Est. 1957 · Thiruvarur
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight">
            67 Years of Trust,<br/>
            <span className="text-amber-400">Three Generations of Service</span>
          </h1>
          <p className="mt-5 text-slate-300 text-lg max-w-2xl mx-auto">
            From a small shop on Old Nagai Salai to the most trusted name in electrical, plumbing and pump services
            across three districts — this is our story.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="gold-badge">Our Story</span>
              <h2 className="section-title mt-3">
                Started with a Dream,<br/>Built on Integrity
              </h2>
              <div className="space-y-4 mt-5 text-slate-600 leading-relaxed">
                <p>
                  In 1957, in the heart of Thiruvarur, P.R. Rajagopalaiyengar opened a modest electrical shop
                  at <strong>No. 185, Old Nagai Salai</strong>. He had one rule that he never broke:
                  <em className="text-navy-900 font-semibold"> sell only what you can stand behind.</em>
                </p>
                <p>
                  No duplicate products. No compromises on quality. When you buy from us, you buy the real thing —
                  backed by manufacturer warranty and our family's 67-year reputation.
                </p>
                <p>
                  Today, we have expanded into plumbing, pump installation and we are the proud
                  <strong className="text-navy-900"> Authorized Texmo Aquasub Dealer </strong>
                  for Thiruvarur district. But nothing has changed at the core — the same honesty,
                  the same commitment, the same faces your parents trusted.
                </p>
                <p className="text-amber-700 font-semibold italic text-base">
                  "நாங்கள் கட்டியது நம்பிக்கை — What we built is trust."
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&q=80"
                alt="Electrical work"
                className="rounded-2xl h-52 w-full object-cover shadow-card"
              />
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80"
                alt="Plumbing work"
                className="rounded-2xl h-52 w-full object-cover shadow-card mt-6"
              />
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80"
                alt="Pump installation"
                className="rounded-2xl h-52 w-full object-cover shadow-card -mt-6"
              />
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&q=80"
                alt="Industrial work"
                className="rounded-2xl h-52 w-full object-cover shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">The principles that have guided us for 67 years — unchanged.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="card p-6 text-center">
                <div className="text-4xl mb-3">{icon}</div>
                <h3 className="font-heading font-bold text-navy-900 text-lg">{title}</h3>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="gold-badge">Our Journey</span>
            <h2 className="section-title mt-3">67 Years at a Glance</h2>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-navy-900 via-brand-blue to-amber-400 hidden md:block" />

            <div className="space-y-8">
              {timeline.map(({ year, title, desc, icon }, i) => (
                <div key={year} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-navy-900 rounded-2xl flex items-center justify-center text-2xl shadow-md group-hover:bg-brand-blue transition-colors z-10">
                    {icon}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="font-heading font-bold text-2xl text-amber-600">{year}</span>
                      <span className="font-bold text-navy-900 text-lg">{title}</span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">The Faces Behind the Work</h2>
            <p className="text-slate-300 mt-3">Experienced. Qualified. Committed to your satisfaction.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map(({ name, role, desc, img }) => (
              <div key={name} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all">
                <img src={img} alt={name} className="w-full h-52 object-cover object-top" />
                <div className="p-5">
                  <h3 className="font-heading font-bold text-white text-lg">{name}</h3>
                  <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider mt-0.5">{role}</p>
                  <p className="text-slate-300 text-sm mt-2">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-brand-orange to-amber-500 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-white">Ready to Work with Us?</h2>
          <p className="text-white/90 mt-3">Join over 5,000 satisfied customers who trust us with their homes and businesses.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a href={`tel:${PHONE}`}
               className="flex items-center gap-2 bg-white text-brand-orange font-bold px-7 py-3 rounded-xl hover:bg-orange-50 transition-colors">
              📞 Call Now
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
