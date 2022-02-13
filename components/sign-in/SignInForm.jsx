import React from "react";
import {
	Box,
	VStack,
	HStack,
	Text,
	Button,
	IconButton,
	ScrollView,
	Input,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-api/firebase_auth";
import showErrorToast from "./ErrorToast";
import { getHealthXUser } from "../../firebase-api/firebase_firestore";
const SignInForm = () => {
	const dispatch = useDispatch();
	const signInCreds = useSelector((state) => state.signIn.signInCreds);
	const [showPW, setShowPW] = React.useState(false);
	const user = useSelector((state) => state.signIn.user)

	React.useEffect(() => {
		console.log("USER", user);
	}, [user]);

	const setCreds = (cred, value) => {
		dispatch({ type: "SET_CREDS", cred: cred, payload: value });
	};

	const handleSignInAttempt = () => {
		signInWithEmailAndPassword(
			auth,
			signInCreds.username.trim(),
			signInCreds.password.trim()
		)
			.then((userCreds) => {
				getHealthXUser(userCreds.user.uid)
			})
			.catch((err) => {
				//
				console.log(err.code);
				dispatch({ type: "SET_SIGN_IN_ERROR", payload: err.code });
				showErrorToast(err.code);
			});
	};
	return (
		<ScrollView w={"100%"}>
			<VStack alignItems={"center"}>
				<VStack
					space={2}
					w={"100%"}
					flexGrow={1}
					flexShrink={1}
					px={8}
					justifyContent={"center"}
					alignItems={"center"}
				>
					<Input
						InputLeftElement={
							<Box ml={3} mr={1}>
								<Ionicons
									name={"ios-mail"}
									size={16}
									color={"#365695"}
								/>
							</Box>
						}
						placeholder="Username/Email"
						onChangeText={(value) => setCreds("username", value)}
						size={"md"}
						isFullWidth
					/>
					<Input
						type={showPW ? "text" : "password"}
						InputLeftElement={
							<Box ml={3} mr={1}>
								<Ionicons
									name={"ios-lock-closed"}
									size={16}
									color={"#365695"}
								/>
							</Box>
						}
						placeholder={"Password"}
						size={"md"}
						onChangeText={(value) => setCreds("password", value)}
						InputRightElement={
							<Box mr={1}>
								<IconButton
									colorScheme={"muted"}
									onPress={() => setShowPW(!showPW)}
									icon={
										<Ionicons
											name={
												!showPW
													? "ios-eye-off"
													: "ios-eye"
											}
											size={16}
											color={"#365695"}
										/>
									}
								/>
							</Box>
						}
						isFullWidth
					/>
				</VStack>
				<HStack px={4} mt={4}>
					<Box safeAreaBottom>
						<Button
							onPress={() => handleSignInAttempt()}
							bg={"#365695"}
							leftIcon={
								<Ionicons
									name={"ios-checkmark-circle"}
									color={"white"}
									size={14}
								/>
							}
							w={"90%"}
							isDisabled={
								signInCreds.username.trim() === "" || signInCreds.password.trim() === "" || signInCreds.password.length < 8
							}
						>
							<Text color={"white"} bold>
								Continue
							</Text>
						</Button>
					</Box>
				</HStack>
			</VStack>
		</ScrollView>
	);
};

export default SignInForm;
