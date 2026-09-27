# Metadata por Página

Planejamento das tags de metadata para cada rota.

---

## Home (`/`)

```typescript
export async function generateMetadata({ params }) {
  const { locale } = await params
  return {
    title: locale === 'en'
      ? 'Tom Kelve | Azure & Power Platform Architect'
      : 'Tom Kelve | Arquiteto Azure & Power Platform',
    description: locale === 'en'
      ? 'Azure & Power Platform Solution Architect — enterprise integration, AI/Automation, governance and scalability.'
      : 'Arquiteto de Soluções Azure & Power Platform — integração enterprise, AI/Automation, governança e escalabilidade.',
  }
}
```

**Status:** ⬜ Não implementado

---

## Career (`/career`)

```typescript
title: 'Carreira | Tom Kelve'  // pt-br
title: 'Career | Tom Kelve'    // en
description: 'Histórico de carreira: Azure Architect, Power Platform Tech Lead, ...'
```

**Status:** ⬜ Não implementado

---

## Certifications (`/certifications`)

```typescript
title: 'Certificações | Tom Kelve'
description: '25+ certificações Microsoft, Azure, Power Platform, IBM, FIAP e mais.'
```

**Status:** ⬜ Não implementado

---

## Contact (`/contact`)

```typescript
title: 'Contato | Tom Kelve'
description: 'Entre em contato via WhatsApp, e-mail ou LinkedIn.'
```

**Status:** ⬜ Não implementado

---

## Projects (`/projects`)

```typescript
title: 'Projetos & Cases | Tom Kelve'
description: 'Cases reais de arquitetura Azure, Power BI, integração enterprise e AI.'
```

**Status:** ⬜ Não implementado

---

## Projects [slug] (`/projects/[slug]`)

```typescript
export async function generateMetadata({ params }) {
  const project = projects.find(p => p.slug === params.slug)
  return {
    title: project?.title[locale] ?? 'Projeto | Tom Kelve',
    description: project?.summary[locale],
  }
}
```

**Status:** ⬜ Não implementado

---

## Checklist geral

- [ ] Home
- [ ] Career
- [ ] Certifications
- [ ] Contact
- [ ] Projects (listagem)
- [ ] Projects [slug] (dinâmico)
- [ ] About
- [ ] Labs
- [ ] Platform

---

## Relacionado

- [[Estrategia-SEO]]
- [[Open-Graph]]
- [[Backlog]] M1–M6
