import { app } from "./firebase_init";
import { collection, doc, getFirestore, query, setDoc, getDocs, where } from "firebase/firestore";
import { createHealthXID } from "./firebase_auth";
import store from "../redux/store";

export const firestore = getFirestore(app);
const usersCollection = collection(firestore, "healthx-users");

export const createHealthXUser = (firebaseID, userData) => {
	store.dispatch({type: "CLEAR_SIGN_UP_PASSWORD"})
	const hxID = createHealthXID();
	const userDoc = doc(firestore, "healthx-users", hxID);
	setDoc(userDoc, { firebaseID: firebaseID, ...userData });
};

export const getHealthXUser = async (firebaseID) => {
	console.log("MATCH " + firebaseID)
	const userQuery = query(usersCollection, where("firebaseID", '==', firebaseID))
	const userDocs = await  getDocs(userQuery);
	if(!userDocs.empty){
		console.log(userDocs.docs[0])
		store.dispatch({type: "SET_USER", payload: userDocs.docs[0].data()})
	}

}
