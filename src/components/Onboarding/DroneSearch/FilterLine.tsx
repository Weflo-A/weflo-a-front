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
      <FilterName>{filterData[0].filterName}</FilterName>
      {filterData.map((item) => (
        <CheckBox key={item.id} label={item.label} />
      ))}
    </Line>
  );
};

export default FilterLine;

const Line = styled.div`
  /* width: 981px; */
  width: 100%;
  height: 40px;
  border-radius: 8px;
  background: var(--Primary-Transparent-10, rgba(87, 151, 255, 0.1));
  display: grid;
  grid-template-columns: 1fr 0.8fr 1.2fr 1.2fr 1.2fr 1.2fr 3fr;
`;

const FilterName = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;

  color: ${colors.basic500};

  /* Body/B3/Medium */
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`;
