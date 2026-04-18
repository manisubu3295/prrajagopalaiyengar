import EnquiryActions from '../EnquiryActions'

export default function HeroSection({
  eyebrow,
  title,
  description,
  trustItems = [],
  image,
  imageAlt,
  imageLabel,
  message,
  primaryLabel = 'Call Now',
  secondaryLabel = 'WhatsApp Enquiry',
}) {
  return (
    <div className="grid items-stretch gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:gap-10">
      <div className="panel-paper flex h-full flex-col justify-center p-6 md:p-8 lg:p-10">
        {eyebrow ? <span className="gold-badge">{eyebrow}</span> : null}
        <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-[#D6452E] md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[#666666] md:text-lg">{description}</p>

        {trustItems.length ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {trustItems.map((item) => (
              <span key={item} className="trust-chip">
                {item}
              </span>
            ))}
          </div>
        ) : null}

        <EnquiryActions message={message} className="mt-8" primaryLabel={primaryLabel} secondaryLabel={secondaryLabel} />
      </div>

      <div className="service-photo-card group relative min-h-[320px] overflow-hidden lg:min-h-[470px]">
        <img src={image} alt={imageAlt} className="service-photo-image transition-transform duration-500 group-hover:scale-[1.03]" decoding="async" fetchpriority="high" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(26,26,26,0.62)] via-[rgba(26,26,26,0.14)] to-transparent p-5 md:p-6">
          {imageLabel ? <span className="inline-flex rounded-full bg-white/92 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2F5D50]">{imageLabel}</span> : null}
        </div>
      </div>
    </div>
  )
}