<script setup lang="ts">
import {ref} from 'vue';
import {register} from "../services/auth.ts";

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const warning = ref('');

const handleRegister = async () => {
  if (!email.value || !password.value || !confirmPassword.value)
    warning.value = 'Заполните все поля'
  else if (password.value !== confirmPassword.value)
    warning.value = 'Пароли не совпадают'
  else
    try {
      await register(email.value, password.value)
      warning.value = ''
    }
    catch (error) {
      warning.value = error.message
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
        <h3>Регистрация</h3>
        <div class="form-input-container">
          <label>Email</label>
          <input type="text" v-model="email">
          <label>Пароль</label>
          <input type="password" v-model="password">
          <label>Повторите пароль</label>
          <input type="password" v-model="confirmPassword">
        </div>
        <button @click="handleRegister">Зарегистрироваться</button>
        <div class="sign-in">
          <p>Уже есть аккаунт?
            <router-link to="/login" class="router-link-login">Войти</router-link>
          </p>
        </div>
        <div v-if="warning" class="form-warning-message">{{ warning }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sign-in p {
  margin: 16px 0 0 0;
}

.router-link-login {
  text-decoration: none;
}
</style>
