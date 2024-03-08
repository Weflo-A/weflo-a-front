import colors from 'src/constants/colors';
import styled from 'styled-components';
import arrowImg from 'src/assets/icon/arrow-down-black.svg';
import { ChangeEvent } from 'react';

export interface Option {
  year: number;
  month: number;
  day: number;
}

interface OrderSelectProp extends React.HTMLAttributes<HTMLSelectElement> {
  value: string;
  onChange: (evnet: ChangeEvent<HTMLSelectElement>) => void;
  options: Option[] | null;
}

const StyledSelect = styled.select`
  min-width: 11.875rem;
  display: flex;
  padding: 0.6875rem 0.5rem 0.6875rem 0.75rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.375rem;
  border: 1px solid ${colors.basic200};
  color: ${colors.basic700};
  appearance: none;
  background: ${colors.basic50} url(${arrowImg}) no-repeat right 0.5rem center;
  &::-webkit-scrollbar {
    display: none;
  }
  option {
    background: white;
    color: black;
  }
  margin-left: 1.25rem;
`;

const DateSelect = ({ options, onChange, value }: OrderSelectProp) => {
  return (
    <StyledSelect value={value} onChange={onChange}>
      {options?.map((item) => (
        <option value={`${item.year}-${item.month}-${item.day}`}>
          {item.year}년 {item.month}월 {item.day}일
        </option>
      ))}
    </StyledSelect>
  );
};

export default DateSelect;
