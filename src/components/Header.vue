<template>
  <header class="bg-blue-600 text-white shadow-lg">
    <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="text-2xl font-bold">
        <router-link to="/" class="hover:text-blue-200 transition duration-200">
          {{ logoText }}
        </router-link>
      </div>
      
      <!-- Navigation Links -->
      <ul class="flex space-x-6">
        <li>
          <router-link 
            to="/" 
            class="hover:text-blue-200 transition duration-200 pb-1"
            active-class="border-b-2 border-white"
          >
            Início
          </router-link>
        </li>
        <li>
          <router-link 
            to="/contato" 
            class="hover:text-blue-200 transition duration-200 pb-1"
            active-class="border-b-2 border-white"
          >
            Contato
          </router-link>
        </li>
      </ul>
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
