import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

function SearchScreen() {
    const [search, setSearch] = useState('');
    const [searchApi,  results, ErrorMessage ] = useResults();


    const filterResults = price => {
        return results.filter(result => {
            return result.price === price
        });
    };

    return (
        <View style={styles.container}>
            <SearchBar searchValue={search} onSearchChange={setSearch} onSearchSubmit={() => searchApi(search)} />
            <Text>Screen Screen {search}  {results.length}</Text>
            <ResultsList title="Cost Effective" results={filterResults('$')} />
            <ResultsList title="Bit Pricier" results={filterResults('$$')} />
            <ResultsList title="Big Spender" results={filterResults('$$$')} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
    }
});

export default SearchScreen;