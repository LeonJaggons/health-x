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
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator()
const SignUp = () => {
	return (
		<Drawer.Navigator
			initialRouteName={"Personal"}
			screenOptions={{ headerShown: false }}
			drawerContent={(props) => (
				<DrawerContentScrollView {...props}>
					<HStack alignItems={"center"} justifyContent={"center"}>
					<Heading>Sign Up</Heading>
					</HStack>
					<DrawerItemList {...props}  />
				</DrawerContentScrollView>
			)}
			
		>
			<Drawer.Screen component={PersonalSignUp} name={"Personal"} />
			<Drawer.Screen component={ContactSignUp} name={"Contact"} />
			<Drawer.Screen
				component={EmergencyContactSignUp}
				name={"Emergency Contact"}
			/>
			<Drawer.Screen component={AddressSignUp} name={"Address"} />
		</Drawer.Navigator>
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
			<Row my={5}>
				<Column flexShrink={1}>
					<IconButton icon={
						<Ionicons name={"ios-menu"} />
					}/>
				</Column>
				<Column flex={1}>
				<Row alignItems={"center"} justifyContent={"center"}>

				<Heading color={"#365695"} size={"lg"}>{props.title}</Heading>
				<Heading> Details</Heading>
				</Row>
				</Column>
			</Row>
			<Box flexGrow={1} w={"100%"}>
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
			</Box>
			<SignUpFooter prevScreen={props.prevScreen} nextScreen={props.nextScreen} navigation={props.navigation}/>
			
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

const SignUpFooter = ({navigation, nextScreen, prevScreen}) => {
	return (
		<HStack w={"90%"} space={4} mt={3}>
			{prevScreen && <BackButton prevScreen={prevScreen} navigator={navigation}/> }
			{nextScreen &&<ContinueButton nextScreen={nextScreen} navigator={navigation} /> }
		</HStack>

	)
}

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
		<SignUpContainer title={"Personal"} navigation={navigation} nextScreen={"Contact"}>
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
		</SignUpContainer>
	);
};

const ContactSignUp = ({ navigation }) => {
	return (
		<SignUpContainer title={"Contact"} navigation={navigation} nextScreen={"Emergency Contact"} prevScreen={"Personal"}>
			<SignUpInput place={"Email Address"} icon={"mail-open"} />
			<SignUpInput place={"Cell Phone Number"} icon={"phone-portrait"} />
			<SignUpInput place={"Other Phone Number"} icon={"call"} />
		</SignUpContainer>
	);
};

const EmergencyContactSignUp = ({ navigation }) => {
	return (
		<SignUpContainer title={"Emergency Contact"} prevScreen={"Contact"} nextScreen={"Address"} navigation={navigation}>
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
		</SignUpContainer>
	);
};

const AddressSignUp = ({ navigation }) => {
	return (
		<SignUpContainer title={"Address"} prevScreen={"Contact"} navigation={navigation}>
			<SignUpInput place={"Address"} icon={"home"} />
			<SignUpInput place={"City"} icon={"business"} />
			<SignUpInput place={"Zip Code"} icon={"map"} />
			<SignUpInput place={"State"} icon={"earth"} />
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
					{nextScreen}
				</Text>
				<Ionicons name={"ios-arrow-forward-circle"} color={"white"} />
			</Row>
		</Button>
	);
};

const BackButton = ({ navigator, prevScreen }) => {
	return (
		<Button
			variant={"outline"}
			colorScheme={"muted"}
			onPress={() => navigator.navigate(prevScreen)}
		>
			<Text color={"muted.400"}>
				Return to {prevScreen}
			</Text>
		</Button>
	);
};

export default SignUp;
