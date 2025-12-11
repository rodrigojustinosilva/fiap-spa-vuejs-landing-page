# Módulo 11: Configurando Rotas e Navegação

## 🎯 Objetivos

- Usar `<router-link>` para navegação
- Estilizar links ativos
- Criar navegação funcional no Header
- Adicionar navegação no MainBanner

## 🔗 router-link vs tag <a>

### Não Use <a> em SPAs:

```html
<!-- ❌ Evite: recarrega a página -->
<a href="/contato">Contato</a>
```

### Use <router-link>:

```html
<!-- ✅ Correto: navegação SPA -->
<router-link to="/contato">Contato</router-link>
```

**Vantagens:**
- Não recarrega a página
- Mais rápido
- Mantém estado da aplicação
- Adiciona classes CSS automaticamente

## 📝 Atualizando o Header

### src/components/Header.vue

```vue
<template>
  <header class="bg-blue-600 text-white shadow-lg">
    <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="text-2xl font-bold">
        <router-link to="/" class="hover:text-blue-200 transition duration-200">
          {{ logoText }}
        </router-link>
      </div>
      
      <!-- Navigation Links -->
      <ul class="flex space-x-6">
        <li>
          <router-link 
            to="/" 
            class="hover:text-blue-200 transition duration-200 pb-1"
            active-class="border-b-2 border-white"
          >
            Início
          </router-link>
        </li>
        <li>
          <router-link 
            to="/contato" 
            class="hover:text-blue-200 transition duration-200 pb-1"
            active-class="border-b-2 border-white"
          >
            Contato
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
defineProps({
  logoText: {
    type: String,
    required: true,
    default: 'Logo'
  }
})
</script>
```

### active-class

```vue
<router-link 
  to="/" 
  active-class="border-b-2 border-white"
>
```

- `active-class`: CSS aplicado quando a rota está ativa
- Destacamento visual do link atual
- Melhora UX (usuário sabe onde está)

## 🎨 Adicionando Navegação ao Banner

### Atualizando src/components/MainBanner.vue

```vue
<template>
  <section class="banner-gradient text-white py-24">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-5xl font-bold mb-4">
        Bem-vindo à Nossa Landing Page
      </h1>
      <p class="text-xl mb-8">
        Crie experiências incríveis com Vue.js, Vite e Tailwind CSS
      </p>
      
      <!-- Botão agora navega para /contato -->
      <router-link 
        to="/contato"
        class="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-200 inline-block"
      >
        Entre em Contato
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.banner-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
</style>
```

## 🧪 Testando Navegação

1. Clique em "Início" no header → Vai para Home
2. Clique em "Contato" no header → Vai para Contato
3. Observe a borda branca no link ativo
4. Clique no botão do banner → Vai para Contato
5. Clique no logo → Volta para Home

**Tudo sem recarregar a página!** ⚡

## 🎨 Navegação Programática (Bonus)

Às vezes precisa navegar via JavaScript:

```vue
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function irParaContato() {
  router.push('/contato')
}
</script>

<template>
  <button @click="irParaContato">
    Ir para Contato
  </button>
</template>
```

## 🎯 Exercícios

### Exercício 1: Adicionar Link de Volta

No Contato.vue, adicione link para voltar:

```vue
<div class="text-center mt-8">
  <router-link 
    to="/" 
    class="text-blue-600 hover:text-blue-800 font-semibold"
  >
    ← Voltar para Início
  </router-link>
</div>
```

### Exercício 2: Estilizar Links Ativos

Experimente diferentes estilos para `active-class`:
- `font-bold` (negrito)
- `underline` (sublinhado)
- `bg-blue-700` (fundo escuro)

## ✅ Checklist

- [ ] Substituiu `<a>` por `<router-link>`
- [ ] Adicionou navegação no Header
- [ ] Usou `active-class` para destacar link ativo
- [ ] Adicionou navegação no MainBanner
- [ ] Testou toda a navegação
- [ ] Completou exercícios

👉 **[Próximo: Módulo 12 - Query Parameters e SEO](./12-query-params-seo.md)**
