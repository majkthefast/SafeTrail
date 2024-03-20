import React, { useState } from 'react';
import {Box, VStack, Input, Button, Heading, Image} from 'native-base';
import logo from "../assets/images/logo-dark.png";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Box flex={1} p="5" w="100%" mx="auto" justifyContent="center" backgroundColor="white">
            <Image source={logo} alt="SafeTrail Logo" size="xl" resizeMode="contain" alignSelf="center" mb="4"/>
            <Heading size="lg" color="coolGray.800" fontWeight="600" paddingBottom="5" textAlign="center">
                SafeTrail
            </Heading>
            <VStack space={3} alignItems="center">
                <Input
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCompleteType="email"
                    keyboardType="email-address"
                    w="75%"
                />
                <Input
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    type="password"
                    autoCompleteType="password"
                    secureTextEntry={true}
                    w="75%"
                />
                <Button bgColor={"primary.100"} onPress={() => console.log(email, password)} w="75%">
                    Login
                </Button>
                <Button bgColor={"primary.50"} variant={"subtle"} onPress={() => navigation.navigate('ForgotPassword')} w="75%">
                    Forgot password?
                </Button>
                <Button variant={"ghost"} onPress={() => navigation.navigate('Register')} w="75%">
                    Don't have an account? Sign Up
                </Button>
                <Button variant={"ghost"} onPress={() => navigation.navigate('UserProfile')}>
                Otwórz profil użytkownika
                </Button>
            </VStack>
        </Box>
    );
};

export default LoginScreen;
