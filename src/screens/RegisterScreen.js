import React, { useState } from 'react';
import {Box, VStack, Input, Button, Heading, Image} from 'native-base';
import logo from "../assets/images/logo-dark.png";

const RegistrationScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');

    return (
        <Box flex={1} p="5" w="100%" mx="auto" justifyContent="center" backgroundColor="white">
            <Image source={logo} alt="SafeTrail Logo" size="xl"  resizeMode="contain" alignSelf="center" mb="4"/>
            <Heading size="lg" color="coolGray.800" fontWeight="600" paddingBottom="5" textAlign="center">
                Register in SafeTrail
            </Heading>
            <VStack space={3} alignItems="center">
                <Input
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                    w="75%"
                />
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
                    secureTextEntry={true}
                    w="75%"
                />
                <Input
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    type="password"
                    secureTextEntry={true}
                    w="75%"
                />
                <Button bgColor={"primary.100"} onPress={() => console.log(email, password, confirmPassword, username)} w="75%">
                    Sign Up
                </Button>
                <Button variant={"ghost"} onPress={() => navigation.navigate('Login')} w="75%">
                    Already have an account? Log In
                </Button>
            </VStack>
        </Box>
    );
};

export default RegistrationScreen;
