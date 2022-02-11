import { Actionsheet } from "native-base";

const signInState = {
	isSignedIn: true,
	signInCreds: {
		username: "",
		password: "",
	},
	signUpCreds: {
		firstName: "",
		lastName: "",
		password: "",
		passwordConfirm: "",
		emailAddress: "",
		phoneNumber: "",
	},
};

const signInReducer = (state = signInState, action) => {
	switch (action.type) {
		case "SET_CREDS":
			return {
				...state,
				signInCreds: {
					...state.signInCreds,
					[action.cred]: action.payload,
				},
			};
		default:
			return {
				...state,
			};
	}
};

export default signInReducer;
