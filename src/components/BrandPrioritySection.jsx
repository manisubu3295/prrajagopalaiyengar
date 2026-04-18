function BrandChip({ name, note, tone = 'default' }) {
  const styles = tone === 'highlight'
    ? 'border-[#e6c6bf] bg-[#fff7f4] text-[#1A1A1A] shadow-sm'
    : tone === 'medium'
      ? 'border-[#d7e5df] bg-white text-[#1A1A1A]'
      : 'border-[#d7e5df] bg-[#f4f8f6] text-[#666666]'

  return (
    <div className={`rounded-[1rem] border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(26,26,26,0.06)] ${styles}`}>
      <p className="text-base font-semibold">{name}</p>
      {note ? <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-500">{note}</p> : null}
    </div>
  )
}

export default function BrandPrioritySection({ section }) {
  const totalBrands = section.top.length + section.medium.length + section.low.length

  return (
    <section className="panel-paper p-6 md:p-8 lg:p-10">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <p className="section-kicker">Brand Group</p>
        <div className="lg:max-w-3xl">
          <h3 className="font-heading text-2xl font-bold text-[#D6452E] md:text-3xl">{section.title}</h3>
          <p className="mt-2 text-sm leading-7 text-[#666666]">Call or WhatsApp to confirm current stock and availability before visiting.</p>
        </div>
        <div className="rounded-[1rem] bg-[#f4f8f6] px-4 py-4 text-center ring-1 ring-[#d7e5df] lg:min-w-[120px]">
          <p className="section-kicker">Count</p>
          <p className="mt-2 font-heading text-3xl font-bold text-[#D6452E]">{totalBrands}</p>
        </div>
      </div>

      {section.top.length ? (
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {section.top.map((brand) => (
            <BrandChip key={brand.name} {...brand} tone="highlight" />
          ))}
        </div>
      ) : null}

      {section.medium.length ? (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {section.medium.map((brand) => (
            <BrandChip key={brand.name} {...brand} tone="medium" />
          ))}
        </div>
      ) : null}

      {section.low.length ? (
        <div className="mt-6 rounded-[1.25rem] bg-[#f4f8f6] p-4 ring-1 ring-[#d7e5df] md:p-5">
          <p className="mb-3 text-sm font-semibold text-[#2F5D50]">Also available</p>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {section.low.map((brand) => (
              <BrandChip key={brand.name} {...brand} />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  )
}