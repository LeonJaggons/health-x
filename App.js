import "./firebase-api/firebase_auth";
import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { NativeBaseProvider, Box, Heading } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import SignIn from "./components/sign-in/SignIn";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./redux/store";
import SignUp from "./components/sign-up/SignUp";
import { auth } from "./firebase-api/firebase_auth";
import Account from "./components/account/Account";
import Prescriptions from "./components/prescriptions/Prescriptions";

const Tab = createBottomTabNavigator();
export default function App() {
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
                }}
            >
                {fbUser ? (
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
                            component={Prescriptions}
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
                            component={Account}
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
