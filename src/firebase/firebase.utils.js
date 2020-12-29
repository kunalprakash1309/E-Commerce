// this will let to use utils of firebase
import firebase from 'firebase/app'

// we dont need import firebase from '/firebase/firestore' everythin glinked to firebase which we imported earlier
// for database
import 'firebase/firestore'   

// for auth
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAjsfQfxP8-d5W7BaVcONoo3e-uWHkhzxc",
    authDomain: "e-commerce-75969.firebaseapp.com",
    databaseURL: "https://e-commerce-75969.firebaseio.com",
    projectId: "e-commerce-75969",
    storageBucket: "e-commerce-75969.appspot.com",
    messagingSenderId: "93130940263",
    appId: "1:93130940263:web:2c1ef6e3aefb4eeee099c2",
    measurementId: "G-28S0GNYGYS"
}

// for database
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    console.log(userRef)
    
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(err) {
            console.log("error creating user", err)
        }
    }

    return userRef
}

export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj)
    })

    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data()

        return{
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator
    }, {});
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// for setting google auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;