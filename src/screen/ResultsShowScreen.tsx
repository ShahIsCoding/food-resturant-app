import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, Dimensions, Linking } from "react-native";
import { Feather, Ionicons } from '@expo/vector-icons';
import yelp from "../api/yelp";



const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
const ResultShowScreen = ({ route }) => {
    const { id } = route.params;
    const [response, setResponse] = useState(null);
    const [review, setReview] = useState(null);

    const getResult = async (id) => {
        const resp = await yelp.get(`/${id}`);
        setResponse(resp.data);

        const review = await yelp.get(`/${id}/reviews`);
        console.log(review.data.reviews);

        setReview(review.data.reviews);
    };
    useEffect(() => {
        getResult(id);
    }, [])
    if (!response) return null;
    return (
        <View style={styles.conatiner}>
            <FlatList
                horizontal
                data={response.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            />
            <>
                <View style={styles.row}>
                    <Text style={styles.text}>{response.name}</Text>
                    <Text style={styles.text}>{!(response.is_closed) ? "Open" : "Closed"}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={{ color: 'blue', fontSize: 20 }}
                        onPress={() => Linking.openURL(response.url)}>
                        Website
                    </Text>
                    <View style={styles.row}><Feather name="phone" size={24} color="black" onPress={() => Linking.openURL(`tel:${response.phone}`)} /><Text style={styles.text}>{response.phone}</Text></View>
                </View>
                <View style={styles.row}>
                    <Ionicons name="location-outline" size={24} color="black" /><Text style={styles.text}>{response.location.address1},{response.location.city},{response.location.state},{response.location.zip_code}</Text>
                </View>
                <Text style={styles.text}>Rating : {response.rating}</Text>
                <View>
                    <Text style={styles.text}>Reviews</Text>
                </View>
                <FlatList
                    data={review}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return <Text style={styles.review}>{item.text}</Text>;
                    }}
                />
            </>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        margin: 10,
        height: windowHeight / 3,
        width: windowWidth - 20,
    },
    row: {
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    text: {
        fontSize: 20,
        marginVertical: 2.5,
        marginLeft: 10,
        flexWrap:"wrap"
    },
    review: {
        margin: 10,
    },
    conatiner: {
        flex: 1
    }

});

export default ResultShowScreen;
