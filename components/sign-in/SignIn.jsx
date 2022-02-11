import React from "react";
import { Box, Image, Text, VStack, Heading, Card } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import SignInForm from "./SignInForm";
import SignInCover from "./SignInCover";
import { useSelector } from "react-redux";
const CoverImage = require("../../doctor_cover.jpg");

const SignIn = () => {
	const appTitle = useSelector((state) => state.app.appTitle);
	React.useEffect(() => {
		console.log(appTitle);
	}, []);
	return (
		<Box
			flex={1}
			bg={"white"}
			h={"100%"}
			display={"flex"}
			alignItems={"center"}
			justifyContent={"center"}
		>
			<VStack space={4} alignItems={"center"} w={"100%"}>
				<Box flexShrink={1} w={"100%"} alignItems={"center"}>
					<SignInCover />
				</Box>
				<SignInForm />
			</VStack>
		</Box>
	);
};
export default SignIn;
