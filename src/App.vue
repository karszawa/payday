<template lang="pug">
  #app
    LoginForm(v-if="!user")
    template(v-else)
      header#header
        MonthTab
      main
        WorkList
        AddWorkButton
      FormModal
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import Datetime from 'vue-datetime';
import 'vue-datetime/dist/vue-datetime.css';

import MonthTab from './components/MonthTab.vue';
import WorkList from './components/WorkList.vue';
import AddWorkButton from './components/AddWorkButton.vue';
import FormModal from './components/FormModal.vue';
import LoginForm from './components/LoginForm.vue';

Vue.use(Datetime);

@Component({
  components: {
    MonthTab,
    WorkList,
    AddWorkButton,
    FormModal,
    LoginForm,
  },
})
export default class App extends Vue {
  private mounted() {
    if (this.$store.state.user) {
      this.$store.dispatch('changeTargetMonth');
    }
  }

  @State user: firebase.User | undefined = undefined
}
</script>

<style lang="postcss">
body {
  margin: 0px;
}

ul, menu, dirs {
  margin: 0;
}

:root {
  --main-color: #303f9f;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#header {
  width: 100%;
}

button {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  outline: none;
  padding: 0;
  appearance: none;
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
