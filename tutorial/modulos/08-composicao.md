# Módulo 8: Composição de Componentes

## 🎯 Objetivos

- Entender como componentes se combinam
- Aprender padrões de composição
- Organizar código de forma escalável

## 🧩 Padrões de Composição

### 1. Importar → Registrar → Usar

```vue
<script setup>
// 1. Importar
import Header from './components/Header.vue'

// 2. Registrar (automático no script setup)
// 3. Usar no template
</script>

<template>
  <Header />
</template>
```

### 2. Container Pattern

**App.vue** é o container que organiza o layout:

```vue
<template>
  <div id="app">
    <!-- Layout fixo -->
    <Header />
    
    <!-- Conteúdo dinâmico -->
    <main>
      <slot />  <!-- ou router-view -->
    </main>
    
    <!-- Layout fixo -->
    <Footer />
  </div>
</template>
```

### 3. Composition Pattern

Componentes maiores (views) compõem componentes menores:

```vue
<!-- Home.vue -->
<template>
  <div>
    <MainBanner />
    <ContentSection />
  </div>
</template>
```

## 📦 Criando Views

### Passo 1: Criar pasta views

```bash
mkdir src/views
```

### Passo 2: Criar Home.vue

```vue
<template>
  <div>
    <MainBanner />
    <ContentSection />
  </div>
</template>

<script setup>
import MainBanner from '../components/MainBanner.vue'
import ContentSection from '../components/ContentSection.vue'
</script>
```

## ✅ Checklist

- [ ] Entende padrões de composição
- [ ] Criou a pasta views
- [ ] Criou Home.vue
- [ ] Sabe quando usar components vs views

👉 **[Próximo: Módulo 9 - Estilização com Tailwind](./09-estilizacao-tailwind.md)**
