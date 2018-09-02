import Vue from 'vue';
import Vuex from 'vuex';
import { DateTime } from 'luxon';
import { db } from './lib/firebase';
import { WorkRecord } from '@/lib/types';
import { docToWorkRecord } from '@/lib/converters';
import { firebase, auth } from '@/lib/firebase';

interface State {
  user?: firebase.User;
  monthSelectionDialogOpended: boolean;
  addWorkDialogOpended: boolean;
  targetMonth: DateTime;
  workRecords: WorkRecord[];
}

const state: State = {
  user: undefined,
  monthSelectionDialogOpended: false,
  addWorkDialogOpended: false,
  targetMonth: DateTime.local(),
  workRecords: [],
};

Vue.use(Vuex);

let unsubscribe: (() => void) | null = null;
const provider = new firebase.auth.GoogleAuthProvider();

export default new Vuex.Store<State>({
  state,
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
    setUser(state, user: firebase.User) {
      state.user = user;
    }
  },
  actions: {
    changeTargetMonth({ commit, state }, nextMonth: DateTime = DateTime.local()) {
      if (unsubscribe) {
        unsubscribe();
      }

      if (!state.user) {
        alert('Please login');
        return;
      }

      unsubscribe = db.collection('workRecords')
        .where('startedAt', '>=', nextMonth.startOf('month').toJSDate())
        .where('startedAt', '<=', nextMonth.endOf('month').toJSDate())
        .where('uid', '==', state.user.uid)
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

    login({ commit, dispatch }) {
      auth.signInWithPopup(provider).then((result) => {
        commit('setUser', result.user);
        dispatch('changeTargetMonth');
      });
    },
  },
});
