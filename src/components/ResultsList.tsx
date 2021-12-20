import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsCard from "./ResultCard";

const ResultsList = ({ title, results, navigation }) => {
    if(!results.length){
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                data={results}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultShowScreen', { id: item.id,name:item.name})}>
                            <ResultsCard result={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
})
export default ResultsList;