<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username"/>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password"/>
      </div>
      <button type="submit">Login</button>
    </form>
    <div v-if="loginError" class="error">{{ loginError }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      loginError: ''
    };
  },
  methods: {
    login() {
      if (!this.username || !this.password) {
        this.loginError = 'Please enter both username and password.';
      } else {
        this.username = '';
        this.password = '';
        this.loginError = '';
        alert('Login successful!');
      }
    }
  }
};
</script>

<style scoped>

</style>