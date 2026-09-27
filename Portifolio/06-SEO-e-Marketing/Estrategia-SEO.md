# Estratégia de SEO

## Situação atual (atualizado 2026-03-24)

✅ **SEO implementado e funcional.**

| Item | Status |
|---|---|
| `generateMetadata` em todas as páginas | ✅ |
| `metadataBase` com domínio real | ✅ `https://tomkelve.com` |
| Open Graph (título, descrição, imagem) | ✅ |
| Twitter Cards | ✅ |
| OG Image dinâmica por página | ✅ via `/og` route |
| `sitemap.xml` dinâmico | ✅ |
| `robots.txt` | ✅ |
| Canonical URLs por locale | ✅ |

---

## OG Image dinâmica

Rota: `src/app/og/route.tsx`
Runtime: Edge (Vercel)
Parâmetros: `?title=...&subtitle=...&tag=...`

Exemplos:
- Home: `/og?title=Azure+%26+Power+Platform+Architect&subtitle=tomkelve.com`
- Case: `/og?title=Power+BI+Governance&subtitle=tomkelve.com&tag=Case+Study`
- Labs: `/og?title=Labs+%26+Experimentos&subtitle=tomkelve.com&tag=Engineering+Workshop`

Design: fundo `#09090b`, grid azul decorativo, brilhos radiais, badges de stack no rodapé.

---

## Metadata por página

| Página | Título (pt-br) | SEO |
|---|---|---|
| Home | Arquiteto Azure & Power Platform | ✅ |
| About | Sobre | ✅ |
| Career | Carreira | ✅ |
| Certifications | Certificações | ✅ |
| Contact | Contato | ✅ |
| Labs | Labs | ✅ |
| Platform | Plataforma | ✅ |
| Projects | Projetos | ✅ |
| Projects/[slug] | Título do case (dinâmico) | ✅ |

---

## Palavras-chave alvo

- Tom Kelve
- Azure Architect Brasil
- Power Platform Architect
- Azure Power Platform consultant
- Arquiteto Azure São Paulo
- Power BI Semantic Layer
- Azure Integration Architecture

---

## Pendente

- [ ] `public/og-image.png` de fallback (1200×630px) para apps sem suporte a OG dinâmico
- [ ] Schema.org (Person, JobPosting) para rich snippets no Google

---

## Relacionado

- [[Open-Graph]]
- [[Metadata-por-Pagina]]
