# Página: Platform

**Rota:** `/{locale}/platform`
**Arquivo:** `src/app/[locale]/platform/page.tsx`
**Status:** ✅ Completa
**SEO:** ✅ `generateMetadata` com OG dinâmico

---

## Conceito

Página de arquitetura de plataforma — aprofunda o que Tom domina e como estrutura o ecossistema Microsoft. Diferente da Home (visão geral) e do About (quem é Tom), Platform foca em **o que é entregue e como**.

---

## Estrutura implementada

### 1. Hero
"Power Platform, Power BI/Fabric e Azure AI Foundry — do blueprint ao go-live com governança real, ALM e observabilidade ponta a ponta."

### 2. Três áreas de atuação (cards com highlights)
| Área | Subtítulo | Pontos |
|---|---|---|
| ⚡ Power Platform | Apps · Automate · Pages · Copilot Studio · Dataverse | 5 highlights |
| 📊 Power BI / Fabric | Modelagem · DAX · Semântica · Fabric · RLS | 5 highlights |
| 🤖 Azure AI Foundry | OpenAI · AI Builder · Agentes · RAG · Copilot | 5 highlights |

### 3. Metodologia (5 passos numerados)
01. CoE & Guardrails
02. Ambientes & ALM
03. Governança de Dados
04. Observabilidade
05. Melhoria Contínua

### 4. Para quem (diferencial — qualifica o lead)
| Perfil | Fit |
|---|---|
| 🏗️ Empresa sem Power Platform estruturado | Alto |
| ⚙️ Time com plataforma mas sem arquitetura | Alto |
| 🤖 Projeto de IA aplicada ao negócio | Alto |

### 5. CTA
Botões para `/projects` (cases) e `/contact`

---

## Decisões de design

- A seção "Para quem" é o principal diferencial — qualifica o lead antes do contato
- Vídeo de fundo: `digital-diferenciais.mp4`
- Mesmo padrão visual das outras páginas: `ParallaxSectionVideo` + cards translúcidos

---

## Relacionado

- [[About]] (quem é Tom)
- [[Labs]] (experimentos técnicos)
- [[Projects]] (cases corporativos)
