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

const toggleMenuChevron = () => {
  isMenuOpened.value = !isMenuOpened.value
};

</script>

<template>
  <div class="authorized-user-options">
    <label>{{user.email}}</label>
    <div ref="menuIconRef">
    <v-icon
        @click="toggleMenuChevron"
        :icon="isMenuOpened ? 'mdi-chevron-up' : 'mdi-chevron-down'"
    ></v-icon>
    </div>
    <ul v-if="isMenuOpened">
      <li @click="changePasswordHandler">Сменить пароль</li>
      <li @click="logoutHandler">Выход</li>
      <li>Пункт 3</li>
    </ul>
  </div>
</template>

<style scoped>
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