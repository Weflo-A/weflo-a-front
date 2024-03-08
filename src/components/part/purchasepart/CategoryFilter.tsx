import React, { useEffect, useState } from 'react';
import { SquareCard } from './SquareCard';
import colors from 'src/constants/colors';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import Pagination, {
  PaginationHandles,
} from 'src/components/common/Pagination';
import RadioBtn from 'src/components/common/RadioBtn';

type Category = 'ALL' | 'BLADE' | 'MOTOR' | 'ESC' | 'OTHER';
type SortBy = 'recommend' | 'cheap' | 'expensive' | 'star';

interface ProductData {
  description: string;
  name: string;
  price: number;
  star: number;
  image: string;
  type: Category;
  part: string;
}

const CategoryFilter: React.FC<{ productData: ProductData[] }> = ({
  productData,
}) => {
  const [filteredProducts, setFilteredProducts] =
    useState<ProductData[]>(productData);
  const [selectedCategory, setSelectedCategory] = useState<Category>('ALL');
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginationRef = React.useRef<PaginationHandles>(null);

  const [selected, setSelected] = useState<string | undefined>('');

  // 처음 렌더링될 때 filteredProducts를 초기화
  useEffect(() => {
    setFilteredProducts(productData);
  }, [productData]);

  // filter 바뀌면 page 1로 초기화
  useEffect(() => {
    setPage(1);
  }, [selectedCategory]);

  // 필터된 결과를 페이지별로 나누는 함수
  const paginateData = () => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  // 카테고리별 필터링 함수
  const handleFilter = (category: Category) => {
    let filtered: ProductData[];
    setSelectedCategory(category);
    if (category === 'ALL') {
      filtered = productData;
    } else {
      filtered = productData.filter((product) => product.type === category);
    }
    setFilteredProducts(filtered);
  };

  // 정렬 함수
  const handleSort = (sortBy: SortBy) => {
    const sortedProducts = [...filteredProducts];

    switch (sortBy) {
      case 'recommend':
        // 추천순 정렬
        sortedProducts.sort((a, b) => b.star - a.star);
        break;
      case 'cheap':
        // 최저가순 정렬
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'expensive':
        // 최고가순 정렬
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'star':
        // 평점순 정렬
        sortedProducts.sort((a, b) => b.star - a.star);
        break;
      default:
        break;
    }

    setFilteredProducts(sortedProducts);
  };

  return (
    <Div>
      <Filter>
        {/* 카테고리 필터링 버튼 */}
        <FilterBtn>
          <Box
            onClick={() => handleFilter('ALL')}
            selected={selectedCategory === 'ALL'}
          >
            All
          </Box>
          <Box
            onClick={() => handleFilter('BLADE')}
            selected={selectedCategory === 'BLADE'}
          >
            Blade
          </Box>
          <Box
            onClick={() => handleFilter('MOTOR')}
            selected={selectedCategory === 'MOTOR'}
          >
            Motor
          </Box>
          <Box
            onClick={() => handleFilter('ESC')}
            selected={selectedCategory === 'ESC'}
          >
            ESC
          </Box>
          <Box
            onClick={() => handleFilter('OTHER')}
            selected={selectedCategory === 'OTHER'}
          >
            기타 부품
          </Box>
        </FilterBtn>

        {/* 정렬 체크박스 */}
        <FilterBtn>
          <RadioBtn
            value='recommend'
            label='추천순'
            checked={selected === 'recommend'}
            onChange={() => {
              setSelected('recommend');
              handleSort('recommend');
            }}
          />
          <RadioBtn
            value='cheap'
            label='최저가순'
            checked={selected === 'cheap'}
            onChange={() => {
              setSelected('cheap');
              handleSort('cheap');
            }}
          />
          <RadioBtn
            value='expensive'
            label='최고가순'
            checked={selected === 'expensive'}
            onChange={() => {
              setSelected('expensive');
              handleSort('expensive');
            }}
          />
          <RadioBtn
            value='star'
            label='평점순'
            checked={selected === 'star'}
            onChange={() => {
              setSelected('star');
              handleSort('star');
            }}
          />
        </FilterBtn>
      </Filter>

      {/* 필터링 및 정렬된 상품 목록 */}
      <RowCard>
        {paginateData().map((data, index) => (
          <SquareCard
            key={index}
            data={{
              id: index,
              store: 'A 스토어',
              name: data.name,
              price: data.price,
              rank: data.star,
              image: data.image,
            }}
          />
        ))}
      </RowCard>
      {/* 페이지네이션 컴포넌트 */}
      {paginateData().length > 0 && (
        <PageMove>
          <ChevronLeft
            sx={{
              color: '#64748B',
              width: '20px',
              height: '20px',
              background: 'none',
            }}
            onClick={handlePrevPage}
          />
          <Pagination
            ref={paginationRef}
            postsNum={filteredProducts.length}
            postsPerPage={itemsPerPage}
            setCurrentPage={handlePageChange}
            currentPage={page}
          />
          <ChevronRight
            sx={{ color: '#64748B', width: '20px', height: '20px' }}
            onClick={handleNextPage}
          />
        </PageMove>
      )}
    </Div>
  );
};

export default CategoryFilter;

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const Filter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 12px 16px;
  justify-content: space-between;
  align-items: center;
  gap: 313px;
  border-radius: 8px;
  border: 1px solid ${colors.basic200};
  background: white;
`;

const FilterBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  border: none;
  background: none;
`;

const Box = styled.button<{ selected: boolean }>`
  display: flex;
  padding: 4px 12px 3px 12px;
  justify-content: center;
  align-items: center;
  border: none;
  gap: 10px;
  border-radius: 8px;
  background: ${({ selected }) =>
    selected ? colors.basic700 : colors.basic200};
  color: ${({ selected }) => (selected ? 'white' : colors.basic600)};
  font-size: 14px;
`;

const RowCard = styled(FilterBtn)`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  gap: 10px;
`;

const PageMove = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
