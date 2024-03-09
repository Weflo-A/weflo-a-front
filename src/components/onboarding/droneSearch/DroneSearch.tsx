import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FilterLine from './FilterLine';
import Button from 'src/components/common/Button';
import { modelFilterData, yearFilterData } from 'src/assets/data/filterData';
import colors from 'src/constants/colors';
import { Search } from 'src/assets';
import { Typography } from '@mui/material';
import { postSearch } from 'src/api/monitoring';
import { DroneLists } from './DroneLists';

const DroneSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<string[]>([]);
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState<{ groupInfo: any[] }>({
    groupInfo: [],
  });
  const [searchDrones, setSearchDrones] = useState<{ droneInfo: any[] }>({
    droneInfo: [],
  });

  useEffect(() => {
    postSearch(searchTerm, selectedModels, selectedYears, selectedGroups).then(
      (res) => {
        setSearchResults(res.data.data);
        setSearchDrones(res.data.data);
        console.log('드론 조회 데이터:', res.data.data);
        console.log(
          'requestbody?',
          searchTerm,
          selectedModels,
          selectedYears,
          selectedGroups
        );
      }
    );
  }, []);

  const groupFilterData = searchResults.groupInfo
    ? searchResults.groupInfo.map((group: any) => ({
        id: group.name,
        label: group.name,
        filterName: '드론그룹',
      }))
    : [];

  const handleReset = () => {
    setSearchTerm('');
    setSelectedModels([]);
    setSelectedYears([]);
    setSelectedGroups([]);
  };

  const handleSearch = () => {
    // 검색하기 버튼 클릭 시 postSearch 호출
    postSearch(searchTerm, selectedModels, selectedYears, selectedGroups).then(
      (res) => {
        setSearchResults(res.data.data);
        setSearchDrones(res.data.data);
        console.log('드론 조회 데이터:', res.data.data);
      }
    );
  };

  return (
    <div>
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
        <FilterLine
          filterData={modelFilterData}
          selectedFilters={selectedModels}
          setSelectedFilters={setSelectedModels}
        />
        <FilterLine
          filterData={yearFilterData}
          selectedFilters={selectedYears}
          setSelectedFilters={setSelectedYears}
        />
        <FilterLine
          filterData={groupFilterData}
          selectedFilters={selectedGroups}
          setSelectedFilters={setSelectedGroups}
        />
        <Bottom>
          <Typography
            variant='body2'
            color={colors.basic400}
            onClick={handleReset}
          >
            설정값 초기화
          </Typography>
          <Button
            text={<>검색하기</>}
            buttonType='accent'
            onClick={handleSearch}
            style={{ width: '122px', height: '44px', fontSize: '18px' }}
          />
        </Bottom>
      </Container>
      <DroneLists data={searchDrones.droneInfo} />
    </div>
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
