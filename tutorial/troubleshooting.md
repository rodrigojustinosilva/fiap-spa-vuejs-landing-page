# Troubleshooting - Problemas Comuns e Soluções

## 🔴 Instalação e Configuração

### Problema: "command not found: npm"

**Causa:** Node.js não instalado

**Solução:**
```bash
# macOS (Homebrew)
brew install node

# Windows/Linux
# Baixe de https://nodejs.org/
```

### Problema: "EACCES: permission denied"

**Causa:** Permissões incorretas em pastas do npm

**Solução (macOS/Linux):**
```bash
sudo chown -R $USER /usr/local/lib/node_modules
```

### Problema: "Module not found"

**Causa:** Dependências não instaladas

**Solução:**
```bash
npm install
```

---

## 🟡 Vite e Build

### Problema: "Port 5173 is already in use"

**Causa:** Outro servidor rodando na porta

**Solução:**
```bash
# Matar processo na porta
lsof -ti:5173 | xargs kill -9

# Ou usar outra porta
npm run dev -- --port 3000
```

### Problema: Página em branco

**Causa:** Erro de JavaScript

**Solução:**
1. Abra DevTools (F12)
2. Veja a aba Console
3. Corrija erros mostrados

### Problema: "Failed to resolve import"

**Causa:** Caminho de importação incorreto

**Solução:**
```javascript
// ❌ Errado
import Header from 'Header.vue'

// ✅ Correto
import Header from './components/Header.vue'
```

---

## 🟢 Vue.js

### Problema: Props não atualizam

**Causa:** Tentando modificar props diretamente

**Solução:**
```javascript
// ❌ NUNCA faça isso
props.value = 'novo'

// ✅ Use variável local
const localValue = ref(props.value)
localValue.value = 'novo'
```

### Problema: "Component is not defined"

**Causa:** Esqueceu de importar o componente

**Solução:**
```vue
<script setup>
// Adicione o import
import Header from './components/Header.vue'
</script>
```

### Problema: Reatividade não funciona

**Causa:** Não usou `ref()` ou `reactive()`

**Solução:**
```javascript
// ❌ Não é reativo
let contador = 0

// ✅ Reativo
const contador = ref(0)
contador.value++ // Use .value
```

---

## 🟣 Tailwind CSS

### Problema: Classes Tailwind não funcionam

**Causa 1:** Esqueceu de importar `style.css`

**Solução:**
```javascript
// main.js
import './style.css'  // ← Verifique!
```

**Causa 2:** Configuração incorreta do `content`

**Solução:**
```javascript
// tailwind.config.js
content: [
  "./index.html",
  "./src/**/*.{vue,js,jsx}",  // ← Inclui .vue!
]
```

### Problema: Estilos não aplicam

**Causa:** Especificidade CSS

**Solução:**
```vue
<!-- Use !important se necessário -->
<div class="!text-red-500">
```

---

## 🔵 Vue Router

### Problema: "Cannot read property 'push' of undefined"

**Causa:** Router não registrado

**Solução:**
```javascript
// main.js
import router from './router'
app.use(router)  // ← Não esqueça!
```

### Problema: Navegação recarrega página

**Causa:** Usando `<a>` ao invés de `<router-link>`

**Solução:**
```vue
<!-- ❌ Errado -->
<a href="/contato">Contato</a>

<!-- ✅ Correto -->
<router-link to="/contato">Contato</router-link>
```

### Problema: 404 ao recarregar página

**Causa:** Servidor precisa redirecionar todas rotas para index.html

**Solução (Vite):** Já funciona por padrão

**Solução (Produção):** Configure servidor:
```nginx
# nginx
try_files $uri $uri/ /index.html;
```

---

## 🟠 Erros Comuns de Sintaxe

### "Unexpected token"

**Causa:** Erro de sintaxe JavaScript

**Exemplo:**
```javascript
// ❌ Errado (falta vírgula)
const obj = {
  name: 'João'
  age: 25
}

// ✅ Correto
const obj = {
  name: 'João',
  age: 25
}
```

### "Cannot read property of undefined"

**Causa:** Tentando acessar propriedade de algo indefinido

**Solução:**
```javascript
// ❌ Pode dar erro
console.log(user.name)

// ✅ Verifica antes
console.log(user?.name)  // Optional chaining
```

### "Missing closing tag"

**Causa:** Tag HTML não fechada

**Solução:**
```vue
<!-- ❌ Errado -->
<div>
  <p>Texto

<!-- ✅ Correto -->
<div>
  <p>Texto</p>
</div>
```

---

## 🎯 Dicas de Debug

### 1. Console.log é seu amigo

```javascript
console.log('Valor:', minhaVariavel)
```

### 2. Vue DevTools

Instale a extensão do navegador:
- [Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools)
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

### 3. Verifique a aba Network

F12 → Network → Veja requisições HTTP

### 4. Limpe o cache

```bash
# Limpar cache npm
npm cache clean --force

# Reinstalar dependências
rm -rf node_modules package-lock.json
npm install
```

### 5. Verifique versões

```bash
node --version  # Deve ser 18+
npm --version   # Deve ser 9+
```

---

## 🆘 Ainda com Problemas?

1. **Revise o módulo** onde surgiu o erro
2. **Consulte a documentação oficial:**
   - [Vue.js](https://vuejs.org/)
   - [Vite](https://vitejs.dev/)
   - [Vue Router](https://router.vuejs.org/)
3. **Pergunte ao instrutor** ou colegas
4. **Procure no Stack Overflow**
5. **Verifique issues no GitHub** dos projetos

---

[← Voltar ao Índice](./README.md)
