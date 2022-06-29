import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAih8oXNGUo1VpOLXrP9w5y6AIT-JsjIBI',
  authDomain: 'chat-app-e3bb9.firebaseapp.com',
  projectId: 'chat-app-e3bb9',
  storageBucket: 'chat-app-e3bb9.appspot.com',
  messagingSenderId: '123130287849',
  appId: '1:123130287849:web:591d4f05b73cb33604c278',
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;
