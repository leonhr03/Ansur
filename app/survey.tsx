import {StyleSheet, View, Text} from "react-native";

export default function survey(){
    // @ts-ignore
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>survey</Text>
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