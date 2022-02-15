import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import {
    Box,
    Button,
    Center,
    Heading,
    HStack,
    IconButton,
    Input,
    Text,
    VStack,
} from "native-base";
import React from "react";
import MapView from "react-native-maps";
import { HealthXContainer } from "../../App";
/**
 * 
 * @returns 
                <Heading size={"md"} color={"#1E3D74"}>
                    Preferred Pharmacy
                </Heading>
 */

const Pharmacy = () => {
    return (
        <HealthXContainer>
            <VStack space={4}>
                <PreferredPharmacy />
                <LocatePharmacy />
            </VStack>
        </HealthXContainer>
    );
};

const PreferredPharmacy = () => {
    return (
        <HStack
            bg={"white"}
            p={3}
            borderRadius={10}
            space={4}
            borderWidth={1}
            borderColor={"muted.200"}
            alignItems={"center"}
        >
            <Center p={3}>
                <FontAwesome5
                    name={"hospital-user"}
                    size={28}
                    color={"#4965A5"}
                />
            </Center>
            <VStack flex={1}>
                <Heading size={"sm"}>Pharmacy</Heading>
                <Text color={"muted.400"}>Address Line 1</Text>
                <Text color={"muted.400"}>City, State, Zipcode</Text>
                <Text color={"muted.400"}>Phone Number</Text>
            </VStack>
            <Center>
                <Button variant={"ghost"} colorScheme={"indigo"} size={"xs"}>
                    <VStack alignItems={"center"} justifyContent={"center"}>
                        <Ionicons
                            name={"ios-navigate-circle-outline"}
                            size={20}
                            color={"#4965A5"}
                        />
                        <Text bold color={"#435591"} fontSize={9}>
                            Navigate
                        </Text>
                    </VStack>
                </Button>
                <Button variant={"ghost"} colorScheme={"indigo"} size={"xs"}>
                    <VStack alignItems={"center"} justifyContent={"center"}>
                        <Ionicons
                            name={"ios-close-circle-outline"}
                            size={20}
                            color={"#4965A5"}
                        />
                        <Text bold color={"#435591"} fontSize={9}>
                            Delete
                        </Text>
                    </VStack>
                </Button>
            </Center>
        </HStack>
    );
};

const LocatePharmacy = () => {
    return (
        <VStack>
            <HStack alignItems={"center"} justifyContent={"space-between"}>
                <Input
                    borderRadius={10}
                    placeholder={"Locate pharamacies..."}
                    bg={"white"}
                    flex={1}
                    InputRightElement={
                        <IconButton
                            mr={1}
                            icon={<Ionicons name={"ios-locate"} size={16} />}
                        />
                    }
                />
            </HStack>
            <Box flex={1} w={"100%"}>
                <MapView
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </Box>
        </VStack>
    );
};
export default Pharmacy;
