<script setup lang="ts">
import {ref} from 'vue';

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const warning = ref('');

const handleRegister = () => {
  if (!email.value || !password.value || !confirmPassword.value)
    warning.value = 'Заполните все поля'
  else if (password.value !== confirmPassword.value)
    warning.value = 'Пароли не совпадают'
  else
    warning.value = ''
}

</script>

<template>
  <div class="container">
    <img class="logo"
         src="../assets/images/Logo.svg"
         alt="logo">
    <div class="register">
      <div class="register-inner">
        <h3>Регистрация</h3>
        <div class="input_container">
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

.register {
  height: 580px;
  width: 543px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 2px 10px 0 #d9d9d9;
}

.register-inner {
  margin: 42px 92px 0 92px;
  display: flex;
  flex-direction: column;
}

.register-inner h3 {
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

.sign-in p {
  margin: 16px 0 0 0;
}

.router-link-login {
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