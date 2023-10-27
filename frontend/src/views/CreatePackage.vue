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
});

const handler1 = async () => {
  console.log('Handler 1');
  try {
    let response = await postRequest('/testhook', { url: data.chartURL }, {})
    data.chartData.indicatorCode = response.data.res_code;
    data.chartData.plots = response.data.plots;
  } catch (error) {
    console.log('Ошибка ', error.response.status)
  }
}

const handler2 = async () => {
  console.log('Handler 2');
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

    //setTimeout(() => {
    //  this.$router.push('/control_panel');
    //}, 1000);

  } catch (error) {
    console.log('Ошибка ', error.response.status)
  }
}
</script>

<template>
  <h3>Создание пакета</h3>

  <div class="item item1">
    <div class="item-label">
      <div class="progress-icon"><span>1</span></div>
      <label>Введите ссылку на чарт</label>
      <span class="mdi mdi-information"></span>
    </div>
    <input type="text" v-model="data.chartURL">
    <button @click="handler1">Обработать ссылку</button>
  </div>

  <div class="item item2">
    <div class="item-label">
      <div class="progress-icon"><span>2</span></div>
      <label>Создайте индикатор с кодом ниже:</label>
      <span class="mdi mdi-information"></span>
    </div>
    <textarea readonly v-model="data.chartData.indicatorCode"></textarea>
    <button @click="handler2">Индиктор создан</button>
  </div>

  <div class="item item3">
    <div class="item-label">
      <div class="progress-icon"><span>3</span></div>
      <label>Выберите слот</label>
      <span class="mdi mdi-information"></span>
    </div>
    <select v-model="data.selectedSlot">
      <option v-for="slot in data.slots" :key="slot" :value="slot">
        {{ slot }}
      </option>
    </select>
    <button @click="handler3">Создать код алерта</button>
  </div>

  <div class="item item4">
    <div class="item-label">
      <div class="progress-icon"><span>4</span></div>
      <label>Создайте алерт с кодом ниже:</label>
      <span class="mdi mdi-information"></span>
    </div>
    <textarea readonly v-model="data.alertCode"></textarea>
    <button @click="handler4">Алерт создан</button>
  </div>

  <div class="item item5">
    <div class="item-label">
      <div class="progress-icon"><span>5</span></div>
      <label>Введите название пакета</label>
      <span class="mdi mdi-information"></span>
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