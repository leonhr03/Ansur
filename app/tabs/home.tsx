import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, FlatList, ListRenderItem, Button, TouchableOpacity} from "react-native";
import 'react-native-url-polyfill/auto';


function comming(){
    alert("comming soon...")
}

type DataItem = {
    id: string;
    title: string;
};

const data: DataItem[] = [
    { id: '1', title: 'question 1' },
    { id: '2', title: 'question 2' },
    { id: '3', title: 'question 3' },
];
export default function home(){

    const renderItem: ListRenderItem<DataItem> = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.question}>{item.title}</Text>
            <TouchableOpacity style={styles.button} onPress={comming}>
                <Text style={styles.text}>zu den Antworten</Text>
            </TouchableOpacity>
        </View>
    );

    // @ts-ignore
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Ansur</Text>
            <FlatList
                style={styles.list}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    heading: {
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

    container: {
        flex: 1,
        backgroundColor: "#E06363",
        padding: 16,
    },

    list: {
        marginTop: 20,
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
