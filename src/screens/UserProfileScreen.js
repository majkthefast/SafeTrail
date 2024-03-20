import React from 'react';
import { ScrollView, Box, VStack, Text, Image, Button, Divider, useTheme } from 'native-base';

const UserProfileScreen = ({ navigation }) => {
    const { colors } = useTheme();

    const userData = {
        username: 'TrailExplorer',
        email: 'user@example.com',
        profilePic: 'https://via.placeholder.com/150',
        completedTrails: 15,
        totalDistance: '120 km',
    };

    return (
        <ScrollView bg={colors.primary[50]} pt="5">
            <Box alignItems="center">
                <Image
                    source={{ uri: userData.profilePic }}
                    alt="Profile Picture"
                    size="150px"
                    borderRadius="full"
                />
                <Text bold fontSize="xl" mt="2">{userData.username}</Text>
                <Text fontSize="md">{userData.email}</Text>
            </Box>

            <VStack space={5} mt="5" px="5">
                <Box rounded="lg" bg={colors.primary[100]} p="4" shadow={2}>
                    <Text bold fontSize="md" color="white">Statystyki</Text>
                    <Divider my="2" bg="white" />
                    <Text color="white">Przebyte szlaki: {userData.completedTrails}</Text>
                    <Text color="white">Łączny dystans: {userData.totalDistance}</Text>
                </Box>

                <Button onPress={() => navigation.navigate('EditProfile')} colorScheme="blue" shadow={2}>
                    Edytuj Profil
                </Button>
                <Button onPress={() => navigation.navigate('MedicalCard')} variant="subtle" colorScheme="red" shadow={2}>
                    Karta Medyczna
                </Button>
                <Button onPress={() => navigation.navigate('ChangePassword')} variant="ghost" colorScheme="dark" shadow={2}>
                    Zmień Hasło
                </Button>
            </VStack>
        </ScrollView>
    );
};

export default UserProfileScreen;
