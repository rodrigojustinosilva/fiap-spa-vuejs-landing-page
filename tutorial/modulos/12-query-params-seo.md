# Módulo 12: Query Parameters e SEO

## 🎯 Objetivos

- Passar dados via query parameters
- Capturar parâmetros em componentes
- Implementar SEO dinâmico
- Otimizar meta tags por rota

## 🔄 Passando Dados Entre Rotas

### Query Parameters

Query parameters são dados passados na URL:

```
/contato?origem=banner
         └─ query parameter
```

### Navegando com Query Parameters

```vue
<!-- MainBanner.vue -->
<router-link 
  :to="{ path: '/contato', query: { origem: 'banner' } }"
  class="..."
>
  Entre em Contato
</router-link>
```

**Resultado:** URL será `/contato?origem=banner`

### Sintaxe Objeto vs String

```vue
<!-- ✅ Objeto (permite query params) -->
<router-link :to="{ path: '/contato', query: { origem: 'banner' } }">

<!-- ⚠️ String (sem query params) -->
<router-link to="/contato">
```

Note o `:` antes de `to` para binding dinâmico!

## 📥 Capturando Query Parameters

### Atualizando Contato.vue

```vue
<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold text-gray-800 mb-6">
      Entre em Contato
    </h1>
    
    <!-- Exibir mensagem se vier de alguma origem -->
    <div 
      v-if="origem" 
      class="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-6"
    >
      <p class="font-semibold">
        Você veio da seção: <strong>{{ origem }}</strong>
      </p>
    </div>
    
    <!-- Formulário... -->
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

// Captura a rota atual
const route = useRoute()

// Acessa o query parameter
const origem = route.query.origem
</script>
```

### Entendendo:

```javascript
import { useRoute } from 'vue-router'
```
Composable do Vue Router para acessar informações da rota.

```javascript
const route = useRoute()
const origem = route.query.origem
```
- `route.query` = objeto com todos os query params
- `route.query.origem` = valor do parâmetro `origem`

```vue
<div v-if="origem">
```
Só exibe se `origem` tiver valor (não undefined).

## 🧪 Testando

1. Clique no botão do banner → Vai para `/contato?origem=banner`
2. Veja a mensagem: "Você veio da seção: banner"
3. Acesse `/contato` direto → Sem mensagem
4. Teste: `/contato?origem=header` → Mensagem: "header"

## 🔍 SEO: Meta Tags Dinâmicas

### Por que SEO importa?

- Google indexa cada página com título e descrição únicos
- Melhora ranking nos resultados de busca
- Melhor experiência ao compartilhar em redes sociais

### Implementando SEO Dinâmico

#### Passo 1: Adicionar meta nas rotas

```javascript
// src/router/index.js
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'FIAP Landing Page - Vue.js + Vite + Tailwind CSS',
      description: 'Aprenda Vue.js 3 criando uma landing page moderna...'
    }
  },
  {
    path: '/contato',
    name: 'contato',
    component: Contato,
    meta: {
      title: 'Contato - FIAP Landing Page',
      description: 'Entre em contato conosco. Preencha o formulário...'
    }
  }
]
```

#### Passo 2: Navigation Guard

```javascript
// src/router/index.js (continua...)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Navigation Guard para atualizar meta tags
router.beforeEach((to, from, next) => {
  // Atualiza o título
  if (to.meta.title) {
    document.title = to.meta.title
  }
  
  // Atualiza a meta description
  if (to.meta.description) {
    let descriptionTag = document.querySelector('meta[name="description"]')
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta')
      descriptionTag.setAttribute('name', 'description')
      document.head.appendChild(descriptionTag)
    }
    descriptionTag.setAttribute('content', to.meta.description)
  }
  
  next()
})

export default router
```

### Entendendo:

```javascript
router.beforeEach((to, from, next) => {
```
- `beforeEach`: Executa antes de **cada** navegação
- `to`: Rota de destino
- `from`: Rota de origem
- `next()`: Continua a navegação

```javascript
document.title = to.meta.title
```
Atualiza o `<title>` do HTML dinamicamente.

```javascript
descriptionTag.setAttribute('content', to.meta.description)
```
Atualiza ou cria tag `<meta name="description">`.

## 🧪 Testando SEO

1. Acesse Home → Veja na aba: "FIAP Landing Page - Vue.js..."
2. Acesse Contato → Veja na aba: "Contato - FIAP Landing Page"
3. Abra DevTools → Elements → `<head>` → Veja tags atualizadas

## 🎯 Exercícios Finais

### Exercício 1: Múltiplas Origens

Adicione mais botões com diferentes origens:

```vue
<!-- Footer.vue -->
<router-link :to="{ path: '/contato', query: { origem: 'footer' } }">
  Fale Conosco
</router-link>
```

### Exercício 2: Personalizar Mensagem

No Contato.vue, personalize a mensagem:

```vue
<p v-if="origem === 'banner'">
  Que bom que você se interessou pelo nosso projeto!
</p>
<p v-else-if="origem === 'footer'">
  Obrigado por chegar até aqui!
</p>
```

### Exercício 3: Adicionar Keywords

No `index.html`, adicione keywords para SEO:

```html
<meta name="keywords" content="Vue.js, Vite, Tailwind CSS, Tutorial, FIAP">
```

## ✅ Checklist Final

- [ ] Implementou query parameters no MainBanner
- [ ] Capturou params com `useRoute()`
- [ ] Exibiu mensagem condicional
- [ ] Adicionou meta tags nas rotas
- [ ] Implementou navigation guard para SEO
- [ ] Testou título e description dinâmicos
- [ ] Completou todos os exercícios

## 🎉 Parabéns!

Você completou todos os módulos e criou uma Landing Page SPA completa com:

- ✅ Vue.js 3 com Composition API
- ✅ Vite para desenvolvimento rápido
- ✅ Tailwind CSS para estilização
- ✅ Componentes reutilizáveis com props
- ✅ Vue Router para navegação
- ✅ Query parameters para rastreamento
- ✅ SEO otimizado

## 🚀 Próximos Passos

1. [Exercícios Extras](../exercicios-extras.md) - Desafios práticos
2. [Recursos Adicionais](../recursos.md) - Materiais de estudo
3. Crie seu próprio projeto!

---

**Documentação completa no** [README principal](../README.md)
