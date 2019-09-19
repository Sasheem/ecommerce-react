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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
