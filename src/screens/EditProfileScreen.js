import React from 'react';
import { Button, VStack, Input, Box, Heading } from 'native-base';

const EditProfileScreen = ({ navigation }) => {
    return (
        <Box flex={1} p="2" w="100%" mx="auto" justifyContent="center">
            <Heading size="lg" textAlign="center">Edytuj Profil</Heading>
            <VStack space={4} mt="5">
                <Input mx="3" placeholder="Imię" />
                <Input mx="3" placeholder="Nazwisko" />
                <Input mx="3" placeholder="E-mail" />
                <Button mt="5" mx="3" onPress={() => console.log('Zapisz zmiany')}>
                    Zapisz zmiany
                </Button>
            </VStack>
        </Box>
    );
};

export default EditProfileScreen;
