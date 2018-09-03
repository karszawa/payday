<template lang="pug">
  transition(
    name="modal"
    v-if="addWorkDialogOpended || targetWorkRecord"
    @close="closeAddWorkDialog"
  )
    .modal-mask
      .modal-container
        slot(name="header"): .modal-header New Record

        slot(name="body")
          .modal-body
            .form-line
              label Started at
              datetime(v-model="startedAt" type="datetime")
            .form-line
              label Ended at
              datetime(v-model="endedAt" type="datetime")
            .form-line
              label Comment
              textarea(v-model="content")

        slot(name="footer")
          .modal-footer
            button.close-button(@click="closeAddWorkDialog") Close
            button.submit-button(@click="submit") Submit
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapMutations, mapActions } from 'vuex';
import { newWorkRecord, updateWorkRecord } from '../lib/queries/work-record';
import { DateTime } from 'luxon';
import { WorkRecord } from '@/lib/types';

export default Vue.extend({
  props: {
    targetWorkRecord: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      startedAt: '',
      endedAt: '',
      content: '',
    };
  },
  watch: {
    targetWorkRecord: {
      immediate: true,
      handler(val: WorkRecord | undefined, oldVal: WorkRecord | undefined) {
        if (typeof val === 'undefined') {
          this.startedAt = '';
          this.endedAt = '';
          this.content = '';
        } else {
          this.startedAt = DateTime.fromJSDate(val.startedAt).toISO();
          this.endedAt = DateTime.fromJSDate(val.endedAt).toISO();
          this.content = val.content;
        }
      }
    },
  },
  computed: {
    ...mapState([ 'addWorkDialogOpended' ]),
  },
  methods: {
    submit() {
      const workRecord = {
        uid: this.$store.state.user.uid,
        startedAt: DateTime.fromISO(this.startedAt).toJSDate(),
        endedAt: DateTime.fromISO(this.endedAt).toJSDate(),
        content: this.content,
        intervals: [],
      };

      if (this.targetWorkRecord) {
        updateWorkRecord(this.targetWorkRecord.id, workRecord).then(() => {
          this.closeAddWorkDialog();
        });
      } else {
        newWorkRecord(workRecord).then(() => {
          this.closeAddWorkDialog();
        });
      }
    },
    closeAddWorkDialog() {
      this.$store.commit('closeAddWorkDialog');
      this.$store.commit('resetTargetWorkRecord');
    },
  },
});
</script>

<style lang="postcss" scoped>
.modal-mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  display: flex;
  justify-content: center;
}

.modal-enter-active {
  transition: all .3s ease;
}

.modal-leave-active {
  transition: all .3s ease;
}

.modal-enter, .modal-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

.modal-container {
  display: grid;
  grid-template-rows: max-content max-content 1fr;
}

.modal-header {
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 20px;
}

.modal-body {
  margin-bottom: 24px;
  display: grid;
  width: 100%;
}

.form-line {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
}

textarea {
  border-color: #ddd;
  width: 170px;
  height: 30px;
}

button {
  border: none;
  border-radius: 4px;
  font-size: 14px;
  padding: 10px 40px;
  cursor: pointer;

  &:active {
    box-shadow: none;
  }
}

.close-button {
  margin-right: 24px;
  background-color: whitesmoke;
}

.submit-button {
  color: white;
  background-color: var(--main-color);
}
</style>
