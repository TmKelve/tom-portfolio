# Componente: FloatingWhatsAppButton

**Arquivo:** `src/components/FloatingWhatsAppButton.tsx`
**Tipo:** Client Component
**Usado em:** Layout global (aparece em todas as páginas)

---

## Funcionalidade

Botão flutuante fixo no canto inferior direito que abre conversa WhatsApp com mensagem pré-preenchida.

---

## Problema atual

Número hardcoded no arquivo:
```typescript
const phone = '5511914920770'
```

**Ação:** Mover para `NEXT_PUBLIC_WHATSAPP_NUMBER` em `.env.local` → [[Backlog]] M7

---

## Link gerado

```
https://wa.me/{phone}?text={encodeURIComponent(prefillText)}
```

O `encodeURIComponent` já está aplicado (seguro contra XSS).
