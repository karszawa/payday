<template lang="pug">
  .container()
    .target-month {{ formattedTargetMonth }}
    .under-triangle
</template>

<script lang="ts">
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    formattedTargetMonth(): string {
      // TODO: Typing
      return (this as any).$store.state.targetMonth.toFormat('LLLL yyyy');
    },
  },
  method: {
    ...mapMutations([ 'openMonthSelectionDialog' ]),
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
