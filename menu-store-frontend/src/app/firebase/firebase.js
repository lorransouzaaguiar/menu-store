import firebase from 'firebase/'
import 'firebase/auth'
import 'firebase/storage'

const FirebaseApp = !firebase.apps.length ? firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    }) : firebase.app()

export const auth = FirebaseApp.auth()
export const db = FirebaseApp.firestore()
export const storage = FirebaseApp.storage('gs://sushi-house-clone.appspot.com')
export default FirebaseApp