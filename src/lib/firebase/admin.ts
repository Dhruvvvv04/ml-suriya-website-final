import { getApps, initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

function initFirebase() {
  if (!getApps().length) {
    if (!process.env.FIREBASE_PROJECT_ID || !process.env.FIREBASE_PRIVATE_KEY || !process.env.FIREBASE_CLIENT_EMAIL) {
      throw new Error('Firebase environment variables are completely missing in Vercel. Please check Vercel Environment Variables settings.');
    }

    try {
      // Handle both actual newlines, literal \n characters, and accidental surrounding quotes
      let formattedKey = process.env.FIREBASE_PRIVATE_KEY || '';
      
      if (formattedKey.startsWith('"') && formattedKey.endsWith('"')) {
        formattedKey = formattedKey.substring(1, formattedKey.length - 1);
      } else if (formattedKey.startsWith("'") && formattedKey.endsWith("'")) {
        formattedKey = formattedKey.substring(1, formattedKey.length - 1);
      }
      
      formattedKey = formattedKey.replace(/\\n/g, '\n');

      initializeApp({
        credential: cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: formattedKey,
        }),
      });
    } catch (error: any) {
      throw new Error('Firebase initialization failed: ' + (error.message || String(error)));
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
