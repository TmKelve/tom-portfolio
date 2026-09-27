# Chaves de Tradução — en

**Arquivo:** `messages/en.json`
**Total de chaves:** 132

---

## Discrepância com pt-br.json

en.json tem 132 chaves vs 133 em pt-br.json. Uma chave em pt-br não tem equivalente em inglês.

**Ação:** Identificar e adicionar a chave faltante em en.json.

```bash
# Comparar chaves (Linux/Mac/Git Bash)
diff <(cat messages/pt-br.json | python -c "import json,sys; d=json.load(sys.stdin); [print(ns+'.'+k) for ns,v in d.items() for k in v]" | sort) \
     <(cat messages/en.json | python -c "import json,sys; d=json.load(sys.stdin); [print(ns+'.'+k) for ns,v in d.items() for k in v]" | sort)
```

→ Ver [[Chaves-pt-br]]
