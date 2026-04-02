/* Professional brand mark — roof + pipe elbow + water drop
  Built for clarity in header and footer sizes */

export default function Logo({ size = 'md', light = false }) {
  const sizes = {
    sm: { icon: 42, name: 'text-base', tag: 'text-[9px]' },
    md: { icon: 54, name: 'text-lg',   tag: 'text-[10px]' },
    lg: { icon: 72, name: 'text-2xl',  tag: 'text-xs' },
  }
  const s = sizes[size]
  const textColor  = light ? 'text-white'      : 'text-navy-900'
  const subColor   = light ? 'text-amber-300'  : 'text-amber-600'
  const tagColor   = light ? 'text-blue-200'   : 'text-brand-blue'

  return (
    <div className="flex items-center gap-3 select-none">
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="P.R. Rajagopala Iyengar and Sons logo"
      >
        <defs>
          <linearGradient id="logoBg" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
            <stop stopColor="#102756" />
            <stop offset="1" stopColor="#0B1F4B" />
          </linearGradient>
          <linearGradient id="pipeGold" x1="18" y1="20" x2="42" y2="42" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCD34D" />
            <stop offset="1" stopColor="#F59E0B" />
          </linearGradient>
          <linearGradient id="dropBlue" x1="34" y1="30" x2="44" y2="46" gradientUnits="userSpaceOnUse">
            <stop stopColor="#93C5FD" />
            <stop offset="1" stopColor="#38BDF8" />
          </linearGradient>
        </defs>

        <rect x="4.5" y="4.5" width="55" height="55" rx="18" fill="url(#logoBg)" />
        <rect x="4.5" y="4.5" width="55" height="55" rx="18" stroke="#D4A017" strokeWidth="2" />

        <path
          d="M16 27 L32 15 L48 27"
          stroke="#F8FAFC"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 29.5 V24.5"
          stroke="#F8FAFC"
          strokeWidth="2.4"
          strokeLinecap="round"
        />

        <path
          d="M18 35 H28 C31.5 35 34 37.5 34 41 V44.5 H43"
          stroke="url(#pipeGold)"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="18" cy="35" r="3.8" fill="#0F2E6E" stroke="#FDE68A" strokeWidth="1.8" />
        <circle cx="43" cy="44.5" r="3.8" fill="#0F2E6E" stroke="#FDE68A" strokeWidth="1.8" />

        <path
          d="M34.8 33.5 C34.8 33.5 30.5 37.6 30.5 41 C30.5 43.9 32.7 46.1 35.5 46.1 C38.3 46.1 40.5 43.9 40.5 41 C40.5 37.6 34.8 33.5 34.8 33.5Z"
          fill="url(#dropBlue)"
        />
        <path
          d="M35.7 36.4 C35.7 36.4 33.3 38.7 33.3 40.8 C33.3 42.2 34.4 43.4 35.8 43.4"
          stroke="#EFF6FF"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M46.5 18.5 H51.5"
          stroke="#FCD34D"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M49 16 V21"
          stroke="#FCD34D"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>

      <div className="flex flex-col leading-tight">
        <span className={`font-heading font-bold ${s.name} ${textColor} tracking-tight`}>
          P.R. Rajagopala Iyengar
        </span>
        <span className={`font-body font-semibold ${subColor} tracking-[0.22em] uppercase`} style={{ fontSize: '0.62rem' }}>
          &amp; SONS
        </span>
        <span className={`font-body ${s.tag} ${tagColor} tracking-wide uppercase`} style={{ fontSize: '0.58rem' }}>
          Est. 1957 · Electrical · Plumbing · Pumps
        </span>
      </div>
    </div>
  )
}
