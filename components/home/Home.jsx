import { Box, Heading, VStack } from "native-base";
import React from "react";

const Home = () => {
    return (
        <Box flex={1} safeArea p={5}>
            <Heading>
                <VStack>
                    <Heading size={"md"}>Hello,</Heading>
                    <Heading size={"xl"}>Leon!</Heading>
                </VStack>
            </Heading>
        </Box>
    );
};

export default Home;
