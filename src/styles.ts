import styled, { createGlobalStyle, keyframes } from 'styled-components';

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

// Add global styles
export const GlobalStyle = createGlobalStyle`
 body {
   margin: 0;
   padding: 0;
   font-family: sans-serif;
 }
`;

export const AppContainer = styled.div`
    display: grid;
    grid-auto-rows: 50px 100% 50px;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const LogoWrapper = styled.a`
    display: flex;
    align-items: center;
    white-space: nowrap;
    text-decoration: none;
    color: currentColor;
    font-weight: bold;
`;

export const Logo = styled.img`
    max-width: 100%;
    max-height: 30px;
    animation: ${spin} infinite 20s linear;
`;
