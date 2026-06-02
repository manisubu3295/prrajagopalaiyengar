import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

export default function FaqSection({ faqs, title = 'Frequently Asked Questions', eyebrow = 'FAQ' }) {
  const [openIndex, setOpenIndex] = useState(null)

  const faqSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  })

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{faqSchema}</script>
      </Helmet>

      <section className="bg-[#f4f8f6] py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="gold-badge">{eyebrow}</span>
            <h2 className="section-title mt-4">{title}</h2>
            <p className="section-subtitle mx-auto mt-3 max-w-2xl">Common questions from customers in Tiruvarur, Thiruthuraipoondi and Nagapattinam.</p>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[1rem] border border-[#d7e5df] bg-white shadow-[0_4px_14px_rgba(26,26,26,0.04)]"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-sm font-semibold leading-7 text-[#1A1A1A] sm:text-base">{faq.question}</span>
                  <span
                    className="shrink-0 text-lg text-[#2F5D50] transition-transform duration-200"
                    style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </button>

                {openIndex === index && (
                  <div className="border-t border-[#d7e5df] px-6 pb-5 pt-4 text-sm leading-7 text-[#666666]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
