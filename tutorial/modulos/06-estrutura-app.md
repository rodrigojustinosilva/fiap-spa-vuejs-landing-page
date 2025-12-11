# Módulo 6: Estrutura da Aplicação

## 🎯 Objetivos

- Entender a hierarquia de componentes
- Compreender o fluxo de execução
- Organizar arquivos e pastas
- Preparar para construir a landing page completa

## 📁 Estrutura Final do Projeto

```
src/
├── assets/              # Imagens, fontes, ícones
├── components/          # Componentes reutilizáveis
│   ├── Header.vue       ✅ Já criamos!
│   ├── MainBanner.vue   ⏳ Próximo módulo
│   ├── ContentSection.vue
│   └── Footer.vue
├── router/              # Configuração de rotas
│   └── index.js
├── views/               # Páginas/Views
│   ├── Home.vue
│   └── Contato.vue
├── App.vue              ✅ Componente raiz
├── main.js              ✅ Ponto de entrada
└── style.css            ✅ Estilos globais
```

## 🏗️ Hierarquia de Componentes

```
main.js
  └─ App.vue (raiz)
      ├─ Header.vue (sempre visível)
      ├─ <router-view> (conteúdo dinâmico)
      │   ├─ Home.vue
      │   │   ├─ MainBanner.vue
      │   │   └─ ContentSection.vue
      │   └─ Contato.vue
      └─ Footer.vue (sempre visível)
```

## 🔄 Fluxo de Execução

1. `index.html` carrega `main.js`
2. `main.js` cria app Vue e importa `App.vue`
3. `App.vue` importa e registra componentes
4. Vue renderiza a árvore de componentes
5. Tailwind aplica estilos
6. Navegador exibe a página

## 📦 Components vs Views

### Components (src/components/)
- **Reutilizáveis** em múltiplas páginas
- Exemplo: Header, Footer, Button, Card
- Geralmente recebem props

### Views (src/views/)
- **Páginas específicas** ligadas a rotas
- Exemplo: Home, Contato, Sobre
- Compõem vários components

## ✅ Checklist

- [ ] Entende a estrutura de pastas
- [ ] Sabe a diferença entre components e views
- [ ] Compreende a hierarquia de componentes

👉 **[Próximo: Módulo 7 - Componentes da Landing Page](./07-componentes-landing.md)**
