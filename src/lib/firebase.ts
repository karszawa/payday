import * as firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyDNWsHJaJjMMEl_8aZZT-JwGtA5ytPnptM',
  authDomain: 'payday-f01d7.firebaseapp.com',
  databaseURL: 'https://payday-f01d7.firebaseio.com',
  projectId: 'payday-f01d7',
  storageBucket: 'payday-f01d7.appspot.com',
  messagingSenderId: '308725609679',
};

firebase.initializeApp(config);

const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

const auth = firebase.auth();

export { db, auth };
