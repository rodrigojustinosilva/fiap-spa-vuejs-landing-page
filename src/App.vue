<template>
  <div id="app">
    <Header logoText="FIAP Landing Page" />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>
