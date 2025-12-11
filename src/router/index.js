import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contato from '../views/Contato.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'FIAP Landing Page - Vue.js + Vite + Tailwind CSS',
      description: 'Aprenda Vue.js 3 criando uma landing page moderna com Vite e Tailwind CSS. Tutorial completo com exemplos práticos de componentes, props e roteamento.'
    }
  },
  {
    path: '/contato',
    name: 'contato',
    component: Contato,
    meta: {
      title: 'Contato - FIAP Landing Page',
      description: 'Entre em contato conosco. Preencha o formulário e envie sua mensagem. Estamos prontos para ajudar você.'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Navigation Guard para atualizar o título e meta description
router.beforeEach((to, from, next) => {
  // Atualiza o título da página
  if (to.meta.title) {
    document.title = to.meta.title
  }
  
  // Atualiza a meta description
  if (to.meta.description) {
    let descriptionTag = document.querySelector('meta[name="description"]')
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta')
      descriptionTag.setAttribute('name', 'description')
      document.head.appendChild(descriptionTag)
    }
    descriptionTag.setAttribute('content', to.meta.description)
  }
  
  next()
})

export default router
