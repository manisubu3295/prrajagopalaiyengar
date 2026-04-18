export const SITE_URL = 'https://prrajagopalaiyengar.com'
export const SITE_NAME = 'PRR & Sons'
export const BUSINESS_FULL_NAME = 'P.R. Rajagopalaiyengar & Sons'
export const SITE_TAGLINE = 'Authorized Texmo Dealer | Electrical, Plumbing, Pumps & Borewell Support'

export const businessFacts = {
  trustTitle: 'Authorized Texmo Motor Dealer',
  experienceLine: '67 years of service across 3 generations',
  serviceAreas: ['Tiruvarur', 'Thiruthuraipoondi', 'Mannargudi'],
}

export const bilingualText = {
  heroSupport: 'Electrical Materials / மின்சார பொருட்கள்',
  plumbingSupport: 'Plumbing Materials / குழாய் பொருட்கள்',
  pumpsSupport: 'Pumps & Motors / பம்புகள் மற்றும் மோட்டார்கள்',
  borewellSupport: 'Borewell Services / போர்வெல் சேவைகள்',
  texmoLine: 'Authorized Texmo Dealer / அங்கீகரிக்கப்பட்ட டெக்ஸ்மோ மோட்டார் விற்பனையாளர்',
}

export const contactInfo = {
  phone: '+918508226548',
  displayPhone: '+91 85082 26548',
  whatsappNumber: '918508226548',
  addressLines: ['No. 185, Old Nagai Salai', 'Thiruvarur - 610 001', 'Tamil Nadu'],
  fullAddress: 'No. 185, Old Nagai Salai, Thiruvarur - 610 001, Tamil Nadu',
  hours: 'Mon - Sat: 8:00 AM - 8:00 PM',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62649.70786862378!2d79.5945!3d10.7726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a556a6a7b818c47%3A0xc3c1f7e432b1f6a1!2sThiruvarur%2C%20Tamil%20Nadu%20610001!5e0!3m2!1sen!2sin!4v1700000000000',
  serviceAreaLabel: 'Serving Tiruvarur, Thiruthuraipoondi and Mannargudi',
}

export function buildWhatsAppLink(message) {
  return `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const mainNav = [
  { to: '/', label: 'Home' },
  { to: '/about-business', label: 'About Business' },
  { to: '/electrical-products', label: 'Electrical Products' },
  { to: '/plumbing-materials', label: 'Plumbing Materials' },
  { to: '/pumps-and-motors', label: 'Pumps & Motors' },
  { to: '/borewell-services', label: 'Borewell Services' },
  { to: '/brands', label: 'Brands' },
  { to: '/contact', label: 'Contact' },
]

export const heroVariations = [
  {
    headline: 'Authorized Texmo Motor Dealer in Tiruvarur for Electrical, Plumbing and Borewell Needs',
    subheadline: 'Serving Tiruvarur, Thiruthuraipoondi and Mannargudi with electrical materials, plumbing materials, pumps, motors and enquiry-first borewell support.',
    primaryCta: 'Call the Shop',
    secondaryCta: 'WhatsApp Enquiry',
  },
  {
    headline: 'Authorized Texmo Dealer for Pumps, Motors, Electrical Materials and Plumbing Supplies',
    subheadline: 'A trusted dealer showroom for homeowners, contractors, farmers and site needs across the Tiruvarur region.',
    primaryCta: 'Call for Availability',
    secondaryCta: 'Send Your List on WhatsApp',
  },
  {
    headline: 'Need Texmo Motors, Electrical Materials or Borewell Support? Visit Us in Tiruvarur',
    subheadline: '67 years of service across 3 generations with clear local support for Tiruvarur, Thiruthuraipoondi and Mannargudi.',
    primaryCta: 'Call Now',
    secondaryCta: 'Get WhatsApp Help',
  },
]

export const categorySummaries = [
  {
    title: 'Electrical Products',
    href: '/electrical-products',
    intro: 'Lighting, switches, fans and related electrical materials for homes, shops and building work.',
    offerings: ['LED lights and tubes', 'Wires and cables', 'Switches and accessories', 'Ceiling fans'],
    useCase: 'Useful for new house work, replacement items, shop fittings and contractor purchase lists.',
    cta: 'Ask about electrical stock',
    tamilLabel: 'மின்சார பொருட்கள்',
  },
  {
    title: 'Plumbing Materials',
    href: '/plumbing-materials',
    intro: 'Pipes, fittings and related plumbing materials for household and building needs.',
    offerings: ['Finolex pipes and fittings', 'Plumbing accessories', 'Material support for repairs', 'Material support for new work'],
    useCase: 'Useful for bathrooms, kitchens, overhead tank lines and regular plumbing replacement work.',
    cta: 'Check plumbing availability',
    tamilLabel: 'குழாய் பொருட்கள்',
  },
  {
    title: 'Pumps & Motors',
    href: '/pumps-and-motors',
    intro: 'Authorized Texmo dealer support for household, farm and building water needs.',
    offerings: ['Texmo motors and pump enquiries', 'Domestic pump needs', 'Motor replacement support', 'Accessories and matching materials'],
    useCase: 'Useful when you need water movement support along with matching pipe, cable or switch items.',
    cta: 'Discuss pump requirement',
    tamilLabel: 'பம்புகள் மற்றும் மோட்டார்கள்',
  },
  {
    title: 'Borewell Services',
    href: '/borewell-services',
    intro: 'Borewell enquiries for new work and existing support — call or WhatsApp with your location and requirement.',
    offerings: ['New borewell enquiry', 'Existing borewell support', 'Pump and pipe material support', 'Call or WhatsApp guidance'],
    useCase: 'Best for customers who want to explain the location and requirement before visiting the shop.',
    cta: 'Enquire about borewell work',
    tamilLabel: 'போர்வெல் சேவைகள்',
  },
]

export const brandSections = [
  {
    id: 'texmo',
    title: 'Pumps & Motors Dealer Highlight',
    top: [{ name: 'Texmo', note: 'Authorized Dealer' }],
    medium: [],
    low: [],
  },
  {
    id: 'lighting',
    title: 'LED / Tube / Focus / Street Light',
    top: [{ name: 'Philips' }],
    medium: [{ name: 'Halonix' }],
    low: [{ name: 'Inventra' }, { name: 'Compact' }, { name: 'Doxy' }],
  },
  {
    id: 'wires',
    title: 'Wires & Cables',
    top: [{ name: 'RR' }],
    medium: [{ name: 'KEI' }, { name: 'V-Guard' }],
    low: [{ name: 'SINCAB' }, { name: 'Finolex' }],
  },
  {
    id: 'switches',
    title: 'Switches',
    top: [{ name: 'Legrand', note: 'Premium' }],
    medium: [{ name: 'Anchor' }, { name: 'Lisha' }],
    low: [{ name: 'Vinay' }],
  },
  {
    id: 'fans',
    title: 'Ceiling Fans',
    top: [{ name: 'Crompton' }, { name: 'Havells' }],
    medium: [{ name: 'TVS BLDC' }],
    low: [{ name: 'Khaitan' }],
  },
  {
    id: 'plumbing',
    title: 'Plumbing Materials',
    top: [{ name: 'Finolex' }, { name: 'Watertec' }],
    medium: [{ name: 'Metro' }, { name: 'Atlas' }],
    low: [
      { name: 'Ajeet' },
      { name: 'Rays' },
      { name: 'Aquatek' },
    ],
  },
]

export const whyChooseUs = [
  {
    title: 'Authorized Texmo Motor Dealer',
    description: 'We are an authorized Texmo dealer in Tiruvarur, giving customers direct access to genuine Texmo pumps and motors with reliable guidance.',
  },
  {
    title: 'Wide product availability',
    description: 'Electrical products, cables, switches, plumbing materials, Texmo pumps and motors, and borewell enquiries — all under one trusted counter.',
  },
  {
    title: 'Trusted local service',
    description: '67 years of continuous service across 3 generations in Tiruvarur makes this a counter that customers depend on and return to.',
  },
  {
    title: 'Serving Tiruvarur, Thiruthuraipoondi and Mannargudi',
    description: 'Customers from all three towns and nearby areas are welcome to call, WhatsApp or visit for product enquiries and borewell support.',
  },
]

export const aboutPoints = [
  'Authorized Texmo dealer for pumps, motors and related water-movement needs across Tiruvarur and nearby towns.',
  'A reliable one-stop counter for electrical products, plumbing materials and borewell enquiries in Tiruvarur.',
  '67 years of continuous service across 3 generations — a long local presence that customers can depend on.',
  'Serving Tiruvarur, Thiruthuraipoondi and Mannargudi with practical product guidance and fast enquiry support.',
]

export const homepageFaqs = [
  {
    question: 'Are you an authorized Texmo dealer in Tiruvarur?',
    answer: 'Yes. We are an authorized Texmo motor dealer in Tiruvarur, serving customers across Tiruvarur, Thiruthuraipoondi and Mannargudi for pump, motor and related water-movement needs.',
  },
  {
    question: 'Do you supply pumps and motors in Mannargudi and Thiruthuraipoondi?',
    answer: 'Yes. Customers from Mannargudi and Thiruthuraipoondi regularly enquire about Texmo pumps and motors. Call or WhatsApp to confirm availability and the best time to visit.',
  },
  {
    question: 'Do you stock electrical products in Tiruvarur?',
    answer: 'Yes. We carry electrical products including LED lights, ceiling fans, switches, wires and cables from trusted brands including Philips, RR, KEI, Legrand and Crompton.',
  },
  {
    question: 'Do you supply plumbing materials in Tiruvarur?',
    answer: 'Yes. We stock plumbing materials including Finolex pipes, fittings and related accessories for homes, buildings and repair work across Tiruvarur and nearby towns.',
  },
  {
    question: 'Do you offer borewell services in Tiruvarur?',
    answer: 'Yes. We handle borewell enquiries for new work and existing support in Tiruvarur and nearby areas. Call or WhatsApp with your location and requirement for a quick response.',
  },
  {
    question: 'Which service areas do you cover?',
    answer: 'Our primary service areas are Tiruvarur, Thiruthuraipoondi and Mannargudi. Customers from these towns and nearby areas are welcome to call or WhatsApp for product enquiries and borewell support.',
  },
  {
    question: 'Can I send my product list on WhatsApp before visiting?',
    answer: 'Yes. WhatsApp works well when you have a list or want to describe your requirement in detail. We will confirm stock availability and suggest the best time to visit the shop.',
  },
]

export const localKeywords = [
  'Texmo dealer in Tiruvarur',
  'authorized Texmo motor dealer in Tiruvarur',
  'electrical shop in Thiruvarur',
  'plumbing materials in Thiruvarur',
  'pump and motor shop in Thiruvarur',
  'borewell service enquiry in Thiruvarur',
  'wires and cables dealer in Thiruvarur',
  'Finolex pipes and fittings in Thiruvarur',
  'Legrand switches in Thiruvarur',
  'Philips lights in Thiruvarur',
  'Texmo dealer in Thiruthuraipoondi',
  'Texmo dealer in Mannargudi',
]