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

firebase.initializeApp(config);

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

/**
 *
 * @param {id for key} collectionKey
 * @param {could be an array of objects or object of objects?} objectsToAdd
 */
export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	// create the collection in firestore using our collection key
	const collectionRef = firestore.collection(collectionKey);

	// group our calls into one big request
	// in case something happens to interrupt the internet connection or anything
	const batch = firestore.batch();
	objectsToAdd.forEach(obj => {
		// tells firebase, give us a new doc ref in this collection and
		// randomly generate an ID for me
		const newDocRef = collectionRef.doc();

		// set it on batch so we know it will be set or not set
		// we know it won't be partially set
		batch.set(newDocRef, obj);
	});

	// now send batch request
	// returns a promise, on success it resolves a void value
	return await batch.commit();
};

// convert collections array to an object of objects
// where the title for each collection object is the key
// and the data is the respective collection object
export const convertCollectionsSnapshotToMap = collections => {
	const transformedCollections = collections.docs.map(doc => {
		const { title, items } = doc.data();

		// encodeURI takes a string and converts it to a string to be used for URLs
		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items
		};
	});

	return transformedCollections.reduce((accumulator, collection) => {
		// creates an empty object with the name of the current iteration we are on
		// and then sets that equal to the collection for the iteration we are on
		/**
		 * * confused me at first because this looks like an array index terminology
		 */
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator;
	}, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
