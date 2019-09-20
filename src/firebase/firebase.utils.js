import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCKFg8wmFL0l5dKb_g26bbNWqB5tZWwaF0',
	authDomain: 'ecommerce-react-3b476.firebaseapp.com',
	databaseURL: 'https://ecommerce-react-3b476.firebaseio.com',
	projectId: 'ecommerce-react-3b476',
	storageBucket: '',
	messagingSenderId: '633632461527',
	appId: '1:633632461527:web:db4ba516afc46284039692'
};

// async action because we are making an API call
/**
 * * check for any data
 * * if none, create it using the data
 * * from our userAuth object
 */
export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();
	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log(`error creating user: ${error.message}`);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
