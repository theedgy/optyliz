import React from 'react';
import { Input, Label, SearchFormWrapper, Submit } from './styles';

export const SearchForm = () => {
    return (
        <SearchFormWrapper>
            <Label>Search title</Label>
            <Input placeholder={'eg. Pulp Fiction'} />
            <Submit />
        </SearchFormWrapper>
    );
};
