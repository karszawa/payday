<template lang="pug">
  #app
    header#header
      MonthTab
    main
      WorkList
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import HelloWorld from './components/HelloWorld.vue';
import MonthTab from './components/MonthTab.vue';
import WorkList from './components/WorkList.vue';

@Component({
  components: {
    HelloWorld,
    MonthTab,
    WorkList,
  },
})
export default class App extends Vue {
  private mounted() {
    this.$store.dispatch('changeTargetMonth');
  }
}
</script>

<style lang="scss">
body {
  margin: 0px;
}

ul, menu, dirs {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#header {
  width: 100%;
}
</style>
