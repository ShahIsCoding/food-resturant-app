import React, { useEffect, useState } from "react";
import yelp from '../api/yelp';

export default function () {

    const [ErrorMessage, setErrorMessage] = useState('');
    const [results, setResults] = useState([]);

    const searchApi = async (searchTerm) => {
        try {
            const resp = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(resp.data.businesses);
        }
        catch (err) {
            setErrorMessage('Something Went Worng');
        }
    };

    useEffect(() => {
        searchApi('pasta');
    }, []);
   
    return [searchApi, results, ErrorMessage];
};