import { Ionicons } from "@expo/vector-icons";
import {
	Avatar,
	Box,
	Text,
	Heading,
	VStack,
	Input,
	ScrollView,
	Button,
	IconButton,
	HStack,
	Row,
	Column,
	Divider,
} from "native-base";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator();
const SignUp = () => {
	return (
		<Stack.Navigator
			initialRouteName={"Personal"}
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen component={PersonalSignUp} name={"Personal"} />
			<Stack.Screen component={ContactSignUp} name={"Contact"} />
			<Stack.Screen
				component={EmergencyContactSignUp}
				name={"Emergency Contact"}
			/>
			<Stack.Screen component={AddressSignUp} name={"Address"} />
		</Stack.Navigator>
	);
};

const SignUpContainer = (props) => {
	return (
		<VStack
			flex={1}
			alignItems={"center"}
			justifyContent={"center"}
			bg={"white"}
			w={"100%"}
			py={5}
		>
			<Row mb={4}>
				<Heading color={"#365695"}>{props.title}</Heading>
				<Heading> Details</Heading>
			</Row>
			<ScrollView w={"100%"}>
				<VStack
					space={3}
					w={"100%"}
					mt={4}
					px={4}
					alignItems={"center"}
					justifyContent={"center"}
				>
					{props.children}
				</VStack>
			</ScrollView>
		</VStack>
	);
};

const SignUpHeader = () => {
	return (
		<VStack alignItems={"center"}>
			<Heading fontSize={"3xl"}>
				Create <Text color={"#365695"}>Account</Text>
			</Heading>
			<Text color={"muted.400"} mb={4} mt={1}>
				Join the HealthX community.
			</Text>
		</VStack>
	);
};

const SignUpDateInput = ({ place, icon }) => {
	return (
		<Input
			InputLeftElement={
				<Box ml={3} mr={1}>
					<Ionicons
						name={"ios-" + icon}
						size={16}
						color={"#365695"}
					/>
				</Box>
			}
			placeholder={place}
			isFullWidth
		/>
	);
};

const SignUpSelectInput = ({ place, icon, options }) => {
	return (
		<Input
			InputLeftElement={
				<Box ml={3} mr={1}>
					<Ionicons
						name={"ios-" + icon}
						size={16}
						color={"#365695"}
					/>
				</Box>
			}
			placeholder={place}
			isFullWidth
		/>
	);
};

const SignUpInput = ({ place, icon }) => {
	return (
		<Input
			InputLeftElement={
				<Box ml={3} mr={1}>
					<Ionicons
						name={"ios-" + icon}
						size={16}
						color={"#365695"}
					/>
				</Box>
			}
			placeholder={place}
			isFullWidth
		/>
	);
};

const PersonalSignUp = ({ navigation }) => {
	return (
		<SignUpContainer title={"Personal"}>
			<VStack mb={1} space={2} alignItems={"center"}>
				<Box
					borderColor={"muted.100"}
					borderWidth={"1"}
					borderRadius={20}
					display={"flex"}
					alignItems={"center"}
					justifyContent={"center"}
					bg={"muted.50"}
				>
					<Avatar size={"2xl"} bg={"#8cabea"} m={5} shadow={"7"}>
						<Ionicons
							name={"ios-camera"}
							size={40}
							color={"white"}
						/>
					</Avatar>
				</Box>
			</VStack>
			<SignUpInput place={"Username"} icon={"server"} />
			<Row w={"100%"} space={2}>
				<Column flexGrow={1}>
					<SignUpInput place={"First Name"} icon={"person"} />
				</Column>
				<Column flexGrow={1}>
					<SignUpInput place={"Last Name"} icon={"people"} />
				</Column>
			</Row>
			<Row w={"100%"} space={2}>
				<Column flexGrow={1}>
					<SignUpInput place={"Password"} icon={"lock-open"} />
				</Column>
				<Column flexGrow={1}>
					<SignUpInput
						place={"Confirm Password"}
						icon={"lock-closed"}
					/>
				</Column>
			</Row>
			<SignUpDateInput place={"Date of Birth"} icon={"today"} />
			<SignUpDateInput place={"Gender"} icon={"woman"} />
			<HStack w={"100%"} mt={2}>
				<ContinueButton navigator={navigation} nextScreen={"Contact"} />
			</HStack>
		</SignUpContainer>
	);
};

const ContactSignUp = ({ navigation }) => {
	return (
		<SignUpContainer title={"Contact"}>
			<SignUpInput place={"Email Address"} icon={"mail-open"} />
			<SignUpInput place={"Cell Phone Number"} icon={"phone-portrait"} />
			<SignUpInput place={"Other Phone Number"} icon={"call"} />
			<HStack w={"100%"} space={2} mt={2}>
				<BackButton navigator={navigation} prevScreen={"Personal"} />
				<ContinueButton
					navigator={navigation}
					nextScreen={"Emergency Contact"}
				/>
			</HStack>
		</SignUpContainer>
	);
};
const EmergencyContactSignUp = ({ navigation }) => {
	return (
		<SignUpContainer title={"Emergency Contact"}>
			<Row w={"100%"} space={2}>
				<Column flexGrow={1}>
					<SignUpInput place={"Contact First Name"} icon={"person"} />
				</Column>
				<Column flexGrow={1}>
					<SignUpInput place={"Contact Last Name"} icon={"people"} />
				</Column>
			</Row>
			<SignUpInput place={"Contact Email Address"} icon={"mail-open"} />
			<SignUpInput
				place={"Contact Cell Phone Number"}
				icon={"phone-portrait"}
			/>
			<HStack w={"100%"} space={2} mt={2}>
				<BackButton navigator={navigation} prevScreen={"Contact"} />
				<ContinueButton navigator={navigation} nextScreen={"Address"} />
			</HStack>
		</SignUpContainer>
	);
};

const AddressSignUp = ({ navigation }) => {
	return (
		<SignUpContainer title={"Address"}>
			<SignUpInput place={"Address"} icon={"home"} />
			<SignUpInput place={"City"} icon={"business"} />
			<SignUpInput place={"Zip Code"} icon={"map"} />
			<SignUpInput place={"State"} icon={"earth"} />
			<HStack w={"100%"} space={2} mt={2}>
				<BackButton navigator={navigation} prevScreen={"Contact"} />
				<ContinueButton navigator={navigation} nextScreen={""} />
			</HStack>
		</SignUpContainer>
	);
};

const ContinueButton = ({ navigator, nextScreen }) => {
	return (
		<Button
			bg={"#365695"}
			flex={1}
			onPress={() => navigator.navigate(nextScreen)}
		>
			<Row justifyContent={"center"} alignItems={"center"}>
				<Text bold color={"white"} mr={2}>
					Continue
				</Text>
				<Ionicons name={"ios-arrow-forward-circle"} color={"white"} />
			</Row>
		</Button>
	);
};

const BackButton = ({ navigator, prevScreen }) => {
	return (
		<Button
			variant={"ghost"}
			colorScheme={"muted"}
			onPress={() => navigator.goBack()}
		>
			<Text color={"muted.500"} bold>
				Return to {prevScreen}
			</Text>
		</Button>
	);
};

export default SignUp;
