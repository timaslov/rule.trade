<script setup lang="ts">
import {reactive} from "vue";
import {postRequest, getRequest} from "../services/http.ts";

interface ChartData {
  indicatorCode: string;
  plots: string[];
}

const data = reactive({
  chartURL: 'https://www.tradingview.com/chart/Y0qHLrDY/?symbol=BINANCE%3ABNBUSDT.P',
  chartData: {} as ChartData,
  slots: [1, 2, 3, 4],
  selectedSlot: 0,
  alertCode: '',
  packageName: '',
  stages: [false, false, false, false, false],
});

const handler1 = async () => {
  console.log('Handler 1');
  try {
    let response = await postRequest('/testhook', { url: data.chartURL }, {})
    data.chartData.indicatorCode = response.data.res_code;
    data.chartData.plots = response.data.plots;
    data.stages[0] = true;
  } catch (error) {
    console.log('Ошибка ', error.response.status)
  }
}

const handler2 = async () => {
  console.log('Handler 2');
  data.stages[1] = true;
}

const handler3 = async () => {
  console.log('Handler 3');
  try {
    let body = {
      slotnumber: data.selectedSlot,
      code: data.chartData.indicatorCode,
      plots: data.chartData.plots.toString(),
    }
    let response = await postRequest('/createalert', body, {})
    data.alertCode = JSON.stringify(response.data)
    data.stages[2] = true;
  } catch (error) {
    console.log('Ошибка ', error.response.status)
  }
}

const handler4 = async () => {
  console.log('Handler 4');
  try {
    let parameters = {
      slot: data.selectedSlot
    }
    let response = await getRequest('/getinds', parameters)

    if (response.data.plots === null)
      console.log('Ошибка, плотов нет')
    else
      console.log('Успех')

    data.stages[3] = true;
  } catch (error) {
    console.log('Ошибка ', error.response.status)
  }
}

const handler5 = async () => {
  console.log('Handler 5');
  try {
    let body = {
      slotnumber: data.selectedSlot,
      plots: data.chartData.plots,
      name: data.packageName
    }
    await postRequest('/saveplots', body, {})

    data.stages[4] = true;
    //setTimeout(() => {
    //  this.$router.push('/control_panel');
    //}, 1000);

  } catch (error) {
    console.log('Ошибка ', error.response.status)
  }
}
</script>

<template>
  <div class="back-title-top-block">
    <router-link to="/control_panel" class="back-title-back">
      <span class="mdi mdi-chevron-left"></span>
      <span class="back-title-span-back">Назад</span>
    </router-link>
    <h3>Создание пакета</h3>
  </div>

  <div class="item">
    <div class="item-label">
      <div class="progress-icon"><span>1</span></div>
      <label>Введите ссылку на чарт</label>
      <div class="info-wrapper">
        <span class="mdi mdi-information"></span>
        <div class="tooltip">Это информационное окошко</div>
      </div>
    </div>
    <input type="text" v-model="data.chartURL">
    <button @click="handler1">Обработать ссылку</button>
  </div>

  <div class="item" v-if="data.stages[0]">
    <div class="item-label">
      <div class="progress-icon"><span>2</span></div>
      <label>Создайте индикатор с кодом ниже:</label>
      <div class="info-wrapper">
        <span class="mdi mdi-information"></span>
        <div class="tooltip">Это информационное окошко</div>
      </div>
    </div>
    <textarea readonly v-model="data.chartData.indicatorCode"></textarea>
    <button @click="handler2">Индиктор создан</button>
  </div>

  <div class="item" v-if="data.stages[1]">
    <div class="item-label">
      <div class="progress-icon"><span>3</span></div>
      <label>Выберите слот</label>
      <div class="info-wrapper">
        <span class="mdi mdi-information"></span>
        <div class="tooltip">Это информационное окошко</div>
      </div>
    </div>
    <select v-model="data.selectedSlot">
      <option v-for="slot in data.slots" :key="slot" :value="slot">
        {{ slot }}
      </option>
    </select>
    <button @click="handler3">Создать код алерта</button>
  </div>

  <div class="item" v-if="data.stages[2]">
    <div class="item-label">
      <div class="progress-icon"><span>4</span></div>
      <label>Создайте алерт с кодом ниже:</label>
      <div class="info-wrapper">
        <span class="mdi mdi-information"></span>
        <div class="tooltip">Это информационное окошко</div>
      </div>
    </div>
    <textarea readonly v-model="data.alertCode"></textarea>
    <button @click="handler4">Алерт создан</button>
  </div>

  <div class="item" v-if="data.stages[3]">
    <div class="item-label">
      <div class="progress-icon"><span>5</span></div>
      <label>Введите название пакета</label>
      <div class="info-wrapper">
        <span class="mdi mdi-information"></span>
        <div class="tooltip">Это информационное окошко</div>
      </div>
    </div>
    <input type="text" v-model="data.packageName">
    <button @click="handler5">Сохранить пакет</button>
  </div>

</template>

<style scoped>
.item {
  width: 80vw;
  max-width: 1138px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0 32px 0;
}

.item-label {
  display: flex;
  align-items: center;
}

.item-label label {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}

.item-label span {
  font-size: 13px;
  font-weight: 500;
  line-height: 24px;
}

.progress-icon {
  background-color: var(--brand-blue);
  min-width: 24px;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 24px;
  margin: 0 8px 0 0;
}

.mdi-information {
  color: var(--brand-info);
  margin: 0 0 0 8px;
}

input {
  height: 26px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--brand-border-gray);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  margin: 8px 0 32px 0;
}

textarea {
  min-height: 150px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--brand-border-gray);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  margin: 8px 0 32px 0;
  resize: vertical;
}

select {
  height: 26px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--brand-border-gray);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  margin: 8px 0 32px 0;
}

button {
  border-radius: 16px;
}
</style>