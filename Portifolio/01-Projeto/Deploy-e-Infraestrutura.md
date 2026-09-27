# Deploy e Infraestrutura

## Scripts disponíveis

```bash
npm run dev      # Servidor de desenvolvimento (localhost:3000)
npm run build    # Build de produção
npm run start    # Servir build local
npm run lint     # ESLint
```

## Variáveis de ambiente

| Variável | Uso | Status |
|---|---|---|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número WhatsApp | ⚠️ Hardcoded no código |
| `NEXT_PUBLIC_CONTACT_EMAIL` | E-mail de contato | ⚠️ Hardcoded no código |

Criar `.env.local` com essas variáveis após mover do código.

## Deploy recomendado

**Vercel** — plataforma nativa para Next.js.

1. Conectar repositório GitHub
2. Configurar variáveis de ambiente no painel Vercel
3. Deploy automático a cada push na branch principal

## Domínio

A definir. Configurar no painel Vercel após deploy.

## Assets de mídia

Vídeos em `public/media/` são servidos pelo Next.js. Para produção em escala, avaliar CDN → ver [[Decisoes-Tecnicas]] ADR-006.

## Sitemap / Robots

Ainda não configurados. Ver [[Estrategia-SEO]].
