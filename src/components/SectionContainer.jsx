export default function SectionContainer({
  as: Tag = 'section',
  className = '',
  contentClassName = '',
  children,
}) {
  return (
    <Tag className={className}>
      <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${contentClassName}`.trim()}>
        {children}
      </div>
    </Tag>
  )
}