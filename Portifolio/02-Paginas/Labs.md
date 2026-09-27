# Página: Labs

**Rota:** `/{locale}/labs`
**Arquivo:** `src/app/[locale]/labs/page.tsx`
**Conteúdo:** `src/content/labs.ts`
**Status:** ✅ Completa
**SEO:** ✅ `generateMetadata` com OG dinâmico

---

## Conceito

Oficina de engenharia 🧪 — POCs, protótipos, templates e experimentos técnicos.
Diferente dos Projetos (cases corporativos com impacto e números), Labs são:
- Provas de conceito para validar arquitetura
- Templates e aceleradores reutilizáveis
- Experimentos com tecnologias novas
- Blueprints e padrões internos

---

## Estrutura implementada

### Header
- Kicker: "🧪 Oficina de engenharia"
- Descrição do conceito

### Grid de cards (2 colunas no desktop)
Cada card exibe:
- Nome + objetivo (itálico com borda azul)
- Problema → Abordagem → Decisão técnica chave
- Stack em tags
- Badge de status (Público / Privado NDA / Em andamento)
- Link para repositório (ou mensagem "disponível em conversa privada")

### CTA
Botão para `/contact`

---

## Labs cadastrados (`src/content/labs.ts`)

| # | Slug | Stack principal | Status |
|---|---|---|---|
| 1 | `idempotency-pattern-service-bus` | Functions, Service Bus, Table Storage | Privado |
| 2 | `observability-template-apim-functions` | APIM, Functions, App Insights, Bicep | Privado |
| 3 | `power-platform-coe-accelerator` | Power Platform CLI, Azure DevOps | Privado |
| 4 | `semantic-layer-dax-framework` | Power BI, DAX, Tabular Editor | Privado |
| 5 | `copilot-studio-handoff-pattern` | Copilot Studio, Power Automate, Teams | Privado |

---

## Como adicionar um novo lab

Editar `src/content/labs.ts` e adicionar um objeto `Lab`:
```ts
{
  slug: "meu-lab",
  title: { "pt-br": "...", en: "..." },
  objective: { "pt-br": "...", en: "..." },
  problem: { "pt-br": "...", en: "..." },
  approach: { "pt-br": "...", en: "..." },
  keyDecision: { "pt-br": "...", en: "..." },
  stack: ["Azure Functions", "..."],
  status: "public" | "private" | "wip",
  link: "https://github.com/..." // opcional
}
```

---

## Relacionado

- [[Projects]] (cases corporativos)
- [[Visão-Geral]]
