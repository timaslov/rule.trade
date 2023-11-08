<script setup lang="ts">
import {useStore} from "vuex";
import {computed, ref, reactive} from "vue";
import {postRequest, putRequest} from "../services/http.ts";
import { useRoute } from 'vue-router';

const store = useStore();
const route = useRoute();

const isControlPanelLoading = computed(() => store.state.controlPanel.isLoading);
const isNewRule = ref(true);

const rules = computed(() => store.getters.rules);
const exchanges = computed(() => store.getters.exchanges);
const logics = computed(() => store.getters.logics);
const marketTypes = ref(['spot', 'futures']);
const actions = ref(['buy', 'sell']);
const positionTypes = ref(['fix_amount', 'percent']);

let rule = reactive({
  exchange: '',
  logic_id: '',
  market: '',
  action: '',
  pair: '',
  size_type: '',
  size: 0,
  deal_everytime: false,
  deal_if_no_pos: false,
  tp: false,
  sl: false,
  tp_level: 0,
  sl_level: 0,
  name: '',
  is_active: true
});

if (route.params.id) {
  isNewRule.value = false;
  rule = rules.value.find(item => item.id === route.params.id);
}

const saveRuleHandler = async () => {
  try {
    if (isNewRule.value === true) {
      await postRequest('/createrule', rule, {})
    }
    else {
      rule.is_active = true; // Убрать это когда Макс поправит is_active и active.
      console.log(rule);
      await putRequest('/createrule', rule, {})
    }
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
    <h3>Создание торгового правила</h3>
  </div>

  <div class="container" v-if="!isControlPanelLoading">
    <div class="item-label">
      <label>Биржа</label>
      <div class="info-wrapper">
        <span class="mdi mdi-information"></span>
        <div class="tooltip">Это информационное окошко</div>
      </div>
    </div>
    <select v-model="rule.exchange">
      <option v-for="exchange in exchanges" :key="exchange.id" :value="exchange.id">
        {{ exchange.name }}
      </option>
    </select>

    <div class="item-label">
      <label>Логика</label>
      <div class="info-wrapper">
        <span class="mdi mdi-information"></span>
        <div class="tooltip">Это информационное окошко</div>
      </div>
    </div>
    <select v-model="rule.logic_id">
      <option v-for="logic in logics" :key="logic.id" :value="logic.id">
        {{ logic.name }}
      </option>
    </select>

    <div class="item-label">
      <label>Тип рынка</label>
      <div class="info-wrapper">
        <span class="mdi mdi-information"></span>
        <div class="tooltip">Это информационное окошко</div>
      </div>
    </div>
    <select v-model="rule.market">
      <option v-for="type in marketTypes" :key="type" :value="type">
        {{ type }}
      </option>
    </select>

    <div class="item-label">
      <label>Действие</label>
      <div class="info-wrapper">
        <span class="mdi mdi-information"></span>
        <div class="tooltip">Это информационное окошко</div>
      </div>
    </div>
    <select v-model="rule.action">
      <option v-for="action in actions" :key="action" :value="action">
        {{ action }}
      </option>
    </select>

    <div class="item-label">
      <label>Пара</label>
      <div class="info-wrapper">
        <span class="mdi mdi-information"></span>
        <div class="tooltip">Это информационное окошко</div>
      </div>
    </div>
    <select v-model="rule.pair">
      <option v-for="exchange in exchanges" :key="exchange.id" :value="exchange.id">
        {{ exchange.name }}
      </option>
    </select>

    <div class="item-label">
      <label>Тип позиции</label>
      <div class="info-wrapper">
        <span class="mdi mdi-information"></span>
        <div class="tooltip">Это информационное окошко</div>
      </div>
    </div>
    <select v-model="rule.size_type">
      <option v-for="type in positionTypes" :key="type" :value="type">
        {{ type }}
      </option>
    </select>

    <div class="item-label">
      <label>Размер</label>
      <div class="info-wrapper">
        <span class="mdi mdi-information"></span>
        <div class="tooltip">Это информационное окошко</div>
      </div>
    </div>
    <input type="number" v-model="rule.size">

    <div class="checkbox-container">
      <input type="checkbox" class="checkbox" v-model="rule.deal_everytime">
      <label>Открывать сделку каждый раз при совпадении условий</label>
    </div>

    <div class="checkbox-container">
      <input type="checkbox" class="checkbox" v-model="rule.deal_if_no_pos">
      <label>Открывать сделку только если нет открытых позиций</label>
    </div>

    <div class="checkbox-container">
      <input type="checkbox" class="checkbox" v-model="rule.tp">
      <label>Тэйк-профит</label>
    </div>

    <div class="checkbox-container">
      <input type="checkbox" class="checkbox" v-model="rule.sl">
      <label>Стоп-лосс</label>
    </div>

    <div class="item-label">
      <label>Уровень тейк-профита в %</label>
      <div class="info-wrapper">
        <span class="mdi mdi-information"></span>
        <div class="tooltip">Это информационное окошко</div>
      </div>
    </div>
    <input type="number" v-model="rule.tp_level">

    <div class="item-label">
      <label>Уровень стоп-лосса в %</label>
      <div class="info-wrapper">
        <span class="mdi mdi-information"></span>
        <div class="tooltip">Это информационное окошко</div>
      </div>
    </div>
    <input type="number" v-model="rule.sl_level">

    <div class="item-label">
      <label>Название правила</label>
      <div class="info-wrapper">
        <span class="mdi mdi-information"></span>
        <div class="tooltip">Это информационное окошко</div>
      </div>
    </div>
    <input type="text" v-model="rule.name">

    <button @click="saveRuleHandler">Сохранить</button>
  </div>
</template>

<style scoped>
.container {
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

.mdi-information {
  color: var(--brand-info);
  margin: 0 0 0 8px;
}

select {
  height: 46px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--brand-border-gray);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  margin: 8px 0 32px 0;
  font-size: 16px;
}

option {
  font-size: 16px;
}

input {
  height: 46px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--brand-border-gray);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  margin: 8px 0 32px 0;
}

.checkbox-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 0 34px 0;
}

.checkbox {
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid var(--brand-border-gray);
  margin: 0 8px 0 0;
}

button
{
  border-radius: 16px;
}
</style>