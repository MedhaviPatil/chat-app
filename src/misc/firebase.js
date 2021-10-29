import firebase from 'firebase/app';

const config = {
  apiKey: 'AIzaSyB28dmR-jeSMt_7UIaT2tRiVerKC4Nr8xI',
  authDomain: 'chat-web-app-11016.firebaseapp.com',
  databaseURL:
    'https://chat-web-app-11016-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'chat-web-app-11016',
  storageBucket: 'chat-web-app-11016.appspot.com',
  messagingSenderId: '1043393757738',
  appId: '1:1043393757738:web:350551c256cc3629fab953',
};

const app = firebase.initializeApp(config);
