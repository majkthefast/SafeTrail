import React, { useState } from 'react';
import { ScrollView, VStack, Input, Box, Heading, Button, Text } from 'native-base';

const MedicalCardScreen = ({ navigation }) => {
    const [medicalInfo, setMedicalInfo] = useState({
        bloodType: '',
        allergies: '',
        chronicConditions: '',
        medications: '',
        emergencyContact: '',
    });

    const handleSave = () => {
        console.log('Zapisane informacje medyczne:', medicalInfo);
        // Tu komunikacja z backendem aby zapisać zmiany
    };

    return (
        <ScrollView>
            <Box flex={1} p="2" w="100%" mx="auto">
                <Heading size="lg" textAlign="center">Karta Medyczna</Heading>
                <VStack space={4} mt="5">
                    <Input
                        mx="3"
                        placeholder="Grupa krwi"
                        value={medicalInfo.bloodType}
                        onChangeText={(text) => setMedicalInfo({ ...medicalInfo, bloodType: text })}
                    />
                    <Input
                        mx="3"
                        placeholder="Alergie"
                        value={medicalInfo.allergies}
                        onChangeText={(text) => setMedicalInfo({ ...medicalInfo, allergies: text })}
                    />
                    <Input
                        mx="3"
                        placeholder="Choroby przewlekłe"
                        value={medicalInfo.chronicConditions}
                        onChangeText={(text) => setMedicalInfo({ ...medicalInfo, chronicConditions: text })}
                    />
                    <Input
                        mx="3"
                        placeholder="Przyjmowane leki"
                        value={medicalInfo.medications}
                        onChangeText={(text) => setMedicalInfo({ ...medicalInfo, medications: text })}
                    />
                    <Input
                        mx="3"
                        placeholder="Kontakt do bliskiej osoby"
                        value={medicalInfo.emergencyContact}
                        onChangeText={(text) => setMedicalInfo({ ...medicalInfo, emergencyContact: text })}
                    />
                    <Button mt="5" mx="3" onPress={handleSave}>
                        Zapisz
                    </Button>
                </VStack>
            </Box>
        </ScrollView>
    );
};

export default MedicalCardScreen;
