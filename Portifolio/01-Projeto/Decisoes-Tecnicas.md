# Decisões Técnicas (ADRs)

Registro das decisões arquiteturais do projeto e suas motivações.

---

## ADR-001 — Next.js App Router como framework

**Decisão:** Usar Next.js 16 com App Router (não Pages Router).

**Motivo:**
- Server Components nativos reduzem JS enviado ao cliente
- Layout aninhado por rota (`layout.tsx`) simplifica estrutura multilíngue
- `generateStaticParams` para pre-render de slugs de projetos
- Integração nativa com `next-intl` para i18n

**Trade-offs:**
- App Router é mais complexo que Pages Router para iniciantes
- Algumas libs ainda têm suporte parcial ao App Router

---

## ADR-002 — Tailwind CSS v4

**Decisão:** Usar Tailwind CSS 4 (nova engine, não v3).

**Motivo:**
- Bundle CSS menor com novo compilador
- Sem arquivo `tailwind.config.js` obrigatório
- Melhor performance em build

**Trade-offs:**
- Algumas mudanças de API em relação à v3 (configuração via PostCSS)
- Documentação ainda consolidando

---

## ADR-003 — Conteúdo em TypeScript (não CMS)

**Decisão:** Todo o conteúdo (projetos, carreira, certificações) está em arquivos `.ts` dentro de `src/content/`.

**Motivo:**
- Tipagem forte via TypeScript (`Project`, `CareerItem`, `CertItem`)
- Sem dependência externa de CMS
- Deploy estático sem chamadas de API
- Conteúdo versionado no git

**Trade-offs:**
- Atualizar conteúdo exige deploy
- Sem interface visual para edição
- **Futuro:** Avaliar migração para CMS headless (Sanity, Contentful) se a frequência de updates aumentar

---

## ADR-004 — next-intl para multilíngue

**Decisão:** Usar `next-intl 4.8.3` para suporte pt-br / en.

**Motivo:**
- Integração nativa com App Router e Server Components
- Arquivos de tradução JSON em `messages/`
- `getTranslations()` no servidor sem overhead no cliente

**Estrutura de chaves:** Ver [[Estrategia-i18n]]

---

## ADR-005 — Informações de contato no código

**Decisão atual (a corrigir):** Telefone e e-mail estão hardcoded em `FloatingWhatsAppButton.tsx` e `contact/page.tsx`.

**Recomendação:** Mover para `.env.local`:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5511914920770
NEXT_PUBLIC_CONTACT_EMAIL=Tomkelve2019@gmail.com
```

**Status:** Pendente → ver [[Backlog]] item M7

---

## ADR-006 — Vídeos MP4 servidos localmente

**Decisão atual:** Arquivos de vídeo em `public/media/` servidos diretamente.

**Recomendação futura:** CDN (Cloudflare R2, Vercel Blob, ou similar) para reduzir TTFB e largura de banda.

**Status:** Aceitável por enquanto. Reavaliar após deploy em produção.

---

## Relacionados

- [[Visão-Geral]]
- [[Deploy-e-Infraestrutura]]
- [[Estrategia-i18n]]
