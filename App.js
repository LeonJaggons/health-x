import React from "react";
import {
	NativeBaseProvider,
	Box,
	Text,
	VStack,
	Input,
	Heading,
	HStack,
	Button,
	Divider,
	Image,
	InputGroup,
	InputLeftAddon,
	InputRightAddon,
	Collapse,
	IconButton,
} from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import SignIn from "./components/sign-in/SignIn";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
import SignUp from "./components/sign-up/SignUp";

const Tab = createBottomTabNavigator();
export default function App() {
	return (
		<Provider store={store}>
			<NativeBaseProvider>
				<Box h={"100%"} bg={"white"} safeArea>
					<AppContent />
				</Box>
			</NativeBaseProvider>
		</Provider>
	);
}

const AppContent = () => {
	const isSignedIn = useSelector((state) => state.signIn.isSignedIn);
	const SignInContent = () => {
		return <></>;
	};
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={{
					tabBarStyle: { paddingBottom: 3 },
					headerShown: false,
					tabBarActiveTintColor: "#375294",
				}}
			>
				{!isSignedIn ? (
					<>
						<Tab.Screen
							component={NoContent}
							name={"Home"}
							options={{
								tabBarIcon: ({ size, color, focused }) => (
									<Ionicons
										name={
											focused
												? "ios-home"
												: "ios-home-outline"
										}
										size={17}
										color={color}
									/>
								),
							}}
						/>
						<Tab.Screen
							component={NoContent}
							name={"Appointments"}
							options={{
								tabBarIcon: ({ size, color, focused }) => (
									<Ionicons
										name={
											focused
												? "ios-calendar"
												: "ios-calendar-outline"
										}
										size={17}
										color={color}
									/>
								),
							}}
						/>
						<Tab.Screen
							component={NoContent}
							name={"Messages"}
							options={{
								tabBarIcon: ({ size, color, focused }) => (
									<Ionicons
										name={
											focused
												? "ios-chatbubble-ellipses"
												: "ios-chatbubble-outline"
										}
										size={17}
										color={color}
									/>
								),
							}}
						/>
						<Tab.Screen
							component={NoContent}
							name={"Prescriptions"}
							options={{
								tabBarIcon: ({ size, color, focused }) => (
									<Ionicons
										name={
											focused
												? "ios-medkit"
												: "ios-medkit-outline"
										}
										size={17}
										color={color}
									/>
								),
							}}
						/>
						<Tab.Screen
							component={NoContent}
							name={"Account"}
							options={{
								tabBarIcon: ({ size, color, focused }) => (
									<Ionicons
										name={
											focused
												? "ios-person-circle"
												: "ios-person-circle-outline"
										}
										size={19}
										color={color}
									/>
								),
							}}
						/>
					</>
				) : (
					<>
						<Tab.Screen
							component={SignIn}
							name={"Sign In"}
							options={{
								tabBarIcon: ({ size, color, focused }) => (
									<Ionicons
										name={
											focused
												? "ios-person"
												: "ios-person-outline"
										}
										size={17}
										color={color}
									/>
								),
							}}
						/>
						<Tab.Screen
							component={SignUp}
							name={"Sign Up"}
							options={{
								tabBarIcon: ({ size, color, focused }) => (
									<Ionicons
										name={
											"ios-people" +
											(focused ? "" : "-outline")
										}
										size={17}
										color={color}
									/>
								),
							}}
						/>
					</>
				)}
			</Tab.Navigator>
		</NavigationContainer>
	);
};

const NoContent = () => {
	return (
		<Box>
			<Heading>NO CONTENT</Heading>
		</Box>
	);
};
