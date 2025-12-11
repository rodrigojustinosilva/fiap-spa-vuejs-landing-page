# Módulo 1: Introdução ao Vue.js e SPAs

## 🎯 Objetivos de Aprendizado

Ao final deste módulo, você será capaz de:
- Entender o que é Vue.js e suas vantagens
- Compreender o conceito de SPA (Single Page Application)
- Conhecer as ferramentas que usaremos (Vite, Tailwind CSS)
- Ter uma visão geral do projeto que construiremos

---

## 📖 O que é Vue.js?

**Vue.js** (pronuncia-se "view") é um **framework JavaScript progressivo** para construção de interfaces de usuário. Criado por Evan You em 2014, Vue.js tornou-se um dos frameworks mais populares do mundo.

### Características Principais:

#### 1. **Progressivo**
Você pode usar Vue.js em apenas uma parte do seu projeto ou construir uma aplicação completa. Ele se adapta às suas necessidades.

#### 2. **Reativo**
Vue.js atualiza automaticamente a interface quando os dados mudam, sem precisar manipular o DOM manualmente.

```javascript
// Exemplo de reatividade
const mensagem = 'Olá Vue!'
// Quando mensagem mudar, a tela é atualizada automaticamente
```

#### 3. **Baseado em Componentes**
Divida sua aplicação em pequenos pedaços reutilizáveis chamados componentes.

```
App
 ├── Header
 ├── MainBanner
 ├── ContentSection
 └── Footer
```

#### 4. **Fácil de Aprender**
Vue.js tem uma curva de aprendizado suave. Se você sabe HTML, CSS e JavaScript básico, já pode começar!

### Por que Escolher Vue.js?

| Vantagem | Descrição |
|----------|-----------|
| 🚀 **Performance** | Muito rápido e otimizado |
| 📚 **Documentação** | Excelente documentação em português |
| 🛠️ **Ferramentas** | Ótimo ecossistema de ferramentas |
| 👥 **Comunidade** | Grande comunidade ativa |
| 🔧 **Flexível** | Pode ser usado de várias formas |

---

## 🌐 O que é uma SPA (Single Page Application)?

### Navegação Tradicional (Multi-Page Application)

```
Usuário clica em um link
    ↓
Navegador faz requisição ao servidor
    ↓
Servidor envia HTML completo
    ↓
Página inteira recarrega
    ↓
Tela "pisca" durante o carregamento
```

**Problemas:**
- ❌ Lento (carrega tudo novamente)
- ❌ Experiência desconexa
- ❌ Perda de estado da aplicação

### SPA (Single Page Application)

```
Aplicação carrega uma vez
    ↓
Usuário clica em um link
    ↓
JavaScript atualiza apenas o conteúdo necessário
    ↓
Sem recarregamento da página
    ↓
Experiência fluida e rápida
```

**Vantagens:**
- ✅ Muito mais rápido
- ✅ Experiência similar a um app nativo
- ✅ Mantém o estado da aplicação
- ✅ Menos dados trafegados

### Analogia do Mundo Real

Imagine um livro:

**Site Tradicional**: Como ter que ir à biblioteca buscar um novo livro cada vez que quer ler um capítulo diferente.

**SPA**: Como ter o livro em mãos e simplesmente virar as páginas quando quiser ler outro capítulo.

---

## ⚡ O que é Vite?

**Vite** (palavra francesa que significa "rápido") é uma ferramenta de build moderna criada por Evan You (o mesmo criador do Vue.js).

### Por que usar Vite?

#### Antes do Vite (Webpack):
```
Salvar arquivo → Esperar 5-10 segundos → Ver mudança
😴 Lento e frustrante
```

#### Com Vite:
```
Salvar arquivo → Ver mudança instantaneamente
⚡ Extremamente rápido!
```

### Principais Características:

1. **Hot Module Replacement (HMR)** - Atualização instantânea
2. **Build otimizado** - Produção rápida e eficiente
3. **ESM nativo** - Usa módulos JavaScript nativos do navegador
4. **Zero configuração** - Funciona "out of the box"

---

## 🎨 O que é Tailwind CSS?

**Tailwind CSS** é um framework CSS baseado em **classes utilitárias**.

### CSS Tradicional vs Tailwind

**CSS Tradicional:**
```css
/* style.css */
.botao-azul {
  background-color: blue;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
}
```
```html
<button class="botao-azul">Clique aqui</button>
```

**Tailwind CSS:**
```html
<button class="bg-blue-600 text-white px-6 py-3 rounded-lg">
  Clique aqui
</button>
```

### Vantagens do Tailwind:

- ✅ Não precisa criar nomes de classes
- ✅ Estilização direta no HTML
- ✅ Consistência de design
- ✅ Responsividade fácil
- ✅ Tamanho final pequeno (apenas classes usadas)

### Classes Comuns que Usaremos:

| Classe | O que faz |
|--------|-----------|
| `p-4` | padding: 1rem |
| `m-2` | margin: 0.5rem |
| `bg-blue-600` | background azul |
| `text-white` | texto branco |
| `flex` | display flex |
| `justify-center` | centralizar horizontalmente |
| `items-center` | centralizar verticalmente |
| `hover:bg-blue-700` | cor ao passar o mouse |

---

## 🎯 Visão Geral do Projeto

### O que vamos construir?

Uma **Landing Page moderna** com as seguintes funcionalidades:

#### Páginas:
1. **Home** (página inicial)
   - Banner principal com call-to-action
   - Seção de conteúdo
   
2. **Contato** (página de contato)
   - Formulário de contato
   - Rastreamento de origem (de onde veio)

#### Componentes:
- **Header** - Navegação com logo
- **MainBanner** - Hero section com botão
- **ContentSection** - Texto informativo
- **Footer** - Rodapé com links

#### Funcionalidades:
- ✅ Navegação entre páginas (sem recarregar)
- ✅ Props para passar dados entre componentes
- ✅ Query parameters para rastrear origem
- ✅ SEO otimizado com meta tags dinâmicas
- ✅ Design responsivo

### Arquitetura do Projeto:

```
┌─────────────────────────────┐
│         App.vue             │  ← Componente raiz
│  ┌────────────────────────┐ │
│  │      Header.vue        │ │  ← Sempre visível
│  └────────────────────────┘ │
│  ┌────────────────────────┐ │
│  │    <router-view>       │ │  ← Conteúdo muda
│  │                        │ │
│  │  Home.vue ou          │ │
│  │  Contato.vue          │ │
│  └────────────────────────┘ │
│  ┌────────────────────────┐ │
│  │      Footer.vue        │ │  ← Sempre visível
│  └────────────────────────┘ │
└─────────────────────────────┘
```

---

## 🛠️ Ferramentas que Usaremos

| Ferramenta | Versão | Função |
|------------|--------|--------|
| **Node.js** | 18+ | Ambiente JavaScript no servidor |
| **npm** | 9+ | Gerenciador de pacotes |
| **Vue.js** | 3.4+ | Framework principal |
| **Vite** | 5+ | Build tool |
| **Vue Router** | 4+ | Roteamento de páginas |
| **Tailwind CSS** | 3.4+ | Estilização |

---

## 📋 Fluxo de Desenvolvimento

Veja como será nosso processo de trabalho:

```
1. Configurar projeto
   ↓
2. Criar componentes básicos
   ↓
3. Adicionar estilização
   ↓
4. Implementar roteamento
   ↓
5. Otimizar SEO
   ↓
6. Testar e ajustar
```

---

## 🤔 Conceitos-Chave para Lembrar

### 1. **Vue.js é reativo**
Quando os dados mudam, a interface atualiza automaticamente.

### 2. **Componentes são blocos de construção**
Cada componente é uma peça reutilizável da interface.

### 3. **SPA carrega uma vez**
A aplicação carrega uma vez e depois apenas atualiza partes da página.

### 4. **Vite é rápido**
Desenvolvimento instantâneo, sem esperas.

### 5. **Tailwind é utilitário**
Estilize diretamente no HTML com classes prontas.

---

## 🎯 Exercícios de Fixação

### Exercício 1: Reflexão
Responda mentalmente ou anote:

1. Qual a principal diferença entre um site tradicional e uma SPA?
2. Por que Vue.js é considerado "reativo"?
3. Qual a vantagem do Vite sobre ferramentas antigas?

### Exercício 2: Pesquisa (Opcional)
- Visite [vuejs.org](https://vuejs.org/) e explore a documentação
- Assista ao vídeo introdutório (geralmente 2-3 minutos)

### Exercício 3: Preparação
Certifique-se de que você tem instalado:
- [ ] Node.js (teste com `node --version`)
- [ ] npm (teste com `npm --version`)
- [ ] VS Code ou outro editor

---

## ✅ Checklist do Módulo

Antes de prosseguir, certifique-se de que você:

- [ ] Entende o que é Vue.js
- [ ] Compreende o conceito de SPA
- [ ] Conhece o propósito do Vite
- [ ] Sabe o que é Tailwind CSS
- [ ] Tem uma visão geral do projeto
- [ ] Tem as ferramentas instaladas

---

## 🚀 Próximo Passo

Agora que você entende os fundamentos, está na hora de colocar a mão na massa!

👉 **[Próximo: Módulo 2 - Setup Inicial do Projeto](./02-setup-inicial.md)**

---

## 📚 Recursos Adicionais

- [Documentação oficial do Vue.js](https://vuejs.org/)
- [Guia do Vite](https://vitejs.dev/)
- [Documentação do Tailwind CSS](https://tailwindcss.com/)
- [Vue.js Brasil - Discord](https://discord.gg/vuejsbrasil)

---

**Dúvidas?** Consulte o [Glossário](../glossario.md) ou a seção [Troubleshooting](../troubleshooting.md).
