<script setup lang="ts">
import {ref, onMounted} from 'vue';
import {useRoute} from "vue-router";

import EmailApproved from "../components/auth/EmailApproved.vue";
import ResetPassword from "../components/auth/ResetPassword.vue";

const route = useRoute();
const mode = ref('');
const warning = ref(false);

onMounted(() => {
  mode.value = route.query.mode;
  if (mode.value !== 'verifyEmail' && mode.value !== 'resetPassword') {
    warning.value = true;
  }
});
</script>

<template>
  <h4 v-if="warning === true">Неизвестное действие</h4>
  <EmailApproved v-if="mode === 'verifyEmail'"></EmailApproved>
  <ResetPassword v-if="mode === 'resetPassword'"></ResetPassword>
</template>

<style scoped>
h1 {
  margin: 100px ;
}
</style>