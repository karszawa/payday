import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { DateTime } from 'luxon';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    monthSelectionDialogOpended: false,
    targetMonth: DateTime.local(),
  },
  mutations: {
    openMonthSelectionDialog(state) {
      state.monthSelectionDialogOpended = true;
    },
    closeMonthSelectionDialog(state) {
      state.monthSelectionDialogOpended = false;
    },
    setTargetMonth(state, dateTime: DateTime) {
      state.targetMonth = dateTime;
    },
  },
  actions: {

  },
  getters: {

  },
});
