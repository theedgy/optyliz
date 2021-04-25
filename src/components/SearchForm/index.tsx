import React from 'react';
import { Input, SearchFormWrapper } from './styles';

interface SearchFormProps {
    value?: string | number;
    setValue: (value: string | number) => void;
}
export const SearchForm = ({ setValue, value }: SearchFormProps) => {
    return (
        <SearchFormWrapper>
            <Input
                placeholder={'Start typing to run search'}
                defaultValue={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </SearchFormWrapper>
    );
};
