<template>
  <div>Test List</div>
  <ul v-if="testList.length">
    <li v-for="item in testList" :key="item.id">
      {{ item.name }}
      {{ item.description }}
      <button @click="navigateToItem(item.id)">Pass this test</button>
    </li>
  </ul>
</template>

<script lang="ts">

import TestService from "@/services/test.service";

export default {
  name: 'testList',
  data() {
    return {
      testList: [],
    };
  },
  mounted() {
    this.getTestList();
  },
  methods: {
    getTestList() {
      TestService.getTestsList().then(
          (resp) => {
            this.testList = resp.data;
          },
          () => {

          }
      );
    },
    navigateToItem(id: string) {
      this.$router.push(`/${id}`);
    }
  }
};
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
