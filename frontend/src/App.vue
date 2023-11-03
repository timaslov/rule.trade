<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import AppFooter from "./components/AppFooter.vue";
import SpinnerComponent from "./components/SpinnerComponent.vue";

import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore();
const isSpinnerShown = computed(() => store.state.spinner.isVisible);

</script>

<template>
    <NavBar/>

  <main class="main">
    <RouterView/>
    <spinner-component v-if="isSpinnerShown"/>
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
