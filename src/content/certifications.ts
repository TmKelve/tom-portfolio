export type CertCategoryId =
  | 'power-platform'
  | 'azure-cloud'
  | 'data-bi'
  | 'agile-gestao'
  | 'negocios'
  | 'formacao';

export type CertItem = {
  id: string;
  title: string;
  issuer: string;
  issued: { 'pt-br': string; en: string };
  code?: string;
  skills?: string;
  category: CertCategoryId;
};

export const certCategories: { id: CertCategoryId; title: { 'pt-br': string; en: string } }[] = [
  { id: 'power-platform', title: { 'pt-br': 'Power Platform', en: 'Power Platform' } },
  { id: 'azure-cloud', title: { 'pt-br': 'Azure & Cloud', en: 'Azure & Cloud' } },
  { id: 'data-bi', title: { 'pt-br': 'Dados, BI & Analytics', en: 'Data, BI & Analytics' } },
  { id: 'agile-gestao', title: { 'pt-br': 'Agile, Processos & Gestão', en: 'Agile, Process & Management' } },
  { id: 'negocios', title: { 'pt-br': 'Negócios & Produtividade', en: 'Business & Productivity' } },
  { id: 'formacao', title: { 'pt-br': 'Formação & Programas', en: 'Education & Programs' } }
];

export const allCertifications: CertItem[] = [
  // =========================
  // Power Platform
  // =========================
  {
    id: 'pl-900',
    title: 'Microsoft Certified: Power Platform Fundamentals (PL-900)',
    issuer: 'Microsoft',
    issued: { 'pt-br': 'set de 2022', en: 'Sep 2022' },
    code: 'I410-9001',
    category: 'power-platform'
  },
  {
    id: 'pl-100',
    title: 'Microsoft Certified: Power Platform App Maker Associate (PL-100)',
    issuer: 'Microsoft',
    issued: { 'pt-br': 'out de 2022', en: 'Oct 2022' },
    category: 'power-platform'
  },
  {
    id: 'pl-200',
    title: 'Microsoft Certified: Power Platform Functional Consultant Associate (PL-200)',
    issuer: 'Microsoft',
    issued: { 'pt-br': 'fev de 2023', en: 'Feb 2023' },
    category: 'power-platform'
  },
  {
    id: 'pl-400',
    title: 'Microsoft Certified: Power Platform Developer Associate (PL-400)',
    issuer: 'Microsoft',
    issued: { 'pt-br': 'fev de 2023', en: 'Feb 2023' },
    category: 'power-platform'
  },
  {
    id: 'pl-600',
    title: 'Microsoft Certified: Power Platform Solution Architect Expert (PL-600)',
    issuer: 'Microsoft',
    issued: { 'pt-br': 'fev de 2023', en: 'Feb 2023' },
    category: 'power-platform'
  },
  {
    id: 'powerapps-prosperi',
    title: 'Power Apps - Guia Completo',
    issuer: 'Prosperi',
    issued: { 'pt-br': 'dez de 2021', en: 'Dec 2021' },
    category: 'power-platform'
  },

  // =========================
  // Azure & Cloud
  // =========================
  {
    id: 'az-204',
    title: 'Microsoft Certified: Azure Developer Associate (AZ-204)',
    issuer: 'Microsoft',
    issued: { 'pt-br': 'out de 2022', en: 'Oct 2022' },
    skills: 'Azure',
    category: 'azure-cloud'
  },
  {
    id: 'dp-203',
    title: 'Microsoft Certified: Azure Data Engineer Associate (DP-203)',
    issuer: 'Microsoft',
    issued: { 'pt-br': 'fev de 2023', en: 'Feb 2023' },
    skills: 'Azure',
    category: 'azure-cloud'
  },
  {
    id: 'fiap-cloud-arch',
    title: 'Cloud, Administration and Solution Architect',
    issuer: 'FIAP',
    issued: { 'pt-br': 'jan de 2026', en: 'Jan 2026' },
    code: '05888be863e4f6788c25e903500f972c',
    skills: 'Azure, Azure DevOps Server',
    category: 'azure-cloud'
  },

  // =========================
  // Dados, BI & Analytics
  // =========================
  {
    id: 'pl-300',
    title: 'Microsoft Certified: Power BI Data Analyst Associate (PL-300)',
    issuer: 'Microsoft',
    issued: { 'pt-br': 'fev de 2023', en: 'Feb 2023' },
    code: 'I608-0687',
    category: 'data-bi'
  },
  {
    id: 'fiap-bigdata',
    title: 'Big Data & Analytics',
    issuer: 'FIAP',
    issued: { 'pt-br': 'nov de 2025', en: 'Nov 2025' },
    code: '8e11aea2164b1882361fd4fa6b76656e',
    category: 'data-bi'
  },
  {
    id: 'fiap-bi',
    title: 'FIAP - Business Intelligence (BI)',
    issuer: 'FIAP',
    issued: { 'pt-br': 'fev de 2022', en: 'Feb 2022' },
    code: '5ea00fa58babdf50d6295da11b29b460',
    skills: 'BI, DAX',
    category: 'data-bi'
  },
  {
    id: 'ibm-ds',
    title: 'Data Science Professional Certificate',
    issuer: 'IBM',
    issued: { 'pt-br': 'set de 2022', en: 'Sep 2022' },
    category: 'data-bi'
  },
  {
    id: 'linkedin-powerbi-advanced',
    title: 'Power BI Avançado - Karine Lago',
    issuer: 'LinkedIn',
    issued: { 'pt-br': 'dez de 2021', en: 'Dec 2021' },
    skills: 'DAX, BI Tools',
    category: 'data-bi'
  },

  // =========================
  // Agile, Processos & Gestão
  // =========================
  {
    id: 'six-sigma-yb',
    title: 'Six Sigma Yellow Belt',
    issuer: '6sigmastudy',
    issued: { 'pt-br': 'fev de 2022', en: 'Feb 2022' },
    category: 'agile-gestao'
  },
  {
    id: 'scrum-fundamentals',
    title: 'Scrum Fundamentals Certified',
    issuer: 'Vabro.ai / VMEdu',
    issued: { 'pt-br': 'fev de 2022', en: 'Feb 2022' },
    category: 'agile-gestao'
  },
  {
    id: 'coursera-pm',
    title: 'CST, Gestão de Projetos (Google Career Certificates)',
    issuer: 'Coursera',
    issued: { 'pt-br': 'nov de 2022 – jul de 2023', en: 'Nov 2022 – Jul 2023' },
    category: 'agile-gestao'
  },
  {
    id: 'bradesco-lean-leadership',
    title: 'Liderança Lean',
    issuer: 'Fundação Bradesco',
    issued: { 'pt-br': 'mar de 2021', en: 'Mar 2021' },
    code: '61A608F7-6963-4FFF-A9BF-F87F0E5F3DD2',
    category: 'agile-gestao'
  },

  // =========================
  // Negócios & Produtividade
  // =========================
  {
    id: 'bradesco-db-admin',
    title: 'Administrando Bancos de Dados',
    issuer: 'Fundação Bradesco',
    issued: { 'pt-br': 'mar de 2021', en: 'Mar 2021' },
    category: 'negocios'
  },
  {
    id: 'bradesco-business-strategy',
    title: 'Estratégia de Negócios',
    issuer: 'Fundação Bradesco',
    issued: { 'pt-br': 'fev de 2021', en: 'Feb 2021' },
    code: '302E6902-F508-46B3-ACCB-9B4A8C74082A',
    category: 'negocios'
  },
  {
    id: 'bradesco-excel-advanced',
    title: 'Microsoft Excel 2016 - Avançado',
    issuer: 'Fundação Bradesco',
    issued: { 'pt-br': 'fev de 2021', en: 'Feb 2021' },
    code: '7F76E0E5-B6F6-4217-A406-9F4F153D43AE',
    category: 'negocios'
  },
  {
    id: 'ie-market-research',
    title: 'Investigación de mercados y comportamiento del consumidor',
    issuer: 'IE Business School',
    issued: { 'pt-br': 'fev de 2021', en: 'Feb 2021' },
    category: 'negocios'
  },
  {
    id: 'fiap-ux',
    title: 'FIAP - User Experience',
    issuer: 'FIAP',
    issued: { 'pt-br': 'mar de 2022', en: 'Mar 2022' },
    code: '3d167f77acd9bd534add276dac77997c',
    category: 'negocios'
  },
  {
    id: 'dio-html-css',
    title: 'HTML5/CSS3',
    issuer: 'DIO',
    issued: { 'pt-br': 'jun de 2022', en: 'Jun 2022' },
    code: '34560054',
    category: 'negocios'
  },

  // =========================
  // Formação & Programas
  // =========================
  {
    id: 'coursera-ds-ibm',
    title: 'CST, Data Science - IBM',
    issuer: 'Coursera',
    issued: { 'pt-br': 'jan de 2021 – set de 2022', en: 'Jan 2021 – Sep 2022' },
    category: 'formacao'
  }
];

// ✅ Destaques Microsoft para Home (os 8 que você já mostra)
export const featuredMicrosoftCerts = allCertifications.filter((c) => c.issuer === 'Microsoft');