import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    FlatList,
    ListRenderItem,
    Button,
    TouchableOpacity,
    TextInput
} from "react-native";
import 'react-native-url-polyfill/auto';
import { useLocalSearchParams, useRouter} from "expo-router";
import { ref, push, onValue } from "firebase/database";
import { db } from "@/firebase";


type DataItem = {
    id: string;
    title: string;
};

const item: DataItem[] = [
    { id: '1', title: 'question 1' },
    { id: '2', title: 'question 2' },
    { id: '3', title: 'question 3' },
];
export default function Home() {

    const { question, id } = useLocalSearchParams<{ question: string, id: string }>();
    const [answers, setAnswers] = useState<string[]>([]);
    const [input, setInput] = useState('');
    const router = useRouter();

    const submitAnswer = async () => {
        if (!input.trim()) return;
        const answerRef = ref(db, `answers/${id}`);
        await push(answerRef, input.trim());
        setInput('');
    };


    const renderItem: ListRenderItem<DataItem> = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.question}>{item.title}</Text>
        </View>
    );


    useEffect(() => {
        if (!id) return;

        const answersRef = ref(db, `answers/${id}`);
        const unsubscribe = onValue(answersRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const loaded = Object.values(data) as string[];
                setAnswers(loaded);
            } else {
                setAnswers([]);
            }
        });

        return () => unsubscribe();
    }, [id]);



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.questionHeader}>
                <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                    <Text style={styles.backText}>←</Text>
                </TouchableOpacity>
                <Text style={styles.questionHeading}>{question}</Text>
            </View>
            <FlatList
                style={styles.list}
                data={answers}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.question}>{item}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />

            <View style={styles.inputRow}>
                <TextInput
                    style={styles.input}
                    placeholder="Antwort"
                    placeholderTextColor="#E06363"
                    value={input}
                    onChangeText={setInput}
                />
                <TouchableOpacity style={styles.button} onPress={submitAnswer}>
                    <Text style={styles.text}>add</Text>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E06363",
        padding: 16,
    },

    item: {
        backgroundColor: '#EF9999',
        padding: 20,
        marginBottom: 15,
        marginHorizontal: 25,
        borderRadius: 15,
    },

    question: {
        fontSize: 18,
        color: "#E06363",
    },

    list: {
        marginTop: 20,
        marginBottom: 60,
    },



    text: {
        color: "#E06363",
        textAlign: "center",
    },

    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginBottom: 20,
    },

    input: {
        flex: 1,
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#EF9999',
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#EF9999',
        color: "#E06363",
        marginRight: 10,
    },

    button: {
        padding: 12,
        backgroundColor: "#EF9999",
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    questionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#EF9999",
        paddingVertical: 12,  // weniger Höhe
        paddingHorizontal: 16,
        borderRadius: 8,
        marginTop: 23,
        marginHorizontal: 10,
    },

    backButton: {
        marginRight: 12,
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: "#E06363",
        borderRadius: 6,
    },

    backText: {
        color: "#EF9999",
        fontSize: 16,
        fontWeight: "bold",
    },

    questionHeading: {
        fontSize: 16,           // etwas kleiner
        color: "#E06363",
        flexShrink: 1,          // damit Text nicht overflowt
    }


})
