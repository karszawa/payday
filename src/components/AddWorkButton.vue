<template lang="pug">
  .container(@click='openAddWorkDialog')
    span.text +
</template>

<script lang="ts">
import { mapMutations } from 'vuex';

export default {
  methods: mapMutations([ 'openAddWorkDialog' ]),
};
</script>

<style scoped lang="postcss">
.container {
  // TODO: Use @extend centerize;
  // TODO: Use @extend elevation-6;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 16px;
  right: 16px;
  color: white;
  background-color: var(--main-color);
  padding: 4px;
  width: 40px;
  height: 40px;
  font-size: 28px;
  font-weight: bold;
  border-radius: 40px;
  box-shadow: 0 6px 5px rgba(#000, 0.2);
  cursor: pointer;
}
</style>
