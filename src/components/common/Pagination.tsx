import { forwardRef, useImperativeHandle } from 'react';
import colors from 'src/constants/colors';
import styled from 'styled-components';

export interface PaginationHandles {
  goToNextPage: () => void;
  goToPrevPage: () => void;
}

interface PaginationProp {
  postsNum: number;
  postsPerPage: number;
  setCurrentPage: (page: number) => void;
  currentPage: number;
}

//
//
//

const StyledButton = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.5rem;
  border: none;
  background: white;
  color: ${colors.basic500};
  &:hover {
    color: ${colors.primary100};
    background: ${colors.primaryOpacity20};
  }
  &.active {
    color: ${colors.primary100};
    background: ${colors.primaryOpacity20};
  }
`;

//
//
//

const Pagination = forwardRef<PaginationHandles, PaginationProp>(
  ({ postsNum, postsPerPage, setCurrentPage, currentPage }, ref) => {
    // 페이지 개수 (버튼 개수)
    const pageList = [];
    const totalPages = Math.ceil(postsNum / postsPerPage);

    for (let i = 1; i <= totalPages; i++) {
      pageList.push(i);
    }

    const goToNextPage = () => {
      setCurrentPage(currentPage + 1);
    };

    const goToPrevPage = () => {
      setCurrentPage(currentPage - 1);
    };

    if (totalPages === 1) {
      return null;
    }

    useImperativeHandle(ref, () => ({
      goToNextPage,
      goToPrevPage,
    }));

    return (
      <div
        style={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {pageList.map((page) => (
          <StyledButton
            key={page}
            onClick={() => setCurrentPage(page)}
            className={currentPage === page ? 'active' : ''}
          >
            {page}
          </StyledButton>
        ))}
      </div>
    );
  }
);

export default Pagination;
