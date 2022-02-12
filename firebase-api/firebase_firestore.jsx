import { app } from "./firebase_init";
import { collection, doc, getFirestore, setDoc } from "firebase/firestore";
import { createHealthXID } from "./firebase_auth";

export const firestore = getFirestore(app);
const usersCollection = collection(firestore, "healthx-users");
export const createHealthXUser = (firebaseID, userData) => {
	const hxID = createHealthXID();
	const userDoc = doc(firestore, "healthx-users", hxID);
	setDoc(userDoc, { firebaseID: firebaseID, ...userData });
};
