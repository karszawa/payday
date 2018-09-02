<template lang="pug">
  .container
    ul: li(v-for="record in workRecords" v-bind:key="record.id")
      span.record-item.month
        | {{ getDate(record.startedAt) }}
      span.record-item.time
        | {{ getTime(record.startedAt) }} - {{ getTime(record.endedAt) }}
      span.record-item.duration
        | {{ formatInterval(record.startedAt, record.endedAt) }}
      span.record-item.comment
        | {{ record.content }}
</template>

<script lang="ts">
import { mapState } from 'vuex';
import { DateTime, Interval } from 'luxon';

export default {
  computed: {
    ...mapState([ 'workRecords' ]),
  },
  methods: {
    formatInterval(startedAt: Date, endedAt: Date): string {
      const d = Interval.fromDateTimes(startedAt, endedAt).toDuration([ 'hour', 'minute' ]);

      return `${d.hours}:${String(Math.floor(d.minutes)).padStart(2, '0')}`
    },
    getDate(date: Date) {
      return DateTime.fromJSDate(date).toFormat('LLL d, ccc');
    },
    getTime(date: Date) {
      return DateTime.fromJSDate(date).toFormat('T')
    },
    formatDate(date: Date): string {
      return DateTime.fromJSDate(date).toFormat('LLL d, ccc T');
    },
  }
};
</script>

<style scoped lang="scss">
.container {
  width: calc(100% - 40px);
  padding: 32px 20px;
}

ul {
  -webkit-margin-before: 0px;
  -webkit-padding-start: 0px;
}

li {
  display: grid;
  grid-template-columns: 110px 116px 60px 1fr;
  list-style: none;
  margin-bottom: 16px;
  padding: 4px;
  cursor: pointer;

  &:hover {
    background-color: #efefef;
    border-radius: 8px;
    border: none;
  }
}

.record-item {
  display: block;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #ccc;
  white-space: nowrap;

  &:last-child {
    margin-right: 0px;
    border-right: none;
  }

  &.comment {
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
