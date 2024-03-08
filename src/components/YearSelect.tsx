import { ChangeEvent } from 'react';
import colors from 'src/constants/colors';
import styled from 'styled-components';
import arrowImg from 'src/assets/icon/arrow-down.png';

interface YearSelectProp {
  value: number;
  onChange: (evnet: ChangeEvent<HTMLSelectElement>) => void;
}

//
//
//

const SelectBox = styled.select`
  width: 7rem;
  padding: 0.5rem 0.75rem 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  color: ${colors.primary100};
  appearance: none;
  background: ${colors.primary20} url(${arrowImg}) no-repeat right 0.5rem center;
  &::-webkit-scrollbar {
    display: none;
  }
  option {
    background: white;
    color: black;
  }
`;

//
//
//

const YearSelect = ({ value, onChange }: YearSelectProp) => {
  const today = new Date();
  const currentYear = today.getFullYear();
  // const currentMonth = today.getMonth() + 1;

  const yearOptions = Array.from({ length: currentYear - 1989 }, (_, index) => {
    const year = 1990 + index;
    return { value: year, option: year + '년' };
  });

  const monthOptions = Array.from({ length: 12 }, (_, index) => {
    const month = index + 1;
    return month + '월';
  });

  const isYearMonthValue = value.includes('월');

  return (
    <SelectBox value={value} onChange={onChange}>
      {isYearMonthValue
        ? monthOptions.map((month, index) => (
            <option key={index}>
              {value.split(' ')[0]} {month}
            </option>
          ))
        : yearOptions.map((year) => <option key={year}>{year}</option>)}
    </SelectBox>
  );
};

export default YearSelect;
