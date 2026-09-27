# Roadmap

## ✅ Feito

- [x] Hero com parallax + vídeo de fundo
- [x] Seção About na Home (bio, especialidades, processo de trabalho)
- [x] Company Logo Marquee animado (Gerdau, Petrobras, Bradesco, Ambev...)
- [x] Carreira completa com CareerCarousel (Home) e página `/career`
- [x] Projects/Cases com detalhe por slug (`/projects/[slug]`)
- [x] Certificações com filtro por categoria (`/certifications`)
- [x] Newsletter Carousel (artigos LinkedIn)
- [x] Página de contato com WhatsApp, Email, LinkedIn
- [x] FloatingWhatsAppButton em todas as páginas
- [x] Suporte multilíngue pt-br / en (next-intl)
- [x] LocaleSwitcher no header
- [x] Responsividade mobile-first
- [x] Acessibilidade básica (ARIA, alt texts, reduced-motion)

## 🔄 Em progresso / Prioridade alta

- [x] Corrigir links incompletos no Footer (LinkedIn → `linkedin.com/in/tom-kelve/`, GitHub removido)
- [x] Corrigir typo: `digirtal-diferenciais.mp4` → `digital-diferenciais.mp4`
- [x] Remover `marketMaking.ts` (arquivo de outro projeto que quebrava TypeScript)
- [x] Adicionar `generateMetadata` em todas as páginas → [[Metadata-por-Pagina]]
- [x] Completar página `/about` — bio, DNA técnico, princípios, CTA
- [x] Completar página `/labs` — 5 labs com estrutura Problema → Abordagem → Decisão
- [x] Completar página `/platform` — 3 áreas, metodologia, perfis de cliente, CTA
- [x] Criar `sitemap.xml` dinâmico (cobre todas as rotas + slugs por locale)
- [x] Criar `robots.txt`
- [x] OG Image dinâmica via `ImageResponse` (`/og` route) → [[Open-Graph]]

## 📋 Planejado / Curto prazo

- [ ] Criar `public/og-image.png` de fallback (1200×630px) para redes que não suportam OG dinâmico
- [ ] Mover telefone/email para variáveis de ambiente (`.env.local`)
- [ ] Remover arquivos `Novo(a) Documento de Texto.txt` do repositório

## 🔭 Futuro / Médio prazo

- [ ] Schema.org estruturado (Person, JobPosting)
- [ ] CDN para arquivos de vídeo (reduzir TTFB)
- [ ] Imagens WebP com fallback
- [ ] Analytics (Vercel Analytics ou similar)
- [ ] Dark mode toggle
- [ ] CMS headless para atualizar conteúdo sem deploy

## Relacionados

- [[Backlog]]
- [[Estrategia-SEO]]
- [[Metadata-por-Pagina]]
