# Módulo 10: Introdução ao Vue Router

## 🎯 Objetivos

- Entender o conceito de roteamento em SPAs
- Instalar e configurar Vue Router
- Criar rotas básicas
- Navegar entre páginas

## 🛣️ O que é Roteamento?

### Site Tradicional vs SPA

**Site Tradicional:**
```
/index.html → Página 1 (recarrega tudo)
/sobre.html → Página 2 (recarrega tudo)
/contato.html → Página 3 (recarrega tudo)
```

**SPA com Router:**
```
/ → Home (atualiza só o conteúdo)
/sobre → Sobre (atualiza só o conteúdo)
/contato → Contato (atualiza só o conteúdo)
```

Header e Footer permanecem, apenas o meio muda!

## ⚙️ Instalando Vue Router

O Vue Router já está instalado (package.json), mas vamos configurar.

### Passo 1: Criar pasta router

```bash
mkdir src/router
```

### Passo 2: Criar src/router/index.js

```javascript
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contato from '../views/Contato.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/contato',
    name: 'contato',
    component: Contato
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
```

### Entendendo o código:

```javascript
const routes = [
  {
    path: '/',           // URL
    name: 'home',        // Nome da rota (opcional)
    component: Home      // Componente a renderizar
  }
]
```

```javascript
createWebHistory(import.meta.env.BASE_URL)
```
- Modo History API (URLs limpas: `/contato`)
- Alternativa: Hash mode (`/#/contato`)

### Passo 3: Registrar router no main.js

```javascript
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'  // ← NOVO

const app = createApp(App)
app.use(router)  // ← NOVO
app.mount('#app')
```

### Passo 4: Usar <router-view> no App.vue

```vue
<template>
  <div id="app">
    <Header logoText="FIAP Landing Page" />
    
    <!-- Conteúdo dinâmico da rota -->
    <router-view />
    
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>
```

## 🏠 Criando Página Contato

### Criar src/views/Contato.vue

```vue
<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold text-gray-800 mb-6">
      Entre em Contato
    </h1>
    
    <div class="max-w-lg mx-auto bg-white shadow-md rounded-lg p-8">
      <form class="space-y-6">
        <div>
          <label class="block text-gray-700 font-semibold mb-2">
            Nome
          </label>
          <input
            type="text"
            class="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Seu nome completo"
          />
        </div>
        
        <div>
          <label class="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            class="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="seu@email.com"
          />
        </div>
        
        <button
          type="submit"
          class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Enviar Mensagem
        </button>
      </form>
    </div>
  </div>
</template>
```

## 🧪 Testando o Roteamento

1. Acesse `http://localhost:5173/` → Home
2. Acesse `http://localhost:5173/contato` → Contato
3. Header e Footer permanecem!

## ✅ Checklist

- [ ] Criou `src/router/index.js`
- [ ] Definiu rotas para Home e Contato
- [ ] Registrou router no `main.js`
- [ ] Usou `<router-view>` no `App.vue`
- [ ] Criou `src/views/Contato.vue`
- [ ] Testou navegação manual via URL

👉 **[Próximo: Módulo 11 - Configurando Rotas e Navegação](./11-configuracao-rotas.md)**
