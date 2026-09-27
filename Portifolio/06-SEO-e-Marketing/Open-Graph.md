# Open Graph & Twitter Cards

## Status atual (2026-03-24)

✅ **Implementado e funcional via OG Image dinâmica.**

---

## Implementação

### OG Image dinâmica — `src/app/og/route.tsx`

Rota Edge Function que gera imagens PNG 1200×630 sob demanda via `ImageResponse`.

**Parâmetros:**
- `title` — título principal (obrigatório)
- `subtitle` — linha inferior (padrão: `tomkelve.com`)
- `tag` — badge colorido acima do título (ex: "Case Study", "Engineering Workshop")

**Exemplos de URL:**
```
/og?title=Azure+%26+Power+Platform+Architect&subtitle=tomkelve.com
/og?title=Power+BI+Governance&subtitle=tomkelve.com&tag=Case+Study
/og?title=Labs+%26+Experimentos&tag=Engineering+Workshop
```

**Design:**
- Fundo: `#09090b` (zinc-950)
- Grid decorativo com linhas azuis (rgba 59,130,246)
- Brilhos radiais azuis nos cantos
- Ponto azul neon + "TOM KELVE" no header
- Badge opcional com bordas azuis
- Título em branco com text-shadow azul
- Footer: domínio + badges "Azure | Power Platform | AI"

---

## Como cada página usa o OG

| Página | OG Image URL |
|---|---|
| Layout base | `/og?title=Azure+%26+Power+Platform+Architect` |
| About | `/og?title=Sobre` |
| Career | `/og?title=Carreira` |
| Labs | `/og?title=Labs+%26+Experimentos&tag=Engineering+Workshop` |
| Platform | `/og?title=Power+Platform+%26+Azure+AI+Foundry&tag=Platform+Architecture` |
| Projects/[slug] | `/og?title={título do case}&tag=Case+Study` (dinâmico) |

---

## Pendente

- [ ] Criar `public/og-image.png` (1200×630px) como fallback estático para apps que não suportam OG dinâmico
- [ ] Validar preview no LinkedIn após deploy em `tomkelve.com`
- [ ] Validar no [Open Graph Debugger](https://developers.facebook.com/tools/debug/)

---

## Relacionado

- [[Estrategia-SEO]]
- [[Metadata-por-Pagina]]
