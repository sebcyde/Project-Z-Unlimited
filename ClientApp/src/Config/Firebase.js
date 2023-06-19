import DefaultImage from '../assets/PFP/girl2.png';
import { initializeApp } from 'firebase/app';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
} from 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBNgXBQPOzWHBJbCbGp3uv-gR21kV28Ulg',
	authDomain: 'project-z---unlimited.firebaseapp.com',
	projectId: 'project-z---unlimited',
	storageBucket: 'project-z---unlimited.appspot.com',
	messagingSenderId: '979388419849',
	appId: '1:979388419849:web:cdb2a8e9ddec55d6198dd8',
};

const ImagePreURL = 'https://sebcyde.github.io/Z';
export const app = initializeApp(config.firebase);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Sign Up New Users
export const SignUp = async (auth, email, password, Username) => {
	try {
		const UserCred = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		const user = UserCred.user;
		console.log('Signed up as:', user);

		await setDoc(doc(db, `Users/${user.uid}`), {
			UserEmail: user.email,
			Username: Username,
			DisplayPicture: DefaultImage,
			CreationDate: user.metadata.creationTime,
			UID: user.uid,
			Admin: false,
			LastSeen: Date.now(),
		});

		await setDoc(doc(db, `Users/${user.uid}/MoreInfo/Lists`), {
			Favourites: [],
		});

		await setDoc(doc(db, `Users/${user.uid}/MoreInfo/Recommendations`), {
			Recommendations: [],
		});

		await setDoc(doc(db, `Users/${user.uid}/MoreInfo/Friends`), {
			Following: [],
			Followers: [],
		});

		console.log('User Creation Successful:');
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;
		console.log(`Error ${errorCode}:`, errorMessage);
	}
};

// Sign In Existing Users
export const SignIn = async (auth, email, password) => {
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			console.log('Signed in as:', user);
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(`Error ${errorCode}:`, errorMessage);
			alert('Invalid Credentials');
		});
};
