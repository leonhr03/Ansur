import {StyleSheet, View, Text} from "react-native";

export default function survey(){
    // @ts-ignore
    return(
        <View>
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
})