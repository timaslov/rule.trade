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
  <div class="container">
    <img class="logo"
         src="../assets/images/Logo.svg"
         alt="logo">
    <div class="sign-in">
      <div class="sign-in-inner">
        <h3>Добро пожаловать!</h3>
        <p>Введите свои учетные данные, чтобы получить доступ к личному кабинету.</p>
        <div class="input_container">
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
          <a>Забыли пароль?</a>
        </div>
        <button @click="handleLogin">Войти</button>
        <div class="register">
          <p>Еще нет аккаунта?
            <router-link to="/register" class="router-link-register">Зарегистрироваться</router-link>
          </p>
        </div>
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

.sign-in {
  height: 578px;
  width: 543px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 2px 10px 0 #d9d9d9;
}

.sign-in-inner {
  margin: 42px 92px 0 92px;
  display: flex;
  flex-direction: column;
}

.sign-in-inner h3 {
  margin: 16px 0;
}

.input_container {
  margin: 24px 0 0 0;
  display: flex;
  flex-direction: column;
}

.input_container input {
  margin: 5px 0 0 0;
  height: 46px;
  border-radius: 8px;
  border: 1px solid #d5dae1;
}

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