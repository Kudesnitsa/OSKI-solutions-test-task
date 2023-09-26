<template>
  <header class="header">
    <div class="header__wrap">
      <div class="header__logo">User testing application</div>
      <button class="header__logout" @click.prevent="logout">Log out</button>
    </div>
  </header>
  <main class="main">
    main
    <RouterView/>
  </main>
</template>

<script lang="ts">
import AuthService from "@/services/auth.service";
import router from "@/router";

export default {
  name: 'LoginForm',
  data() {
    return {
      username: '',
      password: '',
      loginError: ''
    };
  },
  methods: {
    logout() {
      AuthService.logout();
      router.push('/auth/login')
    }
  }
};
</script>
<style scoped>
.header {
  border-bottom: 1px solid var(--color-border);
}

.header__wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}

.main {
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>
