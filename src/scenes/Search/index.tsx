import React, { useEffect, useState } from 'react';
import { Notice, Wrapper } from './styles';
import { SearchForm } from '../../components/SearchForm';
import { List } from '../../components/List';
import { fetcher } from '../../services/fetcher';
import { SearchItem, SearchResponse } from '../../services/apiTypes';
import { Skeleton } from '../../components/Skeleton';
import { useDebounce } from '../../services/useDebounce';

export const Search = () => {
    const [results, setResults] = useState<SearchItem[]>([]);
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState<string | false>(false);
    const [inputValue, setInputValue] = useState<string | number>('');

    const debouncedValue = useDebounce<string | number>(inputValue, 500);

    // Reset state whenever input value has bean cleared
    useEffect(() => {
        if (!debouncedValue) {
            setResults([]);
            setError(false);
        }
    }, [debouncedValue]);

    // Fetch data
    useEffect(() => {
        // Do not fire query whenever input is empty
        if (!debouncedValue) {
            return;
        }

        // Set loading state for UX
        setLoading(true);

        // Fetching
        fetcher<SearchResponse>({
            s: debouncedValue,
        }).then((response) => {
            // Add resutls to state
            if (response.Response === 'True') {
                setResults(response.Search);
                setError(false);
            } else {
                // Handle custom error from '200' status response
                setResults([]);

                if (!!response.Error) {
                    setError(response.Error);
                }
            }

            // Remove loading state on query finish
            setLoading(false);
        });
    }, [debouncedValue]);

    return (
        <Wrapper>
            <SearchForm value={inputValue} setValue={setInputValue} />

            {isLoading && !results.length && !isError && <Skeleton />}

            {isError && <Notice>{isError}</Notice>}

            {results.length > 0 && <List items={results} />}
        </Wrapper>
    );
};
