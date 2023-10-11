<script setup lang="ts">
import {ref} from 'vue';
import {changePassword} from "../services/auth.ts";

const currentPassword = ref('');
const newPassword = ref('');
const confirmNewPassword = ref('');
const warning = ref('');

const handleChangePassword = async () => {
  if (!currentPassword.value || !newPassword.value || !confirmNewPassword.value)
    warning.value = 'Заполните все поля'
  else if (newPassword.value !== confirmNewPassword.value)
    warning.value = 'Новый пароль повторен неверно'
  else {
    try {
      await changePassword(currentPassword.value, newPassword.value)
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
        <h3>Смена пароля</h3>
        <p>Для смены пароля необходимо ввести сначала текущий пароль, а затем новый.</p>
        <div class="form-input-container">
          <label>Текущий пароль</label>
          <input type="password" v-model="currentPassword">
          <label>Новый пароль</label>
          <input type="password" v-model="newPassword">
          <label>Повторите новый пароль</label>
          <input type="password" v-model="confirmNewPassword">
        </div>
        <button @click="handleChangePassword">Сменить пароль</button>
        <div v-if="warning" class="form-warning-message">{{ warning }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>