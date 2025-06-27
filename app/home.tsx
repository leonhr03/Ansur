import {StyleSheet, View, Text} from "react-native";

export default function home(){
    // @ts-ignore
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Ansur</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: "bold",
    },

    container: {
        flex: 1,
        backgroundColor: "#E06363"
    }
})