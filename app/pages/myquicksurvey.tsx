import React, {useEffect, useState} from "react"
import {
    SafeAreaView,
    View,
    StyleSheet,
    Text,
    FlatList,
    ListRenderItem,
    TouchableOpacity,
    Alert,
    TextInput,
} from "react-native";
import {Link, Tabs, useRouter} from "expo-router";
import {equalTo, onValue, orderByChild, push, query, ref} from "firebase/database";
import {db, getFirebaseAuth} from "@/firebase";
import {Ionicons} from "@expo/vector-icons";



export default function MyQuestions(){



    type DataItem = {
        id: string;
        title: string;
    };

    const [userSurvey, setUsersurvey] = useState<DataItem[]>([]);
    const [survey, setSurvey] = useState('');
    const router = useRouter();
    const auth = getFirebaseAuth();
    const user = auth.currentUser;


    useEffect(() => {
        if (!user) return;

        const surveyRef = ref(db, 'survey');
        const userSurveyQuery = query(surveyRef, orderByChild('userId'), equalTo(user.uid));

        const unsubscribe = onValue(userSurveyQuery, (snapshot) => {
            const dataFromDB = snapshot.val() as Record<string, { question: string, createdAt?: number }>;

            if (dataFromDB) {
                const loadedData = Object.entries(dataFromDB)
                    .map(([id, value]) => ({
                        id,
                        title: value.question || 'No question',
                        createdAt: value.createdAt || 0,
                    }))
                    .sort((a, b) => b.createdAt - a.createdAt);

                setUsersurvey(loadedData);
            } else {
                setUsersurvey([]);
            }
        });

        return () => unsubscribe();
    }, [user]);


    const writeQuestion = async () => {
        Alert.alert('Button works!');
        if (!survey.trim()) {
            Alert.alert('Please enter a question!');
            return;
        }

        try {
            const questionsRef = ref(db, 'survey');
            await push(questionsRef, {
                question: survey,
                createdAt: Date.now(),
                userId: user?.uid,
            });


            setSurvey('');
        } catch (error: any) {
            Alert.alert('Error:', error.message);
            console.error(error);
        }
    };

    const renderItem: ListRenderItem<DataItem> = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.question}>{item.title}</Text>
        </View>
    );

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.questionHeader}>
                <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                    <Text style={styles.backText}>←</Text>
                </TouchableOpacity>
                <Text style={styles.questionHeading}>My Quicksurveys</Text>
            </View>
            <View style={styles.linkContainer}>
                <Link href={"/pages/myquestions"} style={styles.link}>Question</Link>
                <Link href={"/pages/myquicksurvey"} style={styles.linkClicked}>Survey</Link>
            </View>

            <FlatList
                style={styles.list}
                data={userSurvey}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />

            <View style={styles.inputRow}>
                <TextInput
                    style={styles.input}
                    placeholder="Add a Question"
                    placeholderTextColor="#EF9999"
                    value={survey}
                    onChangeText={setSurvey}
                />
                <TouchableOpacity style={styles.button} onPress={writeQuestion}>
                    <Text style={styles.text}>add</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#E06363",
        padding: 16,
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
    },

    list: {

        width: '100%',
    },


    text: {
        color: "#EF9999",
        textAlign: "center",
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

    itemButton: {
        padding: 10,
        backgroundColor: "#E06363",
        borderRadius: 15,
        marginTop: 20,
    },

    button: {
        padding: 12,
        backgroundColor: "#E06363",
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        flex: 1,
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#E06363',
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#E06363',
        color: "#EF9999",
        marginRight: 10,
    },

    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        marginBottom: 10,
        backgroundColor: '#EF9999',
        padding: 10,
        borderRadius: 15,
    },

    linkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: `center`,
        marginTop: 10,
        marginHorizontal: 5,
        padding: 10,
        borderRadius:15,
        backgroundColor: '#EF9999',
    },

    link: {
      marginHorizontal: 30,
      color: "#E06363",
    },

    linkClicked: {
        marginHorizontal: 30,
        color: "#EF9999",
        backgroundColor: "#E06363",
        borderRadius: 15,
        padding: 5,
    },

})