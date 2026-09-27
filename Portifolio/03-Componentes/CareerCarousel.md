# Componente: CareerCarousel / CareerHistoryCarousel

**Arquivos:**
- `src/components/CareerCarousel.tsx` — versão compacta (Home, highlights.short)
- `src/components/CareerHistoryCarousel.tsx` — versão completa (página Career, highlights.full)

**Tipo:** Client Component
**Fonte de dados:** `src/content/career.ts`

---

## CareerCarousel (Home)

Mostra os 3 primeiros itens de `career.ts` com `highlights.short`.

Props:
```typescript
{
  theme: 'dark' | 'light'
  locale: 'pt-br' | 'en'
  items: CareerCarouselItem[]
  seeAllHref: string
  ctaLabel: string
  prevLabel: string
  nextLabel: string
}
```

## CareerHistoryCarousel (Página Career)

Mostra todos os itens de `career.ts` com `highlights.full`.

---

## Relacionado

- [[Career]]
- [[Timeline]]
