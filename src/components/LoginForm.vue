<template lang="pug">
  .container
    strong.title Welcome to Payday
    span.message Payday helps workers to make working records.
    button(@click="login") Login via Google
</template>

<script lang="ts">
import Vue from 'vue'
import { Action } from 'vuex-class';
import Component from 'vue-class-component';

@Component
export default class LoginForm extends Vue {
  @Action login: any
};
</script>

<style lang="postcss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

strong.title {
  margin-bottom: 80px;
}

span.message {
  margin-bottom: 80px;
}

button {
  border: none;
  border-radius: 4px;
  font-size: 14px;
  padding: 10px 40px;
  cursor: pointer;
  color: white;
  background-color: var(--main-color);

  &:active {
    box-shadow: none;
  }
}
</style>

