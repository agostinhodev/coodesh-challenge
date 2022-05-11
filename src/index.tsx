import 'react-native-gesture-handler';

import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { UserProvider } from './contexts/UserContext';
import AppRoutes from './routes/app.routes';

const App: React.FC = () => {
    let [fontsLoaded] = useFonts({
        Archivo_400Regular,
        Archivo_700Bold,
        Poppins_400Regular,
        Poppins_600SemiBold,
    });

    if (!fontsLoaded) return <View />;

    return (
        <>
            <StatusBar style="inverted" />
            <NavigationContainer>
                <UserProvider>
                    <AppRoutes />
                </UserProvider>
            </NavigationContainer>
        </>
    );
};

export default registerRootComponent(App);
