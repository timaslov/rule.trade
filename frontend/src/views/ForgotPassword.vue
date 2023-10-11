<script setup lang="ts">
import {ref} from 'vue';
import {forgotPassword} from "../services/auth.ts";

const email = ref('');
const warning = ref('');

const handleForgotPassword = async () => {
  if (!email.value)
    warning.value = 'Заполните поле email'
  else {
    try {
      await forgotPassword(email.value)
      warning.value = ''
    }
    catch (error) {
      warning.value = error.message
    }
  }
}
</script>


<template>
  <div class="form-container">
    <img class="form-logo"
         src="../assets/images/Logo.svg"
         alt="logo">
    <div class="form-main-block">
      <div class="form-main-block-inner">
        <h3>Забыли пароль?</h3>
        <p>Введите email, чтобы восстановить пароль. Вам на почту придет письмо для сброса пароля.</p>
        <div class="form-input-container">
          <label>Email</label>
          <input type="text" v-model="email">
        </div>
        <button @click="handleForgotPassword">Отправить</button>
        <div v-if="warning" class="form-warning-message">{{ warning }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>