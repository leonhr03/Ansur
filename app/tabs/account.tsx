import React from 'react';
import {StyleSheet, Text, SafeAreaView, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export default function account(){

    function comming(){
        alert("comming soon 👍")
    }
    // @ts-ignore
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Account</Text>
            <Ionicons name="person" size={140} color="black"  style={styles.icon}/>
            <Text style={styles.nameText}>Username</Text>
            <TouchableOpacity style={styles.button} onPress={comming}>
                <Text style={styles.inputText}>Add Question</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#E06363",
        padding: 16,
    },

    heading: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: "bold",
        color: "#EF9999",
        marginTop: 20,
    },

    icon: {
        marginTop: 80,
        color: "#EF9999",
    },

    nameText: {
        fontSize: 18,
        marginTop: 10,
        color: "#EF9999"
    },

    button: {
        backgroundColor: "#EF9999",
        borderRadius: 12,
        padding: 10,
        marginTop: 80,
    },

    inputText: {
        color: "#E06363"
    }
})