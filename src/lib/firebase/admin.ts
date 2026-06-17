import { getApps, initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

function initFirebase() {
  if (!getApps().length) {
    if (!process.env.FIREBASE_PROJECT_ID || !process.env.FIREBASE_PRIVATE_KEY || !process.env.FIREBASE_CLIENT_EMAIL) {
      throw new Error('Firebase environment variables are completely missing in Vercel. Please check Vercel Environment Variables settings.');
    }

    try {
      // Reconstruct the PEM format completely to ignore any copy-paste formatting issues
      let formattedKey = process.env.FIREBASE_PRIVATE_KEY || '';
      
      // Remove all quotes, headers, footers, and whitespace
      const baseKey = formattedKey
        .replace(/"/g, '')
        .replace(/'/g, '')
        .replace(/\\n/g, '')
        .replace(/-----BEGIN PRIVATE KEY-----/g, '')
        .replace(/-----END PRIVATE KEY-----/g, '')
        .replace(/\s+/g, '');
        
      // Re-chunk into 64 characters per line
      const keyChunks = baseKey.match(/.{1,64}/g);
      if (keyChunks) {
        formattedKey = `-----BEGIN PRIVATE KEY-----\n${keyChunks.join('\n')}\n-----END PRIVATE KEY-----\n`;
      }

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
