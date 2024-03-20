import React from 'react';
import { Button, VStack, Input, Box, Heading } from 'native-base';

const ChangePasswordScreen = ({ navigation }) => {
    return (
        <Box flex={1} p="2" w="100%" mx="auto" justifyContent="center">
            <Heading size="lg" textAlign="center">Zmień Hasło</Heading>
            <VStack space={4} mt="5">
                <Input mx="3" placeholder="Obecne hasło" type="password" />
                <Input mx="3" placeholder="Nowe hasło" type="password" />
                <Input mx="3" placeholder="Potwierdź nowe hasło" type="password" />
                <Button mt="5" mx="3" onPress={() => console.log('Zmień hasło')}>
                    Zmień hasło
                </Button>
            </VStack>
        </Box>
    );
};

export default ChangePasswordScreen;
