import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from 'react-native';


const ResultsList = ({ title, results }) => {
    return (
        <View>
            <Text style={styles.title}>{title},{results.length}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        fontWeight:'bold',
    }
})
export default ResultsList;