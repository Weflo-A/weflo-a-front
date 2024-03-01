import React from 'react';
import colors from 'src/constants/colors';
import styled from 'styled-components';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <StyledInput
      type='text'
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default Input;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid ${colors.basic200};
  background: ${colors.basic50};
  outline: none;

  color: ${colors.basic700};
  /* Caption/C1/Medium */
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */

  &::placeholder {
    color: #aaa;
  }
`;
