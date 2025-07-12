import React from 'react';
import LoginScreen from "@/app/index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootLayout from "@/app/tabs/_layout";

const Stack = createNativeStackNavigator();

export default function AuthLayout() {
    return (
        <Stack.Navigator initialRouteName="index">
            <Stack.Screen name="index" component={LoginScreen}  options={{ headerShown: false, }} />
            <Stack.Screen name="app" component={RootLayout}  options={{ headerShown: false, }} />
        </Stack.Navigator>
    );
}