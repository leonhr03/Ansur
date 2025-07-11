import { Tabs } from 'expo-router';
import 'react-native-reanimated';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {Ionicons} from "@expo/vector-icons";

export default function RootLayout() {
    // @ts-ignore
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" backgroundColor="#E06363" />
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        borderRadius: 15,
                        borderColor: '#EF9999',
                        backgroundColor: '#EF9999',
                        marginBottom: 10,
                        marginLeft: 10,
                        marginRight: 10,
                        padding: 20,
                    },

                    tabBarLabelStyle: {
                        color: '#E06363',
                    }
                }}
            >
                <Tabs.Screen name="survey" options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="clipboard-outline" color="#E06363" size={20}></Ionicons>
                    ),
                }}/>
                <Tabs.Screen name="index" options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="home-outline" color="#E06363" size={20}></Ionicons>
                    ),
                }} />
                <Tabs.Screen name="account" options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="person-outline" color="#E06363" size={20}></Ionicons>
                    ),
                }}/>
            </Tabs>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E06363',
        padding: 16,
    },
});
