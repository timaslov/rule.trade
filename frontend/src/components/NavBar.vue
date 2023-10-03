<script setup lang="ts">

</script>

<template>
  <header class="navbar-flexbox">
    <nav class="navbar-flexbox-inner-container">
      <img class="logo" src="../assets/images/Header_logo.svg" alt="Logo">
      <ul class="navbar-options">
        <li>Главная</li>
        <li>Профиль</li>
        <li>Инструкция</li>
        <li>О нас</li>
      </ul>
      <div class="user-options">
        <button class="btn-login">Войти</button>
        <button class="btn-register">Регистрация</button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.navbar-flexbox {
  width: 100%;
  height: 64px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  background-color: var(--brand-bg_gray);
  z-index: 1000;
  align-items: center;
  justify-content: center;
}

.navbar-flexbox-inner-container {
  width: 80%;
  max-width: 1150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  width: 172px;
  height: 32px;
}

.navbar-options {
  padding: 0;
  margin: 48px;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-options li {
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  margin-right: 48px;
  white-space: nowrap;
}

.navbar-options li:last-child {
  margin-right: 0;
}

.user-options {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.btn-login {
  margin-right: 24px;
  width: 53px;
  height: 24px;
  background: none;
  color: black;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  padding: 0 0 0 0;
}

.btn-register {
  line-height: 27px;
  padding: 5px 28px;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .navbar-flexbox-inner-container{
    width: 95%;
  }
  .navbar-options{
    margin: 24px;
  }
  .navbar-options li{
    margin-right: 24px;
  }
}

</style>
