# 📚 Tutorial Completo: Criando uma Landing Page SPA com Vue.js

Bem-vindo ao tutorial completo de Vue.js! Este guia passo a passo irá ensiná-lo a criar uma Landing Page moderna do zero usando Vue.js 3, Vite e Tailwind CSS.

## 🎯 Objetivo do Tutorial

Ao final deste tutorial, você será capaz de:

- ✅ Configurar um projeto Vue.js 3 completo com Vite
- ✅ Criar e organizar componentes reutilizáveis
- ✅ Trabalhar com props para comunicação entre componentes
- ✅ Implementar navegação entre páginas com Vue Router
- ✅ Passar dados entre rotas usando query parameters
- ✅ Otimizar SEO com meta tags dinâmicas
- ✅ Estilizar aplicações de forma profissional com Tailwind CSS

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter:

- [ ] Node.js 18+ instalado
- [ ] npm ou yarn
- [ ] Editor de código (VS Code recomendado)
- [ ] Conhecimentos básicos de HTML, CSS e JavaScript
- [ ] Terminal/Linha de comando

## 📖 Estrutura do Tutorial

### **Parte 1: Fundamentos** 🏗️

1. [**Introdução ao Vue.js e SPAs**](./modulos/01-introducao.md)
   - O que é Vue.js?
   - O que são SPAs?
   - Por que usar Vite?
   - Visão geral do projeto

2. [**Setup Inicial do Projeto**](./modulos/02-setup-inicial.md)
   - Instalando Node.js
   - Criando o projeto
   - Entendendo package.json
   - Instalando dependências

3. [**Configuração: Vite e Tailwind CSS**](./modulos/03-configuracao-vite-tailwind.md)
   - Configurando Vite
   - Integrando Tailwind CSS
   - PostCSS e Autoprefixer
   - Primeiro teste

### **Parte 2: Vue.js Básico** 🎨

4. [**Seu Primeiro Componente Vue**](./modulos/04-primeiro-componente.md)
   - Anatomia de um arquivo .vue
   - Template, Script e Style
   - Criando App.vue
   - Sistema de reatividade

5. [**Props: Comunicação entre Componentes**](./modulos/05-props.md)
   - O que são props?
   - Definindo e usando props
   - Tipos e validação
   - Exemplo prático: Header

6. [**Estrutura da Aplicação**](./modulos/06-estrutura-app.md)
   - main.js: Ponto de entrada
   - App.vue: Componente raiz
   - Hierarquia de componentes
   - Importação e registro

### **Parte 3: Construindo Componentes** 🧩

7. [**Componentes da Landing Page**](./modulos/07-componentes-landing.md)
   - Header com navegação
   - MainBanner com call-to-action
   - ContentSection
   - Footer

8. [**Composição de Componentes**](./modulos/08-composicao.md)
   - Importando componentes
   - Registrando componentes
   - Passando props
   - Slot (conceito avançado)

9. [**Estilização com Tailwind CSS**](./modulos/09-estilizacao-tailwind.md)
   - Classes utilitárias
   - Responsividade
   - CSS Scoped personalizado
   - Hover e transições

### **Parte 4: Roteamento e SEO** 🛣️

10. [**Introdução ao Vue Router**](./modulos/10-vue-router-intro.md)
    - O que é roteamento?
    - SPA vs. navegação tradicional
    - Instalando Vue Router
    - Conceito de views vs components

11. [**Configurando Rotas**](./modulos/11-configuracao-rotas.md)
    - Definindo rotas
    - router-link vs tag `<a>`
    - router-view
    - Navegação entre páginas

12. [**Query Parameters e SEO**](./modulos/12-query-params-seo.md)
    - Passando dados via URL
    - useRoute() composable
    - Meta tags dinâmicas
    - Otimização para buscadores

## 🚀 Como Usar Este Tutorial

### Recomendações:

1. **Siga a ordem dos módulos** - Cada módulo constrói sobre o anterior
2. **Digite o código** - Não copie e cole, aprender fazendo é mais eficaz
3. **Teste frequentemente** - Execute `npm run dev` após cada módulo
4. **Faça os exercícios** - Cada módulo tem exercícios práticos
5. **Consulte a documentação oficial** - Links fornecidos em cada módulo

### Metodologia de Estudo:

```
📖 Ler o módulo (10-15 min)
    ↓
💻 Implementar o código (20-30 min)
    ↓
✅ Testar no navegador (5 min)
    ↓
🎯 Fazer exercícios (15-20 min)
    ↓
📝 Revisar conceitos-chave (5 min)
```

**Tempo total estimado**: 10-12 horas (pode ser dividido em múltiplas sessões)

## 📁 Estrutura de Arquivos Final

Ao final do tutorial, seu projeto terá esta estrutura:

```
fiap-vuejs-spa-landing-page/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.vue
│   │   ├── MainBanner.vue
│   │   ├── ContentSection.vue
│   │   └── Footer.vue
│   ├── router/
│   │   └── index.js
│   ├── views/
│   │   ├── Home.vue
│   │   └── Contato.vue
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎓 Recursos Complementares

- [**Glossário**](./glossario.md) - Termos técnicos explicados
- [**Troubleshooting**](./troubleshooting.md) - Soluções para problemas comuns
- [**Exercícios Extras**](./exercicios-extras.md) - Desafios para praticar
- [**Recursos Adicionais**](./recursos.md) - Links úteis e documentação

## 💡 Dicas de Sucesso

### ✅ Faça:
- Tire dúvidas à medida que aparecem
- Experimente modificar o código
- Use o DevTools do navegador
- Consulte a documentação oficial
- Faça pausas regulares

### ❌ Evite:
- Pular módulos
- Copiar código sem entender
- Avançar com erros não resolvidos
- Tentar aprender tudo de uma vez
- Desistir nos primeiros obstáculos

## 🤝 Suporte

Encontrou algum problema ou tem dúvidas?

1. Consulte a seção [Troubleshooting](./troubleshooting.md)
2. Revise o módulo anterior
3. Verifique a documentação oficial do Vue.js
4. Pergunte ao instrutor ou colegas

## 🎯 Checkpoints de Progresso

Marque conforme você completa cada parte:

- [ ] **Módulo 1-3**: Projeto configurado e rodando
- [ ] **Módulo 4-6**: Primeiro componente criado com props
- [ ] **Módulo 7-9**: Todos os componentes da landing page funcionando
- [ ] **Módulo 10-12**: Navegação entre páginas implementada
- [ ] **Projeto Final**: Landing page completa com SEO otimizado

## 🚀 Próximos Passos Após o Tutorial

Depois de completar este tutorial, você estará pronto para:

1. Criar seus próprios projetos Vue.js
2. Adicionar mais funcionalidades (formulários, APIs, autenticação)
3. Explorar Composition API avançada
4. Aprender sobre gerenciamento de estado (Pinia)
5. Implementar testes automatizados

---

## 🎉 Vamos Começar!

Pronto para começar sua jornada com Vue.js? 

👉 **[Clique aqui para começar o Módulo 1: Introdução ao Vue.js e SPAs](./modulos/01-introducao.md)**

---

**Bons estudos!** 📚✨
