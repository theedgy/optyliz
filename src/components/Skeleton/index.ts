import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
    to {
        transform: translateX(100%);
    }
`;

export const Skeleton = styled.div`
    display: inline-block;
    height: 200px;
    position: relative;
    overflow: hidden;
    background-color: #dddbdd;
    border-radius: var(--borderRadius);
    margin-bottom: var(--generalSpacing);

    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: translateX(-100%);
        background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0,
            rgba(255, 255, 255, 0.4) 20%,
            rgba(255, 255, 255, 0.8) 60%,
            rgba(255, 255, 255, 0) 100%
        );
        animation: ${shimmer} 2s infinite;
    }
`;
