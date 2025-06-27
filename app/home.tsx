import {StyleSheet, View, Text, SafeAreaView} from "react-native";

export default function home(){
    // @ts-ignore
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Ansur</Text>
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