<script setup lang="ts">
import {logout} from "../services/auth.ts";
import {useRouter} from "vue-router";

const router = useRouter();

const logoutHandler = async () => {
  await logout();
};

const changePasswordHandler = () => {
  router.push('/change_password');
};
</script>

<template>
  <ul>
    <li @click="changePasswordHandler">Сменить пароль</li>
    <li @click="logoutHandler">Выход</li>
  </ul>
</template>

<style scoped>
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

</style>