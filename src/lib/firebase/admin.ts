import { getApps, initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

function initFirebase() {
  if (!getApps().length) {
    if (!process.env.FIREBASE_PROJECT_ID || !process.env.FIREBASE_PRIVATE_KEY || !process.env.FIREBASE_CLIENT_EMAIL) {
      console.warn('Firebase admin initialization skipped: Missing environment variables.');
      return null;
    }

    try {
      // Handle both actual newlines and literal \n characters
      let formattedKey = process.env.FIREBASE_PRIVATE_KEY;
      if (formattedKey.includes('\\n')) {
        formattedKey = formattedKey.replace(/\\n/g, '\n');
      }

      initializeApp({
        credential: cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: formattedKey,
        }),
      });
    } catch (error) {
      console.error('Firebase admin initialization error', error);
      return null;
    }
  }
  return getFirestore();
}

// Export a getter function instead of a direct instance so it is evaluated at runtime
export const getDb = () => {
  const db = initFirebase();
  if (!db) throw new Error('Database not initialized');
  return db;
};
