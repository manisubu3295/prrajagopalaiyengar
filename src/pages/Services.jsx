import Seo from '../components/Seo'

const PHONE  = '+918508226548'
const WA_URL = 'https://wa.me/918508226548?text=Hello%2C%20I%20am%20interested%20in%20your%20services.'

const services = [
  {
    id: 'electrical-installation',
    icon: '⚡',
    category: 'Electrical',
    title: 'Electrical Installation',
    tamil: 'மின் நிறுவல் பணிகள்',
    desc: 'Complete new electrical installation for homes, apartments, commercial buildings and industrial units. From load calculation to final testing — we do it all as per IE rules and local standards.',
    benefits: [
      'Complete house wiring for new constructions',
      'Commercial and office electrical setups',
      'Industrial single-phase and three-phase installations',
      'Distribution board and ELCB installation',
      'Street light and outdoor lighting work',
      'Government-approved electrical connection assistance',
    ],
    img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80',
    color: 'amber',
  },
  {
    id: 'wiring-repair',
    icon: '🔌',
    category: 'Electrical',
    title: 'House Wiring & Repair',
    tamil: 'வீட்டு வயரிங் & பழுது',
    desc: 'Old wiring causing problems? Short circuits? Frequent trips? Our licensed electricians diagnose and fix all electrical issues safely and permanently — no temporary patchwork.',
    benefits: [
      'Complete rewiring of old homes',
      'Short circuit detection and fixing',
      'Switchboard replacement and upgrades',
      'Fan and light point installation',
      'Power socket and plug work',
      'Earthing and grounding work',
    ],
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    color: 'blue',
  },
  {
    id: 'plumbing-installation',
    icon: '💧',
    category: 'Plumbing',
    title: 'Plumbing Installation',
    tamil: 'குழாய் நிறுவல்',
    desc: 'New plumbing setup for homes, buildings and apartments. We use only ISI certified pipes, fittings and fixtures. Proper slope planning and long-lasting leak-free installations.',
    benefits: [
      'New pipe layout and installation',
      'Water tank installation (overhead & sump)',
      'Bathroom and kitchen plumbing',
      'Bathroom sanitary fitting work',
      'Water meter connection',
      'Drainage and sewage pipe work',
    ],
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
    color: 'cyan',
  },
  {
    id: 'leakage-fixing',
    icon: '🚿',
    category: 'Plumbing',
    title: 'Leakage Detection & Fixing',
    tamil: 'கசிவு கண்டறிதல் & சரிசெய்தல்',
    desc: 'Water leakage wastes money and damages your walls. Our experienced team detects leaks quickly — even hidden underground pipes — and fixes them permanently.',
    benefits: [
      'Underground pipe leak detection',
      'Wall and roof seepage fixing',
      'Bathroom waterproofing',
      'Overhead tank leak repair',
      'Joint and fitting leak fixing',
      'Emergency 24-hour leak response',
    ],
    img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
    color: 'teal',
  },
  {
    id: 'pump-installation',
    icon: '⚙️',
    category: 'Pump & Motor',
    title: 'Pump Installation & Supply',
    tamil: 'பம்ப் நிறுவல் & விற்பனை',
    desc: 'As the Authorized Texmo Aquasub Dealer for Thiruvarur, we supply and install genuine pumps with factory warranty. Expert installation ensures maximum performance and long life.',
    benefits: [
      'Texmo domestic pump supply and installation',
      'Submersible pump for borewells',
      'Agricultural pump sets for farms',
      'Proper starter and control panel wiring',
      'Delivery pipe and valve fittings',
      'Post-installation testing and handover',
    ],
    img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
    color: 'indigo',
  },
  {
    id: 'maintenance',
    icon: '🔧',
    category: 'Maintenance',
    title: 'AMC & Maintenance Services',
    tamil: 'ஆண்டு பராமரிப்பு சேவை',
    desc: 'Prevent breakdowns before they happen with our Annual Maintenance Contract (AMC). We also offer emergency repair services for all electrical, plumbing and pump systems.',
    benefits: [
      'Annual Maintenance Contract (AMC) plans',
      'Scheduled preventive maintenance visits',
      'Emergency breakdown response',
      'Motor rewinding and repair',
      'Pump performance testing',
      'Electrical system health audit',
    ],
    img: 'https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=600&q=80',
    color: 'orange',
  },
]

const colorMap = {
  amber:  { badge: 'bg-amber-100 text-amber-800',  icon: 'bg-amber-50',  border: 'border-amber-200' },
  blue:   { badge: 'bg-blue-100 text-blue-800',    icon: 'bg-blue-50',   border: 'border-blue-200' },
  cyan:   { badge: 'bg-cyan-100 text-cyan-800',    icon: 'bg-cyan-50',   border: 'border-cyan-200' },
  teal:   { badge: 'bg-teal-100 text-teal-800',    icon: 'bg-teal-50',   border: 'border-teal-200' },
  indigo: { badge: 'bg-indigo-100 text-indigo-800',icon: 'bg-indigo-50', border: 'border-indigo-200' },
  orange: { badge: 'bg-orange-100 text-orange-800',icon: 'bg-orange-50', border: 'border-orange-200' },
}

export default function Services() {
  return (
    <>
      <Seo
        title="Services | Electrical, Plumbing & Pump Installation – Thiruvarur | P.R. Rajagopalaiyengar"
        description="Expert electrical installation, wiring, plumbing, leakage fixing, Texmo pump installation and AMC services in Thiruvarur, Nagapattinam. Licensed & trusted since 1957."
        keywords="electrical services Thiruvarur, plumbing services Nagapattinam, pump installation Thiruvarur, house wiring Thiruvarur, borewell pump installation, AMC services Tamil Nadu"
        path="/services"
      />

      {/* Hero */}
      <section className="relative py-20 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=60')] bg-cover" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="gold-badge border border-amber-400/30">Our Services</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
            Professional Installation &<br/>
            <span className="text-amber-400">Repair Services</span>
          </h1>
          <p className="mt-4 text-slate-300 text-lg max-w-2xl mx-auto">
            We sell genuine branded materials — and we also install them.
            Buy from us and get expert installation by our licensed team.
          </p>
        </div>
      </section>

      {/* Category nav */}
      <div className="bg-white border-b border-slate-100 sticky top-16 md:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <div className="flex gap-2 py-3 min-w-max">
            {['All', 'Electrical', 'Plumbing', 'Pump & Motor', 'Maintenance'].map(cat => (
              <a
                key={cat}
                href={`#${cat.toLowerCase().replace(/ & /g, '-')}`}
                className="px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:bg-navy-900 hover:text-white transition-all whitespace-nowrap border border-slate-200"
              >
                {cat}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map(({ id, icon, category, title, tamil, desc, benefits, img, color }, i) => {
            const c = colorMap[color]
            const isEven = i % 2 === 0
            return (
              <div key={id} id={id} className="scroll-mt-32">
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                  {/* Image */}
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className="relative rounded-3xl overflow-hidden shadow-premium">
                      <img src={img} alt={title} className="w-full h-72 md:h-96 object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className={`${c.badge} px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide`}>
                          {category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                    <div className={`${c.icon} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4 ${c.border} border`}>
                      {icon}
                    </div>
                    <h2 className="section-title">{title}</h2>
                    <p className="text-slate-400 text-sm font-medium mt-1">{tamil}</p>
                    <p className="text-slate-600 mt-3 leading-relaxed">{desc}</p>

                    <ul className="mt-5 space-y-2">
                      {benefits.map(b => (
                        <li key={b} className="flex items-start gap-2 text-slate-700 text-sm">
                          <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={`tel:${PHONE}`}
                        className="flex items-center gap-2 bg-brand-orange text-white font-bold px-5 py-3 rounded-xl hover:bg-orange-700 transition-all text-sm"
                      >
                        📞 Call for This Service
                      </a>
                      <a
                        href={WA_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-brand-whatsapp text-white font-bold px-5 py-3 rounded-xl hover:bg-green-600 transition-all text-sm"
                      >
                        💬 WhatsApp Enquiry
                      </a>
                    </div>
                  </div>
                </div>
                {i < services.length - 1 && <hr className="mt-16 border-slate-200" />}
              </div>
            )
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-navy-900 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-white">Not Sure What You Need?</h2>
          <p className="text-slate-300 mt-3">
            Call us and describe your problem. Our team will guide you to the right solution —
            no pressure, no upselling.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a href={`tel:${PHONE}`}
               className="flex items-center gap-2 bg-brand-orange text-white font-bold px-7 py-4 rounded-xl hover:bg-orange-700 transition-colors">
              📞 +91 85082 26548
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 bg-brand-whatsapp text-white font-bold px-7 py-4 rounded-xl hover:bg-green-600 transition-colors">
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
