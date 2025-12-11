# Módulo 2: Setup Inicial do Projeto

## 🎯 Objetivos de Aprendizado

Ao final deste módulo, você será capaz de:
- Verificar se o Node.js está instalado corretamente
- Criar a estrutura inicial do projeto
- Entender o arquivo `package.json`
- Instalar todas as dependências necessárias
- Executar o projeto pela primeira vez

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter:
- [ ] Node.js 18+ instalado
- [ ] npm instalado
- [ ] Terminal aberto
- [ ] Editor de código (VS Code)

---

## ✅ Verificando a Instalação

### 1. Verificar Node.js

Abra seu terminal e execute:

```bash
node --version
```

**Saída esperada:** `v18.x.x` ou superior

Se não estiver instalado:
- **macOS**: `brew install node` ou baixe de [nodejs.org](https://nodejs.org/)
- **Windows**: Baixe de [nodejs.org](https://nodejs.org/)
- **Linux**: `sudo apt install nodejs npm` (Ubuntu/Debian)

### 2. Verificar npm

```bash
npm --version
```

**Saída esperada:** `9.x.x` ou superior

O npm geralmente vem com o Node.js. Se não estiver disponível, reinstale o Node.js.

---

## 📁 Criando a Estrutura do Projeto

### Passo 1: Criar a pasta do projeto

```bash
# Navegue até onde quer criar o projeto
cd ~/projetos  # ou qualquer pasta de sua preferência

# Crie a pasta do projeto
mkdir fiap-vuejs-spa-landing-page

# Entre na pasta
cd fiap-vuejs-spa-landing-page
```

### Passo 2: Inicializar o Git (Opcional mas recomendado)

```bash
git init
```

Isso cria um repositório Git para controle de versão.

### Passo 3: Criar .gitignore

Crie um arquivo `.gitignore` na raiz do projeto:

```bash
# .gitignore
node_modules/
dist/
.DS_Store
*.log
```

**Por quê?** Evita enviar arquivos desnecessários para o Git (como dependências).

---

## 📦 Criando o package.json

O `package.json` é o **coração do seu projeto Node.js**. Ele define:
- Nome e versão do projeto
- Dependências (bibliotecas necessárias)
- Scripts de desenvolvimento e build

### Criar package.json manualmente

Crie o arquivo `package.json` na raiz do projeto:

```json
{
  "name": "fiap-vuejs-spa-landing-page",
  "version": "1.0.0",
  "description": "Landing page SPA utilizando Vue.js com Vite e Tailwind CSS - Tutorial FIAP",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.4.0",
    "vue-router": "^4.4.5"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "tailwindcss": "^3.4.0",
    "vite": "^5.0.0"
  }
}
```

### Entendendo o package.json

#### **name**
```json
"name": "fiap-vuejs-spa-landing-page"
```
Nome do seu projeto (use kebab-case: palavras-separadas-por-tracos).

#### **version**
```json
"version": "1.0.0"
```
Versão do projeto (formato: MAJOR.MINOR.PATCH).

#### **type**
```json
"type": "module"
```
Permite usar `import/export` ao invés de `require()` (sintaxe moderna).

#### **scripts**
```json
"scripts": {
  "dev": "vite",           // Inicia servidor de desenvolvimento
  "build": "vite build",   // Cria versão de produção
  "preview": "vite preview" // Visualiza build de produção
}
```

Scripts são atalhos para comandos. Execute com `npm run <script>`.

#### **dependencies**
```json
"dependencies": {
  "vue": "^3.4.0",          // Vue.js 3
  "vue-router": "^4.4.5"    // Roteamento
}
```

Bibliotecas necessárias em **produção** (vão para o código final).

#### **devDependencies**
```json
"devDependencies": {
  "@vitejs/plugin-vue": "^5.0.0",  // Plugin Vue para Vite
  "autoprefixer": "^10.4.0",       // Adiciona prefixos CSS
  "postcss": "^8.4.0",             // Processa CSS
  "tailwindcss": "^3.4.0",         // Framework CSS
  "vite": "^5.0.0"                 // Build tool
}
```

Ferramentas de **desenvolvimento** (não vão para produção).

#### Entendendo Versões (Semver)

```
"vue": "^3.4.0"
   │    │ │ │
   │    │ │ └── PATCH: Correções de bugs
   │    │ └──── MINOR: Novas funcionalidades (compatível)
   │    └────── MAJOR: Mudanças incompatíveis
   └─────────── ^ = Permite atualizações de MINOR e PATCH
```

- `^3.4.0` → Instala 3.x.x (mas não 4.0.0)
- `~3.4.0` → Instala 3.4.x (mas não 3.5.0)
- `3.4.0` → Instala exatamente 3.4.0

---

## 📥 Instalando Dependências

Agora vamos instalar todas as bibliotecas definidas no `package.json`.

```bash
npm install
```

**O que acontece:**
1. npm lê o `package.json`
2. Baixa todas as dependências e devDependencies
3. Cria a pasta `node_modules/` (contém as bibliotecas)
4. Cria `package-lock.json` (trava versões exatas)

**Tempo estimado:** 1-2 minutos

**Saída esperada:**
```
added 109 packages, and audited 110 packages in 9s

26 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

### O que foi instalado?

Execute para ver:
```bash
ls node_modules/
```

Você verá centenas de pastas! Cada dependência tem suas próprias dependências.

---

## 📂 Estrutura de Pastas Atual

Após a instalação, seu projeto deve ter:

```
fiap-vuejs-spa-landing-page/
├── node_modules/          # Dependências (NÃO editar)
├── .gitignore            # Arquivos ignorados pelo Git
├── package.json          # Configuração do projeto
└── package-lock.json     # Versões travadas (gerado automaticamente)
```

---

## 🎯 Testando a Instalação

Vamos verificar se tudo está funcionando:

### 1. Verificar se o Vite foi instalado

```bash
npx vite --version
```

**Saída esperada:** `vite/5.x.x`

### 2. Verificar se o Vue foi instalado

```bash
npm list vue
```

**Saída esperada:**
```
fiap-vuejs-spa-landing-page@1.0.0
└── vue@3.4.x
```

---

## 🧩 Conceitos-Chave

### 1. **node_modules**
- Contém todas as bibliotecas instaladas
- **NUNCA edite diretamente**
- **NUNCA envie para o Git** (é muito grande)
- Pode ser recriado com `npm install`

### 2. **package.json**
- Lista de dependências do projeto
- Scripts de automação
- Metadados do projeto

### 3. **package-lock.json**
- Trava versões **exatas** das dependências
- Garante que todos tenham as mesmas versões
- **SEMPRE envie para o Git**

### 4. **npm install**
- Lê `package.json`
- Instala tudo em `node_modules/`
- Execute **sempre** ao clonar um projeto

---

## 🔧 Comandos npm Úteis

| Comando | O que faz |
|---------|-----------|
| `npm install` | Instala dependências |
| `npm install <pacote>` | Instala novo pacote |
| `npm uninstall <pacote>` | Remove pacote |
| `npm update` | Atualiza pacotes |
| `npm list` | Lista dependências |
| `npm run dev` | Executa script "dev" |
| `npm run build` | Executa script "build" |

---

## 🎯 Exercícios Práticos

### Exercício 1: Exploração
1. Abra o arquivo `package.json` no seu editor
2. Identifique:
   - Quantas dependencies tem?
   - Quantas devDependencies tem?
   - Quais scripts estão definidos?

### Exercício 2: Verificação
Execute os seguintes comandos e anote as versões:
```bash
node --version
npm --version
npx vite --version
```

### Exercício 3: Estrutura
Liste os arquivos do seu projeto:
```bash
ls -la
```

Você deve ver:
- `.git/` (se inicializou Git)
- `.gitignore`
- `node_modules/`
- `package.json`
- `package-lock.json`

---

## ⚠️ Problemas Comuns e Soluções

### Problema 1: "command not found: npm"
**Solução:** Node.js não está instalado. Instale de [nodejs.org](https://nodejs.org/)

### Problema 2: "EACCES: permission denied"
**Solução (macOS/Linux):**
```bash
sudo chown -R $USER /usr/local/lib/node_modules
```

### Problema 3: Instalação muito lenta
**Solução:** Tente limpar o cache:
```bash
npm cache clean --force
npm install
```

### Problema 4: "npm ERR! code ENOENT"
**Solução:** Você não está na pasta do projeto. Execute `cd` para a pasta correta.

---

## ✅ Checklist do Módulo

Antes de prosseguir, certifique-se de que você:

- [ ] Verificou que Node.js e npm estão instalados
- [ ] Criou a pasta do projeto
- [ ] Criou o arquivo `package.json`
- [ ] Executou `npm install` com sucesso
- [ ] Vê a pasta `node_modules/` criada
- [ ] Entende o que é `package.json`
- [ ] Sabe a diferença entre dependencies e devDependencies

---

## 🚀 Próximo Passo

Agora que temos o projeto configurado com todas as dependências, vamos configurar o Vite e o Tailwind CSS!

👉 **[Próximo: Módulo 3 - Configuração: Vite e Tailwind CSS](./03-configuracao-vite-tailwind.md)**

---

## 📚 Recursos Adicionais

- [Documentação do npm](https://docs.npmjs.com/)
- [Entendendo package.json](https://docs.npmjs.com/cli/v9/configuring-npm/package-json)
- [Semantic Versioning (Semver)](https://semver.org/lang/pt-BR/)

---

**Dúvidas?** Consulte o [Troubleshooting](../troubleshooting.md) ou pergunte ao instrutor.
