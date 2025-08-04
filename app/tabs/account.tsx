import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Alert,
    View
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getFirebaseAuth } from '@/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'expo-router';








export default function Account() {


    const auth = getFirebaseAuth();
    const user = auth.currentUser;
    const router = useRouter();



    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.replace('/');
        } catch (error: any) {
            Alert.alert('Logout failed', error.message);
        }
    };




    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.questionHeader}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={styles.heading}>Account</Text>
                </View>
            </View>

            <Ionicons name="person" size={140} color="black" style={styles.icon} />
            <Text style={styles.nameText}>{user?.email ?? 'No user logged in'}</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push(`/pages/myquestions`)}>
                <Text style={styles.inputText}>To My Questions</Text>
            </TouchableOpacity>


            <TouchableOpacity
                style={styles.logoutButton}
                onPress={handleLogout}>
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#E06363',
        padding: 16
    },

    icon: {
        marginTop: 50,
        color: '#EF9999'
    },

    nameText: {
        fontSize: 18,
        marginTop: 10,
        color: '#EF9999'
    },

    input: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#EF9999',
        padding: 12,
        borderRadius: 8,
        marginBottom: 16,
        marginTop: 50,
        backgroundColor: '#EF9999',
        color: "#E06363",
        width: '80%',
        alignSelf: 'center',
    },


    button: {
        backgroundColor: '#EF9999',
        borderRadius: 12,
        padding: 10,
        marginTop: 50,

    },

    inputText: {
        color: '#E06363',
        textAlign: 'center',
        fontSize: 18,
    },

    logoutButton: {
        marginTop: 50,

    },

    logoutText: {
        color: '#EF9999',
        textAlign: 'center',
        fontSize: 18,
    },

    inputLogout: {
        color: '#EF9999',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 80,
    },

    questionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 16,
        marginTop: 20,
    },

    heading: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#EF9999',
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
        color: "#E06363",
    },


    text: {
        color: "#EF9999",
        textAlign: "center",
    },


});
