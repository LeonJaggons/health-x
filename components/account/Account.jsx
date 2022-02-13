import { Ionicons } from "@expo/vector-icons";
import {
    Avatar,
    Box,
    Heading,
    Input,
    Text,
    VStack,
    Button,
    Divider,
    HStack,
    FormControl,
    Badge,
} from "native-base";
import React from "react";
import { useSelector } from "react-redux";
import { auth } from "../../firebase-api/firebase_auth";

const Account = () => {
    const user = useSelector((state) => state.signIn.user);

    return (
        <Box flex={1} p={5} bg={"white"}>
            <VStack space={4} alignItems={"center"} flex={1}>
                <Avatar size={"xl"} bg={"#8cabea"} m={1} shadow={"7"}>
                    <Ionicons name={"ios-person"} size={28} color={"white"} />
                </Avatar>
                <HStack alignItems={"center"} space={2}>
                    <Box borderRadius={90} bg={"green.300"} h={2} w={2}></Box>
                    <Heading size={"xl"} mr={2}>
                        {user.personal.firstName + " " + user.personal.lastName}
                    </Heading>
                </HStack>
                <Divider my={4} />
                <VStack flexGrow={1} w={"90%"} space={4}>
                    <AccountInfoDisplay
                        label={"First Name"}
                        fieldType={"personal"}
                        field={"firstName"}
                    />
                    <AccountInfoDisplay
                        label={"Last Name"}
                        fieldType={"personal"}
                        field={"lastName"}
                    />
                    <AccountInfoDisplay
                        label={"Email Address"}
                        fieldType={"contact"}
                        field={"email"}
                    />
                </VStack>
                <SignOutButton />
            </VStack>
        </Box>
    );
};

const AccountInfoDisplay = ({ label, fieldType = "null", field = "null" }) => {
    const user = useSelector((state) => state.signIn.user);
    return (
        <FormControl>
            <FormControl.Label>
                <Text bold>{label}</Text>
            </FormControl.Label>
            <Input value={user[fieldType][field]} isReadOnly />
        </FormControl>
    );
};

const SignOutButton = () => {
    const handleSignOut = () => {
        auth.signOut();
    };
    return (
        <Button
            mt={"auto"}
            colorScheme={"danger"}
            onPress={() => handleSignOut()}
        >
            <Text bold color={"white"}>
                Sign Out
            </Text>
        </Button>
    );
};
export default Account;
