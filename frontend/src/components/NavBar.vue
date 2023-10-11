<script setup lang="ts">
import {useStore} from "vuex";
import {computed,ref} from "vue";
import {logout} from "../services/auth.ts";
import {useRouter} from "vue-router";

const store = useStore();
const user = computed(() => store.getters.user);
const userMenuOpen = ref(false);
const router = useRouter();

const logoutHandler = async () => {
  await logout();
};

const changePasswordHandler = () => {
  router.push('/change_password');
};
</script>

<template>
  <header class="navbar-flexbox">
    <nav class="navbar-flexbox-inner-container">
      <router-link to="/"><img class="logo" src="../assets/images/Header_logo.svg" alt="Logo"></router-link>
      <ul class="navbar-options">
        <li><router-link to="/" class="router-link-li">Главная</router-link></li>
        <li>Профиль</li>
        <li>Инструкция</li>
        <li>О нас</li>
      </ul>
      <div class="user-options" v-if="!user">
        <button class="btn-login"><router-link to="/login" class="router-link-btn-login">Войти</router-link></button>
        <button class="btn-register"><router-link to="/register" class="router-link-btn-register">Регистрация</router-link></button>
      </div>
      <div class="authorized-user-options" v-if="user">
        <label>{{user.email}}</label>
        <v-menu v-model="userMenuOpen">
          <template v-slot:activator="{ props }">
            <v-icon
                :icon="userMenuOpen ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                v-bind="props"
            ></v-icon>
          </template>
          <v-list class="v-list">
            <v-list-item @click="changePasswordHandler">
              Сменить пароль
            </v-list-item>
            <v-list-item @click="logoutHandler">
              Выход
            </v-list-item>
          </v-list>
        </v-menu>
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

.user-options {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.authorized-user-options {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.authorized-user-options label{
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: black;
  margin: 0 8px 0 0;
}

.btn-login {
  margin-right: 24px;
  padding: 0 0 0 0;
  width: 53px;
  height: 24px;
  background: none;
}

.router-link-btn-login {
  text-decoration: none;
  color: black;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
}

.btn-register {
  padding: 5px 28px;
}

.router-link-btn-register {
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  line-height: 27px;
}

/* Лучше способа пока не нашел, чтобы убрать полосу прокрутки в выпадающем меню */
.v-menu > .v-overlay__content > .v-card, .v-menu > .v-overlay__content > .v-sheet,
.v-menu > .v-overlay__content > .v-list {
  overflow: hidden;
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
