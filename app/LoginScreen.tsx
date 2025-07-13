import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from "expo-router";
import { auth } from '@/firebase';



export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const router = useRouter();


    const login = async () => {
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setMessage("Login erfolgreich!");
            router.push("/tabs/account");
        } catch (error: any) {
            setMessage(error.message);
        }
    };


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="E-Mail"
                autoCapitalize="none"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Passwort"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={login}>
                <Text style={styles.buttonText}>Einloggen</Text>
            </TouchableOpacity>
            {message ? <Text style={styles.message}>{message}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: "#E06363", },
    title: { fontSize: 24, marginBottom: 70, textAlign: 'center', color: "#EF9999" },
    input: {
        borderWidth: 1,
        borderColor: '#EF9999',
        padding: 12,
        borderRadius: 8,
        marginBottom: 16,
        backgroundColor: '#EF9999',
        marginLeft: 40,
        marginRight: 40,
        color: "#E06363"

    },
    button: {
        backgroundColor: '#EF9999',
        color: "#E06363",
        paddingVertical: 12,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 12,
        marginLeft: 60,
        marginRight: 60,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    message: {
        marginTop: 20,
        textAlign: 'center',
        color: 'red',
    }
});
