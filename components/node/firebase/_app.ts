import { cert, initializeApp, getApp } from 'firebase-admin/app';

// https://stackoverflow.com/a/71012569
function getFirebaseApp() {
    let app;
    
    try {
        app = getApp(process.env.FIREBASE_PROJECT_ID);
    } catch (e) {
        app = undefined;
    }

    if (!app) {
        return initializeApp({
            credential: cert({
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey: process.env.FIREBASE_PRIVATE_KEY,
                projectId: process.env.FIREBASE_PROJECT_ID
            }),
        }, process.env.FIREBASE_PROJECT_ID);
    }

    return app;
};

export default getFirebaseApp();
