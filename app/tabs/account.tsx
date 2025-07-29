import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {db, getFirebaseAuth} from '@/firebase'; // Realtime DB
import { ref, push, serverTimestamp } from 'firebase/database';
import { signOut } from "firebase/auth";
import {router} from "expo-router";


export default function Account() {
    const [question, setQuestion] = useState('');

    const auth = getFirebaseAuth();


    const Logout = async () => {
        signOut(auth)
            .then(() => {
                router.replace("/");
            })
            .catch((error) => {
                console.error("Error", error);
            });

    }

    const writeQuestion = async () => {
        if (!question.trim()) {
            Alert.alert('Bitte gib eine Frage ein!');
            return;
        }

        try {
            const questionsRef = ref(db, 'questions'); // Referenz zur questions-Collection
            await push(questionsRef, {
                question,
            });
            Alert.alert('question is saved!');
            setQuestion('');
        } catch (error: any) {
            Alert.alert('Error:', error.message);
            console.error(error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Account</Text>
            <Ionicons name="person" size={140} color="black" style={styles.icon} />
            <Text style={styles.nameText}>Username</Text>
            <TextInput
                style={styles.input}
                placeholder="type in your question"
                placeholderTextColor={"#E06363"}
                autoCapitalize="none"
                value={question}
                onChangeText={setQuestion}
            />
            <TouchableOpacity style={styles.button} onPress={writeQuestion}>
                <Text style={styles.inputText}>Add Question</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.buLogout} onPress={Logout}>
                <Text style={styles.inputLogout}>Logout</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#E06363',
        padding: 16
    },

    heading: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#EF9999',
        marginTop: 20
    },

    icon: {
        marginTop: 80,
        color: '#EF9999'
    },

    nameText: {
        fontSize: 18,
        marginTop: 10,
        color: '#EF9999'
    },

    input: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#EF9999',
        padding: 12,
        borderRadius: 8,
        marginBottom: 16,
        marginTop: 90,
        backgroundColor: '#EF9999',
        color: "#E06363",
        width: '80%',
        alignSelf: 'center',
    },


    button: {
        backgroundColor: '#EF9999',
        borderRadius: 12,
        padding: 10,
        marginTop: 10,

    },

    buLogout: {
        marginTop: 60,
    },

    inputText: {
        color: '#E06363',
        textAlign: 'center',
        fontSize: 18,
    },

    inputLogout: {
        color: '#EF9999',
        textAlign: 'center',
        fontSize: 18,
    },
});
