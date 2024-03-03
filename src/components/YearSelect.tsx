import { ChangeEvent } from 'react';
import colors from 'src/constants/colors';
import styled from 'styled-components';
import arrowImg from 'src/asset/arrow-down.png';

interface YearSelectProp {
  value: string;
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

  const options = Array.from({ length: currentYear - 1989 }, (_, index) => {
    const year = 1990 + index;
    return year + '년';
  });

  console.log(options);

  return (
    <SelectBox value={value} onChange={onChange}>
      {options.map((year) => (
        <option>{year}</option>
      ))}
    </SelectBox>
  );
};

export default YearSelect;
