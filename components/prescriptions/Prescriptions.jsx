import React from "react";
import {
    Box,
    Divider,
    Heading,
    HStack,
    VStack,
    Text,
    Button,
    Avatar,
    Input,
    ScrollView,
} from "native-base";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import { HealthXContainer } from "../../App";

const Prescriptions = () => {
    return (
        <HealthXContainer>
            <VStack mb={2} space={2}>
                <HStack>
                    <Input
                        bg={"white"}
                        placeholder={"Search prescriptions..."}
                        isFullWidth
                    />
                </HStack>
                <ScrollView horizontal={true}>
                    <HStack space={2} pb={2}>
                        <Button
                            variant={"outline"}
                            flex={1}
                            size={"sm"}
                            colorScheme={"indigo"}
                        >
                            Sent to Pharmacy
                        </Button>
                        <Button
                            variant={"outline"}
                            flex={1}
                            size={"sm"}
                            colorScheme={"indigo"}
                        >
                            In Process
                        </Button>
                        <Button
                            variant={"outline"}
                            flex={1}
                            size={"sm"}
                            colorScheme={"indigo"}
                        >
                            Action Required
                        </Button>
                        <Button
                            variant={"outline"}
                            flex={1}
                            size={"sm"}
                            colorScheme={"indigo"}
                        >
                            Cancelled
                        </Button>
                    </HStack>
                </ScrollView>
            </VStack>
            <ScrollView>
                <VStack space={1} pr={2}>
                    <Prescription />
                    <Prescription />
                    <Prescription />
                    <Prescription />
                    <Prescription />
                    <Prescription />
                    <Prescription />
                </VStack>
            </ScrollView>
        </HealthXContainer>
    );
};

const Prescription = () => {
    return (
        <Box
            bg={"white"}
            borderRadius={5}
            px={5}
            py={1}
            borderColor={"muted.200"}
            borderWidth={1}
        >
            <HStack alignItems={"center"} justifyContent={"center"} py={4}>
                <VStack
                    flex={1}
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    <Heading size={"lg"} mb={1} color={"muted.400"}>
                        27
                    </Heading>
                    <Heading size={"sm"}>MAR</Heading>
                </VStack>
                <Divider orientation={"vertical"} mx={5} />
                <VStack space={3} flex={5}>
                    <HStack alignItems={"center"} space={2}>
                        <Heading size={"sm"}>Tylenol, 10mg</Heading>
                    </HStack>
                    <HStack space={3} alignItems={"center"}>
                        <Avatar bg={"muted.200"} size={"sm"}>
                            <Fontisto name={"doctor"} size={13} />
                        </Avatar>
                        <VStack>
                            <Text bold>Dr. Lola Balistreri</Text>
                            <Text color={"muted.300"}>1 day ago</Text>
                        </VStack>
                    </HStack>
                </VStack>
            </HStack>
        </Box>
    );
};

export default Prescriptions;
