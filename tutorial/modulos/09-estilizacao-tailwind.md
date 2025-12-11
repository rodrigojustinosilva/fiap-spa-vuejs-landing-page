# Módulo 9: Estilização com Tailwind CSS

## 🎯 Objetivos

- Dominar classes utilitárias do Tailwind
- Criar layouts responsivos
- Usar hover states e transições
- Combinar Tailwind com CSS customizado

## 🎨 Classes Essenciais

### Layout e Espaçamento

```html
<!-- Container centralizado -->
<div class="container mx-auto px-4">

<!-- Flexbox -->
<div class="flex justify-between items-center">

<!-- Grid -->
<div class="grid grid-cols-3 gap-4">

<!-- Padding e Margin -->
<div class="p-4 m-2">
<div class="px-6 py-3">  <!-- horizontal e vertical -->
```

### Tipografia

```html
<!-- Tamanhos -->
<h1 class="text-5xl font-bold">
<p class="text-lg leading-relaxed">

<!-- Cores -->
<p class="text-gray-600">
<h2 class="text-blue-600">

<!-- Alinhamento -->
<p class="text-center">
```

### Cores e Backgrounds

```html
<!-- Backgrounds -->
<div class="bg-blue-600">
<div class="bg-gray-50">

<!-- Gradientes (via CSS customizado) -->
<style scoped>
.gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
</style>
```

### Responsividade

```html
<!-- Mobile first -->
<div class="flex flex-col md:flex-row">
       └─ mobile     └─ tablet/desktop

<!-- Breakpoints do Tailwind -->
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1536px
```

### Hover e Transições

```html
<button class="bg-blue-600 hover:bg-blue-700 transition duration-200">
       └─ cor normal  └─ ao passar mouse  └─ animação suave
```

## 🎯 Exercícios

### Exercício 1: Card Responsivo

Crie um card que:
- É coluna no mobile
- É linha no desktop
- Tem hover effect

```vue
<div class="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
  <div class="mb-4 md:mb-0 md:mr-6">
    <img src="..." class="w-full md:w-48 rounded">
  </div>
  <div>
    <h3 class="text-2xl font-bold mb-2">Título</h3>
    <p class="text-gray-600">Descrição...</p>
  </div>
</div>
```

## ✅ Checklist

- [ ] Conhece classes de layout (flex, grid, container)
- [ ] Sabe usar padding e margin
- [ ] Entende responsividade (sm, md, lg)
- [ ] Usa hover e transições
- [ ] Combina Tailwind com CSS scoped

👉 **[Próximo: Módulo 10 - Introdução ao Vue Router](./10-vue-router-intro.md)**
