<script setup lang="ts">

</script>

<template>
  <footer class="footer">
    <div class="footer-inner-container">
      <div class="footer-navbar">
        <router-link to="/"><img class="logo" src="../assets/images/Header_logo.svg" alt="Logo"></router-link>
        <ul class="footer-navbar-options">
          <li><router-link to="/" class="router-link-li">Главная</router-link></li>
          <li><router-link to="/" class="router-link-li">Профиль</router-link></li>
          <li><router-link to="/" class="router-link-li">Инструкция по настройке</router-link></li>
          <li><router-link to="/" class="router-link-li">Доступные биржи</router-link></li>
          <li><router-link to="/" class="router-link-li">О нас</router-link></li>
        </ul>
      </div>
      <div class="footer-info">
        <p><span>© 2023 rule.trade.</span> Все права защищены.</p>
        <div class="media-links">
          <img src="../assets/images/Icon_Facebook.svg" alt="Logo">
          <img src="../assets/images/Icon_Twitter.svg" alt="Logo">
          <img src="../assets/images/Icon_Instagram.svg" alt="Logo">
          <img src="../assets/images/Icon_Github.svg" alt="Logo">
          <img src="../assets/images/Icon_LinkedIn.svg" alt="Logo">
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  width: 100vw;
  min-height: 144px;
  margin: 0;
  background-color: var(--brand-bg_gray);
}

.footer-inner-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  max-width: 1150px;
}

.footer-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0 0 0;
}

.logo {
  width: 172px;
  height: 32px;
}

.footer-navbar-options {
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.footer-navbar-options li {
  margin-right: 48px;
  white-space: nowrap;
}

.router-link-li {
  text-decoration: none;
  color: inherit;
  font-size: 20px;
  line-height: 30px;
  font-weight: 500;
}

.footer-navbar-options li:last-child {
  margin-right: 0;
}

.footer-info {
  display: flex;
  justify-content: space-between;
  margin: 0 0 16px 0;
}

.media-links {
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.media-links img {
  margin-right: 24px;
}

.media-links img:last-child {
  margin-right: 0;
}

span {
  font-weight: 600;
}

@media (min-width: 1025px) and (max-width: 1280px) {
  .footer-inner-container {
    width: 95%;
  }
  .footer-navbar-options li {
    margin-right: 28px;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .footer-inner-container {
    width: 90%;
  }
  .footer-navbar{
    flex-direction: column;
  }
  .footer-navbar-options{
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .footer-inner-container {
    width: 90%;
  }
  .footer-navbar{
    flex-direction: column;
  }
  .footer-navbar-options{
    justify-content: center;
  }
  .footer-info{
    flex-direction: column;
    text-align: center;
  }
  .media-links{
    justify-content: center;
  }
}
</style>
