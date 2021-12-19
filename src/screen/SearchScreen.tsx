import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from "../components/SearchBar";

function SearchScreen() {
    return (
        <View style={styles.container}>
            <SearchBar />
            <Text>Screen Screen</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
    }
});

export default SearchScreen;