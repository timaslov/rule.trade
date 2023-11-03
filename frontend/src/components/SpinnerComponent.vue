<script setup lang="ts">

</script>

<template>
  <div class="loader-container">
    <span class="loader"></span>
  </div>
</template>

<style scoped>
.loader-container{
  position:fixed;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
}
.loader {
  width: 64px;
  height: 64px;
  border: 10px solid black;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after,
.loader::before {
  content: '';
  box-sizing: border-box;
  position: absolute;
  background: black;
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.loader::before {
  right: -13px;
  bottom: -13px;
}

.loader::after {
  left: -13px;
  top: -13px;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>