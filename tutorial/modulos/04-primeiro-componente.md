# Módulo 4: Seu Primeiro Componente Vue

## 🎯 Objetivos de Aprendizado

Ao final deste módulo, você será capaz de:
- Entender a anatomia de um arquivo `.vue`
- Criar seu primeiro componente (`App.vue`)
- Criar o ponto de entrada da aplicação (`main.js`)
- Rodar o servidor de desenvolvimento
- Ver sua aplicação funcionando no navegador

---

## 📖 Anatomia de um Arquivo .vue

Um componente Vue é dividido em **3 seções**:

```vue
<template>
  <!-- HTML do componente -->
</template>

<script setup>
  // Lógica JavaScript do componente
</script>

<style scoped>
  /* Estilos CSS do componente */
</style>
```

### 1. **<template>** - Estrutura HTML

```vue
<template>
  <div>
    <h1>{{ titulo }}</h1>
    <p>Este é o conteúdo</p>
  </div>
</template>
```

- Contém o HTML do componente
- Pode usar **interpolação**: `{{ variavel }}`
- Pode usar **diretivas**: `v-if`, `v-for`, etc.
- **Deve ter apenas um elemento raiz** (geralmente um `<div>`)

### 2. **<script setup>** - Lógica JavaScript

```vue
<script setup>
import { ref } from 'vue'

const titulo = ref('Meu Título')
const mensagem = 'Olá Vue!'
</script>
```

- `setup` é a sintaxe moderna do Vue 3 (Composition API)
- Define variáveis, funções, importações
- Tudo declarado aqui está disponível no template
- Mais simples que a Options API

### 3. **<style scoped>** - Estilos CSS

```vue
<style scoped>
h1 {
  color: blue;
}
</style>
```

- `scoped` garante que os estilos só afetam **este componente**
- Sem `scoped`, os estilos são globais
- Pode misturar com classes Tailwind

---

## 🎨 Criando main.js

O `main.js` é o **ponto de entrada** da aplicação Vue.

### Passo 1: Criar src/main.js

```javascript
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')
```

### Entendendo linha por linha:

```javascript
import { createApp } from 'vue'
```
- Importa a função `createApp` do Vue
- Usada para criar uma instância da aplicação

```javascript
import './style.css'
```
- Importa o CSS global (com diretivas Tailwind)
- Vite processa e injeta no navegador

```javascript
import App from './App.vue'
```
- Importa o componente raiz `App.vue`
- Ainda vamos criá-lo!

```javascript
const app = createApp(App)
```
- Cria uma nova aplicação Vue
- `App` é o componente raiz

```javascript
app.mount('#app')
```
- "Monta" a aplicação no elemento com `id="app"`
- Lembra do `<div id="app"></div>` no `index.html`?
- É aqui que tudo acontece!

---

## 🏗️ Criando App.vue (Versão Simples)

Vamos começar com uma versão simples para testar.

### Passo 2: Criar src/App.vue

```vue
<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <h1 class="text-4xl font-bold text-blue-600 text-center py-12">
      Olá Vue.js! 🎉
    </h1>
    <p class="text-center text-gray-600">
      Minha primeira aplicação Vue.js com Vite e Tailwind CSS
    </p>
  </div>
</template>

<script setup>
// Por enquanto, sem lógica
</script>
```

### Entendendo o código:

#### Template:
```vue
<div id="app" class="min-h-screen bg-gray-50">
```
- `min-h-screen` - Altura mínima de 100vh
- `bg-gray-50` - Fundo cinza clarinho

```vue
<h1 class="text-4xl font-bold text-blue-600 text-center py-12">
```
- `text-4xl` - Texto grande (36px)
- `font-bold` - Negrito
- `text-blue-600` - Cor azul
- `text-center` - Centralizado
- `py-12` - Padding vertical de 3rem

#### Script:
```vue
<script setup>
// Por enquanto, sem lógica
</script>
```
Deixamos vazio por enquanto. Vamos adicionar lógica depois.

---

## 🚀 Rodando o Servidor de Desenvolvimento

Agora vamos ver tudo funcionando!

### Passo 3: Iniciar o servidor

```bash
npm run dev
```

**O que acontece:**
1. Vite inicia o servidor de desenvolvimento
2. Processa os arquivos Vue
3. Aplica o Tailwind CSS
4. Abre um servidor local

**Saída esperada:**
```
  VITE v5.4.21  ready in 274 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### Passo 4: Abrir no navegador

Abra seu navegador e acesse:
```
http://localhost:5173/
```

**Você deve ver:**
- Título azul grande: "Olá Vue.js! 🎉"
- Texto cinza: "Minha primeira aplicação..."
- Fundo cinza claro

🎉 **Parabéns! Sua primeira aplicação Vue está rodando!**

---

## 🔥 Hot Module Replacement (HMR)

### Teste a Mágica do Vite:

1. Deixe o servidor rodando
2. Abra `src/App.vue` no editor
3. Mude o texto do `<h1>`:
   ```vue
   <h1 class="text-4xl font-bold text-blue-600 text-center py-12">
     Vue.js é Incrível! ⚡
   </h1>
   ```
4. Salve o arquivo (Ctrl+S / Cmd+S)
5. Olhe o navegador

**O que aconteceu?**
- A página atualizou **instantaneamente**
- **Sem recarregar** o navegador
- **Sem perder o estado** da aplicação

Isso é o **Hot Module Replacement (HMR)** do Vite!

---

## 🧩 Fluxo de Execução

Entenda o que acontece quando você acessa `http://localhost:5173/`:

```
1. Navegador solicita index.html
   ↓
2. index.html carrega main.js
   ↓
3. main.js importa App.vue
   ↓
4. createApp(App) cria aplicação Vue
   ↓
5. app.mount('#app') monta no <div id="app">
   ↓
6. Vue renderiza o template de App.vue
   ↓
7. Tailwind aplica as classes CSS
   ↓
8. Você vê a página no navegador!
```

---

## 🎨 Adicionando Reatividade

Vamos tornar o componente interativo!

### Versão com Dados Reativos:

```vue
<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-4xl font-bold text-blue-600 text-center mb-6">
        {{ titulo }}
      </h1>
      <p class="text-center text-gray-600 mb-8">
        {{ descricao }}
      </p>
      
      <!-- Botão interativo -->
      <div class="text-center">
        <button 
          @click="contador++"
          class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Clicado {{ contador }} vezes
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const titulo = 'Olá Vue.js! 🎉'
const descricao = 'Minha primeira aplicação Vue.js com Vite e Tailwind CSS'
const contador = ref(0)
</script>
```

### Novos Conceitos:

#### **Interpolação de Dados:**
```vue
<h1>{{ titulo }}</h1>
```
Exibe o valor da variável `titulo`.

#### **Event Handling:**
```vue
<button @click="contador++">
```
- `@click` é atalho para `v-on:click`
- Executa código quando o botão é clicado
- `contador++` incrementa o contador

#### **ref() - Reatividade:**
```javascript
const contador = ref(0)
```
- `ref()` cria uma variável **reativa**
- Quando muda, Vue atualiza o DOM automaticamente
- Para constantes, não precisa de `ref()`

---

## 🎯 Exercícios Práticos

### Exercício 1: Modificação de Texto
Altere o título e a descrição no `script setup`:
```javascript
const titulo = 'Meu Projeto FIAP'
const descricao = 'Aprendendo Vue.js na prática'
```

### Exercício 2: Adicionar Mais Interatividade
Adicione um segundo botão que **decrementa** o contador:
```vue
<button @click="contador--" class="...">
  Decrementar
</button>
```

### Exercício 3: Mudar Cores
Experimente outras cores do Tailwind:
- `text-green-600`
- `bg-purple-600`
- `text-red-500`

### Exercício 4: Adicionar Emoji no Botão
```vue
<button @click="contador++">
  👆 Clicado {{ contador }} vezes
</button>
```

---

## ⚠️ Problemas Comuns e Soluções

### Problema 1: "Cannot find module './App.vue'"
**Causa:** Arquivo `App.vue` não foi criado
**Solução:** Certifique-se de criar `src/App.vue`

### Problema 2: Página em branco
**Causa:** Erro de sintaxe no código
**Solução:** Abra o DevTools (F12) e veja o console

### Problema 3: Tailwind não funciona
**Causa:** Não importou `style.css` no `main.js`
**Solução:** Verifique se tem `import './style.css'`

### Problema 4: "Port 5173 is already in use"
**Causa:** Outro servidor rodando na porta
**Solução:** Feche o outro servidor ou use outra porta:
```bash
npm run dev -- --port 3000
```

---

## ✅ Checklist do Módulo

Antes de prosseguir, certifique-se de que você:

- [ ] Criou `src/main.js` com `createApp` e `mount`
- [ ] Criou `src/App.vue` com template, script e style
- [ ] Executou `npm run dev` com sucesso
- [ ] Viu a aplicação no navegador (`http://localhost:5173/`)
- [ ] Testou o HMR (mudou código e viu atualizar)
- [ ] Entende o que é interpolação (`{{ }}`)
- [ ] Entende o que é `ref()` e reatividade
- [ ] Criou o botão interativo com contador

---

## 🚀 Próximo Passo

Agora que você tem um componente funcionando, vamos aprender sobre **Props** - a forma de passar dados entre componentes!

👉 **[Próximo: Módulo 5 - Props: Comunicação entre Componentes](./05-props.md)**

---

## 📚 Recursos Adicionais

- [Composition API - Documentação Vue](https://vuejs.org/guide/extras/composition-api-faq.html)
- [ref() - Reatividade](https://vuejs.org/api/reactivity-core.html#ref)
- [Template Syntax](https://vuejs.org/guide/essentials/template-syntax.html)

---

**Dúvidas?** Consulte o [Glossário](../glossario.md) ou [Troubleshooting](../troubleshooting.md).
