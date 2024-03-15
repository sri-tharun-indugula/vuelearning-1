<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import learning from './learningfile/learning.vue';
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>|
      <RouterLink to="/about">About</RouterLink>|
      <RouterLink to="/learning">learning</RouterLink>|
      <RouterLink to="/learninginput">learning input</RouterLink>
      <RouterLink to="/learningifelse">learning if and else</RouterLink>
      <RouterLink to="/learningforloop">learningforloop </RouterLink>

    </nav>
    <div class="wrapper">
      <HelloWorld msg="You did it! this is javascript" />
    </div>
    <RouterView />
  </header>
</template>

<style scoped></style>
