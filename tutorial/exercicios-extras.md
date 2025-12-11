# Exercícios Extras - Desafios Práticos

## 🎯 Objetivo

Reforçar o aprendizado através de exercícios práticos que expandem o projeto base.

---

## 🟢 Nível Iniciante

### Exercício 1: Adicionar Página "Sobre"

**Objetivo:** Praticar criação de rotas e views

**Tarefas:**
1. Criar `src/views/Sobre.vue`
2. Adicionar rota `/sobre` no router
3. Adicionar link no Header
4. Criar conteúdo: título, descrição, imagem

**Dica:** Use o Contato.vue como referência

---

### Exercício 2: Contador de Cliques no Footer

**Objetivo:** Praticar reatividade com `ref()`

**Tarefas:**
1. Adicionar contador de visitas no Footer
2. Incrementar a cada renderização
3. Exibir: "Você é o visitante #123"

**Código inicial:**
```vue
<script setup>
import { ref } from 'vue'
const visitas = ref(1)
</script>

<template>
  <p>Você é o visitante #{{ visitas }}</p>
</template>
```

---

### Exercício 3: Card de Recursos

**Objetivo:** Criar componente reutilizável com props

**Tarefas:**
1. Criar `src/components/FeatureCard.vue`
2. Props: `icone`, `titulo`, `descricao`
3. Usar em Home.vue (3 cards)

**Exemplo de uso:**
```vue
<FeatureCard
  icone="⚡"
  titulo="Rápido"
  descricao="Desenvolvimento instantâneo com Vite"
/>
```

---

## 🟡 Nível Intermediário

### Exercício 4: Formulário com v-model

**Objetivo:** Praticar two-way data binding

**Tarefas:**
1. Adicionar `v-model` nos inputs do formulário
2. Criar variáveis reativas para cada campo
3. Exibir preview dos dados abaixo do formulário

**Código inicial:**
```vue
<script setup>
import { ref } from 'vue'

const nome = ref('')
const email = ref('')
const mensagem = ref('')
</script>

<template>
  <input v-model="nome" />
  
  <!-- Preview -->
  <div v-if="nome">
    <p>Nome: {{ nome }}</p>
  </div>
</template>
```

---

### Exercício 5: Validação de Formulário

**Objetivo:** Implementar validação client-side

**Tarefas:**
1. Validar email (formato correto)
2. Validar campos obrigatórios
3. Exibir mensagens de erro
4. Desabilitar botão se inválido

**Dica:** Use expressões regulares:
```javascript
const emailValido = computed(() => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
})
```

---

### Exercício 6: Menu Responsivo (Mobile)

**Objetivo:** Criar menu hambúrguer para mobile

**Tarefas:**
1. Adicionar botão hambúrguer no Header
2. Mostrar/ocultar menu com `v-if`
3. Usar classes Tailwind para responsividade
4. Fechar menu ao clicar em link

**Dica:** Use `md:hidden` e `md:block`

---

## 🔴 Nível Avançado

### Exercício 7: Dark Mode

**Objetivo:** Implementar tema escuro

**Tarefas:**
1. Criar composable `useDarkMode()`
2. Adicionar toggle no Header
3. Salvar preferência no localStorage
4. Aplicar classes dark: do Tailwind

**Código inicial:**
```javascript
// src/composables/useDarkMode.js
import { ref, onMounted } from 'vue'

export function useDarkMode() {
  const isDark = ref(false)
  
  function toggle() {
    isDark.value = !isDark.value
    // Salvar no localStorage
  }
  
  return { isDark, toggle }
}
```

---

### Exercício 8: Animações de Transição

**Objetivo:** Adicionar animações entre rotas

**Tarefas:**
1. Usar `<Transition>` do Vue
2. Criar animações CSS
3. Aplicar ao `<router-view>`

**Código:**
```vue
<template>
  <Transition name="fade">
    <router-view />
  </Transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
```

---

### Exercício 9: Loading State

**Objetivo:** Simular carregamento de dados

**Tarefas:**
1. Criar estado `loading` com `ref()`
2. Simular delay com `setTimeout()`
3. Exibir spinner enquanto carrega
4. Mostrar conteúdo após carregar

**Dica:** Use Tailwind para spinner:
```vue
<div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
```

---

### Exercício 10: Integração com API

**Objetivo:** Consumir API externa

**Tarefas:**
1. Usar `fetch()` para buscar dados
2. API sugerida: https://jsonplaceholder.typicode.com/posts
3. Exibir lista de posts
4. Tratar erros

**Código inicial:**
```vue
<script setup>
import { ref, onMounted } from 'vue'

const posts = ref([])
const loading = ref(true)
const error = ref(null)

async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    posts.value = await response.json()
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
}

onMounted(fetchPosts)
</script>
```

---

## 🏆 Projeto Final: Blog

**Objetivo:** Criar mini blog completo

**Funcionalidades:**
- [ ] Lista de posts
- [ ] Página de post individual (rota dinâmica)
- [ ] Filtro por categoria
- [ ] Busca por título
- [ ] Paginação
- [ ] Formulário de comentário

**Rotas:**
```javascript
{
  path: '/blog',
  component: BlogList
},
{
  path: '/blog/:id',  // Rota dinâmica
  component: BlogPost
}
```

**Dica:** Use route params:
```javascript
const route = useRoute()
const postId = route.params.id
```

---

## ✅ Checklist de Progresso

Marque conforme completa:

**Iniciante:**
- [ ] Exercício 1: Página Sobre
- [ ] Exercício 2: Contador no Footer
- [ ] Exercício 3: Card de Recursos

**Intermediário:**
- [ ] Exercício 4: v-model no formulário
- [ ] Exercício 5: Validação
- [ ] Exercício 6: Menu responsivo

**Avançado:**
- [ ] Exercício 7: Dark Mode
- [ ] Exercício 8: Animações
- [ ] Exercício 9: Loading State
- [ ] Exercício 10: API

**Desafio Final:**
- [ ] Projeto Blog completo

---

## 💡 Dicas Gerais

1. **Teste frequentemente** - Execute `npm run dev` após cada mudança
2. **Use DevTools** - Inspecione componentes e estado
3. **Consulte a documentação** - Sempre que tiver dúvida
4. **Não copie e cole** - Digite o código para aprender
5. **Experimente** - Tente variações do exercício

---

## 🆘 Ajuda

Se travar em algum exercício:
1. Revise o módulo relacionado
2. Consulte o [Glossário](./glossario.md)
3. Veja o [Troubleshooting](./troubleshooting.md)
4. Peça ajuda ao instrutor

---

[← Voltar ao Índice](./README.md)
