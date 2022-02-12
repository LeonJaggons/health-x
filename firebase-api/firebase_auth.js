import { app } from "./firebase_init";
import { getAuth } from "firebase/auth";

export const auth = getAuth(app);

export const createHealthXID = () => {
	let hxID = "HXID-";
	for (let i = 0; i < 8; i++) hxID += Math.floor(Math.random() * 10);
	return hxID;
};
