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
import { List, InputItem } from "@ant-design/react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-api/firebase_auth";
import showErrorToast from "./ErrorToast";
const SignInForm = () => {
	const dispatch = useDispatch();
	const signInCreds = useSelector((state) => state.signIn.signInCreds);
	const [showPW, setShowPW] = React.useState(false);

	React.useEffect(() => {
		console.log(signInCreds);
	}, [signInCreds]);

	const setCreds = (cred, value) => {
		dispatch({ type: "SET_CREDS", cred: cred, payload: value });
	};

	const handleSignInAttempt = () => {
		signInWithEmailAndPassword(
			auth,
			signInCreds.username,
			signInCreds.password
		)
			.then((userCreds) => {
				console.log(userCreds.user);
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
