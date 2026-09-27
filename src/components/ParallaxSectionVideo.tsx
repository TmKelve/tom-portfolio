'use client';

import {useEffect, useRef} from 'react';

type Props = {
  videoSrc: string;                 // ex: "/media/digirtal-diferenciais.mp4"
  className?: string;               // classes do <section>
  overlayClassName?: string;        // overlay para contraste
  children: React.ReactNode;
};

export default function ParallaxSectionVideo({
  videoSrc,
  className = '',
  overlayClassName = '',
  children
}: Props) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const reducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) return;

    let ticking = false;

    const update = () => {
      if (!sectionRef.current || !videoRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportH = window.innerHeight;

      // Parallax de velocidade constante: quanto o topo da seção saiu do viewport
      // Funciona bem tanto em seções curtas quanto longas
      const offset = viewportH - rect.top; // positivo quando a seção entrou na viewport
      const translateY = Math.max(0, offset * 0.18); // 0.18 = 18% da distância percorrida
      videoRef.current.style.transform = `translate3d(0, ${translateY}px, 0) scale(1.12)`;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    update();
    window.addEventListener('scroll', onScroll, {passive: true});
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover will-change-transform pointer-events-none"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Overlay base (para dar contraste no texto) */}
      <div className={`absolute inset-0 ${overlayClassName}`} />

      {/* Conteúdo */}
      <div className="relative">{children}</div>
    </section>
  );
}