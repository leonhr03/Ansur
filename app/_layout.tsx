import { Tabs } from 'expo-router';
import 'react-native-reanimated';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

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
                }}
            >
                <Tabs.Screen name="account" />
                <Tabs.Screen name="home" />
                <Tabs.Screen name="survey" />
            </Tabs>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E06363',
    },
});
