import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging/sw';
import { onBackgroundMessage } from 'firebase/messaging/sw';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyAih8oXNGUo1VpOLXrP9w5y6AIT-JsjIBI',
  authDomain: 'chat-app-e3bb9.firebaseapp.com',
  projectId: 'chat-app-e3bb9',
  storageBucket: 'chat-app-e3bb9.appspot.com',
  messagingSenderId: '123130287849',
  appId: '1:123130287849:web:591d4f05b73cb33604c278',
  databaseURL: 'https://chat-app-e3bb9-default-rtdb.firebaseio.com',
});

const messaging = getMessaging(firebaseApp);
// onBackgroundMessage(messaging, (payload) => {
//   console.log(
//     '[firebase-messaging-sw.js] Received background message ',
//     payload,
//   );
//   // Customize notification here
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: '/firebase-logo.png',
//   };
//   self.registration.showNotification(notificationTitle, notificationOptions);
// });

onBackgroundMessage(messaging, (payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload,
  );
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
