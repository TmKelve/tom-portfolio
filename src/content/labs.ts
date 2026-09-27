export type Locale = "pt-br" | "en";
export type Localized = { "pt-br": string; en: string };
export type LocalizedList = { "pt-br": string[]; en: string[] };

export type LabStatus = "public" | "private" | "wip";

export type Lab = {
  slug: string;
  title: Localized;
  objective: Localized;         // 1 linha — o que resolve
  problem: Localized;           // problema que motivou
  approach: Localized;          // como resolveu
  keyDecision: Localized;       // aprendizado / decisão técnica chave
  stack: string[];
  status: LabStatus;
  link?: string;                // GitHub, demo, etc. (undefined = privado)
};

export const labs: Lab[] = [
  // ── 1 ──────────────────────────────────────────────────────────────
  {
    slug: "idempotency-pattern-service-bus",
    title: {
      "pt-br": "Padrão de Idempotência com Azure Service Bus",
      en: "Idempotency Pattern with Azure Service Bus",
    },
    objective: {
      "pt-br": "Garantir processamento exatamente-uma-vez em integrações event-driven com Service Bus e Azure Functions.",
      en: "Ensure exactly-once processing in event-driven integrations using Service Bus and Azure Functions.",
    },
    problem: {
      "pt-br": "Em integrações com múltiplos produtores, mensagens duplicadas chegavam ao consumidor após retries automáticos, causando inconsistências nos dados do Dataverse e reprocessamento indevido.",
      en: "In multi-producer integrations, duplicate messages reached the consumer after automatic retries, causing data inconsistencies in Dataverse and unintended reprocessing.",
    },
    approach: {
      "pt-br": "Implementei uma tabela de controle no Azure Table Storage como cache de idempotência. Cada mensagem carrega um MessageId único. A Function checa antes de processar — se já existe, descarta silenciosamente; se não, processa e registra. DLQ configurado para falhas não-idempotentes.",
      en: "Implemented a control table in Azure Table Storage as an idempotency cache. Each message carries a unique MessageId. The Function checks before processing — if it already exists, it silently discards; otherwise, it processes and records. DLQ configured for non-idempotent failures.",
    },
    keyDecision: {
      "pt-br": "Usar Table Storage ao invés de Redis reduziu custo e complexidade operacional para o volume do projeto (~5k msgs/dia). A decisão técnica chave foi separar o registro de idempotência do commit da transação de negócio — evitando falso-positivo em caso de erro parcial.",
      en: "Using Table Storage instead of Redis reduced cost and operational complexity for the project volume (~5k msgs/day). The key technical decision was to separate the idempotency record from the business transaction commit — avoiding false positives on partial failures.",
    },
    stack: ["Azure Functions", "Azure Service Bus", "Azure Table Storage", "Dataverse", "C#"],
    status: "private",
  },

  // ── 2 ──────────────────────────────────────────────────────────────
  {
    slug: "observability-template-apim-functions",
    title: {
      "pt-br": "Template de Observabilidade: APIM + Functions + Application Insights",
      en: "Observability Template: APIM + Functions + Application Insights",
    },
    objective: {
      "pt-br": "Blueprint reutilizável de logging, tracing e alertas para APIs gerenciadas no Azure API Management.",
      en: "Reusable blueprint for logging, tracing, and alerting for APIs managed in Azure API Management.",
    },
    problem: {
      "pt-br": "Times diferentes instrumentavam APIs de forma inconsistente: alguns sem correlation ID, outros sem log de payload de erro. Em incidentes, rastrear uma chamada end-to-end levava horas.",
      en: "Different teams instrumented APIs inconsistently: some without correlation IDs, others without error payload logging. During incidents, tracing an end-to-end call took hours.",
    },
    approach: {
      "pt-br": "Criei policies padrão no APIM para injetar X-Correlation-Id em todas as requisições. Functions emitem structured logs com o correlation ID no Application Insights. KQL queries pré-montadas para debugging rápido. Alertas configurados via IaC (Bicep).",
      en: "Created standard APIM policies to inject X-Correlation-Id into all requests. Functions emit structured logs with the correlation ID in Application Insights. Pre-built KQL queries for fast debugging. Alerts configured via IaC (Bicep).",
    },
    keyDecision: {
      "pt-br": "Padronizar o correlation ID no APIM (não na Function) garantiu rastreabilidade mesmo quando a Function falhava antes de logar. Decisão: correlation ID viaja no header HTTP e no message envelope do Service Bus.",
      en: "Standardizing the correlation ID at APIM level (not in the Function) ensured traceability even when the Function failed before logging. Decision: correlation ID travels in the HTTP header and in the Service Bus message envelope.",
    },
    stack: ["Azure API Management", "Azure Functions", "Application Insights", "KQL", "Bicep"],
    status: "private",
  },

  // ── 3 ──────────────────────────────────────────────────────────────
  {
    slug: "power-platform-coe-accelerator",
    title: {
      "pt-br": "Acelerador de CoE para Power Platform",
      en: "Power Platform CoE Accelerator",
    },
    objective: {
      "pt-br": "Conjunto de templates e políticas prontos para bootstrapar governança de Power Platform em ambiente enterprise em menos de 1 sprint.",
      en: "Set of templates and policies ready to bootstrap Power Platform governance in an enterprise environment in less than 1 sprint.",
    },
    problem: {
      "pt-br": "Cada projeto iniciava a governança do zero: configurar ambientes, DLP, grupos de segurança e pipelines levava semanas e ficava inconsistente entre projetos.",
      en: "Each project started governance from scratch: configuring environments, DLP, security groups, and pipelines took weeks and remained inconsistent across projects.",
    },
    approach: {
      "pt-br": "Documentei e automatizei o setup padrão: script de criação de ambientes (dev/test/prod) via Power Platform CLI, políticas DLP base por camada (Business / Non-Business / Blocked), template de pipeline ALM no Azure DevOps e checklist de governança pré-go-live.",
      en: "Documented and automated the standard setup: environment creation script (dev/test/prod) via Power Platform CLI, base DLP policies by layer (Business / Non-Business / Blocked), ALM pipeline template in Azure DevOps, and pre-go-live governance checklist.",
    },
    keyDecision: {
      "pt-br": "Separar DLP por 'intenção de uso' (não por conector individual) facilitou a manutenção. Decisão: manter um ambiente 'sandbox' com DLP relaxado para experimentação controlada, sem contaminar prod.",
      en: "Separating DLP by 'intended use' (not by individual connector) simplified maintenance. Decision: maintain a 'sandbox' environment with relaxed DLP for controlled experimentation, without contaminating prod.",
    },
    stack: ["Power Platform CLI", "Azure DevOps", "Power Apps", "Dataverse", "Power Automate"],
    status: "private",
  },

  // ── 4 ──────────────────────────────────────────────────────────────
  {
    slug: "semantic-layer-dax-framework",
    title: {
      "pt-br": "Framework de Camada Semântica DAX Reutilizável",
      en: "Reusable DAX Semantic Layer Framework",
    },
    objective: {
      "pt-br": "Padrão de nomenclatura, organização e documentação de medidas DAX para times que mantêm múltiplos datasets no Power BI.",
      en: "Naming, organization, and documentation standard for DAX measures for teams maintaining multiple Power BI datasets.",
    },
    problem: {
      "pt-br": "Datasets cresciam sem padrão: medidas duplicadas com nomes diferentes, sem documentação, dependências implícitas entre tabelas. Novos desenvolvedores demoravam semanas para entender o modelo.",
      en: "Datasets grew without standards: duplicated measures with different names, no documentation, implicit dependencies between tables. New developers took weeks to understand the model.",
    },
    approach: {
      "pt-br": "Defini convenção de nomenclatura por camada (_Base, _Calc, KPI_), pasta de display obrigatória, tabela de medidas isolada e template de descrição de medida. Criei um modelo de referência documentado com 30+ medidas cobrindo os padrões mais comuns (YTD, rolling, ratio, ranking).",
      en: "Defined naming convention by layer (_Base, _Calc, KPI_), mandatory display folder, isolated measures table, and measure description template. Created a documented reference model with 30+ measures covering the most common patterns (YTD, rolling, ratio, ranking).",
    },
    keyDecision: {
      "pt-br": "Usar variáveis DAX em todas as medidas complexas (não expressões inline) foi a decisão que mais reduziu bugs e melhorou legibilidade. Padrão: DEFINE → VARIABLE → RETURN.",
      en: "Using DAX variables in all complex measures (not inline expressions) was the decision that most reduced bugs and improved readability. Pattern: DEFINE → VARIABLE → RETURN.",
    },
    stack: ["Power BI", "DAX", "Tabular Editor", "Power BI Desktop"],
    status: "private",
  },

  // ── 5 ──────────────────────────────────────────────────────────────
  {
    slug: "copilot-studio-handoff-pattern",
    title: {
      "pt-br": "Padrão de Handoff Humano no Copilot Studio",
      en: "Human Handoff Pattern in Copilot Studio",
    },
    objective: {
      "pt-br": "Implementar transferência de conversa do Copilot para atendente humano com contexto preservado e sem fricção.",
      en: "Implement conversation transfer from Copilot to a human agent with preserved context and no friction.",
    },
    problem: {
      "pt-br": "O handoff nativo do Copilot Studio perde o histórico da conversa ao transferir para o agente humano. O atendente recebia o cliente sem contexto, gerando retrabalho e má experiência.",
      en: "Copilot Studio's native handoff loses conversation history when transferring to a human agent. The attendant received the customer without context, causing rework and poor experience.",
    },
    approach: {
      "pt-br": "Criei um tópico de escalada que serializa o histórico da conversa e variáveis-chave em JSON, armazena no Dataverse com status 'pendente', e aciona um flow do Power Automate que notifica o agente via Teams com card adaptável contendo o resumo. O agente abre o registro direto no Dataverse para continuar.",
      en: "Created an escalation topic that serializes the conversation history and key variables as JSON, stores them in Dataverse with 'pending' status, and triggers a Power Automate flow that notifies the agent via Teams with an adaptive card containing the summary. The agent opens the record directly in Dataverse to continue.",
    },
    keyDecision: {
      "pt-br": "Armazenar o contexto no Dataverse (não só no Teams) foi essencial para rastreabilidade e SLA. Decisão: o card no Teams é apenas notificação — a fonte de verdade é o Dataverse.",
      en: "Storing the context in Dataverse (not just in Teams) was essential for traceability and SLA. Decision: the Teams card is just a notification — Dataverse is the source of truth.",
    },
    stack: ["Copilot Studio", "Power Automate", "Dataverse", "Microsoft Teams", "Adaptive Cards"],
    status: "private",
  },
];
