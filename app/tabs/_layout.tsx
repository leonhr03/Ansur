import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#EF9999' }}>
            <StatusBar style="dark" backgroundColor="#E06363" />
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: '#E06363',
                    tabBarInactiveTintColor: '#E06363',
                    tabBarStyle: {
                        borderRadius: 15,
                        backgroundColor: '#EF9999',
                        marginBottom: 19,
                        marginLeft: 10,
                        marginRight: 10,
                        padding: 20,
                        position: 'absolute',
                        elevation: 1,
                        borderWidth: 0,
                        borderColor: '#E06363',
                    },
                    tabBarLabelStyle: {
                        color: '#E06363',
                    },
                }}
            >

                {/* 2. Survey */}
                <Tabs.Screen
                    name="survey"
                    options={{
                        tabBarLabel: 'Umfrage',
                        tabBarIcon: ({ color, size, focused }) => (
                            <Ionicons name={focused ? 'clipboard' : 'clipboard-outline'} size={size} color={color} />
                        ),
                    }}
                />
                {/* 1. Home */}
                <Tabs.Screen
                    name="home"
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size, focused }) => (
                            <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
                        ),
                    }}
                />

                {/* 3. Account */}
                <Tabs.Screen
                    name="account"
                    options={{
                        tabBarLabel: 'Konto',
                        tabBarIcon: ({ color, size, focused }) => (
                            <Ionicons name={focused ? 'person' : 'person-outline'} size={size} color={color} />
                        ),
                    }}
                />
            </Tabs>
        </SafeAreaView>
    );
}
