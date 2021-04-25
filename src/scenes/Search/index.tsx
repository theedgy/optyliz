import React, { useEffect, useState } from 'react';
import { Notice, Wrapper } from './styles';
import { SearchForm } from '../../components/SearchForm';
import { List } from '../../components/List';
import { fetcher } from '../../services/fetcher';
import { SearchItem, SearchResponse } from '../../services/apiTypes';
import { Skeleton } from '../../components/Skeleton';
import { useDebounce } from '../../services/useDebounce';
import { Pagination } from '../../components/Pagnation';

// This values is not changable and it comes from API settings; Used to calculate last page for pagination
const postsPerPage = 10;

export const Search = () => {
    const [results, setResults] = useState<SearchItem[]>([]);
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState<string | false>(false);
    const [inputValue, setInputValue] = useState<string | number>('');
    const [currentPage, setPage] = useState<number>(1);
    const [totalResults, setTotalResults] = useState(0);

    const debouncedValue = useDebounce<string | number>(inputValue, 500);

    // Reset state whenever input value has bean cleared
    useEffect(() => {
        if (!debouncedValue) {
            setResults([]);
            setError(false);
        }
    }, [debouncedValue]);

    // Reset page to 1 whenever input is reused
    useEffect(() => {
        if (debouncedValue) {
            setPage(1);
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
            page: currentPage,
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

            // Set results for pagination counting
            setTotalResults(parseInt(response.totalResults, 10) || 0);

            // Remove loading state on query finish
            setLoading(false);
        });
    }, [debouncedValue, currentPage]);

    return (
        <Wrapper>
            <SearchForm value={inputValue} setValue={setInputValue} />

            {isLoading && !results.length && !isError && <Skeleton />}

            {isError && <Notice>{isError}</Notice>}

            {results.length > 0 && (
                <>
                    <List items={results} />

                    {totalResults && totalResults > postsPerPage && (
                        <Pagination
                            currentPage={currentPage}
                            lastPage={
                                totalResults <=
                                (currentPage - 1) * postsPerPage +
                                    results.length
                            }
                            onPageChange={(dir) =>
                                setPage((prev) => {
                                    if (dir === 'next') {
                                        return prev + 1;
                                    }

                                    if (dir === 'prev' && prev > 1) {
                                        return prev - 1;
                                    }

                                    return 1;
                                })
                            }
                        />
                    )}
                </>
            )}
        </Wrapper>
    );
};
