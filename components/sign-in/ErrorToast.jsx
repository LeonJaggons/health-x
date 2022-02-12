import { Heading, Text, Toast } from "native-base";
import React from "react";
import { useSelector } from "react-redux";
const showErrorToast = (errorCode) => {
	const errorParams = {
		"auth/user-not-found": {
			title: "Not a User",
			description:
				"It doesn't look like you have an account! Either sign-in with your HealthX email or create one to continue.",
			status: "info",
		},
		"auth/invalid-email": {
			title: "Invalid Email",
			description: "Check the email you entered and try again.",
			status: "warning",
		},
		"auth/wrong-password": {
			title: "Incorrect Password",
			description: "Check the password you entered and try again.",
			status: "error",
		},
		"auth/too-many-requests": {
			title: "Too Many Attempts",
			description:
				"Looks like you've tried to login too many times. Wait a bit and try again later",
			status: "error",
		},
	};

	Toast.closeAll();
	return Toast.show({
		width: "90%",
		status: errorParams[errorCode].status,
		title: <Heading size={"sm"}>{errorParams[errorCode].title}</Heading>,
		description: <Text>{errorParams[errorCode].description}</Text>,
		placement: "top",
		opacity: 0.8,
		duration: 7000,
		marginBottom: 5,
	});
};

export default showErrorToast;
