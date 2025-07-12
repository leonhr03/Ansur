import React from 'react';
import {StyleSheet, Text, SafeAreaView} from "react-native";

export default function account(){
    // @ts-ignore
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Account</Text>
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

    container: {
        flex: 1,
        backgroundColor: "#E06363",
        padding: 16,
    }
})