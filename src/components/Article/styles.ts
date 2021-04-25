import styled from 'styled-components';

export const ArticleWrapper = styled.article`
    display: flex;
    align-items: center;
    border: var(--generalBorder);
    border-radius: var(--borderRadius);
    padding: var(--generalSpacing);
`;
export const ArticleContent = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--generalSpacing);
    flex: 1;
    color: currentColor;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
        color: darkred;
    }
`;

export const ArticleTitle = styled.h2`
    font-size: 20px;
    font-weight: bold;
    margin: 0;
    text-align: center;
`;

export const ArticleInfo = styled.span`
    font-size: 12px;
    color: grey;
`;

export const ArticleImage = styled.figure`
    margin: 0;
    line-height: 0;
    width: 150px;

    @media (max-width: 767px) {
        width: 100px;
    }

    img {
        max-width: 100%;
    }
`;
