<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import AppFooter from "./components/AppFooter.vue";
</script>

<template>
    <NavBar/>

  <main class="main">
    <RouterView/>
  </main>

    <AppFooter/>
</template>

<style scoped>
.main {
  min-height: calc(100vh - 208px);
  max-width: 1138px;
  margin: 0 auto;
  padding: 64px 0 0 0;
  text-align: center;
  display: flex;
  flex-direction: column;
}
</style>
