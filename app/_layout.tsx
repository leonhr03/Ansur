import React from 'react';
import LoginScreen from "@/app/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootLayout from "@/app/tabs/_layout";


export type AuthStackParamList = {
    Login: undefined;
    app: undefined;
};


const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthLayout() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false, }} />
            <Stack.Screen name="app" component={RootLayout}  options={{ headerShown: false, }} />
        </Stack.Navigator>
    );
}