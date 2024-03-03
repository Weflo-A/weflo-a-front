import { Typography } from '@mui/material';
import React from 'react';
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
}

const FilterLine: React.FC<FilterLineProps> = ({ filterData }) => {
  return (
    <Line>
      <FilterName>
        <Typography fontSize='14px' color={colors.basic500}>
          {filterData[0].filterName}
        </Typography>
      </FilterName>
      {filterData.map((item) => (
        <CheckBox key={item.id} label={item.label} />
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
  grid-template-columns: 1fr 0.8fr 1.2fr 1.2fr 1.2fr 1.2fr 3fr;
`;

const FilterName = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
