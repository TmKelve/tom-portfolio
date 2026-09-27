import MicrosoftLogo from './MicrosoftLogo';

export type Certification = {
  title: string;
  issued: string;
  issuer?: string;
  code?: string;
  skills?: string;
};

type Props = {
  cert: Certification;
  variant?: 'light' | 'glass';
};

function getInitials(name?: string) {
  const s = (name ?? '').trim();
  if (!s) return '•';
  const parts = s.replace(/\(.*?\)/g, '').split(/[\s/|,-]+/g).filter(Boolean);
  const a = parts[0]?.[0] ?? '•';
  const b = parts[1]?.[0] ?? parts[0]?.[1] ?? '';
  return (a + b).toUpperCase();
}

function IssuerBadge({issuer, variant}: {issuer?: string; variant: 'light' | 'glass'}) {
  const isMicrosoft = (issuer ?? '').toLowerCase().includes('microsoft');

  if (isMicrosoft) {
    return (
      <div className={`h-9 w-9 rounded-xl flex items-center justify-center shrink-0
        ${variant === 'glass' ? 'bg-white/10 ring-1 ring-white/15' : 'bg-white border border-zinc-200'}`}>
        <MicrosoftLogo size={18} />
      </div>
    );
  }

  const initials = getInitials(issuer);
  const glassColors: Record<string, string> = {
    'FIAP':     'bg-red-500/20 ring-red-400/30 text-red-300',
    'IBM':      'bg-blue-500/20 ring-blue-400/30 text-blue-300',
    'LinkedIn': 'bg-sky-500/20 ring-sky-400/30 text-sky-300',
    'Coursera': 'bg-violet-500/20 ring-violet-400/30 text-violet-300',
    'Prosperi': 'bg-pink-500/20 ring-pink-400/30 text-pink-300',
  };
  const lightColors: Record<string, string> = {
    'FIAP':     'bg-red-50 border-red-200 text-red-600',
    'IBM':      'bg-blue-50 border-blue-200 text-blue-600',
    'LinkedIn': 'bg-sky-50 border-sky-200 text-sky-600',
    'Coursera': 'bg-violet-50 border-violet-200 text-violet-600',
    'Prosperi': 'bg-pink-50 border-pink-200 text-pink-600',
  };

  const key = Object.keys(glassColors).find(k => (issuer ?? '').includes(k)) ?? '';
  const colorClass = variant === 'glass'
    ? (glassColors[key] ?? 'bg-white/10 ring-white/15 text-white/80')
    : (lightColors[key] ?? 'bg-zinc-50 border-zinc-200 text-zinc-600');

  return (
    <div className={`h-9 w-9 rounded-xl flex items-center justify-center shrink-0 text-[10px] font-bold ring-1
      ${variant === 'glass' ? colorClass : `border ${colorClass}`}`}
      title={issuer}
      aria-hidden
    >
      {initials}
    </div>
  );
}

export default function CertificationCard({cert, variant = 'light'}: Props) {
  const issuer = cert.issuer ?? 'Microsoft';

  const rootClass = variant === 'glass'
    ? 'group rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm transition duration-200 hover:bg-white/[0.08] hover:border-white/18'
    : 'group rounded-2xl border border-zinc-100 bg-white p-5 transition hover:border-zinc-200 hover:shadow-sm';

  const titleClass  = variant === 'glass' ? 'text-white/95'   : 'text-zinc-950';
  const issuerClass = variant === 'glass' ? 'text-white/50'   : 'text-zinc-400';
  const bodyClass   = variant === 'glass' ? 'text-white/60'   : 'text-zinc-500';
  const labelClass  = variant === 'glass' ? 'text-white/80'   : 'text-zinc-700';

  return (
    <div className={rootClass}>
      <div className="flex items-start gap-3">
        <IssuerBadge issuer={issuer} variant={variant} />

        <div className="min-w-0 flex-1 space-y-1.5">
          <p className={`text-sm font-semibold leading-snug ${titleClass}`}>{cert.title}</p>
          <p className={`text-xs ${issuerClass}`}>{issuer}</p>

          <div className={`pt-1 space-y-0.5 text-xs ${bodyClass}`}>
            <p>
              <span className={`font-medium ${labelClass}`}>Emitida em:</span>{' '}{cert.issued}
            </p>
            {cert.code && (
              <p className="truncate">
                <span className={`font-medium ${labelClass}`}>Código:</span>{' '}{cert.code}
              </p>
            )}
            {cert.skills && (
              <p>
                <span className={`font-medium ${labelClass}`}>Competências:</span>{' '}{cert.skills}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
