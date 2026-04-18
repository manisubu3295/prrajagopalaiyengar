export default function BrandCard({
  name,
  title,
  note,
  description,
  badge,
  imagePath,
  imageAlt,
  compact = false,
  className = '',
}) {
  const heading = title || name

  return (
    <div className={`overflow-hidden rounded-xl border border-[#d7e5df] bg-white shadow-[0_14px_30px_rgba(26,26,26,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(26,26,26,0.08)] ${className}`.trim()}>
      {imagePath ? (
        <div className={compact ? 'aspect-[4/3] overflow-hidden bg-[#f4f8f6]' : 'aspect-[5/3] overflow-hidden bg-[#f4f8f6]'}>
          <img src={imagePath} alt={imageAlt || heading} className="h-full w-full object-cover" loading="lazy" decoding="async" />
        </div>
      ) : null}
      <div className={compact ? 'p-4' : 'p-5 md:p-6'}>
        {badge ? <p className="section-kicker">{badge}</p> : null}
        <p className={`font-heading font-bold text-[#D6452E] text-base md:text-lg truncate whitespace-nowrap w-full ${compact ? '' : ''}`}>{heading}</p>
        {description ? <p className="mt-2 text-sm leading-7 text-[#666666]">{description}</p> : null}
        {note ? <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[#2F5D50]">{note}</p> : null}
      </div>
    </div>
  )
}