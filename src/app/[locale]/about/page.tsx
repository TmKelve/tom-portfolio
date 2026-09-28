import Image from 'next/image';
import type {Metadata} from 'next';
import type {ReactNode} from 'react';
import {setRequestLocale} from 'next-intl/server';

import {Link} from '@/i18n/navigation';
import ScrollReveal from '@/components/ScrollReveal';
import {career, type Locale} from '@/content/career';
import './about.css';

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const en = locale === 'en';

  return {
    title: en ? 'About' : 'Sobre',
    description: en
      ? 'Tom Kelve, Azure & Power Platform Solution Architect. Enterprise architecture, integration, automation, data and AI from blueprint to production.'
      : 'Tom Kelve, Arquiteto de Soluções Azure & Power Platform. Arquitetura enterprise, integração, automação, dados e IA do blueprint à produção.',
    alternates: {
      canonical: 'https://tomkelve.com/' + locale + '/about',
      languages: {'pt-BR': '/pt-br/about', en: '/en/about'},
    },
  };
}

const principles = {
  'pt-br': [
    {
      number: '01',
      title: 'Entender antes de desenhar',
      description:
        'Arquitetura começa no contexto. Antes da tecnologia, eu procuro entender o fluxo, as restrições, os riscos e o que realmente precisa mudar.',
    },
    {
      number: '02',
      title: 'Arquitetura precisa sobreviver à produção',
      description:
        'Não considero o trabalho concluído no diagrama. Implementação, observabilidade, segurança, operação e evolução fazem parte da arquitetura.',
    },
    {
      number: '03',
      title: 'Governança deve nascer com a solução',
      description:
        'ALM, identidade, RBAC, DLP, contratos e padrões de integração entram no desenho desde o início, não como remendo depois do go-live.',
    },
    {
      number: '04',
      title: 'Falha controlada é parte do design',
      description:
        'Retries, idempotência, DLQ, rastreabilidade e reprocessamento são escolhas arquiteturais. Sistemas maduros não fingem que falhas não existem.',
    },
  ],
  en: [
    {
      number: '01',
      title: 'Understand before designing',
      description:
        'Architecture starts with context. Before technology, I work to understand the flow, constraints, risks and what actually needs to change.',
    },
    {
      number: '02',
      title: 'Architecture must survive production',
      description:
        'I do not consider the work done at the diagram. Implementation, observability, security, operations and evolution are part of the architecture.',
    },
    {
      number: '03',
      title: 'Governance should start with the solution',
      description:
        'ALM, identity, RBAC, DLP, contracts and integration standards belong in the initial design, not as a patch after go-live.',
    },
    {
      number: '04',
      title: 'Controlled failure is part of the design',
      description:
        'Retries, idempotency, DLQ, traceability and reprocessing are architectural choices. Mature systems do not pretend failures do not exist.',
    },
  ],
};

const domains = {
  'pt-br': [
    {
      title: 'Cloud & Integração',
      description: 'Arquiteturas API-first e event-driven para fluxos enterprise críticos.',
      stack: ['AKS', 'Service Bus', 'Functions', 'Logic Apps', 'APIM / APISIX', 'Key Vault'],
    },
    {
      title: 'Power Platform',
      description: 'Produtos digitais, automação e governança conectando negócio e engenharia.',
      stack: ['Power Apps', 'Power Automate', 'Power Pages', 'Dataverse', 'Copilot Studio', 'ALM'],
    },
    {
      title: 'Data & IA',
      description: 'Dados confiáveis e IA aplicada com contexto, segurança e rastreabilidade.',
      stack: ['Power BI', 'Fabric', 'Azure OpenAI', 'AI Builder', 'AI Foundry', 'Semantic Models'],
    },
  ],
  en: [
    {
      title: 'Cloud & Integration',
      description: 'API-first and event-driven architectures for critical enterprise flows.',
      stack: ['AKS', 'Service Bus', 'Functions', 'Logic Apps', 'APIM / APISIX', 'Key Vault'],
    },
    {
      title: 'Power Platform',
      description: 'Digital products, automation and governance connecting business and engineering.',
      stack: ['Power Apps', 'Power Automate', 'Power Pages', 'Dataverse', 'Copilot Studio', 'ALM'],
    },
    {
      title: 'Data & AI',
      description: 'Trusted data and applied AI with context, security and traceability.',
      stack: ['Power BI', 'Fabric', 'Azure OpenAI', 'AI Builder', 'AI Foundry', 'Semantic Models'],
    },
  ],
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);

  const l = (locale === 'en' ? 'en' : 'pt-br') as Locale;
  const en = l === 'en';
  const current = career[0];
  const recentCareer = career.slice(0, 3);

  return (
    <FullBleed>
      <main className="about-page">
        <section className="about-hero">
          <div className="about-grid" aria-hidden="true" />
          <div className="about-glow about-glow-one" aria-hidden="true" />
          <div className="about-glow about-glow-two" aria-hidden="true" />

          <div className="about-container about-hero-grid">
            <ScrollReveal className="about-hero-copy" direction="left" glow>
              <p className="about-kicker">{en ? 'ABOUT' : 'SOBRE'}</p>
              <h1>
                {en ? (
                  <>
                    I connect context,
                    <span>technology and operation.</span>
                  </>
                ) : (
                  <>
                    Conecto contexto,
                    <span>tecnologia e operação.</span>
                  </>
                )}
              </h1>
              <p className="about-lead">
                {en
                  ? 'I am a hands-on Solution Architect working across Azure, Power Platform, Data and AI. My focus is turning complex business flows into architectures that can be implemented, observed and evolved.'
                  : 'Sou Arquiteto de Soluções hands-on atuando entre Azure, Power Platform, Dados e IA. Meu foco é transformar fluxos complexos de negócio em arquiteturas que possam ser implementadas, observadas e evoluídas.'}
              </p>
              <p className="about-sublead">
                {en
                  ? 'I move between architecture and execution, from discovery and blueprint to integration, go-live and production reliability.'
                  : 'Transito entre arquitetura e execução, do discovery e blueprint à integração, go-live e confiabilidade em produção.'}
              </p>

              <div className="about-hero-actions">
                <Link href="/projects" className="about-primary-button">
                  {en ? 'Explore projects' : 'Explorar projetos'}
                  <Arrow />
                </Link>
                <Link href="/career" className="about-secondary-button">
                  {en ? 'View full career' : 'Ver carreira completa'}
                </Link>
              </div>

              <div className="about-proof-row">
                <Proof value="5+" label={en ? 'years in enterprise solutions' : 'anos em soluções enterprise'} />
                <Proof value="8" label={en ? 'Microsoft certifications' : 'certificações Microsoft'} />
                <Proof value="17" label={en ? 'published articles' : 'artigos publicados'} />
              </div>
            </ScrollReveal>

            <ScrollReveal className="about-portrait-shell" direction="right" delay={120}>
              <div className="about-portrait-orbit" aria-hidden="true">
                <span />
                <span />
              </div>
              <div className="about-portrait-frame">
                <Image
                  src="/images/me-about.jpg"
                  alt={en ? 'Tom Kelve' : 'Tom Kelve'}
                  fill
                  priority
                  sizes="(min-width: 1000px) 42vw, 90vw"
                  className="about-portrait-image"
                />
                <div className="about-portrait-shade" />
              </div>

              <div className="about-current-role">
                <span className="about-role-status" aria-hidden="true" />
                <div>
                  <span>{en ? 'Currently' : 'Atualmente'}</span>
                  <strong>{current.title[l]}</strong>
                  <small>{current.company}</small>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="about-section about-section-soft">
          <div className="about-container about-story-grid">
            <ScrollReveal direction="left">
              <SectionIntro
                kicker={en ? 'HOW I OPERATE' : 'COMO EU ATUO'}
                title={en ? 'Architecture is a delivery discipline.' : 'Arquitetura é uma disciplina de entrega.'}
              />
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              <div className="about-story-copy">
                <p>
                  {en
                    ? 'My work lives in the space between business complexity and technical execution. I help translate critical flows into clear boundaries, contracts, events, APIs, automation and operational controls.'
                    : 'Meu trabalho acontece no espaço entre a complexidade do negócio e a execução técnica. Ajudo a traduzir fluxos críticos em limites claros, contratos, eventos, APIs, automação e controles operacionais.'}
                </p>
                <p>
                  {en
                    ? 'That means being comfortable discussing architecture with leadership, reviewing implementation with engineers and following the solution until production behavior matches the intent of the design.'
                    : 'Isso significa conversar sobre arquitetura com liderança, revisar implementação com engenharia e acompanhar a solução até que o comportamento em produção esteja alinhado ao desenho.'}
                </p>

                <div className="about-current-focus">
                  <span>{en ? 'Current focus' : 'Foco atual'}</span>
                  <strong>{current.company}</strong>
                  <ul>
                    {current.highlights.short[l].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="about-section">
          <div className="about-container">
            <ScrollReveal glow>
              <SectionIntro
                kicker={en ? 'TECHNICAL SURFACE' : 'SUPERFÍCIE TÉCNICA'}
                title={en ? 'Different platforms. One architecture.' : 'Plataformas diferentes. Uma arquitetura.'}
                description={
                  en
                    ? 'The stack changes. The principles of integration, security, observability and operability do not.'
                    : 'A stack muda. Os princípios de integração, segurança, observabilidade e operabilidade não.'
                }
              />
            </ScrollReveal>

            <div className="about-domain-list">
              {domains[l].map((domain, index) => (
                <ScrollReveal key={domain.title} delay={index * 110} direction="up">
                  <article className="about-domain-row">
                    <span className="about-domain-index">0{index + 1}</span>
                    <div className="about-domain-copy">
                      <h3>{domain.title}</h3>
                      <p>{domain.description}</p>
                    </div>
                    <div className="about-domain-stack">
                      {domain.stack.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section about-section-soft">
          <div className="about-container about-principles-layout">
            <ScrollReveal className="about-principles-heading" direction="left" glow>
              <SectionIntro
                kicker={en ? 'HOW I THINK' : 'COMO EU PENSO'}
                title={en ? 'Principles before patterns.' : 'Princípios antes de padrões.'}
                description={
                  en
                    ? 'Technology decisions make more sense when the principles behind them are explicit.'
                    : 'Decisões de tecnologia fazem mais sentido quando os princípios por trás delas estão explícitos.'
                }
              />
            </ScrollReveal>

            <div className="about-principles">
              {principles[l].map((principle, index) => (
                <ScrollReveal key={principle.number} delay={index * 100} direction="right">
                  <article className="about-principle">
                    <span>{principle.number}</span>
                    <div>
                      <h3>{principle.title}</h3>
                      <p>{principle.description}</p>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="about-container">
            <ScrollReveal glow>
              <div className="about-career-header">
                <SectionIntro
                  kicker={en ? 'TRAJECTORY' : 'TRAJETÓRIA'}
                  title={en ? 'A path toward architecture.' : 'Uma trajetória em direção à arquitetura.'}
                  description={
                    en
                      ? 'A condensed view of the most recent chapters. The complete history remains available for those who want the details.'
                      : 'Uma visão condensada dos capítulos mais recentes. O histórico completo continua disponível para quem quiser os detalhes.'
                  }
                />
                <Link href="/career" className="about-inline-link">
                  {en ? 'Full career' : 'Carreira completa'} <Arrow />
                </Link>
              </div>
            </ScrollReveal>

            <div className="about-career-list">
              {recentCareer.map((item, index) => (
                <ScrollReveal key={item.id} delay={index * 110} direction="up">
                  <article className="about-career-item">
                    <div className="about-career-period">{item.range[l]}</div>
                    <div className="about-career-main">
                      <h3>{item.title[l]}</h3>
                      <p>{item.company}</p>
                      <div className="about-career-tags">
                        {item.tags?.slice(0, 5).map((tag) => <span key={tag}>{tag}</span>)}
                      </div>
                    </div>
                    <span className="about-career-number">0{index + 1}</span>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section about-final-section">
          <div className="about-container">
            <ScrollReveal direction="up" glow>
              <div className="about-final-card">
                <div>
                  <p className="about-kicker">{en ? 'KEEP EXPLORING' : 'CONTINUE EXPLORANDO'}</p>
                  <h2>{en ? 'The résumé is only one layer.' : 'O currículo é só uma camada.'}</h2>
                  <p>
                    {en
                      ? 'Projects show the architecture in context. Certifications show the formal foundation. The conversation connects both.'
                      : 'Os projetos mostram a arquitetura em contexto. As certificações mostram a base formal. A conversa conecta os dois.'}
                  </p>
                </div>
                <div className="about-final-actions">
                  <Link href="/projects" className="about-primary-button">
                    {en ? 'View projects' : 'Ver projetos'} <Arrow />
                  </Link>
                  <Link href="/certifications" className="about-secondary-button">
                    {en ? 'Certifications' : 'Certificações'}
                  </Link>
                  <Link href="/contact" className="about-text-button">
                    {en ? 'Contact' : 'Contato'} <Arrow />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </FullBleed>
  );
}

function Proof({value, label}: {value: string; label: string}) {
  return (
    <div className="about-proof">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function SectionIntro({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="about-section-intro">
      <p className="about-kicker">{kicker}</p>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

function FullBleed({children}: {children: ReactNode}) {
  return (
    <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
      {children}
    </div>
  );
}
