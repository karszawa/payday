<template lang="pug">
  .container
    ul: li(v-for="record in workRecords" v-bind:key="record.id")
      | {{ record.id }}
</template>

<script lang="ts">
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([ 'workRecords' ]),
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
}
</style>
