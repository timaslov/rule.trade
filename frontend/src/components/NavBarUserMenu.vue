<script setup lang="ts">
import {logout} from "../services/auth.ts";
import {useRouter} from "vue-router";
import {useStore} from "vuex";
import {computed, ref, onMounted, onUnmounted} from "vue";

const store = useStore();
const user = computed(() => store.getters.user);
const router = useRouter();

const isMenuOpened = ref(false);
const menuIconRef = ref<HTMLElement | null>(null);

const outsideClickListener = (event: Event) => {
  if (menuIconRef.value && !menuIconRef.value.contains(event.target as Node)) {
    isMenuOpened.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', outsideClickListener);
});

onUnmounted(() => {
  document.removeEventListener('click', outsideClickListener);
});

const logoutHandler = async () => {
  await logout();
};

const changePasswordHandler = () => {
  router.push('/change_password');
};

const openControlPanelHandler = () => {
  router.push('/control_panel');
};

const toggleMenu = () => {
  isMenuOpened.value = !isMenuOpened.value
};

</script>

<template>
  <router-link to="/login" class="router-link-acc-button" v-if="!user"><span class="mdi mdi-account icon-account"></span></router-link>
  <div class="user-options" v-if="!user">
    <button class="btn-login"><router-link to="/login" class="router-link-btn-login">Войти</router-link></button>
    <button class="btn-register"><router-link to="/register" class="router-link-btn-register">Регистрация</router-link></button>
  </div>

  <div class="authorized-user-options" v-if="user">
    <label>{{user.email}}</label>
    <div ref="menuIconRef" @click="toggleMenu">
      <span class="mdi mdi-account icon-account"></span>
      <span class="mdi mdi-chevron-down icon-chevron" v-show="!isMenuOpened"></span>
      <span class="mdi mdi-chevron-up icon-chevron" v-show="isMenuOpened"></span>
    </div>
    <ul v-if="isMenuOpened">
      <li @click="openControlPanelHandler">Панель управления</li>
      <li @click="changePasswordHandler">Сменить пароль</li>
      <li @click="logoutHandler">Выход</li>
    </ul>
  </div>
</template>

<style scoped>
.router-link-acc-button {
  color: black;
  display: none;
}

.user-options {
  display: flex;
  flex-direction: row;
  align-items: center;
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

.authorized-user-options {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
}

.authorized-user-options label{
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: black;
  margin: 0 8px 0 0;
}

ul {
  position: absolute;
  top: 100%;
  right: 0;
  margin: 0;
  padding: 0;
  list-style-type: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background: linear-gradient(to bottom, transparent 0%, #ffffff 50%);
}

li {
  cursor: pointer;
  padding: 16px 16px;
  white-space: nowrap;
  transition: background-color 0.3s ease, color 0.3s ease;
}

li:hover {
  background-color: var(--brand-blue);
  color: #ffffff;
}

li:first-child {
  background: linear-gradient(to bottom, transparent 0%, #ffffff 50%);
}

li:first-child:hover {
  background: linear-gradient(to bottom, transparent 0%, var(--brand-blue) 15%);
}

li:last-child {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.icon-account {
  cursor: pointer;
  display: none;
  font-size: 28px;
}

.mdi-chevron-up {
  font-size: 26px;
  cursor: pointer;
}

.mdi-chevron-down {
  font-size: 26px;
  cursor: pointer;
}

@media (max-width: 767px) {
  .icon-account{
    display: block;
  }

  .icon-chevron{
    display: none;
  }

  label{
    display: none;
  }

  .user-options{
    display: none;
  }

  .router-link-acc-button{
    display: block;
  }
}

</style>