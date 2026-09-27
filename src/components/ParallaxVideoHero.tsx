'use client';

import Image from 'next/image';
import {useLocale} from 'next-intl';
import {useEffect, useRef, useState, type CSSProperties} from 'react';
import {ArrowRight, ChatCircle, SquaresFour, Code, Database, Brain, Cloud, Lightning, LinkSimple, ChartBar, Briefcase, ShieldCheck, Article, Users, Microphone, Pause, Play} from '@phosphor-icons/react';
import {Link} from '@/i18n/navigation';
import './hero.css';

type Props = {videoSrc: string; photoSrc: string};

export default function ParallaxVideoHero({photoSrc}: Props) {
  const en = useLocale() === 'en';
  const [paused, setPaused] = useState(false);
  const root = useRef<HTMLElement>(null);
  const scene = useRef<HTMLDivElement>(null);
  const backdrop = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = root.current;
    const visual = scene.current;
    const background = backdrop.current;
    if (!element || !visual || !background) return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let pointerFrame = 0;
    let scrollFrame = 0;
    const resetPointer = () => {
      cancelAnimationFrame(pointerFrame);
      visual.style.setProperty('--pointer-x', '0px');
      visual.style.setProperty('--pointer-y', '0px');
      background.style.setProperty('--bg-pointer-x', '0px');
      background.style.setProperty('--bg-pointer-y', '0px');
    };
    const move = (event: PointerEvent) => {
      if (paused || media.matches || event.pointerType !== 'mouse') return;
      cancelAnimationFrame(pointerFrame);
      pointerFrame = requestAnimationFrame(() => {
        const box = element.getBoundingClientRect();
        const x = (event.clientX - box.left) / box.width - .5;
        const y = (event.clientY - box.top) / box.height - .5;
        visual.style.setProperty('--pointer-x', `${x * 14}px`);
        visual.style.setProperty('--pointer-y', `${y * 10}px`);
        background.style.setProperty('--bg-pointer-x', `${x * -24}px`);
        background.style.setProperty('--bg-pointer-y', `${y * -12}px`);
      });
    };
    const updateScroll = () => {
      if (paused || media.matches) return;
      cancelAnimationFrame(scrollFrame);
      scrollFrame = requestAnimationFrame(() => {
        const box = element.getBoundingClientRect();
        const distance = Math.max(1, box.height - window.innerHeight * .25);
        const progress = Math.min(1, Math.max(0, -box.top / distance));
        background.style.setProperty('--bg-scroll-y', `${progress * 105}px`);
      });
    };
    const resetMotion = () => {
      resetPointer();
      background.style.setProperty('--bg-scroll-y', '0px');
    };
    resetMotion();
    updateScroll();
    element.addEventListener('pointermove', move);
    element.addEventListener('pointerleave', resetPointer);
    window.addEventListener('scroll', updateScroll, {passive: true});
    window.addEventListener('resize', updateScroll);
    media.addEventListener('change', resetMotion);
    return () => {
      cancelAnimationFrame(pointerFrame);
      cancelAnimationFrame(scrollFrame);
      element.removeEventListener('pointermove', move);
      element.removeEventListener('pointerleave', resetPointer);
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', updateScroll);
      media.removeEventListener('change', resetMotion);
    };
  }, [paused]);

  const nodes = [
    {label:'Apps', Icon:SquaresFour}, {label:'APIs', Icon:Code}, {label:'Events', Icon:Lightning},
    {label:'Data', Icon:Database}, {label:'AI', Icon:Brain}, {label:'Azure', Icon:Cloud},
  ];
  const stack = [
    {label:'Azure', Icon:Cloud}, {label:'Power Platform', Icon:Lightning},
    {label:en ? 'AI & Agents' : 'IA & Agentes', Icon:Brain},
    {label:'Data & Fabric', Icon:ChartBar}, {label:en ? 'Integration' : 'Integração', Icon:LinkSimple},
  ];
  const stats = [
    {Icon:Briefcase, value:en ? '5+ years' : '5+ anos', detail:en ? 'enterprise solutions' : 'soluções enterprise'},
    {Icon:ShieldCheck, value:en ? '8 certifications' : '8 certificações', detail:'Microsoft'},
    {Icon:Article, value:en ? '17 articles' : '17 artigos', detail:en ? 'published' : 'publicados'},
    {Icon:Users, value:en ? 'Community' : 'Comunidade', detail:en ? 'Newsletter & talks' : 'Newsletter & palestras'},
  ];

  return (
    <section ref={root} className={`tech-hero${paused ? ' is-paused' : ''}`} aria-labelledby="hero-title">
      <div ref={backdrop} className="tech-hero-backdrop-layer" aria-hidden="true">
        <Image src="/images/hero-city.webp" alt="" fill priority sizes="110vw" className="tech-hero-backdrop" />
        <div className="tech-hero-depth-glow" />
      </div>
      <div className="tech-hero-shade" aria-hidden="true" />
      <div className="tech-hero-inner">
        <div className="tech-hero-main">
          <div className="tech-hero-copy">
            <p className="tech-eyebrow hero-reveal">AZURE · POWER PLATFORM · DATA · AI</p>
            <h1 id="hero-title" className="hero-reveal hero-delay-1">
              {en ? 'Architecture that turns complexity' : 'Arquitetura que transforma complexidade'}
              <span>{en ? 'into scale.' : 'em escala.'}</span>
            </h1>
            <p className="tech-hero-description hero-reveal hero-delay-2">
              {en
                ? 'I design enterprise solutions connecting applications, data, automation, AI and integrations. From architecture to production.'
                : 'Desenho soluções enterprise conectando aplicações, dados, automação, IA e integrações, da arquitetura à produção.'}
            </p>
            <div className="tech-hero-actions hero-reveal hero-delay-3">
              <Link href="/projects" className="tech-button tech-button-primary"><ArrowRight size={25} aria-hidden="true" />{en ? 'Explore projects' : 'Explorar projetos'}</Link>
              <Link href="/contact" className="tech-button tech-button-secondary"><ChatCircle size={26} aria-hidden="true" />{en ? 'Let’s talk' : 'Falar comigo'}</Link>
            </div>
            <ul className="tech-stack hero-reveal hero-delay-4" aria-label={en ? 'Expertise' : 'Especialidades'}>
              {stack.map(({label, Icon}) => <li key={label}><Icon size={23} weight="duotone" aria-hidden="true" />{label}</li>)}
            </ul>
          </div>
          <div className="tech-visual hero-reveal hero-delay-2">
            <div ref={scene} className="tech-scene">
              <div className="tech-portrait-border">
                <div className="tech-portrait">
                  <Image src={photoSrc} alt={en ? 'Tom Kelve speaking at Microsoft Reactor' : 'Tom Kelve palestrando no Microsoft Reactor'} fill priority sizes="(min-width: 1100px) 430px, (min-width: 700px) 380px, 75vw" className="tech-portrait-image" />
                </div>
              </div>
              {nodes.map(({label, Icon}, index) => (
                <div key={label} className={`tech-node tech-node-${index}`} style={{'--node-delay': `${index * -.7}s`} as CSSProperties}>
                  <Icon size={32} weight="duotone" aria-hidden="true" /><span>{label}</span>
                </div>
              ))}
              <div className="tech-speaker"><Microphone size={23} aria-hidden="true" /><span>{en ? 'Speaker' : 'Palestrante'}<span className="tech-speaker-separator"> · </span>Microsoft Reactor</span></div>
            </div>
            <p className="tech-signature">{en ? 'Technology. Real impact.' : 'Tecnologia que gera impacto real.'}</p>
          </div>
        </div>
        <div className="tech-stats hero-reveal hero-delay-4">
          {stats.map(({Icon, value, detail}) => <div className="tech-stat" key={value}><Icon size={42} weight="light" aria-hidden="true" /><div><strong>{value}</strong><span>{detail}</span></div></div>)}
        </div>
        <div className="tech-hero-bottom">
          <a href="#about" className="tech-discover">{en ? 'Discover my work' : 'Conheça minha trajetória'}<ArrowRight size={16} aria-hidden="true" /></a>
          <button type="button" className="tech-motion-toggle" onClick={() => setPaused(!paused)} aria-pressed={paused}>
            {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
            {paused ? (en ? 'Resume animations' : 'Ativar animações') : (en ? 'Pause animations' : 'Pausar animações')}
          </button>
        </div>
      </div>
    </section>
  );
}
