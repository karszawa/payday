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
  @extend centerize;
  // TODO: Use @extend elevation-6;

  position: fixed;
  bottom: 16px;
  right: 16px;
  color: white;
  background-color: #303f9f;
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
