import EnquiryActions from '../EnquiryActions'

export default function CTASection({
  eyebrow,
  title,
  description,
  message,
  primaryLabel = 'Call Now',
  secondaryLabel = 'WhatsApp Enquiry',
}) {
  return (
    <div className="rounded-[1.5rem] border border-[#d7e5df] bg-[#f9fbfa] p-6 text-center shadow-[0_16px_34px_rgba(26,26,26,0.05)] md:p-8 lg:p-10">
      {eyebrow ? <span className="gold-badge">{eyebrow}</span> : null}
      <h2 className="mt-4 font-heading text-3xl font-bold text-[#D6452E] md:text-4xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#666666]">{description}</p>
      <EnquiryActions
        message={message}
        className="mt-7 justify-center"
        center
        primaryLabel={primaryLabel}
        secondaryLabel={secondaryLabel}
      />
    </div>
  )
}