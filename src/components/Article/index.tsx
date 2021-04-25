import React from 'react';
import { SearchItem } from '../../services/apiTypes';
import {
    ArticleContent,
    ArticleImage,
    ArticleTitle,
    ArticleWrapper,
    ArticleInfo,
} from './styles';

interface ArticleProps {
    item: SearchItem;
}

export const Article = ({ item }: ArticleProps) => {
    return (
        <ArticleWrapper>
            {
                // Do not render image when its API value is undefied which is `N/A` from my research
                item.Poster !== 'N/A' && (
                    <ArticleImage>
                        <img src={item.Poster} alt={item.Title} />
                    </ArticleImage>
                )
            }
            <ArticleContent
                href={`https://www.imdb.com/title/${item.imdbID}`}
                target={'_blank'}
                rel="noopener noreferrer"
            >
                <ArticleTitle>{item.Title}</ArticleTitle>
                <ArticleInfo>{`${item.Type} (${item.Year})`}</ArticleInfo>
            </ArticleContent>
        </ArticleWrapper>
    );
};
