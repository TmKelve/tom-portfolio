'use client';

import Image from 'next/image';
import {companyLogos} from '@/content/companyLogos';

type Props = {
  title?: string;
  subtitle?: string;
  speedSeconds?: number;
};

export default function CompanyLogoMarquee({
  title,
  subtitle,
  speedSeconds = 28
}: Props) {
  const track = [...companyLogos, ...companyLogos];

  return (
    <section className="mt-10">
      <div className="mx-auto max-w-6xl px-4">
        {(title || subtitle) && (
          <div className="flex flex-col gap-1">
            {title && (
              <h3 className="text-sm font-semibold tracking-wide text-zinc-900">
                {title}
              </h3>
            )}
            {subtitle && <p className="text-sm text-zinc-600">{subtitle}</p>}
          </div>
        )}
      </div>

      <div className="mt-5 border-y border-black/10 bg-white/70">
        {/* ✅ group aqui para pausar e liberar grayscale no hover */}
        <div className="group mask-fade-x overflow-hidden">
          <div
            className="flex w-max items-center gap-12 py-6 pr-12 animate-marquee
                       group-hover:[animation-play-state:paused]
                       motion-reduce:animate-none motion-reduce:overflow-x-auto motion-reduce:pr-0"
            style={{animationDuration: `${speedSeconds}s`}}
            aria-label="Galeria de logos de empresas"
          >
            {track.map((item, idx) => (
              <div
                key={`${item.name}-${idx}`}
                className="flex items-center"
                title={`${item.name} • ${item.sector}`}
              >
                <div className="relative h-10 w-[140px] sm:w-[160px]">
                  <Image
                    src={item.src}
                    alt={item.name}
                    fill
                    className="object-contain opacity-70 grayscale transition
                               group-hover:grayscale-0 hover:opacity-100"
                    priority={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}