# Módulo 5: Props - Comunicação entre Componentes

## 🎯 Objetivos de Aprendizado

Ao final deste módulo, você será capaz de:
- Entender o que são props e por que são importantes
- Definir props em um componente
- Passar dados de pai para filho via props
- Validar tipos de props
- Criar o componente Header com props

---

## 📖 O que são Props?

**Props** (abreviação de "properties") são a forma de **passar dados de um componente pai para um componente filho**.

###

 Analogia:

Imagine componentes como **funções**:

```javascript
// Função tradicional
function saudar(nome) {  // nome é um parâmetro
  return `Olá, ${nome}!`
}

saudar('Maria')  // Passa argumento
```

```vue
<!-- Componente Vue -->
<script setup>
defineProps({
  nome: String  // nome é uma prop
})
</script>

<template>
  <p>Olá, {{ nome }}!</p>
</template>

<!-- Uso: -->
<Saudacao nome="Maria" />  <!-- Passa prop -->
```

**Props são parâmetros para componentes!**

---

## 🔄 Fluxo de Dados: Pai → Filho

```
App.vue (Pai)
   │
   │ logoText="FIAP Landing Page"
   ↓
Header.vue (Filho)
   │
   └─ Recebe e usa logoText
```

### Características das Props:

1. **Unidirecionais** - Dados fluem apenas de pai para filho
2. **Read-only** - Filho não pode modificar props diretamente
3. **Tipadas** - Podem ter validação de tipo
4. **Opcionais ou obrigatórias** - Pode exigir que sejam passadas

---

## 🏗️ Criando o Componente Header

Vamos criar nosso primeiro componente com props!

### Passo 1: Criar pasta components

```bash
mkdir src/components
```

### Passo 2: Criar src/components/Header.vue

```vue
<template>
  <header class="bg-blue-600 text-white shadow-lg">
    <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="text-2xl font-bold">
        {{ logoText }}
      </div>
      
      <!-- Navegação (simples por enquanto) -->
      <div class="text-sm">
        Menu
      </div>
    </nav>
  </header>
</template>

<script setup>
// Definindo as props do componente
defineProps({
  logoText: {
    type: String,
    required: true,
    default: 'Logo'
  }
})
</script>
```

### Entendendo o código:

#### **defineProps()**
```javascript
defineProps({
  logoText: {
    type: String,
    required: true,
    default: 'Logo'
  }
})
```

- `defineProps()` é uma função especial do Vue 3
- Define quais props o componente aceita
- **Não precisa importar**, está disponível automaticamente no `<script setup>`

#### **Configuração da Prop:**

```javascript
logoText: {
  type: String,      // Tipo: String, Number, Boolean, Array, Object, Function
  required: true,    // Obrigatório? true/false
  default: 'Logo'    // Valor padrão se não for passado
}
```

#### **Usando a Prop no Template:**
```vue
<div class="text-2xl font-bold">
  {{ logoText }}
</div>
```

Simples assim! Use como qualquer variável.

---

## 🔌 Usando o Header no App.vue

### Passo 3: Atualizar src/App.vue

```vue
<template>
  <div id="app">
    <!-- Passando a prop logoText -->
    <Header logoText="FIAP Landing Page" />
    
    <main class="container mx-auto px-4 py-12">
      <h1 class="text-4xl font-bold text-gray-800 text-center">
        Bem-vindo ao Tutorial Vue.js
      </h1>
    </main>
  </div>
</template>

<script setup>
// Importar o componente
import Header from './components/Header.vue'
</script>
```

### Entendendo:

#### **Importar o Componente:**
```javascript
import Header from './components/Header.vue'
```

#### **Usar o Componente:**
```vue
<Header logoText="FIAP Landing Page" />
```
- Nome do componente em PascalCase: `Header`
- Passa a prop: `logoText="FIAP Landing Page"`
- **Auto-fechamento** `/>` (sem filhos)

---

## 🧪 Testando Props

Salve os arquivos e veja no navegador:
- Header azul no topo
- Texto "FIAP Landing Page" como logo

### Experimente:

1. **Mudar o texto:**
   ```vue
   <Header logoText="Meu Site" />
   ```

2. **Remover a prop:**
   ```vue
   <Header />
   ```
   → Vai usar o valor padrão "Logo"

3. **Passar número (erro):**
   ```vue
   <Header :logoText="123" />
   ```
   → Console mostrará aviso (type mismatch)

---

## 🎨 Props com Múltiplos Valores

Vamos adicionar mais uma prop ao Header:

### Versão Melhorada do Header:

```vue
<template>
  <header class="shadow-lg" :class="bgColor">
    <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
      <div class="text-2xl font-bold text-white">
        {{ logoText }}
      </div>
      
      <div class="text-white text-sm">
        {{ menuText }}
      </div>
    </nav>
  </header>
</template>

<script setup>
defineProps({
  logoText: {
    type: String,
    required: true,
    default: 'Logo'
  },
  menuText: {
    type: String,
    required: false,
    default: 'Menu'
  },
  bgColor: {
    type: String,
    default: 'bg-blue-600'
  }
})
</script>
```

### Usando com Múltiplas Props:

```vue
<Header 
  logoText="FIAP Landing Page"
  menuText="Navegação"
  bgColor="bg-purple-600"
/>
```

---

## 🔧 Tipos de Props

### Props Simples (Strings):

```vue
<Header logoText="Texto" />
```

### Props Dinâmicas (Variáveis):

Use `v-bind:` ou `:`:

```vue
<script setup>
import { ref } from 'vue'
const nomeSite = ref('Meu Site Dinâmico')
</script>

<template>
  <Header :logoText="nomeSite" />
</template>
```

### Props de Diferentes Tipos:

```javascript
defineProps({
  // String
  titulo: String,
  
  // Number
  idade: Number,
  
  // Boolean
  ativo: Boolean,
  
  // Array
  items: Array,
  
  // Object
  usuario: Object,
  
  // Múltiplos tipos
  id: [String, Number]
})
```

---

## ✅ Boas Práticas com Props

### 1. **Sempre defina o tipo:**
```javascript
// ✅ Bom
logoText: {
  type: String,
  required: true
}

// ❌ Evite
logoText: {}
```

### 2. **Use required para props essenciais:**
```javascript
logoText: {
  type: String,
  required: true  // Componente não funciona sem isso
}
```

### 3. **Forneça valores padrão sensatos:**
```javascript
menuText: {
  type: String,
  default: 'Menu'  // Valor razoável se não for passado
}
```

### 4. **Nomes descritivos:**
```javascript
// ✅ Bom
logoText, backgroundColor, isVisible

// ❌ Evite
text, bg, visible
```

### 5. **Props são read-only:**
```javascript
// ❌ NUNCA faça isso no componente filho
props.logoText = 'Novo valor'  // ERRO!

// ✅ Se precisar modificar, crie uma variável local
const localLogo = ref(props.logoText)
localLogo.value = 'Novo valor'  // OK
```

---

## 🎯 Exercícios Práticos

### Exercício 1: Adicionar Prop de Cor
Adicione uma prop `textColor` ao Header:
```javascript
textColor: {
  type: String,
  default: 'text-white'
}
```

Use no template:
```vue
<div class="text-2xl font-bold" :class="textColor">
```

### Exercício 2: Criar Componente Footer
Crie `src/components/Footer.vue` com prop `copyrightText`:
```vue
<template>
  <footer class="bg-gray-800 text-white text-center py-4">
    <p>{{ copyrightText }}</p>
  </footer>
</template>

<script setup>
defineProps({
  copyrightText: {
    type: String,
    default: '© 2025 Todos os direitos reservados'
  }
})
</script>
```

Use no App.vue:
```vue
<Footer copyrightText="© 2025 FIAP - Landing Page Tutorial" />
```

### Exercício 3: Props Obrigatórias vs Opcionais
No Header, torne `menuText` **obrigatório**:
```javascript
menuText: {
  type: String,
  required: true  // Agora é obrigatório!
}
```

Veja o aviso no console se não passar a prop.

---

## ⚠️ Problemas Comuns e Soluções

### Problema 1: "Property is not defined"
**Causa:** Esqueceu de importar o componente
**Solução:**
```javascript
import Header from './components/Header.vue'
```

### Problema 2: Aviso de tipo incorreto
**Causa:** Passando tipo errado
```vue
<!-- ❌ Errado: Number ao invés de String -->
<Header :logoText="123" />

<!-- ✅ Correto -->
<Header logoText="123" />
```

### Problema 3: Props não atualizam
**Causa:** Props são read-only
**Solução:** Use `ref()` local se precisar modificar

---

## ✅ Checklist do Módulo

Antes de prosseguir, certifique-se de que você:

- [ ] Entende o que são props
- [ ] Criou `src/components/Header.vue`
- [ ] Definiu props com `defineProps()`
- [ ] Usou o Header no `App.vue`
- [ ] Passou dados via props
- [ ] Entende tipos, required e default
- [ ] Sabe que props são read-only
- [ ] Completou os exercícios (Footer)

---

## 🚀 Próximo Passo

Agora que você domina props, vamos entender melhor a estrutura completa da aplicação Vue!

👉 **[Próximo: Módulo 6 - Estrutura da Aplicação](./06-estrutura-app.md)**

---

## 📚 Recursos Adicionais

- [Props - Documentação Vue](https://vuejs.org/guide/components/props.html)
- [Prop Validation](https://vuejs.org/guide/components/props.html#prop-validation)

---

**Dúvidas?** Consulte o [Glossário](../glossario.md).
