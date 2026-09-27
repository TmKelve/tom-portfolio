# Página: Projects

**Rota:** `/{locale}/projects` e `/{locale}/projects/[slug]`
**Arquivos:**
- `src/app/[locale]/projects/page.tsx`
- `src/app/[locale]/projects/[slug]/page.tsx`
**Fonte de dados:** `src/content/projects.ts`
**Status:** ✅ Completa
**SEO:** ⚠️ Sem `generateMetadata`

---

## Componentes

- `ProjectsExplorer` — listagem com filtro por tags
- `ProjectCard` — card resumido (usado também na Home)
- `ProjectContentView` — view de detalhe do case

---

## Tipos de projeto

| type | Descrição |
|---|---|
| `case` | Case study real com contexto, arquitetura, decisões, resultados |
| `lab` | Experimento ou projeto pessoal |

---

## Cases cadastrados (projects.ts)

Ver [[Projetos-Index]] para lista completa com tags e stack.

---

## Estrutura de um case (ProjectContent)

```typescript
{
  context: Localized        // Contexto do problema
  role: Localized           // Papel desempenhado
  architecture: Localized   // Descrição da arquitetura (L0–L4)
  decisions: LocalizedList  // Decisões técnicas tomadas
  reliability: Localized    // SLOs, resiliência, degradação
  observability: Localized  // Monitoramento, alertas, runbooks
  results: LocalizedList    // Resultados alcançados
  nextSteps: LocalizedList  // Próximos passos
}
```

---

## Checklist SEO

- [ ] `generateMetadata` na listagem
- [ ] `generateMetadata` dinâmico por slug (título do case)
- [ ] Open Graph image por projeto

→ Ver [[Metadata-por-Pagina]]
