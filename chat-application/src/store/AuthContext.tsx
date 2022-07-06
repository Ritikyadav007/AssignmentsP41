/* eslint-disable react/jsx-no-constructed-context-values */
import { collection, getDocs } from '@firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { getDownloadURL, ref } from 'firebase/storage';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import auth, {
  LogIn,
  LogOut,
  ResetPassword,
  signUp,
} from '../Services/AuthService';
import storage from '../Services/StorageService';
import db from '../Services/UserService';

type AuthContextProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<any | null>(null);

export default function AuthContextProvider(props: AuthContextProviderProps) {
  const { children } = props;
  const [user, setUser] = useState<any>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
