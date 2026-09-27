import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ParallaxSectionVideo from "@/components/ParallaxSectionVideo";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  const title = isEn ? "Platform" : "Plataforma";
  const description = isEn
    ? "Power Platform, Power BI/Fabric, and Azure AI Foundry — from blueprint to go-live with real governance, ALM, and end-to-end observability."
    : "Power Platform, Power BI/Fabric e Azure AI Foundry — do blueprint ao go-live com governança real, ALM e observabilidade ponta a ponta.";
  return {
    title,
    description,
    alternates: { canonical: `https://tomkelve.com/${locale}/platform` },
    openGraph: {
      title: `${title} | Tom Kelve`,
      description,
      images: [
        {
          url: `/og?title=Power+Platform+%26+Azure+AI+Foundry&subtitle=tomkelve.com&tag=Platform+Architecture`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

// ── Dados ──────────────────────────────────────────────────────────────────

const areas = {
  "pt-br": [
    {
      icon: "⚡",
      title: "Power Platform",
      subtitle: "Apps · Automate · Pages · Copilot Studio · Dataverse",
      desc: "Construo apps corporativos (Canvas e Model-driven) com Dataverse, fluxos de aprovação e orquestração com Power Automate, portais externos com Power Pages e agentes/copilots conectados ao ecossistema com Copilot Studio.",
      highlights: [
        "Apps Canvas e Model-driven com Dataverse, componentes reutilizáveis e UX orientada a processo",
        "Cloud flows, approvals e integrações com APIs, webhooks e Service Bus",
        "Portais externos com autenticação, roles e segurança no Dataverse",
        "Copilots e agentes com tópicos, handoff humano e integração ao ecossistema",
        "Governança CoE: ambientes, DLP, ALM e CI/CD com Azure DevOps",
      ],
    },
    {
      icon: "📊",
      title: "Power BI / Fabric",
      subtitle: "Modelagem · DAX · Semântica · Fabric · RLS",
      desc: "Projeto e implemento camadas semânticas corporativas no Power BI e Microsoft Fabric, com modelagem star schema, DAX performático, RLS granular e dashboards orientados à decisão — conectando ingestão, transformação e consumo.",
      highlights: [
        "Modelagem star schema, relacionamentos e tabela de datas padronizada",
        "DAX com variáveis, medidas certificadas e padrões YTD/rolling/ranking",
        "Camadas semânticas reutilizáveis com métricas únicas e governadas",
        "RLS por perfil, hierarquia e tenant em datasets corporativos",
        "Microsoft Fabric: Lakehouse, pipelines e integração com Azure Data",
      ],
    },
    {
      icon: "🤖",
      title: "Azure AI Foundry",
      subtitle: "OpenAI · AI Builder · Agentes · RAG · Copilot",
      desc: "Implemento IA aplicada com rastreabilidade e governança: modelos Azure OpenAI conectados a dados internos via RAG, automações com AI Builder, agentes autônomos com Copilot Studio e pipelines de IA integrados ao Azure.",
      highlights: [
        "Azure OpenAI (GPT-4/turbo) com RAG sobre dados internos (Azure AI Search)",
        "AI Builder: processamento de documentos, predição e análise de sentimento",
        "Agentes autônomos com Copilot Studio e ações conectadas ao Dataverse/APIs",
        "Políticas de conteúdo, rastreabilidade de prompts e auditoria",
        "Azure AI Foundry: orquestração de modelos, avaliação e deployment controlado",
      ],
    },
  ],
  en: [
    {
      icon: "⚡",
      title: "Power Platform",
      subtitle: "Apps · Automate · Pages · Copilot Studio · Dataverse",
      desc: "I build enterprise apps (Canvas and Model-driven) with Dataverse, approval flows and orchestration with Power Automate, external portals with Power Pages, and agents/copilots connected to the ecosystem with Copilot Studio.",
      highlights: [
        "Canvas and Model-driven apps with Dataverse, reusable components, and process-driven UX",
        "Cloud flows, approvals, and integrations with APIs, webhooks, and Service Bus",
        "External portals with authentication, roles, and Dataverse security",
        "Copilots and agents with topics, human handoff, and ecosystem integration",
        "CoE governance: environments, DLP, ALM, and CI/CD with Azure DevOps",
      ],
    },
    {
      icon: "📊",
      title: "Power BI / Fabric",
      subtitle: "Modeling · DAX · Semantic Layer · Fabric · RLS",
      desc: "I design and implement enterprise semantic layers in Power BI and Microsoft Fabric, with star schema modeling, performant DAX, granular RLS, and decision-oriented dashboards — connecting ingestion, transformation, and consumption.",
      highlights: [
        "Star schema modeling, relationships, and standardized date tables",
        "DAX with variables, certified measures, and YTD/rolling/ranking patterns",
        "Reusable semantic layers with governed, unique metrics",
        "RLS by profile, hierarchy, and tenant in enterprise datasets",
        "Microsoft Fabric: Lakehouse, pipelines, and Azure Data integration",
      ],
    },
    {
      icon: "🤖",
      title: "Azure AI Foundry",
      subtitle: "OpenAI · AI Builder · Agents · RAG · Copilot",
      desc: "I implement applied AI with traceability and governance: Azure OpenAI models connected to internal data via RAG, automations with AI Builder, autonomous agents with Copilot Studio, and AI pipelines integrated with Azure.",
      highlights: [
        "Azure OpenAI (GPT-4/turbo) with RAG over internal data (Azure AI Search)",
        "AI Builder: document processing, prediction, and sentiment analysis",
        "Autonomous agents with Copilot Studio and actions connected to Dataverse/APIs",
        "Content policies, prompt traceability, and auditing",
        "Azure AI Foundry: model orchestration, evaluation, and controlled deployment",
      ],
    },
  ],
};

const methodology = {
  "pt-br": [
    { step: "01", title: "CoE & Guardrails", desc: "Centro de Excelência com políticas DLP, grupos de segurança, conectores aprovados e catálogo de padrões antes de qualquer desenvolvimento." },
    { step: "02", title: "Ambientes & ALM", desc: "Estratégia dev / test / prod com promoção controlada via pipelines (Azure DevOps ou GitHub Actions). Nenhum deploy manual em produção." },
    { step: "03", title: "Governança de Dados", desc: "Dataverse com tabelas, relacionamentos e permissões definidas no blueprint. Power BI com semantic layer central, métricas certificadas e RLS granular." },
    { step: "04", title: "Observabilidade", desc: "Logs estruturados, correlation IDs, alertas proativos e dashboards operacionais. Incidente → diagnóstico em minutos, não horas." },
    { step: "05", title: "Melhoria Contínua", desc: "Revisão de performance, refatoração de flows lentos, atualização de modelos DAX e evolução controlada dos agentes de IA com versionamento." },
  ],
  en: [
    { step: "01", title: "CoE & Guardrails", desc: "Center of Excellence with DLP policies, security groups, approved connectors, and a standards catalog before any development begins." },
    { step: "02", title: "Environments & ALM", desc: "Dev / test / prod strategy with controlled promotion via pipelines (Azure DevOps or GitHub Actions). No manual deployments to production." },
    { step: "03", title: "Data Governance", desc: "Dataverse with tables, relationships, and permissions defined in the blueprint. Power BI with a central semantic layer, certified metrics, and granular RLS." },
    { step: "04", title: "Observability", desc: "Structured logs, correlation IDs, proactive alerts, and operational dashboards. Incident → diagnosis in minutes, not hours." },
    { step: "05", title: "Continuous Improvement", desc: "Performance reviews, refactoring of slow flows, DAX model updates, and controlled evolution of AI agents with versioning." },
  ],
};

const profiles = {
  "pt-br": [
    {
      icon: "🏗️",
      title: "Empresa sem Power Platform estruturado",
      desc: "Você tem Power Platform no tenant mas sem governança, padrões ou ALM. Apps criados por usuários, flows sem controle, zero visibilidade. Precisa estruturar do zero com CoE, ambientes e padrões antes que vire caos.",
      fit: "Fit alto",
      fitColor: "text-emerald-300 border-emerald-400/30 bg-emerald-400/10",
    },
    {
      icon: "⚙️",
      title: "Time com plataforma mas sem arquitetura",
      desc: "Já tem desenvolvimento em andamento, mas sem camada semântica no Power BI, fluxos com acoplamento alto, sem observabilidade ou sem padrão de integração. Precisa de um arquiteto para organizar o que existe e escalar.",
      fit: "Fit alto",
      fitColor: "text-emerald-300 border-emerald-400/30 bg-emerald-400/10",
    },
    {
      icon: "🤖",
      title: "Projeto de IA aplicada ao negócio",
      desc: "Quer implementar Copilot, agentes ou Azure OpenAI conectado a dados internos — mas com rastreabilidade, segurança e governança real, não um protótipo. Precisa de alguém que entenda tanto a IA quanto o ecossistema Microsoft.",
      fit: "Fit alto",
      fitColor: "text-emerald-300 border-emerald-400/30 bg-emerald-400/10",
    },
  ],
  en: [
    {
      icon: "🏗️",
      title: "Company without structured Power Platform",
      desc: "You have Power Platform in your tenant but no governance, standards, or ALM. Apps built by users, uncontrolled flows, zero visibility. You need to structure it from scratch with CoE, environments, and standards before it becomes chaos.",
      fit: "High fit",
      fitColor: "text-emerald-300 border-emerald-400/30 bg-emerald-400/10",
    },
    {
      icon: "⚙️",
      title: "Team with platform but no architecture",
      desc: "Development is underway, but without a semantic layer in Power BI, tightly coupled flows, no observability, or no integration standard. You need an architect to organize what exists and scale it.",
      fit: "High fit",
      fitColor: "text-emerald-300 border-emerald-400/30 bg-emerald-400/10",
    },
    {
      icon: "🤖",
      title: "Applied AI project for the business",
      desc: "You want to implement Copilot, agents, or Azure OpenAI connected to internal data — but with real traceability, security, and governance, not a prototype. You need someone who understands both AI and the Microsoft ecosystem.",
      fit: "High fit",
      fitColor: "text-emerald-300 border-emerald-400/30 bg-emerald-400/10",
    },
  ],
};

// ── Page ───────────────────────────────────────────────────────────────────

export default async function PlatformPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const l = (locale === "en" ? "en" : "pt-br") as "pt-br" | "en";
  const isEn = l === "en";

  return (
    <FullBleed>
      <ParallaxSectionVideo
        videoSrc="/media/digital-diferenciais.mp4"
        className="relative isolate text-white force-white-text"
        overlayClassName="bg-black/40"
      >
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-black/25 via-black/35 to-black/75" />

        <section className="relative z-20">
          <div className="mx-auto max-w-6xl px-4 py-16 space-y-20">

            {/* ── Hero ── */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-4 max-w-2xl">
                <p className="text-sm font-semibold tracking-widest text-blue-400 uppercase">
                  {isEn ? "Platform Architecture" : "Arquitetura de Plataforma"}
                </p>
                <h1 className="text-4xl font-bold tracking-tight leading-tight">
                  Power Platform,{" "}
                  <span className="text-blue-400">Power BI/Fabric</span>{" "}
                  {isEn ? "and" : "e"} Azure AI Foundry
                </h1>
                <p className="text-white/80 leading-relaxed text-lg">
                  {isEn
                    ? "From blueprint to go-live with real governance, ALM, and end-to-end observability. Not just building — structuring so it scales."
                    : "Do blueprint ao go-live com governança real, ALM e observabilidade ponta a ponta. Não só construir — estruturar para escalar."}
                </p>
              </div>
              <Link
                href="/"
                className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15 shrink-0"
              >
                {isEn ? "Back to Home" : "Voltar para Home"}
              </Link>
            </div>

            {/* ── Três áreas ── */}
            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-2">
                  {isEn ? "Areas of expertise" : "Áreas de atuação"}
                </p>
                <h2 className="text-2xl font-bold tracking-tight">
                  {isEn ? "What I build and govern" : "O que eu construo e governo"}
                </h2>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                {areas[l].map((area) => (
                  <div
                    key={area.title}
                    className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 space-y-4 flex flex-col"
                  >
                    <div>
                      <span className="text-3xl">{area.icon}</span>
                      <h3 className="mt-3 text-xl font-bold">{area.title}</h3>
                      <p className="text-xs text-blue-400 font-semibold mt-1">{area.subtitle}</p>
                    </div>
                    <p className="text-sm text-white/75 leading-relaxed">{area.desc}</p>
                    <ul className="space-y-2 mt-auto">
                      {area.highlights.map((h) => (
                        <li key={h} className="flex gap-2 text-sm text-white/70">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                          <span className="leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Metodologia ── */}
            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-2">
                  {isEn ? "How I structure the platform" : "Como eu estruturo a plataforma"}
                </p>
                <h2 className="text-2xl font-bold tracking-tight">
                  {isEn
                    ? "Methodology: from CoE to continuous improvement"
                    : "Metodologia: do CoE à melhoria contínua"}
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {methodology[l].map((m) => (
                  <div
                    key={m.step}
                    className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 flex gap-4"
                  >
                    <span className="text-2xl font-bold text-blue-400/40 leading-none shrink-0 select-none">
                      {m.step}
                    </span>
                    <div className="space-y-1">
                      <h3 className="font-semibold">{m.title}</h3>
                      <p className="text-sm text-white/70 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Para quem ── */}
            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-2">
                  {isEn ? "For whom" : "Para quem"}
                </p>
                <h2 className="text-2xl font-bold tracking-tight">
                  {isEn
                    ? "When does it make sense to hire me?"
                    : "Quando faz sentido me contratar?"}
                </h2>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                {profiles[l].map((p) => (
                  <div
                    key={p.title}
                    className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 space-y-4"
                  >
                    <span className="text-3xl">{p.icon}</span>
                    <h3 className="font-bold leading-snug">{p.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed">{p.desc}</p>
                    <span
                      className={`inline-block rounded-full border px-3 py-1 text-xs font-bold ${p.fitColor}`}
                    >
                      {p.fit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── CTA ── */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="space-y-1">
                <h2 className="text-xl font-bold">
                  {isEn
                    ? "Does your scenario fit one of these profiles?"
                    : "Seu cenário se encaixa em algum desses perfis?"}
                </h2>
                <p className="text-white/70 text-sm">
                  {isEn
                    ? "Let's talk. I can detail the approach, trade-offs, and timeline for your specific context."
                    : "Vamos conversar. Posso detalhar a abordagem, trade-offs e cronograma para o seu contexto específico."}
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <Link
                  href="/projects"
                  className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  {isEn ? "See cases" : "Ver cases"}
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-400"
                >
                  {isEn ? "Contact" : "Contato"}
                </Link>
              </div>
            </div>

          </div>
        </section>
      </ParallaxSectionVideo>
    </FullBleed>
  );
}

function FullBleed({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen ${className}`}
    >
      {children}
    </div>
  );
}
