import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { db } from '@/firebase'; // Realtime DB
import { ref, push, serverTimestamp } from 'firebase/database'; // WICHTIG: Realtime Imports

export default function Account() {
    const [question, setQuestion] = useState('');

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
                onChangeText={setQuestion}
                value={question}
                placeholder="Type in your question"
            />
            <TouchableOpacity style={styles.button} onPress={writeQuestion}>
                <Text style={styles.inputText}>Add Question</Text>
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
        height: 40,
        margin: 12,
        marginTop: 90,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#EF9999',
        borderRadius: 15,
        borderColor: '#EF9999',
        width: '80%',
        color: '#E06363',
    },

    button: {
        backgroundColor: '#EF9999',
        borderRadius: 12,
        padding: 10,
        marginTop: 10
    },

    inputText: {
        color: '#E06363',
        textAlign: 'center'
    },
});
