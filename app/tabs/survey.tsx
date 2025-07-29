import React, { useRef, useState } from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    FlatList,
    View,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

const { height } = Dimensions.get('window');

const questions = [
    { id: '1', text: 'frage 1' },
    { id: '2', text: 'frage 2' },
    { id: '3', text: 'frage 3' },
    { id: '4', text: 'frage 4' },
    { id: '5', text: 'frage 5' },
    { id: '6', text: 'frage 6' },
    { id: '7', text: 'frage 7' },
    { id: '8', text: 'frage 8' },
    { id: '9', text: 'frage 9' },
    { id: '10', text: 'frage 10' },
    { id: '11', text: 'frage 11' },
    { id: '12', text: 'frage 12' },
    { id: '13', text: 'frage 13' },
    { id: '14', text: 'frage 14' },
    { id: '15', text: 'frage 15' },
    { id: '16', text: 'frage 16' },
];

export default function Survey() {
    const [answers, setAnswers] = useState<{ [key: string]: string }>({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);

    const handleAnswer = (id: string, answer: 'ja' | 'nein' | 'keine') => {
        setAnswers((prev) => ({ ...prev, [id]: answer }));

        if (currentIndex < questions.length - 1) {
            const nextIndex = currentIndex + 1;
            setCurrentIndex(nextIndex);
            flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
        }
        // Hier kannst du auch eine Aktion einbauen, wenn das Ende erreicht ist
    };

    const renderItem = ({ item }: any) => (
        <View style={styles.page}>
            <Text style={styles.question}>{item.text}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: '#EF9999' }]}
                    onPress={() => handleAnswer(item.id, 'ja')}
                >
                    <Text style={styles.buttonText}>Ja</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: '#EF9999' }]}
                    onPress={() => handleAnswer(item.id, 'nein')}
                >
                    <Text style={styles.buttonText}>Nein</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => handleAnswer(item.id, 'keine')}>
                <Text style={styles.noAnswerText}>Keine Antwort</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Survey</Text>
            <FlatList
                ref={flatListRef}
                data={questions}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                pagingEnabled
                scrollEnabled={false}
                decelerationRate="fast"
                snapToAlignment="start"
                showsVerticalScrollIndicator={false}
                snapToInterval={availableHeight}
                getItemLayout={(_, index) => ({
                    length: availableHeight,
                    offset: availableHeight * index,
                    index,
                })}
                initialScrollIndex={0}
            />
        </SafeAreaView>
    );
}

const availableHeight = Dimensions.get('window').height - 100; // z.B. 100px für Header + Margins

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E06363',
    },

    heading: {
        marginTop: 20,
        paddingHorizontal: 16,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: "bold",
        color: "#EF9999"
    },

    page: {
        height: availableHeight,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 20,
    },

    question: {
        fontSize: 26,
        color: '#EF9999',
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
        color: '#E06363',
        fontSize: 20,
    },
    noAnswerText: {
        color: '#EF9999',
        fontSize: 18,
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
});
