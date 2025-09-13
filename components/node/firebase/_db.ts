import { getFirestore } from 'firebase-admin/firestore';
import app from './_app';

export default getFirestore(app);
