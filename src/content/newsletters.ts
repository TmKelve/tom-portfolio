// src/content/newsletters.ts

export const newsletterCoverImage = '/images/newsletter-cover.jpg';

export type Locale = 'pt-br' | 'en';

export type NewsletterItem = {
  slug: string;
  href: string;         // link externo do LinkedIn
  dateLabel: string;    // o que aparece no card
  title: Record<Locale, string>;
};

export const newsletters: NewsletterItem[] = [
  // =========================
  // ~ 3 anos atrás (2023)
  // =========================
  {
    slug: 'aumentando-eficiencia-rh-financeiro',
    href: 'https://www.linkedin.com/pulse/aumentando-efici%C3%AAncia-como-power-platform-pode-os-de-e-tom-kelve?lipi=urn%3Ali%3Apage%3Ad_flagship3_series_entity%3Bq6R4TNdESkO5Y8mObErT7g%3D%3D',
    dateLabel: '2023',
    title: {
      'pt-br': 'Aumentando a eficiência: Como a Power Platform pode beneficiar os setores de RH e Financeiro',
      en: 'Boosting efficiency: How Power Platform can benefit HR and Finance'
    }
  },
  {
    slug: 'power-platform-salesforce-integracao',
    href: 'https://www.linkedin.com/pulse/potencializando-suas-vendas-como-integra%C3%A7%C3%A3o-do-power-e-tom-kelve?lipi=urn%3Ali%3Apage%3Ad_flagship3_series_entity%3Bq6R4TNdESkO5Y8mObErT7g%3D%3D',
    dateLabel: '2023',
    title: {
      'pt-br': 'Potencializando suas vendas: Como a integração do Power Platform e Salesforce pode melhorar a eficiência operacional e a experiência do cliente',
      en: 'Boosting sales: Integrating Power Platform and Salesforce to improve efficiency and customer experience'
    }
  },
  {
    slug: 'transformando-saude-com-power-platform',
    href: 'https://www.linkedin.com/pulse/transformando-sa%C3%BAde-com-power-platform-como-est%C3%A1-s-de-medeiros?lipi=urn%3Ali%3Apage%3Ad_flagship3_series_entity%3Bq6R4TNdESkO5Y8mObErT7g%3D%3D',
    dateLabel: '2023',
    title: {
      'pt-br': 'Transformando a Saúde com a Power Platform: Como a tecnologia está revolucionando a assistência médica',
      en: 'Transforming healthcare with Power Platform: How technology is reshaping medical care'
    }
  },
  {
    slug: 'transforme-sua-equipe-ti-com-power-platform',
    href: 'https://www.linkedin.com/pulse/transforme-sua-equipe-de-ti-com-power-platform-e-s-de-medeiros?lipi=urn%3Ali%3Apage%3Ad_flagship3_series_entity%3Bq6R4TNdESkO5Y8mObErT7g%3D%3D',
    dateLabel: '2023',
    title: {
      'pt-br': 'Transforme sua equipe de TI com a Power Platform: soluções de negócios rápidas e eficientes',
      en: 'Transform your IT team with Power Platform: fast and efficient business solutions'
    }
  },
  {
    slug: 'power-platform-varejo',
    href: 'https://www.linkedin.com/pulse/como-power-platform-est%C3%A1-revolucionando-o-setor-de-s-de-medeiros?lipi=urn%3Ali%3Apage%3Ad_flagship3_series_entity%3Bq6R4TNdESkO5Y8mObErT7g%3D%3D',
    dateLabel: '2023',
    title: {
      'pt-br': 'Como a Power Platform está revolucionando o setor de varejo.',
      en: 'How Power Platform is transforming retail.'
    }
  },
  {
    slug: 'possibilidades-power-platform-low-code-ao-avancado',
    href: 'https://www.linkedin.com/pulse/explorando-possibilidades-do-power-platform-da-low-%C3%A0-s-de-medeiros?lipi=urn%3Ali%3Apage%3Ad_flagship3_series_entity%3Bq6R4TNdESkO5Y8mObErT7g%3D%3D',
    dateLabel: '2023',
    title: {
      'pt-br': 'Explorando as possibilidades do Power Platform: da low code à programação avançada',
      en: 'Exploring Power Platform possibilities: from low-code to advanced development'
    }
  },
  {
    slug: 'power-platform-azure-devops-colaboracao',
    href: 'https://www.linkedin.com/pulse/como-power-platform-e-azure-devops-podem-melhorar-de-s-de-medeiros?lipi=urn%3Ali%3Apage%3Ad_flagship3_series_entity%3Bq6R4TNdESkO5Y8mObErT7g%3D%3D',
    dateLabel: '2023',
    title: {
      'pt-br': 'Como a Power Platform e Azure DevOps podem melhorar a colaboração e gerenciamento de projetos',
      en: 'How Power Platform and Azure DevOps improve collaboration and project management'
    }
  },
  {
    slug: 'produtividade-com-ia-e-power-platform',
    href: 'https://www.linkedin.com/pulse/elevando-produtividade-com-intelig%C3%AAncia-artificial-e-s-de-medeiros?lipi=urn%3Ali%3Apage%3Ad_flagship3_series_entity%3Bq6R4TNdESkO5Y8mObErT7g%3D%3D',
    dateLabel: '2023',
    title: {
      'pt-br': 'Elevando a produtividade com inteligência artificial e Power Platform',
      en: 'Boosting productivity with AI and Power Platform'
    }
  },
  {
    slug: 'power-apps-e-powershell',
    href: 'https://www.linkedin.com/pulse/aproveitando-o-melhor-de-ambos-mundos-power-apps-e-s-de-medeiros?lipi=urn%3Ali%3Apage%3Ad_flagship3_series_entity%3Bq6R4TNdESkO5Y8mObErT7g%3D%3D',
    dateLabel: '2023',
    title: {
      'pt-br': 'Aproveitando o melhor de ambos mundos: Power Apps e PowerShell',
      en: 'Best of both worlds: Power Apps and PowerShell'
    }
  },
  {
    slug: 'alm-ciclo-de-vida-apps-power-platform',
    href: 'https://www.linkedin.com/pulse/otimizando-o-ciclo-de-vida-aplicativos-com-power-e-s-de-medeiros?lipi=urn%3Ali%3Apage%3Ad_flagship3_series_entity%3Bq6R4TNdESkO5Y8mObErT7g%3D%3D',
    dateLabel: '2023',
    title: {
      'pt-br': 'Otimizando o ciclo de vida de aplicativos com a Power Platform e ALM',
      en: 'Optimizing application lifecycle with Power Platform and ALM'
    }
  },
  {
    slug: 'power-apps-sap-hana',
    href: 'https://www.linkedin.com/pulse/o-power-apps-e-sap-hana-uma-combina%C3%A7%C3%A3o-poderosa-para-s-de-medeiros?lipi=urn%3Ali%3Apage%3Ad_flagship3_series_entity%3Bq6R4TNdESkO5Y8mObErT7g%3D%3D',
    dateLabel: '2023',
    title: {
      'pt-br': 'O Power Apps e o SAP HANA: Uma combinação poderosa para aumentar a eficiência e produtividade.',
      en: 'Power Apps and SAP HANA: a powerful combination to increase efficiency and productivity'
    }
  },
  {
    slug: 'power-platform-setores-em-transformacao',
    href: 'https://www.linkedin.com/pulse/power-platform-solu%C3%A7%C3%A3o-para-setores-em-transforma%C3%A7%C3%A3o-s-de-medeiros?lipi=urn%3Ali%3Apage%3Ad_flagship3_series_entity%3Bq6R4TNdESkO5Y8mObErT7g%3D%3D',
    dateLabel: '2023',
    title: {
      'pt-br': 'Power Platform: A solução para setores em transformação',
      en: 'Power Platform: the solution for industries in transformation'
    }
  },
  {
    slug: 'automacao-e-analise-de-dados-power-platform',
    href: 'https://www.linkedin.com/pulse/explorando-possibilidades-da-power-platform-para-de-e-s-de-medeiros?lipi=urn%3Ali%3Apage%3Ad_flagship3_series_entity%3Bq6R4TNdESkO5Y8mObErT7g%3D%3D',
    dateLabel: '2023',
    title: {
      'pt-br': 'Explorando as possibilidades da Power Platform para automação de negócios e análise de dados',
      en: 'Exploring Power Platform for business automation and data analytics'
    }
  },

  // =========================
  // ~ 2 anos atrás (2024)
  // =========================
  {
    slug: 'aproveitando-power-platform-produtividade-inovacao',
    href: 'https://www.linkedin.com/pulse/aproveitando-power-platform-impulsionar-produtividade-s-de-medeiros?lipi=urn%3Ali%3Apage%3Ad_flagship3_series_entity%3Bq6R4TNdESkO5Y8mObErT7g%3D%3D',
    dateLabel: '2024',
    title: {
      'pt-br': 'Aproveitando a Power Platform: impulsionar a produtividade, a inovação, a integração e a segurança',
      en: 'Leveraging Power Platform: boosting productivity, innovation, integration, and security'
    }
  },
  {
    slug: 'copilot-e-power-platform-eficiencia',
    href: 'https://www.linkedin.com/pulse/descobrindo-o-potencial-sin%C3%A9rgico-copilot-e-power-s-de-medeiros?lipi=urn%3Ali%3Apage%3Ad_flagship3_series_entity%3Bq6R4TNdESkO5Y8mObErT7g%3D%3D',
    dateLabel: '2024',
    title: {
      'pt-br': 'Descobrindo o Potencial Sinérgico: Copilot e Power Platform para Ampliar a Eficiência e Produtividade',
      en: 'Copilot + Power Platform: expanding efficiency and productivity'
    }
  },

  // =========================
  // ~ 7 meses atrás (2025)
  // =========================
  {
    slug: 'microsoft-fabric-arquitetura-unificada',
    href: 'https://www.linkedin.com/pulse/power-bi-e-microsoft-fabric-desvendando-o-uma-para-s-de-medeiros-4tglf?lipi=urn%3Ali%3Apage%3Ad_flagship3_series_entity%3Bq6R4TNdESkO5Y8mObErT7g%3D%3D',
    dateLabel: '2025',
    title: {
      'pt-br': 'Desvendando o Microsoft Fabric: Uma Arquitetura Unificada para Dados',
      en: 'Microsoft Fabric explained: a unified data architecture'
    }
  },
  {
    slug: 'licenciamento-power-platform-otimizar-custos',
    href: 'https://www.linkedin.com/pulse/desmistificando-o-licenciamento-power-platform-como-s-de-medeiros-ciyfe?lipi=urn%3Ali%3Apage%3Ad_flagship3_series_entity%3Bq6R4TNdESkO5Y8mObErT7g%3D%3D',
    dateLabel: '2025',
    title: {
      'pt-br': 'Desmistificando o Licenciamento Power Platform: Como Otimizar Custos sem Sacrificar Funcionalidades',
      en: 'Power Platform licensing: optimize costs without sacrificing features'
    }
  }
];