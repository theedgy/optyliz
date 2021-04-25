import React from 'react';
import { Direction, PageButton } from './components/PageButton';
import { PageCount, PaginationRow } from './styles';

interface PaginationProps {
    currentPage?: number;
    onPageChange: (direction: Direction) => void;
    lastPage?: boolean;
}

export const Pagination = ({
    currentPage,
    onPageChange,
    lastPage,
}: PaginationProps) => {
    return (
        <PaginationRow>
            <PageButton
                direction={'prev'}
                onClick={() => onPageChange('prev')}
                disabled={currentPage === 1}
            />

            <PageCount>{currentPage}</PageCount>

            <PageButton
                direction={'next'}
                onClick={() => onPageChange('next')}
                disabled={lastPage}
            />
        </PaginationRow>
    );
};
