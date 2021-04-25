import styled from 'styled-components';

export const SearchFormWrapper = styled.form`
    display: flex;
    justify-content: center;
    margin-bottom: var(--generalSpacing);
`;

export const Input = styled.input`
    width: 80%;
    height: 50px;
    margin: 20px auto 0;
    border: 0;
    border-bottom: 2px solid #000;
    font-size: 20px;
    padding: 0 var(--generalSpacing);
    border-radius: 0;
`;
