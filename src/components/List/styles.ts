import styled from 'styled-components';

export const ListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: var(--generalSpacing);

    @media (max-width: 1365px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1023px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 767px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
