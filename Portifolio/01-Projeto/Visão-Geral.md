# Visão Geral do Projeto

## O que é

Portfólio profissional de **Tom Kelve** — Azure & Power Platform Architect. Site multilíngue (pt-br / en) com seções de apresentação, carreira, projetos/cases, certificações e contato.

## Stack

| Camada | Tecnologia | Versão |
|---|---|---|
| Framework | Next.js (App Router) | 16.1.6 |
| UI | React | 19.2.3 |
| Linguagem | TypeScript (strict) | 5.x |
| Estilo | Tailwind CSS | 4.x |
| i18n | next-intl | 4.8.3 |
| Lint | ESLint 9 + next config | — |

## Estrutura de Pastas

```
src/
├── app/[locale]/          # Rotas (multilíngue)
│   ├── page.tsx           # Home
│   ├── about/
│   ├── career/
│   ├── certifications/
│   ├── contact/
│   ├── labs/
│   ├── platform/
│   └── projects/[slug]/
├── components/            # 19 componentes React
├── content/               # Dados do site (TypeScript)
│   ├── projects.ts        # Cases + Labs
│   ├── career.ts          # Histórico de carreira
│   ├── certifications.ts  # Lista de certificações
│   ├── newsletters.ts     # Artigos LinkedIn
│   └── companyLogos.ts    # Logos do marquee
├── i18n/                  # Configuração next-intl
└── proxy.ts               # Middleware de rota

messages/
├── en.json                # Traduções inglês
└── pt-br.json             # Traduções português

public/
├── images/                # Fotos
├── logos/                 # Logos empresas
├── media/                 # Vídeos MP4
└── *.svg                  # Ícones
```

## Idiomas suportados

- `pt-br` (padrão)
- `en`

Rota: `/{locale}/pagina` — ex: `/pt-br/career`, `/en/career`

## Ambiente de desenvolvimento

```bash
npm run dev      # servidor local
npm run build    # build de produção
npm run lint     # ESLint
```

## Relacionados

- [[Roadmap]]
- [[Backlog]]
- [[Decisoes-Tecnicas]]
- [[Deploy-e-Infraestrutura]]
