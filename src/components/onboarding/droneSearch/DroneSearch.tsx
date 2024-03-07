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
import { Typography } from '@mui/material';

const DroneSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log('검색어:', searchTerm);
    alert('검색하기 성공');
  };

  return (
    <Container>
      <SearchContainer>
        <Typography fontSize='14px' color={colors.basic700}>
          드론 ID로 검색
        </Typography>
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
        <Typography variant='body2' color={colors.basic400}>
          설정값 초기화
        </Typography>
        <Button
          text={<>검색하기</>}
          buttonType='accent'
          onClick={() => alert('검색하기 성공')}
          style={{ width: '122px', height: '44px', fontSize: '18px' }}
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
  border: 1px solid ${colors.basic200};
  background: white;
  white-space: nowrap;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
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
  background: none;
  border: none;
  outline: none;

  &::placeholder {
    color: ${colors.basic400};
    /* Caption/C2/Regular */
    font-size: 11px;
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
