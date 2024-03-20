import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import customTheme from "./src/theme/theme";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";
import UserProfileScreen from "./src/screens/UserProfileScreen";
import MedicalCardScreen from "./src/screens/MedicalCardScreen";
import EditProfileScreen from "./src/screens/EditProfileScreen";
import ChangePasswordScreen from "./src/screens/ChangePasswordScreen";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NativeBaseProvider theme={customTheme}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
                    <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Rejestracja' }} />
                    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ title: 'Reset Password' }} />
                    <Stack.Screen name="UserProfile" component={UserProfileScreen} options={{ title: 'Profil Użytkownika' }} />
                    <Stack.Screen name="MedicalCard" component={MedicalCardScreen} options={{ title: 'Karta Medyczna' }} />
                    <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ title: 'Edytuj Profil' }} />
                    <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} options={{ title: 'Zmień Hasło' }} />
                    {/* inne ekrany jak będą gotowe */}
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
};

export default App;
