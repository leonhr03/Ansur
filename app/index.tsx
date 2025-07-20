import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getFirebaseAuth } from "@/firebase";

export default function Index() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    const login = async () => {
        try {
            const auth = getFirebaseAuth();
            await signInWithEmailAndPassword(auth, email, password);
            router.replace("/tabs/home");
        } catch (error: any) {
            setMessage(error.message);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
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
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("/register")}>
                <Text style={styles.link}>Don't have an account? Create one</Text>
            </TouchableOpacity>
            {message ? <Text style={styles.message}>{message}</Text> : null}
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: "#E06363",
    },

    heading: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: "bold",
        color: "#EF9999",
    },

    title: {
        fontSize: 30,
        marginBottom: 70,
        textAlign: 'center',
        color: "#EF9999",
    },

    input: {
        fontSize: 20,
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
        fontSize: 20,
        textAlign: 'center',
    },
    message: {
        marginTop: 20,
        textAlign: 'center',
        color: 'red',
    },

    link: {
        fontSize: 18,
        textAlign: "center",
        color: "#EF9999",
        marginTop: 20,
    }
});
