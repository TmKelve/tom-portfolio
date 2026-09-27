
export type Locale = "pt-br" | "en";
export type Localized = { "pt-br": string; en: string };
export type LocalizedList = { "pt-br": string[]; en: string[] };

export type ProjectContent = {
  context: Localized;
  role: Localized;
  architecture: Localized;
  decisions: LocalizedList;
  reliability: Localized;
  observability: Localized;
  results: LocalizedList;
  nextSteps: LocalizedList;
};

export type Project = {
  slug: string;
  type: "case" | "lab";
  title: Localized;
  summary: Localized;
  tags: string[];
  stack: string[];
  status: "public" | "private";
  content?: ProjectContent;
};

export const projects: Project[] = [{
    slug: "powerbi-semantic-core-governance-metrics-factory",
    type: "case",
    status: "public",

    title: {
      "pt-br": "Camada Semântica Corporativa no Power BI: métricas certificadas, reuso e governança em escala",
      en: "Enterprise Power BI Semantic Layer: certified metrics, reuse, and governance at scale"
    },

    summary: {
      "pt-br": "Unifiquei KPIs críticos em um dataset core governado e reutilizável, reduzindo divergências de números e acelerando a entrega de analytics com performance e segurança.",
      en: "Unified critical KPIs into a governed, reusable core dataset, reducing metric discrepancies and speeding up analytics delivery with performance and security."
    },

    tags: [
      "Power BI",
      "Semantic Model",
      "DAX",
      "Data Modeling",
      "Governance",
      "RLS/OLS",
      "ALM/CI-CD",
      "Performance"
    ],

    stack: [
      "Power BI (Semantic Model / Datasets)",
      "Power Query / Dataflows",
      "SQL (DW / Lakehouse sources)",
      "Tabular Editor",
      "ALM Toolkit",
      "Entra ID (Azure AD)",
      "Deployment Pipelines",
      "Microsoft Purview (catalog/lineage, opcional)"
    ],

    content: {
      context: {
        "pt-br":
          "Em um cenário enterprise com múltiplas áreas (Comercial, Financeiro, Supply, Operações), cada time calculava KPIs de forma diferente. Isso gerava divergência em números, baixa confiança no BI e retrabalho constante. A necessidade era criar um “número oficial” com governança, alta performance e reuso real (datasets thin), reduzindo o tempo de entrega e elevando a maturidade analítica.",
        en:
          "In an enterprise environment with multiple domains (Sales, Finance, Supply, Ops), each team calculated KPIs differently. This caused metric inconsistencies, low trust in BI, and continuous rework. The need was to create a single source of truth with governance, high performance, and true reuse (thin datasets), reducing lead time and improving analytics maturity."
      },

      role: {
        "pt-br":
          "Atuei como arquiteto e líder técnico do modelo semântico: defini padrões de modelagem (star schema), criei a “fábrica de métricas” em DAX, estabeleci governança e segurança (RLS/OLS), conduzi performance tuning, e implementei disciplina de ALM (Dev/Hml/Prd) com pipelines e checklist de publicação. Também fui hands-on na refatoração de medidas, relacionamento, particionamento e documentação do catálogo de métricas.",
        en:
          "Served as the semantic model architect and tech lead: set modeling standards (star schema), built a DAX “metrics factory”, implemented governance and security (RLS/OLS), led performance tuning, and established ALM discipline (Dev/Test/Prod) with pipelines and release checklists. Also hands-on in refactoring measures, relationships, partitioning, and metrics catalog documentation."
      },

      architecture: {
        "pt-br":
          "L0 (Fontes): ERP/CRM/e-commerce, bases SQL e exports controlados.\n" +
          "L1 (Ingestão/Padronização): Power Query/Dataflows para staging com normalização de tipos, chaves e regras de qualidade básicas.\n" +
          "L2 (Curated): Tabelas consolidadas por domínio com dimensões conformadas (Calendário, Produto, Cliente, Filial, Canal).\n" +
          "L3 (Semântica): Dataset Core (modelo estrela) com medidas certificadas e dicionário; datasets thin por área consumindo o Core.\n" +
          "L4 (Consumo): Relatórios por perfil (Executivo, Operação, Analista) com RLS e trilhas de auditoria de acesso quando necessário.\n" +
          "Escala e performance: redução de cardinalidade, agregações quando aplicável, incremental refresh e desenho do modelo para evitar bi-direcional desnecessário.",
        en:
          "L0 (Sources): ERP/CRM/e-commerce, SQL databases and controlled exports.\n" +
          "L1 (Ingestion/Standardization): Power Query/Dataflows for staging with type normalization, keys, and baseline data-quality rules.\n" +
          "L2 (Curated): Domain-consolidated tables with conformed dimensions (Date, Product, Customer, Store, Channel).\n" +
          "L3 (Semantic): Core dataset (star schema) with certified measures and dictionary; thin datasets per domain consuming the Core.\n" +
          "L4 (Consumption): Role-based reports (Executive, Ops, Analyst) with RLS and access auditing when needed.\n" +
          "Scale and performance: cardinality reduction, aggregations where applicable, incremental refresh, and avoiding unnecessary bidirectional relationships."
      },

      decisions: {
        "pt-br": [
          "Adotei modelo estrela com dimensões conformadas para reuso e consistência entre áreas.",
          "Criei “dataset core + thin reports” para reduzir duplicação e manter uma única camada semântica.",
          "Padronizei time intelligence e medidas base (ex.: base amount, base qty) para evitar variações de lógica em cada relatório.",
          "Implementei RLS por hierarquia e regras claras de ownership por workspace/domínio.",
          "Apliquei práticas de performance (redução de colunas, cardinalidade, desativação de Auto Date/Time quando aplicável, medidas otimizadas e agregações)."
        ],
        en: [
          "Adopted a star schema with conformed dimensions for reuse and cross-domain consistency.",
          "Implemented a “core dataset + thin reports” approach to reduce duplication and enforce a single semantic layer.",
          "Standardized time intelligence and base measures (e.g., base amount, base qty) to prevent logic drift across reports.",
          "Implemented hierarchical RLS and clear workspace/domain ownership rules.",
          "Applied performance practices (column reduction, cardinality, disabling Auto Date/Time where applicable, optimized measures, and aggregations)."
        ]
      },

      reliability: {
        "pt-br":
          "Defini SLOs práticos para atualização (janelas de refresh por domínio), tratei falhas de carga com reprocessamento controlado, e criei “modo degradação” quando a fonte crítica estivesse indisponível (ex.: manter último snapshot válido e sinalizar status). Controlei concorrência de refresh por capacidade/workspace e padronizei validações pré-publicação para reduzir regressões.",
        en:
          "Set practical refresh SLOs (domain refresh windows), handled load failures with controlled reprocessing, and implemented a degradation mode when critical sources were unavailable (e.g., keep last known-good snapshot and surface status). Managed refresh concurrency per capacity/workspace and standardized pre-release validations to reduce regressions."
      },

      observability: {
        "pt-br":
          "Criei painel de operação do BI (status de refresh, duração, falhas por fonte), convenções para nomenclatura e owners, e alertas para falhas recorrentes ou degradação de performance. Mantive runbooks curtos: o que verificar, quem acionar, como reprocessar e como validar impacto no KPI.",
        en:
          "Built a BI operations dashboard (refresh status, duration, failures per source), naming/ownership conventions, and alerts for recurring failures or performance degradation. Maintained short runbooks: what to check, who to engage, how to reprocess, and how to validate KPI impact."
      },

      results: {
        "pt-br": [
          "Reduzi divergência de KPIs entre áreas ao consolidar métricas certificadas em um único modelo semântico.",
          "Acelerei a entrega de novos relatórios ao habilitar reuso via datasets thin e catálogo de medidas.",
          "Melhorei performance e estabilidade de refresh com otimizações de modelagem e governança de atualização."
        ],
        en: [
          "Reduced KPI inconsistencies across teams by consolidating certified metrics into a single semantic model.",
          "Accelerated new report delivery by enabling reuse via thin datasets and a measures catalog.",
          "Improved refresh stability and performance through modeling optimizations and governed update practices."
        ]
      },

      nextSteps: {
        "pt-br": [
          "Evoluir para métricas como produto (data contracts e testes automatizados de DAX/modelo).",
          "Expandir lineage e catálogo (ex.: Purview) com owners e SLA por conjunto de dados.",
          "Aplicar padrão de agregações por domínio e estratégia de capacidade para picos de uso."
        ],
        en: [
          "Evolve metrics as a product (data contracts and automated DAX/model tests).",
          "Expand lineage and catalog (e.g., Purview) with owners and SLAs per dataset.",
          "Apply domain-based aggregations and capacity strategy for peak usage."
        ]
      }
    }
  },

  {
    slug: "powerbi-customer-360-growth-cohorts-ltv-retention",
    type: "case",
    status: "public",

    title: {
      "pt-br": "Customer 360 + Growth Analytics no Power BI: cohort, LTV e retenção com identidade unificada",
      en: "Power BI Customer 360 + Growth Analytics: cohorts, LTV, and retention with unified identity"
    },

    summary: {
      "pt-br": "Modelei um Customer 360 com identidade unificada e analytics de growth (cohort, LTV e churn), elevando a clareza de drivers de receita e retenção sem expor dados sensíveis.",
      en: "Designed a Customer 360 with unified identity and growth analytics (cohorts, LTV, churn), improving clarity on revenue and retention drivers without exposing sensitive data."
    },

    tags: [
      "Power BI",
      "Customer 360",
      "Cohort Analysis",
      "LTV",
      "Churn/Retention",
      "Data Modeling",
      "DAX",
      "RLS/Privacy"
    ],

    stack: [
      "Power BI (Semantic Model)",
      "Power Query / Dataflows",
      "SQL (DW/Lakehouse)",
      "Dataverse/CRM exports (optional)",
      "Tabular Editor (measure management)",
      "Entra ID (Azure AD)",
      "Power Automate (alerts, optional)"
    ],

    content: {
      context: {
        "pt-br":
          "Em um cenário de produto digital e comercial multicanal, os dados de cliente estavam fragmentados (cadastro, pedidos, suporte, campanhas). Isso impedia leitura confiável de funil e retenção, e cada área tinha uma interpretação diferente de “cliente ativo”, “reativado” e “churn”. A necessidade era consolidar identidade e entregar uma camada analítica que explicasse crescimento com drivers claros e métricas consistentes.",
        en:
          "In a digital product and multichannel commerce scenario, customer data was fragmented (profiles, orders, support, campaigns). This prevented reliable funnel and retention analytics, and each team defined “active customer”, “reactivation”, and “churn” differently. The need was to unify identity and deliver an analytics layer that explains growth through clear drivers and consistent metrics."
      },

      role: {
        "pt-br":
          "Atuei como líder de analytics e arquitetura do modelo: defini regras de identidade (deduplicação e golden record), estruturei fatos e dimensões, desenhei as métricas de growth (cohort, LTV, churn) com padrões DAX, e implementei segurança (RLS/OLS) para manter privacidade. Fui hands-on na criação de medidas, validações de consistência e storytelling executivo.",
        en:
          "Acted as analytics lead and model architect: defined identity rules (deduplication and golden record), designed facts/dimensions, built growth metrics (cohorts, LTV, churn) with DAX standards, and implemented security (RLS/OLS) to preserve privacy. Hands-on in measure development, consistency checks, and executive storytelling."
      },

      architecture: {
        "pt-br":
          "L0: Dados de cadastro/CRM, transações (pedidos/assinaturas), eventos de produto, atendimento e campanhas.\n" +
          "L1: Staging com normalização de chaves e regras de matching (email/telefone/documento hash, quando aplicável).\n" +
          "L2: Curated com Customer Golden Record e fatos (Orders, Sessions/Events, Tickets, Campaign Touchpoints).\n" +
          "L3: Semântica Power BI com dimensões (Customer, Channel, Product, Plan, Geo, Date) e métricas certificadas.\n" +
          "L4: Relatórios por perfil: Growth (funil/cohort), CRM (segmentos), Executivo (drivers de receita e retenção).\n" +
          "Privacidade: atributos sensíveis separados com OLS e exposição apenas quando necessário e permitido.",
        en:
          "L0: Profile/CRM, transactions (orders/subscriptions), product events, support, and campaigns.\n" +
          "L1: Staging with key normalization and matching rules (email/phone/doc hashes where applicable).\n" +
          "L2: Curated layer with Customer Golden Record and facts (Orders, Sessions/Events, Tickets, Campaign Touchpoints).\n" +
          "L3: Power BI semantic model with dimensions (Customer, Channel, Product, Plan, Geo, Date) and certified metrics.\n" +
          "L4: Role-based reports: Growth (funnel/cohorts), CRM (segments), Executive (revenue and retention drivers).\n" +
          "Privacy: sensitive attributes isolated with OLS and exposed only when allowed and necessary."
      },

      decisions: {
        "pt-br": [
          "Defini um Golden Record de cliente com hierarquia de confiança de chaves (evitando duplicidade e métricas infladas).",
          "Modelei cohorts com base em “primeira conversão” e variantes para reativação, mantendo definições explícitas e versionadas.",
          "Implementei LTV por janelas móveis e cenários (ex.: receita líquida vs bruta) para leitura executiva consistente.",
          "Usei segmentações RFM e ‘new vs returning’ com medidas otimizadas para escala e usabilidade.",
          "Apliquei RLS/OLS para garantir que análises por unidade/time não vazem dados pessoais."
        ],
        en: [
          "Defined a Customer Golden Record with a confidence hierarchy of identifiers (preventing duplicates and inflated metrics).",
          "Modeled cohorts based on “first conversion” plus reactivation variants, with explicit, versioned definitions.",
          "Implemented rolling-window LTV and scenarios (e.g., net vs gross revenue) for consistent executive interpretation.",
          "Used RFM and ‘new vs returning’ segments with optimized measures for scale and usability.",
          "Applied RLS/OLS to ensure unit/team analytics do not expose personal data."
        ]
      },

      reliability: {
        "pt-br":
          "Garanti consistência de atualização com snapshots diários e validações de reconciliação (contagem de clientes únicos, transações por período, sanity checks de receita). Em caso de falha em uma fonte não crítica (ex.: eventos de campanha), o modelo degrada mantendo métricas essenciais (receita, pedidos, clientes) e sinaliza o status da camada de marketing.",
        en:
          "Ensured refresh consistency with daily snapshots and reconciliation validations (unique customers, transactions per period, revenue sanity checks). If a non-critical source fails (e.g., campaign events), the model degrades gracefully by preserving essential metrics (revenue, orders, customers) and surfacing the marketing layer status."
      },

      observability: {
        "pt-br":
          "Criei monitoramento de refresh e qualidade: alertas para aumento de duplicidade de clientes, quedas abruptas de eventos, e variação incomum de conversão. Mantive runbook com passos de diagnóstico (matching rules, chaves conflitantes, impacto em cohorts) e dashboard de integridade.",
        en:
          "Built refresh and data-quality monitoring: alerts for rising customer duplication, abrupt event drops, and unusual conversion swings. Maintained a runbook with diagnosis steps (matching rules, conflicting identifiers, cohort impact) and a health dashboard."
      },

      results: {
        "pt-br": [
          "Aumentei a confiabilidade das análises de funil e retenção ao padronizar identidade e definições de métricas.",
          "Melhorei a leitura de drivers de crescimento (aquisição, conversão, retenção) com painéis orientados a decisão.",
          "Reduzi debates improdutivos sobre números ao criar definições explícitas e reutilizáveis de cohorts/LTV."
        ],
        en: [
          "Improved funnel and retention analytics reliability by standardizing identity and metric definitions.",
          "Enhanced growth driver visibility (acquisition, conversion, retention) through decision-oriented dashboards.",
          "Reduced unproductive debates about numbers by creating explicit, reusable cohort/LTV definitions."
        ]
      },

      nextSteps: {
        "pt-br": [
          "Incluir experimentação (A/B) e atribuição incremental por canal com governança de hipóteses.",
          "Evoluir modelos preditivos (propensão de churn/compra) com explicabilidade e monitoramento.",
          "Formalizar data contracts entre domínios (Produto, CRM, Marketing) para reduzir drift de eventos."
        ],
        en: [
          "Add experimentation (A/B) and incremental attribution per channel with hypothesis governance.",
          "Evolve into predictive models (churn/purchase propensity) with explainability and monitoring.",
          "Formalize data contracts across domains (Product, CRM, Marketing) to reduce event drift."
        ]
      }
    }
  },

  {
    slug: "powerbi-near-real-time-ops-sla-root-cause",
    type: "case",
    status: "public",

    title: {
      "pt-br": "Cockpit Operacional em tempo quase real: SLA, backlog e causa raiz com Power BI",
      en: "Near real-time Operations Cockpit: SLA, backlog, and root cause in Power BI"
    },

    summary: {
      "pt-br": "Implementei um cockpit operacional near real-time com métricas de SLA e análise de causa raiz, reduzindo tempo de detecção e melhorando resposta a incidentes.",
      en: "Implemented a near real-time operations cockpit with SLA metrics and root cause analysis, reducing detection time and improving incident response."
    },

    tags: [
      "Power BI",
      "Operational Analytics",
      "Near Real-Time",
      "SLA/SLO",
      "Root Cause Analysis",
      "Event Modeling",
      "Performance",
      "Alerting"
    ],

    stack: [
      "Power BI (Semantic Model)",
      "Azure Event Hubs / Service Bus (event ingestion, optional)",
      "Stream processing (e.g., Stream Analytics / Databricks, optional)",
      "SQL (Operational store / curated tables)",
      "Power Automate / Teams (alerts, optional)",
      "Entra ID (Azure AD)"
    ],

    content: {
      context: {
        "pt-br":
          "Em operações críticas, relatórios diários não resolvem: quando o problema aparece, já virou impacto. O time precisava enxergar backlog, filas, latência e violação de SLA rapidamente, com capacidade de ir do KPI ao caso específico (drill-through). A dor real era: baixa visibilidade, demora para detectar, e diagnóstico manual dependente de logs e “achismos”.",
        en:
          "For critical operations, daily reports are not enough: by the time issues show up, they have already impacted users. The team needed fast visibility into backlog, queues, latency, and SLA breaches, plus a path from KPI to individual cases (drill-through). The real pain: low observability, slow detection, and manual diagnosis relying on logs and guesswork."
      },

      role: {
        "pt-br":
          "Atuei como arquiteto de analytics operacional: defini o modelo de eventos e correlação, estruturei a semântica de SLA/aging/lead time, e desenhei páginas de investigação (RCA). Também fui hands-on em otimização (agregações, incrementalidade) e em regras de alerta com runbooks objetivos para o time de operação.",
        en:
          "Served as operational analytics architect: defined the event/correlation model, designed SLA/aging/lead-time semantics, and built investigation (RCA) pages. Also hands-on in optimization (aggregations, incremental loads) and alerting rules with concise runbooks for the ops team."
      },

      architecture: {
        "pt-br":
          "L0: Fontes operacionais (eventos de status, filas, sistemas de pedidos/entregas, logs estruturados).\n" +
          "L1: Ingest incremental com janela curta e normalização para um “event table” (factEvent) com correlationId e timestamps padronizados.\n" +
          "L2: Camada curated com métricas derivadas (tempo por etapa, aging, backlog por fila/serviço/região), incluindo tabelas de agregação.\n" +
          "L3: Modelo semântico no Power BI com medidas de SLA/SLO, throughput e decomposição por dimensões (serviço, etapa, canal, região).\n" +
          "L4: Cockpit operacional e páginas de RCA com drill-through por caso (ex.: OrderId/CorrelationId) e timelines.\n" +
          "Escala: uso de agregações e filtros por janela de tempo para manter experiência fluida e confiável.",
        en:
          "L0: Operational sources (status events, queues, order/delivery systems, structured logs).\n" +
          "L1: Short-window incremental ingestion and normalization into an event table (factEvent) with correlationId and standardized timestamps.\n" +
          "L2: Curated layer with derived metrics (stage duration, aging, backlog per queue/service/region), including aggregation tables.\n" +
          "L3: Power BI semantic model with SLA/SLO, throughput, and decompositions by dimensions (service, stage, channel, region).\n" +
          "L4: Operations cockpit and RCA pages with drill-through by case (e.g., OrderId/CorrelationId) and timelines.\n" +
          "Scale: aggregations and time-window filtering to keep the experience responsive and reliable."
      },

      decisions: {
        "pt-br": [
          "Modelei um factEvent correlacionável (correlationId + timestamps) para suportar timeline e RCA sem depender de análise manual de logs.",
          "Criei medidas de SLA baseadas em “tempo por etapa” com regras explícitas de início/fim e exceções conhecidas.",
          "Apliquei agregações e tabelas resumo para consultas rápidas e drill-through apenas quando necessário.",
          "Implementei alertas por ‘SLA breach’ e por anomalia (picos de backlog/latência) com limiares controlados.",
          "Padronizei páginas de investigação: do KPI ao caso, reduzindo MTTR e variância entre analistas."
        ],
        en: [
          "Modeled a correlatable factEvent (correlationId + timestamps) to support timelines and RCA without manual log digging.",
          "Built SLA measures based on per-stage duration with explicit start/end rules and known exceptions.",
          "Applied aggregations and summary tables for fast queries, using drill-through only when needed.",
          "Implemented alerts for SLA breaches and anomalies (backlog/latency spikes) with controlled thresholds.",
          "Standardized investigation pages from KPI to case, reducing MTTR and analyst variance."
        ]
      },

      reliability: {
        "pt-br":
          "Usei ingest incremental e validações de consistência (eventos fora de ordem, timestamps inválidos, correlação ausente). Configurei degradação: se uma fonte secundária falha, o cockpit mantém KPIs essenciais com janela reduzida e sinaliza indisponibilidade parcial. Limites de concorrência e janelas de refresh evitam sobrecarga.",
        en:
          "Used incremental ingestion and consistency checks (out-of-order events, invalid timestamps, missing correlation). Implemented graceful degradation: if a secondary source fails, the cockpit keeps core KPIs with a reduced window and surfaces partial unavailability. Concurrency caps and refresh windows avoid overload."
      },

      observability: {
        "pt-br":
          "Monitorei taxa de eventos, atraso de ingest, falhas por fonte e tempo de refresh. Padronizei correlationId para rastreio ponta a ponta no dashboard e em incidentes. Alertas direcionados para backlog, SLA e quebra de padrão, com runbooks: diagnóstico rápido, verificação de filas, e validação de impacto.",
        en:
          "Monitored event rate, ingestion lag, source failures, and refresh duration. Standardized correlationId for end-to-end tracing in dashboards and incidents. Targeted alerts for backlog, SLA breaches, and pattern breaks, plus runbooks for quick diagnosis, queue checks, and impact validation."
      },

      results: {
        "pt-br": [
          "Reduzi o tempo de detecção de incidentes ao trazer visibilidade near real-time de backlog e SLA.",
          "Melhorei o diagnóstico com RCA orientado por correlação e timeline, reduzindo esforço manual.",
          "Aumentei previsibilidade operacional ao padronizar métricas, thresholds e runbooks de resposta."
        ],
        en: [
          "Reduced incident detection time by enabling near real-time visibility into backlog and SLA.",
          "Improved diagnosis with correlation-driven RCA and timelines, reducing manual effort.",
          "Increased operational predictability by standardizing metrics, thresholds, and response runbooks."
        ]
      },

      nextSteps: {
        "pt-br": [
          "Adicionar SLO por jornada (user journey) e error budgets para governança de confiabilidade.",
          "Evoluir anomalia para modelos mais robustos (sazonalidade e feriados) com explicação do alerta.",
          "Incluir capacidade de ‘what changed’ (deploys/configs) para acelerar RCA e prevenir recorrência."
        ],
        en: [
          "Add journey-based SLOs and error budgets for reliability governance.",
          "Evolve anomaly detection to more robust models (seasonality/holidays) with explainable alerts.",
          "Include ‘what changed’ signals (deploys/config) to speed up RCA and prevent recurrence."
        ]
      }
    }
  },

  {
    slug: "powerbi-finops-cloud-cost-intelligence-forecast-anomalies",
    type: "case",
    status: "public",

    title: {
      "pt-br": "FinOps Analytics no Power BI: custos cloud, forecast e anomalias com governança de tags",
      en: "Power BI FinOps Analytics: cloud costs, forecasting, anomaly detection, and tag governance"
    },

    summary: {
      "pt-br": "Centralizei custos cloud com showback/chargeback, previsões e detecção de anomalias, permitindo decisões rápidas e governança prática sem expor dados financeiros sensíveis.",
      en: "Centralized cloud costs with showback/chargeback, forecasting, and anomaly detection, enabling faster decisions and practical governance without exposing sensitive financial details."
    },

    tags: [
      "Power BI",
      "FinOps",
      "Cost Analytics",
      "Forecasting",
      "Anomaly Detection",
      "Governance",
      "Data Quality",
      "Decision Intelligence"
    ],

    stack: [
      "Power BI (Semantic Model)",
      "Azure Cost Management exports / Billing data",
      "Power Query / Dataflows",
      "SQL (curated cost tables)",
      "Entra ID (Azure AD)",
      "Power Automate (alerts, optional)"
    ],

    content: {
      context: {
        "pt-br":
          "Custos cloud crescendo com baixa visibilidade de responsabilidade: tags incompletas, múltiplas contas/assinaturas e dificuldade de explicar variações. O financeiro precisava de previsibilidade (forecast) e os times técnicos precisavam de ação (o que otimizar, onde está vazando custo). A necessidade era unir Finanças e Engenharia com uma visão consistente e operacionalizável.",
        en:
          "Cloud costs were increasing with low accountability: incomplete tags, multiple accounts/subscriptions, and difficulty explaining variances. Finance needed predictability (forecast), and engineering needed actionable insights (what to optimize, where costs are leaking). The need was to unify Finance and Engineering around a consistent, operational view."
      },

      role: {
        "pt-br":
          "Atuei como líder técnico do produto analítico: desenhei o modelo de custos, padronizei dimensões (serviço, time, centro de custo, ambiente), implementei score de qualidade de tags, criei medidas de variação e drivers, e habilitei alertas de anomalia. Também conduzi governança de publicação e storytelling executivo para suportar decisões.",
        en:
          "Acted as the technical lead for the analytics product: designed the cost model, standardized dimensions (service, team, cost center, environment), implemented tag quality scoring, built variance/driver measures, and enabled anomaly alerts. Also led publishing governance and executive storytelling to support decision-making."
      },

      architecture: {
        "pt-br":
          "L0: Dados de billing/export de custos e metadados de recursos (tags, owners, ambientes).\n" +
          "L1: Staging com padronização de tags, normalização de nomes e mapeamentos (owner, cost center).\n" +
          "L2: Curated com custo diário por recurso/serviço e tabelas auxiliares de compliance (tags obrigatórias, exceções).\n" +
          "L3: Semântica Power BI com medidas de showback/chargeback, variação (MoM/YoY), top drivers e forecast.\n" +
          "L4: Relatórios: Executivo (tendência e orçamento), Engenharia (otimização), Governança (tag compliance e owners).\n" +
          "Escala: particionamento por período e agregações por serviço/time para respostas rápidas.",
        en:
          "L0: Billing/export cost data and resource metadata (tags, owners, environments).\n" +
          "L1: Staging with tag standardization, name normalization, and mappings (owner, cost center).\n" +
          "L2: Curated daily cost per resource/service and compliance helper tables (required tags, exceptions).\n" +
          "L3: Power BI semantic model with showback/chargeback measures, variance (MoM/YoY), top drivers, and forecasting.\n" +
          "L4: Reports: Executive (trend and budget), Engineering (optimization), Governance (tag compliance and owners).\n" +
          "Scale: period partitioning and service/team aggregations for fast responses."
      },

      decisions: {
        "pt-br": [
          "Criei uma dimensão de ‘Taxonomia de Tags’ com regras de normalização e exceções governadas para evitar caos de nomenclatura.",
          "Implementei showback/chargeback por centro de custo e owner, com rastreio por ambiente (dev/hml/prd).",
          "Modelei variação com decomposição de drivers (serviço, time, região, recurso) para explicar ‘por que subiu’.",
          "Apliquei detecção de anomalia com baseline por serviço e alertas operacionais (não só relatórios).",
          "Estabeleci painéis de compliance de tags para gerar ação: quem corrigir, o que corrigir, e impacto."
        ],
        en: [
          "Created a Tag Taxonomy dimension with normalization rules and governed exceptions to avoid naming chaos.",
          "Implemented showback/chargeback by cost center and owner, with environment tracking (dev/test/prod).",
          "Modeled variance with driver decomposition (service, team, region, resource) to explain ‘why it increased’.",
          "Applied anomaly detection using per-service baselines and operational alerts (not just reports).",
          "Established tag compliance dashboards to drive action: who fixes, what to fix, and expected impact."
        ]
      },

      reliability: {
        "pt-br":
          "Garanti consistência com snapshots diários e validações (custos zerados anômalos, duplicidade de export, lacunas de período). Em falhas de export, o relatório sinaliza defasagem e mantém último período confiável. Controlei frequência de atualização para não competir com rotinas de operação.",
        en:
          "Ensured consistency with daily snapshots and validations (anomalous zero costs, duplicate exports, missing periods). If exports fail, reports surface data staleness and keep the last trusted period. Controlled refresh frequency to avoid competing with operational workloads."
      },

      observability: {
        "pt-br":
          "Monitorei latência de ingest e qualidade de tags, com alertas para picos de custo e queda de compliance. Criei um dashboard ‘FinOps Ops’ (status, exceções, top anomalias) e runbooks para ações: validar tags, identificar recurso, aplicar otimização, confirmar redução.",
        en:
          "Monitored ingestion latency and tag quality, with alerts for cost spikes and compliance drops. Built a ‘FinOps Ops’ dashboard (status, exceptions, top anomalies) and runbooks: validate tags, identify resources, apply optimization, confirm reduction."
      },

      results: {
        "pt-br": [
          "Aumentei transparência de custos e responsabilidade ao consolidar showback/chargeback e compliance de tags.",
          "Melhorei previsibilidade com forecast e leitura clara de drivers de variação.",
          "Reduzi o tempo para identificar desperdícios ao operacionalizar anomalias e ações recomendadas."
        ],
        en: [
          "Increased cost transparency and accountability by consolidating showback/chargeback and tag compliance.",
          "Improved predictability with forecasting and clear variance driver analysis.",
          "Reduced time-to-identify waste by operationalizing anomalies and recommended actions."
        ]
      },

      nextSteps: {
        "pt-br": [
          "Adicionar painel de ‘Savings pipeline’ com tracking de ações e validação de resultado por período.",
          "Evoluir forecast com sazonalidade/feriados e comparação com orçamento planejado.",
          "Integrar recomendações automáticas (rightsizing/reservas) com backlog de execução."
        ],
        en: [
          "Add a ‘Savings pipeline’ dashboard to track actions and validate outcomes over time.",
          "Evolve forecasting with seasonality/holidays and planned-budget comparisons.",
          "Integrate automated recommendations (rightsizing/reservations) with an execution backlog."
        ]
      }
    }
  },

  {
    slug: "powerbi-data-quality-audit-compliance-reconciliation",
    type: "case",
    status: "public",

    title: {
      "pt-br": "BI pronto para auditoria: reconciliação, qualidade de dados e segurança (RLS/OLS) no Power BI",
      en: "Audit-ready BI: reconciliation, data quality, and security (RLS/OLS) in Power BI"
    },

    summary: {
      "pt-br": "Implementei um framework de qualidade e reconciliação com segurança avançada, elevando a confiabilidade do BI e tornando relatórios auditáveis e sustentáveis.",
      en: "Implemented a data-quality and reconciliation framework with advanced security, improving BI trustworthiness and making reports audit-ready and sustainable."
    },

    tags: [
      "Power BI",
      "Data Quality",
      "Reconciliation",
      "Audit/Compliance",
      "RLS/OLS",
      "Governance",
      "Documentation",
      "Risk Management"
    ],

    stack: [
      "Power BI (Semantic Model)",
      "Power Query / Dataflows",
      "SQL (curated + control tables)",
      "Entra ID (Azure AD)",
      "Sensitivity Labels (optional)",
      "Microsoft Purview (optional)",
      "Power Automate (notifications, optional)"
    ],

    content: {
      context: {
        "pt-br":
          "Em contextos regulados, o desafio não é só visualizar, é provar: o número precisa bater com a fonte, ser reprodutível e ter controles de acesso. A dor era baixa confiança nos relatórios, questionamentos recorrentes e dificuldade de rastrear mudanças (dados, regras, versões). A necessidade era criar BI com trilha de confiabilidade: reconciliação, qualidade e segurança desde a origem até o consumo.",
        en:
          "In regulated environments, the challenge is not only visualization, but proof: numbers must reconcile with source systems, be reproducible, and have strict access controls. Pain points included low trust, recurring challenges, and difficulty tracking changes (data, rules, versions). The need was to build BI with a reliability trail: reconciliation, quality, and security from source to consumption."
      },

      role: {
        "pt-br":
          "Atuei como arquiteto e guardião de governança analítica: desenhei o framework de qualidade (regras, controles, evidências), implementei reconciliações entre camadas, defini segurança (RLS/OLS) e padrões de documentação. Fui hands-on na construção de tabelas de controle, medidas de validação e painéis de auditoria de integridade.",
        en:
          "Acted as analytics governance architect: designed the data-quality framework (rules, controls, evidence), implemented reconciliation across layers, defined security (RLS/OLS), and standardized documentation. Hands-on in building control tables, validation measures, and integrity audit dashboards."
      },

      architecture: {
        "pt-br":
          "L0: Fontes oficiais (transações, cadastros, integrações) e regras de negócio documentadas.\n" +
          "L1: Staging com validações iniciais (tipos, chaves, duplicidades) e logs de carga.\n" +
          "L2: Curated com tabelas reconciliadas e controles (contagens por período, somatórios, checks de integridade).\n" +
          "L3: Semântica Power BI com métricas certificadas e dimensões auditáveis (ex.: mapeamentos e versões).\n" +
          "L4: Consumo com segurança por perfil, páginas de evidência e rastreio de integridade.\n" +
          "Auditoria: evidências de reconciliação por janela (diária/semanal) e sinalização de ‘dados confiáveis’ vs ‘em validação’.",
        en:
          "L0: Official sources (transactions, master data, integrations) and documented business rules.\n" +
          "L1: Staging with baseline validations (types, keys, duplicates) and load logs.\n" +
          "L2: Curated layer with reconciled tables and controls (counts per period, totals, integrity checks).\n" +
          "L3: Power BI semantic model with certified metrics and auditable dimensions (e.g., mappings and versions).\n" +
          "L4: Role-based consumption with evidence pages and integrity tracking.\n" +
          "Audit: reconciliation evidence per window (daily/weekly) and clear signaling of ‘trusted’ vs ‘under validation’ data."
      },

      decisions: {
        "pt-br": [
          "Criei tabelas de controle (load log, reconciliation results) para rastrear qualidade e consistência por período e fonte.",
          "Implementei reconciliação em camadas (source vs curated vs semantic) para detectar drift e regressões.",
          "Separei atributos sensíveis e apliquei OLS, reduzindo superfície de exposição sem quebrar análises.",
          "Padronizei certificação de datasets e ‘definições de KPI’ com versionamento e owners.",
          "Adotei sinalização explícita de integridade nos relatórios (status de atualização/qualidade)."
        ],
        en: [
          "Built control tables (load logs, reconciliation results) to track data quality and consistency by period and source.",
          "Implemented layer-to-layer reconciliation (source vs curated vs semantic) to detect drift and regressions.",
          "Isolated sensitive attributes and applied OLS, reducing exposure without breaking analytics.",
          "Standardized dataset certification and KPI definitions with versioning and ownership.",
          "Added explicit integrity status signaling in reports (freshness/quality)."
        ]
      },

      reliability: {
        "pt-br":
          "Defini critérios de ‘dados confiáveis’ (checks mínimos obrigatórios) e rotas de contingência quando algum check falha: manter último snapshot validado, bloquear publicação automática, e notificar owners. Usei controles para evitar que relatórios “pareçam atualizados” quando a qualidade não está aprovada.",
        en:
          "Defined ‘trusted data’ criteria (mandatory minimum checks) and contingency flows when checks fail: keep last validated snapshot, block automatic publishing, and notify owners. Implemented safeguards so reports don’t appear ‘up to date’ when quality is not approved."
      },

      observability: {
        "pt-br":
          "Criei dashboards de integridade (falhas por regra, por fonte, por período) e alertas de degradação. Padronizei runbooks: investigar origem, identificar impacto no KPI, reprocessar janela, validar reconciliação, e registrar evidência.",
        en:
          "Built integrity dashboards (failures by rule, source, period) and degradation alerts. Standardized runbooks: investigate origin, assess KPI impact, reprocess the window, validate reconciliation, and record evidence."
      },

      results: {
        "pt-br": [
          "Aumentei a confiança nos relatórios ao tornar reconciliação e qualidade visíveis e repetíveis.",
          "Reduzi risco de decisões com dados inconsistentes ao bloquear automaticamente consumo quando checks críticos falham.",
          "Melhorei governança e segurança aplicando RLS/OLS e padrões de certificação com ownership claro."
        ],
        en: [
          "Increased report trust by making reconciliation and data quality visible and repeatable.",
          "Reduced decision risk from inconsistent data by automatically blocking consumption when critical checks fail.",
          "Improved governance and security by applying RLS/OLS and certification standards with clear ownership."
        ]
      },

      nextSteps: {
        "pt-br": [
          "Automatizar testes de regressão do modelo e medidas (DAX/model tests) antes de promover para produção.",
          "Expandir lineage e documentação com catálogo e ownership por domínio (data as a product).",
          "Adicionar trilhas de mudança (what changed) para acelerar auditorias e diagnósticos."
        ],
        en: [
          "Automate semantic model and measure regression tests (DAX/model tests) before promoting to production.",
          "Expand lineage and documentation with a catalog and domain ownership (data as a product).",
          "Add ‘what changed’ trails to speed up audits and diagnostics."
        ]
      }
    }
  },
  // =========================================================
  // Grupo 1 | D365 F&O + Commerce (NDA / Private)
  // =========================================================

  {
    slug: "d365-omnichannel-fo-commerce-architecture",
    type: "case",
    status: "private",
    title: {
      "pt-br": "Omnichannel em escala com Dynamics 365 Commerce + F&O",
      en: "Omnichannel at scale with Dynamics 365 Commerce + F&O",
    },
    summary: {
      "pt-br":
        "Arquitetura end-to-end para operação omnichannel (lojas + canais digitais), com integrações API-first, governança e observabilidade para sustentar alta volumetria com previsibilidade.",
      en:
        "End-to-end architecture for omnichannel operations (stores + digital channels), using API-first integrations, governance, and observability to handle high volume with reliability.",
    },
    tags: [
      "Dynamics 365 Commerce",
      "Dynamics 365 F&O",
      "Omnichannel",
      "API-first",
      "Governança",
      "Observabilidade",
      "Arquitetura enterprise",
    ],
    stack: [
      "D365 Commerce",
      "D365 F&O",
      "Azure",
      "API Gateway (APISIX/APIM)",
      "Service Bus",
      "AKS",
      "App Insights / Logs",
    ],
    content: {
      context: {
        "pt-br":
          "Necessidade de suportar jornadas omnichannel (POS/loja, e-commerce, atendimento) com consistência de catálogo, preço/promoções e estoque, reduzindo acoplamento entre canais e backoffice. O desafio era manter previsibilidade em picos e falhas parciais, sem comprometer a operação.",
        en:
          "Need to support omnichannel journeys (store/POS, e-commerce, assisted sales) with consistent catalog, pricing/promotions, and inventory, reducing coupling between channels and the backoffice. The challenge was maintaining predictable behavior under spikes and partial outages.",
      },
      role: {
        "pt-br":
          "Atuei como arquiteto responsável pelo desenho L0–L4, padrões de integração (API-first + eventos), governança de APIs, estratégia de idempotência e observabilidade ponta a ponta, além de orientar times na implementação e operação.",
        en:
          "Acted as the architect responsible for L0–L4 design, integration patterns (API-first + events), API governance, idempotency strategy, and end-to-end observability, guiding teams through implementation and operations.",
      },
      architecture: {
        "pt-br":
          "Borda com APIs governadas (AuthN/AuthZ, rate limit, logs) e fluxos críticos desacoplados por mensageria (tópicos/filas por domínio). Consumidores em AKS/Functions com rastreabilidade via correlationId e persistência mínima de estado para dedupe/auditoria. Otimização de leitura com cache para cenários de consulta (catálogo/preço/disponibilidade).",
        en:
          "Governed edge APIs (AuthN/AuthZ, rate limit, logs) and critical flows decoupled via messaging (domain topics/queues). Consumers on AKS/Functions with correlationId traceability and minimal state persistence for dedupe/audit. Read optimization with caching for browse/availability scenarios.",
      },
      decisions: {
        "pt-br": [
          "Contratos estáveis (API e eventos) para permitir evolução incremental sem quebrar consumidores.",
          "Idempotência por chaves de negócio e dedupe no consumidor para reprocessamento seguro.",
          "DLQ com runbooks e triagem operacional (erro funcional vs técnico).",
          "Cache de leitura para reduzir latência e pressão em dependências durante picos.",
        ],
        en: [
          "Stable contracts (APIs and events) to enable incremental evolution without breaking consumers.",
          "Business-key idempotency and consumer-side dedupe for safe reprocessing.",
          "DLQ with runbooks and operational triage (business vs technical errors).",
          "Read caching to reduce latency and dependency pressure during spikes.",
        ],
      },
      reliability: {
        "pt-br":
          "Estratégia de resiliência com proteção de borda, retries com backoff, circuit breaker onde aplicável e reprocessamento controlado via DLQ. Priorização de degradação graciosa para manter jornada crítica operando mesmo com indisponibilidade parcial.",
        en:
          "Resilience strategy with edge protection, retries with backoff, circuit breakers where applicable, and controlled reprocessing via DLQ. Emphasis on graceful degradation to keep critical journeys running during partial outages.",
      },
      observability: {
        "pt-br":
          "Tracing distribuído com correlationId, métricas por fluxo (latência, taxa de erro, backlog, DLQ) e dashboards por canal. Alertas baseados em SLO e runbooks para resposta rápida.",
        en:
          "Distributed tracing via correlationId, per-flow metrics (latency, error rate, backlog, DLQ) and channel dashboards. SLO-based alerts and runbooks for fast response.",
      },
      results: {
        "pt-br": [
          "Maior previsibilidade operacional em picos, reduzindo incidentes por sobrecarga.",
          "Menor MTTR com rastreabilidade ponta a ponta e padrões de observabilidade.",
          "Evolução de omnichannel com menor acoplamento entre domínios.",
        ],
        en: [
          "More predictable operations during spikes, reducing overload incidents.",
          "Lower MTTR with end-to-end traceability and standardized observability.",
          "Faster omnichannel evolution with lower coupling across domains.",
        ],
      },
      nextSteps: {
        "pt-br": [
          "Aprimorar scorecards por domínio (SLIs/SLOs) e automatizar evidências operacionais.",
          "Padronizar validação de contratos (schema checks) no pipeline.",
          "Automatizar triagem de DLQ com classificação e priorização por impacto.",
        ],
        en: [
          "Improve domain scorecards (SLIs/SLOs) and automate operational evidence.",
          "Standardize contract validation (schema checks) in CI pipelines.",
          "Automate DLQ triage with classification and impact-based prioritization.",
        ],
      },
    },
  },

  {
    slug: "d365-commerce-order-lifecycle-event-driven",
    type: "case",
    status: "private",
    title: {
      "pt-br": "Ciclo de vida de pedidos (event-driven) entre Commerce e backoffice",
      en: "Order lifecycle (event-driven) between Commerce and backoffice",
    },
    summary: {
      "pt-br":
        "Desenho de fluxo real de eventos do pedido (pagamento, separação, faturamento, pós-venda), com idempotência, DLQ e rastreabilidade ponta a ponta para reduzir falhas e reprocessos.",
      en:
        "Designed the real order event flow (payment, fulfillment, invoicing, post-sales), adding idempotency, DLQ handling and end-to-end traceability to cut failures and reprocessing.",
    },
    tags: [
      "Dynamics 365 Commerce",
      "Dynamics 365 F&O",
      "Event-driven",
      "Azure Service Bus",
      "Idempotência",
      "DLQ",
      "Observabilidade",
    ],
    stack: [
      "D365 Commerce",
      "D365 F&O",
      "Azure Service Bus",
      "AKS",
      "APISIX/APIM",
      "Event Grid (opcional)",
    ],
    content: {
      context: {
        "pt-br":
          "A operação precisava padronizar e estabilizar o ciclo de vida do pedido entre canais (Commerce/POS/eCom) e backoffice, garantindo consistência de status em etapas como pagamento, separação, faturamento e pós-venda. O desafio principal era suportar picos e reprocessamentos sem duplicar efeitos (ex.: faturar duas vezes, registrar expedição duplicada ou gerar inconsistências de estoque).",
        en:
          "The operation needed to standardize and stabilize the order lifecycle between channels (Commerce/POS/eCom) and the backoffice, ensuring consistent status across payment, fulfillment, invoicing and post-sales. The key challenge was handling spikes and reprocessing without duplicating side effects (e.g., double invoicing, duplicate shipments, inconsistent inventory).",
      },
      role: {
        "pt-br":
          "Atuei como responsável pela arquitetura do fluxo fim a fim: definição de eventos e contratos, desenho dos tópicos/filas e estratégia de consumo, regras de idempotência e observabilidade por correlationId. Também alinhei padrões de erro (retry/DLQ) e guiei a implementação com foco em previsibilidade operacional.",
        en:
          "Led the end-to-end flow architecture: event and contract definition, topics/queues design and consumption strategy, idempotency rules and correlationId-based observability. Also aligned error-handling patterns (retry/DLQ) and guided implementation with a focus on operational predictability.",
      },
      architecture: {
        "pt-br":
          "Integração orientada a eventos para desacoplar canais e domínios do backoffice. A borda expõe APIs governadas (auth, rate limit, logs) e os fluxos críticos são publicados em mensageria (tópicos por domínio), com consumidores em AKS/Functions. Cada mensagem carrega correlationId e chaves de negócio para idempotência. Persistência de estado mínimo no consumidor (processamento, dedupe, auditoria) para garantir reprocessamento seguro.",
        en:
          "Event-driven integration to decouple channels and backoffice domains. The edge layer exposes governed APIs (auth, rate limit, logs) and critical flows are published into messaging (domain topics) with consumers on AKS/Functions. Each message carries a correlationId and business keys for idempotency. Consumers keep minimal state (processing, dedupe, audit) to enable safe reprocessing.",
      },
      decisions: {
        "pt-br": [
          "Eventos canônicos por etapa do ciclo do pedido (ex.: payment confirmed, fulfillment updated, invoicing completed) para reduzir acoplamento entre canais e domínios.",
          "Idempotência por chave de negócio (orderId + stage + version) com dedupe no consumidor e trilha de auditoria.",
          "Retries com backoff para falhas técnicas e DLQ para falhas funcionais, com triagem operacional e reprocessamento controlado.",
          "Correlação ponta a ponta com correlationId (logs, métricas e tracing) para reduzir MTTR.",
        ],
        en: [
          "Canonical events per order lifecycle stage (e.g., payment confirmed, fulfillment updated, invoicing completed) to reduce coupling between channels and domains.",
          "Business-key idempotency (orderId + stage + version) with consumer-side dedupe and an audit trail.",
          "Retries with backoff for technical failures and DLQ for business failures, with operational triage and controlled reprocessing.",
          "End-to-end correlation via correlationId (logs, metrics, tracing) to reduce MTTR.",
        ],
      },
      reliability: {
        "pt-br":
          "Estratégia de resiliência baseada em proteção de borda (rate limit), retry/backoff, DLQ com runbooks e reprocessamento seguro sem efeitos duplicados. Priorização de consistência de status e capacidade de degradação graciosa para manter a operação funcionando durante picos ou indisponibilidades parciais.",
        en:
          "Resilience strategy built on edge protection (rate limiting), retry/backoff, DLQ with runbooks, and safe reprocessing without duplicated side effects. Focused on status consistency and graceful degradation to keep operations running during spikes or partial outages.",
      },
      observability: {
        "pt-br":
          "Dashboards por jornada (payment → fulfillment → invoicing), métricas de backlog e taxa de erro por consumidor, monitoramento de DLQ e alertas por SLO. Rastreabilidade por correlationId e enriquecimento de logs com chaves do pedido para diagnóstico rápido.",
        en:
          "Dashboards per journey (payment → fulfillment → invoicing), backlog and error-rate metrics per consumer, DLQ monitoring and SLO-based alerting. CorrelationId traceability and log enrichment with order keys for fast diagnostics.",
      },
      results: {
        "pt-br": [
          "Redução de incidentes operacionais ligados a duplicidade e inconsistência de status.",
          "Melhor previsibilidade para reprocessos, com DLQ e runbooks padronizados.",
          "Tempo de diagnóstico menor com trilha de correlação ponta a ponta.",
        ],
        en: [
          "Reduced operational incidents related to duplicates and status inconsistencies.",
          "More predictable reprocessing with standardized DLQ and runbooks.",
          "Lower time-to-diagnose with end-to-end correlation trail.",
        ],
      },
      nextSteps: {
        "pt-br": [
          "Automatizar triagem de DLQ (classificação erro funcional vs técnico) e priorização por impacto.",
          "Adicionar validação de contratos (schema validation) no pipeline para reduzir quebra de consumidores.",
          "Evoluir scorecards por domínio (latência, falhas, backlog, DLQ) e reforçar SLOs.",
        ],
        en: [
          "Automate DLQ triage (business vs technical classification) and impact-based prioritization.",
          "Add contract/schema validation in CI to reduce consumer breakages.",
          "Evolve domain scorecards (latency, failures, backlog, DLQ) and strengthen SLOs.",
        ],
      },
    },
  },

  {
    slug: "d365-price-stock-ingestion-high-frequency",
    type: "case",
    status: "private",
    title: {
      "pt-br": "Ingestão de preço e estoque em alta frequência para rede de lojas",
      en: "High-frequency price & inventory ingestion for a store network",
    },
    summary: {
      "pt-br":
        "Pipeline resiliente para ingestão recorrente de grandes arquivos, com paralelismo controlado, deduplicação por jobKey e escalabilidade automática (sem perder rastreabilidade).",
      en:
        "Resilient pipeline for recurring large-file ingestion, with controlled parallelism, jobKey-based deduplication, and autoscaling while preserving traceability.",
    },
    tags: [
      "Retail",
      "Alta volumetria",
      "Ingestão de dados",
      "Escalabilidade",
      "Idempotência",
      "Azure",
      "Observabilidade",
    ],
    stack: [
      "ADLS",
      "Event Grid",
      "Azure Service Bus",
      "AKS + KEDA",
      "Cosmos DB/SQL (job control)",
      "App Insights / Logs",
    ],
    content: {
      context: {
        "pt-br":
          "Atualizações frequentes de preço e estoque exigiam ingestão previsível, tolerante a falhas e escalável. O cenário incluía grandes volumes, janelas curtas e necessidade de reconciliação sem duplicar processamento quando ocorria reenvio/retentativa.",
        en:
          "Frequent price and inventory updates required predictable, fault-tolerant, and scalable ingestion. The scenario involved large volumes, short windows, and reconciliation needs without duplicating processing during retries/resends.",
      },
      role: {
        "pt-br":
          "Definição da arquitetura do pipeline (ingestão, particionamento, orquestração e consumo), regras de idempotência por job, estratégia de escala (KEDA) e observabilidade operacional (freshness, backlog, falhas).",
        en:
          "Defined the pipeline architecture (ingestion, partitioning, orchestration and consumption), job-level idempotency rules, scaling strategy (KEDA) and operational observability (freshness, backlog, failures).",
      },
      architecture: {
        "pt-br":
          "Entrada em storage (ADLS/Blob) com disparo por evento e enfileiramento para processamento. Controle de job por chave (ex.: origem + arquivo + versão/hash) para dedupe. Processamento em estágios (validação, split/chunk, aplicação) com paralelismo controlado e autoscaling. Persistência de estado do job para reprocessamento seguro.",
        en:
          "Data lands in storage (ADLS/Blob) with event triggers and queueing for processing. Job control via an idempotency key (e.g., source + file + version/hash) for dedupe. Multi-stage processing (validation, split/chunk, apply) with controlled parallelism and autoscaling. Job state persistence enables safe reprocessing.",
      },
      decisions: {
        "pt-br": [
          "Controle de processamento por jobKey para evitar duplicidade em reenvios e retentativas.",
          "Divisão em chunks para paralelismo e redução do tempo total de processamento.",
          "Escala automática por backlog (KEDA) com limites para proteger dependências.",
          "Métricas de freshness e SLA de dados para governar a janela operacional.",
        ],
        en: [
          "JobKey-based processing control to prevent duplicates on resends and retries.",
          "Chunking to enable parallelism and reduce total processing time.",
          "Backlog-driven autoscaling (KEDA) with caps to protect dependencies.",
          "Freshness metrics and data SLA to govern the operational window.",
        ],
      },
      reliability: {
        "pt-br":
          "Retries com backoff para falhas técnicas, DLQ para eventos inválidos/erros funcionais, e capacidade de reprocessar por partição/janela. Proteções para evitar cascata em picos (limites de concorrência, rate limit e validações antecipadas).",
        en:
          "Retries with backoff for technical failures, DLQ for invalid events/business errors, and partition/window reprocessing. Protections to avoid cascading during spikes (concurrency caps, rate limiting, early validation).",
      },
      observability: {
        "pt-br":
          "Dashboards com volumes processados, tempo por etapa, taxa de erro e backlog. Alertas por quebra de SLA (freshness), aumento de DLQ e degradação de performance. Logs correlacionados por jobId/correlationId.",
        en:
          "Dashboards for processed volume, per-stage timings, error rates and backlog. Alerts for SLA breaches (freshness), DLQ spikes and performance degradation. Logs correlated by jobId/correlationId.",
      },
      results: {
        "pt-br": [
          "Maior previsibilidade em janelas curtas de atualização (menos atrasos e reprocessos manuais).",
          "Redução de duplicidade via dedupe por jobKey e trilha de auditoria.",
          "Escalabilidade controlada com melhor estabilidade em picos.",
        ],
        en: [
          "More predictable updates in short windows (fewer delays and manual reprocessing).",
          "Reduced duplicates via jobKey dedupe and audit trail.",
          "Controlled scalability with improved spike stability.",
        ],
      },
      nextSteps: {
        "pt-br": [
          "Adicionar validação de contrato de dados (schema checks) antes do processamento pesado.",
          "Automatizar reconciliação e relatórios de divergência (observabilidade de qualidade do dado).",
          "Evoluir classificação automática de falhas na DLQ e playbooks por causa raiz.",
        ],
        en: [
          "Add data contract validation (schema checks) before heavy processing.",
          "Automate reconciliation and divergence reporting (data quality observability).",
          "Evolve automatic DLQ failure classification and root-cause playbooks.",
        ],
      },
    },
  },

  {
    slug: "d365-store-ops-integrations-store-commerce-api",
    type: "case",
    status: "private",
    title: {
      "pt-br": "Integrações de Store Ops: notificação, impressão e orquestração no PDV",
      en: "Store Ops integrations: notifications, printing, and POS orchestration",
    },
    summary: {
      "pt-br":
        "Integração de eventos do pedido com operações de loja (PDV), garantindo consistência de status, reprocessamento seguro e UX operacional para a ponta.",
      en:
        "Integrated order events with store operations (POS), ensuring consistent statuses, safe reprocessing, and operational UX for frontline teams.",
    },
    tags: [
      "Dynamics 365 Commerce",
      "Store Ops",
      "Integração",
      "Mensageria",
      "Resiliência",
    ],
    stack: [
      "D365 Commerce",
      "Store Commerce API",
      "Azure Service Bus",
      "APISIX/APIM",
      "AKS",
    ],
    content: {
      context: {
        "pt-br":
          "Operações de loja precisavam reagir rapidamente a mudanças de status do pedido (ex.: confirmado, pronto para retirada, cancelado), com comunicação e ações no PDV (notificações/print). O desafio era garantir consistência e evitar duplicidade em reprocessos, sem gerar ruído para a equipe da ponta.",
        en:
          "Store operations needed to react quickly to order status changes (e.g., confirmed, ready for pickup, canceled), triggering actions at the POS (notifications/printing). The challenge was ensuring consistency and preventing duplicates during reprocessing, without creating noise for frontline teams.",
      },
      role: {
        "pt-br":
          "Desenho de integração e contratos para Store Ops, estratégia de idempotência por ação (print/notificação), padrões de falha e observabilidade. Alinhamento do fluxo operacional com times de loja e plataforma para minimizar atrito.",
        en:
          "Designed integration and contracts for Store Ops, idempotency strategy per action (print/notification), failure patterns and observability. Aligned operational flow with store and platform teams to minimize friction.",
      },
      architecture: {
        "pt-br":
          "Eventos do pedido publicados por domínio e consumidos por componentes responsáveis por acionar ações no PDV via Store Commerce API. Cada ação é registrada com chave idempotente para evitar repetição (ex.: reprint involuntário). Mensageria com DLQ e reprocessamento controlado para manter confiabilidade em picos.",
        en:
          "Order events published per domain and consumed by components that trigger POS actions via Store Commerce API. Each action is tracked with an idempotency key to prevent repetition (e.g., unintended reprints). Messaging with DLQ and controlled reprocessing ensures reliability during spikes.",
      },
      decisions: {
        "pt-br": [
          "Separação clara entre evento de negócio (status do pedido) e ações operacionais (print/notificação) para reduzir acoplamento.",
          "Idempotência por ação (orderId + actionType + version) com trilha de auditoria.",
          "DLQ com triagem e reprocessamento seguro para evitar impacto na loja.",
          "Observabilidade por loja/canal para identificar gargalos e falhas recorrentes.",
        ],
        en: [
          "Clear separation between business events (order status) and operational actions (print/notification) to reduce coupling.",
          "Action-level idempotency (orderId + actionType + version) with an audit trail.",
          "DLQ triage and safe reprocessing to avoid store impact.",
          "Per-store/channel observability to identify bottlenecks and recurring failures.",
        ],
      },
      reliability: {
        "pt-br":
          "Proteção contra duplicidade, retries com backoff e limites de concorrência para não sobrecarregar o PDV. Runbooks operacionais para DLQ e estratégia de degradação (ex.: reter ação e reexecutar com segurança).",
        en:
          "Duplicate protection, retries with backoff and concurrency caps to avoid POS overload. Operational runbooks for DLQ and a degradation strategy (e.g., hold actions and safely replay).",
      },
      observability: {
        "pt-br":
          "Métricas por tipo de ação (print/notificação), taxa de sucesso, tempo de resposta e DLQ. Logs enriquecidos com chaves (loja/pedido/ação) e correlação por correlationId para diagnóstico rápido.",
        en:
          "Metrics per action type (print/notification), success rate, response time, and DLQ. Logs enriched with keys (store/order/action) and correlationId-based tracing for fast diagnostics.",
      },
      results: {
        "pt-br": [
          "Redução de retrabalho em loja com ações mais consistentes e previsíveis.",
          "Menos duplicidade (reprints/ruído) por controle de idempotência por ação.",
          "Melhor visibilidade operacional por loja e por jornada.",
        ],
        en: [
          "Reduced store rework with more consistent, predictable actions.",
          "Fewer duplicates (reprints/noise) via action-level idempotency control.",
          "Improved operational visibility per store and per journey.",
        ],
      },
      nextSteps: {
        "pt-br": [
          "Automatizar classificação e priorização de DLQ por impacto operacional.",
          "Adicionar testes de carga/soak para ações no PDV em horários de pico.",
          "Evoluir UX operacional (mensagens e feedback) para reduzir erros humanos.",
        ],
        en: [
          "Automate DLQ classification and impact-based prioritization.",
          "Add load/soak testing for POS actions during peak hours.",
          "Evolve operational UX (messages and feedback) to reduce human errors.",
        ],
      },
    },
  },

  {
    slug: "d365-fo-commerce-master-data-catalog-sync",
    type: "case",
    status: "private",
    title: {
      "pt-br": "Sincronização de dados mestres e catálogo entre F&O e canais",
      en: "Master data and catalog sync between F&O and channels",
    },
    summary: {
      "pt-br":
        "Estratégia de integração para dados mestres (produtos, preços, disponibilidade) com contratos de API, versionamento e validações para reduzir divergência e retrabalho.",
      en:
        "Integration strategy for master data (products, pricing, availability) with API contracts, versioning, and validations to reduce mismatches and rework.",
    },
    tags: [
      "Dynamics 365 F&O",
      "Dynamics 365 Commerce",
      "Catálogo",
      "Contratos de API",
      "Versionamento",
      "Qualidade de dados",
    ],
    stack: [
      "D365 F&O",
      "D365 Commerce",
      "API Gateway (APISIX/APIM)",
      "AKS",
      "Service Bus",
      "Cache (Redis) (opcional)",
    ],
    content: {
      context: {
        "pt-br":
          "Diferenças de consumo e múltiplas integrações geravam inconsistência de catálogo, preço e disponibilidade entre canais. Era necessário padronizar contratos, definir versionamento e garantir validações para reduzir incidentes e retrabalho operacional.",
        en:
          "Different consumption patterns and multiple integrations caused catalog, pricing, and availability inconsistencies across channels. It was necessary to standardize contracts, implement versioning, and enforce validations to reduce incidents and operational rework.",
      },
      role: {
        "pt-br":
          "Definição de arquitetura e contratos (API e eventos), padrões de validação e governança, além de estratégia de sincronização e reconciliação. Apoio aos times para adoção incremental e mitigação de riscos de rollout.",
        en:
          "Defined architecture and contracts (APIs and events), validation and governance standards, plus synchronization and reconciliation strategy. Supported teams for incremental adoption and rollout risk mitigation.",
      },
      architecture: {
        "pt-br":
          "Domínios de dados mestres com publicação/consumo controlados (eventos) e leitura padronizada via APIs governadas. Versionamento de contrato (v1/v2), validações de qualidade e trilha de auditoria para reconciliação. Cache opcional para cenários de leitura de alta frequência.",
        en:
          "Master data domains with controlled publish/consume (events) and standardized reads via governed APIs. Contract versioning (v1/v2), data-quality validations, and an audit trail for reconciliation. Optional caching for high-frequency read scenarios.",
      },
      decisions: {
        "pt-br": [
          "Contratos versionados para permitir evolução sem ruptura (compatibilidade retroativa).",
          "Separação de escrita (eventos) e leitura (APIs) para otimização por padrão de acesso.",
          "Validações antes de propagar alterações para reduzir incidentes em canais.",
          "Reconciliação orientada por auditoria e janelas de reprocessamento.",
        ],
        en: [
          "Versioned contracts to evolve without breaking consumers (backward compatibility).",
          "Separation of write (events) and read (APIs) paths to optimize per access pattern.",
          "Pre-propagation validations to reduce channel incidents.",
          "Audit-driven reconciliation with window-based reprocessing.",
        ],
      },
      reliability: {
        "pt-br":
          "Controle de duplicidade e ordenação lógica onde necessário, retries para falhas técnicas e DLQ para erros funcionais. Estratégia de reprocessamento por janela para recuperar consistência após indisponibilidades.",
        en:
          "Duplicate control and logical ordering where needed, retries for technical failures and DLQ for business errors. Window-based reprocessing strategy to restore consistency after outages.",
      },
      observability: {
        "pt-br":
          "Métricas por domínio (lag de sincronização, taxa de rejeição, backlog, DLQ) e alertas por degradação de qualidade do dado. Logs correlacionados por entidade/chave de negócio.",
        en:
          "Per-domain metrics (sync lag, rejection rate, backlog, DLQ) and alerts for data-quality degradation. Logs correlated by entity/business key.",
      },
      results: {
        "pt-br": [
          "Redução de divergência de preço/estoque e incidentes de catálogo.",
          "Menos acoplamento e maior velocidade para evoluir fluxos e canais.",
          "Base preparada para expansão e novos consumidores com contratos estáveis.",
        ],
        en: [
          "Reduced price/inventory divergence and catalog-related incidents.",
          "Lower coupling and faster delivery for new flows and channels.",
          "Foundation ready for expansion and new consumers with stable contracts.",
        ],
      },
      nextSteps: {
        "pt-br": [
          "Implementar validação automática de contratos (schema registry/CI).",
          "Aprimorar observabilidade de qualidade do dado com scorecards de domínio.",
          "Evoluir cache por persona/canal para otimizar leitura (POS vs eCom).",
        ],
        en: [
          "Implement automated contract validation (schema registry/CI).",
          "Improve data-quality observability with domain scorecards.",
          "Evolve persona/channel-based caching for read optimization (POS vs eCom).",
        ],
      },
    },
  },
 {
    slug: "powerplatform-governanca-coe-alm-enterprise",
    type: "case" as const,
    status: "public" as const,

    title: {
      "pt-br": "Power Platform em escala: CoE, Governança e ALM Enterprise",
      en: "Power Platform at scale: CoE, Governance and Enterprise ALM",
    },

    summary: {
      "pt-br":
        "Estruturei um operating model para acelerar entregas com Power Platform sem perder controle: ambientes, DLP, pipelines, catálogo e observabilidade operacional.",
      en:
        "Built an operating model to accelerate Power Platform delivery without losing control: environments, DLP, pipelines, catalog and operational observability.",
    },

    tags: [
      "Power Platform",
      "Power Apps",
      "Power Automate",
      "Dataverse",
      "ALM",
      "Governance",
      "DLP",
      "Security",
      "Observability",
      "Performance",
    ],

    stack: [
      "Power Apps (Model-driven + Canvas)",
      "Power Automate (Cloud flows)",
      "Power Pages (internal portal)",
      "Dataverse",
      "CoE Starter Kit (adaptado)",
      "Azure AD / Entra ID",
    ],

    content: {
      context: {
        "pt-br":
          "Crescimento acelerado de apps/flows em múltiplas áreas, com risco de sprawl, baixa rastreabilidade, conectores fora do padrão e dificuldade de publicar mudanças com previsibilidade. Necessidade de aumentar velocidade de entrega com governança real, segurança e suporte operacional.",
        en:
          "Rapid growth of apps/flows across teams, leading to sprawl risk, low traceability, non-standard connectors and unreliable releases. Needed faster delivery with real governance, security and ops support.",
      },

      role: {
        "pt-br":
          "Atuei como líder técnico e arquiteto de Power Platform: desenhei o modelo de ambientes, padrões de ALM, governança (DLP/RBAC), catálogo e práticas operacionais. Hands-on na implementação de soluções base (admin console, request center, automações de compliance) e definição de runbooks e métricas.",
        en:
          "Acted as tech lead and Power Platform architect: designed environment strategy, ALM standards, governance (DLP/RBAC), catalog and ops practices. Hands-on building core solutions (admin console, request center, compliance automations) plus runbooks and metrics.",
      },

      architecture: {
        "pt-br": `L0 (Entrada): solicitações de ambientes/acessos, inventário de apps/flows, telemetria de execução e eventos de conformidade.
L1 (Borda/Exposição): portal interno (Power Pages) e consoles (Power Apps) com AuthN/AuthZ via Entra ID e RBAC por função.
L2 (Integração): orquestração com Power Automate (aprovações, provisionamento, checks), padrão de idempotência por requestId e trilha de auditoria no Dataverse.
L3 (Processamento/Dados): Dataverse como system-of-record (catálogo, owners, policies, exceções, logs), validações e rotinas de compliance.
L4 (Consumo/Operação): dashboards operacionais, alertas e runbooks (incidentes, flows falhando, apps órfãos), pipeline de release e scorecard de governança.`,
        en: `L0 (Inputs): environment/access requests, apps/flows inventory, run telemetry and compliance events.
L1 (Edge/Exposure): internal portal (Power Pages) and consoles (Power Apps) with AuthN/AuthZ via Entra ID and role-based access.
L2 (Integration): orchestration with Power Automate (approvals, provisioning, checks), idempotency by requestId and audit trail in Dataverse.
L3 (Processing/Data): Dataverse as system-of-record (catalog, owners, policies, exceptions, logs), validations and compliance routines.
L4 (Consumption/Ops): ops dashboards, alerts and runbooks (incidents, failing flows, orphaned apps), release pipeline and governance scorecard.`,
      },

      decisions: {
        "pt-br": [
          "Centralizei governança e catálogo no Dataverse para garantir trilha de auditoria, ownership e automações consistentes (vs. planilhas/SharePoint disperso).",
          "Adoção de ALM via Solutions + variáveis de ambiente + connection references, garantindo releases previsíveis entre Dev/Test/Prod.",
          "Padronizei compliance como workflows idempotentes (requestId + status) com reprocesso seguro e histórico completo.",
          "Criei scorecard e limites operacionais (concurrency/volume) para reduzir falhas e evitar throttling em cenários de pico.",
        ],
        en: [
          "Centralized governance and catalog in Dataverse to ensure audit trail, ownership and consistent automations (vs. scattered spreadsheets/SharePoint).",
          "Adopted ALM with Solutions + environment variables + connection references for predictable Dev/Test/Prod releases.",
          "Standardized compliance as idempotent workflows (requestId + status) with safe reprocessing and full history.",
          "Introduced scorecard and operational caps (concurrency/volume) to reduce failures and prevent throttling during peaks.",
        ],
      },

      reliability: {
        "pt-br":
          "Implementei retries com backoff e limites de concorrência em fluxos críticos, além de trilha de falhas com reprocesso controlado. Defini cenários de degradação (ex.: modo manual com filas de aprovação) e SLOs operacionais para incidentes e tempo de resposta.",
        en:
          "Implemented retries with backoff and concurrency caps for critical flows, plus failure trails with controlled reprocessing. Defined graceful degradation paths (e.g., manual mode with approval queues) and operational SLOs for incidents and response time.",
      },

      observability: {
        "pt-br":
          "Padronizei correlationId end-to-end (requestId), logs estruturados no Dataverse, métricas de falha/sucesso, backlog de aprovações e alertas. Criei dashboards por domínio (ALM, compliance, runs críticos) e runbooks para triagem, mitigação e RCA.",
        en:
          "Standardized end-to-end correlationId (requestId), structured logs in Dataverse, failure/success metrics, approval backlog and alerts. Built domain dashboards (ALM, compliance, critical runs) and runbooks for triage, mitigation and RCA.",
      },

      results: {
        "pt-br": [
          "Publicações mais previsíveis com padrões de ALM e separação clara de ambientes e conexões.",
          "Redução de risco operacional ao detectar e tratar apps/flows órfãos e conectores fora do padrão com automações de compliance.",
          "Maior velocidade e consistência: templates, componentes reutilizáveis e catálogo interno reduziram retrabalho e divergência entre squads.",
        ],
        en: [
          "More predictable releases with ALM standards and clear separation of environments and connections.",
          "Lower operational risk by detecting and handling orphaned apps/flows and non-compliant connectors through compliance automations.",
          "Higher speed and consistency: templates, reusable components and internal catalog reduced rework and divergence across squads.",
        ],
      },

      nextSteps: {
        "pt-br": [
          "Adicionar validação de schema e scorecard automático por solução (checks de qualidade, conectores, permissões, naming).",
          "Automatizar tratamento de falhas recorrentes (auto-remediation) e enriquecer RCA com trilhas e classificações de incidentes.",
        ],
        en: [
          "Add schema validation and automated scorecard per solution (quality checks, connectors, permissions, naming).",
          "Automate recurring failure handling (auto-remediation) and enrich RCA with trails and incident classification.",
        ],
      },
    },
  },

  {
    slug: "powerpages-onboarding-parceiros-compliance-aprovacoes",
    type: "case" as const,
    status: "public" as const,

    title: {
      "pt-br": "Portal de Fornecedores: Onboarding, Compliance e Aprovação Multiárea",
      en: "Supplier Portal: Onboarding, Compliance and Multi-stage Approvals",
    },

    summary: {
      "pt-br":
        "Criei um portal transacional para onboarding de fornecedores com validações, aprovações em camadas, auditoria e segurança por registro (NDA-safe).",
      en:
        "Built a transactional supplier onboarding portal with validations, multi-stage approvals, auditing and row-level security (NDA-safe).",
    },

    tags: [
      "Power Pages",
      "Power Apps",
      "Power Automate",
      "Dataverse",
      "Security",
      "Governance",
      "Audit",
      "Process Automation",
      "Compliance",
      "Performance",
    ],

    stack: [
      "Power Pages",
      "Power Apps (Model-driven + Canvas)",
      "Power Automate",
      "Dataverse",
      "Entra ID (Azure AD) / B2B",
      "SharePoint (anexos, quando aplicável)",
    ],

    content: {
      context: {
        "pt-br":
          "Cadastro de fornecedores fragmentado (e-mails/planilhas), alto retrabalho e risco de inconsistências. Processo exigia múltiplas áreas (Compras/Fiscal/Jurídico/Compliance), evidências documentais e rastreabilidade completa de decisões.",
        en:
          "Supplier onboarding was fragmented (emails/spreadsheets), high rework and inconsistent data risk. The process required multiple teams (Procurement/Tax/Legal/Compliance), document evidence and full decision traceability.",
      },

      role: {
        "pt-br":
          "Fui responsável por arquitetura funcional e técnica: modelo de dados no Dataverse, segurança por perfis e por registro, desenho do processo (máquina de estados), UX do portal, automações de aprovação e padrões de auditoria. Hands-on em Pages, apps internos e fluxos críticos.",
        en:
          "Owned functional and technical architecture: Dataverse data model, role and row-level security, process design (state machine), portal UX, approval automations and audit standards. Hands-on across Pages, internal apps and critical flows.",
      },

      architecture: {
        "pt-br": `L0 (Entrada): fornecedores submetem dados e documentos; áreas internas validam e aprovam; regras variam por categoria/criticidade.
L1 (Borda/Exposição): Power Pages com Web Roles e Table Permissions; autenticação e segregação de acesso por registro (row-level).
L2 (Integração): Power Automate orquestra validações, aprovações e notificações; idempotência por supplierRequestId; trilha de auditoria.
L3 (Processamento/Dados): Dataverse como repositório (cadastro, evidências, pendências, decisões, versões de documentos); regras e consistência.
L4 (Consumo/Operação): apps internos (Model-driven) para esteiras de validação, dashboards operacionais e runbooks de exceção.`,
        en: `L0 (Inputs): suppliers submit data and documents; internal teams validate and approve; rules vary by category/criticality.
L1 (Edge/Exposure): Power Pages with Web Roles and Table Permissions; authentication and row-level record segregation.
L2 (Integration): Power Automate orchestrates validations, approvals and notifications; idempotency via supplierRequestId; audit trail.
L3 (Processing/Data): Dataverse as repository (profiles, evidence, pending items, decisions, document versions); rules and consistency.
L4 (Consumption/Ops): internal apps (Model-driven) for validation lanes, ops dashboards and exception runbooks.`,
      },

      decisions: {
        "pt-br": [
          "Usei Dataverse como system-of-record para suportar auditoria, status e ownership (em vez de soluções dispersas por área).",
          "Modelei o fluxo como máquina de estados para permitir reenvios, correções guiadas e rastreabilidade sem perder histórico.",
          "Apliquei row-level security e permissões do Power Pages para expor somente registros do próprio fornecedor, com trilha de acesso.",
          "Implementei validações e aprovações idempotentes (supplierRequestId + estado) com reprocesso seguro e logs estruturados.",
        ],
        en: [
          "Used Dataverse as system-of-record to support auditing, status and ownership (instead of team-scattered tools).",
          "Modeled the process as a state machine to enable resubmissions, guided corrections and traceability without losing history.",
          "Applied row-level security and Power Pages permissions to expose only supplier-owned records, with access trails.",
          "Implemented idempotent validations/approvals (supplierRequestId + state) with safe reprocessing and structured logs.",
        ],
      },

      reliability: {
        "pt-br":
          "Fluxos com retry/backoff, limites de concorrência e tratamento de falhas por etapa. Pendências e exceções ficam registradas para retomada, com caminhos de degradação (ex.: aprovação manual) e SLOs por etapa (triagem, validação, aprovação).",
        en:
          "Flows with retry/backoff, concurrency caps and step-based failure handling. Pending items and exceptions are recorded for restart, with graceful degradation paths (e.g., manual approval) and step-level SLOs (triage, validation, approval).",
      },

      observability: {
        "pt-br":
          "CorrelationId por solicitação, logs estruturados e trilha de decisões no Dataverse. Dashboards de backlog por área, tempo por etapa, taxas de devolução/correção e alertas para SLA em risco com runbooks.",
        en:
          "Per-request correlationId, structured logs and decision trail in Dataverse. Dashboards for backlog by team, stage time, return/correction rates and SLA-risk alerts with runbooks.",
      },

      results: {
        "pt-br": [
          "Processo padronizado e auditável, reduzindo incerteza e retrabalho na coleta e validação de evidências.",
          "Melhor experiência para fornecedores com correção guiada e acompanhamento transparente do status.",
          "Maior controle e segurança com segregação por registro e governança do ciclo completo do onboarding.",
        ],
        en: [
          "Standardized and auditable process, reducing uncertainty and evidence validation rework.",
          "Better supplier experience with guided corrections and transparent status tracking.",
          "Stronger control and security with row-level segregation and full lifecycle governance.",
        ],
      },

      nextSteps: {
        "pt-br": [
          "Adicionar score de risco automatizado (regras + indicadores) para priorização da esteira e aprovação adaptativa.",
          "Evoluir para validações de documentos com templates e checagens automatizadas (camada de qualidade de evidências).",
        ],
        en: [
          "Add automated risk scoring (rules + signals) to prioritize the lane and enable adaptive approvals.",
          "Evolve document validation with templates and automated checks (evidence quality layer).",
        ],
      },
    },
  },

  {
    slug: "powerapps-offline-first-operacao-campo-sync-resiliente",
    type: "case" as const,
    status: "public" as const,

    title: {
      "pt-br": "Operação de Campo Offline-First: App Canvas com Sync Resiliente e Evidências",
      en: "Offline-first Field Ops: Canvas App with Resilient Sync and Evidence Trail",
    },

    summary: {
      "pt-br":
        "Desenvolvi um app offline para auditoria/vistoria/manutenção com fila de sincronização, tratamento de conflitos, evidências e console operacional para supervisão (NDA-safe).",
      en:
        "Built an offline field ops app for audits/inspections/maintenance with sync queue, conflict handling, evidence capture and an ops console for supervisors (NDA-safe).",
    },

    tags: [
      "Power Apps Canvas",
      "Power Apps Model-driven",
      "Power Automate",
      "Dataverse",
      "Offline-first",
      "Security",
      "Observability",
      "Performance",
      "Mobile UX",
      "Operations",
    ],

    stack: [
      "Power Apps (Canvas offline)",
      "Power Apps (Model-driven ops console)",
      "Power Automate",
      "Dataverse",
      "SharePoint/Blob (anexos, quando aplicável)",
      "Power Pages (consulta e relatórios, opcional)",
    ],

    content: {
      context: {
        "pt-br":
          "Equipes em campo precisavam executar checklists e registrar evidências em locais com conectividade instável. O processo exigia rastreabilidade, redução de erros de preenchimento e capacidade de reprocessar sincronizações falhas sem perda de dados.",
        en:
          "Field teams needed to run checklists and capture evidence in low-connectivity locations. The process required traceability, fewer data-entry errors and safe reprocessing of failed sync attempts without data loss.",
      },

      role: {
        "pt-br":
          "Atuei como arquiteto e desenvolvedor hands-on: desenhei o padrão offline-first (fila local, estados, sync, conflitos), otimizei performance/delegação, modelei dados no Dataverse, criei console Model-driven para supervisão e implementei automações pós-sync com logging e alertas.",
        en:
          "Served as architect and hands-on builder: designed the offline-first pattern (local queue, states, sync, conflicts), optimized performance/delegation, modeled Dataverse data, built a Model-driven supervisor console and implemented post-sync automations with logging and alerts.",
      },

      architecture: {
        "pt-br": `L0 (Entrada): registros de campo (checklists, medições, fotos/anexos), eventos de sync e correções.
L1 (Borda/Exposição): Canvas App com autenticação e perfis; regras de UX para minimizar erro; validações locais antes de enviar.
L2 (Integração): Power Automate processa itens sincronizados, aplica validações, cria tarefas/ações e registra logs; idempotência por workItemId.
L3 (Processamento/Dados): Dataverse como base transacional (vistorias, itens, evidências, status), estratégia de conflitos e consistência.
L4 (Consumo/Operação): Model-driven console para supervisores (pendências, falhas, reprocesso), relatórios e alertas com runbooks.`,
        en: `L0 (Inputs): field records (checklists, readings, photos/attachments), sync events and corrections.
L1 (Edge/Exposure): Canvas App with auth and roles; UX rules to minimize errors; local validations before send.
L2 (Integration): Power Automate processes synced items, applies validations, creates tasks/actions and records logs; idempotency by workItemId.
L3 (Processing/Data): Dataverse as transactional store (inspections, items, evidence, statuses), conflict strategy and consistency.
L4 (Consumption/Ops): Model-driven supervisor console (pending, failures, reprocess), reporting and alerts with runbooks.`,
      },

      decisions: {
        "pt-br": [
          "Implementei fila local com estados (Draft/PendingSync/Synced/Failed) para garantir recuperação e reenvio sem perda de dados.",
          "Modelei registros e evidências no Dataverse com chaves estáveis (workItemId) para idempotência e dedupe no pós-processamento.",
          "Otimizei performance do Canvas com padrões delegáveis, paginação e carregamento progressivo para uso em dispositivos móveis.",
          "Criei console Model-driven para operacionalizar falhas: triagem, reprocesso controlado e auditoria do histórico de sync.",
        ],
        en: [
          "Implemented a local queue with states (Draft/PendingSync/Synced/Failed) to ensure recovery and resubmission without data loss.",
          "Modeled records and evidence in Dataverse with stable keys (workItemId) for idempotency and dedupe in post-processing.",
          "Optimized Canvas performance with delegation-friendly patterns, paging and progressive loading for mobile use.",
          "Built a Model-driven ops console to operationalize failures: triage, controlled reprocessing and sync history auditing.",
        ],
      },

      reliability: {
        "pt-br":
          "Fluxos pós-sync com retry/backoff e limites de concorrência, registrando falhas por etapa e permitindo reprocesso seguro. Quando conectividade é baixa, o app mantém operação em modo offline e sincroniza em lote quando possível, com fallback para tratamento manual de exceções.",
        en:
          "Post-sync flows with retry/backoff and concurrency caps, recording step failures and enabling safe reprocessing. When connectivity is low, the app operates offline and batch-syncs when possible, with fallback to manual exception handling.",
      },

      observability: {
        "pt-br":
          "CorrelationId por vistoria/workItem, logs estruturados (estado, tentativa, erro, etapa), métricas de taxa de sync e fila pendente, alertas para falhas recorrentes e runbooks de correção. Dashboards operacionais por região/equipe.",
        en:
          "Per-inspection/workItem correlationId, structured logs (state, attempt, error, stage), sync success rate and pending queue metrics, alerts for recurring failures and correction runbooks. Ops dashboards by region/team.",
      },

      results: {
        "pt-br": [
          "Operação em campo mais confiável: coleta de evidências e checklists sem depender de conectividade constante.",
          "Menos retrabalho com validação guiada no app e padronização do processo de vistoria.",
          "Melhor controle operacional: console para falhas de sync e reprocesso com trilha auditável.",
        ],
        en: [
          "More reliable field operation: evidence capture and checklists without requiring constant connectivity.",
          "Less rework with guided validation in-app and standardized inspection process.",
          "Better ops control: sync failure console and auditable reprocessing trail.",
        ],
      },

      nextSteps: {
        "pt-br": [
          "Adicionar heurística de resolução automática de conflito e alertas por padrão de inconsistência de dados.",
          "Evoluir evidências com classificação/qualidade (ex.: checklist de completude) e score de conformidade por unidade.",
        ],
        en: [
          "Add automatic conflict resolution heuristics and alerts for recurring data inconsistency patterns.",
          "Evolve evidence with quality/completeness scoring and compliance score per unit.",
        ],
      },
    },
  },

  {
    slug: "powerplatform-clm-contratos-aprovacao-assinatura-auditoria",
    type: "case" as const,
    status: "public" as const,

    title: {
      "pt-br": "CLM com Power Platform: Contratos, Aprovação, Assinatura e Auditoria",
      en: "Power Platform CLM: Contracts, Approvals, Signatures and Audit Trail",
    },

    summary: {
      "pt-br":
        "Implementei uma plataforma de gestão de contratos com versionamento, aprovações, assinatura eletrônica e trilha de auditoria ponta a ponta (NDA-safe).",
      en:
        "Implemented a contracts lifecycle platform with versioning, approvals, e-signatures and end-to-end audit trail (NDA-safe).",
    },

    tags: [
      "Power Apps",
      "Power Automate",
      "Power Pages",
      "Dataverse",
      "Security",
      "Audit",
      "Governance",
      "Process Automation",
      "Performance",
      "Operations",
    ],

    stack: [
      "Power Apps (Model-driven + Canvas)",
      "Power Pages",
      "Power Automate",
      "Dataverse",
      "SharePoint (document library)",
      "e-Sign provider (integration-ready)",
    ],

    content: {
      context: {
        "pt-br":
          "Ciclo de contratos sofria com versões perdidas, aprovações via e-mail e baixa rastreabilidade para auditoria. Necessidade de padronizar o fluxo do rascunho à assinatura, com controle de acesso, evidências e governança de retenção.",
        en:
          "Contract lifecycle suffered from lost versions, email-based approvals and low auditability. Needed a standardized flow from draft to signature, with access control, evidence and retention governance.",
      },

      role: {
        "pt-br":
          "Atuei na arquitetura e entrega end-to-end: desenho de entidades (contrato, versão, cláusulas, aprovações, evidências), segurança por perfil/unidade, construção do app Model-driven (gestão) e Canvas (wizard), portal externo, automações de geração/assinatura e trilhas de auditoria.",
        en:
          "Delivered end-to-end architecture: entity design (contract, version, clauses, approvals, evidence), role/unit security, Model-driven management app and Canvas wizard, external portal and automations for generation/signature with full audit trails.",
      },

      architecture: {
        "pt-br": `L0 (Entrada): requisições de contrato, templates, anexos e dados mestres; interações de revisão/aprovação/assinatura.
L1 (Borda/Exposição): Power Pages para partes externas com permissões por registro; apps internos com RBAC e trilha de acesso.
L2 (Integração): Power Automate orquestra aprovações, geração de documento, envio para assinatura e notificações; idempotência por contractVersionId.
L3 (Processamento/Dados): Dataverse como system-of-record (estado, versões, cláusulas, decisões); SharePoint para armazenamento de documentos; consistência e versionamento.
L4 (Consumo/Operação): console operacional, relatórios de SLA por etapa, alertas de pendência/expiração e runbooks de exceção.`,
        en: `L0 (Inputs): contract requests, templates, attachments and master data; review/approval/signature interactions.
L1 (Edge/Exposure): Power Pages for external parties with record permissions; internal apps with RBAC and access trails.
L2 (Integration): Power Automate orchestrates approvals, document generation, signature sending and notifications; idempotency by contractVersionId.
L3 (Processing/Data): Dataverse as system-of-record (state, versions, clauses, decisions); SharePoint for document storage; consistency and versioning.
L4 (Consumption/Ops): ops console, step-level SLA reporting, pending/expiry alerts and exception runbooks.`,
      },

      decisions: {
        "pt-br": [
          "Separei ‘metadados transacionais’ (Dataverse) de ‘documentos’ (biblioteca) para performance, auditoria e versionamento controlado.",
          "Modelei o fluxo com estados e versões imutáveis (contractVersionId) para garantir trilha auditável e reprocesso seguro.",
          "Usei Pages para interação externa com permissões estritas por registro (evitando exposição ampla) e logs de acesso.",
          "Automatizei aprovações e assinatura com idempotência e tratamento de exceção (rejeição, reenvio, cancelamento, expiração).",
        ],
        en: [
          "Separated transactional metadata (Dataverse) from documents (library) for performance, auditability and controlled versioning.",
          "Modeled lifecycle with states and immutable versions (contractVersionId) for auditable trail and safe reprocessing.",
          "Used Pages for external interaction with strict record permissions (avoiding broad exposure) and access logs.",
          "Automated approvals and signatures with idempotency and exception handling (reject, resend, cancel, expire).",
        ],
      },

      reliability: {
        "pt-br":
          "Aprovações e assinaturas com retries/backoff, prazos e escalonamento. Falhas ficam registradas por etapa e podem ser retomadas com reprocesso controlado. Defini caminhos de degradação para etapas externas (ex.: reenviar assinatura / solicitar correção).",
        en:
          "Approvals and signatures with retries/backoff, deadlines and escalation. Failures are recorded per stage and can be resumed with controlled reprocessing. Defined graceful degradation paths for external steps (e.g., resend signature / request correction).",
      },

      observability: {
        "pt-br":
          "CorrelationId por contrato/versão, logs estruturados de transições de estado, métricas de backlog por etapa e alertas para SLA em risco. Dashboards para gestão (tempo de ciclo, gargalos) e runbooks para incidentes e reprocesso.",
        en:
          "Per contract/version correlationId, structured logs for state transitions, backlog metrics per stage and SLA-risk alerts. Dashboards for management (cycle time, bottlenecks) and runbooks for incidents and reprocessing.",
      },

      results: {
        "pt-br": [
          "Maior previsibilidade e rastreabilidade do ciclo contratual, com versionamento e auditoria ponta a ponta.",
          "Menos retrabalho: workflow guiado, validações e trilha clara de pendências e decisões.",
          "Melhor governança de acesso e evidências, reduzindo risco operacional e facilitando auditorias.",
        ],
        en: [
          "More predictable and traceable contract lifecycle with end-to-end versioning and auditing.",
          "Less rework via guided workflow, validations and clear trail of pending items and decisions.",
          "Better access governance and evidence management, reducing operational risk and easing audits.",
        ],
      },

      nextSteps: {
        "pt-br": [
          "Adicionar score de risco por cláusula e playbooks de aprovação adaptativa conforme categoria e criticidade.",
          "Automatizar validação de completude e qualidade de anexos e gerar checklist de compliance por tipo de contrato.",
        ],
        en: [
          "Add clause-level risk scoring and adaptive approval playbooks by category and criticality.",
          "Automate attachment completeness/quality validation and generate compliance checklists per contract type.",
        ],
      },
    },
  },

  {
    slug: "powerplatform-torre-controle-processos-integracao-observabilidade",
    type: "case" as const,
    status: "public" as const,

    title: {
      "pt-br": "Torre de Controle: Processos, Integrações e Observabilidade Operacional",
      en: "Control Tower: Process Orchestration, Integrations and Operational Observability",
    },

    summary: {
      "pt-br":
        "Criei uma torre de controle para rastrear processos ponta a ponta, padronizar reprocesso seguro e reduzir MTTR com logs, alertas e runbooks (NDA-safe).",
      en:
        "Built a control tower to track end-to-end processes, standardize safe reprocessing and reduce MTTR with logs, alerts and runbooks (NDA-safe).",
    },

    tags: [
      "Power Apps Model-driven",
      "Power Apps Canvas",
      "Power Pages",
      "Power Automate",
      "Dataverse",
      "Observability",
      "Reliability",
      "Idempotency",
      "Operations",
      "Performance",
    ],

    stack: [
      "Power Apps (Model-driven ops console)",
      "Power Apps (Canvas triage)",
      "Power Pages (status portal)",
      "Power Automate (orchestration + logging)",
      "Dataverse (process/event store)",
      "Power BI (ops dashboards, opcional)",
    ],

    content: {
      context: {
        "pt-br":
          "Processos críticos entre áreas e sistemas falhavam de forma silenciosa, com baixa visibilidade e dificuldade de reprocessar com segurança. Era necessário um modelo operacional que tornasse falhas observáveis, rastreáveis e tratáveis, reduzindo incidentes e tempo de recuperação.",
        en:
          "Critical cross-team/system processes failed silently with low visibility and unsafe reprocessing. Needed an ops model to make failures observable, traceable and actionable, reducing incidents and recovery time.",
      },

      role: {
        "pt-br":
          "Atuei como arquiteto e responsável por operacionalização: modelei entidade de processo/etapas/eventos/erros, defini padrões de correlação e idempotência, construí console de operações e portal de status, e implementei orquestração e logging em Power Automate com runbooks e alertas.",
        en:
          "Acted as architect and ops owner: modeled process/steps/events/errors entities, defined correlation and idempotency standards, built ops console and status portal, and implemented orchestration and logging in Power Automate with runbooks and alerts.",
      },

      architecture: {
        "pt-br": `L0 (Entrada): eventos de processo (criação/atualização), mudanças de estado, falhas por etapa, solicitações de reprocesso e consultas por protocolo.
L1 (Borda/Exposição): portal de status (Power Pages) e apps operacionais com RBAC; trilha de acesso e segregação por domínio/área.
L2 (Integração): Power Automate como orquestrador, com padrões de idempotência/dedupe por processKey, retries/backoff e registro de eventos/erros.
L3 (Processamento/Dados): Dataverse como event store operacional (Process, StepRun, Event, Error, ReprocessRequest), consistência e auditoria.
L4 (Consumo/Operação): Model-driven console + Canvas triage, dashboards (latência/erro/backlog) e alertas com runbooks para triagem e mitigação.`,
        en: `L0 (Inputs): process events (create/update), state transitions, step-level failures, reprocess requests and protocol-based queries.
L1 (Edge/Exposure): status portal (Power Pages) and ops apps with RBAC; access trail and domain/team segregation.
L2 (Integration): Power Automate as orchestrator with idempotency/dedupe by processKey, retries/backoff and event/error recording.
L3 (Processing/Data): Dataverse as operational event store (Process, StepRun, Event, Error, ReprocessRequest), consistency and auditability.
L4 (Consumption/Ops): Model-driven console + Canvas triage, dashboards (latency/errors/backlog) and alerts with runbooks for triage and mitigation.`,
      },

      decisions: {
        "pt-br": [
          "Criei um modelo de event store operacional no Dataverse para garantir rastreabilidade (vs. depender apenas de histórico de execuções de flow).",
          "Padronizei correlationId e processKey para idempotência, dedupe e reprocesso seguro sem duplicar efeitos.",
          "Separei console Model-driven (gestão/visão completa) de Canvas triage (ação rápida) para eficiência operacional.",
          "Implementei alertas e runbooks com métricas de backlog/erro/latência para reduzir MTTR e padronizar resposta a incidentes.",
        ],
        en: [
          "Built an operational event store in Dataverse for traceability (vs. relying only on flow run history).",
          "Standardized correlationId and processKey for idempotency, dedupe and safe reprocessing without duplicating effects.",
          "Split Model-driven console (full management) from Canvas triage (fast actions) for ops efficiency.",
          "Implemented alerts and runbooks with backlog/error/latency metrics to reduce MTTR and standardize incident response.",
        ],
      },

      reliability: {
        "pt-br":
          "Orquestração com retries/backoff, limites de concorrência, controle de duplicidade e trilha de falha por etapa. Reprocesso controlado via ReprocessRequest, com validações e autorização, além de fallback para tratamento manual em casos específicos.",
        en:
          "Orchestration with retries/backoff, concurrency caps, dedupe control and step-level failure trails. Controlled reprocessing via ReprocessRequest with validations and authorization, plus fallback for manual handling in specific cases.",
      },

      observability: {
        "pt-br":
          "CorrelationId em todas as etapas, logs estruturados por evento e erro, métricas de latência por etapa, taxa de erro, backlog e itens em risco. Dashboards e alertas acionáveis com runbooks (triagem, mitigação, RCA).",
        en:
          "CorrelationId across all stages, structured logs per event and error, step latency metrics, error rate, backlog and at-risk items. Actionable dashboards and alerts with runbooks (triage, mitigation, RCA).",
      },

      results: {
        "pt-br": [
          "Falhas deixaram de ser ‘invisíveis’: processo passou a ter rastreabilidade e status confiável para operação e negócio.",
          "Reprocesso seguro e padronizado reduziu risco de duplicidade e aumentou previsibilidade operacional.",
          "Melhor resposta a incidentes com alertas e runbooks, reduzindo tempo de diagnóstico e recuperação.",
        ],
        en: [
          "Failures stopped being ‘invisible’: processes gained traceability and reliable status for ops and business.",
          "Safe, standardized reprocessing reduced duplication risk and improved operational predictability.",
          "Faster incident response with alerts and runbooks, lowering diagnosis and recovery time.",
        ],
      },

      nextSteps: {
        "pt-br": [
          "Adicionar validação de contrato (schema) e classificação automática de falhas (taxonomy) para RCA e priorização.",
          "Evoluir para auto-remediation em falhas recorrentes e score de saúde por processo/domínio.",
        ],
        en: [
          "Add contract schema validation and automated failure classification (taxonomy) for RCA and prioritization.",
          "Evolve toward auto-remediation for recurring failures and health scoring per process/domain.",
        ],
      },
    },
  },
  // =========================================================
  // Grupo 2 | F&O + Commerce (Public)
  // =========================================================

  {
    slug: "d365-commerce-omnichannel-high-scale",
    type: "case",
    status: "public",
    title: {
      "pt-br": "D365 Commerce Omnichannel em Alta Escala (POS + eCom + Totens)",
      en: "High-Scale D365 Commerce Omnichannel (POS + eCom + Kiosks)",
    },
    summary: {
      "pt-br":
        "Arquitetura omnichannel resiliente para operações de varejo em larga escala, com integração event-driven, performance e observabilidade ponta a ponta.",
      en:
        "Resilient omnichannel architecture for large-scale retail operations, with event-driven integration, performance, and end-to-end observability.",
    },
    tags: [
      "Dynamics 365 Commerce",
      "Omnichannel",
      "Event-driven",
      "Performance",
      "Observability",
    ],
    stack: [
      "Dynamics 365 Commerce",
      "Azure Service Bus",
      "Event Grid",
      "APISIX/APIM",
      "AKS/Functions",
      "Redis Cache",
      "Application Insights",
      "Key Vault",
    ],
    content: {
      context: {
        "pt-br":
          "Necessidade de suportar jornada omnichannel (POS/loja, e-commerce, totens e integrações de backoffice) com consistência de catálogo, preço, promoções e estoque, mantendo resiliência para picos e instabilidades.",
        en:
          "Need to support an omnichannel journey (store/POS, e-commerce, kiosks, and backoffice integrations) with consistent catalog, pricing, promotions, and inventory, while remaining resilient to spikes and instability.",
      },
      role: {
        "pt-br":
          "Atuei como Arquiteto(a) responsável pelo desenho L0–L4, padrões de integração, governança de APIs, estratégia de idempotência e observabilidade, além de orientar times na implementação.",
        en:
          "Acted as the architect responsible for L0–L4 design, integration patterns, API governance, idempotency strategy, and observability, guiding teams through implementation.",
      },
      architecture: {
        "pt-br":
          "Edge/APIs expostas com controles de AuthN/AuthZ e rate limit. Integração baseada em eventos para fluxos críticos (pedido/pagamento/fulfillment), com Service Bus (topics/queues/DLQ) e consumidores em AKS/Functions. Estratégia de cache para leitura (catálogo/preço) e trilhas de rastreamento por correlationId.",
        en:
          "Edge/API layer with AuthN/AuthZ and rate limiting. Event-based integration for critical flows (order/payment/fulfillment) using Service Bus (topics/queues/DLQ) and consumers on AKS/Functions. Read-side caching strategy (catalog/price) and tracing via correlationId.",
      },
      decisions: {
        "pt-br": [
          "Eventos canônicos para desacoplar canais e backoffice (pedido, pagamento, entrega).",
          "Idempotência por chave de negócio + dedupe no consumidor para reprocessamento seguro.",
          "Padrões de retry/backoff e DLQ com triagem operacional.",
          "Cache para leitura e mitigação de latência em jornadas de consulta.",
        ],
        en: [
          "Canonical events to decouple channels and backoffice (order, payment, fulfillment).",
          "Idempotency via business keys + consumer-side dedupe for safe reprocessing.",
          "Retry/backoff patterns and DLQ with operational triage.",
          "Read caching to reduce latency for browsing/availability flows.",
        ],
      },
      reliability: {
        "pt-br":
          "Definição de SLOs, estratégia de fallback e degradação graciosa, reprocessamento controlado (DLQ), e proteção de borda (rate limit) para evitar cascata em picos.",
        en:
          "SLO definition, fallback and graceful degradation strategy, controlled reprocessing (DLQ), and edge protection (rate limit) to prevent cascading failures during spikes.",
      },
      observability: {
        "pt-br":
          "Tracing distribuído (correlationId), métricas por fluxo (latência, taxa de erro, backlog, DLQ), dashboards por canal e alertas com runbooks.",
        en:
          "Distributed tracing (correlationId), flow metrics (latency, error rate, backlog, DLQ), channel dashboards, and alerting with runbooks.",
      },
      results: {
        "pt-br": [
          "Aumento de estabilidade operacional em picos (menos incidentes por sobrecarga).",
          "Redução do tempo de diagnóstico com rastreabilidade ponta a ponta.",
          "Evolução do omnichannel com menor acoplamento entre domínios.",
        ],
        en: [
          "Improved operational stability during spikes (fewer overload incidents).",
          "Reduced time-to-diagnose through end-to-end traceability.",
          "Faster omnichannel evolution with lower coupling across domains.",
        ],
      },
      nextSteps: {
        "pt-br": [
          "Automatizar triagem de DLQ com classificação (erro funcional x técnico).",
          "Aprimorar antifraude/validações com regras configuráveis por canal.",
          "Adicionar testes de carga recorrentes no pipeline.",
        ],
        en: [
          "Automate DLQ triage with classification (business vs technical errors).",
          "Improve fraud checks/validations with channel-configurable rules.",
          "Add recurring load tests into the pipeline.",
        ],
      },
    },
  },

  {
    slug: "d365-fo-order-to-cash-integration",
    type: "case",
    status: "public",
    title: {
      "pt-br": "D365 F&O Order-to-Cash Integrado (Fiscal, Pagamentos, Logística)",
      en: "Integrated D365 F&O Order-to-Cash (Tax, Payments, Logistics)",
    },
    summary: {
      "pt-br":
        "Desenho end-to-end do ciclo Order-to-Cash com integrações enterprise, rastreabilidade, governança e reprocessamento seguro.",
      en:
        "End-to-end Order-to-Cash design with enterprise integrations, traceability, governance, and safe reprocessing.",
    },
    tags: [
      "Dynamics 365 F&O",
      "Order-to-Cash",
      "Integration",
      "Governance",
      "Idempotency",
    ],
    stack: [
      "Dynamics 365 Finance & Operations",
      "Azure Service Bus",
      "APISIX/APIM",
      "AKS/Functions",
      "Key Vault",
      "App Insights",
      "SQL/Dataverse (dependendo do cenário)",
    ],
    content: {
      context: {
        "pt-br":
          "Necessidade de padronizar e escalar integrações do ciclo O2C (pedido → faturamento → fiscal → expedição) reduzindo erros manuais, retrabalho e inconsistência entre sistemas.",
        en:
          "Need to standardize and scale O2C integrations (order → invoicing → tax → shipping), reducing manual errors, rework, and cross-system inconsistencies.",
      },
      role: {
        "pt-br":
          "Definição de arquitetura de integração, contratos e governança (API-first + eventos), regras de idempotência e estratégia de falhas, garantindo previsibilidade operacional.",
        en:
          "Defined integration architecture, contracts and governance (API-first + events), idempotency rules, and failure strategy to ensure operational predictability.",
      },
      architecture: {
        "pt-br":
          "Edge com endpoints governados (auth, quota, logs). Barramento com tópicos por domínio (ex.: faturamento, fiscal, logística), DLQ e reprocessamento controlado. Consumidores com validações e persistência de estado para evitar duplicidade.",
        en:
          "Governed edge endpoints (auth, quotas, logs). Domain-based topics (e.g., billing, tax, logistics), DLQ, and controlled reprocessing. Consumers with validation and state persistence to prevent duplicates.",
      },
      decisions: {
        "pt-br": [
          "Separação por domínios e contratos estáveis para evitar “integração espaguete”.",
          "Chaves idempotentes por evento (businessKey + version) e trilha de auditoria.",
          "Política de erro: retry técnico, DLQ para erro funcional com triagem.",
        ],
        en: [
          "Domain separation and stable contracts to avoid “spaghetti integration”.",
          "Idempotent keys per event (businessKey + version) and audit trail.",
          "Error policy: technical retries, DLQ for business errors with triage.",
        ],
      },
      reliability: {
        "pt-br":
          "Reprocessamento seguro (sem duplicar notas/expedições), garantias de entrega e proteção de borda para picos.",
        en:
          "Safe reprocessing (no duplicated invoices/shipments), delivery guarantees, and edge protection for spikes.",
      },
      observability: {
        "pt-br":
          "Dashboards por etapa O2C, alertas por backlog/DLQ e correlação por pedido/fatura para diagnóstico rápido.",
        en:
          "O2C stage dashboards, backlog/DLQ alerts, and order/invoice correlation for fast diagnostics.",
      },
      results: {
        "pt-br": [
          "Menos retrabalho operacional e maior previsibilidade em fechamentos.",
          "Integrações mais estáveis com governança e contratos consistentes.",
          "Base preparada para evoluções (novos parceiros/novos fluxos).",
        ],
        en: [
          "Less operational rework and more predictable close cycles.",
          "More stable integrations with governance and consistent contracts.",
          "Foundation ready for evolution (new partners/new flows).",
        ],
      },
      nextSteps: {
        "pt-br": [
          "Adicionar schema registry e validação automática de contratos.",
          "Criar “integration scorecard” (latência, taxa de falha, DLQ por domínio).",
        ],
        en: [
          "Add a schema registry and automated contract validation.",
          "Create an integration scorecard (latency, failure rate, DLQ per domain).",
        ],
      },
    },
  },

  {
    slug: "d365-masterdata-product-price-inventory-platform",
    type: "case",
    status: "public",
    title: {
      "pt-br":
        "Plataforma de Master Data (Produto, Preço e Estoque) para F&O + Commerce",
      en: "Master Data Platform (Product, Price & Inventory) for F&O + Commerce",
    },
    summary: {
      "pt-br":
        "Desacoplamento e padronização de dados críticos (catálogo/preço/estoque) com contratos versionados e consistência entre canais.",
      en:
        "Decoupling and standardizing critical data (catalog/price/inventory) with versioned contracts and cross-channel consistency.",
    },
    tags: ["Master Data", "D365 F&O", "D365 Commerce", "Contracts", "Scalability"],
    stack: [
      "Dynamics 365 F&O",
      "Dynamics 365 Commerce",
      "Azure Service Bus",
      "Event Grid",
      "Blob/ADLS",
      "AKS/Functions",
      "Redis Cache",
      "App Insights",
    ],
    content: {
      context: {
        "pt-br":
          "Canais e integrações consumindo dados críticos de formas diferentes geravam divergência e incidentes (promoções, preços e disponibilidade). Era necessário um “core” de dados com contratos e versionamento.",
        en:
          "Channels and integrations consuming critical data in different ways caused divergence and incidents (promotions, pricing, and availability). A contract-based, versioned data core was required.",
      },
      role: {
        "pt-br":
          "Arquitetura dos domínios, desenho de contratos e estratégia de sincronização, garantindo compatibilidade entre sistemas e evolução sem ruptura.",
        en:
          "Architected domains, designed contracts and synchronization strategy, ensuring compatibility and non-breaking evolution.",
      },
      architecture: {
        "pt-br":
          "Modelo “publish/subscribe” por domínio (produto/preço/estoque) e leitura padronizada via APIs governadas. Versionamento de contrato (v1/v2), cache e trilha de auditoria para reconciliação.",
        en:
          "Domain-based publish/subscribe (product/price/inventory) with standardized reads via governed APIs. Contract versioning (v1/v2), caching, and audit trail for reconciliation.",
      },
      decisions: {
        "pt-br": [
          "Contratos versionados para permitir evolução sem quebrar consumidores.",
          "Estratégia de reconcilição: auditoria + reprocessamento por janela.",
          "Separação de leitura e escrita (otimização por padrão de acesso).",
        ],
        en: [
          "Versioned contracts to evolve without breaking consumers.",
          "Reconciliation strategy: auditing + window-based reprocessing.",
          "Read/write separation (optimize per access pattern).",
        ],
      },
      reliability: {
        "pt-br":
          "Controles para evitar “double updates”, proteção contra picos e DLQ com regras de triagem para erros funcionais.",
        en:
          "Controls to prevent “double updates”, spike protection, and DLQ triage rules for business errors.",
      },
      observability: {
        "pt-br":
          "Métricas por domínio: atraso de sincronização, taxa de rejeição/validação, backlog e qualidade do dado.",
        en:
          "Per-domain metrics: sync lag, validation rejection rate, backlog, and data quality.",
      },
      results: {
        "pt-br": [
          "Redução de divergência de preço/estoque entre canais.",
          "Menos acoplamento e mais velocidade para novos fluxos de catálogo.",
          "Base pronta para expansão multi-parceiros.",
        ],
        en: [
          "Reduced price/inventory divergence across channels.",
          "Lower coupling and faster delivery for new catalog flows.",
          "Foundation ready for multi-partner expansion.",
        ],
      },
      nextSteps: {
        "pt-br": [
          "Adicionar “data contracts” com validação automática em pipeline.",
          "Implementar estratégia de cache por persona (POS vs eCom).",
        ],
        en: [
          "Add data contracts with automated validation in the pipeline.",
          "Implement persona-based caching strategy (POS vs eCom).",
        ],
      },
    },
  },

  {
    slug: "d365-lakehouse-analytics-fo-commerce",
    type: "case",
    status: "public",
    title: {
      "pt-br":
        "Lakehouse Analytics: F&O + Commerce para Insights Operacionais e Executivos",
      en:
        "Lakehouse Analytics: F&O + Commerce for Operational & Executive Insights",
    },
    summary: {
      "pt-br":
        "Pipeline de dados governado para unificar F&O e Commerce em um lakehouse, com KPIs operacionais e visão executiva com rastreabilidade.",
      en:
        "Governed data pipeline unifying F&O and Commerce into a lakehouse, delivering operational KPIs and executive views with traceability.",
    },
    tags: ["Data Platform", "Power BI", "Lakehouse", "Governance", "Near Real-time"],
    stack: [
      "ADLS / Lakehouse (Fabric ou equivalente)",
      "Data Factory / Pipelines",
      "Power BI",
      "Event-driven ingestion (quando aplicável)",
      "Data Quality",
      "Purview (opcional)",
      "App Insights",
    ],
    content: {
      context: {
        "pt-br":
          "Relatórios fragmentados e dados inconsistentes entre áreas. Objetivo: unificar visão de vendas, ruptura, margem, giro, OTIF e performance de canais com governança e confiabilidade.",
        en:
          "Fragmented reports and inconsistent data across teams. Goal: unify sales, stockouts, margin, inventory turns, OTIF, and channel performance with governance and reliability.",
      },
      role: {
        "pt-br":
          "Desenho da arquitetura de dados, definição de camadas (bronze/silver/gold), modelagem de métricas e governança de acesso, alinhando negócio e plataforma.",
        en:
          "Designed the data architecture, defined layers (bronze/silver/gold), modeled metrics, and set access governance bridging business and platform.",
      },
      architecture: {
        "pt-br":
          "Ingestão batch e, quando necessário, eventos para near real-time. Curadoria por camadas com validações, lineage e modelo semântico para Power BI. Controle de custos e RBAC por domínio.",
        en:
          "Batch ingestion and event-based near real-time when needed. Layered curation with validations, lineage, and a semantic model for Power BI. Cost control and RBAC per domain.",
      },
      decisions: {
        "pt-br": [
          "Camadas de dados para separar ingestão crua de modelos de negócio.",
          "Validações de qualidade (completude, duplicidade, chaves) antes do Gold.",
          "Modelo semântico para padronizar KPIs (uma “fonte da verdade”).",
        ],
        en: [
          "Layered data to separate raw ingestion from business models.",
          "Data quality checks (completeness, duplicates, keys) before Gold.",
          "Semantic model to standardize KPIs (single source of truth).",
        ],
      },
      reliability: {
        "pt-br":
          "Pipelines com checkpoints, reprocessamento por partição e monitoramento de SLA de dados (freshness).",
        en:
          "Pipelines with checkpoints, partition reprocessing, and data SLA monitoring (freshness).",
      },
      observability: {
        "pt-br":
          "Monitoramento do pipeline (falhas, tempos, volumes), métricas de freshness e alertas por quebras de contrato/qualidade.",
        en:
          "Pipeline monitoring (failures, runtimes, volumes), freshness metrics, and alerts for contract/quality breaks.",
      },
      results: {
        "pt-br": [
          "KPIs padronizados e rastreáveis para operação e diretoria.",
          "Melhor governança e redução de “números diferentes” entre áreas.",
          "Base pronta para IA/forecasting (demanda, ruptura, reposição).",
        ],
        en: [
          "Standardized, traceable KPIs for operations and leadership.",
          "Improved governance and fewer “different numbers” across teams.",
          "Foundation ready for AI/forecasting (demand, stockouts, replenishment).",
        ],
      },
      nextSteps: {
        "pt-br": [
          "Adicionar forecasting de demanda e recomendações de reposição.",
          "Publicar catálogo de dados e dicionário de métricas para usuários.",
        ],
        en: [
          "Add demand forecasting and replenishment recommendations.",
          "Publish a data catalog and metric dictionary for end users.",
        ],
      },
    },
  },

  {
    slug: "d365-fo-commerce-governance-alm-coe",
    type: "case",
    status: "public",
    title: {
      "pt-br": "CoE e Governança para D365 F&O + Commerce (ALM, Segurança e Release)",
      en: "CoE & Governance for D365 F&O + Commerce (ALM, Security & Releases)",
    },
    summary: {
      "pt-br":
        "Modelo operacional de governança e entrega contínua: ambientes, controles, padrões e pipelines para reduzir risco e aumentar previsibilidade.",
      en:
        "Operating model for governance and continuous delivery: environments, controls, standards, and pipelines to reduce risk and increase predictability.",
    },
    tags: ["Governance", "ALM", "Security", "Release Management", "Compliance"],
    stack: [
      "Azure DevOps / GitHub Actions",
      "IaC (Bicep/Terraform)",
      "Key Vault",
      "App Insights",
      "Policy/RBAC",
      "D365 F&O",
      "D365 Commerce",
    ],
    content: {
      context: {
        "pt-br":
          "Crescimento de customizações e integrações aumentou risco de releases, segurança e compliance. Necessidade de padrões e “gates” para acelerar sem perder controle.",
        en:
          "Growing customizations and integrations increased release, security, and compliance risk. Needed standards and gates to accelerate without losing control.",
      },
      role: {
        "pt-br":
          "Estruturei governança (RACI, padrões, templates), estratégia de ambientes e pipelines, e práticas de segurança (RBAC, auditoria e gestão de segredos).",
        en:
          "Established governance (RACI, standards, templates), environment strategy and pipelines, and security practices (RBAC, auditing, and secrets management).",
      },
      architecture: {
        "pt-br":
          "Ambientes segregados (DEV/HML/PRD), esteiras com validações (lint, testes, segurança), IaC para consistência e policy-as-code para enforcement.",
        en:
          "Segmented environments (DEV/UAT/PROD), pipelines with validations (lint, tests, security), IaC for consistency, and policy-as-code for enforcement.",
      },
      decisions: {
        "pt-br": [
          "Padrões de release com janela, rollback e checklist de go-live.",
          "Gestão de segredos centralizada e rotação (Key Vault).",
          "Observabilidade obrigatória como gate (logs/alertas mínimos).",
        ],
        en: [
          "Release standards with windows, rollback, and go-live checklists.",
          "Centralized secrets management and rotation (Key Vault).",
          "Mandatory observability as a gate (minimum logs/alerts).",
        ],
      },
      reliability: {
        "pt-br":
          "Redução de falhas em produção por controle de mudanças, testes e enforce de políticas; melhor capacidade de resposta por runbooks e padrão de incidentes.",
        en:
          "Reduced production failures via change control, tests, and policy enforcement; improved response through runbooks and incident standards.",
      },
      observability: {
        "pt-br":
          "Padrão de dashboards e alertas por domínio, SLIs e runbooks para principais jornadas de negócio.",
        en:
          "Standard dashboards and alerts per domain, SLIs, and runbooks for key business journeys.",
      },
      results: {
        "pt-br": [
          "Releases mais previsíveis e menos regressões.",
          "Segurança e compliance fortalecidos com menor atrito para os times.",
          "Base escalável para novos produtos e integrações.",
        ],
        en: [
          "More predictable releases and fewer regressions.",
          "Stronger security and compliance with less friction for teams.",
          "Scalable foundation for new products and integrations.",
        ],
      },
      nextSteps: {
        "pt-br": [
          "Adicionar scorecard de maturidade por time (ALM, segurança, observabilidade).",
          "Automatizar auditoria e evidências de compliance.",
        ],
        en: [
          "Add maturity scorecards per team (ALM, security, observability).",
          "Automate compliance evidence collection and auditing.",
        ],
      },
    },
  },
];