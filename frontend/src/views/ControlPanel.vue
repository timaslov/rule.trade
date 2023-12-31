<script setup lang="ts">
import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore();

const isControlPanelLoading = computed(() => store.state.controlPanel.isLoading);

const exchanges = computed(() => store.getters.exchanges);
const packages = computed(() => store.getters.packages);
const logics = computed(() => store.getters.logics);
const rules = computed(() => store.getters.rules);

</script>

<template>
  <h3>Панель управления</h3>
  <div v-if="!isControlPanelLoading">
    <div class="container-item">
      <div class="label-container">
        <label>Подключенные биржи</label>
        <div class="info-wrapper">
          <span class="mdi mdi-information"></span>
          <div class="tooltip">Это информационное окошко</div>
        </div>
      </div>
      <div class="container-item-list">
        <router-link to="/add_exchange">
        <div class="add-button" >
          <span class="mdi mdi-plus"></span>
        </div>
        </router-link>
        <div v-for="exch in exchanges" class="container-item-list-item">
          <div class="container-item-list-item-name">{{exch.name}}</div>
          <div class="container-item-list-item-buttons">
            <div class="container-item-list-item-red-button">
              <span class="mdi mdi-close"></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-item">
      <div class="label-container">
        <label>Сохраненные пакеты</label>
        <div class="info-wrapper">
          <span class="mdi mdi-information"></span>
          <div class="tooltip">Это информационное окошко</div>
        </div>
      </div>
      <div class="container-item-list">
        <router-link to="/create_package">
        <div class="add-button">
          <span class="mdi mdi-plus"></span>
        </div>
        </router-link>
        <div v-for="pack in packages" class="container-item-list-item">
          <div class="container-item-list-item-name">{{pack.name}}</div>
          <div class="container-item-list-item-buttons">
            <div class="container-item-list-item-red-button">
              <span class="mdi mdi-close"></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-item">
      <div class="label-container">
        <label>Сформированная логика</label>
        <div class="info-wrapper">
          <span class="mdi mdi-information"></span>
          <div class="tooltip">Это информационное окошко</div>
        </div>
      </div>
      <div class="container-item-list">
        <router-link to="/create_logic">
        <div class="add-button">
          <span class="mdi mdi-plus"></span>
        </div>
        </router-link>
        <div v-for="logic in logics" class="container-item-list-item">
          <div class="container-item-list-item-name">{{logic.name}}</div>
          <div class="container-item-list-item-buttons">
            <div class="container-item-list-item-black-button">
              <span class="mdi mdi-pencil"></span>
            </div>
            <div class="container-item-list-item-red-button">
              <span class="mdi mdi-close"></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-item">
      <div class="label-container">
        <label>Торговые правила</label>
        <div class="info-wrapper">
          <span class="mdi mdi-information"></span>
          <div class="tooltip">Это информационное окошко</div>
        </div>
      </div>
      <div class="container-item-list">
        <router-link to="/create_rule">
        <div class="add-button">
          <span class="mdi mdi-plus"></span>
        </div>
        </router-link>
        <div v-for="rule in rules" class="container-item-list-item">
          <div class="container-item-list-item-name">{{rule.name}}</div>
          <div class="container-item-list-item-buttons">
            <div class="container-item-list-item-black-button">
              <router-link :to="`/create_rule/${rule.id}`">
              <span class="mdi mdi-pencil"></span>
              </router-link>
            </div>
            <div class="container-item-list-item-red-button">
              <span class="mdi mdi-close"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
h3 {
  line-height: 72px;
}

.container {
  display: flex;
  flex-direction: column;
  width: 90vw;
  max-width: 1138px;
}

.container-item {
  margin: 0 0 76px 0;
}

.label-container {
  display: flex;
  flex-direction: row;
  margin: 0 0 24px 0;
}

label {
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  margin: 0 8px 0 0;
}

.container-item-list {
  display: flex;
  flex-direction: row;
  overflow-y: auto;
  max-height: 300px;
  flex-wrap: wrap;
}

.container-item-list-item {
  display: flex;
  flex-direction: row;
  margin: 0 16px 16px 0;
}

.container-item-list-item-name {
  width: 172px;
  height: 80px;
  display: flex;
  margin: 0 8px 0 0;
  border: 1px solid var(--brand-border-gray);
  border-radius: 8px;
  align-items: center;
  justify-content: center;
}

.container-item-list-item-name:hover {
  border: 1px solid black;
}

.container-item-list-item-buttons {
  display: flex;
  flex-direction: column;
}

.container-item-list-item-black-button {
  cursor: pointer;
  display: flex;
  width: 24px;
  height: 24px;
  margin: 0 0 8px 0;
  border: 1px solid var(--brand-border-gray);
  border-radius: 4px;
  align-items: center;
  justify-content: center;
}

.container-item-list-item-red-button {
  cursor: pointer;
  display: flex;
  width: 24px;
  height: 24px;
  margin: 0 0 8px 0;
  border: 1px solid var(--brand-border-gray);
  border-radius: 4px;
  align-items: center;
  justify-content: center;
}

.container-item-list-item-black-button:hover {
  border: 1px solid black;
}

.container-item-list-item-black-button:hover .mdi-pencil {
  color: black;
}

.container-item-list-item-red-button:hover {
  border: 1px solid var(--brand-error);
}

.container-item-list-item-red-button:hover .mdi-close {
  color: var(--brand-error);
}

.add-button {
  cursor: pointer;
  display: flex;
  width: 80px;
  height: 80px;
  margin: 0 8px 0 0;
  border: 1px solid var(--brand-info);
  border-radius: 8px;
  align-items: center;
  justify-content: center;
}

.add-button:hover {
  border: 1px solid var(--brand-blue);
}

.add-button:hover .mdi-plus{
  color: var(--brand-blue);
}

.mdi-information {
  font-size: 15px;
  color: var(--brand-info);
}

.mdi-pencil {
  font-size: 12px;
  color: var(--brand-border-gray);
}

.mdi-close {
  font-size: 18px;
  color: var(--brand-border-gray);
}

.mdi-plus {
  font-size: 30px;
  color: var(--brand-info);
}

/* width */
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--brand-bg_gray);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--brand-info);
  border-radius: 3px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--brand-blue);
}
</style>