# Página: Home

**Rota:** `/` (redirect para `/{locale}`)
**Arquivo:** `src/app/[locale]/page.tsx`
**Status:** ✅ Completa
**SEO:** ⚠️ Sem `generateMetadata`

---

## Seções (ordem na página)

| # | Seção | Componente | Vídeo de fundo |
|---|---|---|---|
| 1 | Hero + parallax + foto | `ParallaxVideoHero` | `digital-world.mp4` |
| 2 | Quem sou / About | Inline (`LightCard`) | — |
| 2b | Company Logo Marquee | `CompanyLogoMarquee` | — |
| 3 | Diferenciais + Carreira + Newsletter | `ParallaxSectionVideo` + `CareerCarousel` + `NewsletterCarousel` | `digirtal-diferenciais.mp4` ⚠️ typo |
| 4 | Certificações destaque | `CertificationCard` (8 certs) | — |
| 5 | Projetos destaque | `ParallaxSectionVideo` + `ProjectCard` (3 projetos) | `Digital-Destaques.MP4` |
| 6 | CTA final | Inline | — |

---

## Componentes utilizados

- [[ParallaxVideoHero]]
- [[CompanyMarquee]]
- [[CareerCarousel]] (mostra os 3 primeiros de `career.ts`)
- [[NewsletterCarousel]]
- `CertificationCard` (mostra 8 certs Microsoft hardcoded)
- [[ProjectCard]] (mostra 3 projetos `status: 'public'`)

---

## Problemas conhecidos

- Typo no vídeo: `digirtal-diferenciais.mp4` → deveria ser `digital-diferenciais.mp4`
- Sem `generateMetadata` → ver [[Metadata-por-Pagina]]
- Seção de certificações usa lista hardcoded na página (não importa de `certifications.ts` por slug)

---

## Checklist SEO

- [ ] `title` configurado
- [ ] `description` configurada
- [ ] Open Graph image
- [ ] Twitter Card
- [ ] Canonical URL

→ Ver [[Metadata-por-Pagina]]
