import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';


const ResultsCard = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: result.image_url }} style={styles.image} />
            <Text style={styles.name}>{result.name}</Text>
            <Text style={styles.name}>{result.rating} Stars,     {result.review_count} Reviews</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginLeft:15
    },
    image: {
        width: 200,
        height:150,
        borderRadius: 4,
        marginBottom:5
    },
    name:{
        fontWeight:'800',
        fontSize:14
    }
})
export default ResultsCard;