import React, { useState } from 'react';
import { SquareCard } from './SquareCard';
import CheckBox from '../common/CheckBox';

// 부품 카테고리와 정렬 방식을 나타내는 타입
type Category = 'all' | 'blade' | 'motor' | 'ESC' | 'other';
type SortBy = 'recommend' | 'lowest' | 'highest' | 'rank';

interface ProductData {
  id: number;
  store: string;
  name: string;
  price: number;
  rank: number;
  image: string;
  category: string; // 카테고리 정보 추가
}

const CategoryFilter: React.FC<{ productData: ProductData[] }> = ({
  productData,
}) => {
  // 상태를 초기값으로 설정
  const [filteredProducts, setFilteredProducts] =
    useState<ProductData[]>(productData);

  // 카테고리별 필터링 함수
  const handleFilter = (category: Category) => {
    let filtered: ProductData[];
    if (category === 'all') {
      filtered = productData;
    } else {
      filtered = productData.filter((product) => product.category === category);
    }
    setFilteredProducts(filtered);
  };

  // 정렬 함수
  const handleSort = (sortBy: SortBy) => {
    const sortedProducts = [...filteredProducts];

    switch (sortBy) {
      case 'recommend':
        // 추천순 정렬
        sortedProducts.sort((a, b) => b.rank - a.rank);
        break;
      case 'lowest':
        // 최저가순 정렬
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'highest':
        // 최고가순 정렬
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'rank':
        // 평점순 정렬
        sortedProducts.sort((a, b) => b.rank - a.rank);
        break;
      default:
        break;
    }

    setFilteredProducts(sortedProducts);
  };

  return (
    <div>
      {/* 카테고리 필터링 버튼 */}
      <div>
        <button onClick={() => handleFilter('all')}>All</button>
        <button onClick={() => handleFilter('blade')}>Blade</button>
        <button onClick={() => handleFilter('motor')}>Motor</button>
        <button onClick={() => handleFilter('ESC')}>ESC</button>
        <button onClick={() => handleFilter('other')}>기타 부품</button>
      </div>

      {/* 정렬 체크박스 */}
      <div>
        <CheckBox label='추천순' onChange={() => handleSort('recommend')} />
        <CheckBox label='최저가순' onChange={() => handleSort('lowest')} />
        <CheckBox label='최고가순' onChange={() => handleSort('highest')} />
        <CheckBox label='평점순' onChange={() => handleSort('rank')} />
      </div>

      {/* 필터링 및 정렬된 상품 목록 */}
      {filteredProducts.map((data, index) => (
        <SquareCard
          key={index}
          data={{
            id: data.id,
            store: data.store,
            name: data.name,
            price: data.price,
            rank: data.rank,
            image: data.image,
            category: data.category,
          }}
        />
      ))}
    </div>
  );
};

export default CategoryFilter;
