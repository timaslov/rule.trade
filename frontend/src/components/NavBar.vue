<script setup lang="ts">
import NavBarUserMenu from "./NavBarUserMenu.vue";
</script>

<template>
  <header class="navbar-flexbox">
    <nav class="navbar-flexbox-inner-container">
      <router-link to="/">
        <div class="logo-container">
          <img class="logo1" src="../assets/images/Logo.svg" alt="Logo">
          <img class="logo2" src="../assets/images/rule_trade.svg" alt="Logo">
        </div>
      </router-link>
      <ul class="navbar-options">
        <li><router-link to="/" class="router-link-li">Главная</router-link></li>
        <li>Профиль</li>
        <li>Инструкция</li>
        <li>О нас</li>
      </ul>
      <NavBarUserMenu></NavBarUserMenu>
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

.logo-container {
  display: flex;
  align-items: center;
}

.logo1 {
  height: 32px;
  margin: 0 8px 0 0;
}

.logo2 {
  height: 20px;
}

.navbar-options {
  padding: 0;
  margin: 0 48px;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-options li {
  margin-right: 48px;
  white-space: nowrap;
}

.router-link-li {
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
}

.navbar-options li:last-child {
  margin-right: 0;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .navbar-flexbox-inner-container{
    width: 95%;
  }
  .navbar-options{
    margin: 0 24px;
  }
  .navbar-options li{
    margin-right: 24px;
  }
}

@media (max-width: 767px) {
  .navbar-flexbox-inner-container{
    width: 95%;
  }

  .navbar-options{
    margin: 0 8px;
  }

  .navbar-options li{
    margin-right: 8px;
  }

  .logo2{
    display: none;
  }

  .authorized-user-options label {
    display: none;
  }
}

</style>
