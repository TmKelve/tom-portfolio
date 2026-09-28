'use client';

import {useEffect, useRef, useState, type CSSProperties, type ReactNode} from 'react';
import './scroll-reveal.css';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  glow?: boolean;
  once?: boolean;
};

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  distance = 28,
  direction = 'up',
  glow = false,
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setVisible(false);
        }
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once]);

  const style = {
    '--reveal-delay': `${delay}ms`,
    '--reveal-distance': `${distance}px`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      style={style}
      data-visible={visible ? 'true' : 'false'}
      data-direction={direction}
      className={`scroll-reveal${glow ? ' scroll-reveal-glow' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
