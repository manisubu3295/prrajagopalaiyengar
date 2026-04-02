import { useState } from 'react'
import Seo from '../components/Seo'

const WA_URL = 'https://wa.me/918508226548?text=Hello%2C%20I%20need%20your%20services.'

const categories = ['All', 'Electrical', 'Plumbing', 'Pump Installation', 'Commercial']

const galleryItems = [
  // Electrical
  { id: 1, category: 'Electrical', title: 'Residential House Wiring', location: 'Thiruvarur', desc: 'Complete wiring for new 3BHK home. ISI certified cables, proper earthing.', img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80', tag: 'Residential' },
  { id: 2, category: 'Electrical', title: 'Distribution Board Upgrade', location: 'Nagapattinam', desc: 'Old fuse box replaced with modern MCB panel with ELCB protection.', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', tag: 'Safety Upgrade' },
  { id: 3, category: 'Electrical', title: 'Commercial Building Wiring', location: 'Thiruturaipoondi', desc: '3-phase commercial installation for a rice mill. Load: 75kVA.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', tag: 'Commercial' },
  { id: 4, category: 'Electrical', title: 'Street Light Installation', location: 'Mannargudi', desc: '48 LED street lights installed for a residential layout.', img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80', tag: 'LED Lighting' },
  // Plumbing
  { id: 5, category: 'Plumbing', title: 'Full Bathroom Plumbing', location: 'Thiruvarur', desc: 'New 3-bathroom plumbing for apartment complex. CPVC piping throughout.', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80', tag: 'New Installation' },
  { id: 6, category: 'Plumbing', title: 'Overhead Tank & Sump', location: 'Papanasam', desc: 'Sump + overhead tank with automatic float valve and overflow line.', img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80', tag: 'Tank Work' },
  { id: 7, category: 'Plumbing', title: 'Leakage Fix – Terrace', location: 'Nagapattinam', desc: 'Detected and repaired 3 hidden terrace leaks with waterproofing treatment.', img: 'https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=600&q=80', tag: 'Repair' },
  // Pump
  { id: 8, category: 'Pump Installation', title: 'Texmo Aquasub Borewell Pump', location: 'Thiruvarur', desc: '2HP Texmo Aquasub installed at 250ft depth. Full GI pipe and starter panel.', img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80', tag: 'Submersible' },
  { id: 9, category: 'Pump Installation', title: 'Agricultural Pump Set', location: 'Thiruturaipoondi', desc: '5HP Texmo 3-phase pump with auto starter for paddy irrigation. 5 acres.', img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80', tag: 'Agriculture' },
  { id: 10, category: 'Pump Installation', title: '10 Pump Apartment Project', location: 'Nagapattinam', desc: 'Texmo domestic pumps installed for 10-flat apartment. Central distribution.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', tag: 'Multi-unit' },
  // Commercial
  { id: 11, category: 'Commercial', title: 'Factory Electrical Work', location: 'Kumbakonam', desc: 'Complete 3-phase electrical installation for a small manufacturing unit.', img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80', tag: 'Industrial' },
  { id: 12, category: 'Commercial', title: 'Hotel Full Electrical + Plumbing', location: 'Thiruvarur', desc: 'End-to-end electrical and plumbing for a 30-room hotel. Completed in 45 days.', img: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=600&q=80', tag: 'Turnkey' },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(i => i.category === activeCategory)

  return (
    <>
      <Seo
        title="Project Gallery | Electrical & Plumbing Work Photos – P.R. Rajagopalaiyengar & Sons"
        description="See our completed electrical, plumbing and pump installation projects in Thiruvarur, Nagapattinam and Thiruturaipoondi. 5000+ projects completed since 1957."
        path="/gallery"
      />

      {/* Hero */}
      <section className="relative py-20 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=60')] bg-cover" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="gold-badge border border-amber-400/30">Our Work</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mt-4">
            Project Gallery
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            Real projects. Real results. Over 5,000 completed works across three districts.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4 max-w-xs mx-auto">
            {[['5000+', 'Projects'], ['67', 'Years'], ['3', 'Districts']].map(([v, l]) => (
              <div key={l} className="text-center">
                <p className="font-heading font-bold text-2xl text-amber-400">{v}</p>
                <p className="text-xs text-slate-400">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white py-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                  activeCategory === cat
                    ? 'bg-navy-900 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat} {activeCategory !== cat && <span className="text-slate-400 ml-1">{galleryItems.filter(i => cat === 'All' || i.category === cat).length}</span>}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map(item => (
              <div
                key={item.id}
                className="card overflow-hidden group cursor-pointer"
                onClick={() => setLightbox(item)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/40 transition-all flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-white text-3xl transition-opacity">🔍</span>
                  </div>
                  <span className="absolute top-3 left-3 bg-navy-900/80 text-white text-xs font-medium px-2 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-navy-900 text-sm">{item.title}</h3>
                  <p className="text-slate-500 text-xs mt-0.5 flex items-center gap-1">
                    <span>📍</span>{item.location}
                  </p>
                  <p className="text-slate-600 text-xs mt-2 line-clamp-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <img src={lightbox.img} alt={lightbox.title} className="w-full h-72 object-cover" />
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-brand-blue uppercase tracking-wide">{lightbox.category}</span>
                  <h2 className="font-heading font-bold text-navy-900 text-xl mt-1">{lightbox.title}</h2>
                  <p className="text-slate-500 text-sm mt-0.5">📍 {lightbox.location}</p>
                  <p className="text-slate-700 mt-3">{lightbox.desc}</p>
                </div>
                <button onClick={() => setLightbox(null)} className="text-slate-400 hover:text-slate-700 text-2xl leading-none shrink-0">×</button>
              </div>
              <div className="mt-5 flex gap-3">
                <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                   className="flex-1 flex items-center justify-center gap-2 bg-brand-whatsapp text-white font-bold py-3 rounded-xl text-sm">
                  💬 Similar Project Enquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-14 bg-navy-900 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-white">Want Us to Work on Your Project?</h2>
          <p className="text-slate-300 mt-2 text-sm">Send us a WhatsApp with your requirement. We'll visit, assess and quote — for free.</p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer"
             className="mt-5 inline-flex items-center gap-2 bg-brand-whatsapp text-white font-bold px-8 py-4 rounded-xl hover:bg-green-600 transition-colors">
            💬 Get a Free Site Visit
          </a>
        </div>
      </section>
    </>
  )
}
