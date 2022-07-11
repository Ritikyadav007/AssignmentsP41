import { getDatabase } from 'firebase/database';
import firebaseApp from './FirebaseService';

const database = getDatabase(firebaseApp.get());

export default database;
