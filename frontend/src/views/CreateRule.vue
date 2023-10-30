<script setup lang="ts">

</script>

<template>
  <div class="back-title-top-block">
    <router-link to="/control_panel" class="back-title-back">
      <span class="mdi mdi-chevron-left"></span>
      <span class="back-title-span-back">Назад</span>
    </router-link>
    <h3>Создание логики</h3>
  </div>

  <div class="container">
    <div class="item-label">
      <label>Биржа</label>
      <div class="info-wrapper">
        <span class="mdi mdi-information"></span>
        <div class="tooltip">Это информационное окошко</div>
      </div>
    </div>
    <select></select>

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
  height: 26px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--brand-border-gray);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  margin: 8px 0 32px 0;
}
</style>