import React from "react";
import {
	Box,
	VStack,
	HStack,
	Input,
	Text,
	Button,
	IconButton,
	ScrollView,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { useTailwind } from "tailwind-rn/dist";
const SignInForm = () => {
	const tailwind = useTailwind();
	const dispatch = useDispatch();
	const signInCreds = useSelector((state) => state.signIn.signInCreds);
	const [showPW, setShowPW] = React.useState(false);

	React.useEffect(() => {
		console.log(signInCreds);
	}, [signInCreds]);

	const setCreds = (cred, value) => {
		dispatch({ type: "SET_CREDS", cred: cred, payload: value });
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
					<Button
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
				</HStack>
			</VStack>
		</ScrollView>
	);
};

export default SignInForm;
