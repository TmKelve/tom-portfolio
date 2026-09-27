export type CompanyLogo = {
  name: string;
  sector: string;
  src: string; // arquivo em /public
};

export const companyLogos: CompanyLogo[] = [
  { name: "Gerdau", sector: "Indústria e mineração", src: "/logos/gerdau.png" },
  { name: "ArcelorMittal", sector: "Indústria e mineração", src: "/logos/arcelormittal.png" },
  { name: "Anglo American", sector: "Indústria e mineração", src: "/logos/anglo-american.png" },

  { name: "Petrobras", sector: "Energia", src: "/logos/petrobras.png" },

  { name: "Banco Bradesco", sector: "Financeiro e saúde", src: "/logos/bradesco.png" },
  { name: "Bradesco Saúde", sector: "Financeiro e saúde", src: "/logos/bradesco-saude.png" },

  { name: "Lojas Renner", sector: "Varejo", src: "/logos/renner.png" },
  { name: "VLI", sector: "Logística", src: "/logos/vli.png" },

  { name: "Ambev", sector: "Bens de consumo", src: "/logos/ambev.png" },

  { name: "FIEP", sector: "Institucional", src: "/logos/fiep.png" },

  { name: "NTT DATA", sector: "Tecnologia", src: "/logos/ntt-data.png" },
  { name: "MGinfo", sector: "Tecnologia", src: "/logos/mginfo.png" },
  { name: "Prosperi", sector: "Consultoria", src: "/logos/prosperi.png" },
  { name: "Gentil Negócios", sector: "Consultoria", src: "/logos/gentil.png" },
];