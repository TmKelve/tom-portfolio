# Componente: CompanyLogoMarquee

**Arquivo:** `src/components/CompanyLogoMarquee.tsx`
**Tipo:** Client Component
**Usado em:** Home (seção 2, abaixo do About)

---

## Props

```typescript
{
  title: string
  subtitle: string
  speedSeconds?: number   // default: 26
}
```

---

## Funcionalidade

Carrossel horizontal infinito (CSS animation) com logos de empresas clientes.

Logos em: `src/content/companyLogos.ts`

---

## Empresas exibidas

Gerdau · Petrobras · Bradesco · Ambev · _(ver companyLogos.ts para lista completa)_

---

## Performance

- `priority={false}` nas imagens (lazy load)
- Animação CSS pura (sem JS de scroll)
- `aria-hidden="true"` na faixa duplicada (acessibilidade)
