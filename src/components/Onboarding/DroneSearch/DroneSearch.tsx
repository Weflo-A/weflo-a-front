import React, { useState } from 'react';
import styled from 'styled-components';
import FilterLine from './FilterLine';
import Button from 'src/components/common/Button';
import {
  modelFilterData,
  yearFilterData,
  groupFilterData,
} from 'src/assets/data/filterData';
import colors from 'src/constants/colors';
import { Search } from 'src/assets';

const DroneSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log('검색어:', searchTerm);
    alert('검색하기 성공');
  };

  return (
    <Container>
      <SearchContainer>
        <SearchLabel>드론 ID로 검색</SearchLabel>
        <SearchInputContainer>
          <SearchInput
            type='text'
            placeholder='드론 ID를 입력하세요'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search onClick={handleSearch} />
        </SearchInputContainer>
      </SearchContainer>
      <FilterLine filterData={modelFilterData} />
      <FilterLine filterData={yearFilterData} />
      <FilterLine filterData={groupFilterData} />
      <Bottom>
        <Reset>설정값 초기화</Reset>
        <Button
          text={<>검색하기</>}
          buttonType='accent'
          onClick={() => alert('검색하기 성공')}
        />
      </Bottom>
    </Container>
  );
};

export default DroneSearch;

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 12px;
  border: 1px solid var(--Basic-B-200, #e2e8f0);
  background: #fff;
  font-family: 'Pretendard';
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
`;

const SearchLabel = styled.div`
  color: ${colors.basic700};
  /* Body/B3/Medium */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`;

const SearchInputContainer = styled.div`
  display: flex;
  width: 300px;
  height: 40px;
  padding: 11px 8px 11px 12px;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 1px solid ${colors.basic200};
  background: ${colors.basic50};
`;

const SearchInput = styled.input`
  width: 100%;
  color: ${colors.basic500};
  /* Caption/C2/Regular */
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 16.5px */
  background: none;
  border: none;
  outline: none;

  &::placeholder {
    color: ${colors.basic400};

    /* Caption/C2/Regular */
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 16.5px */
  }
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
`;

const Reset = styled.div`
  color: ${colors.basic400};

  /* Body/B2/Medium */
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
`;
