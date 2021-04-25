import React from 'react';
import { Button } from './styles';

export type Direction = 'prev' | 'next';

export interface PageButtonProps {
    direction: Direction;
    disabled?: boolean;
    onClick: () => void;
}

export const PageButton = ({
    direction,
    disabled,
    onClick,
}: PageButtonProps) => {
    return (
        <Button onClick={onClick} disabled={disabled}>
            {direction.toUpperCase()}
        </Button>
    );
};
