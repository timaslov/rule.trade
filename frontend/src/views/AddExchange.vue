<script setup lang="ts">
import {ref} from "vue";
import {postRequest} from "../services/http.ts";

const exchanges = ['Binance', 'huobi', 'bybit'];
const apiKey = ref('');
const secretKey = ref('');
const selectedExchange = ref('');

const handleClick = async () => {
  try {
    let body = {
      exchange: selectedExchange.value,
      key: apiKey.value,
      secret: secretKey.value
    }
    let response = await postRequest('/exchange_connect', {}, body)
    console.log(response)
  } catch (error) {
    console.log('Ошибка ', error.response.status)
  }
};


</script>

<template>
  <div class="top-block">
    <router-link to="/control_panel" class="back">
      <span class="mdi mdi-chevron-left"></span>
      <span class="span-back">Назад</span>
    </router-link>
    <h3>Подключение биржи</h3>
  </div>

  <div class="main-block">
    <label>Выберите биржу</label>
    <select v-model="selectedExchange">
      <option v-for="exchange in exchanges" :key="exchange" :value="exchange">
        {{ exchange }}
      </option>
    </select>

    <label>Введите API key</label>
    <input type="text" v-model="apiKey">

    <label>Введите Secret key</label>
    <input type="text" v-model="secretKey">

    <button @click="handleClick">Подключить биржу</button>
  </div>
</template>

<style scoped>
.top-block {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 12px 0;
}

.top-block::after {
  content: "";
  display: block;
  width:76px;
}

.top-block h3 {
  flex-grow: 1;
  text-align: center;
}

.back{
  display: flex;
  align-items: center;
  width:76px;
  text-decoration: none;
  color: var(--brand-blue);
}

.mdi-chevron-left,
.span-back {
  transition: color 0.2s;
}

.back:hover .mdi-chevron-left,
.back:hover .span-back {
  color: var(--brand-info);
}

.mdi-chevron-left {
  font-size: 28px;
}

.span-back {
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  line-height: 130%
}

.main-block {
  width: 80vw;
  max-width: 1138px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
select {
  height: 26px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--brand-border-gray);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  margin: 8px 0 32px 0;
}

input {
  height: 26px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--brand-border-gray);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  margin: 8px 0 32px 0;
}

label {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}

button {
  border-radius: 16px;
}

</style>
