import EnquiryActions from './EnquiryActions'

export default function PageHero({ eyebrow, title, description, message, primaryLabel, secondaryLabel }) {
  return (
    <section className="storefront-frame relative overflow-hidden border-b border-[#d7e5df] bg-white py-16 md:py-24">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <div className="text-center lg:text-left">
            {eyebrow ? <span className="gold-badge">{eyebrow}</span> : null}
            <h1 className="mt-4 font-heading text-4xl font-bold leading-[1.08] text-[#D6452E] md:text-5xl lg:text-6xl">{title}</h1>
            <div className="mx-auto mt-5 h-[3px] w-24 rounded-full bg-[#2F5D50] lg:mx-0" />
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#666666] md:text-lg lg:mx-0">{description}</p>
            <EnquiryActions
              message={message}
              primaryLabel={primaryLabel}
              secondaryLabel={secondaryLabel}
              className="mt-8"
              center={false}
            />
          </div>

          <div className="panel-paper p-6 md:p-8 text-[#1A1A1A]">
            <p className="section-kicker">Quick Reference</p>
            <div className="mt-5 grid gap-3 text-sm text-[#666666]">
              <div className="rounded-[1rem] border border-[#d7e5df] bg-[#f9fbfa] px-4 py-4 leading-7">Authorized Texmo dealer for pumps and motors in Tiruvarur.</div>
              <div className="rounded-[1rem] border border-[#d7e5df] bg-[#f9fbfa] px-4 py-4 leading-7">Electrical, plumbing and borewell enquiries — all from one counter.</div>
              <div className="rounded-[1rem] border border-[#d7e5df] bg-[#f9fbfa] px-4 py-4 leading-7">Call or WhatsApp before visiting to confirm stock and availability.</div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-[1rem] bg-[#f4f8f6] px-4 py-4 text-center ring-1 ring-[#d7e5df]">
                <p className="section-kicker">Service</p>
                <p className="mt-2 text-base font-semibold text-[#1A1A1A]">67+ Years</p>
              </div>
              <div className="rounded-[1rem] bg-[#f4f8f6] px-4 py-4 text-center ring-1 ring-[#d7e5df]">
                <p className="section-kicker">Towns</p>
                <p className="mt-2 text-base font-semibold text-[#1A1A1A]">3 Areas</p>
              </div>
              <div className="rounded-[1rem] bg-[#f4f8f6] px-4 py-4 text-center ring-1 ring-[#d7e5df]">
                <p className="section-kicker">Hours</p>
                <p className="mt-2 text-base font-semibold text-[#1A1A1A]">Mon–Sat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}