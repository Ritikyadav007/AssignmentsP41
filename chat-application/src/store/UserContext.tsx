/* eslint-disable react/jsx-no-constructed-context-values */
import { collection, getDocs } from '@firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import storage from '../Services/StorageService';
import db from '../Services/UserService';

type UserContextProviderProps = {
  children: ReactNode;
};

const UserContext = createContext<any | null>(null);

export default function UserContextProvider(props: UserContextProviderProps) {
  const { children } = props;
  const [friendList, setFriendList] = useState<any[]>();

  useEffect(() => {
    getDocs(collection(db, 'users')).then((allUsersSnapshot) => {
      const allUsersData = allUsersSnapshot.docs.map(async (userDoc) => {
        const userData = userDoc.data();
        const { uid } = userData;
        const imageRef = ref(storage, `assets/${uid}/profileimage.jpg`);
        const imageURL = await getDownloadURL(imageRef);
        return { ...userData, url: imageURL };
      });

      Promise.all(allUsersData).then((updatedAllUserData) => {
        setFriendList(updatedAllUserData);
      });
    });
  }, []);

  return (
    <UserContext.Provider value={{ friendList }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
