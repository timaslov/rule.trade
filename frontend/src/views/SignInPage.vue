<script setup lang="ts">
import {ref} from 'vue';
import {login} from "../services/auth.ts";

const email = ref('');
const password = ref('');
const rememberMe = ref(false);
const warning = ref('');

const handleLogin = async () => {
  if (!email.value || !password.value)
    warning.value = 'Заполните все поля'
  else {
    try {
      await login(email.value, password.value, rememberMe.value)
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
        <h3>Добро пожаловать!</h3>
        <p>Введите свои учетные данные, чтобы получить доступ к личному кабинету.</p>
        <div class="form-input-container">
          <label>Номер телефона / Почта</label>
          <input type="text" v-model="email">
          <label>Пароль</label>
          <input type="password" v-model="password">
        </div>
        <div class="remember_forget_container">
          <div class="remember_container">
            <input type="checkbox" v-model="rememberMe">
            <label>Запомнить меня</label>
          </div>
          <router-link to="/forgot_password" class="router-link-forgot-password">Забыли пароль?</router-link>
        </div>
        <button @click="handleLogin">Войти</button>
        <div class="register">
          <p>Еще нет аккаунта?
            <router-link to="/register" class="router-link-register">Зарегистрироваться</router-link>
          </p>
        </div>
        <div v-if="warning" class="form-warning-message">{{ warning }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.remember_forget_container {
  margin: 12px 0 0 0;
  display: flex;
  justify-content: space-between;
}

.remember_forget_container a {
  margin: auto 0;
}

.remember_container {
  display: flex;
  justify-content: space-between;
}

.remember_container input {
  width: 16px;
  height: 16px;
  padding: 0;
  margin: auto 0;
  border-radius: 4px;
  border: 1px solid #d5dae1;
}

.remember_container label {
  margin: auto 8px;
}

.register p {
  margin: 16px 0 0 0;
}

.router-link-register {
  text-decoration: none;
}

.router-link-forgot-password {
  text-decoration: none;
}

</style>