import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter} from "expo-router";
import { getFirebaseAuth } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";


export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const router = useRouter();


    const register = async () => {
        try {
            const auth = getFirebaseAuth();
            await createUserWithEmailAndPassword(auth, email, password);
            setMessage("Registrierung erfolgreich!");
            router.replace("/tabs/home");
        } catch (error: any) {
            setMessage(error.message);
        }
    };


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <TextInput
                style={styles.input}
                placeholder="E-Mail"
                placeholderTextColor={"#E06363"}
                autoCapitalize="none"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Passwort"
                placeholderTextColor={"#E06363"}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={register}>
                <Text style={styles.buttonText}>register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("/")}>
                <Text style={styles.link}>Already have a Account? Log in</Text>
            </TouchableOpacity>
            {message ? <Text style={styles.message}>{message}</Text> : null}
        </View>
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
        color: '#E06363',
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
