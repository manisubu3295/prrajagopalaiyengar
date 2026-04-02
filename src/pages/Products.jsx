import { useState } from 'react'
import Seo from '../components/Seo'

const PHONE  = '+918508226548'
const WA_URL = 'https://wa.me/918508226548?text=Hello%2C%20I%20am%20interested%20in%20buying%20a%20product.%20Please%20share%20availability%20and%20price.'

/* ─── PRODUCT CATALOG ────────────────────────────────────────
   Organised into top-level categories the way a shop would.
   Each product has: name, brand, desc, tags[], img, badge
──────────────────────────────────────────────────────────── */
const catalog = [
  /* ══ ELECTRICAL WIRES & CABLES ══ */
  {
    category: 'Wires & Cables',
    icon: '🔴',
    color: { bg: 'bg-red-50', border: 'border-red-200', badge: 'bg-red-100 text-red-800', dot: 'bg-red-500' },
    products: [
      { name: 'Havells FR-LSH House Wire', brand: 'Havells', desc: 'Fire-retardant, low-smoke, halogen-free. ISI certified. Available in 1, 1.5, 2.5, 4, 6 sq.mm. Red, Blue, Yellow, Green, Black.', badge: 'Best Seller', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
      { name: 'Finolex FR PVC Wire', brand: 'Finolex', desc: 'Premium copper conductor, PVC insulated, fire retardant. For all home and commercial wiring. ISI Mark.', badge: 'ISI Certified', img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80' },
      { name: 'Polycab FRLS Wire', brand: 'Polycab', desc: 'Thick PVC sheath, smooth finish, ideal for concealed wiring. Multi-strand copper.', badge: 'Premium', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80' },
      { name: '3-Core & 4-Core Cables', brand: 'Havells / Finolex', desc: 'Armoured and unarmoured PVC cables for underground, industrial and submersible pump connections.', badge: 'Industrial', img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80' },
    ],
  },

  /* ══ SWITCHES & SOCKETS ══ */
  {
    category: 'Switches & Sockets',
    icon: '🔘',
    color: { bg: 'bg-slate-50', border: 'border-slate-200', badge: 'bg-slate-100 text-slate-800', dot: 'bg-slate-500' },
    products: [
      { name: 'Legrand Myrius Modular Switches', brand: 'Legrand', desc: 'Premium modular switches, 6A/16A, wide range of gang plates. Smooth touch. 10-year warranty.', badge: 'Premium Brand', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
      { name: 'Anchor Roma Switches', brand: 'Anchor Panasonic', desc: 'Trusted Indian brand. Available in 1–6 gang modular plates. Affordable pricing. ISI marked.', badge: 'Best Value', img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80' },
      { name: 'Havells Crabtree Switches', brand: 'Havells', desc: 'Modern look with high durability. Modular switches, sockets, fan regulators, TV & data points.', badge: 'Popular', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80' },
      { name: 'Industrial Plugs & Sockets', brand: 'L&T / Legrand', desc: '16A, 32A, 63A industrial-grade plugs and sockets for factories, pump panels and heavy machinery.', badge: 'Industrial Grade', img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&q=80' },
    ],
  },

  /* ══ MCB / ELCB / RCCB ══ */
  {
    category: 'MCB, ELCB & Distribution Boards',
    icon: '⚡',
    color: { bg: 'bg-amber-50', border: 'border-amber-200', badge: 'bg-amber-100 text-amber-800', dot: 'bg-amber-500' },
    products: [
      { name: 'Schneider Electric MCB (Acti9)', brand: 'Schneider', desc: 'Industry-leading MCB for residential and commercial panels. 6A to 63A. Single pole, Double pole, Three pole.', badge: 'No. 1 Brand', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
      { name: 'L&T MCB & RCCB', brand: 'L&T Electrical', desc: 'Made in India. Widely used in Tamil Nadu. ELCB and RCCB for earth leakage protection. Govt approved.', badge: 'Govt Approved', img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80' },
      { name: 'Siemens BETAGARD MCB', brand: 'Siemens', desc: 'German reliability. BETAGARD range for homes. Quick-trip mechanism, low heat generation.', badge: 'German Quality', img: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=400&q=80' },
      { name: 'DBs & Distribution Boards', brand: 'Havells / L&T', desc: 'Single-door and double-door distribution boards in 4-way to 20-way. Surface and flush mounting.', badge: 'Full Range', img: 'https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=400&q=80' },
    ],
  },

  /* ══ FANS ══ */
  {
    category: 'Ceiling & Exhaust Fans',
    icon: '🌀',
    color: { bg: 'bg-sky-50', border: 'border-sky-200', badge: 'bg-sky-100 text-sky-800', dot: 'bg-sky-500' },
    products: [
      { name: 'Crompton Aura & Energion Fans', brand: 'Crompton', desc: 'India\'s best-selling ceiling fans. High air delivery, low power consumption. 1200mm, 1400mm sizes. BEE 5-star rated options available.', badge: 'Top Seller', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80' },
      { name: 'Orient Electric Fans', brand: 'Orient Electric', desc: 'Aeroquiet and Ecotech range. Silent operation, energy saving. Available in all colours and sizes.', badge: 'Silent Motor', img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80' },
      { name: 'Havells Efficiencia Fans', brand: 'Havells', desc: 'BLDC motor fans for maximum energy savings. Smart speed control, 5-star BEE rating.', badge: 'BLDC Energy Saver', img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80' },
      { name: 'Exhaust & Ventilation Fans', brand: 'Crompton / Usha', desc: '6-inch, 8-inch, 12-inch exhaust fans for kitchens, bathrooms and industrial ventilation.', badge: 'All Sizes', img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&q=80' },
    ],
  },

  /* ══ LIGHTS & FITTINGS ══ */
  {
    category: 'LED Lights & Fittings',
    icon: '💡',
    color: { bg: 'bg-yellow-50', border: 'border-yellow-200', badge: 'bg-yellow-100 text-yellow-800', dot: 'bg-yellow-500' },
    products: [
      { name: 'Philips LED Bulbs & Tubes', brand: 'Philips', desc: 'Complete Philips LED range. Bulbs, tubes, downlights, battens. 2W to 36W. 3 years warranty. Energy saving.', badge: 'Global Brand', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
      { name: 'Havells LED Batten & Panel', brand: 'Havells', desc: 'LED battens for offices, shops and warehouses. Slim LED panels for false ceiling. Energy Star rated.', badge: 'Commercial Grade', img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80' },
      { name: 'Bajaj Ecopack LED Lamps', brand: 'Bajaj Electricals', desc: 'Budget-friendly LED range with Bajaj quality. Bulbs, spotlights, streetlights. Pan India trusted brand.', badge: 'Budget Friendly', img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&q=80' },
      { name: 'Street & Outdoor Lights', brand: 'Havells / Philips', desc: 'IP65 rated outdoor lights, floodlights, street lights and garden lights for homes and public areas.', badge: 'Weatherproof', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80' },
    ],
  },

  /* ══ PVC / CPVC PIPES ══ */
  {
    category: 'PVC, CPVC & GI Pipes',
    icon: '🔵',
    color: { bg: 'bg-blue-50', border: 'border-blue-200', badge: 'bg-blue-100 text-blue-800', dot: 'bg-blue-500' },
    products: [
      { name: 'Ashirvad CPVC Pipes & Fittings', brand: 'Ashirvad', desc: 'FlowGuard CPVC for hot and cold water lines. Corrosion-proof, no scale buildup. ISI and NSF certified. Full range of fittings.', badge: 'Hot Water Safe', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80' },
      { name: 'Supreme PVC SWR Pipes', brand: 'Supreme Industries', desc: 'PVC soil-waste-rain (SWR) pipes and fittings for drainage. 75mm to 160mm. High impact resistance.', badge: 'Drainage Specialist', img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80' },
      { name: 'Prince UPVC Column Pipes', brand: 'Prince Pipes', desc: 'UPVC column pipes for submersible pump delivery. 25mm, 32mm, 40mm, 50mm. Light weight, no rust.', badge: 'Pump Delivery', img: 'https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=400&q=80' },
      { name: 'GI Pipes & Fittings', brand: 'Tata / Jindal', desc: 'Galvanised iron pipes for overhead tanks, industrial water lines and pump delivery. All sizes in stock.', badge: 'Heavy Duty', img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80' },
    ],
  },

  /* ══ PLUMBING FITTINGS & VALVES ══ */
  {
    category: 'Fittings, Valves & Taps',
    icon: '🚰',
    color: { bg: 'bg-cyan-50', border: 'border-cyan-200', badge: 'bg-cyan-100 text-cyan-800', dot: 'bg-cyan-500' },
    products: [
      { name: 'Jaquar Taps & Faucets', brand: 'Jaquar', desc: 'Premium bathroom and kitchen taps. Bib cocks, pillar cocks, angle valves, health faucets. Brass body, chrome finish.', badge: 'Premium Brand', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
      { name: 'Hindware Sanitary Fittings', brand: 'Hindware', desc: 'Affordable quality taps, mixers and health faucets for homes. Wide range for all budgets.', badge: 'Value Brand', img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80' },
      { name: 'Gate Valves & Ball Valves', brand: 'Kirloskar / Sant', desc: 'Brass gate valves, ball valves, check valves in all sizes (½" to 2"). For water lines, pumps and tanks.', badge: 'Full Range', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80' },
      { name: 'Flush Tanks & WC Fittings', brand: 'Hindware / Cera', desc: 'Concealed and exposed flush cisterns, float valves, flush valves and WC connections.', badge: 'Bathroom Complete', img: 'https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=400&q=80' },
    ],
  },

  /* ══ WATER TANKS ══ */
  {
    category: 'Water Storage Tanks',
    icon: '🛢️',
    color: { bg: 'bg-teal-50', border: 'border-teal-200', badge: 'bg-teal-100 text-teal-800', dot: 'bg-teal-500' },
    products: [
      { name: 'Sintex Reno Overhead Tanks', brand: 'Sintex', desc: 'Triple-layer insulated tank. UV protected. Keeps water cool. 500L to 5000L. 5-year warranty. Black outer with white inner.', badge: 'Top Brand', img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80' },
      { name: 'Sintex Underground Sumps', brand: 'Sintex', desc: 'Pre-moulded FRP underground sumps. No leakage, no seepage. Fast installation. 1000L to 10,000L.', badge: 'Underground', img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&q=80' },
      { name: 'Penguin Plastic Tanks', brand: 'Penguin', desc: 'Affordable polyethylene tanks. For rooftop and overhead storage. 500L, 750L, 1000L, 2000L.', badge: 'Budget Option', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
    ],
  },

  /* ══ TEXMO PUMPS ══ */
  {
    category: 'Texmo Aquasub Pumps',
    icon: '⚙️',
    color: { bg: 'bg-indigo-50', border: 'border-indigo-200', badge: 'bg-indigo-100 text-indigo-800', dot: 'bg-indigo-600' },
    highlight: true,
    products: [
      { name: 'Texmo Self-Priming Pump', brand: 'Texmo', desc: 'Ideal for homes and apartments. Up to 8m suction lift. Single phase. 0.5HP to 2HP. Compact silent design.', badge: 'Best Seller', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
      { name: 'Texmo Aquasub Submersible', brand: 'Texmo Aquasub', desc: 'Borewell submersible pump. SS304 body, copper winding. 250ft to 500ft depth. Authorized stock only.', badge: 'Authorized Dealer', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80' },
      { name: 'Texmo Agricultural Pump', brand: 'Texmo', desc: '3-phase centrifugal pump for irrigation. 3HP to 10HP. Cast iron body. High flow rate for paddy fields.', badge: 'Farm Choice', img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&q=80' },
      { name: 'Texmo Monoblock Pump', brand: 'Texmo', desc: 'Direct-coupled monoblock for high-head applications. Multi-floor buildings, water treatment, industrial.', badge: 'Commercial Grade', img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80' },
    ],
  },

  /* ══ STARTERS & PANELS ══ */
  {
    category: 'Starters, Panels & Accessories',
    icon: '🎛️',
    color: { bg: 'bg-orange-50', border: 'border-orange-200', badge: 'bg-orange-100 text-orange-800', dot: 'bg-orange-500' },
    products: [
      { name: 'DOL & Star-Delta Starters', brand: 'L&T / Siemens', desc: 'Direct-on-line and star-delta motor starters. 1HP to 50HP. For agricultural pumps, industrial motors.', badge: 'Motor Protection', img: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=400&q=80' },
      { name: 'V-Guard Voltage Stabilizers', brand: 'V-Guard', desc: 'Pump and motor stabilizers. Protects against voltage fluctuation — critical in Tamil Nadu conditions. 1KVA to 5KVA.', badge: 'Voltage Protection', img: 'https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=400&q=80' },
      { name: 'Capacitors & Accessories', brand: 'Havells / Khatod', desc: 'Motor run and start capacitors. Water level controllers, float switches, junction boxes and cable lugs.', badge: 'Full Range', img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80' },
    ],
  },
]

const allCategories = ['All', ...catalog.map(c => c.category)]

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All')

  const visible = activeCategory === 'All'
    ? catalog
    : catalog.filter(c => c.category === activeCategory)

  return (
    <>
      <Seo
        title="Electrical & Plumbing Products Shop | Texmo Pump Dealer – Thiruvarur | P.R. Rajagopalaiyengar"
        description="Shop genuine Havells, Finolex, Polycab wires, Legrand switches, Schneider MCB, Crompton fans, Philips LEDs, Ashirvad pipes, Jaquar taps, Sintex tanks and Texmo Aquasub pumps in Thiruvarur."
        keywords="electrical shop Thiruvarur, Havells wire dealer, Legrand switch dealer, Texmo pump dealer, Ashirvad pipe dealer, Sintex tank dealer, MCB dealer Nagapattinam, LED light shop Thiruvarur, plumbing materials shop, Crompton fan dealer Thiruvarur"
        path="/products"
      />

      {/* Hero */}
      <section className="relative py-20 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=60')] bg-cover bg-center" />
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <span className="gold-badge border border-amber-400/30">Our Products</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
            Genuine Branded Products —<br/>
            <span className="text-amber-400">Wires · Switches · Pipes · Pumps</span>
          </h1>
          <p className="mt-4 text-slate-300 text-lg max-w-2xl mx-auto">
            Everything you need for electrical and plumbing work — under one roof.
            All brands. All sizes. 100% original. Available in Thiruvarur since 1957.
          </p>

          {/* Brand logos strip */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['Havells', 'Finolex', 'Polycab', 'Legrand', 'Schneider', 'L&T', 'Crompton', 'Philips', 'Ashirvad', 'Jaquar', 'Sintex', 'Texmo Aquasub'].map(b => (
              <span key={b} className="bg-white/10 border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="bg-amber-500 py-3 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-white font-semibold text-sm text-center">
          <span>✅ 100% Original Products — No Duplicate, No First Copy</span>
          <span>🏭 Authorized Texmo Aquasub Dealer</span>
          <span>📦 All Brands Available in Stock</span>
          <span>🔧 Expert Advice + Installation Support</span>
        </div>
      </div>

      {/* Category filter */}
      <section className="bg-white py-6 border-b border-slate-100 sticky top-16 md:top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <div className="flex gap-2 min-w-max pb-1">
            {allCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full font-semibold text-xs whitespace-nowrap transition-all border ${
                  activeCategory === cat
                    ? 'bg-navy-900 text-white border-navy-900 shadow'
                    : 'bg-slate-100 text-slate-700 border-transparent hover:bg-slate-200'
                }`}
              >
                {cat === 'All' ? '🛒 All Products' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog */}
      <div className="bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {visible.map(({ category, icon, color, highlight, products }) => (
            <div key={category} id={category.toLowerCase().replace(/\s+/g, '-')}>
              {/* Category header */}
              <div className={`flex items-center gap-4 mb-6 pb-4 border-b-2 ${highlight ? 'border-indigo-400' : 'border-slate-200'}`}>
                <div className={`w-12 h-12 ${color.bg} ${color.border} border-2 rounded-2xl flex items-center justify-center text-2xl`}>
                  {icon}
                </div>
                <div>
                  <h2 className="font-heading font-bold text-2xl text-navy-900">{category}</h2>
                  {highlight && (
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">⭐ Authorized Dealer</span>
                  )}
                </div>
              </div>

              {/* Products grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {products.map(({ name, brand, desc, badge, img }) => (
                  <div key={name} className="bg-white rounded-2xl shadow-card hover:shadow-hover transition-all hover:-translate-y-1 overflow-hidden flex flex-col group">
                    <div className="relative overflow-hidden">
                      <img src={img} alt={name} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500" />
                      <span className={`absolute top-2 left-2 ${color.badge} text-xs font-bold px-2 py-1 rounded-full`}>
                        {badge}
                      </span>
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="font-bold text-navy-900 text-sm leading-snug">{name}</h3>
                      </div>
                      <p className="text-brand-blue text-xs font-semibold mb-2">{brand}</p>
                      <p className="text-slate-600 text-xs leading-relaxed flex-1">{desc}</p>
                      <a
                        href={`https://wa.me/918508226548?text=${encodeURIComponent(`Hello, I need ${name} (${brand}). Please share price and availability.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 w-full flex items-center justify-center gap-1.5 bg-brand-whatsapp text-white font-bold py-2.5 rounded-xl text-xs hover:bg-green-600 transition-colors"
                      >
                        💬 Ask Price on WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* "Can't find what you need?" */}
      <section className="py-14 bg-white border-y border-slate-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-3xl mb-3">🔍</p>
          <h2 className="font-heading text-2xl font-bold text-navy-900">
            Can't Find What You Need?
          </h2>
          <p className="text-slate-600 mt-2">
            We stock hundreds of electrical and plumbing products. If it's not listed here,
            just call or WhatsApp — we most likely have it, or can source it for you quickly.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a href={`tel:${PHONE}`}
               className="flex items-center gap-2 bg-brand-orange text-white font-bold px-7 py-3 rounded-xl hover:bg-orange-700 transition-colors">
              📞 Call the Shop
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 bg-brand-whatsapp text-white font-bold px-7 py-3 rounded-xl hover:bg-green-600 transition-colors">
              💬 WhatsApp Your List
            </a>
          </div>
        </div>
      </section>

      {/* Why buy from us */}
      <section className="py-14 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white text-center mb-10">
            Why Contractors & Homeowners Buy From Us
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🔒', title: 'Zero Duplicates', desc: 'We have never sold a fake or first-copy product in 67 years. Every item is original, sealed stock.' },
              { icon: '🏭', title: 'Authorized Dealer', desc: 'Direct authorized dealer for Texmo Aquasub. Buy with confidence — full manufacturer warranty.' },
              { icon: '📦', title: 'All Brands in Stock', desc: 'Havells, Polycab, Legrand, Schneider, Ashirvad, Jaquar, Sintex, Crompton — all under one roof.' },
              { icon: '💡', title: 'Expert Advice Free', desc: 'Not sure which wire size or which pump? Our 67 years of experience helps you choose the right product.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-bold text-white text-base">{title}</h3>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
