# Estratégia de i18n

**Biblioteca:** next-intl 4.8.3
**Locales suportados:** `pt-br` (padrão) · `en`
**Arquivos de tradução:** `messages/pt-br.json` · `messages/en.json`

---

## Como funciona

1. Middleware em `src/proxy.ts` detecta o locale da URL e redireciona
2. Rotas ficam sob `src/app/[locale]/`
3. Layouts/páginas chamam `setRequestLocale(locale)` para Server Components
4. Traduções acessadas via `getTranslations('Namespace')` no servidor ou `useTranslations` no cliente

---

## Namespaces de tradução

| Namespace | Usado em |
|---|---|
| `Home` | `page.tsx` (Home) |
| _(ver messages/*.json para demais)_ | — |

---

## Conteúdo localizado no TypeScript

Além dos arquivos `messages/`, o conteúdo de dados usa `Localized`:

```typescript
type Localized = { "pt-br": string; en: string }
type LocalizedList = { "pt-br": string[]; en: string[] }
```

Isso significa que `projects.ts`, `career.ts` e `certifications.ts` têm todas as strings duplicadas em ambos os idiomas.

---

## Discrepância detectada

- `en.json`: 132 chaves
- `pt-br.json`: 133 chaves
- ⚠️ Verificar qual chave está faltando em inglês

---

## Relacionado

- [[Chaves-pt-br]]
- [[Chaves-en]]
- [[Decisoes-Tecnicas]] ADR-004
