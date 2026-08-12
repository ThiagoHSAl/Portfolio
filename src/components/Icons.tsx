type IconProps = { className?: string }

/** Ícones inline em `currentColor`: nada de fonte de ícones ou requisição externa. */
function base(className = 'size-5') {
  return {
    className,
    viewBox: '0 0 24 24',
    fill: 'none' as const,
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }
}

export function GithubIcon({ className = 'size-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.73.5.9 5.48.9 11.94c0 5.17 3.29 9.55 7.86 11.1.57.1.78-.26.78-.57v-2c-3.2.71-3.88-1.58-3.88-1.58-.52-1.37-1.28-1.73-1.28-1.73-1.05-.74.08-.72.08-.72 1.16.08 1.77 1.23 1.77 1.23 1.03 1.82 2.7 1.3 3.36 1 .1-.78.4-1.3.73-1.6-2.56-.3-5.25-1.32-5.25-5.85 0-1.3.44-2.36 1.17-3.19-.12-.3-.51-1.51.11-3.15 0 0 .96-.31 3.15 1.22a10.7 10.7 0 0 1 5.74 0c2.18-1.53 3.14-1.22 3.14-1.22.62 1.64.23 2.85.11 3.15.73.83 1.17 1.89 1.17 3.19 0 4.54-2.7 5.54-5.27 5.84.42.37.79 1.1.79 2.22v3.29c0 .32.2.69.79.57 4.57-1.56 7.85-5.93 7.85-11.1C23.1 5.48 18.27.5 12 .5Z" />
    </svg>
  )
}

export function LinkedinIcon({ className = 'size-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .78 0 1.74v20.52C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0Z" />
    </svg>
  )
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3 7 8.2 5.6a1.4 1.4 0 0 0 1.6 0L21 7" />
    </svg>
  )
}

export function SunIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
    </svg>
  )
}

export function MoonIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M20.5 14.3A8.5 8.5 0 0 1 9.7 3.5a8.5 8.5 0 1 0 10.8 10.8Z" />
    </svg>
  )
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export function ArrowUpRightIcon({ className = 'size-4' }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  )
}

export function ArrowRightIcon({ className = 'size-4' }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  )
}

export function FileTextIcon({ className = 'size-4' }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </svg>
  )
}

export function GlobeIcon({ className = 'size-4' }: IconProps) {
  return (
    <svg {...base(className)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 9h17M3.5 15h17" />
      <path d="M12 3c2.4 2.4 3.6 5.4 3.6 9s-1.2 6.6-3.6 9c-2.4-2.4-3.6-5.4-3.6-9S9.6 5.4 12 3Z" />
    </svg>
  )
}

export function ServerIcon({ className = 'size-4' }: IconProps) {
  return (
    <svg {...base(className)}>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </svg>
  )
}

/** Retículo de detecção, usado como marca das seções de percepção visual. */
export function TargetIcon({ className = 'size-6' }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M4 8V4h4M16 4h4v4M20 16v4h-4M8 20H4v-4" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  )
}

export function DroneIcon({ className = 'size-6' }: IconProps) {
  return (
    <svg {...base(className)}>
      <rect x="9" y="9" width="6" height="6" rx="1.5" />
      <path d="M9 9 5.5 5.5M15 9l3.5-3.5M9 15l-3.5 3.5M15 15l3.5 3.5" />
      <circle cx="4" cy="4" r="2" />
      <circle cx="20" cy="4" r="2" />
      <circle cx="4" cy="20" r="2" />
      <circle cx="20" cy="20" r="2" />
    </svg>
  )
}

export function SparkIcon({ className = 'size-6' }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z" />
      <path d="M18.5 16.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z" />
    </svg>
  )
}

export function CheckIcon({ className = 'size-4' }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  )
}
