# Módulo 3: Configuração - Vite e Tailwind CSS

## 🎯 Objetivos de Aprendizado

Ao final deste módulo, você será capaz de:
- Configurar o Vite para trabalhar com Vue.js
- Integrar Tailwind CSS ao projeto
- Configurar PostCSS e Autoprefixer
- Criar os arquivos base da aplicação
- Rodar o servidor de desenvolvimento

---

## ⚙️ Configurando o Vite

### Passo 1: Criar vite.config.js

Na raiz do projeto, crie o arquivo `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})
```

### Entendendo a configuração:

```javascript
import { defineConfig } from 'vite'
```
- Importa a função para criar configuração tipada

```javascript
import vue from '@vitejs/plugin-vue'
```
- Importa o plugin que permite o Vite entender arquivos `.vue`

```javascript
export default defineConfig({
  plugins: [vue()],
})
```
- Exporta a configuração
- Registra o plugin Vue

**Por que precisamos disso?**
Vite não entende arquivos `.vue` nativamente. O plugin `@vitejs/plugin-vue` compila componentes Vue para JavaScript que o navegador entende.

---

## 🎨 Configurando Tailwind CSS

### Passo 1: Criar tailwind.config.js

Na raiz do projeto, crie `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Entendendo a configuração:

#### **content**
```javascript
content: [
  "./index.html",
  "./src/**/*.{vue,js,jsx}",
]
```

- Define **onde** o Tailwind deve procurar classes CSS
- `./index.html` - Arquivo HTML principal
- `./src/**/*.{vue,js,jsx}` - Todos os arquivos `.vue`, `.js`, `.jsx` dentro de `src/`
- `**` significa "qualquer subpasta"

**Por que isso importa?**
Tailwind só inclui no build final as classes que você **realmente usa**. Isso reduz drasticamente o tamanho do CSS.

#### **theme**
```javascript
theme: {
  extend: {},
}
```
Aqui você pode personalizar cores, fontes, espaçamentos, etc. Por enquanto deixamos vazio.

#### **plugins**
```javascript
plugins: []
```
Lista de plugins do Tailwind (formulários, tipografia, etc.). Por enquanto vazio.

---

## 🔧 Configurando PostCSS

### Passo 2: Criar postcss.config.js

Na raiz do projeto, crie `postcss.config.js`:

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### Entendendo PostCSS:

**PostCSS** é um processador de CSS que transforma seu código usando plugins.

#### **tailwindcss**
```javascript
tailwindcss: {}
```
Processa as diretivas do Tailwind (`@tailwind`, classes utilitárias).

#### **autoprefixer**
```javascript
autoprefixer: {}
```
Adiciona prefixos de navegadores automaticamente:

```css
/* Você escreve: */
display: flex;

/* Autoprefixer adiciona: */
display: -webkit-box;
display: -ms-flexbox;
display: flex;
```

Isso garante compatibilidade com navegadores mais antigos.

---

## 📄 Criando o index.html

### Passo 3: Criar index.html

Na raiz do projeto, crie `index.html`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- SEO Meta Tags -->
    <title>FIAP Landing Page - Vue.js + Vite + Tailwind CSS</title>
    <meta name="description" content="Aprenda Vue.js 3 criando uma landing page moderna com Vite e Tailwind CSS. Tutorial completo com exemplos práticos de componentes, props e roteamento." />
    <meta name="keywords" content="Vue.js, Vite, Tailwind CSS, Vue Router, SPA, Tutorial, FIAP, Landing Page" />
    <meta name="author" content="FIAP" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="FIAP Landing Page - Vue.js + Vite + Tailwind CSS" />
    <meta property="og:description" content="Aprenda Vue.js 3 criando uma landing page moderna com Vite e Tailwind CSS. Tutorial completo com exemplos práticos." />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content="FIAP Landing Page - Vue.js + Vite + Tailwind CSS" />
    <meta property="twitter:description" content="Aprenda Vue.js 3 criando uma landing page moderna com Vite e Tailwind CSS. Tutorial completo com exemplos práticos." />
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

### Entendendo o HTML:

#### **Elemento mais importante:**
```html
<div id="app"></div>
```
É onde Vue.js vai **montar** toda a aplicação. O conteúdo deste `div` será substituído pelos componentes Vue.

#### **Script com type="module":**
```html
<script type="module" src="/src/main.js"></script>
```
- `type="module"` permite usar `import/export`
- Vite processa este arquivo e injeta todo o JavaScript necessário

#### **Meta tags SEO:**
Importantes para:
- Aparecer bem no Google (title, description)
- Compartilhamento em redes sociais (Open Graph, Twitter)

---

## 🎨 Criando o CSS Base

### Passo 4: Criar src/style.css

Crie a pasta `src/` e dentro dela o arquivo `style.css`:

```bash
mkdir src
```

```css
/* src/style.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Entendendo as diretivas:

#### **@tailwind base**
Reseta estilos padrão do navegador (normalize.css). Define estilos base consistentes.

#### **@tailwind components**
Inclui classes de componentes do Tailwind (caso você crie).

#### **@tailwind utilities**
Inclui todas as classes utilitárias (`bg-blue-600`, `p-4`, etc.).

**Ordem importa!**
- Base → Componentes → Utilitários
- Garante que utilitários tenham prioridade

---

## 📂 Estrutura Atual do Projeto

```
fiap-vuejs-spa-landing-page/
├── node_modules/
├── src/
│   └── style.css          ✨ NOVO
├── .gitignore
├── index.html             ✨ NOVO
├── package.json
├── package-lock.json
├── postcss.config.js      ✨ NOVO
├── tailwind.config.js     ✨ NOVO
└── vite.config.js         ✨ NOVO
```

---

## 🧪 Testando a Configuração

Embora ainda não tenhamos componentes Vue, podemos testar se as configurações estão corretas.

### Teste 1: Verificar sintaxe dos arquivos de configuração

```bash
# Verificar se há erros de sintaxe
node vite.config.js
node tailwind.config.js
node postcss.config.js
```

Se não houver saída, está tudo certo! ✅

### Teste 2: Verificar se o Vite pode iniciar

Mais tarde vamos rodar `npm run dev`, mas por enquanto isso causaria erro pois não temos `src/main.js` ainda.

---

## 🧩 Conceitos-Chave

### 1. **Vite precisa de plugins para entender Vue**
```javascript
plugins: [vue()]
```
Sem isso, Vite não saberia o que fazer com arquivos `.vue`.

### 2. **Tailwind precisa saber onde procurar classes**
```javascript
content: ["./src/**/*.{vue,js,jsx}"]
```
Isso permite "tree-shaking" (remover CSS não usado).

### 3. **PostCSS processa o CSS**
Tailwind → PostCSS → Autoprefixer → CSS final

### 4. **index.html é o ponto de entrada**
- Único arquivo HTML da SPA
- Vite injeta JavaScript automaticamente
- `<div id="app">` é onde Vue monta a aplicação

### 5. **@tailwind diretivas importam estilos**
```css
@tailwind base;      /* Reset CSS */
@tailwind components; /* Classes de componentes */
@tailwind utilities;  /* Classes utilitárias */
```

---

## 🎯 Exercícios Práticos

### Exercício 1: Revisão de Arquivos
Certifique-se de que criou todos os arquivos:
- [ ] `vite.config.js`
- [ ] `tailwind.config.js`
- [ ] `postcss.config.js`
- [ ] `index.html`
- [ ] `src/style.css`

### Exercício 2: Entendimento
Responda mentalmente:
1. Qual plugin permite o Vite entender arquivos `.vue`?
2. Por que o Tailwind precisa do array `content`?
3. O que o Autoprefixer faz?
4. Onde o Vue.js vai montar a aplicação no HTML?

### Exercício 3: Personalização (Opcional)
No `tailwind.config.js`, adicione uma cor customizada:

```javascript
theme: {
  extend: {
    colors: {
      'fiap': '#ed145b',
    }
  },
}
```

Agora você pode usar `bg-fiap`, `text-fiap`, etc.!

---

## ⚠️ Problemas Comuns e Soluções

### Problema 1: "SyntaxError: Unexpected token"
**Causa:** Erro de sintaxe no JavaScript
**Solução:** Verifique se copiou o código corretamente. Cuidado com vírgulas e chaves.

### Problema 2: Tailwind não está funcionando
**Causa:** Configuração incorreta do `content`
**Solução:** Certifique-se de que o caminho inclui seus arquivos `.vue`:
```javascript
content: ["./src/**/*.{vue,js,jsx}"]
```

### Problema 3: "Cannot find module 'vite'"
**Causa:** Dependências não instaladas
**Solução:**
```bash
npm install
```

---

## ✅ Checklist do Módulo

Antes de prosseguir, certifique-se de que você:

- [ ] Criou `vite.config.js` com o plugin Vue
- [ ] Criou `tailwind.config.js` com configuração de content
- [ ] Criou `postcss.config.js` com Tailwind e Autoprefixer
- [ ] Criou `index.html` com `<div id="app">`
- [ ] Criou `src/style.css` com diretivas Tailwind
- [ ] Entende o propósito de cada arquivo de configuração
- [ ] Verificou que não há erros de sintaxe

---

## 🚀 Próximo Passo

Agora que temos todas as configurações, vamos criar nosso primeiro componente Vue!

👉 **[Próximo: Módulo 4 - Seu Primeiro Componente Vue](./04-primeiro-componente.md)**

---

## 📚 Recursos Adicionais

- [Documentação do Vite](https://vitejs.dev/)
- [Guia de Configuração do Tailwind](https://tailwindcss.com/docs/configuration)
- [PostCSS Documentation](https://postcss.org/)

---

**Dúvidas?** Consulte o [Troubleshooting](../troubleshooting.md).
