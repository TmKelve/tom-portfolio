# Componente: Header

**Arquivo:** `src/components/Header.tsx`
**Tipo:** Client Component (para scroll behavior)
**Usado em:** `src/app/[locale]/layout.tsx`

---

## Funcionalidade

- Navegação principal com links para todas as seções
- `aria-current="page"` para link ativo
- Logo com scroll-to-top ao clicar
- [[LocaleSwitcher]] integrado (pt-br / en)
- Sticky no topo

---

## Links de navegação

| Label pt-br | Rota |
|---|---|
| Sobre | `/#about` |
| Carreira | `/career` |
| Projetos | `/projects` |
| Certificações | `/certifications` |
| Contato | `/contact` |

---

## Relacionado

- [[LocaleSwitcher]]
- [[NeonLogo]]
