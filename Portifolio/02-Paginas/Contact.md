# Página: Contact

**Rota:** `/{locale}/contact`
**Arquivo:** `src/app/[locale]/contact/page.tsx`
**Status:** ✅ Completa
**SEO:** ⚠️ Sem `generateMetadata`

---

## Canais de contato

| Canal | Valor | Observação |
|---|---|---|
| WhatsApp | `5511914920770` | ⚠️ Hardcoded no código |
| E-mail | `Tomkelve2019@gmail.com` | ⚠️ Hardcoded no código |
| LinkedIn | Incompleto no Footer | ⚠️ Link sem perfil |

---

## Componente flutuante

`FloatingWhatsAppButton` — aparece em todas as páginas. Também usa o número hardcoded.

---

## Ação necessária

Mover para `.env.local`:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5511914920770
NEXT_PUBLIC_CONTACT_EMAIL=Tomkelve2019@gmail.com
```

→ Ver [[Backlog]] item M7 e [[Decisoes-Tecnicas]] ADR-005

---

## Checklist SEO

- [ ] `title` — ex: "Contato | Tom Kelve"
- [ ] `description`

→ Ver [[Metadata-por-Pagina]]
