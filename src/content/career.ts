// src/content/career.ts

export type Locale = 'pt-br' | 'en';

export type CareerHighlights = {
  short: Record<Locale, string[]>;
  full: Record<Locale, string[]>;
};

export type CareerItem = {
  id: string;

  range: Record<Locale, string>;
  title: Record<Locale, string>;
  company: string;

  location?: string;
  mode?: Record<Locale, string>;
  employmentType?: Record<Locale, string>;
  tenure?: Record<Locale, string>;

  tags?: string[];

  highlights: CareerHighlights;

  stackLine?: Record<Locale, string>;
  skillsLine?: Record<Locale, string>;
};

export const career: CareerItem[] = [
  // =========================================================
  // GrupoSC (Atual)
  // =========================================================
  {
    id: 'gruposc-azure-pp-architect',
    range: {'pt-br': 'nov de 2025 - o momento', en: 'Nov 2025 - present'},
    title: {
      'pt-br': 'Azure & Power Platform Architect | Architecture, AI, Intelligent Automation & Cloud Integration',
      en: 'Azure & Power Platform Architect | Architecture, AI, Intelligent Automation & Cloud Integration'
    },
    company: 'GrupoSC Distribuidora de Medicamentos',
    employmentType: {'pt-br': 'Tempo integral', en: 'Full-time'},
    tenure: {'pt-br': '9 meses', en: '9 months'},
    location: 'São Paulo, São Paulo, Brasil',
    mode: {'pt-br': 'Híbrido', en: 'Hybrid'},
    tags: ['Azure', 'Power Platform', 'Integration', 'Governance', 'Security', 'AI'],
    highlights: {
      short: {
        'pt-br': [
          'Arquitetura em Azure + Power Platform com governança, segurança e escalabilidade multiambiente.',
          'Integrações API-first e event-driven para fluxos críticos (mensageria, eventos, rastreabilidade).',
          'AI/Automation com Copilot, Azure OpenAI, AI Builder e Azure AI Foundry.'
        ],
        en: [
          'Azure + Power Platform architecture with governance, security, and multi-environment scalability.',
          'API-first and event-driven integration for critical flows (messaging, events, traceability).',
          'AI/Automation with Copilot, Azure OpenAI, AI Builder, and Azure AI Foundry.'
        ]
      },
      full: {
        'pt-br': [
          'Atuo como Arquiteto de Soluções em Azure e Power Platform, liderando o desenho arquitetural e a evolução de produtos digitais corporativos com foco em integração enterprise, automação inteligente, governança, segurança e escalabilidade.',
          '🔷 Lidero a arquitetura de soluções em Azure + Power Platform, definindo padrões técnicos, integração, segurança e escalabilidade multiambiente para iniciativas estratégicas.',
          '🔷 Conduzo entregas end-to-end (discovery, blueprint arquitetural, modelagem, implementação, integração, observabilidade e otimização contínua), aumentando consistência técnica e previsibilidade operacional.',
          '🔷 Estruturo integrações API-first e arquiteturas orientadas a eventos para fluxos críticos e cenários de alta complexidade operacional.',
          '🔷 Atuo com serviços distribuídos em Azure (Service Bus, Functions, Logic Apps, API Management/APISIX) e práticas de resiliência/operabilidade (retry, DLQ, idempotência, observabilidade).',
          '🔷 Defino padrões de governança e segurança (DLP, ALM, RBAC, IAM, Key Vault, OAuth2), fortalecendo compliance, sustentação e escalabilidade.',
          '🔷 Apoio squads com mentoria, code review e direcionamento arquitetural, destravando decisões técnicas e acelerando entregas com qualidade.',
          '🔷 Atuação sênior em AI/Automation com Copilot, Azure OpenAI, AI Builder e Azure AI Foundry, estruturando soluções com foco em produtividade, governança e valor de negócio.',
          '🔷 Destaque de atuação: arquitetura de serviços corporativos para fluxos críticos de negócio, com APIs, mensageria, eventos, rastreabilidade e observabilidade ponta a ponta em contexto enterprise de alta criticidade.'
        ],
        en: [
          'I work as an Azure and Power Platform Solution Architect, leading enterprise architecture and the evolution of corporate digital products with a focus on integration, intelligent automation, governance, security, and scalability.',
          '🔷 I lead Azure + Power Platform solution architecture, defining technical standards, integration patterns, security, and multi-environment scalability for strategic initiatives.',
          '🔷 I drive end-to-end delivery (discovery, architecture blueprint, modeling, implementation, integration, observability, and continuous optimization), improving technical consistency and operational predictability.',
          '🔷 I design API-first integrations and event-driven architectures for critical flows and high-complexity operational scenarios.',
          '🔷 I work with distributed Azure services (Service Bus, Functions, Logic Apps, API Management/APISIX) and resilience/operability practices (retries, DLQ, idempotency, observability).',
          '🔷 I define governance and security standards (DLP, ALM, RBAC, IAM, Key Vault, OAuth2), strengthening compliance, supportability, and scalability.',
          '🔷 I support squads through mentorship, code reviews, and architectural guidance, unblocking decisions and accelerating delivery quality.',
          '🔷 Senior AI/Automation work with Copilot, Azure OpenAI, AI Builder, and Azure AI Foundry, structuring solutions focused on productivity, governance, and business value.',
          '🔷 Highlight: enterprise-grade service architecture for mission-critical flows, leveraging APIs, messaging, events, traceability, and end-to-end observability.'
        ]
      }
    },
    stackLine: {
      'pt-br':
        'Stack: Power Platform (Power Apps, Power Automate, Dataverse, Power Pages) | Power BI/Fabric | Azure Service Bus | Azure Functions | Logic Apps | API Management / APISIX | Azure OpenAI | Copilot | AI Builder | Azure AI Foundry | Azure DevOps | Observability & Security',
      en:
        'Stack: Power Platform (Power Apps, Power Automate, Dataverse, Power Pages) | Power BI/Fabric | Azure Service Bus | Azure Functions | Logic Apps | API Management / APISIX | Azure OpenAI | Copilot | AI Builder | Azure AI Foundry | Azure DevOps | Observability & Security'
    },
    skillsLine: {
      'pt-br': 'Competências: Arquitetura Cloud Native, Microsoft Copilot Studio e mais 23 competências',
      en: 'Skills: Cloud Native Architecture, Microsoft Copilot Studio and 23+ additional skills'
    }
  },

  // =========================================================
  // Tech Leader (jun/2025 - nov/2025)
  // =========================================================
  {
    id: 'tech-leader-pp-azure',
    range: {'pt-br': 'jun de 2025 - nov de 2025', en: 'Jun 2025 - Nov 2025'},
    title: {
      'pt-br': 'Tech Leader Power Platform & Azure Specialist | Developer, Automation & Cloud Integration',
      en: 'Tech Lead | Power Platform & Azure | Developer, Automation & Cloud Integration'
    },
    company: 'GrupoSC Distribuidora de Medicamentos',
    employmentType: {'pt-br': 'Tempo integral', en: 'Full-time'},
    tenure: {'pt-br': '6 meses', en: '6 months'},
    location: 'São Paulo, São Paulo, Brasil',
    mode: {'pt-br': 'Híbrido/Remoto', en: 'Hybrid/Remote'},
    tags: ['Power Platform', 'Azure', 'ALM', 'CI/CD', 'Integration', 'Leadership'],
    highlights: {
      short: {
        'pt-br': [
          'Tech Lead em Power Platform + Azure: liderança de squads e entregas end-to-end.',
          'Governança (DLP, ambientes, ALM) e padronização de componentes e diretrizes.',
          'Integrações enterprise com APIM, Functions, Logic Apps e Service Bus.'
        ],
        en: [
          'Tech Lead for Power Platform + Azure: squad leadership and end-to-end delivery.',
          'Governance (DLP, environments, ALM) and standardization of reusable components and practices.',
          'Enterprise integrations with API Management, Functions, Logic Apps, and Service Bus.'
        ]
      },
      full: {
        'pt-br': [
          'Atuei como Tech Lead Sênior na implementação e evolução de soluções corporativas com Power Platform e Azure, conduzindo squads e estruturando bases técnicas para escalabilidade, governança e qualidade das entregas. Esse papel consolidou a transição para uma atuação mais forte em arquitetura e integração enterprise.',
          '🔷 Liderei tecnicamente squads no desenvolvimento e evolução de soluções corporativas end-to-end, conectando necessidades de negócio com decisões técnicas de arquitetura, integração e entrega.',
          '🔷 Padronizei componentes, práticas e diretrizes de arquitetura, promovendo maior consistência entre soluções e melhor reuso técnico em iniciativas Power Platform + Azure.',
          '🔷 Estruturei governança Power Platform (DLP, ambientes, ALM e práticas de publicação), contribuindo para segurança, organização e escalabilidade da operação.',
          '🔷 Conduzi integrações enterprise com API Management, Azure Functions, Logic Apps e Service Bus, apoiando interoperabilidade segura e escalável entre sistemas e serviços.',
          '🔷 Implementei e evoluí práticas de CI/CD, monitoramento e qualidade técnica, acelerando ciclos de entrega e melhorando previsibilidade operacional.',
          '🔷 Atuei como referência técnica para automação e IA aplicada, apoiando iniciativas com Copilot/AI e soluções de automação inteligente em contexto corporativo.',
          '🔷 Apoiei desenvolvimento de pessoas e times, por meio de mentoria, code review e suporte à tomada de decisão técnica, elevando maturidade e qualidade das entregas.'
        ],
        en: [
          'I worked as a Senior Tech Lead delivering and evolving enterprise solutions using Power Platform and Azure, leading squads and building technical foundations for scalability, governance, and delivery quality. This role strengthened my focus on enterprise architecture and integration.',
          '🔷 I provided technical leadership for squads delivering end-to-end solutions, translating business needs into architecture, integration, and delivery decisions.',
          '🔷 I standardized components, practices, and architecture guidelines, improving consistency and enabling reuse across Power Platform + Azure initiatives.',
          '🔷 I implemented Power Platform governance (DLP, environments, ALM, publishing practices), supporting security, organization, and operational scalability.',
          '🔷 I delivered enterprise integrations with API Management, Azure Functions, Logic Apps, and Service Bus, enabling secure and scalable interoperability between systems and services.',
          '🔷 I implemented and improved CI/CD, monitoring, and technical quality practices, accelerating delivery cycles and increasing operational predictability.',
          '🔷 I acted as a technical reference for applied automation and AI, supporting Copilot/AI initiatives and intelligent automation solutions in corporate environments.',
          '🔷 I supported team development through mentorship, code reviews, and decision support, raising maturity and delivery quality.'
        ]
      }
    },
    stackLine: {
      'pt-br':
        'Stack: Power Platform | Dataverse | Power Apps | Power Automate | Power BI/Fabric | Azure Functions | Logic Apps | Service Bus | API Management | Azure DevOps | ALM/CI-CD | Observability',
      en:
        'Stack: Power Platform | Dataverse | Power Apps | Power Automate | Power BI/Fabric | Azure Functions | Logic Apps | Service Bus | API Management | Azure DevOps | ALM/CI-CD | Observability'
    },
    skillsLine: {
      'pt-br': 'Competências: Arquitetura Cloud Native, Microsoft Copilot Studio e mais 42 competências',
      en: 'Skills: Cloud Native Architecture, Microsoft Copilot Studio and 42+ additional skills'
    }
  },

  // =========================================================
  // Avenue Code (ago/2024 - jun/2025)
  // =========================================================
  {
    id: 'avenue-code-pp-azure-senior',
    range: {'pt-br': 'ago de 2024 - jun de 2025', en: 'Aug 2024 - Jun 2025'},
    title: {'pt-br': 'Power Platform & Azure Specialist Sênior', en: 'Senior Power Platform & Azure Specialist'},
    company: 'Avenue Code',
    employmentType: {'pt-br': 'Tempo integral', en: 'Full-time'},
    tenure: {'pt-br': '11 meses', en: '11 months'},
    location: 'São Paulo, Brasil',
    mode: {'pt-br': 'Remoto', en: 'Remote'},
    tags: ['Power Apps', 'Power Automate', 'Power Pages', 'Copilot Studio', 'Dataverse', 'ALM'],
    highlights: {
      short: {
        'pt-br': [
          'Soluções enterprise com Power Platform (Copilot Studio, Power Pages, Apps, Automate, Power BI).',
          'ALM com versionamento e pipelines, governança (DLP/ambientes/papéis) e boas práticas.',
          'Liderança técnica e mentoria em squads.'
        ],
        en: [
          'Enterprise solutions with Power Platform (Copilot Studio, Power Pages, Apps, Automate, Power BI).',
          'ALM with versioning/pipelines, governance (DLP/environments/roles), and best practices.',
          'Technical leadership and squad mentorship.'
        ]
      },
      full: {
        'pt-br': [
          'Atuei na concepção, implementação e sustentação de soluções corporativas exclusivamente com Power Platform, com foco em Copilot (Copilot Studio), Power Pages, Power Automate, Power Apps (Canvas e Model-Driven) e Power BI, entregando automação, experiência digital e analytics com padrões enterprise.',
          '🔷 Conduzi entregas end-to-end, do discovery e desenho da solução até build, testes, publicação, hiper care e evolução contínua (melhoria de performance, UX e confiabilidade).',
          '🔷 Desenvolvi e evoluí aplicações Canvas e Model-Driven com Dataverse, aplicando componentização, reuso de padrões e desenho orientado a escalabilidade (tabelas, regras de negócio, formulários, permissões).',
          '🔷 Implementei fluxos Power Automate para automação de processos críticos (aprovações, integrações via conectores, notificações e orquestrações), com tratamento de exceções, retries e rastreabilidade.',
          '🔷 Entreguei portais com Power Pages, estruturando autenticação/autorização, controle de acesso por perfis e modelagem de dados/experiências para públicos internos e externos.',
          '🔷 Atuei com Copilot Studio, criando copilots orientados a produtividade e suporte operacional (fluxos conversacionais, actions e integrações com dados/processos), com governança e evolução baseada em feedback.',
          '🔷 Estruturei governança e boas práticas (DLP, ambientes, papéis, naming conventions, padrões de reuso e organização de soluções), elevando consistência e segurança das entregas.',
          '🔷 Implementei ALM com versionamento e pipelines para soluções Power Platform, garantindo rastreabilidade, previsibilidade de releases e redução de retrabalho entre ambientes.',
          '🔷 Desenvolvi dashboards e modelos Power BI, com foco em qualidade de dados, performance e clareza executiva (KPIs, camadas de relatório e padronização visual).',
          '🔷 Atuei com liderança técnica e mentoria, apoiando code review, definição de padrões, boas práticas e tomada de decisão em squads.'
        ],
        en: [
          'I worked on the design, implementation, and support of enterprise solutions exclusively with Power Platform, focusing on Copilot (Copilot Studio), Power Pages, Power Automate, Power Apps (Canvas and Model-Driven), and Power BI delivering automation, digital experiences, and analytics with enterprise standards.',
          '🔷 I delivered end-to-end projects from discovery and solution design through build, testing, release, hyper-care, and continuous improvements (performance, UX, and reliability).',
          '🔷 I built and evolved Canvas and Model-Driven apps with Dataverse, applying componentization, reusable patterns, and scalable design (tables, business rules, forms, and permissions).',
          '🔷 I implemented Power Automate flows for critical process automation (approvals, connector-based integrations, notifications, and orchestrations) with exception handling, retries, and traceability.',
          '🔷 I delivered Power Pages portals, implementing authentication/authorization, profile-based access control, and data/experience modeling for internal and external audiences.',
          '🔷 I developed copilots in Copilot Studio focused on productivity and operational support (conversation flows, actions, and integrations with data/processes) with governance and feedback-based evolution.',
          '🔷 I established governance and best practices (DLP, environments, roles, naming conventions, solution organization, reusable standards), improving consistency and security.',
          '🔷 I implemented ALM with version control and pipelines for Power Platform solutions, increasing release traceability and reducing rework across environments.',
          '🔷 I built Power BI dashboards and models with emphasis on data quality, performance, and executive clarity (KPIs, reporting layers, visual standards).',
          '🔷 I provided technical leadership and mentorship through code reviews, standards definition, best practices, and decision support within squads.'
        ]
      }
    },
    skillsLine: {
      'pt-br': 'Competências: Arquitetura Cloud Native, DevOps e mais 21 competências',
      en: 'Skills: Cloud Native Architecture, DevOps and 21+ additional skills'
    }
  },

  // =========================================================
  // MG Info (mai/2024 - mai/2025)
  // =========================================================
  {
    id: 'mginfo-pp-azure-senior',
    range: {'pt-br': 'mai de 2024 - mai de 2025', en: 'May 2024 - May 2025'},
    title: {'pt-br': 'Power Platform & Azure Specialist Sênior', en: 'Senior Power Platform & Azure Specialist'},
    company: 'MG Info | Data Driven Culture',
    employmentType: {'pt-br': 'Tempo integral', en: 'Full-time'},
    tenure: {'pt-br': '1 ano e 1 mês', en: '1 year 1 month'},
    location: 'São Paulo, São Paulo, Brasil',
    mode: {'pt-br': 'Remoto', en: 'Remote'},
    tags: ['Data', 'Power BI', 'Azure', 'Governance', 'Integration', 'Analytics'],
    highlights: {
      short: {
        'pt-br': [
          'Referência técnica em arquitetura, governança e implementação Power Platform + Azure.',
          'Soluções end-to-end (apps, automações, portais, dashboards, integrações).',
          'Alta volumetria de dados com foco em performance e visibilidade executiva.'
        ],
        en: [
          'Technical reference for architecture, governance, and delivery using Power Platform + Azure.',
          'End-to-end solutions (apps, automations, portals, dashboards, integrations).',
          'High-volume data scenarios focused on performance and executive visibility.'
        ]
      },
      full: {
        'pt-br': [
          'Atuei como referência técnica em arquitetura, governança e implementação de soluções com Power Platform e Azure, com foco em dados, analytics, integração, escalabilidade e performance em projetos corporativos.',
          '🔷 Contribuí para definições de estratégia tecnológica e arquitetura em iniciativas com Power Platform, Azure e Power BI, apoiando decisões técnicas orientadas a escalabilidade, segurança e valor de negócio.',
          '🔷 Concebi e implementei soluções corporativas end-to-end, incluindo automações, aplicativos, portais, dashboards, relatórios, ambientes e integrações entre sistemas.',
          '🔷 Atuei em cenários de grande volumetria de dados, estruturando soluções com foco em performance, tratamento de dados e visibilidade executiva por meio de Power BI.',
          '🔷 Estruturei práticas de governança, documentação e padrões técnicos, incluindo desenhos arquiteturais, inventário de ativos, diagramas e direcionadores para sustentação e evolução das soluções.',
          '🔷 Apoiei o desenho e execução de soluções com foco em segurança, escalabilidade e desempenho em Power Platform e Azure.',
          '🔷 Atuei com liderança técnica e mentoria, apoiando desenvolvedores, revisões técnicas e adoção de boas práticas de desenvolvimento.',
          '🔷 Participei do planejamento, mapeamento e execução de projetos, conectando necessidades de negócio a soluções técnicas sustentáveis.',
          '🔷 Contribuí para melhoria contínua de processos e sistemas, analisando problemas e propondo soluções de longo prazo para maior eficiência operacional.'
        ],
        en: [
          'I acted as a technical reference in architecture, governance, and implementation of Power Platform and Azure solutions, focusing on data, analytics, integration, scalability, and performance in enterprise projects.',
          '🔷 I contributed to technology strategy and architecture decisions across Power Platform, Azure, and Power BI initiatives, supporting scalability, security, and business-value-driven choices.',
          '🔷 I designed and delivered end-to-end enterprise solutions, including automations, apps, portals, dashboards, reports, environments, and system integrations.',
          '🔷 I worked in high-volume data scenarios, structuring solutions focused on performance, data processing, and executive visibility through Power BI.',
          '🔷 I established governance practices, documentation, and technical standards, including architecture designs, asset inventory, diagrams, and sustainment guidelines.',
          '🔷 I supported solution design and execution with focus on security, scalability, and performance in Power Platform and Azure.',
          '🔷 I provided technical leadership and mentorship, supporting developers, technical reviews, and adoption of best development practices.',
          '🔷 I participated in planning, mapping, and execution of projects, connecting business needs to sustainable technical solutions.',
          '🔷 I contributed to continuous improvement by analyzing problems and proposing long-term solutions for operational efficiency.'
        ]
      }
    },
    stackLine: {
      'pt-br':
        'Stack: Power Platform, Power BI, Azure, Dataverse, Power Apps, Power Automate, integrações, arquitetura de soluções, governança, documentação técnica, analytics, modelagem de dados, Azure Data Factory, Azure Synapse Analytics, Azure Databricks, ADLS Gen2, Azure Blob Storage, Azure SQL, Azure Cosmos DB, Azure Data Explorer (Kusto), Event Hubs, Service Bus, Azure Monitor, Log Analytics, Application Insights, Microsoft Purview.',
      en:
        'Stack: Power Platform, Power BI, Azure, Dataverse, Power Apps, Power Automate, integrations, solution architecture, governance, technical documentation, analytics, data modeling, Azure Data Factory, Azure Synapse Analytics, Azure Databricks, ADLS Gen2, Azure Blob Storage, Azure SQL, Azure Cosmos DB, Azure Data Explorer (Kusto), Event Hubs, Service Bus, Azure Monitor, Log Analytics, Application Insights, Microsoft Purview.'
    },
    skillsLine: {
      'pt-br': 'Competências: Arquitetura Cloud Native, Microsoft Copilot Studio e mais 26 competências',
      en: 'Skills: Cloud Native Architecture, Microsoft Copilot Studio and 26+ additional skills'
    }
  },

  // =========================================================
  // NTT DATA (abr/2023 - mai/2024) - Senior Technical Specialist
  // =========================================================
  {
    id: 'nttdata-senior-technical-specialist',
    range: {'pt-br': 'abr de 2023 - mai de 2024', en: 'Apr 2023 - May 2024'},
    title: {'pt-br': 'Senior Technical Specialist', en: 'Senior Technical Specialist'},
    company: 'NTT DATA',
    employmentType: {'pt-br': 'Tempo integral', en: 'Full-time'},
    tenure: {'pt-br': '1 ano e 2 meses', en: '1 year 2 months'},
    mode: {'pt-br': 'Remoto', en: 'Remote'},
    tags: ['Architecture', 'Power Platform', 'Azure', 'Documentation', 'Mentorship'],
    highlights: {
      short: {
        'pt-br': [
          'Arquitetura e evolução de soluções corporativas com liderança técnica e entrega end-to-end.',
          'Integração, segurança, escalabilidade e desempenho em iniciativas de transformação digital.',
          'Documentação arquitetural e mentoria com boas práticas.'
        ],
        en: [
          'Architecture and evolution of enterprise solutions with technical leadership and end-to-end delivery.',
          'Integration, security, scalability, and performance in digital transformation initiatives.',
          'Architecture documentation and mentorship with best practices.'
        ]
      },
      full: {
        'pt-br': [
          'Atuei como Senior Technical Specialist na concepção, arquitetura e evolução de soluções corporativas, combinando liderança técnica, implementação end-to-end e direcionamento arquitetural em iniciativas de transformação digital.',
          '🔷 Contribuí para definições de estratégia tecnológica e arquitetura, apoiando decisões sobre integração, segurança, escalabilidade e desempenho em soluções corporativas.',
          '🔷 Atuei na concepção e implementação de soluções complexas, incluindo automações, aplicativos, portais, chatbots, dashboards, relatórios, ambientes e integrações entre sistemas.',
          '🔷 Conduzi entregas end-to-end, do planejamento e mapeamento até execução técnica, testes de suporte e evolução contínua das soluções.',
          '🔷 Produzi documentação técnica e arquitetural (diagramas, desenhos, inventário de ativos, apresentações e documentação de implementação), apoiando sustentação e continuidade dos projetos.',
          '🔷 Atuei com liderança técnica e mentoria, apoiando desenvolvedores juniores, revisões de código e adoção de boas práticas de desenvolvimento.',
          '🔷 Apoiei gestão técnica de projetos e times, contribuindo para entregas com qualidade, previsibilidade e aderência a prazo/orçamento.',
          '🔷 Analisei problemas e propus soluções de longo prazo para melhoria de eficiência operacional, estabilidade e evolução dos sistemas.'
        ],
        en: [
          'I worked as a Senior Technical Specialist designing, architecting, and evolving enterprise solutions, combining technical leadership, end-to-end implementation, and architectural direction in digital transformation initiatives.',
          '🔷 I contributed to technology strategy and architecture decisions, supporting choices around integration, security, scalability, and performance.',
          '🔷 I designed and implemented complex solutions, including automations, apps, portals, chatbots, dashboards, reports, environments, and system integrations.',
          '🔷 I led end-to-end deliveries from planning and mapping through technical execution, support testing, and continuous evolution.',
          '🔷 I produced technical and architectural documentation (diagrams, designs, asset inventory, presentations, and implementation docs) to support sustainment and continuity.',
          '🔷 I provided technical leadership and mentorship, supporting junior developers, code reviews, and adoption of best practices.',
          '🔷 I supported technical project and team management, contributing to quality, predictability, and adherence to deadlines/budgets.',
          '🔷 I analyzed problems and proposed long-term solutions to improve operational efficiency, stability, and system evolution.'
        ]
      }
    },
    stackLine: {
      'pt-br':
        'Stack: Power Platform, Power BI, Azure, SQL, automação, arquitetura de soluções, integrações, documentação técnica, mentoria, boas práticas de desenvolvimento. Azure Data Factory, Synapse Analytics, Databricks, ADLS Gen2, Azure SQL, Cosmos DB, Event Hubs, Service Bus, Azure Monitor/Log Analytics, Application Insights, Microsoft Purview.',
      en:
        'Stack: Power Platform, Power BI, Azure, SQL, automation, solution architecture, integrations, technical documentation, mentorship, best practices. Azure Data Factory, Synapse Analytics, Databricks, ADLS Gen2, Azure SQL, Cosmos DB, Event Hubs, Service Bus, Azure Monitor/Log Analytics, Application Insights, Microsoft Purview.'
    },
    skillsLine: {
      'pt-br': 'Competências: Arquitetura Cloud Native, Microsoft Copilot Studio e mais 35 competências',
      en: 'Skills: Cloud Native Architecture, Microsoft Copilot Studio and 35+ additional skills'
    }
  },

  // =========================================================
  // NTT DATA (ago/2022 - mar/2023) - Software Developer
  // =========================================================
  {
    id: 'nttdata-software-developer',
    range: {'pt-br': 'ago de 2022 - mar de 2023', en: 'Aug 2022 - Mar 2023'},
    title: {'pt-br': 'Software Developer', en: 'Software Developer'},
    company: 'NTT DATA',
    employmentType: {'pt-br': 'Tempo integral', en: 'Full-time'},
    tenure: {'pt-br': '8 meses', en: '8 months'},
    location: 'Brasil',
    tags: ['Automation', 'Power Platform', 'Power BI', 'SQL', 'Documentation'],
    highlights: {
      short: {
        'pt-br': [
          'Desenvolvimento de soluções corporativas com automação, apps e analytics.',
          'Entregas end-to-end com prototipação, testes e documentação.',
          'Integração e estruturação de ambientes/componentes.'
        ],
        en: [
          'Built enterprise solutions across automation, apps, and analytics.',
          'End-to-end delivery including prototyping, testing, and documentation.',
          'Integration and environment/component setup.'
        ]
      },
      full: {
        'pt-br': [
          'Atuei no desenvolvimento de soluções corporativas com foco em automação, aplicações de negócio, analytics e entrega end-to-end, apoiando desde levantamento até implementação e documentação técnica.',
          '🔷 Participei do planejamento, mapeamento e execução de projetos, conectando necessidades de negócio à implementação técnica.',
          '🔷 Desenvolvi automações, aplicativos, portais, chatbots, dashboards e relatórios, apoiando digitalização de processos e melhoria operacional.',
          '🔷 Atuei na concepção de protótipos e testes de suporte, contribuindo para validação técnica e evolução das soluções.',
          '🔷 Apoiei o desenvolvimento de aplicações end-to-end, incluindo organização de ambientes, estruturação de componentes e integração entre recursos da solução.',
          '🔷 Produzi documentação de projeto e implementação (desenhos, inventário de ativos, diagramas e materiais de apoio), facilitando sustentação e continuidade.',
          '🔷 Colaborei com times multidisciplinares na entrega de soluções com foco em qualidade, organização e aderência aos requisitos.'
        ],
        en: [
          'I worked on enterprise solutions focused on automation, business applications, analytics, and end-to-end delivery, supporting everything from requirements to implementation and technical documentation.',
          '🔷 I participated in planning, mapping, and execution, connecting business needs to technical implementation.',
          '🔷 I developed automations, apps, portals, chatbots, dashboards, and reports, supporting process digitization and operational improvements.',
          '🔷 I contributed to prototyping and support testing, helping validate and evolve solutions.',
          '🔷 I supported end-to-end app delivery, including environment organization, component structuring, and integration across solution resources.',
          '🔷 I produced project and implementation documentation (designs, asset inventory, diagrams, and support materials) to enable sustainment and continuity.',
          '🔷 I collaborated with cross-functional teams to deliver solutions with focus on quality, organization, and requirement adherence.'
        ]
      }
    },
    stackLine: {
      'pt-br': 'Stack: Power Platform, Power BI, SQL, automação, desenvolvimento de aplicações, dashboards, documentação técnica, prototipação.',
      en: 'Stack: Power Platform, Power BI, SQL, automation, app development, dashboards, technical documentation, prototyping.'
    },
    skillsLine: {
      'pt-br': 'Competências: Arquitetura Cloud Native, Microsoft Power BI e mais 47 competências',
      en: 'Skills: Cloud Native Architecture, Microsoft Power BI and 47+ additional skills'
    }
  },

  // =========================================================
  // Prosperi (fev/2022 - jul/2022)
  // =========================================================
  {
    id: 'prosperi-software-specialist',
    range: {'pt-br': 'fev de 2022 - jul de 2022', en: 'Feb 2022 - Jul 2022'},
    title: {'pt-br': 'Software Specialist', en: 'Software Specialist'},
    company: 'Prosperi',
    employmentType: {'pt-br': 'Tempo integral', en: 'Full-time'},
    tenure: {'pt-br': '6 meses', en: '6 months'},
    location: 'Natal, Rio Grande do Norte, Brasil',
    mode: {'pt-br': 'Remoto', en: 'Remote'},
    tags: ['Power Platform', 'Consulting', 'Power BI', 'Automation', 'Integrations'],
    highlights: {
      short: {
        'pt-br': [
          'Consultoria e desenho de soluções Power Platform para automação e analytics.',
          'Relatórios e painéis para visibilidade executiva e tomada de decisão.',
          'Apoio à adoção e maturidade com foco em valor e sustentabilidade.'
        ],
        en: [
          'Consulting and solution design with Power Platform for automation and analytics.',
          'Reports and dashboards for executive visibility and decision-making.',
          'Adoption support focused on value and long-term sustainability.'
        ]
      },
      full: {
        'pt-br': [
          'Atuei como Software Specialist com foco em Power Platform, apoiando clientes na concepção, implementação e otimização de soluções corporativas para automação de processos, analytics e transformação digital.',
          '🔷 Atuei em consultoria técnica e desenho de soluções com Power Platform, avaliando necessidades de negócio e traduzindo requisitos em soluções aplicáveis e escaláveis.',
          '🔷 Desenvolvi soluções para automação de processos, aplicativos, relatórios e integrações, apoiando aumento de eficiência operacional e melhoria na tomada de decisão.',
          '🔷 Contribuí para iniciativas de Business Intelligence e análise de dados, estruturando relatórios e painéis com foco em visibilidade e apoio executivo.',
          '🔷 Atuei na otimização de processos de negócio, combinando automação, análise de dados e soluções personalizadas para diferentes cenários de cliente.',
          '🔷 Desenvolvi soluções com recursos da Power Platform para apps, automação (incluindo RPA) e integrações, apoiando digitalização de fluxos corporativos.',
          '🔷 Apoiei clientes na adoção de tecnologia e evolução de maturidade, com foco em uso prático, valor de negócio e sustentabilidade das soluções.',
          '🔷 Contribuí com documentação e alinhamento técnico-funcional para apoiar continuidade das entregas e evolução das soluções.'
        ],
        en: [
          'I worked as a Software Specialist focused on Power Platform, supporting clients in designing, implementing, and optimizing enterprise solutions for process automation, analytics, and digital transformation.',
          '🔷 I provided technical consulting and solution design with Power Platform, assessing business needs and translating requirements into scalable, applicable solutions.',
          '🔷 I developed solutions for process automation, apps, reports, and integrations, improving operational efficiency and decision-making.',
          '🔷 I contributed to BI and data analysis initiatives, building reports and dashboards focused on visibility and executive support.',
          '🔷 I optimized business processes by combining automation, data analysis, and tailored solutions for different client scenarios.',
          '🔷 I built solutions using Power Platform capabilities for apps, automation (including RPA), and integrations, supporting corporate workflow digitization.',
          '🔷 I supported client adoption and maturity evolution with focus on practical use, business value, and sustainability.',
          '🔷 I contributed with documentation and technical-functional alignment to support continuity and evolution of deliveries.'
        ]
      }
    },
    stackLine: {
      'pt-br': 'Stack: Power Platform, Power BI, Power Apps, Power Automate (Cloud/RPA), SQL, análise de dados, relatórios, automação de processos, integrações.',
      en: 'Stack: Power Platform, Power BI, Power Apps, Power Automate (Cloud/RPA), SQL, data analysis, reports, process automation, integrations.'
    },
    skillsLine: {
      'pt-br': 'Competências: Arquitetura Cloud Native, Microsoft Power BI e mais 46 competências',
      en: 'Skills: Cloud Native Architecture, Microsoft Power BI and 46+ additional skills'
    }
  },

  // =========================================================
  // Gentil Negócios (out/2020 - fev/2022)
  // =========================================================
  {
    id: 'gentil-negocios-analista-sistemas-negocios',
    range: {'pt-br': 'out de 2020 - fev de 2022', en: 'Oct 2020 - Feb 2022'},
    title: {'pt-br': 'Analista de sistemas de negócios', en: 'Business Systems Analyst'},
    company: 'Gentil Negócios',
    employmentType: {'pt-br': 'Tempo integral', en: 'Full-time'},
    tenure: {'pt-br': '1 ano e 5 meses', en: '1 year 5 months'},
    location: 'Natal, Rio Grande do Norte, Brasil',
    mode: {'pt-br': 'No local', en: 'On-site'},
    tags: ['Power BI', 'Power Automate', 'RPA', 'ETL/ELT', 'Data Driven', 'Web Scraping'],
    highlights: {
      short: {
        'pt-br': [
          'Automação (Power Automate/RPA) e Web Scraping para eficiência operacional.',
          'Pipelines ETL/ELT e dashboards Power BI (Desktop/Mobile) para indicadores.',
          'Adoção de cultura Data Driven e Self-Service BI com governança.'
        ],
        en: [
          'Automation (Power Automate/RPA) and Web Scraping to improve operational efficiency.',
          'ETL/ELT pipelines and Power BI dashboards (Desktop/Mobile) for KPIs.',
          'Data-driven culture and Self-Service BI adoption with governance.'
        ]
      },
      full: {
        'pt-br': [
          'Atuei em iniciativas de automação, dados e analytics, conectando tecnologia e negócio para melhoria de processos, geração de insights e evolução da cultura data-driven.',
          '🔷 Desenvolvi e automatizei processos com Power Automate (incluindo RPA) e Web Scraping, reduzindo esforço manual e aumentando eficiência operacional.',
          '🔷 Criei e mantive pipelines de ETL/ELT com foco em performance, qualidade de dados e integração entre múltiplas fontes.',
          '🔷 Desenvolvi dashboards interativos no Power BI (Desktop e Mobile), com foco em indicadores estratégicos, acompanhamento operacional e suporte à tomada de decisão.',
          '🔷 Atuei em análise, tratamento e estruturação de dados, apoiando times de negócio com informações mais confiáveis e acionáveis.',
          '🔷 Contribuí para implantação de cultura Data Driven e evolução de práticas de Self-Service BI, ampliando autonomia de usuários e governança de dados.',
          '🔷 Desenvolvi aplicativos personalizados com Power Apps e soluções integradas para diferentes áreas de negócio.',
          '🔷 Implementei chatbots com Power Virtual Agents, apoiando automação de atendimento e redução de tarefas repetitivas.',
          '🔷 Atuei de forma estratégica em Business Analytics, conectando dados, processos e objetivos corporativos para melhoria contínua.'
        ],
        en: [
          'I worked on automation, data, and analytics initiatives, bridging technology and business to improve processes, generate insights, and evolve a data-driven culture.',
          '🔷 I developed and automated processes with Power Automate (including RPA) and Web Scraping, reducing manual effort and increasing operational efficiency.',
          '🔷 I built and maintained ETL/ELT pipelines focused on performance, data quality, and integration across multiple sources.',
          '🔷 I developed interactive Power BI dashboards (Desktop and Mobile) focused on strategic KPIs, operational tracking, and decision support.',
          '🔷 I worked on data analysis, cleansing, and structuring, supporting business teams with more reliable and actionable information.',
          '🔷 I contributed to the adoption of a Data Driven culture and Self-Service BI practices, increasing user autonomy and data governance.',
          '🔷 I developed custom Power Apps and integrated solutions for different business areas.',
          '🔷 I implemented chatbots with Power Virtual Agents, supporting service automation and reducing repetitive tasks.',
          '🔷 I worked strategically in Business Analytics, connecting data, processes, and corporate goals for continuous improvement.'
        ]
      }
    },
    stackLine: {
      'pt-br': 'Stack: Power BI, Power Apps, Power Automate (Cloud/RPA), Power Virtual Agents, ETL/ELT, SQL, Web Scraping, Business Analytics, Data Driven, Self-Service BI.',
      en: 'Stack: Power BI, Power Apps, Power Automate (Cloud/RPA), Power Virtual Agents, ETL/ELT, SQL, Web Scraping, Business Analytics, Data Driven, Self-Service BI.'
    },
    skillsLine: {
      'pt-br': 'Competências: Arquitetura Cloud Native, Microsoft Copilot Studio e mais 40 competências',
      en: 'Skills: Cloud Native Architecture, Microsoft Copilot Studio and 40+ additional skills'
    }
  }
];