# Assets: Vídeos

**Localização:** `public/media/`

---

## Inventário

| Arquivo | Usado em | Seção | Observação |
|---|---|---|---|
| `digital-world.mp4` | `ParallaxVideoHero` | Hero (Home) | OK |
| `digirtal-diferenciais.mp4` | `ParallaxSectionVideo` | Diferenciais + Carreira + Newsletter (Home) | ⚠️ **Typo no nome** |
| `Digital-Destaques.MP4` | `ParallaxSectionVideo` | Projetos destaque (Home) | Extensão maiúscula |

---

## Problemas

### Typo no nome do arquivo
`digirtal-diferenciais.mp4` → correto seria `digital-diferenciais.mp4`

Referenciado em:
- `src/app/[locale]/page.tsx` linha ~139: `videoSrc="/media/digirtal-diferenciais.mp4"`

**Ação:** Renomear o arquivo físico E atualizar a referência no código.
→ [[Backlog]] B3

### Extensão maiúscula
`Digital-Destaques.MP4` — em ambientes case-sensitive (Linux/produção) pode falhar.

**Ação:** Renomear para `digital-destaques.mp4` e atualizar referência.

---

## Boas práticas

- Usar `preload="metadata"` (já implementado)
- Considerar CDN para produção → [[Decisoes-Tecnicas]] ADR-006
- Manter vídeos com nomes lowercase e sem espaços
