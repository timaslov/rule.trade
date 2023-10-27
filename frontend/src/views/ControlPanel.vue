<script setup lang="ts">

const exchanges = ['binance', 'huobi', 'bybit'];
const packages = ['from postman test', 'test package_9_30', 'test package', 'test11', 'test22', 'test33', 'test44', 'test55', 'test66', 'test77', 'test88', 'test99', 'test110', 'test120', 'test130', 'test140'];
const logics = ['test logic 12 39', 'test logic 13 57', 'test logic 14 10'];
const rules = ['test rule 1', 'test rule 2', 'test rule 3'];

</script>

<template>
  <h3>Панель управления</h3>
  <div class="container">

    <div class="container-item">
      <div class="label-container">
        <label>Подключенные биржи</label>
        <span class="mdi mdi-information"></span>
      </div>
      <div class="container-item-list">
        <router-link to="/add_exchange">
        <div class="add-button" >
          <span class="mdi mdi-plus"></span>
        </div>
        </router-link>
        <div v-for="exch in exchanges" class="container-item-list-item">
          <div class="container-item-list-item-name">{{exch}}</div>
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
        <label>Сохраненные пакеты</label>
        <span class="mdi mdi-information"></span>
      </div>
      <div class="container-item-list">
        <router-link to="/create_package">
        <div class="add-button">
          <span class="mdi mdi-plus"></span>
        </div>
        </router-link>
        <div v-for="pack in packages" class="container-item-list-item">
          <div class="container-item-list-item-name">{{pack}}</div>
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
        <label>Сформированная логика</label>
        <span class="mdi mdi-information"></span>
      </div>
      <div class="container-item-list">
        <router-link to="/">
        <div class="add-button">
          <span class="mdi mdi-plus"></span>
        </div>
        </router-link>
        <div v-for="logic in logics" class="container-item-list-item">
          <div class="container-item-list-item-name">{{logic}}</div>
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
        <span class="mdi mdi-information"></span>
      </div>
      <div class="container-item-list">
        <router-link to="/">
        <div class="add-button">
          <span class="mdi mdi-plus"></span>
        </div>
        </router-link>
        <div v-for="rule in rules" class="container-item-list-item">
          <div class="container-item-list-item-name">{{rule}}</div>
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

  </div>
</template>

<style scoped>
h3 {
  line-height: 72px;
}

.container {
  display: flex;
  flex-direction: column;
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