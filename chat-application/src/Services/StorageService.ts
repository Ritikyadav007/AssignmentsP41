import { getStorage, ref, uploadBytes } from 'firebase/storage';
import firebaseApp from './FirebaseService';

const storage = getStorage(firebaseApp.get());

export const uploadImage = (image: any, userId: string) => {
  if (image == null) return;
  const imageRef = ref(storage, `assets/${userId}/profileimage.jpg`);
  uploadBytes(imageRef, image).then(() => {
    alert('image uploaded');
  });
};

// export const getImageUrl = (userId: string) => {
//   let imageurl='';
//   const imageRef = ref(storage, `assets/${userId}/profileimage.jpg`);
//   getDownloadURL(imageRef).then((url) => {
//     imageurl = url;
//   });
//   return imageurl;
// };

export default storage;
