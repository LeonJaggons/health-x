import React from "react";
import {
    Box,
    Divider,
    Heading,
    HStack,
    VStack,
    Text,
    IconButton,
    Button,
    Avatar,
    Badge,
} from "native-base";
import { Fontisto, Ionicons } from "@expo/vector-icons";

const Prescriptions = () => {
    return (
        <Box flex={1} p={5} bg={"muted.100"}>
            <VStack>
                <HStack alignItems={"center"} space={2} mb={1}>
                    <Heading size={"md"}>Pharmacy</Heading>
                    <Box flex={1} alignItems={"flex-end"}>
                        <Button
                            variant={"ghost"}
                            colorScheme={"muted"}
                            leftIcon={
                                <Ionicons
                                    name={"ios-create-outline"}
                                    size={16}
                                    color={"#8cabea"}
                                />
                            }
                        >
                            <Text color={"#8cabea"}>Edit</Text>
                        </Button>
                    </Box>
                </HStack>
                <Box bg={"white"} borderRadius={10} p={5}>
                    <HStack>
                        <VStack space={1} flex={1}>
                            <Heading size={"sm"}>CVS Pharmacy</Heading>
                            <Text color={"muted.300"}>
                                28111 O'Reilly Station
                            </Text>
                            <Text color={"muted.300"}>365-557-2068</Text>
                        </VStack>
                        <VStack justifyContent={"center"}></VStack>
                    </HStack>
                </Box>
                <HStack alignItems={"center"} space={2} mb={3} mt={8}>
                    <Heading size={"md"}>Prescriptions</Heading>
                </HStack>
                <Box bg={"white"} borderRadius={10} px={5}>
                    <HStack
                        alignItems={"center"}
                        justifyContent={"center"}
                        py={4}
                    >
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
                            <HStack
                                alignItems={"center"}
                                justifyContent={"center"}
                                space={2}
                                w={"100%"}
                                bg={"info.400"}
                                p={1}
                                borderRadius={10}
                            >
                                <HStack alignItems={"center"} space={1}>
                                    <Fontisto
                                        name={"checkbox-active"}
                                        color={"white"}
                                    />
                                    <Text color={"white"}>
                                        Sent to Pharmacy
                                    </Text>
                                </HStack>
                            </HStack>
                        </VStack>
                    </HStack>
                </Box>
            </VStack>
        </Box>
    );
};

export default Prescriptions;
