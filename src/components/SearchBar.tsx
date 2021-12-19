import React from "react";
import { View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

function SearchBar() {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput style={styles.inputStyle} placeholder="Search" />
        </View>
    );
}


const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0Eeee',
        height: 50,
        borderRadius: 5,
        marginTop:10,
        marginHorizontal: 15,
        flexDirection: "row"
    },
    inputStyle: {
        // borderColor: 'black',
        // borderWidth: 2,
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15
    }
});
export default SearchBar;