import LoginScreen from "@/app/login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootLayout from "@/app/tabs/_layout";

const Stack = createNativeStackNavigator();

export default function AuthLayout() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false, }} />
            <Stack.Screen name="app" component={RootLayout}  options={{ headerShown: false, }} />
        </Stack.Navigator>
    );
}
