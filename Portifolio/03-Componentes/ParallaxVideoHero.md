# Componente: ParallaxVideoHero

**Arquivo:** `src/components/ParallaxVideoHero.tsx`
**Tipo:** Client Component (`'use client'`)
**Usado em:** Home (seção 1)

---

## Props

```typescript
{
  videoSrc: string    // Caminho do vídeo (ex: "/media/digital-world.mp4")
  photoSrc: string    // Foto de perfil (ex: "/images/me.png")
}
```

---

## Funcionalidade

- Vídeo de fundo com autoplay, muted, loop
- Efeito parallax no scroll via `requestAnimationFrame` (throttled com flag `ticking`)
- Overlay gradiente para legibilidade
- Exibe: nome, cargo, stack, CTAs (projetos + contato)
- Respeita `prefers-reduced-motion`

---

## Performance

- `preload="metadata"` no vídeo
- Throttling com `requestAnimationFrame` previne jank
- Scroll listener removido no `useEffect` cleanup

---

## Vídeo atual

`/media/digital-world.mp4`
