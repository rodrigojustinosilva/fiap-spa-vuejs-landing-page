# Módulo 7: Componentes da Landing Page

## 🎯 Objetivos

- Criar MainBanner (hero section)
- Criar ContentSection (conteúdo)
- Criar Footer (rodapé)
- Compor a página Home

## 🎨 Criando MainBanner.vue

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
      <button class="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-200">
        Saiba Mais
      </button>
    </div>
  </section>
</template>

<style scoped>
.banner-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
</style>
```

### Conceitos:

- **<style scoped>**: CSS apenas para este componente
- **Gradiente CSS**: Fundo personalizado
- **Classes Tailwind**: Responsividade e estilização rápida

## 📝 Criando ContentSection.vue

```vue
<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-gray-800 mb-6 text-center">
        Sobre Este Projeto
      </h2>
      <div class="max-w-3xl mx-auto text-gray-600 space-y-4">
        <p class="text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p class="text-lg leading-relaxed">
          Duis aute irure dolor in reprehenderit in voluptate velit esse 
          cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </div>
  </section>
</template>
```

## 🦶 Criando Footer.vue

```vue
<template>
  <footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <p class="text-gray-400">
            © 2025 FIAP Landing Page. Todos os direitos reservados.
          </p>
        </div>
        
        <div class="flex space-x-6">
          <a href="#" class="text-gray-400 hover:text-white transition">GitHub</a>
          <a href="#" class="text-gray-400 hover:text-white transition">LinkedIn</a>
          <a href="#" class="text-gray-400 hover:text-white transition">Twitter</a>
        </div>
      </div>
    </div>
  </footer>
</template>
```

## 🏠 Atualizando App.vue

```vue
<template>
  <div id="app">
    <Header logoText="FIAP Landing Page" />
    
    <main>
      <MainBanner />
      <ContentSection />
    </main>
    
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import MainBanner from './components/MainBanner.vue'
import ContentSection from './components/ContentSection.vue'
import Footer from './components/Footer.vue'
</script>
```

## ✅ Teste no Navegador

Você deve ver:
- ✅ Header azul no topo
- ✅ Banner roxo com gradiente
- ✅ Seção de conteúdo cinza
- ✅ Footer cinza escuro

👉 **[Próximo: Módulo 8 - Composição de Componentes](./08-composicao.md)**
