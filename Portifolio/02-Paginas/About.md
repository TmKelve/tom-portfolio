# Página: About

**Rota:** `/{locale}/about`
**Arquivo:** `src/app/[locale]/about/page.tsx`
**Status:** ✅ Completa
**SEO:** ✅ `generateMetadata` com OG dinâmico

---

## Estrutura implementada

### 1. Hero
- Kicker: "Sobre mim"
- Nome + bio direta focada em entrega e stack
- Link "Voltar para Home"

### 2. DNA técnico
3 cards com os pilares:
- ⚡ Power Platform (Apps, Automate, Pages, Copilot Studio, Dataverse)
- ☁️ Azure Platform (AKS, Service Bus, Functions, APIM, IaC, Observabilidade)
- 📊 Data, BI & AI (Power BI, Fabric, DAX, Azure OpenAI, AI Builder, AI Foundry)

### 3. Como eu penso
4 princípios numerados:
1. Blueprint antes do código
2. Hands-on até o go-live
3. Governança como requisito
4. Falha é esperada, caos não

### 4. CTA
Botões para `/projects` e `/contact`

---

## Decisões de design

- Inline bilíngue (pt-br / en) com `safeLocale` — sem chaves no JSON de traduções
- Mesmo padrão visual das outras páginas: `ParallaxSectionVideo` + cards translúcidos
- Foco em quem é Tom como profissional/pessoa — não repete especialidades da Home

---

## Relacionado

- [[Platform]] (aprofunda nas áreas técnicas)
- [[Career]] (histórico detalhado)
- [[Metadata-por-Pagina]]
