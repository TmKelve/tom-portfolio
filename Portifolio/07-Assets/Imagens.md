# Assets: Imagens

**Localização:** `public/images/`

---

## Inventário principal

| Arquivo | Usado em | Alt text |
|---|---|---|
| `me.png` | `ParallaxVideoHero` (Hero) | "Foto do Tom" |
| `me-about.jpg` | Home seção About | "Tom Kelve" |
| `491068276_*.jpg` | (verificar uso) | — sem alt visível |
| `491097736_*.jpg` | (verificar uso) | — sem alt visível |

---

## Logos de empresas

**Localização:** `public/logos/`

Usados no `CompanyLogoMarquee`. Ver `src/content/companyLogos.ts` para lista completa.

Empresas: Gerdau · Petrobras · Bradesco · Ambev · _(ver companyLogos.ts)_

---

## Problemas

- Imagens com nomes gerados automaticamente (`491068276_...`) — dificulta manutenção
- Possível imagens não utilizadas no build (verificar)

---

## Boas práticas

- Todas as imagens usam `next/image` (otimização automática)
- Sizes configurados para responsividade
- **Futuro:** Converter para WebP manualmente ou via pipeline

---

## Relacionado

- [[CompanyMarquee]]
- [[ParallaxVideoHero]]
