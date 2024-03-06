import colors from 'src/constants/colors';
import styled from 'styled-components';
import arrowImg from 'src/assets/icon/arrow-down-black.svg';
import { ChangeEvent } from 'react';
import { Typography } from '@mui/material';

interface OrderSelectProp extends React.HTMLAttributes<HTMLSelectElement> {
  value: string;
  onChange: (evnet: ChangeEvent<HTMLSelectElement>) => void;
  options: string[] | number[];
}

const StyledSelect = styled.select`
  font-size: 0.75rem;
  min-width: 8rem;
  display: flex;
  padding: 0.25rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
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
`;

const OrderSelect = ({ options, onChange, value }: OrderSelectProp) => {
  return (
    <StyledSelect value={value} onChange={onChange}>
      {options.map((item) => (
        <option>{item}</option>
      ))}
    </StyledSelect>
  );
};

export default OrderSelect;
