import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, SafeAreaView, FlatList, ListRenderItem, TouchableOpacity, TextInput} from "react-native";
import 'react-native-url-polyfill/auto';
import {onValue, ref} from "firebase/database";
import {db} from "@/firebase";
import {useRouter} from "expo-router";


type DataItem = {
    id: string;
    title: string;
};


export default function Home() {
    const [data, setData] = useState<DataItem[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();

    useEffect(() => {
        const questionsRef = ref(db, 'questions');

        const unsubscribe = onValue(questionsRef, (snapshot) => {
            const dataFromDB = snapshot.val() as Record<string, { question: string, createdAt?: number }>;

            if (dataFromDB) {
                const loadedData = Object.entries(dataFromDB)
                    .map(([id, value]) => ({
                        id,
                        title: value.question || 'No question',
                        createdAt: value.createdAt || 0,
                    }))
                    .sort((a, b) => b.createdAt - a.createdAt)
                    .map(({id, title}) => ({id, title}));
                setData(loadedData);
            } else {
                setData([]);
            }
        });

        return () => unsubscribe();
    }, []);

    const filteredData = data.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const renderItem: ListRenderItem<DataItem> = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.question}>{item.title}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push(`/pages/answer?question=${encodeURIComponent(item.title)}&id=${item.id}`)}
            >
                <Text style={styles.text}>to answers</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Ansur</Text>
            <TextInput
                style={styles.searchInput}
                placeholder="Suche..."
                placeholderTextColor={"#E06363"}
                value={searchTerm}
                onChangeText={setSearchTerm}
            />
            <FlatList
                style={styles.list}
                data={filteredData}
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

    searchInput: {
        backgroundColor: '#EF9999',
        marginHorizontal: 5,
        borderRadius: 15,
        padding: 10,
        marginTop: 10,
        color: '#E06363',
        fontSize: 16,
    },

    item: {
        backgroundColor: '#EF9999',
        padding: 20,
        marginTop: 15,
        marginHorizontal: 16,
        borderRadius: 15,
    },

    question: {
        fontSize: 18,
        color: "#E06363",
    },

    list: {
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
});
