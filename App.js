import "./firebase-api/firebase_auth";
import "react-native-gesture-handler";
import React, { useEffect } from "react";
import {
    NativeBaseProvider,
    Box,
    Heading,
    HStack,
    Avatar,
    IconButton,
    Flex,
} from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import SignIn from "./components/sign-in/SignIn";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./redux/store";
import SignUp from "./components/sign-up/SignUp";
import { auth } from "./firebase-api/firebase_auth";
import Account from "./components/account/Account";
import Prescriptions from "./components/prescriptions/Prescriptions";
import Home from "./components/home/Home";
import Pharmacy from "./components/pharmacy/Pharmacy";
import { getRxByName } from "./rest-api/prescriptions_api";

const Tab = createBottomTabNavigator();
export default function App() {
    getRxByName("tylenol");
    return (
        <Provider store={store}>
            <NativeBaseProvider>
                <Box h={"100%"} bg={"white"}>
                    <AppContent />
                </Box>
            </NativeBaseProvider>
        </Provider>
    );
}

const AppContent = () => {
    const dispatch = useDispatch();
    const fbUser = useSelector((state) => state.signIn.fbUser);
    const isSignedIn = useSelector((state) => state.signIn.isSignedIn);

    useEffect(() => {
        // auth.signOut().then(() => onAuthStateChanged(null));
        auth.onAuthStateChanged((user) => {
            onAuthStateChanged(user);
        });
    }, []);
    const onAuthStateChanged = (user) => {
        dispatch({ type: "SET_FB_USER", payload: user });
    };

    const SignInContent = () => {
        return <></>;
    };

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: { paddingBottom: 3 },
                    tabBarActiveTintColor: "#375294",
                    headerShown: true,
                    headerTitleStyle: {
                        fontSize: 24,
                        marginTop: 3,
                        marginBottom: 5,
                        color: "white",
                    },
                    headerStyle: { backgroundColor: "#435591" },
                    headerTitle: (props) => (
                        <HStack
                            w={"100%"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                        >
                            <Heading color={"muted.100"}>
                                {props.children}
                            </Heading>
                            <HStack space={1} alignItems={"center"}>
                                <IconButton
                                    colorScheme="indigo"
                                    icon={
                                        <Ionicons
                                            name={"ios-notifications"}
                                            size={20}
                                            color={"#F3F6FE"}
                                        />
                                    }
                                />
                                <IconButton
                                    colorScheme="indigo"
                                    icon={
                                        <Ionicons
                                            name={"ios-help-buoy"}
                                            size={20}
                                            color={"#F3F6FE"}
                                        />
                                    }
                                />
                                <IconButton
                                    colorScheme="indigo"
                                    icon={
                                        <Avatar size={"xs"} bg={"#F3F6FE"}>
                                            <Ionicons name={"person"} />
                                        </Avatar>
                                    }
                                />
                            </HStack>
                        </HStack>
                    ),
                }}
            >
                {fbUser ? (
                    <>
                        <Tab.Screen
                            component={Home}
                            name={"Home"}
                            options={{
                                tabBarIcon: ({ size, color, focused }) => (
                                    <FontAwesome5
                                        name={
                                            focused
                                                ? "laptop-medical"
                                                : "laptop"
                                        }
                                        size={18}
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
                                    <FontAwesome5
                                        name={
                                            focused
                                                ? "calendar-day"
                                                : "calendar-alt"
                                        }
                                        size={17}
                                        color={color}
                                    />
                                ),
                            }}
                        />
                        <Tab.Screen
                            component={Prescriptions}
                            name={"Prescriptions"}
                            options={{
                                tabBarIcon: ({ size, color, focused }) => (
                                    <FontAwesome5
                                        name={"medkit"}
                                        size={17}
                                        color={color}
                                    />
                                ),
                            }}
                        />
                        <Tab.Screen
                            component={Pharmacy}
                            name={"Pharmacy"}
                            options={{
                                tabBarIcon: ({ size, color, focused }) => (
                                    <FontAwesome5
                                        name={"hospital-user"}
                                        size={19}
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
                                    <FontAwesome5
                                        name={
                                            focused
                                                ? "envelope-open-text"
                                                : "envelope"
                                        }
                                        size={17}
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

export const HealthXContainer = (props) => {
    return (
        <Flex flex={1} px={4} pt={5}>
            {props.children}
        </Flex>
    );
};
