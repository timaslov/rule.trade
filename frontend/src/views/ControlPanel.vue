<script setup lang="ts">
import {ref} from 'vue';

const exchanges = ['binance', 'huobi', 'bybit'];
const packages = ['from postman test', 'test package_9_30', 'test package'];
const logics = ['test logic 12 39', 'test logic 13 57', 'test logic 14 10'];
const rules = ['test rule 1', 'test rule 2', 'test rule 3'];

</script>

<template>
  <h3>Панель управления</h3>
  <div class="container">

    <div class="container-item">
      <div class="label-container">
        <label>Подключенные биржи</label>
        <v-icon
            icon="mdi-information"
            color="var(--brand-info)"
            size="x-small"
        ></v-icon>
      </div>
      <div class="container-item-list">
        <div v-for="exch in exchanges" class="container-item-list-item">
          <div class="container-item-list-item-name">{{exch}}</div>
          <div class="container-item-list-item-buttons">
            <div class="container-item-list-item-button">
              <v-icon
                  icon="mdi-pencil"
                  color="var(--brand-border-gray)"
                  size="x-small"
              ></v-icon>
            </div>
            <div class="container-item-list-item-button">
              <v-icon
                  icon="mdi-close"
                  color="var(--brand-border-gray)"
                  size="small"
              ></v-icon>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-item">
      <div class="label-container">
        <label>Сохраненные пакеты</label>
        <v-icon
            icon="mdi-information"
            color="var(--brand-info)"
            size="x-small"
        ></v-icon>
      </div>
      <div class="container-item-list">
        <div v-for="pack in packages" class="container-item-list-item">
          <div class="container-item-list-item-name">{{pack}}</div>
          <div class="container-item-list-item-buttons">
            <div class="container-item-list-item-button">
              <v-icon
                  icon="mdi-pencil"
                  color="var(--brand-border-gray)"
                  size="x-small"
              ></v-icon>
            </div>
            <div class="container-item-list-item-button">
              <v-icon
                  icon="mdi-close"
                  color="var(--brand-border-gray)"
                  size="small"
              ></v-icon>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-item">
      <div class="label-container">
        <label>Сформированная логика</label>
        <v-icon
            icon="mdi-information"
            color="var(--brand-info)"
            size="x-small"
        ></v-icon>
      </div>
      <div class="container-item-list">
        <div v-for="logic in logics" class="container-item-list-item">
          <div class="container-item-list-item-name">{{logic}}</div>
          <div class="container-item-list-item-buttons">
            <div class="container-item-list-item-button">
              <v-icon
                  icon="mdi-pencil"
                  color="var(--brand-border-gray)"
                  size="x-small"
              ></v-icon>
            </div>
            <div class="container-item-list-item-button">
              <v-icon
                  icon="mdi-close"
                  color="var(--brand-border-gray)"
                  size="small"
              ></v-icon>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-item">
      <div class="label-container">
        <label>Торговые правила</label>
        <v-icon
            icon="mdi-information"
            color="var(--brand-info)"
            size="x-small"
        ></v-icon>
      </div>
      <div class="container-item-list">
        <div v-for="rule in rules" class="container-item-list-item">
          <div class="container-item-list-item-name">{{rule}}</div>
          <div class="container-item-list-item-buttons">
            <div class="container-item-list-item-button">
              <v-icon
                  icon="mdi-pencil"
                  color="var(--brand-border-gray)"
                  size="x-small"
              ></v-icon>
            </div>
            <div class="container-item-list-item-button">
              <v-icon
                  icon="mdi-close"
                  color="var(--brand-border-gray)"
                  size="small"
              ></v-icon>
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
}

.container-item-list-item {
  display: flex;
  flex-direction: row;
  margin: 0 16px 0 0;
}

.container-item-list-item-name {
  width: 177px;
  height: 80px;
  display: flex;
  margin: 0 8px 0 0;
  border: 1px solid var(--brand-border-gray);
  border-radius: 8px;
  align-items: center;
  justify-content: center;
}

.container-item-list-item-buttons {
  display: flex;
  flex-direction: column;
}

.container-item-list-item-button {
  width: 24px;
  height: 24px;
  margin: 0 0 8px 0;
  border: 1px solid var(--brand-border-gray);
  border-radius: 4px;
}
</style>