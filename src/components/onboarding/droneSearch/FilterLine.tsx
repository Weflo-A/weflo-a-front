import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CheckBox from 'src/components/common/CheckBox';
import colors from 'src/constants/colors';
import styled from 'styled-components';

interface FilterDataType {
  id: string;
  label: string;
  filterName: string;
}

interface FilterLineProps {
  filterData: FilterDataType[];
  selectedFilters: string[];
  setSelectedFilters: (selectedFilters: string[]) => void;
}

const FilterLine: React.FC<FilterLineProps> = ({
  filterData,
  selectedFilters,
  setSelectedFilters,
}) => {
  const [selectedFilterIds, setSelectedFilterIds] = useState<string[]>([]);

  const handleCheckboxChange = (filterId: string) => {
    if (filterId === 'all' || filterId === '전체') {
      const allSelected = !selectedFilterIds.includes('all' || '전체');
      const updatedSelectedFilterIds = allSelected
        ? filterData.map((item) => item.id)
        : [];
      setSelectedFilterIds(updatedSelectedFilterIds);
      setSelectedFilters(updatedSelectedFilterIds);
      console.log('all', selectedFilters);
    } else {
      const updatedSelectedFilterIds = selectedFilterIds.includes(filterId)
        ? selectedFilterIds.filter((id) => id !== filterId)
        : [...selectedFilterIds, filterId];
      setSelectedFilterIds(updatedSelectedFilterIds);
      setSelectedFilters(updatedSelectedFilterIds);
      console.log(selectedFilters);
    }
  };

  return (
    <Line>
      {filterData.length > 0 && (
        <FilterName>
          <Typography fontSize='14px' color={colors.basic500}>
            {filterData[0].filterName}
          </Typography>
        </FilterName>
      )}
      {filterData.map((item) => (
        <CheckBox
          key={item.id}
          label={item.label}
          checked={selectedFilters.includes(item.id)}
          onChange={() => handleCheckboxChange(item.id)}
        />
      ))}
    </Line>
  );
};

export default FilterLine;

const Line = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  background: ${colors.primaryOpacity10};
  display: grid;
  grid-template-columns: 1fr 0.8fr 1.2fr 1.2fr 1.2fr 1.2fr 1.2fr 2fr;
  white-space: nowrap;
`;

const FilterName = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
