# Chaves de Tradução — pt-br

**Arquivo:** `messages/pt-br.json`
**Total de chaves:** 133

---

## Como verificar

Para listar todas as chaves:
```bash
cat messages/pt-br.json | python -c "import json,sys; d=json.load(sys.stdin); [print(ns+'.'+k) for ns,v in d.items() for k in v]"
```

---

## Namespaces identificados

- `Home` — todas as strings da página Home
- _(abrir o arquivo para ver demais namespaces)_

---

## Discrepância com en.json

pt-br tem 133 chaves vs 132 em en.json. Identificar a chave orphan.

→ Ver [[Chaves-en]]
