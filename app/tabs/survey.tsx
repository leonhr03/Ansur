import React, {useEffect, useRef, useState} from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    FlatList,
    View,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import {onValue, ref} from "firebase/database";
import {db} from "@/firebase";


type DataItem = {
    id: string;
    title: string;
};


export default function Survey() {
    const [data, setData] = useState<DataItem[]>([]);
    const flatListRef = useRef<FlatList>(null);


    useEffect(() => {
        const surveyRef = ref(db, 'survey');

        const unsubscribe = onValue(surveyRef, (snapshot) => {
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

    const renderItem = ({ item }: any) => (
        <View style={styles.page}>
            <Text style={styles.question}>{item.title}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#E06363' }]}>
                    <Text style={styles.buttonText}>Ja</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#E06363' }]}>
                    <Text style={styles.buttonText}>Nein</Text>
                </TouchableOpacity>
            </View>

        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Survey</Text>
            <FlatList
                style={styles.list}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const availableHeight = Dimensions.get('window').height - 100; // z.B. 100px für Header + Margins

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E06363',
        padding: 16,
    },

    list: {
        marginTop: 20,
        marginBottom: 60,
    },

    heading: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: "bold",
        color: "#EF9999"
    },

    page: {
        backgroundColor: "#EF9999",
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 130,
        marginVertical: 15,
        marginHorizontal: 20,
        borderRadius: 15,
    },

    question: {
        fontSize: 26,
        color: '#E06363',
        textAlign: 'center',
        marginBottom: 40,
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 20,
        marginBottom: 20,
    },
    button: {
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#EF9999',
        fontSize: 20,
    },
    noAnswerText: {
        color: '#E06363',
        fontSize: 18,
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
});
