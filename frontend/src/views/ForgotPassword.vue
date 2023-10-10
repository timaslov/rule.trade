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
  <div class="container">
    <img class="logo"
         src="../assets/images/Logo.svg"
         alt="logo">
    <div class="main-block">
      <div class="main-block-inner">
        <h3>Забыли пароль?</h3>
        <p>Введите email, чтобы восстановить пароль. Вам на почту придет письмо для сброса пароля.</p>
        <div class="input_container">
          <label>Email</label>
          <input type="text" v-model="email">
        </div>
        <button @click="handleForgotPassword">Отправить</button>
        <div v-if="warning" class="warning-message">{{ warning }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: auto 0;
}

.logo {
  width: 64px;
  height: 64px;
  margin: 0 auto;
}

.main-block {
  height: 400px;
  width: 543px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 2px 10px 0 #d9d9d9;
}

.main-block-inner {
  margin: 42px 92px 0 92px;
  display: flex;
  flex-direction: column;
}

.main-block-inner h3 {
  margin: 16px 0;
}

.input_container {
  margin: 12px 0 0 0;
  display: flex;
  flex-direction: column;
}

.input_container input {
  margin: 5px 0 0 0;
  height: 46px;
  border-radius: 8px;
  border: 1px solid #d5dae1;
}

.warning-message {
  margin: 16px 0 0 0;
  color: #ea0000;
}

p {
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  color: var(--brand-gray);
}

label {
  margin: 16px 0 0 0;
  text-align: left;
}

button {
  margin: 14px 0 0 0;
}

</style>