import { buildWhatsAppLink, contactInfo } from '../content/siteContent'

export default function EnquiryActions({
  message = 'Hello, I need details about your products or services.',
  primaryLabel = 'Call Now',
  secondaryLabel = 'WhatsApp Us',
  className = '',
  center = false,
}) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap ${center ? 'justify-center' : ''} ${className}`.trim()}>
      <a
        href={`tel:${contactInfo.phone}`}
        className="inline-flex min-h-[56px] w-full items-center justify-center gap-2 rounded-lg bg-[#D6452E] px-5 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-[#b63a27] sm:min-h-[52px] sm:w-auto sm:px-6"
      >
        <span>📞</span>
        <span>{primaryLabel}</span>
      </a>
      <a
        href={buildWhatsAppLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[56px] w-full items-center justify-center gap-2 rounded-lg bg-[#2F5D50] px-5 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-[#24493f] sm:min-h-[52px] sm:w-auto sm:px-6"
      >
        <span>💬</span>
        <span>{secondaryLabel}</span>
      </a>
    </div>
  )
}