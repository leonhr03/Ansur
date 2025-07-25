import React from 'react';
import {StyleSheet, Text, SafeAreaView} from "react-native";

export default function survey(){
    // @ts-ignore
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Survey</Text>
            <Text style={styles.comming}>The Quicksurvey funktion is comming soon. the developer will do it when he have time for these</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    heading: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: "bold",
        color: "#EF9999",
        marginTop: 20,
    },

    comming: {
        textAlign: "center",
        fontSize: 20,
        color: "#EF9999",
        marginTop: 100,
        marginLeft: 20,
        marginRight: 20,
    },


    container: {
        flex: 1,
        backgroundColor: "#E06363",
        padding: 16,
    }
})