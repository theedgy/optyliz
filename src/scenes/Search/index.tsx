import React from 'react';
import { Wrapper } from './styles';
import { SearchForm } from '../../components/SearchForm';
import { List } from '../../components/List';

export const Search = () => {
    return (
        <Wrapper>
            <SearchForm />
            <List />
        </Wrapper>
    );
};
