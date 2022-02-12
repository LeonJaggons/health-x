import { Actionsheet } from "native-base";

const signInState = {
	isSignedIn: true,
	fbUser: null,
	user: {},
	signInError: null,
	signInCreds: {
		username: "",
		password: "",
	},
	signUpCreds: {
		null: {
			null: "",
		},
		personal: {
			username: "",
		},
		contact: {},
		emergencyContact: {},
		address: {},
		user: {},
	},
};

const signInReducer = (state = signInState, action) => {
	switch (action.type) {
		case "SET_FB_USER":
			return {
				...state,
				fbUser: action.payload,
			};
		case "SET_SIGN_UP_FIELD":
			return {
				...state,
				signUpCreds: {
					...state.signUpCreds,
					[action.fieldType]: {
						...state.signUpCreds[action.fieldType],
						[action.field]: action.payload,
					},
				},
			};
		case "SET_SIGN_IN_ERROR":
			return {
				...state,
				signInError: action.payload,
			};
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
