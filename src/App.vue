<template lang="pug">
  #app
    header#header
      MonthTab
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import HelloWorld from './components/HelloWorld.vue';
import MonthTab from './components/MonthTab.vue';

@Component({
  components: {
    HelloWorld,
    MonthTab,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
body {
  margin: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#header {
  position: fixed;
  width: 100%;
}
</style>
