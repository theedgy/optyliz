import React from 'react';
import { SearchItem } from '../../services/apiTypes';
import { Article } from '../Article';
import { ListWrapper } from './styles';

interface ListProps {
    items: SearchItem[];
}

export const List = ({ items }: ListProps) => {
    return (
        <ListWrapper>
            {items.map((item) => (
                <Article key={item.imdbID} item={item} />
            ))}
        </ListWrapper>
    );
};
