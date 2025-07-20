import React from 'react';
import {StyleSheet, Text, SafeAreaView} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export default function account(){
    // @ts-ignore
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Account</Text>
            <Ionicons name="person" size={100} color="black"  style={styles.icon}/>
            <Text style={styles.nameText}>Username</Text>
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
        marginTop: 60,
    },

    nameText: {
        fontSize: 15,
        marginTop: 10,
        color: "#EF9999"
    }
})