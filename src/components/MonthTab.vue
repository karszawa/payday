<template lang="pug">
  .container
    datetime(
      v-model="targetMonth"
      format="LLLL yyyy"
      input-class="target-month-input"
      @close="changeTargetMonth"
    )
    .under-triangle
</template>

<script lang="ts">
import { mapState, mapMutations } from 'vuex';

export default {
  data: function() {
    return {
      targetMonth: this.$store.state.targetMonth.toISO(),
    };
  },
  methods: {
    changeTargetMonth() {
      this.$store.commit('setTargetMonth', this.targetMonth);
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--main-color);
  color: white;
}

.under-triangle {
  margin-left: 8px;
  margin-top: 3px;
  width: 0px;
  height: 0px;
  border: 6px solid transparent;
  border-top: 6px solid white;
}
</style>

<style>
.target-month-input {
  background-color: transparent;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: white;
  font-size: 14px;
  border: none;
  width: 110px;
  cursor: pointer;
}
</style>
