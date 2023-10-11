<script setup lang="ts">
import {ref, onMounted} from 'vue';
import {useRoute} from "vue-router";
import {setNewPassword} from "../../services/auth.ts";

const route = useRoute();
const oobCode = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const warning = ref('');

onMounted(() => {
  oobCode.value = route.query.oobCode;
  if (!oobCode.value) {
    warning.value = 'Отсутствует код для сброса пароля.';
  }
  email.value = route.query.email;
});

const handleResetPassword = async () => {
  if (!password.value || !confirmPassword.value)
    warning.value = 'Заполните все поля'
  else if (password.value !== confirmPassword.value)
    warning.value = 'Пароли не совпадают'
  else
    try {
      await setNewPassword(oobCode.value, password.value)
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
         src="../../assets/images/Logo.svg"
         alt="logo">
    <div class="form-main-block">
      <div class="form-main-block-inner">
        <h3>Смена пароля</h3>
        <p>Введите новый пароль для аккаунта {{email}}</p>
        <div class="form-input-container">
          <label>Пароль</label>
          <input type="password" v-model="password">
          <label>Повторите пароль</label>
          <input type="password" v-model="confirmPassword">
        </div>
        <button @click="handleResetPassword">Отправить</button>
        <div v-if="warning" class="form-warning-message">{{ warning }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
