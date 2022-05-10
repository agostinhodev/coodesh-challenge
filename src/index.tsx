import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import 'react-native-gesture-handler';
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
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar style="inverted" />
            <NavigationContainer>
                <AppRoutes />
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default registerRootComponent(App);
