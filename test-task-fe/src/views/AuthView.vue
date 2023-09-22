<template>
  <div class="auth-wrap">
    <div class="auth-wrap__title">User testing application</div>
    <div class="auth-wrap__card">
      <RouterView/>
    </div>
  </div>
</template>

<style lang="scss">
:root {
  --auth-background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgb(0, 255, 196) 100%);
}

.auth-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: var(--auth-background);
  width: 100%;
  height: 100%;

  &__title {
    font-size: 24px;
    font-weight: bold;
    margin: 10px;
  }

  &__card {
    width: 420px;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, .2);
    backdrop-filter: blur(20px);
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    color: #fff;
    border-radius: 10px;
    padding: 30px 40px;
  }
}
</style>

<script setup lang="ts">
import {RouterView} from "vue-router";
</script>