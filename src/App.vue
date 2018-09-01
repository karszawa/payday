<template lang="pug">
  #app
    header#header
      MonthTab
    main
      WorkList
      AddWorkButton
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import HelloWorld from './components/HelloWorld.vue';
import MonthTab from './components/MonthTab.vue';
import WorkList from './components/WorkList.vue';
import AddWorkButton from './components/AddWorkButton.vue';

@Component({
  components: {
    HelloWorld,
    MonthTab,
    WorkList,
    AddWorkButton,
  },
})
export default class App extends Vue {
  private mounted() {
    this.$store.dispatch('changeTargetMonth');
  }
}
</script>

<style lang="postcss">
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

%centerize {
  display: flex;
  justify-content: center;
  align-items: center;
}

@for $i from 1 through 24 {
  %elevation-$i {
    $z-index: $(i)px;
    box-shadow: 0 4px  $z-index rgba(#000, .2);
  }
}
</style>
