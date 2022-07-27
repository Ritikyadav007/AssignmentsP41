/* eslint-disable no-new */
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import firebaseApp from './FirebaseService';

const messaging = getMessaging(firebaseApp.get());

// function requestPermission() {
//   console.log('Requesting permission...');
//   Notification.requestPermission().then((permission) => {
//     if (permission === 'granted') {
//       console.log('Notification permission granted.');
//     }
//   });
// }

const GetToken = () => {
  debugger;
  return getToken(messaging, {
    vapidKey:
      'BPNPI9-aJDGNjmidWcIdPoVHiQk0iDLVa_4lLKLjGBRROtqL7dXYicGBByt5qSjDUWklf3FzXGM87U-SXJdTKL4',
  })
    .then((Token) => {
      if (Token) {
        console.log('current token for client: ', Token);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log(
          'No registration token available. Request permission to generate one.',
        );
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
  //   try {
  //     currentToken = await getToken(messaging, {
  //       vapidKey:
  //         'BPNPI9-aJDGNjmidWcIdPoVHiQk0iDLVa_4lLKLjGBRROtqL7dXYicGBByt5qSjDUWklf3FzXGM87U-SXJdTKL4',
  //     });
  //     console.log(currentToken);
  //     debugger;
  //     if (currentToken) {
  //       setTokenFound(true);
  //     } else {
  //       setTokenFound(false);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
};

export const onMessageListener = () => {
  return new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
};

export default GetToken;

// const GetToken = async () => {
//     let currentToken = '';
//     getToken(messaging, {
//       vapidKey:
//         'BPNPI9-aJDGNjmidWcIdPoVHiQk0iDLVa_4lLKLjGBRROtqL7dXYicGBByt5qSjDUWklf3FzXGM87U-SXJdTKL4',
//     })
//       .then((token) => {
//         if (token) {
//           currentToken = token;
//         } else {
//           requestPermission();
//           console.log(
//             'No registration token available. Request permission to generate one.',
//           );
//         }
//       })
//       .catch((err) => {
//         console.log('An error occurred while retrieving token. ', err);
//       });
//     return currentToken;
//   };

//   export default GetToken;
