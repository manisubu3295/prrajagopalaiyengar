import { buildWhatsAppLink } from '../../content/siteContent'

export default function CategoryCard({
  title,
  description,
  imagePath,
  alt,
  ctaLabel = 'WhatsApp Enquiry',
  message,
  badge,
}) {
  return (
    <article className="group overflow-hidden rounded-[1rem] border border-[#deebe5] bg-white shadow-[0_14px_30px_rgba(26,26,26,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(26,26,26,0.08)]">
      <div className="aspect-[5/4] overflow-hidden bg-[#f4f8f6]">
        <img src={imagePath} alt={alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" loading="lazy" decoding="async" />
      </div>
      <div className="p-5 md:p-6">
        {badge ? <span className="section-kicker">{badge}</span> : null}
        <h3 className="mt-2 font-heading text-2xl font-bold text-[#1A1A1A]">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-[#666666]">{description}</p>
        <a
          href={buildWhatsAppLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[#2F5D50]/20 px-4 py-2 text-sm font-semibold text-[#2F5D50] transition-colors hover:bg-[#edf4f1]"
        >
          {ctaLabel}
        </a>
      </div>
    </article>
  )
}