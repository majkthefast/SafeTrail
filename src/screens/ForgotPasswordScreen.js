import React, { useState } from 'react';
import { Box, VStack, Input, Button, Heading, Text } from 'native-base';

const ForgotPasswordScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');

    const handleResetPassword = () => {
        // Logika resetowania hasła
        console.log(email);
        // Informacja dla użytkownika o wysłaniu linku do resetowania hasła
    };

    return (
        <Box flex={1} p="5" w="100%" mx="auto" justifyContent="center" backgroundColor="white">
            <Heading size="lg" textAlign="center" color="coolGray.800" fontWeight="600" paddingBottom="5">
                Reset Password
            </Heading>
            <VStack space={3} alignItems="center">
                <Text w="75%" textAlign="center">
                    Please enter your email address to receive a link to reset your password.
                </Text>
                <Input
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCompleteType="email"
                    keyboardType="email-address"
                    w="75%"
                />
                <Button bgColor={"primary.100"} onPress={handleResetPassword} w="75%">
                    Send Reset Link
                </Button>
                <Button variant="ghost" onPress={() => navigation.goBack()} w="75%">
                    Back to Login
                </Button>
            </VStack>
        </Box>
    );
};

export default ForgotPasswordScreen;
