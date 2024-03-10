import { ChangeEvent } from 'react';
import colors from 'src/constants/colors';
import styled from 'styled-components';
import arrowImg from 'src/assets/icon/arrow-down.png';

interface YearSelectProp {
  value: string | number;
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

  const yearOptions = Array.from({ length: currentYear - 2019 }, (_, index) => {
    const year = 2020 + index;
    return { value: year, option: year + '년' };
  });

  const monthOptions = Array.from({ length: 12 }, (_, index) => {
    const month = index + 1;
    return month + '월';
  });

  // value 타입이 string인지 여부
  const isString = typeof value === 'string';
  // 월까지 포함한 리스트 출력하는지 여부 & string일 때만 includes 사용
  const isYearMonthValue = isString ? value?.includes('월') : false;

  return isYearMonthValue ? (
    <SelectBox value={value} onChange={onChange}>
      {monthOptions.map((month, index) => (
        <option key={index}>
          {isString ? value?.split(' ')[0] : null} {month}
        </option>
      ))}{' '}
    </SelectBox>
  ) : (
    <SelectBox value={value} onChange={onChange}>
      {yearOptions.map((year) => (
        <option value={year.value}>{year.option}</option>
      ))}
    </SelectBox>
  );
};

export default YearSelect;
