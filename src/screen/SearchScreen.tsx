import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

function SearchScreen({ navigation }) {
    const [search, setSearch] = useState('');
    const [searchApi, results, ErrorMessage] = useResults();


    const filterResults = price => {
        const res = results.filter(result => {
            return result.price === price
        });
        return res;

    };

    return (
        <View style={styles.container}>
            <SearchBar searchValue={search} onSearchChange={setSearch} onSearchSubmit={() => searchApi(search)} />
            <ScrollView>
                <ResultsList title="Cost Effective" results={filterResults("$")} navigation={navigation} />
                <ResultsList title="Bit Pricier" results={filterResults("$$")} navigation={navigation} />
                <ResultsList title="Big Spender" results={filterResults("$$$")} navigation={navigation} />
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default SearchScreen;