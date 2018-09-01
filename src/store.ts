import Vue from 'vue';
import Vuex from 'vuex';
import { DateTime } from 'luxon';
import { db } from './lib/firebase';
import { WorkRecord } from '@/lib/types';
import { docToWorkRecord } from '@/lib/converters';

Vue.use(Vuex);

let unsubscribe: (() => void) | null = null;

export default new Vuex.Store({
  state: {
    monthSelectionDialogOpended: false,
    addWorkDialogOpended: false,
    targetMonth: DateTime.local(),
    workRecords: [],
  },
  mutations: {
    openMonthSelectionDialog(state) {
      state.monthSelectionDialogOpended = true;
    },
    closeMonthSelectionDialog(state) {
      state.monthSelectionDialogOpended = false;
    },
    openAddWorkDialog(state) {
      state.addWorkDialogOpended = true;
    },
    closeAddWorkDialog(state) {
      state.addWorkDialogOpended = false;
    },
    setTargetMonth(state, dateTime: DateTime) {
      state.targetMonth = dateTime;
    },
    setWorkRecords(state, workRecords) {
      state.workRecords = workRecords;
    },
  },
  actions: {
    changeTargetMonth({ commit }, nextMonth: DateTime = DateTime.local()) {
      if (unsubscribe) {
        unsubscribe();
      }

      unsubscribe = db.collection('workRecords')
        .where('startedAt', '>=', nextMonth.startOf('month').toJSDate())
        .where('startedAt', '<=', nextMonth.endOf('month').toJSDate())
        .onSnapshot((snapshot) => {
          if (!snapshot) {
            alert('Failed to fetch working records.');

            return;
          }

          const workRecords: WorkRecord[] = [];

          snapshot.forEach((doc) => {
            workRecords.push(docToWorkRecord(doc));
          });

          commit('setWorkRecords', workRecords);
          commit('setTargetMonth', nextMonth);
        });
    },
  },
  getters: {

  },
});
