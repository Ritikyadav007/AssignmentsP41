import { getDatabase } from 'firebase/database';
import firebaseApp from './FirebaseService';

const realtimeDb = getDatabase(firebaseApp.get());

export default realtimeDb;
