# Index de Projetos / Cases

**Fonte:** `src/content/projects.ts`
**Tipo:** TypeScript (localizado pt-br / en)

---

## Casos cadastrados

| Slug | Tipo | Status | Tags principais |
|---|---|---|---|
| `powerbi-semantic-core-governance-metrics-factory` | case | public | Power BI · Semantic Model · DAX · Governance · RLS/OLS · ALM |
| `powerbi-customer-360-growth-cohorts-ltv-retention` | case | public | Power BI · Customer 360 · LTV · Cohorts |
| _(ver projects.ts para demais)_ | — | — | — |

---

## Estrutura de um project

```typescript
type Project = {
  slug: string
  type: "case" | "lab"
  title: Localized           // pt-br + en
  summary: Localized
  tags: string[]
  stack: string[]
  status: "public" | "private"
  content?: ProjectContent   // detalhes completos do case
}
```

## Estrutura do content (case completo)

```
context      → contexto / problema
role         → papel de Tom no projeto
architecture → arquitetura (L0–L4)
decisions    → decisões técnicas tomadas
reliability  → SLOs, resiliência, degradação
observability→ monitoramento, alertas, runbooks
results      → resultados alcançados
nextSteps    → próximos passos
```

---

## Case: Power BI Semantic Core

**Slug:** `powerbi-semantic-core-governance-metrics-factory`

**Problema:** Múltiplas áreas calculavam KPIs de formas diferentes → divergência, baixa confiança no BI.

**Solução:** Camada semântica única com dataset core + thin reports por domínio.

**Arquitetura:**
- L0: ERP/CRM/e-commerce (fontes)
- L1: Power Query/Dataflows (staging + qualidade)
- L2: Tabelas curadas por domínio (dimensões conformadas)
- L3: Dataset Core (estrela) + datasets thin por área
- L4: Relatórios por perfil (Executivo, Ops, Analista) com RLS

**Stack:** Power BI · Power Query · Dataflows · SQL · Tabular Editor · ALM Toolkit · Entra ID · Deployment Pipelines · Purview (opcional)

**Resultados:**
- Reduziu divergência de KPIs
- Acelerou entrega de novos relatórios via reuso
- Melhorou performance e estabilidade de refresh

---

## Adicionar novo case

1. Abrir `src/content/projects.ts`
2. Adicionar objeto seguindo o tipo `Project`
3. Criar nota aqui no vault para documentar a lógica

---

## Relacionado

- [[Projects]] (página)
- [[Backlog]]
