import React from "react";
import { Image, Text, VStack, Heading } from "native-base";
const CoverImage = require("../../doctor_cover.jpg");

const SignInCover = () => {
	return (
		<>
			<VStack w={"90%"} alignItems={"center"}>
				<Heading color={"black"} fontSize={"5xl"}>
					Health<Text color={"#365695"}>X</Text>
				</Heading>
				<Text color={"muted.400"}>
					Login to your account to continue.
				</Text>
			</VStack>
			<Image
				alt={"Loading..."}
				mt={10}
				mb={2}
				source={CoverImage}
				height={190}
				width={"100%"}
				resizeMethod={"resize"}
				resizeMode={"contain"}
			/>
		</>
	);
};

export default SignInCover;
