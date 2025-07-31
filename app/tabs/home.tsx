import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, SafeAreaView, FlatList, ListRenderItem, Button, TouchableOpacity} from "react-native";
import 'react-native-url-polyfill/auto';
import {onValue, ref} from "firebase/database";
import {db} from "@/firebase";
import {useRouter} from "expo-router";



type DataItem = {
    id: string;
    title: string;
};

const data: DataItem[] = [
    { id: '1', title: 'answer 1' },
    { id: '2', title: 'answer 2' },
    { id: '3', title: 'answer 3' },
];
export default function Home() {
    const [data, setData] = useState<DataItem[]>([]);
    const router = useRouter();

    useEffect(() => {
        const questionsRef = ref(db, 'questions');

        const unsubscribe = onValue(questionsRef, (snapshot) => {
            const dataFromDB = snapshot.val() as Record<string, { question: string }>;

            if (dataFromDB) {
                const loadedData = Object.entries(dataFromDB).map(([id, value]) => ({
                    id,
                    title: value.question || 'Keine Frage',
                }));
                setData(loadedData);
            } else {
                setData([]);
            }
        });

        return () => unsubscribe();
    }, []);


    const renderItem: ListRenderItem<DataItem> = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.question}>{item.title}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push(`/pages/answer?question=${encodeURIComponent(item.title)}&id=${item.id}`)}
            >
                <Text style={styles.text}>zu den Antworten</Text>
            </TouchableOpacity>

        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            {} <Text style={styles.heading}>Ansur</Text>
            <FlatList
                style={styles.list}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E06363",
        padding: 16,
    },

    heading: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: "bold",
        color: "#EF9999"
    },

    item: {
        backgroundColor: '#EF9999',
        padding: 20,
        marginBottom: 15,
        marginHorizontal: 16,
        borderRadius: 15,
    },

    question: {
        fontSize: 18,
        color: "#E06363"
    },

    list: {
        marginTop: 20,
        marginBottom: 60,
    },

    button: {
        padding: 10,
        backgroundColor: "#E06363",
        borderRadius: 15,
        marginTop: 20,
        borderWidth: 0,


    },

    text: {
        color: "#EF9999",
        textAlign: "center",
    }

})
